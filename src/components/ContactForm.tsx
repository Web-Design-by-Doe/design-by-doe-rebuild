"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import toast, { Toaster } from "react-hot-toast";

import verifyReCaptcha from "@/server/actions/verifyReCaptcha";
import { handleFormSubmission } from "@/server/actions";
import validationSchema from "@/utils/validationSchema";
import { FormValues } from "@/utils/validationSchema";

import ErrorMessage from "./Form/ErrorMessage";
import Form from "./Form/Form";

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  });

  const submitForm: SubmitHandler<FormValues> = async (data) => {
    if (!executeRecaptcha) {
      return;
    }

    const reCaptchaToken = await executeRecaptcha("contact_form");
    const reCaptchaResponse = await verifyReCaptcha(reCaptchaToken);

    if (!reCaptchaResponse.body.success) {
      console.error("reCaptcha failed");
      toast.error("reCaptcha failed");
      return;
    }

    const result = await handleFormSubmission(data);

    if (!result?.body.success) {
      console.error(result?.body.error);
      toast.error("Form submission failed");
      return;
    }

    toast.success(
      `Thank you for your enquiry, ${data.first_name}! We will be in touch shortly.`
    );
    reset();
  };

  return (
    <>
      <Toaster />
      <Form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col md-lg:flex-row gap-4">
          <div className="flex flex-col gap-1 w-full">
            <Label htmlFor="first_name" text="First Name" required />
            <input
              id="first_name"
              type="text"
              placeholder="First Name"
              className="input"
              {...register("first_name")}
            />
            {errors.first_name?.message && (
              <ErrorMessage message={errors.first_name.message} />
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <Label htmlFor="last_name" text="Last Name" />
            <input
              id="last_name"
              type="text"
              placeholder="Last Name"
              className="input"
              {...register("last_name")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" text="Email" required />
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="input"
            {...register("email")}
          />
          {errors.email?.message && (
            <ErrorMessage message={errors.email.message} />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="sms_number" text="SMS Number" />
          <input
            id="sms_number"
            type="tel"
            placeholder="SMS Number"
            className="input"
            {...register("sms_number")}
          />
          {errors.sms_number?.message && (
            <ErrorMessage message={errors.sms_number.message} />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="message" text="Enquiry" required />

          <textarea
            id="message"
            placeholder="Your Enquiry"
            className="input"
            {...register("message")}
          />
          {errors.message?.message && (
            <ErrorMessage message={errors.message.message} />
          )}
        </div>
        <div className="m-auto">
          <button type="submit" className="cta">
            Submit
          </button>
        </div>
      </Form>
    </>
  );
}

const Label = ({
  htmlFor,
  text,
  required,
}: {
  htmlFor: string;
  text: string;
  required?: boolean;
}) => (
  <label htmlFor={htmlFor} className="cursor-pointer text-[20px]">
    {text} {required && <span className="text-accent">*</span>}
  </label>
);

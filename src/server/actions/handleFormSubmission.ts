"use server";

import { ID, Databases } from "appwrite";

import validationSchema from "@/utils/validationSchema";
import appwrite from "@/utils/appwriteConfig";
import { FormValues } from "@/utils/validationSchema";

import { ErrorResponse, Resend } from "resend";
import {
  OnSubmitCustomerEmail,
  OnSubmitNotificationEmail,
} from "../../../emails";

export default async function handleFormSubmission(formData: FormValues) {
  const { client, DATABASE_ID, COLLECTION_ID } = appwrite();
  const database = new Databases(client);

  const { first_name, last_name, email, sms_number, message } = formData;

  try {
    const validation = validationSchema.safeParse(formData);

    if (validation.error) {
      throw { error: validation.error.format() };
    }

    const response = Promise.all([
      database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        first_name: first_name,
        last_name: last_name,
        email: email,
        sms_number: sms_number,
        message: message,
      }),
      sendVerificationEmails(formData),
    ]);

    if (!response) {
      throw { error: "Failed to submit form" };
    }

    return {
      status: 200,
      body: {
        success: true,
        message: "Form submitted successfully",
      },
    };
  } catch (error: any) {
    return {
      status: 500,
      body: {
        success: false,
        error: error.error,
      },
    };
  }
}

export async function sendVerificationEmails({
  first_name,
  last_name,
  email,
  sms_number,
  message,
}: FormValues) {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);
  const resendEmail = process.env.NEXT_PUBLIC_RESEND_EMAIL!;

  try {
    const { data: data1, error: error1 } = await resend.emails.send({
      from: resendEmail,
      to: email,
      subject: "Thank you for your enquiry!",
      react: OnSubmitCustomerEmail({ first_name }),
    });

    const { data: data2, error: error2 } = await resend.emails.send({
      from: resendEmail,
      to: resendEmail,
      subject: "New message from your website!",
      react: OnSubmitNotificationEmail({
        first_name,
        last_name,
        email,
        sms_number,
        message,
      }),
    });

    if (error1 || error2) {
      throw { error: "Failed to send verification emails" };
    }

    return {
      status: 200,
      body: {
        success: true,
        message: "Verification emails sent successfully",
      },
    };
  } catch (error: any) {
    return {
      status: 500,
      body: {
        success: false,
        error: error,
      },
    };
  }
}

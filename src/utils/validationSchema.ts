import { z } from "zod";

const regex = /^(?:\+?1[-.●]?)?\(?(\d{3})\)?[-.●]?(\d{3})[-.●]?(\d{4})$/;

const validationSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(1, { message: "Your first name is required" }),
  last_name: z.string().trim(),
  email: z
    .string()
    .trim()
    .min(1, { message: "Your email is required" })
    .email({ message: "Invalid email address" }),
  sms_number: z.string().refine((value) => regex.test(value)),
  message: z.string().trim().min(1, { message: "Your message is required" }),
  // captcha: z.boolean().refine((value) => value !== true, {
  //   message: "Please complete the captcha",
  // }),
});

export default validationSchema;

export type FormValues = z.infer<typeof validationSchema>;

import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  OnSubmitCustomerEmail,
  OnSubmitNotificationEmail,
} from "../../../../emails";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);
const resendEmail = process.env.NEXT_PUBLIC_RESEND_EMAIL!;

export async function POST(request: Request) {
  const { firstName, lastName, email, number, message } = await request.json();

  const { data: data1, error: error1 } = await resend.emails.send({
    from: resendEmail,
    to: email,
    subject: "Thank you for your enquiry!",
    react: OnSubmitCustomerEmail({ firstName }),
  });

  const { data: data2, error: error2 } = await resend.emails.send({
    from: resendEmail,
    to: resendEmail,
    subject: "New message from your website!",
    react: OnSubmitNotificationEmail({
      firstName,
      lastName,
      email,
      number,
      message,
    }),
  });

  if (error1 || error2) {
    return NextResponse.json({
      status: 500,
      body: "Internal Server Error",
    });
  }

  return NextResponse.json({
    status: 200,
    body: JSON.stringify({ data1, data2 }),
  });
}

"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message")!;
  const email = formData.get("senderEmail")!;

  if (!validateString(message, 5000) && !validateString(email, 100)) {
    return {
      error: "One or more invalid inputs, please try again.",
    };
  }

  let data;

  try {
    data = resend.emails.send({
      from: "Kaiden Riley <oboarding@resend.dev>",
      to: "kaiden01@outlook.de",
      subject: "Message from contact form",
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

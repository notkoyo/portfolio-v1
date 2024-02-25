"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-5 text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:kaiden01@outlook.de">
          kaiden01@outlook.de
        </a>{" "}
        or through the form below.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          return error ? toast.error("Something went wrong, please try again later.") : toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="borderBlack h-14 rounded-xl px-4"
          placeholder="Your email..."
          required
          maxLength={100}
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-xl p-4"
          name="message"
          placeholder="Your message..."
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

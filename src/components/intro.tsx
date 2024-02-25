"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import portrait from "../../public/portrait.jpeg";
import { motion } from "framer-motion";
import { SiReact, SiTypescript } from "react-icons/si";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={portrait}
              alt="Kaiden Portrait"
              height={192}
              width={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.3rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋🏼
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 cursor-default px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Kaiden.</span> I'm a{" "}
        <span className="font-bold">junior full-stack developer</span> from the{" "}
        <span className="font-bold">UK</span>. I enjoy creating{" "}
        <span className="italic">beautifully</span>{" "}
        <span className="underline">responsive</span>{" "}
        <span className="italic">websites and apps</span>.
        <span className="flex items-center justify-center gap-4">
          My focus is <SiReact color="#61dbfb" /> &{" "}
          <SiTypescript color="#3178c6" />
        </span>
      </motion.h1>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col justify-center gap-3 px-4 text-lg font-medium sm:flex-row"
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition duration-300 hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-95"
          aria-label="contact me button"
        >
          Contact Me Here{" "}
          <BsArrowRight className="opacity-70 transition duration-200 group-hover:translate-x-1" />
        </Link>
        <a
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition duration-300 hover:scale-105 focus:scale-105 active:scale-95"
          href="/kaidenCV.pdf"
          download
          aria-label="download cv button"
        >
          Download CV{" "}
          <HiDownload className="opacity-70 transition duration-200 group-hover:translate-y-1" />
        </a>
        <a
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 outline-none transition duration-300 hover:scale-105 focus:scale-105 active:scale-95"
          href="https://linkedin.com/in/kaiden-riley"
          target="_blank"
          title="LinkedIn"
          aria-label="linkedin profile link"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 outline-none transition duration-300 hover:scale-105 focus:scale-105 active:scale-95"
          href="https://github.com/notkoyo"
          target="_blank"
          title="GitHub"
          aria-label="github profile link"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}

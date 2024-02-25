"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-7 sm:mb-40"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-5">
        During my move to Berlin to study{" "}
        <span className="font-medium">German</span>, I decided to pursue
        programming in my spare time, which very quickly became a passion of
        mine. When I arrived back in England, I enrolled in a coding bootcamp
        with{" "}
        <a
          href="https://northcoders.com"
          className="font-medium underline hover:text-gray-600"
        >
          Northcoders
        </a>{" "}
        and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is
        seeing the final product of the things I build. I{" "}
        <span className="font-medium">love</span> the feeling of being proud of
        the things I create and{" "}
        <span className="font-medium">figuring out solutions</span> to any
        problems I face along the way.
      </p>

      <p className="mb-5">
        My core stack is{" "}
        <span className="font-medium">
          React / Next.js, TypeScript, Tailwind and Supabase
        </span>
        . I am also familiar with Express and PSQL. I am always looking to learn
        new technologies and am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a{" "}
        <span className="font-medium">front-end</span> or{" "}
        <span className="font-medium">full-stack</span> software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching anime, and going for walks. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        solidifying my <span className="font-medium">German</span> language
        skills.
      </p>
    </motion.section>
  );
}

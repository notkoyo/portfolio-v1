"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
    }
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Tech", 0.6);

  return (
    <section
      ref={ref}
      id="tech"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Tech Stack</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-gray-800">
        {skillsData.map((skill, i) => (
          <motion.li
            className="rounded-full border border-black/[0.1] bg-white px-4 py-2"
            key={i}
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
          >
            <div className="flex gap-2 items-center">
              <span className="font-medium">
                {skill.skillName}
              </span>
              <span>
                {skill.skillIcon}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

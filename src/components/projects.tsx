"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./project-card";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} className="mb-28 scroll-mt-28" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, i) => (
          <React.Fragment key={i}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
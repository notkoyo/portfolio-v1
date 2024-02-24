import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section className="mb-28">
      <SectionHeading>My projects</SectionHeading>
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
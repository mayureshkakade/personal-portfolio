"use client";

import Project from "./project";
import React from "react";
import SectionHeading from "../SectionHeading";
import { projectsData } from "@/app/lib/data";
import { useActiveNavSelection } from "@/app/hooks/UseActiveNavSelection";

export default function Projects() {
  const ref = useActiveNavSelection("Projects", { threshold: 0.5 });

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

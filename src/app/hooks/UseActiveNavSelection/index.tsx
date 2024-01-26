"use client";

import { IntersectionOptions, useInView } from "react-intersection-observer";

import { SectionName } from "@/app/lib/types";
import { useActiveSectionContext } from "@/app/context/ActiveSectionContextProvider";
import { useEffect } from "react";

export const useActiveNavSelection = (
  sectionName: SectionName,
  options: IntersectionOptions
) => {
  const { ref, inView } = useInView(options);
  const { setActiveSection, timeLastClicked } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeLastClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection, timeLastClicked]);

  return { ref, inView };
};

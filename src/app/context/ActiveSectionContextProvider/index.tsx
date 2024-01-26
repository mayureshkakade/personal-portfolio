"use client";

import { ActiveSectionContextType, SectionName } from "@/app/lib/types";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSectionContext should be initialized inside ActiveSectionContextProvider"
    );
  }

  return context;
};

export const ActiveSectionContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeLastClicked, setTimeLastClicked] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeLastClicked,
        setTimeLastClicked,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

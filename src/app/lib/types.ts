import { Dispatch, SetStateAction } from "react";

import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeLastClicked: number;
  setTimeLastClicked: Dispatch<SetStateAction<number>>;
};

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  handleChangeTheme: () => void;
};

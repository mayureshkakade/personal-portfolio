"use client";

import { FC, PropsWithChildren, createContext, useContext } from "react";

import { ThemeContextType } from "@/app/lib/types";
import { useTheme } from "@/app/hooks/UseTheme";

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext should be initialized inside ThemeContextProvider"
    );
  }
  return context;
};

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

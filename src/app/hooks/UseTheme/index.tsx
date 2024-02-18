"use client";

import { useEffect, useState } from "react";

import { Theme } from "@/app/lib/types";

const getInitialTheme = (): Theme => {
  if (window === undefined) return "light";
  const localTheme = window.localStorage.getItem("theme") as Theme;
  if (localTheme) {
    return localTheme;
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return {
    theme,
    handleChangeTheme,
  };
};

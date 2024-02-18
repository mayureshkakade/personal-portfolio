"use client";

import { BsMoon, BsSun } from "react-icons/bs";

import React from "react";
import { useThemeContext } from "@/app/context/ThemeContext";

const ThemeSwitch: React.FC = () => {
  const { theme, handleChangeTheme } = useThemeContext();
  return (
    <button
      onClick={handleChangeTheme}
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    >
      {theme === "dark" ? <BsSun /> : <BsMoon />}
    </button>
  );
};
export default ThemeSwitch;

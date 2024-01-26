"use client";

import React, { useState } from "react";

import Link from "next/link";
import clsx from "clsx";
import { links } from "@/app/lib/data";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/app/context/ActiveSectionContextProvider";

const Header: React.FC = () => {
  const { activeSection, setActiveSection, setTimeLastClicked } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map(({ name, hash }) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                  {
                    "text-gray-950": activeSection === name,
                  }
                )}
                href={hash}
                onClick={() => {
                  setActiveSection(name);
                  setTimeLastClicked(Date.now);
                }}
              >
                {name}

                {name === activeSection && (
                  <motion.span
                    layoutId="currentSection"
                    className="rounded-full bg-gray-100 absolute inset-0 -z-10"
                    transition={{
                      type: "spring",
                      damping: 30,
                      stiffness: 380,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;

"use client";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaGitlab } from "react-icons/fa";

import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import profilePic from "../../../../public/profile-picture.png";
import { useActiveNavSelection } from "@/app/hooks/UseActiveNavSelection";
import { useActiveSectionContext } from "@/app/context/ActiveSectionContextProvider";

const Intro: React.FC = () => {
  const { ref } = useActiveNavSelection("Home", { threshold: 0.3 });
  const { setActiveSection, setTimeLastClicked } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilePic}
              alt="Mayuresh portrait"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.15rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Mayuresh.</span> I&apos;m a{" "}
        <span className="font-bold">Senior Fullstack Developer</span> with {" "}
        <span className="font-bold">~6 years</span> of experience. My passion
        lies in <span className="italic">problem-solving</span> using intuitive
        approaches.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeLastClicked(Date.now);
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/MayureshKakadeCV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/mayuresh-kakade-ba4658125/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/mayureshkakade"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://gitlab.com/users/virtualghostmck/starred"
          target="_blank"
        >
          <FaGitlab />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;

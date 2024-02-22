import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import chatConsoleImg from "../../../public/cc-project-1.png";
import photographyPortfolioImg from "../../../public/pp-project-2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BE in Computer Science",
    location: "MIT, Pune",
    description:
      "During my time at MIT Pune, I gained a strong foundation in computer science principles and acquired practical skills through hands-on projects and coursework. This educational background has equipped me with the necessary knowledge and skills to excel in the field of software development",
    icon: React.createElement(LuGraduationCap),
    date: "2014-2018",
  },
  {
    title: "Software Engineer",
    location: "Cybage Software, Pune",
    description:
      "I worked as a full-stack developer and was involved in transitioning a Windows-Form based application into a modern, web-based SaaS application. I developed captivating UI dashboards and widgets utilizing React and JavaScript and built apis using .NET Core 2.2",
    icon: React.createElement(CgWorkAlt),
    date: "2018- 2021",
  },
  {
    title: "Senior Software Development Engineer",
    location: "BridgeNext, Pune (Formerly Emtec Inc)",
    description:
      "I'm now a senior full-stack developer and my stack includes React, Next.js, TypeScript, Nest.js, Apollo Graphql and Sql Server. I actively contribute to architect scalable event-driven systems and collaborate with cross-functional teams to gather requirements. I am also involved in mentoring junior team members, providing guidance on best practices, coding standards, and professional development to foster a culture of learning and growth",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Chat-Console",
    description:
      "A web-based Slack-like chat application developed using ReactJs, Material UI and Firebase. The application allows users to create channels, have discussions and send text messages as well as images to each other",
    tags: ["React", "Material UI", "Firebase"],
    imageUrl: chatConsoleImg,
  },
  {
    title: "Photography Portfolio",
    description:
      "Photography Portfolio Website built using React JS and styled with Bootstrap. Demonstrates lazy loading of images and components. CICD pipeline setup is made using firebase for Gitlab.",
    tags: ["React", "Firebase", "Twilio", "React Spring"],
    imageUrl: photographyPortfolioImg,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "Apollo Graphql",
  "Nest.js",
  "TypeScript",
  "CSS",
  "JavaScript",
  "HTML",
  "Nest.js",
  "Git",
  "Tailwind",
  "Nx",
  "Docker",
  "Firebase",
  "TypeOrm",
  "MS Sql Server",
  "Framer Motion",
  "Fastify",
  "Express",
  "Kafka",
] as const;

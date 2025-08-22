import { CgWorkAlt } from "react-icons/cg";
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
    location: "Bridgenext, Pune",
    description:
      "During my tenure as a Senior Software Development Engineer, I was a key contributor to the development of robust, scalable full-stack applications. My responsibilities included architecting event-driven systems and collaborating with cross-functional teams to gather requirements. I utilized a technology stack that included React, Next.js, TypeScript, Nest.js, Apollo GraphQL, and SQL Server. A significant part of my role involved mentoring junior team members, providing guidance on coding standards and best practices to promote a culture of growth.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Staff Software Engineer",
    location: "Bridgenext, Pune",
    description:
      "As a Staff Software Engineer, I specialize in architecting high-performance, scalable systems that directly drive business outcomes. My work includes leveraging Apollo Federation to slash latency by 10% and implementing React accessibility features that increased user reach by 5%. I also built an event-driven solution with Kafka and MongoDB capable of processing up to a million records, all while enhancing team efficiency by mentoring junior developers and promoting best practices.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Photography Portfolio",
    description:
      "Re-platformed a React SPA to Next.js 13 to unlock a major performance boost via SSR/ISR. Automated the CI/CD pipeline with GitHub Actions and Vercel and integrated the Google Drive API, empowering the client to manage their portfolio photos directly.",
    tags: ["React", "Vercel", "Next.js", "Google Drive"],
    imageUrl: photographyPortfolioImg,
    repoUrl: "https://github.com/mayureshkakade/photography-portfolio",
  },
  {
    title: "Chat-Console",
    description:
      "Created a Slack-like chat application with ReactJS, Material UI, and Firebase, enabling users to create channels, have discussions, and share text and images in a real-time, collaborative environment.",
    tags: ["React", "Material UI", "Firebase"],
    imageUrl: chatConsoleImg,
    repoUrl: "https://gitlab.com/virtualghostmck/chat-app",
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "Apollo Graphql",
  "Nest.js",
  "TypeScript",
  "Nest.js",
  "Fastify",
  "Express",
  "Kafka",
  "CSS",
  "JavaScript",
  "HTML",
  "Git",
  "Tailwind",
  "Nx",
  "Docker",
  "Firebase",
  "TypeOrm",
  "MS Sql Server",
  "Framer Motion",
] as const;

"use client";

import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { useActiveNavSelection } from "@/app/hooks/UseActiveNavSelection";

export default function About() {
  const { ref } = useActiveNavSelection("About", { threshold: 0.75 });

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I completed my Bachelor of Engineering in
        <span className="italic"> Computer Science </span>from{" "}
        <span className="font-medium"> MIT, Pune </span>in 2018. My focus lies
        in enhancing user experience by crafting seamless interfaces and user
        experiences. On the backend, I have designed and implemented
        <span className="italic"> microservices-based </span>architecture using{" "}
        <span className="font-medium">Apollo Federation </span>ensuring
        scalability and maintainability of complex systems. I have also worked
        with<span className="italic"> event-driven </span>systems using
        <span className="font-medium"> Confluent Kafka</span>, enabling reliable
        communication between microservices. I have extensive experience in
        implementing<span className="italic"> monitoring and logging </span>
        solutions for services, leveraging tools like
        <span className="font-medium"> New Relic </span>to ensure performance
        optimization and proactive issue resolution.
      </p>

      <p className="mb-3">
        I am also proficient in front-end technologies such as
        <span className="font-medium"> React, TypeScript, and Next.js</span>,
        enabling me to create intuitive user interfaces. With a strong
        foundation in computer science and a commitment to continuous learning,
        I strive to stay updated with the latest trends and technologies in the
        software development industry. After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">In my free time</span>, I enjoy diving into
        various <span className="font-medium">video game </span>worlds to
        challenge myself and experience captivating narratives. I&apos;m also a{" "}
        <span className="font-medium">movie enthusiast</span> and love immersing
        myself in captivating films across various genres. I love immersing
        myself in different cultures, cuisines, and landscapes by{" "}
        <span className="italic">traveling and exploring</span> new places. I
        also enjoy staying active by playing
        <span className="font-medium"> badminton and table tennis</span>. These
        sports not only keep me physically fit but also provide a fun and{" "}
        <span className="italic">competitive </span>
        outlet to challenge myself and socialize with friends.
      </p>
    </motion.section>
  );
}

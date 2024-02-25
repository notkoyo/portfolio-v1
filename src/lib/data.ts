import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/corpcomment.png";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";
import {
  HTMLIcon,
  CSSIcon,
  JSIcon,
  TSIcon,
  ReactIcon,
  NextJSIcon,
  NodeJSIcon,
  GitIcon,
  TailwindIcon,
  BootstrapIcon,
  SupabaseIcon,
  ExpressIcon,
  PSQLIcon,
  FramerMotionIcon,
} from "@/components/skill-icons";

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
    name: "Tech",
    hash: "#tech",
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  { skillName: "HTML", skillIcon: React.createElement(HTMLIcon) },
  { skillName: "CSS", skillIcon: React.createElement(CSSIcon) },
  { skillName: "JavaScript", skillIcon: React.createElement(JSIcon) },
  { skillName: "TypeScript", skillIcon: React.createElement(TSIcon) },
  { skillName: "React", skillIcon: React.createElement(ReactIcon) },
  { skillName: "Next.js", skillIcon: React.createElement(NextJSIcon) },
  { skillName: "Node.js", skillIcon: React.createElement(NodeJSIcon) },
  { skillName: "Git", skillIcon: React.createElement(GitIcon) },
  { skillName: "Tailwind", skillIcon: React.createElement(TailwindIcon) },
  { skillName: "Bootstrap", skillIcon: React.createElement(BootstrapIcon) },
  { skillName: "Supabase", skillIcon: React.createElement(SupabaseIcon) },
  { skillName: "Express", skillIcon: React.createElement(ExpressIcon) },
  { skillName: "PostgreSQL", skillIcon: React.createElement(PSQLIcon) },
  { skillName: "Framer Motion", skillIcon: React.createElement(FramerMotionIcon) },
] as const;

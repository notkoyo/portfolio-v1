import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { MdComputer } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import congregateImg from "../../public/congregateImg.png";
import ncNewsAPIImg from "../../public/ncNewsAPIImg.png";
import ncNewsImg from "../../public/ncNewsImg.png";
import portfolioImg from "../../public/portfolioImg.png";
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
  SQLIcon,
  JestIcon,
  NetlifyIcon,
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
    title: "Graduated Northcoders Bootcamp",
    location: "Manchester, England",
    description:
      "I graduated after 13 weeks of intense studying. I'm currently looking for a position as a front-end or full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "November 2023 - February 2024",
  },
  {
    title: "Self Studying Programming",
    location: "Manchester, England",
    description: "I completed various HTML, CSS, Responsive Web Design, JS and React courses with Codecademy and FreeCodeCamp.",
    icon: React.createElement(MdComputer),
    date: "June 2023 - November 2023"
  },
  {
    title: "German Language Course",
    location: "Berlin, Germany",
    description:
      "I completed a German language course at VICTORIA University in Berlin, where I achieved level B2 in German.",
    icon: React.createElement(LuGraduationCap),
    date: "October 2022 - August 2023",
  },
  {
    title: "Bar Team Leader",
    location: "Manchester, England",
    description:
      "I worked as a bar team lead, managing bar operations, mainting efficient inventory control and ensuring seamless service during events.",
    icon: React.createElement(BsBriefcase),
    date: "April 2019 - May 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Site",
    description:
      "My portfolio site to showcase my projects, experience and get to know all about me!",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
  },
  {
    title: "Congregate",
    description:
      "A full-stack event creating and finding app, built as a group for my final project for Northcoders.",
    tags: ["React", "Next.js", "Supabase", "Tailwind", "Framer Motion", "NextUI", "GoogleMaps API"],
    imageUrl: congregateImg,
  },
  {
    title: "NC News API",
    description:
      "An API built with Express and PSQL to serve user data and comments, hosted with Render.",
    tags: ["Express", "PSQL", "CORS", "Render"],
    imageUrl: ncNewsAPIImg,
  },
  {
    title: "NC News",
    description:
      "Front-end project to visualise the data served by the NC News API, hosted with Netlify.",
    tags: ["React", "JavaScript", "Axios", "Tailwind", "DaisyUI"],
    imageUrl: ncNewsImg,
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
  { skillName: "Jest", skillIcon: React.createElement(JestIcon) },
  { skillName: "Git", skillIcon: React.createElement(GitIcon) },
  { skillName: "Netlify", skillIcon: React.createElement(NetlifyIcon) },
  { skillName: "Tailwind", skillIcon: React.createElement(TailwindIcon) },
  { skillName: "Bootstrap", skillIcon: React.createElement(BootstrapIcon) },
  { skillName: "Supabase", skillIcon: React.createElement(SupabaseIcon) },
  { skillName: "Express", skillIcon: React.createElement(ExpressIcon) },
  { skillName: "PostgreSQL", skillIcon: React.createElement(PSQLIcon) },
  { skillName: "SQL", skillIcon: React.createElement(SQLIcon) },
  { skillName: "Framer Motion", skillIcon: React.createElement(FramerMotionIcon) },
] as const;

import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";
import PROJECT_IMG_7 from "../assets/images/project-7.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: ["JavaScript", "TypeScript", "React 19", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: ["Node.js", "Express", "Python", "C++", "Java"],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: ["MongoDB", "Prisma ORM", "Neon Postgres", "Redis"],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: ["Linux", "Docker", "AWS", "Vercel", "Git", "CI/CD"],
  },
];

export const TECH_STACK = [
  "Shadcn/ui",
  "Go",
  "CSS3",
  "Inngest",
  "Better Auth",
  "Polar",
  "OpenAI integration",
  "CodeRabbit",
  "Stream",
  "Claude",
  "Gemini",
  "tRPC",
  "Sentry",
];

export const STATS = [
  { number: "10+", label: "Projects Completed" },
  { number: "5", label: "Countries" },
  { number: "2+", label: "Years of Experience" },
  { number: "10+", label: "Clients" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "My AI (AI SaaS)",
    description:
      "An AI-driven video conferencing app that enables real-time calls with intelligent agents, automatic summaries, transcripts, and contextual AI chat. It delivers a seamless post-call experience with recordings, transcript search, and responsive UI.",
    image: PROJECT_IMG_1,
    tags: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS v4",
      "Shadcn/ui",
      "Stream Video SDK",
      "Stream Chat SDK",
      "OpenAI API",
      "Inngest",
      "Polar",
      "Better Auth",
    ],
    liveUrl: "https://ai-call-app-ochre.vercel.app/sign-in",
    githubUrl: "https://github.com/gutsyParth/AICallApp",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Developer Portfolio",
    description:
      "A modern, responsive portfolio website using React, Tailwind CSS, and Framer Motion with elegant animations and smooth transitions. Integrated a dark/light mode toggle and dynamic project showcases to highlight work interactively.",
    image: PROJECT_IMG_2,
    tags: [
      "React 19",
      "Tailwind CSS v4",
      "Framer Motion",
      "Lucide React",
      "React Icons",
      "EmailJS",
      "Vite",
    ],
    liveUrl: "https://dev-portfolio-rho-eight.vercel.app/",
    githubUrl: "https://github.com/gutsyParth/dev-portfolio",
    featured: true,
    category: "Full Stack",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "Aug 2025 - Present",
    title: "Associate 2",
    company: "PwC",
    description:
      "Led full-stack development of advanced NOC and client-facing dashboards, driving real-time data visualization, automated alert systems, and scalable backend architecture using Node.js, Redis, and cloud platforms (AWS/GCP). Oversaw code quality, mentoring, testing strategies, and CI/CD pipelines, ensuring secure authentication, WebSocket integrations, and high-performance, mobile-first frontend applications.",
    icon: Briefcase,
    color: "bg-red-500",
  },
  {
    year: "Aug 2024 - Aug 2025",
    title: "Associate",
    company: "PwC",
    description:
      "Designed and enhanced end-to-end dashboards for Cybersecurity monitoring, implementing REST/GraphQL APIs, real-time notifications, and event-driven workflows using Node.js, Redis, and AWS Lambda. Collaborated on CI/CD pipelines, database optimization (SQL/PostgreSQL & NoSQL), and responsive frontend development with React, Next.js, and Shadcn/ui.",
    icon: Briefcase,
    color: "bg-orange-500",
  },
  {
    year: "Feb 2024 - Aug 2024",
    title: "Intern and Campus Ambassador",
    company: "PwC",
    description:
      "Developed and maintained Cybersecurity NOC dashboards using React.js, Next.js, TypeScript, and Tailwind CSS, integrating real-time data and responsive UI features. Assisted in backend API development with Node.js/Express, Redis caching, and database management, while participating in Git-based version control and code reviews.",
    icon: Briefcase,
    color: "bg-yellow-500",
  },
  {
    year: "Dec 2022 - Feb 2024",
    title: "S.D.E. intern",
    company: "EMSEC, U.K.",
    description:
      "Handled full-time software development responsibilities during internship, building Python/Django solutions, automating alerts, and managing Debian Linux systems. Leveraged a full-stack tech stack including Qt Creator, Next.js, JavaScript, TypeScript, C++, Java, HTML, CSS, Redis, and Linux to deliver reliable, user-focused features.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2020 - 2024",
    title: "Bachelor Of Technology",
    company: "Computer Science and Engineering",
    description:
      "Comprehensive Computer Science and Engineering curriculum covering mathematics, programming, algorithms, computer architecture, operating systems, databases, networks, and theory of computation. Developed strong foundations in full-stack software development, problem-solving, and system design principles.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://twitter.com",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-100",
  },
  {
    name: "Email",
    icon: Mail,
    url: "parth.10june@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "parth.10june@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+918707318794",
  },
];

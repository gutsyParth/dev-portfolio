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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventor",
    image: PROJECT_IMG_1,
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Blog App with AI Post Generator",
    description:
      "A full-stack blog app using the MERN stack - with full Markdown support, tag filtering, and an integr",
    image: PROJECT_IMG_2,
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "https://youtu.be/tUnGudIBBjQ",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team chat, and advanced analytics dashb",
    image: PROJECT_IMG_3,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
    liveUrl: "https://youtu.be/fZK57PxKC-0",
    githubUrl: "#",
    featured: true,
    category: "Web App",
  },
  {
    id: 4,
    title: "AI-Powered Interview Prep App",
    description:
      "A smart AI-powered Interview Preparation App using the MERN stack - along with the Gemini API for int",
    image: PROJECT_IMG_4,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
    liveUrl: "https://youtu.be/yKB90Ym-ao4",
    githubUrl: "#",
    featured: false,
    category: "Web App",
  },
  {
    id: 5,
    title: "Resume Builder App",
    description:
      "A fully functional Resume Builder App using the MERN stack along with Tailwind CSS for a clean, modern",
    image: PROJECT_IMG_5,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
    liveUrl: "https://youtu.be/q3_TFpkjLk8",
    githubUrl: "#",
    featured: false,
    category: "Web App",
  },
  {
    id: 6,
    title: "Expense Tracker App",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and",
    image: PROJECT_IMG_6,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
    liveUrl: "https://youtu.be/PQnbtnsYUho",
    githubUrl: "#",
    featured: true,
    category: "Web App",
  },
  //   {
  //     id: 7,
  //     title: "Polling App",
  //     description:
  //       "Polling app with features like user authentication, creating polls, voting, bookmarking, closing p",
  //     image: PROJECT_IMG_7,
  //     tags: ["React", "Framer Motion", "Tailwind", "Vercel"],
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     featured: false,
  //     category: "Frontend",
  //   },
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "First Internship",
    company: "TechStart Inc.",
    description:
      "Joined as a frontend intern, working with React and learning modern development practices. Contributed",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Computer Science Degree",
    company: "University of Technology",
    description:
      "Graduated with honors, specializing in web technologies and software engineering. Led the final year",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Promoted to full-time developer role. Built end-to-end applications using MERN stack and led junior",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "2024",
    title: "Freelance & Open Source",
    company: "Independent",
    description:
      "Started freelancing and contributing to open source projects. Launched 3 successful web applications",
    icon: Award,
    color: "bg-pink-500",
  },
  {
    year: "2025",
    title: "Senior Developer",
    company: "Present",
    description:
      "Currently building innovative solutions and exploring new technologies like AI integration and advanced",
    icon: Zap,
    color: "bg-cyan-500",
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

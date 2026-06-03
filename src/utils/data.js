import {
  Code2,
  GraduationCap,
  Briefcase,
  Rocket,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Building scalable, responsive enterprise interfaces",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Designing robust APIs and distributed backend systems",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Optimizing scalable data storage and caching layers",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Deploying containerized applications and cloud services",
    skills: [
      "Docker",
      "AWS EC2",
      "CI/CD",
      "GitHub Actions",
      "RabbitMQ",
      "Linux",
      "Splunk",
    ],
  },
];

export const TECH_STACK = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Spring Boot",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "RabbitMQ",
  "Docker",
  "AWS EC2",
  "Socket.IO",
  "GraphQL",
  "WebSockets",
  "CI/CD",
  "System Design",
];

export const STATS = [
  { number: "2+", label: "Years of Experience" },
  { number: "10+", label: "Production Projects" },
  { number: "3x", label: "GATE Qualified" },
  { number: "Top 30", label: "PwC Hackathon Rank" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Feastly (Microservices Food Delivery Platform)",
    description:
      "Engineered a scalable microservices-based food delivery platform with role-based access control, JWT authentication, Google OAuth, and real-time order synchronization. Built distributed services using RabbitMQ and Socket.IO with secure Stripe and Razorpay payment workflows, rider tracking, and Dockerized AWS deployment.",
    image: PROJECT_IMG_1,
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RabbitMQ",
      "Socket.IO",
      "Docker",
      "AWS EC2",
      "Stripe",
      "Razorpay",
    ],
    liveUrl: "https://ai-call-app-ochre.vercel.app/sign-in",
    githubUrl: "https://github.com/gutsyParth/AICallApp",
    featured: true,
    category: "Microservices",
  },
  {
    id: 2,
    title: "Whispr (Secure Real-Time Chat)",
    description:
      "Architected a privacy-centric real-time chat platform supporting temporary anonymous communication using Next.js, ElysiaJS, Redis, and WebSockets. Implemented ephemeral room state management with automatic TTL cleanup and low-latency real-time messaging workflows.",
    image: PROJECT_IMG_2,
    tags: [
      "Next.js",
      "TypeScript",
      "Redis",
      "ElysiaJS",
      "WebSockets",
      "Tailwind CSS",
      "Real-Time Systems",
    ],
    liveUrl: "https://whispr-flame.vercel.app/",
    githubUrl: "https://github.com/gutsyParth/whispr",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "My AI (AI Video Conferencing Platform)",
    description:
      "Built a high-performance React-based video conferencing platform featuring live meetings, AI-generated summaries, real-time transcripts, and asynchronous API integrations for intelligent post-call workflows.",
    image: PROJECT_IMG_3,
    tags: [
      "React",
      "TypeScript",
      "WebRTC",
      "REST APIs",
      "Real-Time Communication",
    ],
    liveUrl: "https://ai-call-app-ochre.vercel.app/sign-in",
    githubUrl: "https://github.com/gutsyParth/AICallApp",
    featured: true,
    category: "Full Stack",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "Feb 2024 - Present",
    title: "Software Engineer (Associate 2)",
    company: "PwC Acceleration Center India",
    description:
      "Architecting enterprise applications for automotive quoting and lending risk domains using React.js, FastAPI, and Spring Boot. Built scalable batch-processing systems with Celery and Redis, optimized PostgreSQL-backed APIs, implemented OCR-integrated microservices with ABBYY FlexiCapture and Drools, and improved observability using Splunk, audit logging, and distributed tracing.",
    icon: Briefcase,
    color: "bg-red-500",
  },
  {
    year: "Dec 2022 - Jul 2024",
    title: "Software Engineer Intern / Contract Engineer",
    company: "EMSEC Pvt. Ltd.",
    description:
      "Engineered backend REST APIs and dynamic network interface detection systems using Python and Django for Debian Linux deployments. Built full-stack security monitoring dashboards and automated event-driven alert delivery systems for cybersecurity operations.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2020 - 2024",
    title: "Bachelor of Technology",
    company: "Computer Science and Engineering",
    description:
      "Built strong foundations in algorithms, operating systems, databases, computer networks, system design, and scalable software engineering while actively developing full-stack applications and solving competitive programming problems.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
];

export const PASSIONS = [
  {
    icon: Rocket,
    title: "Distributed Systems",
    description:
      "Designing scalable backend architectures and event-driven systems",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description:
      "Optimizing APIs, databases, and real-time application workflows",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Exploring system design, cloud infrastructure, and modern engineering practices",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/gutsyParth",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/parth-yadav-sde/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:parth.10june@gmail.com",
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
    value: "+91 87073 18794",
  },
];

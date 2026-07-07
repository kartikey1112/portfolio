import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  codingNinjas,
  innostax,
  postgres,
  java,
  sql,
  prisma,
  founder,
  ceo,
  cody
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Engineer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
  {
    title: "Quick Learner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Teaching Assistant",
    company_name: "Coding Ninjas",
    icon: codingNinjas,
    iconBg: "#ffffff",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Mentored students through Data Structures and Algorithms in Java, providing hands-on support with comprehension and practical implementation.",
      "Collaborated with instructors to foster an inclusive learning environment, guiding students through challenges and sharpening my own communication skills.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "Innostax Tech LLC (EasyGen)",
    icon: innostax,
    iconBg: "#ffffff",
    date: "May 2023 - July 2025",
    points: [
      "Migrated frontend auth from Memberstack to Supabase Auth with OAuth 2.0, hardening the login flow and reducing third-party surface area.",
      "Implemented secure Google sign-in and an OTP-based auth flow with Resend, covering the email-entry, verify, and resend states.",
      "Refactored data fetching by replacing Next.js API route logic with React Query — gaining request de-duplication, caching, and reactive invalidation.",
      "Developed a role-based onboarding flow with persistent client state, reducing drop-off by 20%.",
      "Integrated multiple LLM providers behind typed Enums that cleanly separate text-generation vs. input-processing models in the UI layer.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company_name: "Caspr & Ghost Research",
    icon: web,
    iconBg: "#ffffff",
    date: "Sept 2025 - Present",
    points: [
      "Built a resumable AI chat and report-generation experience over Server-Sent Events — streaming live AI deltas and structured report cards into a Redux Toolkit store with section-level shimmer skeletons.",
      "Hardened the SSE pipeline with event-id replay, tiered exponential backoff, visibility-aware reconnects, and session recreation on 401/403 so runs survive reloads, sleep, and flaky networks.",
      "Shipped multi-format report output (PDF, PPTX, HTML, Markdown, Visual Brief) with version-aware, idempotent generation and per-version state persisted to localStorage.",
      "Owned the design system on shadcn/ui + Tailwind v4 + Radix and the Vite + Docker build pipeline with code-splitting and memory-tuned production builds.",
      "At Ghost Research, led a full UI redesign, reworked SSR/structured data for AI-agent discoverability, and migrated checkout from Razorpay to Stripe.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kartikey is one of the best developers in innostax corporation with such less experience",
    name: "Cody Miles",
    designation: "Founder",
    company: "Ashore App",
    image: cody,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like kartikey does.",
    name: "Prashant Tondapau",
    designation: "CEO and Founder",
    company: "Innostax LLC",
    image: founder,
  },
  {
    testimonial:
      "After kartikey optimized our website, our traffic increased by 50%. We can't thank them enough!     ",
    name: "Sahil Khurana",
    designation: "CTO",
    company: "Innostax Tech LLC",
    image: ceo,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

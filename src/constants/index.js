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
  typescript,
  nextjs,
  mongodb,
  expressjs,
  graphql,
  docker,
  bootstrap,
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
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
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
  // Languages
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  // Frontend
  { name: "React JS", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Redux", icon: redux },
  { name: "Bootstrap", icon: bootstrap },
  // Backend & APIs
  { name: "Node JS", icon: nodejs },
  { name: "Express.js", icon: expressjs },
  { name: "GraphQL", icon: graphql },
  // Databases
  { name: "PostgreSQL", icon: postgres },
  { name: "MongoDB", icon: mongodb },
  // Tools
  { name: "Git", icon: git },
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
    name: "Caspr — AI Research Platform",
    role: "Senior Frontend Engineer",
    description:
      "Built a resumable AI chat and report-generation experience over Server-Sent Events. Streamed live AI deltas into a Redux Toolkit store with section-level shimmer skeletons. Hardened the SSE pipeline with event-id replay, tiered exponential backoff, and visibility-aware reconnects. Shipped multi-format report output (PDF, PPTX, HTML, Markdown) with version-aware, idempotent generation.",
    tags: [
      { name: "React", color: "#61dafb", bg: "rgba(97,218,251,0.08)" },
      { name: "Redux", color: "#764abc", bg: "rgba(118,74,188,0.08)" },
      { name: "TypeScript", color: "#3178c6", bg: "rgba(49,120,198,0.08)" },
      { name: "SSE", color: "#00cea8", bg: "rgba(0,206,168,0.08)" },
      { name: "Tailwind v4", color: "#38bdf8", bg: "rgba(56,189,248,0.08)" },
      { name: "Docker", color: "#2496ed", bg: "rgba(36,150,237,0.08)" },
    ],
    gradient: "linear-gradient(135deg, #1a0533 0%, #3b0764 50%, #1e1b4b 100%)",
    live_link: null,
    source_code_link: null,
  },
  {
    name: "Ghost Research — Report App",
    role: "Senior Frontend Engineer",
    description:
      "Led a full UI redesign of the research-report app. Reworked SSR markup and structured data so AI agents can reliably discover and consume reports. Migrated checkout from Razorpay to Stripe with full webhook-driven UI states and post-purchase access flows.",
    tags: [
      { name: "Next.js", color: "#e2e8f0", bg: "rgba(226,232,240,0.06)" },
      { name: "Stripe", color: "#635bff", bg: "rgba(99,91,255,0.08)" },
      { name: "SSR", color: "#00cea8", bg: "rgba(0,206,168,0.08)" },
      { name: "SEO", color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
    ],
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c2340 100%)",
    live_link: null,
    source_code_link: null,
  },
  {
    name: "TripTava — Flight Booking",
    role: "SDE-1 · Innostax",
    description:
      "Full-stack flight booking platform integrating multiple GDS providers (Amadeus and Travel Boutique India). Built backend APIs for flight search, pricing, seat selection, booking, cancellation and refund. Developed the frontend booking flow and an admin dashboard for operations.",
    tags: [
      { name: "React", color: "#61dafb", bg: "rgba(97,218,251,0.08)" },
      { name: "Node.js", color: "#68a063", bg: "rgba(104,160,99,0.08)" },
      { name: "Express", color: "#e2e8f0", bg: "rgba(226,232,240,0.06)" },
      { name: "PostgreSQL", color: "#336791", bg: "rgba(51,103,145,0.08)" },
      { name: "Amadeus API", color: "#ff6b6b", bg: "rgba(255,107,107,0.08)" },
    ],
    gradient: "linear-gradient(135deg, #042f2e 0%, #065f46 50%, #064e3b 100%)",
    live_link: "https://triptava.com",
    source_code_link: null,
  },
  {
    name: "EasyGen — AI Content Platform",
    role: "SDE · Innostax",
    description:
      "Migrated frontend auth from Memberstack to Supabase Auth with OAuth 2.0 and Google sign-in. Built OTP-based auth flow and replaced Next.js API route fetching with React Query for caching and de-duplication. Developed role-based onboarding that reduced drop-off by 20%. Integrated multiple LLM providers behind typed Enums.",
    tags: [
      { name: "Next.js", color: "#e2e8f0", bg: "rgba(226,232,240,0.06)" },
      { name: "Supabase", color: "#3ecf8e", bg: "rgba(62,207,142,0.08)" },
      { name: "React Query", color: "#ff4154", bg: "rgba(255,65,84,0.08)" },
      { name: "TypeScript", color: "#3178c6", bg: "rgba(49,120,198,0.08)" },
      { name: "LLMs", color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
    ],
    gradient: "linear-gradient(135deg, #1c1917 0%, #44403c 50%, #292524 100%)",
    live_link: null,
    source_code_link: "https://github.com/kartikey1112",
  },
];

export { services, technologies, experiences, testimonials, projects };

import { useEffect, useState } from "react";
import {
  FileCode,
  FileType2,
  Atom,
  Layers,
  Shuffle,
  RefreshCw,
  Paintbrush,
  LayoutGrid,
  Send,
  Share2,
  Globe,
  Server,
  Route,
  Database,
  GitBranch,
  Github,
  Box,
  Triangle,
  CreditCard,
  FileText,
  Search,
  ShieldCheck,
  Users,
  Cloud,
  BrainCircuit,
  Monitor,
  Zap,
} from "lucide-react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
};

const skillCategories = [
  {
    label: "Languages",
    color: "#915eff",
    skills: [
      { name: "JavaScript", Icon: FileCode },
      { name: "TypeScript", Icon: FileType2 },
    ],
  },
  {
    label: "Frontend",
    color: "#00cea8",
    skills: [
      { name: "React.js", Icon: Atom },
      { name: "Next.js", Icon: Layers },
      { name: "Redux", Icon: Shuffle },
      { name: "React Query", Icon: RefreshCw },
      { name: "Tailwind CSS", Icon: Paintbrush },
      { name: "Bootstrap", Icon: LayoutGrid },
      { name: "Axios", Icon: Zap },
    ],
  },
  {
    label: "Backend & APIs",
    color: "#ff6b6b",
    skills: [
      { name: "Node.js", Icon: Server },
      { name: "Express.js", Icon: Route },
      { name: "REST API", Icon: Globe },
      { name: "GraphQL", Icon: Share2 },
    ],
  },
  {
    label: "Databases",
    color: "#ffd700",
    skills: [
      { name: "PostgreSQL", Icon: Database },
      { name: "MongoDB", Icon: Database },
      { name: "Prisma", Icon: Database },
      { name: "SQL", Icon: FileText },
    ],
  },
  {
    label: "Tools & DevOps",
    color: "#4ecdc4",
    skills: [
      { name: "Git", Icon: GitBranch },
      { name: "GitHub", Icon: Github },
      { name: "Docker", Icon: Box },
      { name: "Vercel", Icon: Triangle },
      { name: "Postman", Icon: Send },
      { name: "Stripe", Icon: CreditCard },
      { name: "Swagger", Icon: FileText },
    ],
  },
  {
    label: "Expertise",
    color: "#bf61ff",
    skills: [
      { name: "Full Stack Dev", Icon: Monitor },
      { name: "SEO Optimization", Icon: Search },
      { name: "Auth & AuthZ", Icon: ShieldCheck },
      { name: "Role-Based Access", Icon: Users },
      { name: "Cloud Deployments", Icon: Cloud },
      { name: "DB Optimization", Icon: Database },
      { name: "DSA", Icon: BrainCircuit },
    ],
  },
];

const SkillChip = ({ name, Icon, accentColor }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "rgba(29,24,54,0.8)",
      border: `1px solid ${accentColor}33`,
      borderRadius: 10,
      padding: "8px 14px",
      transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
      cursor: "default",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = accentColor + "88";
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = `0 6px 20px ${accentColor}22`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = accentColor + "33";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <Icon size={16} color={accentColor} strokeWidth={1.75} />
    <span style={{ color: "#cbd5e1", fontSize: 13, whiteSpace: "nowrap" }}>
      {name}
    </span>
  </div>
);

const CategoryBlock = ({ label, color, skills }) => (
  <div style={{ marginBottom: 32 }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 14,
      }}
    >
      <div
        style={{
          width: 3,
          height: 18,
          borderRadius: 2,
          background: color,
          flexShrink: 0,
        }}
      />
      <span style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 600, letterSpacing: "0.05em" }}>
        {label}
      </span>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {skills.map(({ name, Icon }) => (
        <SkillChip key={name} name={name} Icon={Icon} accentColor={color} />
      ))}
    </div>
  </div>
);

/* ── Mobile-only icon grid using the existing SVG tech icons ── */
const MobileIconCard = ({ name, icon }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 72 }}>
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #1d1836 0%, #2d2555 100%)",
        border: "1.5px solid rgba(145,94,255,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 18px rgba(0,0,0,0.45)",
      }}
    >
      <img src={icon} alt={name} style={{ width: 34, height: 34, objectFit: "contain" }} />
    </div>
    <span style={{ color: "#aaa8c0", fontSize: 10, textAlign: "center", lineHeight: "13px" }}>
      {name}
    </span>
  </div>
);

const Tech = () => {
  const isMobile = useMobile();

  return (
    <div>
      {/* Full categorised skill list */}
      <div
        style={{
          background: "rgba(17,14,42,0.6)",
          border: "1px solid rgba(145,94,255,0.15)",
          borderRadius: 16,
          padding: "28px 28px 4px",
          marginBottom: 48,
        }}
      >
        {skillCategories.map((cat) => (
          <CategoryBlock key={cat.label} {...cat} />
        ))}
      </div>

      {/* 3D balls / icon grid for the core visual tech */}
      {isMobile ? (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
          {technologies.map((tech) => (
            <MobileIconCard key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div key={technology.name} className="flex flex-col items-center gap-2">
              <div className="w-28 h-28">
                <BallCanvas icon={technology.icon} />
              </div>
              <span className="text-secondary text-[12px] text-center leading-tight">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");

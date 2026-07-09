import { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

/* On mobile, every BallCanvas eats a WebGL context. Most mobile browsers cap
   at 8–16 contexts total, so with 13 balls + hero + earth + stars some
   contexts silently fail and render as blank white — an error boundary can't
   catch a missing context. We swap to a CSS icon grid on small screens. */
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

const IconCard = ({ name, icon }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      width: 80,
    }}
  >
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #1d1836 0%, #2d2555 100%)",
        border: "1.5px solid rgba(145,94,255,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 18px rgba(0,0,0,0.45)",
      }}
    >
      <img
        src={icon}
        alt={name}
        style={{ width: 38, height: 38, objectFit: "contain" }}
      />
    </div>
    <span
      style={{
        color: "#aaa8c0",
        fontSize: 11,
        textAlign: "center",
        lineHeight: "14px",
      }}
    >
      {name}
    </span>
  </div>
);

const Tech = () => {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
          padding: "0 8px",
        }}
      >
        {technologies.map((tech) => (
          <IconCard key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

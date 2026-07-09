import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({ index, name, description, tags, gradient, live_link, source_code_link, role }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.7)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      style={{
        background: "rgba(29,24,54,0.9)",
        border: "1px solid rgba(145,94,255,0.12)",
        borderRadius: 20,
        overflow: "hidden",
        width: "100%",
        maxWidth: 360,
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(145,94,255,0.4)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(145,94,255,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(145,94,255,0.12)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* gradient header */}
      <div
        style={{
          height: 160,
          background: gradient,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* decorative rings */}
        <div style={{
          position: "absolute", width: 200, height: 200, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.08)", top: -60, right: -60,
        }} />
        <div style={{
          position: "absolute", width: 140, height: 140, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)", bottom: -40, left: -30,
        }} />

        <Layers size={48} color="rgba(255,255,255,0.25)" strokeWidth={1.2} />

        {/* role badge */}
        {role && (
          <div style={{
            position: "absolute", top: 14, left: 14,
            background: "rgba(0,0,0,0.4)", backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 999, padding: "4px 10px",
            color: "rgba(255,255,255,0.85)", fontSize: 11, fontWeight: 500,
          }}>
            {role}
          </div>
        )}

        {/* links */}
        <div style={{ position: "absolute", top: 12, right: 12, display: "flex", gap: 8 }}>
          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.7)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.45)"}
            >
              <Github size={15} />
            </a>
          )}
          {live_link && (
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.7)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0.45)"}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* body */}
      <div style={{ padding: "20px 22px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ color: "#f1f5f9", fontSize: 19, fontWeight: 700, margin: "0 0 8px" }}>
          {name}
        </h3>
        <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: "22px", margin: "0 0 18px", flex: 1 }}>
          {description}
        </p>

        {/* tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tags.map((tag) => (
            <span
              key={tag.name}
              style={{
                padding: "3px 10px",
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 500,
                background: tag.bg,
                color: tag.color,
                border: `1px solid ${tag.color}40`,
              }}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have built</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Projects from my professional experience — each one reflects real-world
        challenges I owned end-to-end, from architecture decisions to shipping
        in production.
      </motion.p>

      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-14 flex flex-wrap gap-7 justify-center"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");

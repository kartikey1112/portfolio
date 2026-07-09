import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Linkedin, Github, Copy, Check, ArrowUpRight } from "lucide-react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";

const contacts = [
  {
    id: "phone",
    Icon: Phone,
    label: "Phone",
    value: "+91 7082509227",
    display: "+91 70825 09227",
    href: "tel:+917082509227",
    accent: "#00cea8",
    bg: "rgba(0,206,168,0.08)",
    copyable: true,
    cta: "Call me",
  },
  {
    id: "linkedin",
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kartikeybajpai",
    display: "kartikeybajpai",
    href: "https://www.linkedin.com/in/kartikeybajpai",
    accent: "#0a66c2",
    bg: "rgba(10,102,194,0.08)",
    copyable: false,
    cta: "Connect",
  },
  {
    id: "github",
    Icon: Github,
    label: "GitHub",
    value: "github.com/kartikey1112",
    display: "kartikey1112",
    href: "https://github.com/kartikey1112",
    accent: "#e2e8f0",
    bg: "rgba(226,232,240,0.06)",
    copyable: false,
    cta: "Follow",
  },
];

const ContactCard = ({ contact, index }) => {
  const [copied, setCopied] = useState(false);
  const { Icon, label, display, value, href, accent, bg, copyable, cta } = contact;

  const copy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      variants={fadeIn("up", "spring", index * 0.18, 0.65)}
      whileHover={{ y: -6, scale: 1.025 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        style={{
          background: bg,
          border: `1px solid ${accent}28`,
          borderRadius: 18,
          padding: "22px 24px",
          position: "relative",
          overflow: "hidden",
          transition: "border-color 0.25s, box-shadow 0.25s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = accent + "70";
          e.currentTarget.style.boxShadow = `0 12px 40px ${accent}20`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = accent + "28";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* animated gradient orb in corner */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 3.5 + index, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: accent,
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", position: "relative" }}>
          {/* icon + text */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: accent + "18",
                border: `1.5px solid ${accent}35`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon size={24} color={accent} strokeWidth={1.6} />
            </div>
            <div>
              <p style={{ color: "#6b7280", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                {label}
              </p>
              <p style={{ color: "#e2e8f0", fontSize: 15, fontWeight: 500, margin: "4px 0 0" }}>
                {display}
              </p>
            </div>
          </div>

          {/* action */}
          {copyable ? (
            <button
              onClick={copy}
              style={{
                background: copied ? accent + "25" : "rgba(255,255,255,0.06)",
                border: `1px solid ${copied ? accent + "60" : "rgba(255,255,255,0.1)"}`,
                borderRadius: 8,
                padding: "6px 10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 5,
                color: copied ? accent : "#9ca3af",
                fontSize: 12,
                fontWeight: 500,
                transition: "all 0.2s",
                flexShrink: 0,
              }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? "Copied!" : "Copy"}
            </button>
          ) : (
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
                gap: 5,
                color: "#9ca3af",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              {cta}
              <ArrowUpRight size={13} />
            </div>
          )}
        </div>

        {/* bottom accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            transformOrigin: "left",
          }}
        />
      </div>
    </motion.a>
  );
};

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

      {/* ── left: contact panel ── */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:w-[500px] w-full flex flex-col justify-center"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* availability pill */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(0,206,168,0.1)",
            border: "1px solid rgba(0,206,168,0.3)",
            borderRadius: 999,
            padding: "7px 16px",
            marginTop: 12,
            marginBottom: 32,
            width: "fit-content",
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#00cea8", display: "inline-block",
            }}
          />
          <span style={{ color: "#00cea8", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>
            Open to new opportunities
          </span>
        </motion.div>

        {/* cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          {contacts.map((c, i) => (
            <ContactCard key={c.id} contact={c} index={i} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ color: "#374151", fontSize: 12, marginTop: 20, textAlign: "center" }}
        >
          ⚡ Typically responds within 24 hours
        </motion.p>
      </motion.div>

      {/* ── right: Earth canvas ── */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

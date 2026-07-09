import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const roles = [
  "Kartikey",
  "Senior Frontend Engineer",
  "Full Stack Developer",
  "UI UX Enthusiast",
  "React & Next.js Expert",
];

const TYPING_SPEED = 70;   // ms per character
const DELETING_SPEED = 35; // ms per character
const PAUSE_AFTER = 1800;  // ms to hold after fully typed

const useTypewriter = (words) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    const tick = () => {
      if (!isDeleting) {
        // typing
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          // fully typed — pause then start deleting
          setTimeout(() => setIsDeleting(true), PAUSE_AFTER);
          return;
        }
      } else {
        // deleting
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
          return;
        }
      }
    };

    const timeout = setTimeout(tick, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words]);

  return displayed;
};

const Hero = () => {
  const typed = useTypewriter(roles);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`}
      >
        {/* left accent */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white flex flex-wrap items-baseline gap-x-[0.3em]`}>
            <span>Hi, I&apos;m</span>

            {/* typed text + blinking cursor */}
            <span style={{ position: "relative", display: "inline-flex", alignItems: "baseline" }}>
              <span
                style={{
                  background: "linear-gradient(90deg, #915eff 0%, #00cea8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {typed}
              </span>

              {/* blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "steps(1)" }}
                style={{
                  display: "inline-block",
                  width: "0.08em",
                  height: "0.85em",
                  background: "#915eff",
                  borderRadius: 2,
                  marginLeft: "0.05em",
                  verticalAlign: "middle",
                  flexShrink: 0,
                }}
              />
            </span>
          </h1>
        </div>
      </div>

      <ComputersCanvas />

      {/* scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "./CanvasErrorBoundary";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0.01, -3, -2.2] : [0.01, -3.25, -1.5]}
        rotation={[-0.01, 0.2, -0.1]}
      />
    </mesh>
  );
};

// Some low-memory mobile GPUs cannot allocate the WebGL context for this
// scene, which previously showed up as a blank white area. We detect that
// case up-front and after a context loss so we can render a graceful fallback
// instead of an empty canvas.
const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};

/* ─── CSS-only animated terminal shown when 3D can't load ─────────────── */
const terminalLines = [
  "$ npx create-next-app@latest",
  "$ npm install @shadcn/ui tailwindcss",
  "$ git commit -m 'feat: add SSE streaming'",
  "$ docker build -t portfolio .",
  "$ npm run build  ✓ built in 5.1s",
];

const TerminalFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div
      style={{
        background: "#1a1a2e",
        border: "1px solid #4a4a6a",
        borderRadius: "12px",
        padding: "20px 24px",
        width: "min(380px, 90%)",
        fontFamily: "'Courier New', monospace",
      }}
    >
      {/* Title bar */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "16px" }}>
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
      </div>
      {/* Animated lines */}
      {terminalLines.map((line, i) => (
        <p
          key={i}
          style={{
            color: i === terminalLines.length - 1 ? "#28c840" : "#aaa8c0",
            fontSize: "12px",
            margin: "6px 0",
            opacity: 0,
            animation: `termFadeIn 0.4s ease forwards`,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {line}
        </p>
      ))}
      {/* Blinking cursor */}
      <span
        style={{
          display: "inline-block",
          width: 8,
          height: 14,
          background: "#915eff",
          marginTop: 8,
          animation: "termBlink 1s step-end infinite",
        }}
      />
    </div>
    <style>{`
      @keyframes termFadeIn { to { opacity: 1; } }
      @keyframes termBlink  { 50% { opacity: 0; } }
    `}</style>
  </div>
);

const Fallback = () => <TerminalFallback />;

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webglOk, setWebglOk] = useState(true);

  useEffect(() => {
    setWebglOk(isWebGLAvailable());

    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (isMobile || !webglOk) {
    return <Fallback />;
  }

  return (
    <CanvasErrorBoundary fallback={<Fallback />}>
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
      }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener(
          "webglcontextlost",
          (event) => {
            event.preventDefault();
            setWebglOk(false);
          },
          false
        );
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
    </CanvasErrorBoundary>
  );
};

export default ComputersCanvas;

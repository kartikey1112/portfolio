import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "./CanvasErrorBoundary";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const GlobeFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div style={{ position: "relative", width: 180, height: 180 }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: "2px solid rgba(145,94,255,0.35)",
          animation: "orbitSpin 6s linear infinite",
          transformOrigin: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 20,
          borderRadius: "50%",
          border: "1.5px solid rgba(145,94,255,0.2)",
          animation: "orbitSpin 4s linear infinite reverse",
          transformOrigin: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 30,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #4a3a8a, #0d0d1a)",
          boxShadow:
            "0 0 40px rgba(145,94,255,0.4), inset -8px -8px 20px rgba(0,0,0,0.6)",
          animation: "globePulse 3s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 30,
          borderRadius: "50%",
          border: "1px solid rgba(145,94,255,0.15)",
          clipPath: "ellipse(50% 25% at 50% 50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          animation: "orbitSpin 3s linear infinite",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: 8,
            height: 8,
            marginTop: -4,
            borderRadius: "50%",
            background: "#915eff",
            boxShadow: "0 0 8px #915eff",
          }}
        />
      </div>
    </div>
    <style>{`
      @keyframes orbitSpin  { to { transform: rotate(360deg); } }
      @keyframes globePulse {
        0%, 100% { box-shadow: 0 0 30px rgba(145,94,255,0.3), inset -8px -8px 20px rgba(0,0,0,0.6); }
        50%       { box-shadow: 0 0 55px rgba(145,94,255,0.55), inset -8px -8px 20px rgba(0,0,0,0.6); }
      }
    `}</style>
  </div>
);

const EarthCanvas = () => {
  return (
    <CanvasErrorBoundary fallback={<GlobeFallback />}>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ antialias: false, preserveDrawingBuffer: false }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default EarthCanvas;

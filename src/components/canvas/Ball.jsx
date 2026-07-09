import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "./CanvasErrorBoundary";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

/* Shown when the canvas or texture fails to load. Renders the same icon
   image inside a styled floating card so the tech section stays complete. */
const IconFallback = ({ icon }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: 72,
        height: 72,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #1d1836 0%, #2d2555 100%)",
        border: "1.5px solid rgba(145,94,255,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        animation: "ballFloat 3s ease-in-out infinite",
      }}
    >
      <img
        src={icon}
        alt="technology icon"
        style={{ width: 42, height: 42, objectFit: "contain" }}
      />
    </div>
    <style>{`
      @keyframes ballFloat {
        0%, 100% { transform: translateY(0);   }
        50%       { transform: translateY(-6px); }
      }
    `}</style>
  </div>
);

const BallCanvas = ({ icon }) => {
  return (
    <CanvasErrorBoundary fallback={<IconFallback icon={icon} />}>
      <Canvas
        frameloop="demand"
        dpr={[1, 1.5]}
        gl={{ antialias: false, preserveDrawingBuffer: false }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default BallCanvas;

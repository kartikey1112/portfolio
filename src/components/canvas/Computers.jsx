import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

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

const Fallback = () => (
  <div className="w-full h-full flex items-center justify-center px-6 text-center">
    <p className="text-secondary text-[15px] max-w-[280px] leading-[24px]">
      Interactive 3D scene isn&apos;t supported on this device — but the rest of
      the portfolio works great. Enjoy exploring!
    </p>
  </div>
);

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

  if (!webglOk) {
    return <Fallback />;
  }

  return (
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
  );
};

export default ComputersCanvas;

"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import GrowthNetwork from "./GrowthNetwork";

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.5], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <GrowthNetwork />
      </Suspense>
    </Canvas>
  );
}

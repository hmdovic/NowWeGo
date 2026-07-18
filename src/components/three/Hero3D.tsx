"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import GlassCluster from "./GlassCluster";

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.5], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <GlassCluster />
        <EffectComposer multisampling={0}>
          <Bloom
            intensity={0.55}
            luminanceThreshold={0.35}
            luminanceSmoothing={0.2}
            mipmapBlur
          />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.15} darkness={0.9} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}

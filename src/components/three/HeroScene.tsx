"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import CanvasBoundary from "./CanvasBoundary";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function HeroScene() {
  const [canRender3D, setCanRender3D] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const frame = requestAnimationFrame(() => setCanRender3D(!reduced && wide));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(61,92,255,0.18),transparent_60%)]" />
      {canRender3D && (
        <div className="absolute inset-0">
          <CanvasBoundary>
            <Hero3D />
          </CanvasBoundary>
        </div>
      )}
    </div>
  );
}

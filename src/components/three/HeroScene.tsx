"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import CanvasBoundary from "./CanvasBoundary";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function HeroScene() {
  const [canRender3D, setCanRender3D] = useState(false);
  const [inView, setInView] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const frame = requestAnimationFrame(() => setCanRender3D(!reduced && wide));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(61,92,255,0.1),transparent_60%)]" />
      {canRender3D && inView && (
        <div className="absolute inset-0">
          <CanvasBoundary>
            <Hero3D />
          </CanvasBoundary>
        </div>
      )}
    </div>
  );
}

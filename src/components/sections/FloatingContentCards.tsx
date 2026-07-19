"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function useTilt(strength = 14) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(springY, [0, 1], [strength, -strength]);
  const rotateY = useTransform(springX, [0, 1], [-strength, strength]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth);
      y.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return { ref, rotateX, rotateY };
}

function ReelsCard() {
  const { rotateX, rotateY } = useTilt(10);
  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="w-40 rounded-3xl border border-ink/10 bg-paper p-2.5 shadow-[0_30px_60px_-15px_rgba(10,10,11,0.18)] sm:w-48"
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-gradient-to-br from-ink to-ink-soft">
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <span className="rounded-full bg-paper/15 px-2 py-1 text-[9px] font-medium uppercase tracking-wider text-paper backdrop-blur-sm">
            Reels
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
          <div className="h-1 w-2/3 overflow-hidden rounded-full bg-paper/20">
            <div className="h-full w-3/4 rounded-full bg-accent" />
          </div>
        </div>
        <div className="absolute right-2.5 bottom-10 flex flex-col items-center gap-3 text-paper/90">
          <span className="text-[10px] font-medium">24.8k</span>
          <span className="text-[10px] font-medium">1.2k</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-1 pt-2 pb-1">
        <span className="text-[10px] font-medium text-ink/60">@nowwego</span>
        <span className="text-[10px] text-ink/40">0:24</span>
      </div>
    </motion.div>
  );
}

function AnalyticsCard() {
  const { rotateX, rotateY } = useTilt(8);
  const bars = [40, 65, 50, 80, 60, 95, 70];
  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      className="w-56 rounded-3xl border border-ink/10 bg-paper p-5 shadow-[0_30px_60px_-15px_rgba(10,10,11,0.18)]"
    >
      <p className="text-[10px] font-medium uppercase tracking-widest text-ink/40">
        Bereik deze maand
      </p>
      <p className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink">
        +284%
      </p>
      <div className="mt-4 flex h-16 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-accent/15"
            style={{ height: `${h}%` }}
          >
            <div
              className="w-full rounded-sm bg-accent"
              style={{ height: i === 5 ? "100%" : "45%" }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function TimelineCard() {
  const { rotateX, rotateY } = useTilt(8);
  const clips = [
    { w: "w-10", color: "bg-accent" },
    { w: "w-16", color: "bg-ink/70" },
    { w: "w-6", color: "bg-accent-soft" },
    { w: "w-12", color: "bg-ink/40" },
    { w: "w-8", color: "bg-accent" },
  ];
  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      className="w-64 rounded-3xl border border-ink/10 bg-paper p-5 shadow-[0_30px_60px_-15px_rgba(10,10,11,0.18)]"
    >
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-medium uppercase tracking-widest text-ink/40">
          Montage
        </p>
        <span className="text-[10px] text-ink/40">01:42</span>
      </div>
      <div className="mt-4 flex gap-1">
        {clips.map((c, i) => (
          <div key={i} className={`h-8 rounded-md ${c.w} ${c.color}`} />
        ))}
      </div>
      <div className="mt-3 flex gap-1">
        {[0.3, 0.6, 0.2, 0.8, 0.5, 0.4, 0.7, 0.3].map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded-full bg-ink/15"
            style={{ height: `${h * 20}px` }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function FloatingContentCards() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
      <div className="absolute right-[6%] top-[16%]">
        <ReelsCard />
      </div>
      <div className="absolute right-[26%] top-[42%]">
        <AnalyticsCard />
      </div>
      <div className="absolute right-[10%] top-[58%]">
        <TimelineCard />
      </div>
    </div>
  );
}

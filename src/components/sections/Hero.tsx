"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import FloatingContentCards from "@/components/sections/FloatingContentCards";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const lines = el.querySelectorAll("[data-line]");
    gsap.fromTo(
      lines,
      { yPercent: 110 },
      { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.1, delay: 0.3 }
    );
    gsap.fromTo(
      "[data-hero-fade]",
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 1, delay: 0.9, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative z-0 flex min-h-[100svh] items-end overflow-hidden pb-20 pt-40 md:pb-28">
      <FloatingContentCards />

      <div className="container-edge relative z-10 w-full">
        <p
          data-hero-fade
          className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-ink/50 opacity-0"
        >
          <span className="h-px w-8 bg-accent" />
          Content Marketing Bureau — Den Haag
        </p>

        <h1
          ref={headlineRef}
          className="font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-ink sm:text-[9vw] lg:text-[6.4vw]"
        >
          <span className="block overflow-hidden">
            <span data-line className="block">
              Content die
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-line className="block">
              niet wordt <span className="italic text-accent">overgeslagen.</span>
            </span>
          </span>
        </h1>

        <div
          data-hero-fade
          className="mt-10 flex flex-col items-start justify-between gap-8 opacity-0 md:flex-row md:items-end"
        >
          <p className="max-w-md text-lg leading-relaxed text-ink/60">
            NowWeGo maakt video en social content die mensen laat stoppen met
            scrollen — en volgers laat worden tot klanten. Voor merken die
            groei serieus nemen.
          </p>
          <MagneticButton href="#contact" cursorLabel="Start">
            Plan een gratis contentscan
          </MagneticButton>
        </div>
      </div>

      <div
        data-hero-fade
        className="absolute bottom-8 right-6 z-10 hidden -rotate-90 items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink/40 opacity-0 md:right-10 lg:flex"
      >
        <span className="h-px w-10 bg-ink/30" />
        Scroll
      </div>
    </section>
  );
}

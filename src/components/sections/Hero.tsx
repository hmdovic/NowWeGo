"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import FloatingContentCards from "@/components/sections/FloatingContentCards";
import MagneticButton from "@/components/ui/MagneticButton";

const MOBILE_STATS = [
  { value: "24.8K", label: "views per Reel" },
  { value: "+284%", label: "bereik" },
  { value: "4.9★", label: "klantscore" },
];

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
    <section className="relative z-0 flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 md:pt-28">
      <FloatingContentCards />

      <div className="container-edge relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          <p
            data-hero-fade
            className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-ink/50 opacity-0"
          >
            <span className="h-px w-8 bg-accent" />
            Content Marketing Bureau — Den Haag
          </p>

          <h1
            ref={headlineRef}
            className="font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-ink sm:text-[9vw] lg:text-[5.5rem] xl:text-[6.5rem]"
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
            className="mt-10 flex flex-col items-start gap-8 opacity-0"
          >
            <div>
              <p className="max-w-md text-lg leading-relaxed text-ink/60">
                NowWeGo maakt video en social content die mensen laat stoppen
                met scrollen — en volgers laat worden tot klanten. Voor merken
                die groei serieus nemen.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-ink/60">
                <span className="tracking-wide text-accent">★★★★★</span>
                <span>4.9/5 — 50+ merken gingen je voor</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <MagneticButton href="#contact" cursorLabel="Start">
                  Plan een gratis contentscan
                </MagneticButton>
                <a
                  href="#werk"
                  data-cursor="view"
                  className="text-sm font-medium text-ink/60 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/50"
                >
                  Bekijk ons werk →
                </a>
              </div>
              <p className="mt-4 text-xs text-ink/40">
                Geen verplichtingen — reactie binnen 24 uur.
              </p>
            </div>
          </div>
        </div>

        <div
          data-hero-fade
          className="mt-14 grid grid-cols-3 gap-4 opacity-0 xl:hidden"
        >
          {MOBILE_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-ink/10 bg-paper-dim px-3 py-4 text-center"
            >
              <p className="font-display text-lg font-semibold text-ink">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-ink/45">
                {stat.label}
              </p>
            </div>
          ))}
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

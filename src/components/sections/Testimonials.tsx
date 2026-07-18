"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/data/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = TESTIMONIALS[active];

  return (
    <section className="border-t border-paper/10 py-28 md:py-40">
      <div className="container-edge">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mb-8 block text-6xl text-accent">&ldquo;</span>
          <div className="min-h-[10rem] md:min-h-[7rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="font-display text-2xl font-medium leading-snug tracking-tight text-balance md:text-3xl">
                  {current.quote}
                </p>
                <p className="mt-8 text-sm text-paper/50">
                  <span className="text-paper/80">{current.name}</span> —{" "}
                  {current.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                data-cursor="view"
                onClick={() => setActive(i)}
                aria-label={`Toon testimonial van ${t.name}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? "w-8 bg-accent" : "w-1.5 bg-paper/20"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

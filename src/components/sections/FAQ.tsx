"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { FAQ } from "@/lib/data/content";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-paper/10 py-28 md:py-40">
      <div className="container-edge grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <h2 className="font-display max-w-md text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
            Veelgestelde vragen
          </h2>
        </Reveal>

        <Reveal as="div" stagger>
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="border-b border-paper/10">
                <button
                  type="button"
                  data-cursor="view"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="font-display text-lg font-medium tracking-tight md:text-xl">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper/20 text-lg transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-7 text-sm leading-relaxed text-paper/50">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

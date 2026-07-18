"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CountUp({
  value,
  suffix = "",
}: {
  value: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const numeric = parseFloat(value);
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el || Number.isNaN(numeric)) return;

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: numeric,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => {
          if (el) el.textContent = obj.val.toFixed(decimals);
        },
      });
    });

    return () => ctx.revert();
  }, [numeric, decimals]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

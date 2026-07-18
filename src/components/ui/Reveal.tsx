"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  y?: number;
  /** stagger direct children instead of animating the wrapper as one block */
  stagger?: boolean;
};

export default function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  y = 48,
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as as React.ComponentType<{
    ref?: React.Ref<HTMLDivElement>;
    className?: string;
    children?: React.ReactNode;
  }>;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.1 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, y, stagger]);

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}

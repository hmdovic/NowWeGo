"use client";

import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  cursorLabel?: string;
  onClick?: () => void;
};

export default function MagneticButton({
  href,
  children,
  className,
  variant = "primary",
  cursorLabel,
  onClick,
}: MagneticButtonProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, {
      x: relX * 0.35,
      y: relY * 0.5,
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(innerRef.current, {
      x: relX * 0.15,
      y: relY * 0.2,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(wrapRef.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    gsap.to(innerRef.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  const styles = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-300",
    variant === "primary"
      ? "bg-paper text-ink hover:bg-accent hover:text-paper"
      : "border border-paper/25 text-paper hover:border-paper/70",
    className
  );

  const content = (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor="view"
      data-cursor-label={cursorLabel ?? ""}
      className="inline-block"
    >
      <div ref={innerRef} className={styles} onClick={onClick}>
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return <button type="button">{content}</button>;
}

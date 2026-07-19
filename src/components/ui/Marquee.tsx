"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  duration?: number;
  reverse?: boolean;
};

export default function Marquee({
  items,
  className,
  duration = 32,
  reverse = false,
}: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 gap-16 pr-16",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap text-2xl font-medium tracking-tight text-ink/35 md:text-3xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

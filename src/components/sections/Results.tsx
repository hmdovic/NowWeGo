import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { RESULTS } from "@/lib/data/content";

export default function Results() {
  return (
    <section className="border-t border-paper/10 py-28 md:py-40">
      <div className="container-edge grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4">
        {RESULTS.map((result, i) => (
          <Reveal key={result.label} delay={i * 0.05}>
            <p className="font-display text-4xl font-medium tracking-tight text-paper sm:text-5xl lg:text-6xl">
              <CountUp value={result.value} suffix={result.suffix} />
            </p>
            <p className="mt-3 max-w-[16ch] text-sm leading-relaxed text-paper/50">
              {result.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

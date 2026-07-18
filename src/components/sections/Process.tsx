import Reveal from "@/components/ui/Reveal";
import { PROCESS } from "@/lib/data/content";

export default function Process() {
  return (
    <section id="werkwijze" className="border-t border-paper/10 bg-ink-soft py-28 md:py-40">
      <div className="container-edge">
        <Reveal className="mb-16 max-w-xl md:mb-24">
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl">
            Onze werkwijze
          </h2>
          <p className="mt-6 text-base leading-relaxed text-paper/50">
            Een beproefd proces, elke keer weer scherp toegepast op jouw
            situatie.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3">
          {PROCESS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <div className="flex items-start gap-5">
                <span className="font-display text-3xl text-paper/20">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display mb-2 text-xl font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-paper/50">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

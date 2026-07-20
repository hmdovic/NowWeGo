import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { WORK } from "@/lib/data/work";

export default function SelectedWork() {
  return (
    <section id="werk" className="border-t border-ink/10 py-20 md:py-28">
      <div className="container-edge">
        <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl">
            Geselecteerd werk
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-ink/50">
            Een greep uit trajecten waarin strategie, productie en
            distributie samenkwamen tot meetbaar resultaat.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {WORK.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <a
                href="#contact"
                data-cursor="view"
                data-cursor-label="Bekijk"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-paper/10 bg-ink"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 30%, rgba(61,92,255,0.35), transparent 60%)",
                  }}
                />
                <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-medium uppercase tracking-widest text-paper/60">
                      {project.industry}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-widest text-paper/60 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  <div>
                    <p className="mb-3 flex flex-wrap gap-2">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-paper/20 bg-ink/30 px-3 py-1 text-[11px] text-paper/70 backdrop-blur-sm"
                        >
                          {s}
                        </span>
                      ))}
                    </p>
                    <h3 className="font-display text-2xl font-medium leading-tight tracking-tight text-paper md:text-3xl">
                      {project.title}
                    </h3>
                    <div className="mt-5 flex items-center justify-between border-t border-paper/15 pt-5">
                      <span className="text-sm font-medium text-paper/80">
                        {project.client}
                      </span>
                      <span className="text-sm font-medium text-accent-soft">
                        {project.result}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

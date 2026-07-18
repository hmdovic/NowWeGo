import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/data/services";

export default function Services() {
  return (
    <section id="services" className="container-edge py-28 md:py-40">
      <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl">
          Alles wat een merk nodig heeft om te groeien.
        </h2>
        <p className="max-w-sm text-base leading-relaxed text-paper/50">
          Eén team, tien disciplines. Geen overdracht, geen ruis — van
          strategie tot uitvoering onder één dak.
        </p>
      </Reveal>

      <Reveal as="div" stagger className="border-t border-paper/10">
        {SERVICES.map((service) => (
          <div
            key={service.number}
            data-cursor="view"
            className="group grid grid-cols-[3rem_1fr] items-center gap-6 border-b border-paper/10 py-7 transition-colors duration-500 hover:bg-paper/[0.03] md:grid-cols-[4rem_1fr_2fr] md:py-9"
          >
            <span className="font-display text-sm text-paper/30">
              {service.number}
            </span>
            <h3 className="font-display text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:text-3xl">
              {service.title}
            </h3>
            <p className="hidden text-sm leading-relaxed text-paper/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block">
              {service.description}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

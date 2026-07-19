import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const SPAN_CLASSES: Record<string, string> = {
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  small: "md:col-span-1",
};

export default function Services() {
  return (
    <section id="services" className="container-edge py-28 md:py-40">
      <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl">
          Alles voor content die presteert.
        </h2>
        <p className="max-w-sm text-base leading-relaxed text-ink/50">
          Eén team, van idee tot cijfers. Geen overdracht, geen ruis — content
          en strategie onder één dak.
        </p>
      </Reveal>

      <Reveal
        as="div"
        stagger
        className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[180px]"
      >
        {SERVICES.map((service) => (
          <div
            key={service.id}
            data-cursor="view"
            className={cn(
              "group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-ink/10 bg-paper-dim p-6 transition-colors duration-500 hover:border-ink/25 md:p-7",
              SPAN_CLASSES[service.span]
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(61,92,255,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <h3 className="font-display relative text-xl font-medium tracking-tight text-ink md:text-2xl">
              {service.title}
            </h3>
            <p className="relative mt-2 max-w-sm text-sm leading-relaxed text-ink/50">
              {service.description}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

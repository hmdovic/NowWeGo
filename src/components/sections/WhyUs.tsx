import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const POINTS = [
  {
    title: "Eén team, geen overdracht",
    description:
      "Strategie, productie en distributie zitten aan dezelfde tafel — vanaf dag één.",
  },
  {
    title: "Gebouwd op data",
    description:
      "Elke beslissing is te herleiden naar een cijfer. Smaak is het startpunt, niet het eindoordeel.",
  },
  {
    title: "Senior op elk niveau",
    description:
      "Geen junior's die leren op jouw budget. Je werkt met mensen die het al hebben bewezen.",
  },
  {
    title: "Resultaat, geen vertoningen",
    description:
      "We meten wat telt: bereik, leads en omzet — niet views zonder betekenis.",
  },
];

export default function WhyUs() {
  return (
    <section id="waarom" className="border-t border-ink/10 py-20 md:py-28">
      <div className="container-edge grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="sticky top-32">
          <h2 className="font-display max-w-md text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
            Waarom bedrijven voor NowWeGo kiezen.
          </h2>
          <div className="relative mt-10 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
            <Image
              src="/photos/team.jpg"
              alt="Het NowWeGo team aan het werk"
              fill
              sizes="(min-width: 1024px) 33vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.05}>
              <span className="mb-4 block text-2xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mb-3 text-xl font-medium tracking-tight">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/50">
                {point.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

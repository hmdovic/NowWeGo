import Reveal from "@/components/ui/Reveal";

const POINTS = [
  {
    title: "Eén team, geen overdracht",
    description:
      "Strategie, design, development en performance zitten aan dezelfde tafel — vanaf dag één.",
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
    title: "Resultaat, geen rapportage",
    description:
      "We meten wat telt: omzet, leads en merkwaarde — niet vertoningen zonder betekenis.",
  },
];

export default function WhyUs() {
  return (
    <section id="waarom" className="border-t border-ink/10 py-28 md:py-40">
      <div className="container-edge grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <h2 className="font-display sticky top-32 max-w-md text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
            Waarom bedrijven voor NowWeGo kiezen.
          </h2>
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

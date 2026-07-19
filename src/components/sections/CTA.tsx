import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-ink/10 py-32 md:py-48"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(61,92,255,0.16),transparent_65%)]" />
      <div className="container-edge relative text-center">
        <Reveal>
          <span className="mb-8 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-ink/40">
            <span className="h-px w-8 bg-accent" />
            Klaar om te groeien
            <span className="h-px w-8 bg-accent" />
          </span>
          <h2 className="font-display mx-auto max-w-4xl text-5xl font-medium leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Laten we bouwen aan iets dat wint.
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-ink/50">
            Plan een strategiegesprek van 30 minuten. Geen verplichtingen —
            wel een helder beeld van wat mogelijk is.
          </p>
          <div className="mt-12 flex flex-col items-center gap-6">
            <MagneticButton
              href="mailto:hello@nowwego.nl"
              cursorLabel="Mail"
              className="!px-10 !py-5 text-base"
            >
              Vraag een offerte aan
            </MagneticButton>
            <a
              href="mailto:hello@nowwego.nl"
              data-cursor="view"
              className="text-sm text-ink/50 transition-colors hover:text-ink"
            >
              hello@nowwego.nl
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

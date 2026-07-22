import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { whatsappLink } from "@/lib/contact";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-ink/10 py-28 md:py-36"
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
            Plan een gratis contentscan van 30 minuten. Geen verplichtingen —
            wel een helder beeld van wat mogelijk is.
          </p>
          <div className="mt-12 flex flex-col items-center gap-5">
            <div className="flex flex-col gap-4 sm:flex-row">
              <MagneticButton
                href={whatsappLink(
                  "Hoi NowWeGo, ik wil graag een gratis contentscan inplannen."
                )}
                cursorLabel="Chat"
                className="!px-10 !py-5 text-base"
              >
                WhatsApp ons direct
              </MagneticButton>
              <MagneticButton
                href="mailto:hello@nowwego.nl"
                cursorLabel="Mail"
                variant="ghost"
                className="!px-10 !py-5 text-base"
              >
                Vraag een offerte aan
              </MagneticButton>
            </div>
            <p className="text-xs text-ink/40">
              Geen verplichtingen — reactie binnen 24 uur.
            </p>
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

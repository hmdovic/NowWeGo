import Marquee from "@/components/ui/Marquee";
import { INDUSTRIES } from "@/lib/data/content";

export default function TrustedBy() {
  return (
    <section className="border-y border-paper/10 py-10">
      <div className="container-edge mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-paper/40">
        <span className="h-px w-8 bg-accent" />
        Vertrouwd door bedrijven in
      </div>
      <Marquee items={[...INDUSTRIES]} />
    </section>
  );
}

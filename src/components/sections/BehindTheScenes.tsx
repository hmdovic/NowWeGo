import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function BehindTheScenes() {
  return (
    <section className="border-t border-ink/10">
      <Reveal className="relative h-[60vh] min-h-[420px] w-full overflow-hidden md:h-[70vh]">
        <Image
          src="/photos/camera-rig.jpg"
          alt="Camera-rig tijdens een NowWeGo-productie"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <div className="container-edge absolute inset-x-0 bottom-10 md:bottom-14">
          <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-paper/70">
            <span className="h-px w-8 bg-accent" />
            Achter de schermen
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-medium leading-[1.05] tracking-tight text-paper text-balance md:text-5xl">
            Eigen gear, eigen crew, geen freelance ruis.
          </h2>
        </div>
      </Reveal>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/contact";

const SITEMAP = [
  { label: "Diensten", href: "#services" },
  { label: "Werk", href: "#werk" },
  { label: "Waarom wij", href: "#waarom" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "FAQ", href: "#faq" },
];

const SERVICES = [
  "Content Marketing",
  "Social Media",
  "Video Content",
  "Branding",
  "SEO",
  "AI Automation",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper pt-24">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-16 pb-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-full.png"
              alt="NowWeGo — Content Marketing"
              width={600}
              height={572}
              className="h-16 w-auto md:h-20"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/50">
              Content marketing bureau uit Den Haag. Wij maken content die
              mensen laat stoppen met scrollen — en klanten laat worden.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink/40">
              Sitemap
            </p>
            <ul className="mt-5 space-y-3">
              {SITEMAP.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    data-cursor="view"
                    className="text-sm text-ink/70 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink/40">
              Diensten
            </p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((item) => (
                <li key={item} className="text-sm text-ink/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink/40">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ink/70">
              <li>
                <a
                  href={whatsappLink(
                    "Hoi NowWeGo, ik wil graag meer weten over jullie content marketing."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="view"
                  className="transition-colors hover:text-ink"
                >
                  WhatsApp ons
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@nowwego.nl"
                  data-cursor="view"
                  className="transition-colors hover:text-ink"
                >
                  hello@nowwego.nl
                </a>
              </li>
              <li>Den Haag, Nederland</li>
              <li className="flex gap-4 pt-2">
                <a href="#" data-cursor="view" className="hover:text-ink">
                  LinkedIn
                </a>
                <a href="#" data-cursor="view" className="hover:text-ink">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-ink/10 py-8 text-xs text-ink/40 md:flex-row md:items-center">
          <p>© {year} NowWeGo. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-ink/70">
              Privacybeleid
            </Link>
            <Link href="#" className="hover:text-ink/70">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

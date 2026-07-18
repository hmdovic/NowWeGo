import Link from "next/link";

const SITEMAP = [
  { label: "Diensten", href: "#services" },
  { label: "Werk", href: "#werk" },
  { label: "Waarom wij", href: "#waarom" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "FAQ", href: "#faq" },
];

const SERVICES = [
  "Branding",
  "Web Design",
  "Web Development",
  "SEO",
  "Google Ads",
  "AI Automation",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 bg-ink pt-24">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-16 pb-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight text-paper">
              NowWeGo<span className="text-accent">.</span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/50">
              Premium digital marketing agency uit Den Haag. Wij bouwen merken
              die winnen — met branding, design en performance die samenwerken.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-paper/40">
              Sitemap
            </p>
            <ul className="mt-5 space-y-3">
              {SITEMAP.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    data-cursor="view"
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-paper/40">
              Diensten
            </p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((item) => (
                <li key={item} className="text-sm text-paper/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-paper/40">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-paper/70">
              <li>
                <a
                  href="mailto:hello@nowwego.nl"
                  data-cursor="view"
                  className="transition-colors hover:text-paper"
                >
                  hello@nowwego.nl
                </a>
              </li>
              <li>Den Haag, Nederland</li>
              <li className="flex gap-4 pt-2">
                <a href="#" data-cursor="view" className="hover:text-paper">
                  LinkedIn
                </a>
                <a href="#" data-cursor="view" className="hover:text-paper">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-paper/10 py-8 text-xs text-paper/40 md:flex-row md:items-center">
          <p>© {year} NowWeGo. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-paper/70">
              Privacybeleid
            </Link>
            <Link href="#" className="hover:text-paper/70">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

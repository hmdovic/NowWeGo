import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import CustomCursor from "@/components/layout/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingCTA from "@/components/layout/FloatingCTA";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://nowwego.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NowWeGo — Content Marketing Bureau, Den Haag",
    template: "%s — NowWeGo",
  },
  description:
    "NowWeGo is het content marketing bureau uit Den Haag. Video, social content en een contentstrategie die kijkers omzet in klanten.",
  keywords: [
    "content marketing bureau",
    "content marketing Den Haag",
    "video content bureau",
    "social media content",
    "contentstrategie",
    "contentcreatie bureau",
    "LinkedIn content",
    "Instagram content bureau",
  ],
  authors: [{ name: "NowWeGo" }],
  creator: "NowWeGo",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "NowWeGo",
    title: "NowWeGo — Content Marketing Bureau, Den Haag",
    description:
      "Video, social content en een contentstrategie die kijkers omzet in klanten.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NowWeGo — Content Marketing Bureau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NowWeGo — Content Marketing Bureau, Den Haag",
    description:
      "Video, social content en een contentstrategie die kijkers omzet in klanten.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "NowWeGo",
  url: siteUrl,
  description:
    "Content marketing bureau uit Den Haag. Video content, social media content, contentstrategie en distributie voor merken die willen groeien.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Den Haag",
    addressCountry: "NL",
  },
  areaServed: "NL",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${bricolage.variable} ${interTight.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
        >
          Ga naar hoofdinhoud
        </a>
        <div className="noise-layer" aria-hidden="true" />
        <CustomCursor />
        <ScrollProgress />
        <FloatingCTA />
        <SmoothScrollProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

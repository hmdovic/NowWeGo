import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import CustomCursor from "@/components/layout/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    default: "NowWeGo — Premium Digital Marketing Agency, Den Haag",
    template: "%s — NowWeGo",
  },
  description:
    "NowWeGo is het premium marketing bureau uit Den Haag. Branding, web design, development, SEO, performance marketing en AI-automation voor merken die vooraan willen staan.",
  keywords: [
    "marketing bureau Den Haag",
    "digital agency Nederland",
    "branding bureau",
    "webdesign bureau",
    "performance marketing",
    "SEO bureau Den Haag",
    "Google Ads bureau",
    "growth marketing",
  ],
  authors: [{ name: "NowWeGo" }],
  creator: "NowWeGo",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "NowWeGo",
    title: "NowWeGo — Premium Digital Marketing Agency, Den Haag",
    description:
      "Branding, web design, development, SEO, performance marketing en AI-automation voor merken die vooraan willen staan.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NowWeGo — Premium Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NowWeGo — Premium Digital Marketing Agency, Den Haag",
    description:
      "Branding, web design, development, SEO, performance marketing en AI-automation voor merken die vooraan willen staan.",
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
    "Premium digital marketing agency uit Den Haag. Branding, web design, development, SEO, Google Ads, social, AI-automation, growth- en performance marketing.",
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
        >
          Ga naar hoofdinhoud
        </a>
        <div className="noise-layer" aria-hidden="true" />
        <CustomCursor />
        <SmoothScrollProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

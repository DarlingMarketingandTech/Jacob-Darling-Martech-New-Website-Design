import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// Self-hosted via @fontsource-variable/archivo — variable font covers all weights/styles
const archivo = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource-variable/archivo/files/archivo-latin-wght-italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

// Self-hosted via @fontsource/spectral — static weights used on the site
const spectral = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/spectral/files/spectral-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
  preload: false,
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: "%s | Darling Martech",
    default: "Darling Martech | Marketing Systems, Websites & AI Automation",
  },
  description:
    "Darling Martech helps growing businesses connect strategy, websites, CRM, automation, AI, visibility, and reporting into one measurable growth system.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Darling Martech | Marketing Systems, Websites & AI Automation",
    description:
      "Darling Martech helps growing businesses connect strategy, websites, CRM, automation, AI, visibility, and reporting into one measurable growth system.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darling Martech | Marketing Systems, Websites & AI Automation",
    description:
      "Darling Martech helps growing businesses connect strategy, websites, CRM, automation, AI, visibility, and reporting into one measurable growth system.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  founder: {
    "@type": "Person",
    name: site.founder,
  },
  url: site.url,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.country,
  },
  areaServed: site.areaServed,
  sameAs: [site.url],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(archivo.variable, spectral.variable)}>
      <head>
        <JsonLd data={localBusinessSchema} />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-crimson focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

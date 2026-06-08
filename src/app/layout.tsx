import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

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
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Archivo + Spectral via Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

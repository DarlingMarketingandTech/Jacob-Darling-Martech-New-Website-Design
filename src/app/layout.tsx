import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://darlingmartech.com"),
  title: {
    template: "%s | Darling Martech",
    default: "Darling Martech — Marketing. Websites. AI. Growth.",
  },
  description:
    "One accountable operator for your marketing system. Strategy, websites, CRM automation, AI workflows, and demand generation — connected and measurable.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darlingmartech.com",
    siteName: "Darling Martech",
    title: "Darling Martech — Marketing. Websites. AI. Growth.",
    description:
      "One accountable operator for your marketing system. Strategy, websites, CRM automation, AI workflows, and demand generation — connected and measurable.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darling Martech — Marketing. Websites. AI. Growth.",
    description:
      "One accountable operator for your marketing system. Strategy, websites, CRM automation, AI workflows, and demand generation — connected and measurable.",
  },
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
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

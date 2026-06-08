import type { Metadata } from "next";
import { site } from "@/lib/site";
import type { SeoPage } from "@/content/seo";

export function createMetadata(page: SeoPage): Metadata {
  const canonicalUrl = `${site.url}${page.path === "/" ? "" : page.path}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.ogTitle ?? page.title,
      description: page.ogDescription ?? page.description,
      url: canonicalUrl,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      ...(page.image ? { images: [{ url: page.image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle ?? page.title,
      description: page.ogDescription ?? page.description,
      ...(page.image ? { images: [page.image] } : {}),
    },
    ...(page.noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}

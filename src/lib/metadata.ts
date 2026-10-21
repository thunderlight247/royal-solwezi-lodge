import type { Metadata } from "next";
import { business, siteUrl } from "@/data/business";
import { media } from "@/data/media";

export function pageMeta(
  title: string,
  description: string,
  path: string,
  options?: {
    image?: string;
    keywords?: string[];
  }
): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${business.name}`;
  const canonicalUrl = `${siteUrl}${path === "/" ? "" : path}`;
  const ogImage = options?.image || media.hero;
  const fullOgImageUrl = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

  const defaultKeywords = [
    "Royal Solwezi Lodge",
    "Lodge in Agona Swedru",
    "Hotels in Agona Swedru",
    "Guest house Central Region Ghana",
    "Accommodation Agona Swedru",
    "Executive rooms Agona Swedru",
    "Deluxe rooms Agona Swedru",
    "Conference room Agona Swedru",
    "Summer hut relaxation",
    "Ekwamkrom Police Barrier",
  ];

  const keywords = options?.keywords ? [...options.keywords, ...defaultKeywords] : defaultKeywords;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: business.name,
      type: "website",
      locale: "en_GH",
      images: [
        {
          url: fullOgImageUrl,
          width: 1200,
          height: 630,
          alt: `${business.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullOgImageUrl],
    },
  };
}

export { siteUrl };

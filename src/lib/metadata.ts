import type { Metadata } from "next";
import { business, siteUrl } from "@/data/business";
import { media } from "@/data/media";
export function pageMeta(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: business.name, type: "website", locale: "en_GH", images: [media.hero] },
    twitter: { card: "summary_large_image", title, description } };
}
export { siteUrl };

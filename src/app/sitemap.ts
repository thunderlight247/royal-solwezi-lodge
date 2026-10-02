import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/business";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/rooms", "/amenities", "/gallery", "/about", "/location", "/contact"].map((p) => ({ url: `${siteUrl}${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.7 }));
}

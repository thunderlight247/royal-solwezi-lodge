import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/rooms", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/book", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/amenities", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/gallery", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/location", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/menu", changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

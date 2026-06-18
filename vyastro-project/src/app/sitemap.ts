import { MetadataRoute } from "next";
import { YANTRAS } from "@/lib/yantras";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vyastro.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/astrology`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/vastu`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/yantra-store`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/ai-guide`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const yantraRoutes: MetadataRoute.Sitemap = YANTRAS.map((y) => ({
    url: `${base}/yantra-store/${y.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...yantraRoutes];
}

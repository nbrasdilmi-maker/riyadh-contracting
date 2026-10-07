import type { MetadataRoute } from "next";
import { labSectionsSeed } from "@/data/lab/sections.seed";
import { labGuides } from "@/data/lab/guides";

// يُحدَّث تلقائياً عند شراء الدومين عبر متغير البيئة NEXT_PUBLIC_SITE_URL في Vercel
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://riyadh-contracting.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...labSectionsSeed
      .filter((s) => s.active)
      .map((s) => ({
        url: `${SITE_URL}/services/${s.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ...labGuides.map((g) => ({
      url: `${SITE_URL}/guides/${g.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

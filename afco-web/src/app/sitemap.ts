import type { MetadataRoute } from "next";
import { news } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://afco-ouahigouya.com";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/club`, lastModified: new Date() },
    { url: `${baseUrl}/equipes`, lastModified: new Date() },
    { url: `${baseUrl}/actualites`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    ...news.map((article) => ({
      url: `${baseUrl}/actualites/${article.slug}`,
      lastModified: new Date(article.date),
    })),
  ];
}

import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE = "https://daybreakstudio.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, priority: 1 },
    { url: `${BASE}/work`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/how-it-works`, lastModified: now, priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/work/${p.id}`,
    lastModified: now,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}

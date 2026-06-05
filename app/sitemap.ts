import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE = "https://daycraftstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, priority: 1 },
    { url: `${BASE}/work`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/how-it-works`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/why-custom`, lastModified: now, priority: 0.7 },
    // Segment landing pages
    { url: `${BASE}/event-sites`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/personal-brand`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/business-sites`, lastModified: now, priority: 0.8 },
    // Legal / compliance
    { url: `${BASE}/privacy`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/accessibility`, lastModified: now, priority: 0.3 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/work/${p.id}`,
    lastModified: now,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://daybreakstudio.studio/sitemap.xml",
    host: "https://daybreakstudio.studio",
  };
}

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/_next", "/static"],
    },
    sitemap: "https://tamires-souza-lp.com/sitemap.xml",
  };
}

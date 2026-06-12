import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.skyhitmedia.com";

  const routes = [
    "",
    "/about",
    "/analytics-and-reporting-agency",
    "/best-digital-marketing-agency",
    "/blogs",
    "/branding-and-graphic-design-agency",
    "/careers",
    "/contact",
    "/cyber-security-services",
    "/influencer-marketing-agency",
    "/influencer-registration",
    "/online-reputation-management-agency",
    "/pay-per-click-advertising-agency",
    "/Performance-marketing-agency",
    "/projects",
    "/search-engine-optimization-agency",
    "/services",
    "/social-media-marketing-agency",
    "/thank-you",
    "/website-design-and-development-company-in-hyderabad",
    "/website-design-and-development-services",
    "/whatsapp-marketing-agency",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://skyhitmedia.com";

  const routes = [
    "",
    "/about",
    "/analytics-and-reporting-agency",
    "/best-digital-marketing-agency",
    "/digital-marketing-agency-hyderabad",
    "/digital-marketing-agency-banjara-hills",
    "/digital-marketing-agency-financial-district",
    "/digital-marketing-agency-gachibowli",
    "/digital-marketing-agency-hitec-city",
    "/digital-marketing-agency-jubilee-hills",
    "/digital-marketing-agency-kondapur",
    "/digital-marketing-agency-kukatpally",
    "/digital-marketing-agency-madhapur",
    "/digital-marketing-agency-miyapur",
    "/digital-marketing-agency-secunderabad",
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
    // New SEO and Marketing Pages
    "/seo-company-hyderabad",
    "/seo-services-hyderabad",
    "/seo-agency-hyderabad",
    "/local-seo-services-hyderabad",
    "/technical-seo-services-hyderabad",
    "/ecommerce-seo-hyderabad",
    "/enterprise-seo-services-hyderabad",
    "/seo-consultant-hyderabad",
    "/seo-audit-services-hyderabad",
    "/seo-for-small-businesses-hyderabad",
    "/digital-marketing-company-hyderabad",
    "/digital-marketing-services-hyderabad",
    "/internet-marketing-agency-hyderabad",
    "/online-marketing-company-hyderabad",
    "/performance-marketing-agency-hyderabad",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

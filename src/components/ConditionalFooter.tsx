"use client";

import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (!pathname) return <Footer />;

  const seoPages = [
    "/seo-company-hyderabad",
    "/seo-services-hyderabad",
    "/seo-agency-hyderabad",
    "/local-seo-services-hyderabad",
    "/technical-seo-services-hyderabad",
    "/ecommerce-seo-hyderabad",
    "/enterprise-seo-services-hyderabad",
    "/seo-consultant-hyderabad",
    "/seo-audit-services-hyderabad",
    "/seo-for-small-businesses-hyderabad"
  ];

  const isHiddenPage = 
    pathname.includes("/digital-marketing-agency-") ||
    pathname.includes("/digital-marketing-services-hyderabad") ||
    pathname.includes("/digital-marketing-company-hyderabad") ||
    pathname.includes("/online-marketing-company-hyderabad") ||
    pathname.includes("/internet-marketing-agency-hyderabad") ||
    pathname.includes("/performance-marketing-agency-hyderabad") ||
    seoPages.some(page => pathname.includes(page));

  if (isHiddenPage) {
    return null;
  }

  return <Footer />;
}

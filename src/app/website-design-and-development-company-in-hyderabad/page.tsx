import type { Metadata } from "next";
import AdPageClient from "@/components/AdPage/AdPageClient";

export const metadata: Metadata = {
  title: "Website Design and Development Company in Hyderabad | Skyhit Media",
  description: "Skyhit Media is the top web design and development company in Hyderabad. Get custom, responsive, and SEO-friendly website design services to grow your business.",
  keywords: [
    "Web Design Company Hyderabad",
    "Website Development Services",
    "Web Design Agency",
    "Skyhit Media",
    "Hyderabad"
  ],
  alternates: {
    canonical: "https://skyhitmedia.com/website-design-and-development-company-in-hyderabad/",
  },
  openGraph: {
    title: "Website Design and Development Company in Hyderabad | Skyhit Media",
    description: "Skyhit Media is the top web design and development company in Hyderabad. Get custom, responsive, and SEO-friendly website design services.",
    url: "https://skyhitmedia.com/website-design-and-development-company-in-hyderabad/",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Website Design and Development Company in Hyderabad - Skyhit Media",
      }
    ],
  },
};

export default function Page() {
  return <AdPageClient />;
}

import type { Metadata } from "next";
import DigitalMarketingAdUI from "../digital-marketing-agency-hyderabad/DigitalMarketingAdUI";

export const metadata: Metadata = {
  title:
    "Digital Marketing Agency in Financial District Hyderabad | SKYHIT Media",
  description:
    "Empower your corporate brand in Financial District Hyderabad with SEO, Google Ads, LinkedIn marketing & performance campaigns.",
  keywords: [
    "Digital Marketing Agency Financial District",
    "Digital Marketing Company Financial District",
    "SEO Services Financial District",
    "Google Ads Agency Financial District",
    "LinkedIn Marketing Financial District",
    "Website Design Financial District",
    "Performance Marketing Financial District",
  ],
  openGraph: {
    title:
      "Digital Marketing Agency in Financial District Hyderabad | SKYHIT Media",
    description:
      "Empower your corporate brand in Financial District Hyderabad with SEO, Google Ads, LinkedIn marketing & performance campaigns.",
    url: "https://skyhitmedia.com/digital-marketing-agency-financial-district",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Digital Marketing Agency in Financial District Hyderabad | SKYHIT Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Digital Marketing Agency in Financial District Hyderabad | SKYHIT Media",
    description:
      "Empower your corporate brand in Financial District Hyderabad with SEO, Google Ads, LinkedIn marketing & performance campaigns.",
    images: [
      "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
    ],
  },
};

export default function LocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SKYHIT Media – Digital Marketing Agency Financial District",
    description:
      "Best digital marketing agency in Financial District offering SEO, Google Ads, Meta Ads, social media marketing, web design and lead generation services.",
    url: "https://skyhitmedia.com/digital-marketing-agency-financial-district",
    telephone: "+91-9030279661",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Financial District",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.4435,
      longitude: 78.3772,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: {
      "@type": "City",
      name: "Financial District",
    },
    sameAs: [
      "https://www.facebook.com/skyhitmedia",
      "https://www.instagram.com/skyhitmedia",
      "https://www.linkedin.com/company/skyhitmedia",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://skyhitmedia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Digital Marketing Agency Financial District",
        item: "https://skyhitmedia.com/digital-marketing-agency-financial-district",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <DigitalMarketingAdUI locationName="Financial District" />
    </>
  );
}

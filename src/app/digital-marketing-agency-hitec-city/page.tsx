import type { Metadata } from "next";
import DigitalMarketingAdUI from "../digital-marketing-agency-hyderabad/DigitalMarketingAdUI";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in HITEC City Hyderabad | SKYHIT Media",
  description:
    "Scale your business in HITEC City Hyderabad with SEO, LinkedIn marketing, Google Ads, Meta Ads & performance marketing.",
  keywords: [
    "Digital Marketing Agency HITEC City",
    "Digital Marketing Company HITEC City",
    "SEO Services HITEC City",
    "Google Ads Agency HITEC City",
    "LinkedIn Marketing HITEC City",
    "Website Design HITEC City",
    "Performance Marketing HITEC City",
  ],
  openGraph: {
    title: "Digital Marketing Agency in HITEC City Hyderabad | SKYHIT Media",
    description:
      "Scale your business in HITEC City Hyderabad with SEO, LinkedIn marketing, Google Ads, Meta Ads & performance marketing.",
    url: "https://skyhitmedia.com/digital-marketing-agency-hitec-city",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Digital Marketing Agency in HITEC City Hyderabad | SKYHIT Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in HITEC City Hyderabad | SKYHIT Media",
    description:
      "Scale your business in HITEC City Hyderabad with SEO, LinkedIn marketing, Google Ads, Meta Ads & performance marketing.",
    images: [
      "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
    ],
  },
};

export default function LocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SKYHIT Media – Digital Marketing Agency HITEC City",
    description:
      "Best digital marketing agency in HITEC City offering SEO, Google Ads, Meta Ads, social media marketing, web design and lead generation services.",
    url: "https://skyhitmedia.com/digital-marketing-agency-hitec-city",
    telephone: "+91-9030279661",
    address: {
      "@type": "PostalAddress",
      streetAddress: "HITEC City",
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
      name: "HITEC City",
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
        name: "Digital Marketing Agency HITEC City",
        item: "https://skyhitmedia.com/digital-marketing-agency-hitec-city",
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

      <DigitalMarketingAdUI locationName="HITEC City" />
    </>
  );
}

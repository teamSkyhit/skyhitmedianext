import type { Metadata } from "next";
import DigitalMarketingAdUI from "../digital-marketing-agency-hyderabad/DigitalMarketingAdUI";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Banjara Hills Hyderabad | SKYHIT Media",
  description:
    "Drive more enquiries with digital marketing services in Banjara Hills Hyderabad including SEO, Google Ads, Meta Ads & website development.",
  keywords: [
    "Digital Marketing Agency Banjara Hills",
    "Digital Marketing Company Banjara Hills",
    "SEO Services Banjara Hills",
    "Google Ads Agency Banjara Hills",
    "Website Design Banjara Hills",
    "Performance Marketing Banjara Hills",
    "Social Media Marketing Banjara Hills",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Banjara Hills Hyderabad | SKYHIT Media",
    description:
      "Drive more enquiries with digital marketing services in Banjara Hills Hyderabad including SEO, Google Ads, Meta Ads & website development.",
    url: "https://skyhitmedia.com/digital-marketing-agency-banjara-hills",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Digital Marketing Agency in Banjara Hills Hyderabad | SKYHIT Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Banjara Hills Hyderabad | SKYHIT Media",
    description:
      "Drive more enquiries with digital marketing services in Banjara Hills Hyderabad including SEO, Google Ads, Meta Ads & website development.",
    images: [
      "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
    ],
  },
};

export default function LocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SKYHIT Media – Digital Marketing Agency Banjara Hills",
    description:
      "Best digital marketing agency in Banjara Hills offering SEO, Google Ads, Meta Ads, social media marketing, web design and lead generation services.",
    url: "https://skyhitmedia.com/digital-marketing-agency-banjara-hills",
    telephone: "+91-9030279661",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Banjara Hills",
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
      name: "Banjara Hills",
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
        name: "Digital Marketing Agency Banjara Hills",
        item: "https://skyhitmedia.com/digital-marketing-agency-banjara-hills",
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

      <DigitalMarketingAdUI locationName="Banjara Hills" />
    </>
  );
}

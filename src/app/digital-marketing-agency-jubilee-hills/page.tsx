import type { Metadata } from "next";
import DigitalMarketingAdUI from "../digital-marketing-agency-hyderabad/DigitalMarketingAdUI";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Jubilee Hills Hyderabad | SKYHIT Media",
  description:
    "Grow your premium brand with a trusted digital marketing agency in Jubilee Hills Hyderabad offering SEO, Google Ads, Meta Ads & web design.",
  keywords: [
    "Digital Marketing Agency Jubilee Hills",
    "Digital Marketing Company Jubilee Hills",
    "SEO Services Jubilee Hills",
    "Google Ads Agency Jubilee Hills",
    "Website Design Jubilee Hills",
    "Performance Marketing Jubilee Hills",
    "Social Media Marketing Jubilee Hills",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Jubilee Hills Hyderabad | SKYHIT Media",
    description:
      "Grow your premium brand with a trusted digital marketing agency in Jubilee Hills Hyderabad offering SEO, Google Ads, Meta Ads & web design.",
    url: "https://skyhitmedia.com/digital-marketing-agency-jubilee-hills",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Digital Marketing Agency in Jubilee Hills Hyderabad | SKYHIT Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Jubilee Hills Hyderabad | SKYHIT Media",
    description:
      "Grow your premium brand with a trusted digital marketing agency in Jubilee Hills Hyderabad offering SEO, Google Ads, Meta Ads & web design.",
    images: [
      "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
    ],
  },
};

export default function LocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SKYHIT Media – Digital Marketing Agency Jubilee Hills",
    description:
      "Best digital marketing agency in Jubilee Hills offering SEO, Google Ads, Meta Ads, social media marketing, web design and lead generation services.",
    url: "https://skyhitmedia.com/digital-marketing-agency-jubilee-hills",
    telephone: "+91-9030279661",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jubilee Hills",
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
      name: "Jubilee Hills",
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
        name: "Digital Marketing Agency Jubilee Hills",
        item: "https://skyhitmedia.com/digital-marketing-agency-jubilee-hills",
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

      <DigitalMarketingAdUI locationName="Jubilee Hills" />
    </>
  );
}

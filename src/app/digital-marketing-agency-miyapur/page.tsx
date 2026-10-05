import type { Metadata } from "next";
import DigitalMarketingAdUI from "../digital-marketing-agency-hyderabad/DigitalMarketingAdUI";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Miyapur Hyderabad | SKYHIT Media",
  description:
    "Help your business grow in Miyapur Hyderabad with SEO, Google Ads, Meta Ads, website development & local digital marketing.",
  keywords: [
    "Digital Marketing Agency Miyapur",
    "Digital Marketing Company Miyapur",
    "SEO Services Miyapur",
    "Google Ads Agency Miyapur",
    "Website Design Miyapur",
    "Performance Marketing Miyapur",
    "Social Media Marketing Miyapur",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Miyapur Hyderabad | SKYHIT Media",
    description:
      "Help your business grow in Miyapur Hyderabad with SEO, Google Ads, Meta Ads, website development & local digital marketing.",
    url: "https://skyhitmedia.com/digital-marketing-agency-miyapur",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Digital Marketing Agency in Miyapur Hyderabad | SKYHIT Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Miyapur Hyderabad | SKYHIT Media",
    description:
      "Help your business grow in Miyapur Hyderabad with SEO, Google Ads, Meta Ads, website development & local digital marketing.",
    images: [
      "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
    ],
  },
};

export default function LocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SKYHIT Media – Digital Marketing Agency Miyapur",
    description:
      "Best digital marketing agency in Miyapur offering SEO, Google Ads, Meta Ads, social media marketing, web design and lead generation services.",
    url: "https://skyhitmedia.com/digital-marketing-agency-miyapur",
    telephone: "+91-9030279661",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Miyapur",
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
      name: "Miyapur",
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
        name: "Digital Marketing Agency Miyapur",
        item: "https://skyhitmedia.com/digital-marketing-agency-miyapur",
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

      <DigitalMarketingAdUI locationName="Miyapur" />
    </>
  );
}

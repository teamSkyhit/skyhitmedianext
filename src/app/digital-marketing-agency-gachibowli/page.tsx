import type { Metadata } from "next";
import DigitalMarketingAdUI from "../digital-marketing-agency-hyderabad/DigitalMarketingAdUI";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Gachibowli Hyderabad | SKYHIT Media",
  description:
    "Generate quality B2B leads in Gachibowli Hyderabad with SEO, Google Ads, Meta Ads, performance marketing & website development.",
  keywords: [
    "Digital Marketing Agency Gachibowli",
    "Digital Marketing Company Gachibowli",
    "SEO Services Gachibowli",
    "Google Ads Agency Gachibowli",
    "B2B Marketing Gachibowli",
    "Website Design Gachibowli",
    "Performance Marketing Gachibowli",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Gachibowli Hyderabad | SKYHIT Media",
    description:
      "Generate quality B2B leads in Gachibowli Hyderabad with SEO, Google Ads, Meta Ads, performance marketing & website development.",
    url: "https://skyhitmedia.com/digital-marketing-agency-gachibowli",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Digital Marketing Agency in Gachibowli Hyderabad | SKYHIT Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Gachibowli Hyderabad | SKYHIT Media",
    description:
      "Generate quality B2B leads in Gachibowli Hyderabad with SEO, Google Ads, Meta Ads, performance marketing & website development.",
    images: [
      "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
    ],
  },
};

export default function LocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SKYHIT Media – Digital Marketing Agency Gachibowli",
    description:
      "Best digital marketing agency in Gachibowli offering SEO, Google Ads, Meta Ads, social media marketing, web design and lead generation services.",
    url: "https://skyhitmedia.com/digital-marketing-agency-gachibowli",
    telephone: "+91-9030279661",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gachibowli",
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
      name: "Gachibowli",
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
        name: "Digital Marketing Agency Gachibowli",
        item: "https://skyhitmedia.com/digital-marketing-agency-gachibowli",
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

      <DigitalMarketingAdUI locationName="Gachibowli" />
    </>
  );
}

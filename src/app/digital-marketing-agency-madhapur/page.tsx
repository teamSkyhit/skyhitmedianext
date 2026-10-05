import type { Metadata } from "next";
import DigitalMarketingAdUI from "../digital-marketing-agency-hyderabad/DigitalMarketingAdUI";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Madhapur Hyderabad | SKYHIT Media",
  description:
    "Grow your business in Madhapur Hyderabad with SEO, Google Ads, Meta Ads, social media marketing & high-converting websites.",
  keywords: [
    "Digital Marketing Agency Madhapur",
    "Digital Marketing Company Madhapur",
    "SEO Services Madhapur",
    "Google Ads Agency Madhapur",
    "Website Design Madhapur",
    "Performance Marketing Madhapur",
    "Social Media Marketing Madhapur",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Madhapur Hyderabad | SKYHIT Media",
    description:
      "Grow your business in Madhapur Hyderabad with SEO, Google Ads, Meta Ads, social media marketing & high-converting websites.",
    url: "https://skyhitmedia.com/digital-marketing-agency-madhapur",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Digital Marketing Agency in Madhapur Hyderabad | SKYHIT Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Madhapur Hyderabad | SKYHIT Media",
    description:
      "Grow your business in Madhapur Hyderabad with SEO, Google Ads, Meta Ads, social media marketing & high-converting websites.",
    images: [
      "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
    ],
  },
};

export default function LocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SKYHIT Media – Digital Marketing Agency Madhapur",
    description:
      "Best digital marketing agency in Madhapur offering SEO, Google Ads, Meta Ads, social media marketing, web design and lead generation services.",
    url: "https://skyhitmedia.com/digital-marketing-agency-madhapur",
    telephone: "+91-9030279661",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Madhapur",
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
      name: "Madhapur",
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
        name: "Digital Marketing Agency Madhapur",
        item: "https://skyhitmedia.com/digital-marketing-agency-madhapur",
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

      <DigitalMarketingAdUI locationName="Madhapur" />
    </>
  );
}

import type { Metadata } from "next";
import DigitalMarketingAdUI from "../digital-marketing-agency-hyderabad/DigitalMarketingAdUI";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Kondapur Hyderabad | SKYHIT Media",
  description:
    "Attract more customers in Kondapur Hyderabad with SEO, Google Ads, Meta Ads, website design & digital marketing solutions.",
  keywords: [
    "Digital Marketing Agency Kondapur",
    "Digital Marketing Company Kondapur",
    "SEO Services Kondapur",
    "Google Ads Agency Kondapur",
    "Website Design Kondapur",
    "Performance Marketing Kondapur",
    "Social Media Marketing Kondapur",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Kondapur Hyderabad | SKYHIT Media",
    description:
      "Attract more customers in Kondapur Hyderabad with SEO, Google Ads, Meta Ads, website design & digital marketing solutions.",
    url: "https://skyhitmedia.com/digital-marketing-agency-kondapur",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Digital Marketing Agency in Kondapur Hyderabad | SKYHIT Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Kondapur Hyderabad | SKYHIT Media",
    description:
      "Attract more customers in Kondapur Hyderabad with SEO, Google Ads, Meta Ads, website design & digital marketing solutions.",
    images: [
      "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
    ],
  },
};

export default function LocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SKYHIT Media – Digital Marketing Agency Kondapur",
    description:
      "Best digital marketing agency in Kondapur offering SEO, Google Ads, Meta Ads, social media marketing, web design and lead generation services.",
    url: "https://skyhitmedia.com/digital-marketing-agency-kondapur",
    telephone: "+91-9030279661",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kondapur",
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
      name: "Kondapur",
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
        name: "Digital Marketing Agency Kondapur",
        item: "https://skyhitmedia.com/digital-marketing-agency-kondapur",
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

      <DigitalMarketingAdUI locationName="Kondapur" />
    </>
  );
}

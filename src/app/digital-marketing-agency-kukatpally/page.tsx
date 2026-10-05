import type { Metadata } from "next";
import DigitalMarketingAdUI from "../digital-marketing-agency-hyderabad/DigitalMarketingAdUI";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Kukatpally Hyderabad | SKYHIT Media",
  description:
    "Increase local leads in Kukatpally Hyderabad through SEO, Google Ads, Meta Ads, website design & social media marketing.",
  keywords: [
    "Digital Marketing Agency Kukatpally",
    "Digital Marketing Company Kukatpally",
    "SEO Services Kukatpally",
    "Google Ads Agency Kukatpally",
    "Website Design Kukatpally",
    "Performance Marketing Kukatpally",
    "Social Media Marketing Kukatpally",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Kukatpally Hyderabad | SKYHIT Media",
    description:
      "Increase local leads in Kukatpally Hyderabad through SEO, Google Ads, Meta Ads, website design & social media marketing.",
    url: "https://skyhitmedia.com/digital-marketing-agency-kukatpally",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Digital Marketing Agency in Kukatpally Hyderabad | SKYHIT Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Kukatpally Hyderabad | SKYHIT Media",
    description:
      "Increase local leads in Kukatpally Hyderabad through SEO, Google Ads, Meta Ads, website design & social media marketing.",
    images: [
      "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
    ],
  },
};

export default function LocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SKYHIT Media – Digital Marketing Agency Kukatpally",
    description:
      "Best digital marketing agency in Kukatpally offering SEO, Google Ads, Meta Ads, social media marketing, web design and lead generation services.",
    url: "https://skyhitmedia.com/digital-marketing-agency-kukatpally",
    telephone: "+91-9030279661",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kukatpally",
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
      name: "Kukatpally",
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
        name: "Digital Marketing Agency Kukatpally",
        item: "https://skyhitmedia.com/digital-marketing-agency-kukatpally",
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

      <DigitalMarketingAdUI locationName="Kukatpally" />
    </>
  );
}

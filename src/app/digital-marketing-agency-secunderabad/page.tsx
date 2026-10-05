import type { Metadata } from "next";
import DigitalMarketingAdUI from "../digital-marketing-agency-hyderabad/DigitalMarketingAdUI";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Secunderabad Hyderabad | SKYHIT Media",
  description:
    "Strengthen your online presence in Secunderabad Hyderabad with SEO, Google Ads, Meta Ads, website design & lead generation.",
  keywords: [
    "Digital Marketing Agency Secunderabad",
    "Digital Marketing Company Secunderabad",
    "SEO Services Secunderabad",
    "Google Ads Agency Secunderabad",
    "Website Design Secunderabad",
    "Performance Marketing Secunderabad",
    "Social Media Marketing Secunderabad",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Secunderabad Hyderabad | SKYHIT Media",
    description:
      "Strengthen your online presence in Secunderabad Hyderabad with SEO, Google Ads, Meta Ads, website design & lead generation.",
    url: "https://skyhitmedia.com/digital-marketing-agency-secunderabad",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Digital Marketing Agency in Secunderabad Hyderabad | SKYHIT Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Secunderabad Hyderabad | SKYHIT Media",
    description:
      "Strengthen your online presence in Secunderabad Hyderabad with SEO, Google Ads, Meta Ads, website design & lead generation.",
    images: [
      "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
    ],
  },
};

export default function LocationPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SKYHIT Media – Digital Marketing Agency Secunderabad",
    description:
      "Best digital marketing agency in Secunderabad offering SEO, Google Ads, Meta Ads, social media marketing, web design and lead generation services.",
    url: "https://skyhitmedia.com/digital-marketing-agency-secunderabad",
    telephone: "+91-9030279661",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Secunderabad",
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
      name: "Secunderabad",
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
        name: "Digital Marketing Agency Secunderabad",
        item: "https://skyhitmedia.com/digital-marketing-agency-secunderabad",
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

      <DigitalMarketingAdUI locationName="Secunderabad" />
    </>
  );
}

import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-content",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-headline",
  display: "swap",
});

const siteUrl = "https://skyhitmedia.com";
const siteTitle = "Top Digital Marketing Agency in Hyderabad | Skyhit Media";
const siteDescription =
  "Skyhit Media is the top digital marketing agency and web design company in Hyderabad. Boost your business with expert services and innovative solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  creator: "Skyhit Media",
  publisher: "Skyhit Media",
  keywords: ["Digital Marketing Agency Hyderabad", "SEO services", "Web Design Company", "PPC Advertising", "Skyhit Media"],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    siteName: "Skyhit Media",
    images: [
      {
        url: `${siteUrl}/images/whatsapp-Digital-Marketing-og.png`,
        width: 630,
        height: 630,
        alt: "Skyhit Media - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/images/Digital-Marketing-og-.png`],
  },
  verification: {
    google: "E_tvrjnqI1HYmX6b5m1euw9VNPhAsGZ4PqdiGC4CcWY",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Skyhit Media",
      url: `${siteUrl}/`,
      image: `${siteUrl}/images/whatsapp-Digital-Marketing-og.png`,
      logo: `${siteUrl}/images/header-skyhit-logo-desktop.webp`,
      telephone: "+919030279661",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3rd Floor, Door No:301 Vipra Elite, Patrika Nagar, Street No:1, Madhapur",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500081",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.4483,
        longitude: 78.3915,
      },
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "Country", name: "India" },
      ],
      knowsAbout: [
        "Digital marketing",
        "Search engine optimization",
        "Website design and development",
        "Pay-per-click advertising",
        "Social media marketing",
        "Performance marketing",
        "Branding and graphic design",
      ],
      sameAs: [
        "https://www.facebook.com/skyhitmedia",
        "https://www.instagram.com/skyhitmedia/",
        "https://www.linkedin.com/company/skyhit-media/",
        "https://www.youtube.com/c/SKYHITMEDIA",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "100",
      },
      makesOffer: [
        "Digital Marketing",
        "SEO Services",
        "Website Design and Development",
        "PPC Advertising",
        "Social Media Marketing",
        "Performance Marketing",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          areaServed: "Hyderabad, India",
          provider: { "@id": `${siteUrl}/#organization` },
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Skyhit Media",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1LN33RP1RK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1LN33RP1RK');
          `}
        </Script>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

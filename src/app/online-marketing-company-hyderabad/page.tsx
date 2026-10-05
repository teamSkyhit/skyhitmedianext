import type { Metadata } from "next";
import DigitalMarketingAdUI from "./DigitalMarketingAdUI";

/* ─────────────────────────── Metadata ─────────────────────────── */
export const metadata: Metadata = {
  title: "Result-Oriented Online Marketing Company in Hyderabad",
  description:
    "Increase your visibility and revenue with a leading online marketing company in Hyderabad. Our tailored marketing solutions help businesses scale efficiently.",
  keywords: [
    "Online Marketing Company Hyderabad",
    "Online Marketing Services Hyderabad",
    "Best Online Marketing Company Hyderabad",
    "Internet Marketing Company Hyderabad",
    "Top Online Marketing Company Hyderabad",
    "Digital Marketing Services Hyderabad",
    "Performance Marketing Company Hyderabad",
  ],
  openGraph: {
    title:
      "Best Digital Marketing Agency in Hyderabad | SEO & PPC – SKYHIT MEDIA",
    description:
      "Looking for the best digital marketing agency in Hyderabad? Grow your business with SEO, Google Ads, Meta Ads, web design, and lead generation services.",
    url: "https://skyhitmedia.com/digital-marketing-agency-hyderabad",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Best Digital Marketing Agency in Hyderabad – Skyhit Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in Hyderabad | SEO & PPC",
    description:
      "Looking for the best digital marketing agency in Hyderabad? Grow your business with SEO, Google Ads, Meta Ads, web design, and lead generation services.",
    images: [
      "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
    ],
  },
  alternates: {
    canonical: "https://skyhitmedia.com/digital-marketing-agency-hyderabad",
  },
};

/* ─────────────────────────── Hero data ─────────────────────────── */
const serviceData = {
  deskImgLink: "/images/digital-marketing-agency-hyderabad-hero-desk.png",
  mobImgLink: "/images/digital-marketing-agency-hyderabad-hero-mob.png",
  title: "Premium Digital Marketing Agency in Hyderabad",
  subTitle:
    "Stop losing customers. We build high-performance SEO, Google Ads, and Meta Ads engines that generate consistent revenue and dominate the Hyderabad market.",
};

/* ─────────────────────────── Services cards ─────────────────────── */
const cardData = [
  {
    icon: "/images/seo-icon.png",
    image: "/images/seo-service-skyhitmedia.webp",
    title: "SEO that Dominates",
    description:
      "Rank #1 on Google for high-intent keywords. We capture customers actively searching for your business in Hyderabad.",
    link: "/search-engine-optimization-agency",
  },
  {
    icon: "/images/ppc-icon.png",
    image: "/images/pay-per-click-service-skyhitmedia.webp",
    title: "High-ROI Google Ads",
    description:
      "Stop wasting ad spend. We craft laser-targeted PPC campaigns that deliver qualified leads at the absolute lowest CPA.",
    link: "/pay-per-click-advertising-agency",
  },
  {
    icon: "/images/Social-Media2.png",
    image: "/images/Social-Media-Marketing-skyhitmedia.webp",
    title: "Meta Ads & Social Media",
    description:
      "Precision-targeted campaigns with compelling creatives that capture attention and drive measurable revenue across Facebook and Instagram.",
    link: "/social-media-marketing-agency",
  },
  {
    icon: "/images/webdesign-development-icon.png",
    image: "/images/Web-Design-Development-skyhitmedia.webp",
    title: "High-Converting Web Design",
    description:
      "Speed-optimised, modern websites that don't just look pretty—they turn visitors into paying customers on day one.",
    link: "/website-design-and-development-services",
  },
  {
    icon: "/images/Performance_marketing-skyhitmedia.png",
    image: "/images/performance-marketing-2nd-section-skyhitmedia.webp",
    title: "Performance Marketing",
    description:
      "Full-funnel campaigns tracked to real ROI. Every rupee tracked, every lead measured for maximum growth and scalability.",
    link: "/Performance-marketing-agency",
  },
  {
    icon: "/images/Whatsapp-skyhitmedia.png",
    image: "/images/whatsapp-marketing-skyhitmedia.webp",
    title: "WhatsApp Marketing",
    description:
      "Engage customers where they already are. Automated broadcasts and personalised sales journeys that convert instantly.",
    link: "/whatsapp-marketing-agency",
  },
];

/* ─────────────────────────── Testimonials ─────────────────────────── */
const testimonials = [
  {
    name: "Priya Reddy",
    position: "Director, Real Estate Firm",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote:
      "Skyhit Media is hands-down the best digital marketing agency in Hyderabad. Within 3 months, our Google rankings shot up and leads doubled. Absolutely recommend!",
  },
  {
    name: "Mohammed Zakeer",
    position: "E-commerce Brand Owner",
    image: "/images/Review-Zakeer.webp",
    stars: 5,
    quote:
      "Their PPC and Meta Ads team is phenomenal. We saw a 4x ROAS in the first month. No other online marketing agency in Hyderabad comes close to their expertise.",
  },
  {
    name: "Mahesh Kumar",
    position: "CEO, EdTech Startup",
    image: "/images/Review-Mahesh.webp",
    stars: 5,
    quote:
      "From SEO to web design, Skyhit Media handled everything seamlessly. Our website traffic grew by 300% and the quality of leads improved dramatically.",
  },
];

/* ══════════════════════════════════════════════════
   JSON-LD Structured Data (LocalBusiness + FAQPage)
══════════════════════════════════════════════════ */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SKYHIT Media – Digital Marketing Agency Hyderabad",
  description:
    "Best digital marketing agency in Hyderabad offering SEO, Google Ads, Meta Ads, social media marketing, web design and lead generation services.",
  url: "https://skyhitmedia.com/digital-marketing-agency-hyderabad",
  telephone: "+91-9100000000",
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
    name: "Hyderabad",
  },
  sameAs: [
    "https://www.facebook.com/skyhitmedia",
    "https://www.instagram.com/skyhitmedia",
    "https://www.linkedin.com/company/skyhitmedia",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does digital marketing cost in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital marketing costs in Hyderabad vary based on your goals, services required and business size. At SKYHIT Media, we offer flexible packages starting from ₹15,000/month for startups to fully custom enterprise solutions.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to show results in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Hyderabad businesses start seeing measurable SEO improvements within 3–6 months. For highly competitive keywords, it may take 6–12 months. We provide monthly progress reports throughout.",
      },
    },
    {
      "@type": "Question",
      name: "Which is the best digital marketing agency in Hyderabad for startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SKYHIT Media is the preferred choice for Hyderabad startups because we offer flexible pricing, dedicated account managers, and strategies tailored to deliver maximum results on limited budgets.",
      },
    },
    {
      "@type": "Question",
      name: "Do you run Google Ads and Meta Ads for Hyderabad businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are a Google Partner and Meta Business Partner. Our PPC team manages Google Search, Display, Performance Max, and YouTube campaigns while our Meta team handles Facebook and Instagram Ads.",
      },
    },
    {
      "@type": "Question",
      name: "What is performance marketing and is it right for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Performance marketing is a form of digital advertising where you only pay for measurable outcomes — leads, sales, or conversions. It is ideal for Hyderabad businesses that want measurable ROI.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with local SEO for my Hyderabad business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Local SEO is one of our core strengths. We optimize your Google Business Profile, build local citations, create location-specific landing pages, and earn local backlinks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer social media management for Hyderabad businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide end-to-end social media management covering strategy, content creation, graphic design, video production, community management and paid promotion.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does SKYHIT Media specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have deep expertise across Real Estate, Hospitals, Education, Restaurants, Manufacturing, Finance, Startups, Gyms, Builders, and Interior Designers in Hyderabad.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure the success of digital marketing campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track every campaign against clear KPIs: Cost Per Lead, ROAS, CTR, Conversion Rate, Organic Traffic Growth, and Keyword Rankings. Every client gets a live Google Looker Studio dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide website design services in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design and develop high-converting websites using Next.js — speed-optimized (Lighthouse 90+), mobile-first, SEO-ready, and built with CRO best practices.",
      },
    },
    {
      "@type": "Question",
      name: "What is WhatsApp Marketing and how can it help my Hyderabad business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp Business API marketing allows automated, personalized messages to opted-in customers. Our clients see 94% open rates vs 20% on email.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can SKYHIT Media start on my campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can onboard and launch campaigns within 7–14 business days. Google Ads campaigns can go live in 3–5 days; SEO strategies take about 2 weeks to set up properly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a free digital marketing audit for Hyderabad businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer a completely free, no-obligation digital marketing audit including SEO audit, Google Ads review, social media analysis, and competitor benchmarking.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have experience with ecommerce digital marketing in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We run successful ecommerce campaigns for Hyderabad brands covering Google Shopping Ads, Meta Catalogue Ads, SEO, email marketing, and WhatsApp cart recovery.",
      },
    },
    {
      "@type": "Question",
      name: "What makes SKYHIT Media different from other digital marketing agencies in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three things: We are 100% local, we are fully transparent, and we are obsessed with ROI — not vanity metrics.",
      },
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SKYHIT Media",
  url: "https://skyhitmedia.com",
  logo: "https://skyhitmedia.com/images/skyhitmedia-logo.png",
  description:
    "Best digital marketing agency in Hyderabad offering SEO, Google Ads, Meta Ads, social media, website design and performance marketing.",
  telephone: "+91-9100000000",
  email: "hello@skyhitmedia.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "HITEC City, Madhapur",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/skyhitmedia",
    "https://www.instagram.com/skyhitmedia",
    "https://www.linkedin.com/company/skyhitmedia",
    "https://www.youtube.com/@skyhitmedia",
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
      name: "Digital Marketing Agency Hyderabad",
      item: "https://skyhitmedia.com/digital-marketing-agency-hyderabad",
    },
  ],
};

/* ═══════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════ */
export default function DigitalMarketingAgencyHyderabadPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Premium Ad UI Components ── */}
      <DigitalMarketingAdUI
        heroSubTitle="Reach the right audience, strengthen your online presence, and grow your business with innovative online marketing strategies tailored to your goals."
        customIntro="Online Marketing Company in Hyderabad That Drives Real Growth<br><br>Today, customers discover businesses through multiple online channels long before they make a purchase. Whether through Google search, social media, or online advertisements, a strong digital presence is essential for long-term business success. However, standing out in a crowded market requires more than just being online—it requires a strategic marketing approach that turns visibility into revenue.<br><br>SKYHIT Media is a trusted online marketing company in Hyderabad, dedicated to helping businesses build and scale their digital footprint. We specialize in creating high-performing online marketing strategies that connect businesses with their ideal customers. From small startups to established brands, we provide scalable solutions designed to generate qualified leads and improve online conversions.<br><br>Our expertise covers every aspect of online marketing. We utilize advanced Search Engine Optimization (SEO) techniques to improve your rankings and bring in high-quality organic traffic. For businesses looking for immediate results, our Pay-Per-Click (PPC) advertising campaigns are designed to maximize ROI by targeting potential customers who are ready to buy. We also offer engaging social media marketing services that build brand awareness and loyalty.<br><br>What sets our online marketing company apart is our commitment to data and analytics. We don't rely on guesswork when it comes to your marketing budget. Every campaign we launch is carefully monitored, tracked, and optimized to ensure it delivers the best possible results. By continuously analyzing performance metrics, we identify new opportunities for growth and ensure your marketing efforts remain highly effective.<br><br>We understand that every business has different needs and challenges. That's why we take a customized approach to online marketing. Whether you are an eCommerce business looking to increase online sales or a service provider aiming to generate more local enquiries, we develop a marketing strategy that aligns perfectly with your objectives.<br><br>A successful online marketing strategy requires continuous adaptation. Digital trends evolve, search algorithms change, and customer behavior shifts. Our team stays ahead of these changes, ensuring your marketing strategy remains effective and competitive in the long term.<br><br>If you are looking for an experienced Online Marketing Company in Hyderabad to help your business achieve measurable results, SKYHIT Media provides the strategies, expertise, and dedication needed to accelerate your digital growth."
      />
    </>
  );
}

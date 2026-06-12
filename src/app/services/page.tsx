import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Banner from "@/components/Banner";

const GetInTouch = dynamic(() => import("@/components/GetInTouch"));
const ServiceCardList = dynamic(() => import("@/components/ServiceCardList"));
const WhyChooseUsSection = dynamic(() => import("@/components/Services/WhyChooseUsSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const LazySection = dynamic(() => import("@/components/LazySection"));

const cardData = [
  {
    icon: "/images/digital_marketing_gif-skyhitmedia.gif",
    image: "/images/digital-marketing-skyhitmedia.webp",
    title: "Digital Marketing",
    link: "/best-digital-marketing-agency",
    description: "Boost your online presence with expert digital marketing strategies. Drive traffic, increase digital marketing strategies. Drive traffic, increase",
  },
  {
    icon: "/images/webdesign_gif-skyhitmedia.gif",
    image: "/images/web-design-service-skyhitmedia.webp",
    title: "Website Design & Development",
    link: "/website-design-and-development-services",
    description: "Transform your online presence with custom website design and development. Create stunning, user-friendly websites that engage ",
  },
  {
    icon: "/images/performance_gif-skyhitmedia.gif",
    image: "/images/marketing-skyhitmedia.webp",
    title: "Performance Marketing",
    link: "/Performance-marketing-agency",
    description: "Maximize ROI with performance marketing strategies. Target the right audience, optimize campaigns, and drive measurable results ",
  },
  {
    icon: "/images/seo_gif-skyhitmedia.gif",
    image: "/images/seo-service-skyhitmedia.webp",
    title: "Search Engine Optimization (SEO)",
    link: "/search-engine-optimization-agency",
    description: "Enhance your website's visibility with expert SEO strategies. Improve rankings, drive organic traffic, and increase conversions to grow your  ",
  },
  {
    icon: "/images/social_media_gif-skyhitmedia.gif",
    image: "/images/social-media-service-skyhitmedia.webp",
    title: "Social Media Marketing (SMM)",
    link: "/social-media-marketing-agency",
    description: "Engage your audience with impactful social media marketing. Build brand awareness, increase interaction, and drive traffic through ",
  },
  {
    icon: "/images/ppc_gif-skyhitmedia.gif",
    image: "/images/pay-per-click-service-skyhitmedia.webp",
    title: "Pay-Per-Click Advertising (PPC)",
    link: "/pay-per-click-advertising-agency",
    description: "Maximize your ad spend with Pay-Per-Click advertising. Drive targeted traffic, increase conversions, and achieve measurable results ",
  },
  {
    icon: "/images/graphic_designing_gif-skyhitmedia.gif",
    image: "/images/brand-graphic-design-skyhitmedia.webp",
    title: "Branding & Graphic Design",
    link: "/branding-and-graphic-design-agency",
    description: "Create a memorable brand identity with professional branding and graphic design services. From logos to visuals, we craft designs",
  },
  {
    icon: "/images/influencer_gif-skyhitmedia.gif",
    image: "/images/Influencer-Marketing-skyhitmedia.webp",
    title: "Influencer Marketing",
    link: "/influencer-marketing-agency",
    description: "Leverage the power of influencer marketing to amplify your brand. Collaborate with trusted influencers to boost awareness ",
  },
  {
    icon: "/images/analytics-reporting-gif-skyhitmedia.gif",
    image: "/images/Analytics-reports-skyhitmedia.webp",
    title: "Analytics & Reporting",
    link: "/analytics-and-reporting-agency",
    description: "Unlock valuable insights with analytics and reporting services. Track performance, measure results, and make data-driven decisions ",
  },
  {
    icon: "/images/whatsapp-gif-skyhitmedia.gif",
    image: "/images/whatsapp-marketing-skyhitmedia.webp",
    title: "Whatsapp Marketing",
    link: "/whatsapp-marketing-agency",
    description: "Connect with your audience instantly through WhatsApp marketing. Send personalized messages, promotions, and updates directly to customers",
  },
  {
    icon: "/images/orm-gif-skyhitmedia.gif",
    image: "/images/online-reputation-skyhitmedia.webp",
    title: "Online Reputation Management (ORM)",
    link: "/online-reputation-management-agency",
    description: "Protect and enhance your brand's reputation with Online Reputation Management. Monitor reviews, address feedback, and build a positive",
  },
  {
    icon: "/images/cyber-security-gif-skyhitmedia.gif",
    image: "/images/cyber-security-skyhitmedia.webp",
    title: "Cyber Security",
    link: "/cyber-security-services",
    description: "Safeguard your business with top-tier cyber security solutions. Protect sensitive data, prevent breaches, and ensure online safety ",
  },
];

const testimonials = [
  {
    name: "Shreya",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Skyhit Media is the best Digital Marketing Agency! Their strategies improved our online presence, boosted traffic, and increased sales. Highly professional and results-driven team!",
  },
  {
    name: "Satish Varma",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Skyhit Media transformed our business with their expert digital marketing services. More leads, better engagement, and increased revenue. Highly recommend this agency!",
  },
  {
    name: "Rohan",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Professional and innovative Digital Marketing Agency! Skyhit Media's data-driven strategies helped us rank higher on Google and attract more customers. Truly impressive!",
  },
];

export const metadata: Metadata = {title: "Our Digital Marketing Services | Skyhit Media Hyderabad",
  description:
    "Explore Skyhit Media's full range of digital marketing services including SEO, PPC, social media, web design, branding, and more.",
  keywords: ["Digital Marketing", "SEO", "PPC", "Web Design", "Skyhit Media", "Hyderabad"],
  openGraph: {
    images: [
      {
        url: "https://www.skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Skyhit Media",
      }
    ],
    title: "Our Digital Marketing Services | Skyhit Media Hyderabad",
    description: "Explore Skyhit Media's full range of digital marketing services including SEO, PPC, social media, web design, branding, and more.",
    url: "https://www.skyhitmedia.com/services",
  },
  alternates: { canonical: "https://www.skyhitmedia.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Banner title="Our Services" imgSrc="/images/all-services.webp" />
      <LazySection>
        <ServiceCardList
          services={cardData}
          sectionTitle="Best Digital Marketing Agency Services We Offer"
          sectionDescription="Transform Your Business with Expert Digital Marketing Services"
        />
        <WhyChooseUsSection
          title="Why Choose Skyhit Media"
          subTitle="Boost Your Revenue Growth Rate and Achieve Online Success"
          description1="Our Marketing Strategies"
          description2="Skyhit Media is your trusted partner for innovative and results-driven digital solutions. Our expert team tailors services across digital marketing, branding, and technology to help your business thrive. With a focus on strategy, creativity, and measurable results, we ensure your goals are met efficiently. Choose Skyhit Media for personalized, high-quality services that accelerate growth and enhance your brand."
          buttonText="Contact Us"
          videoUrl="/images/Best-DigitaI-Marketing-Agency-skyhit-media.mp4"
          videoLabel="Play Video"
        />
        <TestimonialsSection
          testimonials={testimonials}
          title="CLIENT REVIEWS"
          subtitle="What People Say About Us?"
        />
        <GetInTouch />
      </LazySection>
    </>
  );
}

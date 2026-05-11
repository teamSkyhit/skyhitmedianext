import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/Services/HeroSection";
import ServiceHeroPreload from "@/components/Services/HeroPreload";

const AboutSection = dynamic(() => import("@/components/Services/AboutSection"));
const ServiceCardList = dynamic(() => import("@/components/ServiceCardList"));
const WhyChooseUsSection = dynamic(() => import("@/components/Services/WhyChooseUsSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const ReviewSection = dynamic(() => import("@/components/Services/ReviewSection"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const GetInTouch = dynamic(() => import("@/components/GetInTouch"));
const LazySection = dynamic(() => import("@/components/LazySection"));

const serviceData = {
  deskImgLink: "/images/ppc-hero-section.webp",
  mobImgLink: "/images/ppc-hero-section-mob.webp",
  title: "Pay-Per-Click Advertising Agency",
  subTitle:
    "Pay-Per-Click Advertising Agency at SKYHIT Media - Data-Driven PPC Campaigns to Drive Targeted Traffic, Maximize ROI & Boost Conversions.",
};

const cardData = [
  {
    icon: "/images/google-ads-management-icon.png",
    image: "/images/google-ads-skyhitmedia.png",
    title: "Google Ads Management",
    description: "Comprehensive campaign setup, management, and optimization on Google Ads to maximize reach and conversions ",
    link: "#",
  },
  {
    icon: "/images/bing-ads-managent-icon.png",
    image: "/images/bing-ads-skyhitmedia.png",
    title: "Bing Ads Management",
    description: "Running targeted campaigns on Bing Ads to capture additional audience segments and drive traffic",
    link: "#",
  },
  {
    icon: "/images/media-ads-icon.png",
    image: "/images/social-media-ads-skyhitmedia.webp",
    title: "Social Media Ads",
    description: "Managing paid advertising on platforms like Facebook, Instagram, LinkedIn, and Twitter to increase engagement and brand awareness ",
    link: "#",
  },
  {
    icon: "/images/keyword-research-targeting-icon.png",
    image: "/images/keyword-research-skyhitmedia.webp",
    title: "Keyword Research & Targeting",
    description: "Identifying high-performing keywords to ensure your ads are targeting the most relevant audience ",
    link: "#",
  },
  {
    icon: "/images/dis-advertising-icon.png",
    image: "/images/display-advt-skyhitmedia.png",
    title: "Display Advertising",
    description: "Designing and managing visual banner ads across Google Display Network and partner websites to boost visibility ",
    link: "#",
  },
  {
    icon: "/images/remarketing-campaigns-icon.png",
    image: "/images/social-media-ads-skyhitmedia.webp",
    title: "Remarketing Campaigns",
    description: "Re-engaging users who have visited your site but haven't converted, encouraging them to take action ",
    link: "#",
  },
  {
    icon: "/images/shopping-ads-icon.png",
    image: "/images/shopping-ads-skyhitmedia.webp",
    title: "Shopping Ads Management",
    description: "Creating and optimizing Google Shopping or Bing Shopping campaigns for e-commerce businesses to increase product sales ",
    link: "#",
  },
  {
    icon: "/images/landing-page-icon.png",
    image: "/images/landing-page-skyhitmedia.webp",
    title: "Landing Page Optimization",
    description: "Designing and optimizing landing pages to improve ad relevance, user experience, and conversion rates ",
    link: "#",
  },
  {
    icon: "/images/a-b-testing-icon.png",
    image: "/images/ab-testing-skyhitmedia.webp",
    title: "A/B Testing",
    description: "Testing different ad creatives, headlines, and formats to find the highest-performing combinations ",
    link: "#",
  },
  {
    icon: "/images/ppc-analytics-icon.png",
    image: "/images/pp-service-c-skyhitmedia.webp",
    title: "PPC Analytics & Reporting",
    description: "Providing detailed performance insights and actionable recommendations to optimize campaigns and maximize ROI ",
    link: "#",
  },
  {
    icon: "/images/geotargeting-icon.png",
    image: "/images/geotargeting-skyhitmedia.webp",
    title: "Geotargeting Campaigns",
    description: "Running location-based ads to reach specific audiences in targeted areas, ideal for local businesses",
    link: "#",
  },
  {
    icon: "/images/budget-management-icon.png",
    image: "/images/budget-marketing-skyhitmedia.webp",
    title: "Budget Management",
    description: "Allocating and optimizing ad spend to ensure maximum results within your budget constraints ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Pooja",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Skyhit Media's targeted PPC ads helped us reach the right audience. Excellent strategy, great execution, and impressive results!",
  },
  {
    name: "Vikram Shah",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Highly recommend Skyhit Media for PPC! Their expertise in Google Ads and social media ads delivered great returns. Outstanding service!",
  },
  {
    name: "Amit Khanna",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Skyhit Media's PPC campaigns delivered amazing results! Higher conversions, lower costs, and better ROI. A truly professional and data-driven team!",
  },
];

const faqs = [
  {
    question: "Pay Per Click Advertising Agency - Skyhit Media Digital Marketing Agency",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["Welcome to <b>Skyhit Media</b>, your trusted <b>Pay Per Click Advertising Agency</b>. We specialize in delivering highly effective PPC advertising services to help businesses reach their target audience and maximize their return on investment (ROI)."],
        },
        {
          headings: ["Why Choose Skyhit Media as Your PPC Advertising Agency?", ""],
          texts: ["At <b>Skyhit Media</b>, we understand the power of <b>pay per click (PPC) advertising</b> in driving immediate and measurable results. As a leading <b>PPC marketing agency</b>, we focus on creating customized PPC strategies that align with your business objectives."],
        },
      ],
    },
  },
];

export const metadata: Metadata = {
  title: "#1 Pay Per Click Advertising Agency | Skyhit Media Boost ROI",
  description:
    "Pay Per Click Advertising Agency Skyhit Media offers expert PPC services to increase your online visibility, drive targeted traffic, and maximize your ROI.",
};

export default function PpcPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/ppc-hero-section.webp" mobImg="/images/ppc-hero-section-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Expert Pay-Per-Click Advertising Agency"
          description1="As a top PPC advertising agency in Hyderabad, we specialize in delivering high-performing PPC marketing campaigns that drive measurable results. Our expert team offers a range of services, including pay-per-click advertising, PPC ad management, and SEO & PPC integration to maximize your ROI."
          description2="Whether you're looking for targeted PPC ads or comprehensive digital marketing strategies, we provide tailored solutions to boost your brand's online visibility and generate quality leads."
          imageUrl="/images/ppc-2ndsection-vector-skyhitmedia.webp"
          altText="About Digital Marketing Service"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Expert Pay Per Click Services We Offer"
          sectionDescription="Optimized PPC ads to enhance conversions and maximize ROI"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best for PPC Advertising Services"
          subTitle="Expert PPC strategies to drive traffic and boost your ROI"
          description1="Our PPC Marketing Strategies"
          description2="As a top PPC agency in Hyderabad, our strategies are designed to drive targeted traffic and maximize conversions. We specialize in integrating SEO and PPC services to ensure comprehensive digital marketing success. Our tailored pay-per-click campaigns focus on optimizing ROI, utilizing the best PPC advertising techniques to enhance visibility and generate quality leads for your business."
          buttonText="Contact Us"
          videoUrl="/images/Best-DigitaI-Marketing-Agency-skyhit-media.mp4"
          videoLabel="Play Video"
        />
        <TestimonialsSection
          testimonials={testimonials}
          title="CLIENT REVIEWS"
          subtitle="What People Say About Us?"
        />
        <FAQ faqs={faqs} />
        <GetInTouch />
      </LazySection>
    </>
  );
}

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
  deskImgLink: "/images/performance-marketing-hero-section-skyhitmedia.webp",
  mobImgLink: "/images/performance-marketing-hero-section-skyhitmedia-mob.webp",
  title: "Performance Marketing Agency",
  subTitle:
    "Performance Marketing Agency at SKYHIT Media - Data-Driven Strategies for Optimized Campaigns, Measurable Results & Strong ROI.",
};

const cardData = [
  {
    icon: "/images/paid-search-advertising-icon.png",
    image: "/images/paid-search-advt-skyhitmedia.webp",
    title: "Paid Search Advertising (PPC)",
    description: "Targeted campaigns on Google Ads, Bing, and other search engines to drive high-intent traffic and immediate conversions ",
    link: "/pay-per-click-advertising-agency",
  },
  {
    icon: "/images/social-advertising-icon.png",
    image: "/images/social-media-advt-skyhitmedia.webp",
    title: "Social Media Advertising",
    description: "Running optimized ad campaigns across Facebook, Instagram, LinkedIn, and TikTok to boost engagement, brand awareness, and sales ",
    link: "#",
  },
  {
    icon: "/images/search-engine-icon.png",
    image: "/images/search-e-o-skyhitmedia.webp",
    title: "Search Engine Optimization (SEO)",
    description: "Advanced SEO strategies that improve your website's visibility on search engines, driving organic, high-converting traffic ",
    link: "/search-engine-optimization-agency",
  },
  {
    icon: "/images/affiliate-marketing-icon.png",
    image: "/images/affilate-marketing-skyhitmedia.webp",
    title: "Affiliate Marketing",
    description: "Building and managing partnerships with affiliates who promote your products in exchange for a commission on successful sales or leads ",
    link: "#",
  },
  {
    icon: "/images/retargeting-remarkeing-icon.png",
    image: "/images/remarketing-skyhitmedia.webp",
    title: "Retargeting & Remarketing",
    description: "Re-engage previous website visitors or users who interacted with your ads to bring them back for higher conversion rates ",
    link: "#",
  },
  {
    icon: "/images/conversion-icon.png",
    image: "/images/Conversion-Rate-Optimization-skyhitmedia.png",
    title: "Conversion Rate Optimization (CRO)",
    description: "Analyzing and improving website user experience to increase the percentage of visitors who convert into leads or customers  ",
    link: "#",
  },
  {
    icon: "/images/email-marketing-campaigns-icon.png",
    image: "/images/Email-Marketing-Integration-skyhitmedia.png",
    title: "Email Marketing Campaigns",
    description: "Designing and running effective email campaigns that nurture leads, drive sales, and increase customer loyalty. ",
    link: "#",
  },
  {
    icon: "/images/display-advertising-icon.png",
    image: "/images/display-advt-skyhitmedia.png",
    title: "Display Advertising",
    description: "Using display ads, banners, and videos across the web and apps to increase brand visibility and reach a larger audience ",
    link: "#",
  },
  {
    icon: "/images/programmatic-icon.png",
    image: "/images/programattic-advt-skyhitmedia.webp",
    title: "Programmatic Advertising",
    description: "Automating the ad buying process, using data and real-time bidding to place ads efficiently across various digital channels ",
    link: "#",
  },
  {
    icon: "/images/influencer-icon.png",
    image: "/images/Influencer-Marketing-skyhitmedia.webp",
    title: "Influencer Marketing",
    description: "Collaborating with influential content creators to promote your products or services to a highly engaged audience ",
    link: "/influencer-marketing-agency",
  },
  {
    icon: "/images/video-marketing-icon.png",
    image: "/images/video-marketing-skyhitmedia.webp",
    title: "Video Marketing",
    description: "Crafting compelling video ads on platforms like YouTube, Facebook, and Instagram to drive engagement and boost conversions ",
    link: "#",
  },
  {
    icon: "/images/lead-generation-icon.png",
    image: "/images/lead-gen-skyhitmedia.webp",
    title: "Lead Generation Campaigns",
    description: "Targeted campaigns focused on generating high-quality leads through forms, offers, and content, helping to grow your customer base ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Ritika Sharma",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Exceptional service! Their targeted ads improved our ROI significantly. Skyhit Media truly understands digital marketing and delivers outstanding performance-driven campaigns.",
  },
  {
    name: "Vikram Patel",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Skyhit Media helped us scale our business with precise ad campaigns. Great optimization, better leads, and fantastic customer support!",
  },
  {
    name: "Rohan Malhotra",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Brilliant results! Skyhit Media's expertise in performance marketing helped us reach the right audience and increase revenue. Highly recommended!",
  },
];

const faqs = [
  {
    question: "Performance Marketing Agency | SkyHit Media Digital Marketing Agency",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["Welcome to SkyHit Media, your trusted <b>performance marketing agency </b>offering high-quality digital marketing services to boost your business's online presence. As one of the <b>best performance marketing agencies, </b>we specialize in driving measurable results through targeted campaigns and data-driven strategies."],
        },
        {
          headings: ["What is a Performance Marketing Agency?", ""],
          texts: ["When searching for <b>performance marketing companies,</b> you want to ensure you partner with a team that understands your business needs. <a href='/'><b>SkyHit Media</b></a> stands out as one of the <b>best performance marketing agencies</b>in the industry due to our commitment to delivering results that matter."],
        },
      ],
    },
  },
];

export const metadata: Metadata = {
  title: "#1 Performance Marketing Agency | Skyhit Media Drives Results",
  description:
    "Performance Marketing Agency - Skyhit Media boosts ROI with data-driven strategies, driving targeted traffic and increasing conversions. Get started today!",
};

export default function PerformancePage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/performance-marketing-hero-section-skyhitmedia.webp" mobImg="/images/performance-marketing-hero-section-skyhitmedia-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Results-Driven Performance Marketing Agency"
          description1="Our performance marketing agency specializes in driving measurable results through data-driven campaigns. We focus on optimizing ROI by targeting the right audience with precision and utilizing advanced strategies in SEO, PPC, and social media advertising. "
          description2="With a focus on performance and continuous improvement, we ensure every dollar spent delivers maximum value. Partner with our agency for effective, results-oriented performance marketing solutions that help your business achieve its growth and revenue goals."
          imageUrl="/images/performance-marketing-2nd-section-skyhitmedia.webp"
          altText="Performance Marketing Service Skyhitmedia"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Performance Marketing Services We Offer"
          sectionDescription="Drive Measurable Results with a Leading Performance Marketing Agency"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best for Performance Marketing Services"
          subTitle="Boost Your Brand with Precision Marketing "
          description1="Drive Growth with Proven Strategies"
          description2="Skyhit Media is a leading performance marketing agency in India, offering data-driven solutions to help businesses grow. Our expert team specializes in performance marketing ads, ensuring high conversion rates and maximum ROI. With top-notch performance marketing services in Hyderabad, we create targeted campaigns that drive real results, boosting your brand's visibility and revenue effectively."
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

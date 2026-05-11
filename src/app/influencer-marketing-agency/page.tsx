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
  deskImgLink: "/images/influencer-marketing-hero-section.webp",
  mobImgLink: "/images/influencer-marketing-hero-section-mob.webp",
  title: "Influencer Marketing Agency",
  subTitle:
    "Influencer Marketing Agency at SKYHIT Media - Connect with Top Influencers to Boost Engagement & Expand Reach.",
};

const cardData = [
  {
    icon: "/images/influencer-identification-outreach-icon.png",
    image: "/images/influencer-identification.webp",
    title: "Influencer Identification & Outreach",
    description: "Finding the right influencers based on your target audience, niche, and goals ",
    link: "#",
  },
  {
    icon: "/images/campaign-strategy-development-icon.png",
    image: "/images/campaign-strategy-development.webp",
    title: "Campaign Strategy Development",
    description: "Creating tailored influencer marketing campaigns that align with your brand objectives and resonate with your audience ",
    link: "#",
  },
  {
    icon: "/images/influencer-vetting-icon.png",
    image: "/images/Influencer-vetting.webp",
    title: "Influencer Vetting",
    description: "Ensuring influencers are a good match for your brand by assessing their credibility, audience engagement, and authenticity ",
    link: "#",
  },
  {
    icon: "/images/contract-negotiation-management-icon.png",
    image: "/images/contract&negotiation-management.webp",
    title: "Contract & Negotiation Management",
    description: "Handling agreements, terms, and compensation to ensure a smooth partnership ",
    link: "#",
  },
  {
    icon: "/images/content-creation-collabration-icon.png",
    image: "/images/content-creation&collaboration.webp",
    title: "Content Creation & Collaboration",
    description: "Working with influencers to create high-quality content that aligns with both their style and your brand's message ",
    link: "#",
  },
  {
    icon: "/images/social-media-platform-optimization-icon.png",
    image: "/images/social-media-platform-optimization.webp",
    title: "Social Media Platform Optimization",
    description: "Leveraging the right social media platforms (Instagram, YouTube, TikTok, etc.) for maximum impact ",
    link: "#",
  },
  {
    icon: "/images/brand-ambassadorship-icon.png",
    image: "/images/brand-ambassadorship.webp",
    title: "Brand Ambassadorship Programs",
    description: "Establishing long-term relationships with influencers to build consistent brand promotion over time ",
    link: "#",
  },
  {
    icon: "/images/micro-influencer-icon.png",
    image: "/images/micro-influencer.webp",
    title: "Micro-Influencer Campaigns",
    description: "Partnering with micro-influencers who have highly engaged niche audiences to drive targeted results ",
    link: "#",
  },
  {
    icon: "/images/influencer-event-management-icon.png",
    image: "/images/influencer-event-management.webp",
    title: "Influencer Event Management",
    description: "Organizing events, product launches, or collaborations with influencers to promote your brand in an engaging and authentic way ",
    link: "#",
  },
  {
    icon: "/images/performance-tracking-icon.png",
    image: "/images/performance-tracking.webp",
    title: "Performance Tracking & Analytics",
    description: "Monitoring and analyzing the performance of influencer campaigns to measure ROI, engagement, and overall effectiveness ",
    link: "#",
  },
  {
    icon: "/images/cross-platform-icon.png",
    image: "/images/class-platform.webp",
    title: "Cross-Platform Campaign Management",
    description: "Running influencer campaigns across multiple platforms, ensuring consistent brand messaging and wider reach ",
    link: "#",
  },
  {
    icon: "/images/influencer-advocacy-icon.png",
    image: "/images/influencer-advocacy.webp",
    title: "Influencer Marketing Services",
    description: "Managing the influencer relationship to maintain positive brand representation and customer loyalty ",
    link: "/influencer-marketing-agency",
  },
];

const testimonials = [
  {
    name: "Swetha",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Skyhit Media connected us with the right influencers, boosting our brand awareness and sales. Their influencer marketing strategies work wonders!",
  },
  {
    name: "Mohan",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Amazing results! Their influencer partnerships helped us reach a wider audience and increased engagement. Highly professional team!",
  },
  {
    name: "Varma",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Skyhit Media made influencer marketing easy and effective! Great connections, excellent execution, and impressive ROI. Highly recommend!",
  },
];

const faqs = [
  {
    question: "Influencer Marketing Agency: Grow Your Brand with the Right Influencers",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["In today's world, influencer marketing is one of the best ways to help your brand reach the right people. At Skyhit Media, we are a top <b>Influencer Marketing Agency</b> dedicated to helping brands like yours connect with influencers who can boost your online presence and grow your business."],
        },
        {
          headings: ["What is Influencer Marketing?", ""],
          texts: ["<b>Influencer marketing</b> is when brands partner with popular social media figures—who have large and engaged followers—to promote their products or services. As a leading <b>Influencer Marketing Agency,</b> we know how to create campaigns that work, connecting brands to the right influencers to reach their target audiences."],
        },
      ],
    },
  },
];

export const metadata: Metadata = {
  title: "#1 Influencer Marketing Agency | SkyHit Media Influencer Agency",
  description:
    "Influencer Marketing Agency SkyHit Media connects brands with top influencers to boost engagement, enhance reach, and drive measurable business growth.",
};

export default function InfluencerPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/influencer-marketing-hero-section.webp" mobImg="/images/influencer-marketing-hero-section-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Trusted Influencer Marketing Agency"
          description1="Our Influencer Marketing Service connects your brand with the right influencers to amplify your message. We work with a diverse network of influencers across various industries and platforms to create authentic, impactful campaigns. By leveraging their credibility and reach, we help increase brand awareness, foster trust, and drive conversions."
          description2="Our team ensures that every collaboration aligns with your brand values and target audience, delivering measurable results that enhance engagement and elevate your marketing strategy."
          imageUrl="/images/influencer-marketing-2ndsection-vector.png"
          altText="About Influencer Marketing Service"
          buttonText="Influencer Registration"
          buttonLink="/influencer-registration"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Best Digital Marketing Agency Services We Offer"
          sectionDescription="Transform Your Business with Expert Digital Marketing Services"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best Influencer Marketing Services"
          subTitle="Boost Your Revenue Growth Rate and Achieve Online Success"
          description1="our marketing strategies"
          description2="Skyhit Media excels in influencer marketing, connecting your brand with the right influencers to amplify your message. Our team identifies authentic influencers who resonate with your target audience, ensuring impactful campaigns. With data-driven strategies and transparent reporting, we maximize engagement and drive conversions. Choose Skyhit Media to harness the power of influencer marketing and elevate your brand."
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

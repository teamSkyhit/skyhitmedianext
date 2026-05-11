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
  deskImgLink: "/images/smm-hero-section.webp",
  mobImgLink: "/images/smm-hero-section-mob.webp",
  title: "Social Media Marketing Agency",
  subTitle:
    "Social Media Marketing Agency at SKYHIT Media - Result-Driven Strategies to Boost Engagement, Brand Awareness & Conversions Across All Platforms.",
};

const cardData = [
  {
    icon: "/images/social-media-strategy-development-icon.png",
    image: "/images/social--media-strategy-skyhitmedia.webp",
    title: "Social Media Strategy Development",
    description: "Crafting tailored strategies for platforms like Facebook, Instagram, LinkedIn, and Twitter to align with business goals ",
    link: "#",
  },
  {
    icon: "/images/content-creation-curation-icon.png",
    image: "/images/Content-Writing-skyhitmedia.webp",
    title: "Content Creation & Curation",
    description: "Designing engaging posts, videos, graphics, and stories that resonate with your audience ",
    link: "#",
  },
  {
    icon: "/images/social-media-advertising-icon.png",
    image: "/images/social-media-advt-skyhitmedia.webp",
    title: "Social Media Advertising",
    description: "Running paid ad campaigns to target specific demographics and maximize reach ",
    link: "#",
  },
  {
    icon: "/images/community-management-icon.png",
    image: "/images/community-management-skyhitmedia.webp",
    title: "Community Management",
    description: "Building and maintaining relationships with your audience by responding to comments, messages, and reviews  ",
    link: "#",
  },
  {
    icon: "/images/influencer-marketing-icon.png",
    image: "/images/Influencer-Marketing-skyhitmedia.webp",
    title: "Influencer Marketing",
    description: "Partnering with relevant influencers to promote your brand and drive engagement ",
    link: "/influencer-marketing-agency",
  },
  {
    icon: "/images/social-media-analytics-reporing-icon.png",
    image: "/images/social-media-analytics-skyhitmedia.webp",
    title: "Social Media Analytics & Reporting",
    description: "Monitoring performance and providing actionable insights to optimize campaigns ",
    link: "#",
  },
  {
    icon: "/images/profile-optimization.png",
    image: "/images/profile-optimisation-skyhitmedia.webp",
    title: "Profile Optimization",
    description: "Enhancing your social media profiles for better visibility and user experience ",
    link: "#",
  },
  {
    icon: "/images/social-listening-icon.png",
    image: "/images/social-listening-skyhitmedia.webp",
    title: "Social Listening",
    description: "Tracking brand mentions and trends to understand audience sentiment and stay ahead of competitors ",
    link: "#",
  },
  {
    icon: "/images/campaign-management-icon.png",
    image: "/images/campaign-management-skyhitmedia.webp",
    title: "Campaign Management",
    description: "Planning and executing time-bound campaigns to promote products, services, or events ",
    link: "#",
  },
  {
    icon: "/images/hashtag-research-strategy-icon.png",
    image: "/images/hashtag-research-strategy-skyhitmedia.webp",
    title: "Hashtag Research & Strategy",
    description: "Using relevant hashtags to improve content discoverability and reach",
    link: "#",
  },
  {
    icon: "/images/social-media-contests-promotions-icon.png",
    image: "/images/social-media-contest-skyhitmedia.webp",
    title: "Social Media Contests & Promotions",
    description: "Organizing engaging contests and giveaways to boost participation and brand loyalty ",
    link: "#",
  },
  {
    icon: "/images/reputation-managemet-icon.png",
    image: "/images/eputation-management-skyhitmedia.webp",
    title: "Social Media Marketing (SMM) Services",
    description: "Addressing negative feedback and maintaining a positive online presence for your brand ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Pooja Desai ",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Highly professional and creative! Their social media marketing boosted our brand awareness and brought in quality leads. Fantastic service!",
  },
  {
    name: "Vikram Shah",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Our social media engagement skyrocketed with Skyhit Media. They managed our campaigns efficiently and delivered great ROI. Excellent agency!",
  },
  {
    name: "Rohan Malhotra",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Skyhit Media transformed our social media presence. More engagement, better reach, and increased sales! Their expertise is outstanding.",
  },
];

const faqs = [
  {
    question: "Social Media Marketing Agency – Skyhit Media",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["In today's digital landscape, businesses need a strong online presence to stay ahead of the competition. Skyhit Media, a leading <b>Social Media Marketing Agency,</b> provides top-notch solutions to help businesses enhance their brand visibility, engage with their audience, and drive conversions."],
        },
        {
          headings: ["Why Choose Skyhit Media as Your Social Media Marketing Agency?", ""],
          texts: ["As a trusted social media marketing agency in Hyderabad, Skyhit Media has worked with various brands to develop effective social media strategies."],
        },
      ],
    },
  },
];

export const metadata: Metadata = {
  title: "#1 Social Media Marketing Agency | Skyhit Media Drives Growth",
  description:
    "Skyhit Media, a top social media marketing agency, helps businesses grow with expert strategies, increasing engagement, and driving conversions. Start today!",
};

export default function SmmPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/smm-hero-section.webp" mobImg="/images/smm-hero-section-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle=" Social Media Marketing Agency Experts"
          description1="Skyhit Media is a leading social media marketing agency in Hyderabad, offering expert social media marketing services designed to elevate your brand's online presence. As a trusted social media marketing company, we provide a range of solutions, including social media management services, online social media marketing, and targeted social media advertising."
          description2="Our team of experts creates customized strategies for businesses seeking to enhance their reach. Whether you're looking for social media services or a social media marketing agency near me, we deliver measurable results."
          imageUrl="/images/social-media-2ndsection-vector.png"
          altText="About Social Media Marketing (SMM) Service"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Best Social Media Marketing Services We Offer"
          sectionDescription="Effective Social Media Management Solutions"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best for Social Media Marketing"
          subTitle="Tailored Solutions from a Trusted Social Media Company"
          description1="Our Social Media Marketing Strategies"
          description2="At Skyhit Media, our social media marketing services are designed to boost your brand's visibility. As a leading social media marketing agency, we provide customized social media management services and online social media marketing strategies. Whether you're looking for social media advertising companies or social media marketing in Hyderabad, our expert team ensures your brand gets the attention it deserves."
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

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
  deskImgLink: "/images/Online-Reputation-Management.webp",
  mobImgLink: "/images/Online-Reputation-Management-mob.webp",
  title: "Online Reputation Management Agency",
  subTitle:
    "Online Reputation Management Agency at SKYHIT Media - Protect & Enhance Your Brand's Image with Strategic Reputation Management.",
};

const cardData = [
  {
    icon: "/images/brand-monitoring-icon.png",
    image: "/images/brand-monitering.webp",
    title: "Brand Monitoring",
    description: "Track brand mentions across digital platforms to stay informed and respond proactively ",
    link: "#",
  },
  {
    icon: "/images/review-management-icon.png",
    image: "/images/review-management.webp",
    title: "Review Management",
    description: "Encourage positive feedback, respond to reviews, and manage online reputation effectively ",
    link: "#",
  },
  {
    icon: "/images/serm-icon.png",
    image: "/images/Search-Engine-Reputation-Management(SERM).webp",
    title: "Search Engine Reputation Management (SERM)",
    description: "Improve search rankings by promoting positive content and suppressing negatives ",
    link: "#",
  },
  {
    icon: "/images/crisis-management-icon.png",
    image: "/images/Crisis-Management.webp",
    title: "Crisis Management",
    description: "Handle online reputation crises quickly to minimize damage and restore trust",
    link: "#",
  },
  {
    icon: "/images/social-media-reputation-management-icon.png",
    image: "/images/social-meida-reputation.webp",
    title: "Social Media Reputation Management",
    description: "Monitor, manage, and enhance brand presence across social media platforms ",
    link: "#",
  },
  {
    icon: "/images/content-removal-icon.png",
    image: "/images/content-removal-supression.webp",
    title: "Content Removal & Suppression",
    description: "Remove or push down harmful content to maintain a clean brand image ",
    link: "#",
  },
  {
    icon: "/images/personal-reputation-icon.png",
    image: "/images/personal-reputation-management.webp",
    title: "Personal Reputation Management",
    description: "Protect and enhance an individual's online presence for personal and professional credibility ",
    link: "#",
  },
  {
    icon: "/images/competitor-icon.png",
    image: "/images/competitor-analysis.png",
    title: "Competitor Analysis",
    description: " Analyze competitors' reputations to craft better ORM strategies and stay ahead  ",
    link: "#",
  },
  {
    icon: "/images/public-relations-icon.png",
    image: "/images/public-relations.webp",
    title: "Public Relations (PR) & Outreach",
    description: "Build brand credibility through strategic PR campaigns and media outreach ",
    link: "#",
  },
  {
    icon: "/images/influencer-brand-advocacy-icon.png",
    image: "/images/brand-monitering.png",
    title: "Influencer & Brand Advocacy",
    description: "Leverage influencers and brand advocates to enhance trust and visibility  ",
    link: "#",
  },
  {
    icon: "/images/fake-news-defamation-control-icon.png",
    image: "/images/Fake-News&Defamation-Control.webp",
    title: "Fake News & Defamation Control",
    description: "Identify and counter false information to protect brand integrity",
    link: "#",
  },
  {
    icon: "/images/reputation-repair-services-icon.png",
    image: "/images/reputation-repair-services.webp",
    title: "Reputation Repair Services",
    description: "Rebuild damaged reputations with tailored strategies and proactive management ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Neha",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Skyhit Media improved our online reputation by managing reviews and boosting positive feedback. Our brand trust has grown significantly!",
  },
  {
    name: "Ramesh",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Their ORM strategies helped us handle negative reviews effectively and build a strong online presence. Excellent service!",
  },
  {
    name: "Pawan",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Professional and result-driven! Their ORM services helped us maintain a strong, trustworthy online image. Highly recommended!",
  },
];

const faqs = [
  {
    question: "Online Reputation Management Agency - Skyhit Media Digital Marketing Agency",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["In today's digital world, your online reputation can make or break your business. This is where <b>Skyhit Media Digital Marketing Agency</b> comes in. As a top-rated Online <b>Reputation Management Agency</b>, we specialize in helping businesses maintain a positive and strong online presence."],
        },
        {
          headings: ["Why Choose Skyhit Media as Your Online Reputation Management Agency?", ""],
          texts: ["As a <b>reputation management company</b>, we understand that your online image is essential for building trust with your customers. Our expert team at <a href='/' ><b>Skyhit Media</b></a> offers comprehensive solutions to protect and enhance your brand's image across the web."],
        },
      ],
    },
  },
];

export const metadata: Metadata = {
  title: "#1 Online Reputation Management Agency - Skyhit Media Services",
  description:
    "Online Reputation Management Agency, Skyhit Media, specializes in improving brand reputation, boosting online presence, and building trust with audiences.",
};

export default function OrmPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/Online-Reputation-Management.webp" mobImg="/images/Online-Reputation-Management-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Trusted Online Reputation Management Agency"
          description1="Looking for the best online reputation management company? Our top reputation management agency specializes in protecting and enhancing your brand's image. As a trusted ORM company, we help businesses maintain a positive online presence, remove negative content, and improve search results."
          description2="Partner with a leading online reputation management agency to safeguard your digital reputation. Contact us today and let our expert team take control of your brand's online success!"
          imageUrl="/images/orm-2ndsection-vector.webp"
          altText="About Online Reputation Management (ORM) Service"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Our Online Best Reputation Management Services"
          sectionDescription="Trusted Online Reputation Management Agency for a Stronger Digital Presence"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best Online Reputation Management Services"
          subTitle="Boost Your Revenue Growth Rate and Achieve Online Success"
          description1="Our Online Reputation Management strategies"
          description2="Our online reputation management company employs targeted marketing strategies to enhance your brand's digital presence. From SEO and content optimization to review management and social media monitoring, our ORM company ensures your reputation stays positive. Trust our top reputation management agency to deliver tailored solutions that protect and grow your business's online reputation effectively."
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

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
  deskImgLink: "/images/seo-hero-sec-skyhitmedia.webp",
  mobImgLink: "/images/seo-hero-sec-skyhitmedia-mob.webp",
  title: "Search Engine Optimization Agency",
  subTitle:
    "Search Engine Optimization Agency at SKYHIT Media - Advanced SEO Strategies to Boost Visibility, Drive Organic Traffic & Improve Rankings.",
};

const cardData = [
  {
    icon: "/images/page-seo-icon.png",
    image: "/images/on-page-seo-skyhitmedia.webp",
    title: "On-Page SEO",
    description: "Optimizing individual web pages (content, title tags, meta descriptions) to rank higher and earn relevant traffic ",
    link: "#",
  },
  {
    icon: "/images/keyword-research-icon.png",
    image: "/images/keyword-research-skyhitmedia.webp",
    title: "Keyword Research",
    description: "Identifying high-value keywords that your target audience is searching for, ensuring your content ranks for the right terms ",
    link: "#",
  },
  {
    icon: "/images/technical-icon.png",
    image: "/images/Technical-SEO-skyhitmedia.webp",
    title: "Technical SEO",
    description: "Optimizing website infrastructure (site speed, mobile-friendliness, URL structure, schema markup) to enhance search engine crawlability and user experience ",
    link: "#",
  },
  {
    icon: "/images/content-optimization-icon.png",
    image: "/images/Content-Writing-skyhitmedia.webp",
    title: "Content Optimization",
    description: "Creating and optimizing content to target specific keywords, improve readability, and drive engagement  ",
    link: "#",
  },
  {
    icon: "/images/local-icon.png",
    image: "/images/local-seo-skyhitmedia.webp",
    title: "Local SEO",
    description: "Optimizing for location-based searches, including Google My Business setup, local citations, and on-page optimization for local search visibility ",
    link: "#",
  },
  {
    icon: "/images/link-icon.png",
    image: "/images/link-building-skyhitmedia.webp",
    title: "Link Building",
    description: "Acquiring high-quality backlinks from reputable websites to improve domain authority and search engine rankings ",
    link: "#",
  },
  {
    icon: "/images/audits-icon.png",
    image: "/images/seo-audit-skyhitmedia.webp",
    title: "SEO Audits",
    description: "Conducting thorough site audits to identify technical issues, content gaps, and opportunities for improvement ",
    link: "#",
  },
  {
    icon: "/images/mobile-seo-icon.png",
    image: "/images/mobile-seo-skyhitmedia.webp",
    title: "Mobile SEO",
    description: "Ensuring your website is mobile-friendly, with optimized layouts and fast loading times for a seamless mobile experience ",
    link: "#",
  },
  {
    icon: "/images/Buy2.png",
    image: "/images/voice-search-opt-skyhitmedia.webp",
    title: "Voice Search Optimization",
    description: "Optimizing content for voice-based searches focusing on natural language queries and featured snippets ",
    link: "#",
  },
  {
    icon: "/images/ecommerce-seo-icon.png",
    image: "/images/e-commerce-seo-skyhitmedia.webp",
    title: "E-commerce SEO",
    description: "Enhancing the search visibility of online stores by optimizing product pages, category pages, and site architecture for better rankings",
    link: "#",
  },
  {
    icon: "/images/seo-analytics-reporting-icon.png",
    image: "/images/seo-analytics-skyhitmedia.webp",
    title: "SEO Analytics & Reporting",
    description: "Providing regular, data-driven reports that track SEO performance, keyword rankings, and overall website traffic ",
    link: "#",
  },
  {
    icon: "/images/competitor-analysiz-icon.png",
    image: "/images/competitor-analysis-skyhitmedia.webp",
    title: "Competitor Analysis",
    description: "Analyzing your competitors' SEO strategies and performance to uncover opportunities and ensure you're staying ahead in search rankings ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Neha Kapoor",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Professional and result-driven! Skyhit Media improved our search rankings significantly. We now get more inquiries and quality website traffic.",
  },
  {
    name: "Rohan Verma",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Their SEO services are top-notch! Our website went from invisible to page one on Google. Great team and excellent support!",
  },
  {
    name: "Vikram Malhotra",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Highly recommend Skyhit Media for SEO! Their techniques increased our brand visibility and helped us attract more customers online.",
  },
];

const faqs = [
  {
    question: "Search Engine Optimization Agency - Skyhit Media Digital Marketing Agency",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["Welcome to <b>Skyhit Media</b>, a leading <b>Search Engine Optimization Agency</b> dedicated to helping businesses improve their online presence and achieve higher search engine rankings. As a trusted <b>SEO agency in Hyderabad</b>, we specialize in delivering tailored SEO solutions that drive organic traffic, boost website visibility, and increase your ROI."],
        },
        {
          headings: ["Why Choose Skyhit Media as Your SEO Partner?", ""],
          texts: ["In today's competitive online market, appearing at the top of search engine results is crucial for your business success. As a <b>Search Engine Optimization Agency, Skyhit Media</b> uses the latest SEO techniques and strategies to improve your website's performance."],
        },
      ],
    },
  },
];

export const metadata: Metadata = {
  title: "#1 Search Engine Optimization Agency | Skyhit Media Boost Your SEO",
  description:
    "Search Engine Optimization Agency Skyhit Media helps improve your website's ranking and visibility. Drive more traffic with our expert SEO strategies and solutions.",
};

export default function SeoPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/seo-hero-sec-skyhitmedia.webp" mobImg="/images/seo-hero-sec-skyhitmedia-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Leading Search Engine Optimization Agency"
          description1="As a leading SEO agency in Hyderabad, we specialize in providing comprehensive search engine optimization services, including technical SEO, on-page SEO, organic SEO, and local SEO. Our team of experts works tirelessly to enhance your website's visibility and rankings."
          description2="Whether you need a local SEO agency near you or the best SEO company in Hyderabad, we deliver tailored strategies to drive traffic, boost conversions, and ensure long-term online success for your business."
          imageUrl="/images/seo-2ndsec-vec-skyhitmedia.png"
          altText="About Search Engine Optimization (SEO) Service"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Best Search Engine Optimization Agency Services"
          sectionDescription="From local to organic SEO, we offer services for every need"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best for SEO Services"
          subTitle="Customized SEO strategies that deliver measurable results"
          description1="Our Proven SEO Marketing Strategies"
          description2="As the best SEO agency in Hyderabad, we specialize in creating customized SEO marketing strategies that drive results. From on-page and organic SEO to technical and local SEO, our approach ensures improved rankings and increased traffic. Our expert team uses the latest techniques to boost your online visibility and help your business succeed in a competitive digital landscape."
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

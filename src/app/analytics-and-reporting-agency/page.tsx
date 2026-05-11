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
  deskImgLink: "/images/analytics-hero-section-skyhitmedia.webp",
  mobImgLink: "/images/analytics-hero-section-skyhitmedia-mob.webp",
  title: "Analytics & Reporting Agency",
  subTitle:
    "Analytics & Reporting Agency at SKYHIT Media - Data-Driven Insights & Reports to Optimize Strategies, Track Performance & Maximize ROI",
};

const cardData = [
  {
    icon: "/images/website-analytics-icon.png",
    image: "/images/web-analytics-skyhitmedia.webp",
    title: "Website Analytics",
    description: "Monitoring website traffic, user behavior, and conversion patterns using tools like Google Analytics. ",
    link: "#",
  },
  {
    icon: "/images/campaign-performance-analysis-icon.png",
    image: "/images/campaign-performance-analysis-skyhitmedia.webp",
    title: "Campaign Performance Analysis",
    description: "Tracking the effectiveness of marketing campaigns across channels to optimize performance ",
    link: "#",
  },
  {
    icon: "/images/conversion-rate-optimization-icon.png",
    image: "/images/Conversion-Rate-Optimization-service-skyhitmedia.webp",
    title: "Conversion Rate Optimization (CRO)",
    description: "Analyzing user behavior to identify opportunities for increasing conversions on websites and landing pages ",
    link: "#",
  },
  {
    icon: "/images/seo-performance-reporting-icon.png",
    image: "/images/seo-performance-skyhitmedia.webp",
    title: "SEO Performance Reporting",
    description: "Providing detailed reports on keyword rankings, organic traffic, and SEO improvements ",
    link: "#",
  },
  {
    icon: "/images/ppc-campaign-analytics-icon.png",
    image: "/images/pay-p-c-skyhitmedia.webp",
    title: "PPC Campaign Analytics",
    description: "Analyzing pay-per-click campaigns to optimize ad spend, targeting, and ROI ",
    link: "#",
  },
  {
    icon: "/images/social-media-insights-icon.png",
    image: "/images/social-media-inshights-skyhitmedia.webp",
    title: "Social Media Insights",
    description: "Tracking engagement, growth, and performance of social media campaigns across platforms like Facebook, Instagram, and LinkedIn ",
    link: "#",
  },
  {
    icon: "/images/email-marketing-metrics-icon.png",
    image: "/images/emial-template-design-skyhitmedia.webp",
    title: "Email Marketing Metrics",
    description: "Measuring open rates, click-through rates, and conversions from email marketing campaigns ",
    link: "#",
  },
  {
    icon: "/images/ecommerce-analytics-icon.png",
    image: "/images/emial-template-design-skyhitmedia.webp",
    title: "E-Commerce Analytics",
    description: "Tracking sales, product performance, and customer behavior on e-commerce platforms to boost revenue ",
    link: "#",
  },
  {
    icon: "/images/audience-segmentation-icon.png",
    image: "/images/audience-segmentation-skyhitmedia.webp",
    title: "Audience Segmentation",
    description: "Analyzing customer data to segment audiences for more personalized and targeted marketing strategies ",
    link: "#",
  },
  {
    icon: "/images/competitor-analysis-icon.png",
    image: "/images/competitor-analysis-service-skyhitmedia.webp",
    title: "Competitor Analysis",
    description: "Monitoring competitors' digital performance to identify opportunities and benchmarks  ",
    link: "#",
  },
  {
    icon: "/images/real-time-reporting-icon.png",
    image: "/images/real-time-reporting-skyhitmedia.png",
    title: "Real-Time Reporting",
    description: "Providing live data on campaign performance, enabling quick adjustments for better results ",
    link: "#",
  },
  {
    icon: "/images/custom-reporting-dashboards-icon.png",
    image: "/images/Custom-Reporting-Dashboards-skyhitmedia.webp",
    title: "Custom Reporting Dashboards",
    description: "Creating tailored dashboards that consolidate all key metrics into easy-to-understand reports for better decision-making ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Sophia",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Skyhit Media is the most dependable Analytics & Reporting Agency we've worked with. Their real-time reports and valuable data insights helped us improve our marketing and increase profits.",
  },
  {
    name: "Michael",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Working with Skyhit Media, the best Analytics & Reporting Agency, has completely changed how we use data. Their reports gave us a clearer understanding of our customers, helping us make better marketing decisions.",
  },
  {
    name: "Smith",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Skyhit Media, a top Analytics & Reporting Agency, doesn't just give us reports—they provide helpful advice. Their expertise helped us improve how we work and get better results from our campaigns.",
  },
];

const faqs = [
  {
    question: "Analytics & Reporting Agency - Skyhit Media Digital Marketing Agency",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["In today's data-driven world, understanding your business performance through analytics is more crucial than ever. <b>Skyhit Media Digital Marketing Agency</b> is here to provide you with expert <b>Analytics & Reporting Agency</b> services."],
        },
        {
          headings: ["Why Choose Skyhit Media as Your Analytics & Reporting Agency?", ""],
          texts: ["At Skyhit Media, we believe in the power of data to drive business success. As a <b>top data analytics company</b>, we use advanced tools and strategies to help businesses gain valuable insights into their operations."],
        },
      ],
    },
  },
];

export const metadata: Metadata = {
  title: "#1 Analytics & Reporting Agency For Your Business - SKYHIT MEDIA",
  description:
    "Analytics & Reporting Agency, Skyhit Media, provides data-driven insights, performance tracking, and custom reporting solutions to help grow your business.",
};

export default function AnalyticsPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/analytics-hero-section-skyhitmedia.webp" mobImg="/images/analytics-hero-section-skyhitmedia-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Data-Driven Analytics & Reporting Agency"
          description1="As a leading business analytics company, we specialize in providing advanced data analytics and custom reporting solutions. Our digital analytics agency leverages cutting-edge tools and insights to drive strategic decisions."
          description2="From marketing analytics to Google Analytics expertise, our analytics marketing agency delivers tailored solutions to optimize performance and maximize ROI. Trust our experienced analytics agency to unlock the power of your data and propel your business forward."
          imageUrl="/images/analytics-2ndsection-vector-skyhitmedia.png"
          altText="About Analytics & Reporting Service"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Comprehensive Analytics & Reporting Services"
          sectionDescription="Advanced Analytics Solutions for Business Growth and Digital Success"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best Analytics & Reporting Services"
          subTitle="Experts in Advanced Analytics and Custom Reporting Solutions"
          description1="Our Advanced Analytics Marketing Strategies"
          description2="As a top data analytics company, we leverage advanced data analytics and custom reporting solutions to drive business growth. Our marketing analytics agency combines digital analytics expertise with Google Analytics insights to craft tailored strategies. From optimizing campaigns to providing actionable insights, our analytics agency helps businesses enhance performance, boost ROI, and stay ahead of the competition."
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

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
  deskImgLink: "/images/1st-secing-bg-image-desktop-3.webp",
  mobImgLink: "/images/1st-secing-bg-image-desktop-3-mob.webp",
  title: "Best Digital Marketing Agency",
  subTitle:
    "Best Digital Marketing Agency at SKYHIT Media - Innovative Strategies to Drive Traffic, Boost Engagement & Maximize ROI for All Businesses",
};

const cardData = [
  {
    icon: "/images/social-media-icon.png",
    image: "/images/seo-skyhimedia.png",
    title: "Search Engine Optimization (SEO)",
    description:
      "Search Engine Optimization (SEO) is crucial for improving your website's visibility on search engines. By optimizing content, keywords, and site  ",
    link: "/search-engine-optimization-agency",
  },
  {
    icon: "/images/franchise-seo-icon.png",
    image: "/images/Franchise-SEO-skyhitmedia.webp",
    title: "Franchise SEO",
    description:
      "Franchise SEO focuses on optimizing multiple locations of a franchise for local search visibility. We ensure each franchisee ranks well in their ",
    link: "#",
  },
  {
    icon: "/images/local-seo-icon.png",
    image: "/images/local-seo-skyhitmedia.webp",
    title: "Local SEO",
    description:
      "Local SEO helps businesses appear in local search results, driving more customers from specific geographic areas. By optimizing Google My Business, ",
    link: "#",
  },
  {
    icon: "/images/technical-seo-icon.png",
    image: "/images/Technical-SEO-skyhitmedia.webp",
    title: "Technical SEO",
    description:
      "Technical SEO focuses on optimizing the backend of your website for better search engine crawling and indexing. We improve site speed, mobile responsiveness,",
    link: "#",
  },
  {
    icon: "/images/link-building-icon.png",
    image: "/images/link-building-skyhitmedia.webp",
    title: "Link Building",
    description:
      "Link building is a key SEO strategy that involves acquiring high-quality backlinks to boost your website's authority. We focus on gaining relevant, credible ",
    link: "#",
  },
  {
    icon: "/images/webdesign-development-icon.png",
    image: "/images/Web-Design-Development-skyhitmedia.webp",
    title: "Web Design & Development",
    description:
      "Our Web Design & Development services focus on creating user-friendly, responsive websites that engage visitors and drive conversions. We ensure your website ",
    link: "/website-design-and-development-services",
  },
  {
    icon: "/images/Web-Design-02.png",
    image: "/images/Custom-Web-Design-skyhitmedia.png",
    title: "Custom Website Design",
    description:
      "Custom website design creates unique, user-friendly websites tailored to your brand, enhancing online presence, functionality, and customer engagement.",
    link: "#",
  },
  {
    icon: "/images/Social-Media2.png",
    image: "/images/Social-Media-Marketing-skyhitmedia.webp",
    title: "Social Media Marketing",
    description:
      "Social media marketing builds brand awareness, engages audiences, drives traffic, and boosts conversions through targeted strategies on popular platforms.",
    link: "/social-media-marketing-agency",
  },
  {
    icon: "/images/ppc-icon.png",
    image: "/images/pay-pc-skyhitmedia.webp",
    title: "Pay Per Click (PPC) Management",
    description:
      "Drive instant results with strategic PPC management, increasing visibility, enhancing leads, and ensuring cost-effective ad performance for your business.",
    link: "/pay-per-click-advertising-agency",
  },
  {
    icon: "/images/edit-music2.png",
    image: "/images/eCommerce-Marketing-skyhimedia.webp",
    title: "eCommerce Marketing",
    description:
      "Boost sales and brand visibility with eCommerce marketing strategies, including SEO, PPC, email campaigns, and social media engagement.",
    link: "#",
  },
  {
    icon: "/images/content-writing-icon.png",
    image: "/images/Content-Writing-skyhitmedia.webp",
    title: "Content Writing",
    description:
      "Engage your audience with compelling content writing that drives traffic, builds trust, improves SEO, and strengthens your brand's message.",
    link: "#",
  },
  {
    icon: "/images/cro-icon.png",
    image: "/images/Conversion-Rate-Optimization-skyhitmedia.png",
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Improve user experience and maximize sales with Conversion Rate Optimization (CRO), utilizing data-driven strategies to boost website performance.",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Neha Verma",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote:
      "Skyhit Media transformed our online presence with expert SEO and social media marketing. Their strategies boosted our engagement and ROI significantly.",
  },
  {
    name: "Rahul Sharma",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote:
      "Highly professional team! They delivered on time and provided excellent digital marketing solutions. Our website traffic and leads have increased tremendously.",
  },
  {
    name: "Amit Rao",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote:
      "Great experience with Skyhit Media! Their web development team built a sleek, high-performing website that improved our online presence. Very satisfied!",
  },
];

const faqs = [
  {
    question: "Best Digital Marketing Agency: Leading Experts in Online Growth",
    answer: {
      sections: [
        {
          headings: [""],
          texts: [
            "In today's digital world, businesses need a strong online presence to succeed. If you're looking for the <b>best digital marketing agency</b> to help you grow, you're in the right place! Our <b>best digital marketing agency</b> offers a variety of services that can transform your online presence, boost your visibility, and increase your sales.<br><br>Whether you're just starting or looking to optimize your current digital marketing strategies, we are here to help. As the <b>best digital marketing agency</b>, we pride ourselves on being a one-stop solution for all your marketing needs.",
          ],
        },
      ],
    },
  },
];

export const metadata: Metadata = {
  title: "#1 Best Digital Marketing Agency for Business – SKYHIT MEDIA",
  description:
    "Discover the best digital marketing agency to boost your online presence. Get expert SEO, PPC, and social media strategies for guaranteed growth and success.",
};

export default function DigitalMarketingPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/1st-secing-bg-image-desktop-3.webp" mobImg="/images/1st-secing-bg-image-desktop-3-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="The Best Digital Marketing Agency for Business Growth"
          description1="As the best digital marketing agency, we help businesses reach their full potential online. Our expert team specializes in SEO, social media marketing, paid ads, and content strategy to drive traffic, increase conversions, and boost brand visibility."
          description2="With tailored solutions and data-driven strategies, we focus on achieving measurable results that align with your goals. Partner with us to take your digital presence to the next level and ensure long-term success in the competitive online landscape."
          imageUrl="/images/image_desktop_v.png"
          altText="About Digital Marketing Service Skyhit Media"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Best Digital Marketing Agency Services We Offer"
          sectionDescription="Transform Your Business with Expert Digital Marketing Services"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best Digital Marketing Agency"
          subTitle="Drive Growth and Success with Expert Marketing Strategies"
          description1="Unlock Your Business Potential with Digital Marketing"
          description2="As the best digital marketing agency, Skyhit Media offers a comprehensive range of services designed to elevate your brand. Our expert team specializes in SEO, social media marketing, PPC campaigns, and more, ensuring your business gains visibility and drives conversions. With data-driven strategies and a focus on measurable results, we tailor our approach to fit your unique goals."
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

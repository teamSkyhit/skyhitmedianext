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
  deskImgLink: "/images/graphic-design-hero.webp",
  mobImgLink: "/images/graphic-design-hero-mob.webp",
  title: "Branding & Graphic Design Agency",
  subTitle:
    "Branding & Graphic Design Agency at SKYHIT Media - Unique Brand Identities & Stunning Visuals to Enhance Recognition & Engage Audiences.",
};

const cardData = [
  {
    icon: "/images/brand-identity-design-icon.png",
    image: "/images/branding-skyhitmediia.webp",
    title: "Brand Identity Design",
    description: "Creating a unique and cohesive brand identity, including logo, color palette, typography, and overall design language. ",
    link: "#",
  },
  {
    icon: "/images/logo-design-icon.png",
    image: "/images/logo-design-skyhitmedia.png",
    title: "Logo Design",
    description: "Crafting memorable logos that represent your brand's values and resonate with your target audience",
    link: "#",
  },
  {
    icon: "/images/business-card-design-icon.png",
    image: "/images/card-design-skyhitmedia.webp",
    title: "Business Card Design",
    description: "Designing professional and eye-catching business cards that leave a lasting impression ",
    link: "#",
  },
  {
    icon: "/images/social-media-branding-icon.png",
    image: "/images/social-branding-skyhitmedia.webp",
    title: "Social Media Branding",
    description: "Developing consistent branding across social media platforms, including profile pictures, banners, and post templates ",
    link: "#",
  },
  {
    icon: "/images/website-graphic-design-icon.png",
    image: "/images/website-graphic-design-skyhitmedia.webp",
    title: "Website Graphic Design",
    description: "Designing visually engaging graphics for websites, ensuring alignment with brand identity and user experience ",
    link: "#",
  },
  {
    icon: "/images/brochure-flyer-design-icon.png",
    image: "/images/flyer-skyhitmedia.webp",
    title: "Brochure & Flyer Design",
    description: "Creating printed marketing materials like brochures and flyers that effectively communicate your message and attract attention ",
    link: "#",
  },
  {
    icon: "/images/packaging-design-icon.png",
    image: "/images/packing-design-skyhitmedia.webp",
    title: "Packaging Design",
    description: "Designing product packaging that reflects your brand and stands out on the shelf ",
    link: "#",
  },
  {
    icon: "/images/marketing-collaterals-icon.png",
    image: "/images/marketing-collaterals-skyhitmedia.webp",
    title: "Marketing Collaterals",
    description: "Designing business collateral such as posters, banners, and presentations that align with your brand's visual style ",
    link: "#",
  },
  {
    icon: "/images/infographics-design-icon.png",
    image: "/images/info-graphics-skyhitmedia.webp",
    title: "Infographics Design",
    description: "Creating visually appealing infographics to present complex information in an engaging and easy-to-understand way ",
    link: "#",
  },
  {
    icon: "/images/email-template-design-icon.png",
    image: "/images/emial-template-design-skyhitmedia.webp",
    title: "Email Template Design",
    description: "Designing professional, responsive email templates for newsletters, campaigns, and promotions ",
    link: "#",
  },
  {
    icon: "/images/print-digital-ads-icon.png",
    image: "/images/printing-skyhittmedia.webp",
    title: "Print & Digital Ads",
    description: "Creating captivating print and digital advertisements that drive customer engagement and brand awareness",
    link: "#",
  },
  {
    icon: "/images/brand-guidelines-icon.png",
    image: "/images/brand-guidelines-skyhitmedia.webp",
    title: "Brand Guidelines",
    description: "Developing comprehensive brand guidelines to ensure consistency across all brand touchpoints, from print to digital ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Myna",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Professional and talented designers! They delivered high-quality branding materials that perfectly matched our brand's personality. Loved working with them!",
  },
  {
    name: "Sharma",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Their graphic design work is top-notch! Skyhit Media transformed our branding with eye-catching logos, brochures, and social media visuals. Amazing team!",
  },
  {
    name: "Smith",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Skyhit Media's branding services gave our business a fresh, modern look. Their attention to detail and creativity are exceptional!",
  },
];

const faqs = [
  {
    question: "Skyhit Media Digital Marketing Agency - Branding and Graphic Design Agency",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["At <b>Skyhit Media,</b> we are a leading <b>Branding and Graphic Design Agency</b> dedicated to helping businesses elevate their identity and communication. As a <b>top branding agency in India,</b> we understand the power of effective design in creating a memorable brand."],
        },
        {
          headings: ["Why Choose Skyhit Media as Your Branding and Graphic Design Agency?", ""],
          texts: ["As a <b>Branding and Graphic Design Agency,</b> we specialize in building brand identities that resonate with your target audience. Whether you are starting a new business or looking to rebrand, our expertise in brand development, design, and strategy will ensure that your business stands out from the competition."],
        },
      ],
    },
  },
];

export const metadata: Metadata = {
  title: "#1 Branding and Graphic Design Agency | Skyhit Media",
  description:
    "Branding and Graphic Design Agency Skyhit Media offers creative solutions to boost your brand's identity with innovative design and effective strategies.",
};

export default function DesignPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/graphic-design-hero.webp" mobImg="/images/graphic-design-hero-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Best Branding & Graphic Design Agency in India"
          description1="Explore the best branding and graphic design agencies in India, offering innovative solutions for businesses. From top branding agencies in Hyderabad to renowned companies across India, we specialize in creating impactful brand identities and stunning designs."
          description2="Our expert team provides customized brand marketing strategies, logo design, and visual branding to elevate your business presence."
          imageUrl="/images/graphic-design-2nd-section-vector-skyhitmedia.png"
          altText="About Branding & Graphic Design Services"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Comprehensive Branding & Graphic Design Services"
          sectionDescription="Creative branding, design, and marketing solutions for your business."
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best for Branding & Graphic Design"
          subTitle="Expert branding and design for lasting impact."
          description1="Effective Marketing Strategies for Brand Growth"
          description2="Our marketing strategies are designed to enhance brand visibility, engagement, and growth. From digital branding to targeted advertising, we create data-driven campaigns that connect with your audience. As one of the top branding companies in India, we help businesses establish a strong presence through innovative marketing, ensuring long-term success and customer loyalty."
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

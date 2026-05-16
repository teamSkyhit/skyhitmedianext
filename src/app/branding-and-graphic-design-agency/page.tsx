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
          texts: ["At <b>Skyhit Media,</b> we are a leading <b>Branding and Graphic Design Agency</b> dedicated to helping businesses elevate their identity and communication. As a <b>top branding agency in India,</b> we understand the power of effective design in creating a memorable brand. Our goal is to provide businesses with a professional edge by offering innovative and creative solutions in the field of branding and graphic design."]

        },
        {
          headings: ["Why Choose Skyhit Media as Your Branding and Graphic Design Agency?", ""],
          texts: ["As a <b>Branding and Graphic Design Agency,</b> we specialize in building brand identities that resonate with your target audience. Whether you are starting a new business or looking to rebrand, our expertise in brand development, design, and strategy will ensure that your business stands out from the competition.<br></br>", "At <b>Skyhit Media,</b>  we focus on understanding your brand’s values, mission, and goals. Our experienced team works closely with you to create a tailored solution that reflects your unique vision. We combine creativity with strategy to ensure your brand delivers a lasting impact across all platforms."],
        },
        {
          headings: ["Our Services as a Branding and Graphic Design Agency", ""],
          texts: ["As a <b>top branding agency in Hyderabad,</b> we provide a comprehensive range of services designed to meet all your branding and design needs. Our services include: .<br></br>"],
          list: ["<b>Brand Identity Design:</b>  Your brand identity is the first impression customers have of your business. We create impactful and memorable brand identities that reflect your business's ethos and connect with your target audience. <br></br>", "<b>Logo Design: </b> A professional logo is essential for brand recognition. Our <b>graphic design agency</b> creates unique and creative logos that represent your brand and set you apart from the competition.<br></br>", "<b>Business Card Design: </b> Business cards are a key networking tool. Our <b>branding agency</b> designs stylish and effective business cards that leave a lasting impression and reflect your brand's professionalism.<br></br>", "<b>Social Media Branding: </b> Your social media presence is vital in today’s digital world. We help businesses create a consistent and engaging social media brand identity that attracts followers and drives customer engagement.<br></br>", "<b>Website Graphic Design: </b> Your website is your online storefront. Our <b>branding and graphic design agency</b> specializes in creating visually appealing and <a href='https://en.wikipedia.org/wiki/User_interface_design' target=_'blanket'><b>user-friendly website designs</b></a> that enhance your brand and improve user experience.<br></br>", "<b>Brochure & Flyer Design: </b> We design brochures and flyers that captivate your audience. These marketing materials are essential for informing potential customers about your products or services in a visually appealing manner.<br></br>", "<b>Packaging Design: </b> At Skyhit Media, we create attractive and functional packaging designs that enhance product appeal and communicate your brand message effectively.<br></br>", "<b>Marketing Collaterals: </b> Marketing materials such as posters, banners, and flyers are essential to showcase your brand. We design high-quality, print-ready marketing collaterals to support your promotional efforts.<br></br>", "<b>Infographics Design: </b> Infographics are an excellent way to simplify complex information. Our <b>graphic design company</b> creates visually appealing infographics that make information easy to understand and share.<br></br>", "<b>Email Template Design: </b> We design professional email templates that align with your brand’s style and effectively engage recipients. Our designs ensure your emails stand out in crowded inboxes.<br></br>", "<b>Print & Digital Ads: </b> Whether you need print ads or digital ad designs, we create eye-catching ads that effectively communicate your brand’s message and drive customer action.<br></br>", "<b>Brand Guidelines: </b> We provide clear brand guidelines that ensure consistency across all your branding materials. This includes logo usage, color schemes, fonts, and tone of voice for all your communications.<br></br>"]
        },
        {
          headings: ["Our Expertise as a Branding and Graphic Design Agency", ""],
          texts: ["As one of the <b>best branding agencies in Hyderabad,</b> we are committed to delivering high-quality designs that align with your brand’s vision. Our team of designers and brand strategists has years of experience working with businesses across various industries. We focus on delivering creative solutions that make a significant impact on your brand's growth and success.<br></br>", "Whether you're a startup or an established company, <a href='/' ><b>Skyhit Media</b></a> can help you build a strong brand identity that resonates with your customers. We take pride in being one of the <b>top branding agencies in India,</b> consistently delivering exceptional branding and graphic design services.<br></br>"],
        },
        {
          headings: ["Why We Are the Best Branding and Graphic Design Agency in India", ""],
          texts: ["As a <b>branding agency in India,</b> we have worked with numerous businesses, helping them enhance their visual communication. Our clients trust us because of our commitment to quality, creativity, and timely delivery .<br></br>", "Whether you need a complete rebrand or specific graphic design services, we offer tailored solutions that meet your business needs. From <b>graphic design agencies near me</b> to the <b>top branding agencies in India,</b> we have earned our reputation as one of the best in the industry."],
        },
        {
          headings: ["Get in Touch with Skyhit Media - Your Branding and Graphic Design Agency", ""],
          texts: ["If you're looking for a professional <b>Branding and Graphic Design Agency,</b> look no further than <b>Skyhit Media Digital Marketing Agency.</b> Let us help you build a brand that speaks to your customers and drives growth. Contact us today to learn more about our services and how we can help you create a powerful brand identity. <br></br>", "By choosing <b>Skyhit Media,</b> you are partnering with a leading <b>branding and graphic design agency</b> that offers innovative solutions tailored to your business needs. We offer a wide range of services, from <b>logo design to marketing collaterals,</b> and are dedicated to helping you create a lasting impression. Whether you're searching for <b>graphic design companies near me</b> or the <b>best branding agencies in India,</b> we have the experience and expertise to help you succeed."],
        },
        {
          headings: ["Services We Offer", ""],
          list: ["<a href='/best-digital-marketing-agency' ><b>Best Digital Marketing Agency</b></a>", "<a href='/website-design-and-development-services' ><b>Website Design & Development Services</b></a>", "<a href='/Performance-marketing-agency' ><b>Performance Marketing Agency</b></a>", "<a href='/search-engine-optimization-agency' ><b>Search Engine Optimization Agency</b></a>", "<a href='/social-media-marketing-agency' ><b>Social Media Marketing Agency</b></a>", "<a href='/pay-per-click-advertising-agency' ><b>Pay Per Click Advertising Agency</b></a>", "<a href='/influencer-marketing-agency' ><b>Influencer Marketing Agency</b></a>", "<a href='/analytics-and-reporting-agency' ><b>Analytics and Reporting Agency</b></a>", "<a href='/whatsapp-marketing-agency' ><b>WhatsApp Marketing Agency</b></a>", "<a href='/online-reputation-management-agency' ><b>Online Reputation Management Agency</b></a>", "<a href='/cyber-security-services' ><b>Cyber Security Services</b></a>"],
        },
      ],
    },
  },

];

export const metadata: Metadata = {title: "#1 Branding and Graphic Design Agency | Skyhit Media",
  description:
    "Branding and Graphic Design Agency Skyhit Media offers creative solutions to boost your brand's identity with innovative design and effective strategies.",
  keywords: ["Digital Marketing", "SEO", "PPC", "Web Design", "Skyhit Media", "Hyderabad"],
  openGraph: {
    title: "#1 Branding and Graphic Design Agency | Skyhit Media",
    description: "Branding and Graphic Design Agency Skyhit Media offers creative solutions to boost your brand's identity with innovative design and effective strategies.",
    url: "https://skyhitmedia.com/branding-and-graphic-design-agency",
  },
  alternates: { canonical: "https://skyhitmedia.com/branding-and-graphic-design-agency" },
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

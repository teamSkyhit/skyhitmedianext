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
  deskImgLink: "/images/web-design-hero-section-skyhitmedia-1.webp",
  mobImgLink: "/images/web-design-hero-section-skyhitmedia-1-mob.webp",
  title: "Website Design & Development Services",
  subTitle:
    "Website Design & Development Services at SKYHIT Media - Custom, User-Friendly & Responsive Websites to Enhance Your Online Presence.",
};

const cardData = [
  {
    icon: "/images/custom-web-design-icon.png",
    image: "/images/Custom-Website-Design-skyhitmedia.png",
    title: "Custom Website Design",
    description: "Tailored website layouts, color schemes, and branding to reflect the business identity.  ",
    link: "#",
  },
  {
    icon: "/images/responsive-web-design-icon.png",
    image: "/images/responsive-web-design-skyhitmedia.webp",
    title: "Responsive Web Design",
    description: "Ensuring websites are mobile-friendly and adapt seamlessly across different devices and screen sizes ",
    link: "#",
  },
  {
    icon: "/images/ecommerce-web-icon.png",
    image: "/images/E-commerce-Website-Development-skyhitmedia.webp",
    title: "E-commerce Website Development",
    description: "Creating online stores with payment integration, product catalogs, and user-friendly shopping experiences ",
    link: "#",
  },
  {
    icon: "/images/content-cms-icon.png",
    image: "/images/cms-skyhitmedia.webp",
    title: "Content Management System (CMS) Development",
    description: "Building websites with platforms like WordPress, Joomla, or custom CMS for easy content updates ",
    link: "#",
  },
  {
    icon: "/images/seo-search-icon.png",
    image: "/images/search-seo-skyhitmedia.webp",
    title: "SEO Optimization",
    description: "Implementing strategies to enhance search engine rankings and improve website visibility ",
    link: "/search-engine-optimization-agency",
  },
  {
    icon: "/images/website-redesign-icon.png",
    image: "/images/Website-Redesign-skyhitmedia.webp",
    title: "Website Redesign",
    description: "Revamping outdated websites to improve design, performance, and user experience ",
    link: "#",
  },
  {
    icon: "/images/web-appl-icon.png",
    image: "/images/Web-Application-Development-skyhitmedia.webp",
    title: "Web Application Development",
    description: "Building interactive and dynamic web applications for improved functionality ",
    link: "#",
  },
  {
    icon: "/images/ui-ux-design-icon.png",
    image: "/images/ui-ux-design-skyhitmedia.webp",
    title: "UI/UX Design",
    description: "Focused on user interfaces and user experiences to make websites intuitive, engaging, and easy to navigate ",
    link: "#",
  },
  {
    icon: "/images/website-maintainence-icon.png",
    image: "/images/Website-Maintenance-Support-skyhitmedia.webp",
    title: "Website Maintenance & Support",
    description: "Ongoing updates, troubleshooting, and technical support for optimal site performance ",
    link: "#",
  },
  {
    icon: "/images/web-hosting-domain-icon.png",
    image: "/images/Website-Hosting-Domain-Management-skyhitmedia.webp",
    title: "Website Hosting & Domain Management",
    description: "Providing reliable hosting solutions, including domain registration, DNS management, and server management ",
    link: "#",
  },
  {
    icon: "/images/email-marketing-icon.png",
    image: "/images/E-mail-Marketing-Integration-skyhitmedia.webp",
    title: "E-mail Marketing Integration",
    description: "Integrating email sign-ups, newsletters, and automated email systems with the website ",
    link: "#",
  },
  {
    icon: "/images/web-security-icon.png",
    image: "/images/Website-Security-Services.webp",
    title: "Website Security Services",
    description: "Implementing SSL certificates, firewalls, and other security measures to protect websites from cyber threats ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Sneha",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Skyhit Media designed a stunning, user-friendly website for our business. Their team was professional, creative, and delivered on time. Highly recommended for web development!",
  },
  {
    name: "Arjun",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Great experience with Skyhit Media! Their web development team built a sleek, high-performing website that improved our online presence. Very satisfied!",
  },
  {
    name: "Vikram",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Skyhit Media transformed our outdated site into a modern masterpiece. Their design and development skills are top-notch. Traffic and engagement have increased significantly!",
  },
];

const faqs = [
  {
    question: "Website Design and Development Services by SKYHIT Media",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["In today's , having an online presence is essential for any business to thrive. A professional and well-designed website is often the first impression customers will have of your brand. If you want to stand out from the competition and offer a seamless online experience to your visitors, you need top-quality <b>Website Design and Development Services.</b> That's where SKYHIT Media comes in."],
        },
        {
          headings: ["Why Choose SKYHIT Media for Your Website Design and Development Services?"],
          texts: ["At <a href='/'><b>SKYHIT Media</b></a>, we understand that each business is unique, and your website should reflect that. Our team of expert designers and developers work closely with you to create a website that meets your needs and exceeds your expectations. Whether you need a simple website, an e-commerce platform, or a fully customized solution, we are the <b>website design and development agency </b>you can trust."],
        },
      ],
    },
  },
];

export const metadata: Metadata = {
  title: "#1 Website Design and Development Services | Skyhit Media",
  description:
    "Website Design and Development Services by Skyhit Media offer custom, responsive & user-friendly websites that enhance your online presence and drive success.",
};

export default function WebServicePage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/web-design-hero-section-skyhitmedia-1.webp" mobImg="/images/web-design-hero-section-skyhitmedia-1-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Expert Website Design & Development Services"
          description1="Elevate your online presence with our professional website design and development services. We create stunning, responsive, and user-friendly websites tailored to your business needs. From custom designs to seamless functionality, our solutions enhance user experience and drive results."
          description2="Whether you need a new website or improvements to an existing one, our expert team delivers cutting-edge web solutions. Partner with us for innovative and reliable website design and development services that help your business grow."
          imageUrl="/images/web-design-vector-2nd-section-skyhitmedia.webp"
          altText="Website Design & Development Services skyhit Media"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Website Design and Development Services"
          sectionDescription="Expert Solutions from a Leading WordPress Web Design Agency"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Top Choice for Web Design and Development"
          subTitle="Transform Your Online Presence with Expert Website Design and Development Services"
          description1="Elevate Your Brand with Professional Website Design and Development Services"
          description2="Skyhit Media offers top-notch website design and development services tailored to your business needs. Our expert team creates visually stunning, user-friendly, and responsive websites that drive engagement and conversions. With a focus on innovation, SEO optimization, and seamless functionality, we ensure your online presence stands out. From custom web designs to scalable development solutions, we provide end-to-end services that deliver results. Choose Skyhit Media for reliable, high-quality website design and development services that elevate your brand."
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

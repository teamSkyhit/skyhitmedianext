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
  deskImgLink: "/images/whatsapp-marketing-hero-section-skyhitmedia.webp",
  mobImgLink: "/images/whatsapp-marketing-hero-section-skyhitmedia-mob.webp",
  title: "Whatsapp Marketing Agency",
  subTitle:
    "WhatsApp Marketing Agency at SKYHIT Media - Targeted Campaigns to Boost Engagement, Enhance Communication & Drive Conversions.",
};

const cardData = [
  {
    icon: "/images/whatsapp-business-setup-icon.png",
    image: "/images/whtasapp-business-setup-services-skyhitmedia.webp",
    title: "WhatsApp Business Setup",
    description: "Setting up and optimizing your WhatsApp Business profile to engage with customers professionally ",
    link: "#",
  },
  {
    icon: "/images/broadcast-messaging-icon.png",
    image: "/images/broadcast-message-skyhitmedia.webp",
    title: "Broadcast Messaging",
    description: "Sending bulk messages to your customer list, ensuring personalized communication for promotions or updates ",
    link: "#",
  },
  {
    icon: "/images/automated-whatsapp-campaign-icon.png",
    image: "/images/automated-whatsapp-campaigns-skyhitmedia.webp",
    title: "Automated WhatsApp Campaigns",
    description: "Automating messages and campaigns for customer engagement, support, and promotions ",
    link: "#",
  },
  {
    icon: "/images/whatsapp-customer-support-icon.png",
    image: "/images/whatsapp-coustmer-support-skyhitmedia.webp",
    title: "WhatsApp Customer Support",
    description: "Providing instant customer support through WhatsApp, resolving queries and building better customer relationships ",
    link: "#",
  },
  {
    icon: "/images/whatsapp-ad-campaingns-icon.png",
    image: "/images/whatsapp-ad-campaigns-skyhitmedia.webp",
    title: "WhatsApp Ad Campaigns",
    description: "Running targeted ads on WhatsApp to attract new customers and drive conversions ",
    link: "#",
  },
  {
    icon: "/images/personalized-messaging-icon.png",
    image: "/images/personalised-message-skyhitmedia.webp",
    title: "Personalized Messaging",
    description: "Crafting personalized and relevant messages to engage customers on a one-to-one basis ",
    link: "#",
  },
  {
    icon: "/images/whatsapp-lead-generation-icon.png",
    image: "/images/whatsapp-lead-skyhitmedia.webp",
    title: "WhatsApp Lead Generation",
    description: "Using WhatsApp to capture leads directly through interactive conversations and calls to action ",
    link: "#",
  },
  {
    icon: "/images/multimedia-messaging-icon.png",
    image: "/images/multimedia-messaging-skyhitmedia.webp",
    title: "Multimedia Messaging",
    description: "Sending images, videos, and audio messages to enhance customer engagement and convey your brand's message creatively ",
    link: "#",
  },
  {
    icon: "/images/whatsapp-group-management-icon.png",
    image: "/images/whatsapp-group-management-skyhitmedia.webp",
    title: "WhatsApp Group Management",
    description: "Creating and managing WhatsApp groups for exclusive customer access, feedback, and community building ",
    link: "#",
  },
  {
    icon: "/images/whatsapp-payment-integration-icon.png",
    image: "/images/whatsapp-payment-skyhitmedia.webp",
    title: "WhatsApp Payment Integration",
    description: "Enabling payment processing directly through WhatsApp for seamless transactions  ",
    link: "#",
  },
  {
    icon: "/images/realtime-analysis-reporting-icon.png",
    image: "/images/real-time-reporting-services-skyhitmedia.webp",
    title: "Real-Time Analytics & Reporting",
    description: "Monitoring the success of your WhatsApp campaigns and engagement metrics to optimize future efforts",
    link: "#",
  },
  {
    icon: "/images/whatsapp-broadcast-icon.png",
    image: "/images/whatsapp-broadcastlist-skyhitmedia.webp",
    title: "WhatsApp Broadcast List Management",
    description: "Managing and segmenting your contact lists to target the right audience for specific campaigns ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Joe",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Skyhit Media's WhatsApp marketing boosted our customer engagement and sales. Their targeted messaging strategy delivered great results. Highly recommended!",
  },
  {
    name: "Vamsi",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Their WhatsApp campaigns helped us connect with customers instantly. Higher response rates and better conversions. Fantastic service!",
  },
  {
    name: "Rohith",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Skyhit Media's WhatsApp marketing is highly effective! Personalized messages increased our customer retention and lead generation.",
  },
];

const faqs = [
  {
    question: "WhatsApp Marketing Agency | Skyhit Media Digital Marketing Agency",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["Welcome to <b>Skyhit Media</b>, a top-rated <b>WhatsApp Marketing Agency</b> dedicated to helping businesses grow through effective and personalized messaging. We offer a variety of <b>WhatsApp marketing services</b> to boost customer engagement, increase conversions, and expand your business."],
        },
        {
          headings: ["Why Choose Skyhit Media as Your WhatsApp Marketing Agency?", ""],
          texts: ["At <b>Skyhit Media</b>, we provide comprehensive <b>WhatsApp marketing services</b> to help you stay ahead of the competition. We understand that every business is unique, which is why we offer customized solutions to meet your specific needs."],
        },
      ],
    },
  },
];

export const metadata: Metadata = {
  title: "#1 WhatsApp Marketing Agency | Skyhit Media Boost Customer Engagement",
  description:
    "WhatsApp Marketing Agency Skyhit Media offers tailored WhatsApp marketing strategies to enhance customer engagement, increase sales, and grow your business.",
};

export default function WhatsappPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/whatsapp-marketing-hero-section-skyhitmedia.webp" mobImg="/images/whatsapp-marketing-hero-section-skyhitmedia-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Expert WhatsApp Marketing Agency"
          description1="Our WhatsApp Marketing Service helps businesses connect with customers in a direct, personal way through the power of messaging. We create targeted campaigns that engage your audience via WhatsApp, delivering promotions, updates, and customer support in real-time. Our team optimizes messaging strategies, ensuring relevance and timeliness, while maintaining a seamless user experience."
          description2="By leveraging WhatsApp's broad reach and high engagement rates, we help increase brand visibility, build customer relationships, and drive conversions, all through an efficient communication channel."
          imageUrl="/images/whatsapp-2ndscetion-vector-skyhitmedia.png"
          altText="About Whatsapp Marketing Service"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Best Digital Marketing Agency Services We Offer"
          sectionDescription="Transform Your Business with Expert Digital Marketing Services"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best Whatsapp Marketing Services"
          subTitle="Boost Your Revenue Growth Rate and Achieve Online Success"
          description1="our marketing strategies"
          description2="Skyhit Media specializes in WhatsApp marketing services to engage your audience directly and personally. Our team designs targeted campaigns that reach customers through one of the most popular messaging platforms. By leveraging WhatsApp's instant communication, we ensure your messages are timely and effective. Choose Skyhit Media for personalized, high-impact WhatsApp marketing strategies that drive customer engagement and loyalty."
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

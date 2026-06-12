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
    image: "/images/review-image-services-1.webp",
    stars: 5,
    quote: "Skyhit Media's WhatsApp marketing boosted our customer engagement and sales. Their targeted messaging strategy delivered great results. Highly recommended!",
  },
  {
    name: "Vamsi",
    position: "",
    image: "/images/review-image-services-2.webp",
    stars: 5,
    quote: "Their WhatsApp campaigns helped us connect with customers instantly. Higher response rates and better conversions. Fantastic service!",
  },
  {
    name: "Rohith",
    position: "",
    image: "/images/review-image-services-3.webp",
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
          texts: ["Welcome to <b>Skyhit Media</b>, a top-rated <b>WhatsApp Marketing Agency</b> dedicated to helping businesses grow through effective and personalized messaging. We offer a variety of <b>WhatsApp marketing services</b> to boost customer engagement, increase conversions, and expand your business. With our expertise, we help you unlock the full potential of <b>WhatsApp marketing</b>, making it easier for you to reach your audience directly and effectively.<br></br>", "As a leading <b>WhatsApp marketing company in Hyderabad</b>, <b>Skyhit Media</b> understands the importance of using the right communication tools to create meaningful connections with your customers. Our tailored <b>WhatsApp advertising</b> strategies are designed to drive results and build lasting relationships with your audience."]

        },
        {
          headings: ["Why Choose Skyhit Media as Your WhatsApp Marketing Agency?", ""],
          texts: ["At <b>Skyhit Media</b>, we provide comprehensive <b>WhatsApp marketing services</b> to help you stay ahead of the competition. We understand that every business is unique, which is why we offer customized solutions to meet your specific needs. Whether you're looking to set up <b>WhatsApp Business</b>, launch <b>broadcast messaging campaigns</b>, or generate leads, our team has the skills and experience to deliver exceptional results.<br></br>", "We offer the best <b>bulk WhatsApp marketing service</b>, helping you reach a large audience with personalized messages that engage, inform, and convert. With our expertise in WhatsApp advertising, we can help you create <b>WhatsApp ad campaigns</b> that are highly targeted and effective"],
        },
        {
          headings: ["Our WhatsApp Marketing Services", ""],
          texts: ["<b>Skyhit Media</b> is proud to offer a range of services designed to maximize the impact of <b>WhatsApp marketing</b> for businesses of all sizes. Our goal is to provide high-quality, results-driven campaigns that help you achieve your marketing objectives. Below are some of the key services we offer as part of our <b>WhatsApp marketing agency</b> solutions: <br></br>"],
          list: ["<b>WhatsApp Business Setup:</b> Setting up <b>WhatsApp Business</b> is the first step to effectively communicate with your customers. We help you set up and optimize your <b>WhatsApp Business</b> account to create a professional presence on the platform, making it easy for customers to connect with you.<br></br>", "<b>Broadcast Messaging:</b> Our <b>broadcast messaging</b> service allows you to send bulk messages to a list of contacts on WhatsApp. This feature enables businesses to send promotions, announcements, and other important information to a large group of customers at once, increasing efficiency and engagement.<br></br>", "<b>Automated WhatsApp Campaigns:</b> With <b>automated WhatsApp campaigns</b>, we help you schedule and send messages to customers at the right time. This helps save time and ensures your audience receives consistent, timely communication. Our automation tools allow for personalized follow-ups, promotions, and updates.<br></br>", "<b>WhatsApp Customer Support:</b> Customer support is key to building trust and loyalty. We help you set up <b>WhatsApp customer support</b> channels, allowing your customers to easily reach you with inquiries, issues, or feedback. Providing customer support through WhatsApp is fast, efficient, and convenient for both you and your customers.<br></br>", "<b>WhatsApp Ad Campaigns:</b> <b>WhatsApp ad campaigns</b> are an excellent way to drive traffic and conversions. We create targeted ads that appear on WhatsApp’s platform, ensuring that your business is seen by the right audience. Our <b>WhatsApp advertising agency</b> uses precise targeting to ensure that your ads are delivered to people most likely to engage with your brand.<br></br>", "<b>Personalized Messaging:</b> Personalized messaging allows businesses to connect with their audience on a deeper level. Our <b>WhatsApp marketing company</b> helps you create tailored messages for your customers, making them feel valued and increasing the chances of conversion.<br></br>", "WhatsApp Lead Generation:</b> We use <b>WhatsApp lead generation</b> strategies to capture customer interest and convert them into leads. Through targeted campaigns, we help you gather customer details and initiate conversations that can lead to sales, helping your business grow.<br></br>", "<b>Multimedia Messaging:</b> Using multimedia content like images, videos, and audio can significantly enhance your <b>WhatsApp marketing</b> efforts. We create engaging multimedia messages to grab your customers' attention, increase engagement, and convey your brand’s message effectively.<br></br>", "<b>WhatsApp Group Management:</b> <b>WhatsApp group management</b> allows you to create and manage groups of customers or leads for more targeted communication. We help you set up and manage <b>WhatsApp groups</b>, making it easier to share updates, promotions, and valuable information with the right audience.<br></br>", "<b>WhatsApp Payment Integration:</b> We help you integrate <b>WhatsApp payment solutions</b> to facilitate easy and secure transactions directly within the app. This enables businesses to offer a seamless payment experience for their customers.<br></br>", "<b>Real-Time Analytics & Reporting:</b> With <b>real-time analytics & reporting</b>, you can track the performance of your <b>WhatsApp marketing campaigns</b> and make data-driven decisions. We provide insights into open rates, engagement, and conversions, allowing you to optimize your campaigns for better results.<br></br>", "<b>WhatsApp Broadcast List Management:</b> Managing your <b>WhatsApp broadcast lists</b> is crucial for ensuring your messages reach the right audience. We help you organize and maintain your lists, ensuring that your communications are targeted and effective.",]
        },
        {
          headings: ["Why Choose Skyhit Media as Your WhatsApp Marketing Agency in Hyderabad?", ""],
          texts: ["As a <b>WhatsApp marketing agency</b> in Hyderabad, <a href='/' ><b>Skyhit Media</b></a> offers expert WhatsApp marketing services to help businesses effectively engage with their audience. Whether you're looking for a <b>WhatsApp advertising agency</b> or need help with <b>bulk WhatsApp messaging service</b>, we are here to help you reach your marketing goals.<br></br>", "Our team has years of experience in creating highly effective <b>WhatsApp marketing campaigns</b>, and we are committed to delivering exceptional results. We use the latest tools and techniques to ensure that your campaigns are optimized for maximum performance."]
        },
        {
          headings: ["Get Started with Skyhit Media's WhatsApp Marketing Services", ""],
          texts: ["If you’re looking to enhance your customer engagement and grow your business, <b>Skyhit Media</b> is the <b>WhatsApp marketing company</b> you need. From <b>WhatsApp advertising</b> to <a href='https://en.wikipedia.org/wiki/Lead_generation' target=_'blanket'><b>lead generation</b></a>, we provide comprehensive <b>WhatsApp marketing services</b> that help you connect with your audience in meaningful ways. .<br></br>", "Contact us today to learn more about how our <b>WhatsApp marketing agency</b> can help you achieve your business objectives. We look forward to working with you and helping your business succeed. .<br></br>", "<b>Skyhit Media</b> is your trusted partner for <b>WhatsApp marketing in Hyderabad</b>. Whether you need <b>WhatsApp marketing service</b>, <b>bulk messaging services</b>, or <b>WhatsApp advertising agency</b>, our team is here to provide top-notch marketing solutions that deliver results."],
        },
        {
          headings: ["Services We Offer", ""],
          list: ["<a href='/best-digital-marketing-agency' ><b>Best Digital Marketing Agency</b></a>", "<a href='/website-design-and-development-services' ><b>Website Design & Development Services</b></a>", "<a href='/Performance-marketing-agency' ><b>Performance Marketing Agency</b></a>", "<a href='/search-engine-optimization-agency' ><b>Search Engine Optimization Agency</b></a>", "<a href='/social-media-marketing-agency' ><b>Social Media Marketing Agency</b></a>", "<a href='/pay-per-click-advertising-agency' ><b>Pay Per Click Advertising Agency</b></a>", "<a href='/branding-and-graphic-design-agency' ><b>Branding and Graphic Design Agency</b></a>", "<a href='/influencer-marketing-agency' ><b>Influencer Marketing Agency</b></a>", "<a href='/analytics-and-reporting-agency' ><b>Analytics and Reporting Agency</b></a>", "<a href='/online-reputation-management-agency' ><b>Online Reputation Management Agency</b></a>", "<a href='/cyber-security-services' ><b>Cyber Security Services</b></a>"],
        },
      ],
    },
  },

];

export const metadata: Metadata = {title: "#1 WhatsApp Marketing Agency | Skyhit Media Boost Customer Engagement",
  description:
    "WhatsApp Marketing Agency Skyhit Media offers tailored WhatsApp marketing strategies to enhance customer engagement, increase sales, and grow your business.",
  keywords: ["Digital Marketing", "SEO", "PPC", "Web Design", "Skyhit Media", "Hyderabad"],
  openGraph: {
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Skyhit Media",
      }
    ],
    title: "#1 WhatsApp Marketing Agency | Skyhit Media Boost Customer Engagement",
    description: "WhatsApp Marketing Agency Skyhit Media offers tailored WhatsApp marketing strategies to enhance customer engagement, increase sales, and grow your business.",
    url: "https://skyhitmedia.com/whatsapp-marketing-agency",
  },
  alternates: { canonical: "https://skyhitmedia.com/whatsapp-marketing-agency" },
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

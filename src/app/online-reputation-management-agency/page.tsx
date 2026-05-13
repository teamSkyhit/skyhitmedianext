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
          texts: ["In today’s digital world, your online reputation can make or break your business. Whether you're a small startup or a large corporation, the way your brand is perceived online can significantly impact your success. This is where <b>Skyhit Media Digital Marketing Agency</b> comes in. As a top-rated Online <b>Reputation Management Agency</b>, we specialize in helping businesses maintain a positive and strong online presence, ensuring that your brand's reputation stays intact, even in the face of challenges."]

        },
        {
          headings: ["Why Choose Skyhit Media as Your Online Reputation Management Agency?", ""],
          texts: ["As a <b>reputation management company</b>, we understand that your online image is essential for building trust with your customers. Negative reviews, fake news, or a bad online reputation can seriously hurt your business. Our expert team at <a href='/' ><b>Skyhit Media</b></a> offers comprehensive solutions to protect and enhance your brand’s image across the web. We work with both large corporations and individuals, delivering tailored <b>reputation management services</b> to match your unique needs.<br></br>", "At <b>Skyhit Media Digital Marketing Agency</b>, our approach to online reputation management goes beyond simply suppressing negative content. We focus on the long-term growth and health of your brand's image. Through strategic <b>Brand Monitoring</b>, effective <b>Review Management</b>, and comprehensive <b>Crisis Management</b>, we ensure your business stays ahead in the digital world."],
        },
        {
          headings: ["Our Reputation Management Services", ""],
          list: ["<b>Brand Monitoring:</b> Our <b>Online Reputation Management Agency</b> helps you monitor your brand’s online mentions across the web. With advanced tools, we track customer feedback, reviews, and media coverage, providing you with real-time updates on what people are saying about your business. This allows you to respond quickly to any potential issues before they escalate.<br></br>", "<b>Review Management:</b> Managing online reviews is a critical part of reputation management. Our agency helps you manage reviews on all c, from Google to social media, ensuring that positive feedback is highlighted and negative reviews are addressed professionally and promptly.<br></br>", "<b>Search Engine Reputation Management (SERM) :</b> Negative search results can be damaging to your brand’s credibility. Through Search Engine Reputation Management (SERM), we optimize your website and online content to push negative search results down and improve your online visibility. As a leading <b>reputation management agency</b>, we ensure that the right information appears at the top of search results.<br></br>", "<b>Crisis Management:</b> Sometimes, a reputation crisis can hit unexpectedly. Whether it's a PR issue, customer complaints, or a viral scandal, Skyhit Media’s <b>Crisis Management</b> services can help you navigate through it. We work quickly to manage the situation and control the narrative to minimize damage to your brand.<br></br>", "<b>Social Media Reputation Management:</b> Social media platforms are vital to your brand’s reputation, but they can also be a source of negative publicity. Our <b>Social Media Reputation Management</b> services focus on protecting and enhancing your online reputation across all social platforms, managing both customer feedback and public perception.<br></br>", "<b>Content Removal & Suppression:</b> If harmful content, such as negative reviews, fake news, or defamatory articles, is affecting your reputation, our team can help. We offer <b>Content Removal & Suppression</b> services to ensure that unwanted content is removed or pushed down, allowing positive information to take its place.<br></br>", "<b>Personal Reputation Management:</b> In addition to business reputation management, we also offer <b>Personal Reputation Management</b> services. Whether you’re an executive, celebrity, or individual, we work to protect your personal brand and ensure your online image remains positive and professional.<br></br>", "<b>Competitor Analysis:</b> To stay ahead of the competition, it’s important to monitor your rivals. Our <b>Competitor Analysis</b> helps you understand how your competitors are managing their reputation and how you can differentiate and improve your own brand’s image.<br></br>", "<b>Public Relations (PR) & Outreach:</b> Effective <b>Public Relations (PR) & Outreach</b> is an essential part of any reputation management strategy. We help you build positive relationships with the media and influencers, creating opportunities for brand visibility and fostering trust with your audience.<br></br>", "<b>Influencer & Brand Advocacy:</b> Incorporating <b>Influencer & Brand Advocacy</b> into your strategy can significantly boost your online reputation. We connect your brand with influential individuals who can promote your products and services, helping to strengthen your online presence and credibility.<br></br>", "<b>Fake News & Defamation Control:</b> The spread of fake news and defamation can severely damage your reputation. Our <b>Fake News & Defamation Control</b> services focus on identifying and removing false information, ensuring that your reputation remains intact.<br></br>", "<b>Reputation Repair Services:</b> If your online reputation has already taken a hit, don’t worry. Our <b>Reputation Repair Services</b> work to restore your brand’s image, through content creation, SEO optimization, and public relations efforts. We are dedicated to rebuilding your reputation and re-establishing trust with your audience."]
        },
        {
          headings: ["Why is Online Reputation Management Important?", ""],
          texts: ["An effective <b>Online Reputation Management Agency</b> like Skyhit Media ensures that your brand is perceived positively across all digital platforms. Customers increasingly rely on online reviews, social media, and search engine results to make purchasing decisions. A positive online reputation can increase sales, customer loyalty, and brand trust, while a negative reputation can lead to lost business opportunities.<br></br>", "In a world where first impressions matter, reputation is everything. As a <b>top online reputation management company</b>, Skyhit Media is dedicated to protecting your online image, managing reviews, and improving your brand’s visibility."]
        },
        {
          headings: ["Get Started with Skyhit Media - Your Trusted Online Reputation Management Agency", ""],
          texts: ["If you’re looking for the <b>best online reputation management companies</b> to help manage and improve your online image, Skyhit Media Digital Marketing Agency is here to assist. We have years of experience in providing <b>reputation management services</b> and have helped businesses across various industries restore and enhance their reputations. Don’t let negative reviews or <a href='https://en.wikipedia.org/wiki/Misinformation' target=_'blanket'><b>misinformation</b></a>  harm your business—partner with Skyhit Media to take control of your online reputation today! .<br></br>", "<b>Contact us now to learn more about our reputation management services and how we can help you protect your brand’s online image.</b>"],
        },
        {
          headings: ["Services We Offer", ""],
          list: ["<a href='/best-digital-marketing-agency' ><b>Best Digital Marketing Agency</b></a>", "<a href='/website-design-and-development-services' ><b>Website Design & Development Services</b></a>", "<a href='/Performance-marketing-agency' ><b>Performance Marketing Agency</b></a>", "<a href='/search-engine-optimization-agency' ><b>Search Engine Optimization Agency</b></a>", "<a href='/social-media-marketing-agency' ><b>Social Media Marketing Agency</b></a>", "<a href='/pay-per-click-advertising-agency' ><b>Pay Per Click Advertising Agency</b></a>", "<a href='/branding-and-graphic-design-agency' ><b>Branding and Graphic Design Agency</b></a>", "<a href='/influencer-marketing-agency' ><b>Influencer Marketing Agency</b></a>", "<a href='/analytics-and-reporting-agency' ><b>Analytics and Reporting Agency</b></a>", "<a href='/whatsapp-marketing-agency' ><b>WhatsApp Marketing Agency</b></a>", "<a href='/cyber-security-services' ><b>Cyber Security Services</b></a>"],
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

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
  deskImgLink: "/images/performance-marketing-hero-section-skyhitmedia.webp",
  mobImgLink: "/images/performance-marketing-hero-section-skyhitmedia-mob.webp",
  title: "Performance Marketing Agency",
  subTitle:
    "Performance Marketing Agency at SKYHIT Media - Data-Driven Strategies for Optimized Campaigns, Measurable Results & Strong ROI.",
};

const cardData = [
  {
    icon: "/images/paid-search-advertising-icon.png",
    image: "/images/paid-search-advt-skyhitmedia.webp",
    title: "Paid Search Advertising (PPC)",
    description: "Targeted campaigns on Google Ads, Bing, and other search engines to drive high-intent traffic and immediate conversions ",
    link: "/pay-per-click-advertising-agency",
  },
  {
    icon: "/images/social-advertising-icon.png",
    image: "/images/social-media-advt-skyhitmedia.webp",
    title: "Social Media Advertising",
    description: "Running optimized ad campaigns across Facebook, Instagram, LinkedIn, and TikTok to boost engagement, brand awareness, and sales ",
    link: "#",
  },
  {
    icon: "/images/search-engine-icon.png",
    image: "/images/search-e-o-skyhitmedia.webp",
    title: "Search Engine Optimization (SEO)",
    description: "Advanced SEO strategies that improve your website's visibility on search engines, driving organic, high-converting traffic ",
    link: "/search-engine-optimization-agency",
  },
  {
    icon: "/images/affiliate-marketing-icon.png",
    image: "/images/affilate-marketing-skyhitmedia.webp",
    title: "Affiliate Marketing",
    description: "Building and managing partnerships with affiliates who promote your products in exchange for a commission on successful sales or leads ",
    link: "#",
  },
  {
    icon: "/images/retargeting-remarkeing-icon.png",
    image: "/images/remarketing-skyhitmedia.webp",
    title: "Retargeting & Remarketing",
    description: "Re-engage previous website visitors or users who interacted with your ads to bring them back for higher conversion rates ",
    link: "#",
  },
  {
    icon: "/images/conversion-icon.png",
    image: "/images/Conversion-Rate-Optimization-skyhitmedia.png",
    title: "Conversion Rate Optimization (CRO)",
    description: "Analyzing and improving website user experience to increase the percentage of visitors who convert into leads or customers  ",
    link: "#",
  },
  {
    icon: "/images/email-marketing-campaigns-icon.png",
    image: "/images/Email-Marketing-Integration-skyhitmedia.png",
    title: "Email Marketing Campaigns",
    description: "Designing and running effective email campaigns that nurture leads, drive sales, and increase customer loyalty. ",
    link: "#",
  },
  {
    icon: "/images/display-advertising-icon.png",
    image: "/images/display-advt-skyhitmedia.png",
    title: "Display Advertising",
    description: "Using display ads, banners, and videos across the web and apps to increase brand visibility and reach a larger audience ",
    link: "#",
  },
  {
    icon: "/images/programmatic-icon.png",
    image: "/images/programattic-advt-skyhitmedia.webp",
    title: "Programmatic Advertising",
    description: "Automating the ad buying process, using data and real-time bidding to place ads efficiently across various digital channels ",
    link: "#",
  },
  {
    icon: "/images/influencer-icon.png",
    image: "/images/Influencer-Marketing-skyhitmedia.webp",
    title: "Influencer Marketing",
    description: "Collaborating with influential content creators to promote your products or services to a highly engaged audience ",
    link: "/influencer-marketing-agency",
  },
  {
    icon: "/images/video-marketing-icon.png",
    image: "/images/video-marketing-skyhitmedia.webp",
    title: "Video Marketing",
    description: "Crafting compelling video ads on platforms like YouTube, Facebook, and Instagram to drive engagement and boost conversions ",
    link: "#",
  },
  {
    icon: "/images/lead-generation-icon.png",
    image: "/images/lead-gen-skyhitmedia.webp",
    title: "Lead Generation Campaigns",
    description: "Targeted campaigns focused on generating high-quality leads through forms, offers, and content, helping to grow your customer base ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Ritika Sharma",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Exceptional service! Their targeted ads improved our ROI significantly. Skyhit Media truly understands digital marketing and delivers outstanding performance-driven campaigns.",
  },
  {
    name: "Vikram Patel",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Skyhit Media helped us scale our business with precise ad campaigns. Great optimization, better leads, and fantastic customer support!",
  },
  {
    name: "Rohan Malhotra",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Brilliant results! Skyhit Media's expertise in performance marketing helped us reach the right audience and increase revenue. Highly recommended!",
  },
];

const faqs = [
  {
    question: "Performance Marketing Agency | SkyHit Media Digital Marketing Agency",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["Welcome to SkyHit Media, your trusted <b>performance marketing agency </b>offering high-quality digital marketing services to boost your business's online presence. As one of the <b>best performance marketing agencies, </b>we specialize in driving measurable results through targeted campaigns and data-driven strategies. Whether you're a startup or an established business, we can help you achieve your marketing goals efficiently.<br><br>", "Our expert team helps businesses scale their advertising efforts with <b>performance marketing ads</b> that bring direct value to their operations. By focusing on performance, we align marketing strategies with your business goals, ensuring you only pay for successful conversions, making your marketing spend more efficient."]

        },
        {
          headings: ["What is a Performance Marketing Agency?", ""],
          texts: ["When searching for <b>performance marketing companies,</b> you want to ensure you partner with a team that understands your business needs. <a href='/'><b>SkyHit Media</b></a> stands out as one of the <b>best performance marketing agencies</b>in the industry due to our commitment to delivering results that matter."],
        },
        {
          headings: ["Why Choose SkyHit Media – The Best Performance Marketing Agency?"],
          texts: ["When searching for performance marketing companies, you want to ensure you partner with a team that understands your business needs. SkyHit Media stands out as one of the best performance marketing agencies in the industry due to our commitment to delivering results that matter.<br><br>", "Here’s why we are the best choice for performance marketing:<br><br>"],
          list: ["<b>Expertise:</b> Our team of certified digital marketing experts knows how to tailor <b>performance marketing services</b> to meet the unique needs of every business.<br></br>", "<b>Data-Driven Approach:</b> We focus on data analytics to create highly optimized campaigns. This allows us to ensure that every decision is backed by data and provides measurable results.<br></br>", "<b>Targeted Campaigns:</b> Whether you need <b>performance marketing ads</b> on Google, Facebook, or other platforms, we ensure that every campaign targets the right audience, at the right time, for the best results.<br></br>", "<b>Transparency:</b> We provide full transparency in our services, showing you exactly how your budget is being spent and the results you’re getting from each campaign.<br></br>"]
        },
        {
          headings: ["Our Performance Marketing Services", ""],
          texts: ["At SkyHit Media, we offer a comprehensive range of <b>performance marketing services</b> that cater to your specific business needs. These services include:<br></br>"],
          list: ["<b>PPC Campaigns:</b> Pay-per-click (PPC) campaigns on platforms like Google Ads and Bing Ads are at the core of our <b>performance marketing agency</b> offerings. Our expert team designs PPC campaigns that are cost-effective and results-driven.<br></br>", "<b>Social Media Advertising:</b> We create <b>performance marketing ads</b> that stand out on platforms like Facebook, Instagram, LinkedIn, and Twitter. We focus on generating clicks and conversions through targeted ad strategies. <br></br>", "<b>Affiliate Marketing:</b> Our <a href='https://en.wikipedia.org/wiki/Affiliate_marketing' target=_'blanket' ><b>affiliate marketing</b></a> programs allow businesses to only pay for successful conversions, helping you scale efficiently and reduce risk. <br></br>", "<b>Conversion Rate Optimization (CRO):</b> We improve the conversion rate on your website through data-driven techniques that maximize the impact of each visitor. <br></br>", "<b>Email Marketing:</b> We design targeted email campaigns that not only drive engagement but also lead to conversions. Our performance-based approach helps you get the most out of your email marketing efforts.<br></br>", "<b>SEO (Search Engine Optimization):</b> While we specialize in <b>performance marketing</b> ads, we also offer SEO services that help improve organic search rankings and drive more qualified traffic to your site.<br></br>"]
        },
        {
          headings: ["The Benefits of Choosing a Performance Marketing Agency in India", ""],
          texts: ["India has become a global hub for digital marketing, and at SkyHit Media, we’re proud to be one of the leading <b>performance marketing agencies</b> in the country. By choosing our <b>performance marketing agency in India,</b> you’ll benefit from:<br></br>"],
          list: ["<b>Cost-Effective Services:</b> India offers competitive pricing without compromising on quality, which means you can get top-notch <b>performance marketing services</b> at a fraction of the cost compared to agencies in other countries.<br></br>", "<b>Skilled Experts:</b> India is home to some of the most talented and experienced digital marketers, and our team is equipped with the knowledge to drive the best results.<br></br>", "<b>Global Reach with Local Insights:</b> We have a deep understanding of both local and international markets, allowing us to create campaigns that resonate with your target audience."]
        },
        {
          headings: ["SkyHit Media – The Best Marketing Agency in Hyderabad", ""],
          texts: ["Located in Hyderabad, SkyHit Media is recognized as one of the best marketing agencies in Hyderabad. Our expertise in performance marketing and our commitment to delivering measurable results make us a top choice for businesses looking to grow in the digital space. Whether you are targeting a local market or looking to expand globally, we provide custom solutions tailored to your needs.<br></br"],
        },
        {
          headings: ["Why Performance Marketing?", ""],
          texts: ["The digital marketing landscape has evolved, and traditional methods may not always deliver the best results. <b>Performance marketing agencies</b> focus on direct, measurable outcomes, which means you only pay for the results you want. It’s a win-win situation that guarantees value for your marketing budget.<br></br>", "By choosing SkyHit Media as your <b>performance marketing agency,</b> you can trust that your campaigns are in the hands of experts who are dedicated to delivering results that matter.<br></br>"],
        },
        {
          headings: ["Get Started with SkyHit Media – The Leading Performance Marketing Agency", ""],
          texts: ["Ready to take your digital marketing to the next level? Contact SkyHit Media today to get started with the <b>best performance marketing services</b> available. Let us help you achieve your business goals with strategies that drive real results.<br></br>", "If you're looking for a <b>performance marketing agency</b> that values transparency, efficiency, and effectiveness, SkyHit Media is your perfect partner. Join our list of satisfied clients and experience why we’re one of the <b>best performance marketing agencies</b> around."],
        },
        {
          headings: ["Services We Offer", ""],
          list: ["<a href='/best-digital-marketing-agency' ><b>Best Digital Marketing Agency</b></a>", "<a href='/website-design-and-development-services' ><b>Website Design & Development Services</b></a>", "<a href='/search-engine-optimization-agency' ><b>Search Engine Optimization Agency</b></a>", "<a href='/social-media-marketing-agency' ><b>Social Media Marketing Agency</b></a>", "<a href='/pay-per-click-advertising-agency' ><b>Pay Per Click Advertising Agency</b></a>", "<a href='/branding-and-graphic-design-agency' ><b>Branding and Graphic Design Agency</b></a>", "<a href='/influencer-marketing-agency' ><b>Influencer Marketing Agency</b></a>", "<a href='/analytics-and-reporting-agency' ><b>Analytics and Reporting Agency</b></a>", "<a href='/whatsapp-marketing-agency' ><b>WhatsApp Marketing Agency</b></a>", "<a href='/online-reputation-management-agency' ><b>Online Reputation Management Agency</b></a>", "<a href='/cyber-security-services' ><b>Cyber Security Services</b></a>"],
        },
      ],
    },
  },

];

export const metadata: Metadata = {
  title: "#1 Performance Marketing Agency | Skyhit Media Drives Results",
  description:
    "Performance Marketing Agency - Skyhit Media boosts ROI with data-driven strategies, driving targeted traffic and increasing conversions. Get started today!",
};

export default function PerformancePage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/performance-marketing-hero-section-skyhitmedia.webp" mobImg="/images/performance-marketing-hero-section-skyhitmedia-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Results-Driven Performance Marketing Agency"
          description1="Our performance marketing agency specializes in driving measurable results through data-driven campaigns. We focus on optimizing ROI by targeting the right audience with precision and utilizing advanced strategies in SEO, PPC, and social media advertising. "
          description2="With a focus on performance and continuous improvement, we ensure every dollar spent delivers maximum value. Partner with our agency for effective, results-oriented performance marketing solutions that help your business achieve its growth and revenue goals."
          imageUrl="/images/performance-marketing-2nd-section-skyhitmedia.webp"
          altText="Performance Marketing Service Skyhitmedia"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Performance Marketing Services We Offer"
          sectionDescription="Drive Measurable Results with a Leading Performance Marketing Agency"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best for Performance Marketing Services"
          subTitle="Boost Your Brand with Precision Marketing "
          description1="Drive Growth with Proven Strategies"
          description2="Skyhit Media is a leading performance marketing agency in India, offering data-driven solutions to help businesses grow. Our expert team specializes in performance marketing ads, ensuring high conversion rates and maximum ROI. With top-notch performance marketing services in Hyderabad, we create targeted campaigns that drive real results, boosting your brand's visibility and revenue effectively."
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

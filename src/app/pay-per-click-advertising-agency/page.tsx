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
  deskImgLink: "/images/ppc-hero-section.webp",
  mobImgLink: "/images/ppc-hero-section-mob.webp",
  title: "Pay-Per-Click Advertising Agency",
  subTitle:
    "Pay-Per-Click Advertising Agency at SKYHIT Media - Data-Driven PPC Campaigns to Drive Targeted Traffic, Maximize ROI & Boost Conversions.",
};

const cardData = [
  {
    icon: "/images/google-ads-management-icon.png",
    image: "/images/google-ads-skyhitmedia.png",
    title: "Google Ads Management",
    description: "Comprehensive campaign setup, management, and optimization on Google Ads to maximize reach and conversions ",
    link: "#",
  },
  {
    icon: "/images/bing-ads-managent-icon.png",
    image: "/images/bing-ads-skyhitmedia.png",
    title: "Bing Ads Management",
    description: "Running targeted campaigns on Bing Ads to capture additional audience segments and drive traffic",
    link: "#",
  },
  {
    icon: "/images/media-ads-icon.png",
    image: "/images/social-media-ads-skyhitmedia.webp",
    title: "Social Media Ads",
    description: "Managing paid advertising on platforms like Facebook, Instagram, LinkedIn, and Twitter to increase engagement and brand awareness ",
    link: "#",
  },
  {
    icon: "/images/keyword-research-targeting-icon.png",
    image: "/images/keyword-research-skyhitmedia.webp",
    title: "Keyword Research & Targeting",
    description: "Identifying high-performing keywords to ensure your ads are targeting the most relevant audience ",
    link: "#",
  },
  {
    icon: "/images/dis-advertising-icon.png",
    image: "/images/display-advt-skyhitmedia.png",
    title: "Display Advertising",
    description: "Designing and managing visual banner ads across Google Display Network and partner websites to boost visibility ",
    link: "#",
  },
  {
    icon: "/images/remarketing-campaigns-icon.png",
    image: "/images/social-media-ads-skyhitmedia.webp",
    title: "Remarketing Campaigns",
    description: "Re-engaging users who have visited your site but haven't converted, encouraging them to take action ",
    link: "#",
  },
  {
    icon: "/images/shopping-ads-icon.png",
    image: "/images/shopping-ads-skyhitmedia.webp",
    title: "Shopping Ads Management",
    description: "Creating and optimizing Google Shopping or Bing Shopping campaigns for e-commerce businesses to increase product sales ",
    link: "#",
  },
  {
    icon: "/images/landing-page-icon.png",
    image: "/images/landing-page-skyhitmedia.webp",
    title: "Landing Page Optimization",
    description: "Designing and optimizing landing pages to improve ad relevance, user experience, and conversion rates ",
    link: "#",
  },
  {
    icon: "/images/a-b-testing-icon.png",
    image: "/images/ab-testing-skyhitmedia.webp",
    title: "A/B Testing",
    description: "Testing different ad creatives, headlines, and formats to find the highest-performing combinations ",
    link: "#",
  },
  {
    icon: "/images/ppc-analytics-icon.png",
    image: "/images/pp-service-c-skyhitmedia.webp",
    title: "PPC Analytics & Reporting",
    description: "Providing detailed performance insights and actionable recommendations to optimize campaigns and maximize ROI ",
    link: "#",
  },
  {
    icon: "/images/geotargeting-icon.png",
    image: "/images/geotargeting-skyhitmedia.webp",
    title: "Geotargeting Campaigns",
    description: "Running location-based ads to reach specific audiences in targeted areas, ideal for local businesses",
    link: "#",
  },
  {
    icon: "/images/budget-management-icon.png",
    image: "/images/budget-marketing-skyhitmedia.webp",
    title: "Budget Management",
    description: "Allocating and optimizing ad spend to ensure maximum results within your budget constraints ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Pooja",
    position: "",
    image: "/images/review-image-services-1.webp",
    stars: 5,
    quote: "Skyhit Media's targeted PPC ads helped us reach the right audience. Excellent strategy, great execution, and impressive results!",
  },
  {
    name: "Vikram Shah",
    position: "",
    image: "/images/review-image-services-2.webp",
    stars: 5,
    quote: "Highly recommend Skyhit Media for PPC! Their expertise in Google Ads and social media ads delivered great returns. Outstanding service!",
  },
  {
    name: "Amit Khanna",
    position: "",
    image: "/images/review-image-services-3.webp",
    stars: 5,
    quote: "Skyhit Media's PPC campaigns delivered amazing results! Higher conversions, lower costs, and better ROI. A truly professional and data-driven team!",
  },
];

const faqs = [
  {
    question: "Pay Per Click Advertising Agency - Skyhit Media Digital Marketing Agency",
    answer: {
      sections: [
        {
          texts: ["Welcome to <b>Skyhit Media</b>, your trusted <b>Pay Per Click Advertising Agency</b>. We specialize in delivering highly effective PPC advertising services to help businesses reach their target audience and maximize their return on investment (ROI). With our expert knowledge and proven strategies, we help you drive targeted traffic to your website through well-crafted paid advertising campaigns.<br></br>", "As one of the <b>best PPC agencies</b> in Hyderabad, we offer a range of <b>PPC advertising services</b> designed to boost your online presence. Whether you're looking for <b>Google Ads management</b>, <b>Bing Ads management</b>, or <b>social media ads</b>, our team is here to help you grow your business and achieve your marketing goals."]

        },
        {
          headings: ["Why Choose Skyhit Media as Your PPC Advertising Agency?", ""],
          texts: ["At <b>Skyhit Media</b>, we understand the power of <b>pay per click (PPC) advertising</b> in driving immediate and measurable results. As a leading <b>PPC marketing agency</b>, we focus on creating customized PPC strategies that align with your business objectives. Our goal is to deliver the best possible ROI for your advertising spend by targeting the right audience with the right message at the right time. <br></br>", "We are committed to providing a comprehensive range of <b>PPC services in Hyderabad</b> and beyond. Whether you’re looking for a <b>PPC ad company</b> to help you launch your first campaign or an established <b>PPC advertising company</b> to optimize your existing strategy, we are your go-to experts."],
        },
        {
          headings: ["Our PPC Advertising Services", ""],
          texts: ["Our team at <b>Skyhit Media</b> offers a wide variety of <b>pay per click advertising services</b> tailored to meet your business needs. From <b>Google Ads management</b> to <b>shopping ads management</b>, we have the expertise and tools to manage every aspect of your PPC campaigns. <br></br>"],
          list: ["<b>Google Ads Management: </b>  As a trusted <b>Google Ads management</b> service provider, we create and manage campaigns that deliver high-quality traffic and conversions. Our expert team uses the latest techniques to ensure your ads appear in front of the right people at the right time, maximizing your ROI. <br></br>", "<b>Bing Ads Management: </b>  If you’re looking to expand your PPC strategy beyond Google, we offer <b>Bing Ads management</b> services. Bing can offer a lower cost per click compared to Google Ads, and our team can help you take advantage of this platform to generate targeted traffic and leads. <br></br>", "<b>Social Media Ads: </b>  Social media platforms like Facebook, Instagram, and LinkedIn provide unique opportunities to reach your audience. Our <b>social media ads</b> campaigns are designed to increase engagement, build brand awareness, and drive traffic to your website. <br></br>", "<b>Keyword Research & Targeting: </b>  Effective <b>keyword research & targeting</b> is the cornerstone of any successful PPC campaign. We conduct in-depth research to identify high-performing keywords that attract quality leads while minimizing your costs. <br></br>", "<b>Display Advertising: </b>  We help you reach a wider audience through <b>display advertising</b> on various websites across the internet. Our <b>PPC ad agency</b> designs eye-catching banners and ensures they appear on websites relevant to your target audience, driving more traffic to your site. <br></br>", "<b>Remarketing Campaigns: </b>  <b>Remarketing campaigns</b> are an excellent way to reconnect with users who have already visited your website. We use remarketing ads to target potential customers who have shown interest in your products or services, encouraging them to return and complete their purchase. <br></br>", "<b>Shopping Ads Management: </b>  For <a href='https://en.wikipedia.org/wiki/E-commerce' target=_'blanket'><b>e-commerce businesses</b></a>, <b>shopping ads management</b> is essential to showcase your products to potential buyers. Our team can help you set up and manage Google Shopping ads to display your products with pricing, photos, and descriptions, helping you increase sales. <br></br>", "<b>Landing Page Optimization: </b>  Creating effective landing pages is key to converting clicks into customers. We focus on <b>landing page optimization</b>, ensuring that your pages are designed to capture leads, increase conversions, and provide a seamless user experience. <br></br>", "<b>A/B Testing: </b>  We use <b>A/B testing</b> to optimize your ad campaigns. By testing different versions of ads and landing pages, we identify which versions are most effective in driving conversions and continuously improve the performance of your campaigns. <br></br>", "<b>PPC Analytics & Reporting: </b>  We provide detailed <b>PPC analytics & reporting</b> to track your campaign's performance. Our reports give you clear insights into your ad spend, traffic, conversions, and ROI, allowing you to make informed decisions about your future campaigns. <br></br>", "<b>Geotargeting Campaigns: </b>  For businesses that target specific geographic regions, <b>geotargeting campaigns</b> are highly effective. We can help you target customers based on their location, increasing the relevancy of your ads and ensuring you reach the right audience. <br></br>", "<b>Budget Management: </b>  Effective <b>budget management</b> ensures that you get the most value out of your PPC campaigns. We help you set and optimize your budget to ensure that your ads reach the right audience without overspending, giving you a high return on investment."]
        },
        {
          headings: ["Why Skyhit Media is the Best PPC Advertising Agency", ""],
          list: ["As one of the top <b>PPC advertising agencies</b> in Hyderabad, <a href='/' ><b>Skyhit Media</b></a> is known for delivering exceptional results through targeted PPC campaigns. We have worked with a variety of clients across different industries, helping them achieve greater visibility, generate leads, and increase sales. <br></br>", "Our <b>PPC ad agency</b> is committed to providing personalized solutions tailored to your business goals. We take the time to understand your business, audience, and objectives to create a PPC strategy that works for you. Whether you're looking for <b>pay per click advertising services</b> or need help optimizing your current campaigns, we are here to assist you every step of the way."]
        },
        {
          headings: ["Get in Touch with Skyhit Media Today", ""],
          texts: ["If you're looking for a reliable <b>Pay Per Click Advertising Agency</b> to drive more traffic and sales, <b>Skyhit Media,</b> is here to help. We offer expert <b>PPC services in Hyderabad</b> and are dedicated to delivering high-performing campaigns that produce measurable results. <br></br>", "Contact us today to learn more about how our <b>PPC marketing agency</b> can help you achieve your business goals. Whether you're looking for <b>PPC advertising services</b>, <b>SEO</b> and <b>PPC services</b>, or a comprehensive <b>PPC advertising service</b>, our team is ready to help. <br></br>", "At <b>Skyhit Media</b>, we offer a full suite of <b>pay per click (PPC) services</b>, including <b>Google Ads management</b>, <b>Bing Ads management</b>, <b>social media ads</b>, and more. As the <b>best PPC agency</b> in Hyderabad, we focus on driving high-quality traffic to your website, improving conversion rates, and maximizing your ROI. Whether you're interested in <b>PPC services Hyderabad</b> or need a <b>PPC agency in Hyderabad</b> to manage your ads, we are here to support you every step of the way."],
        },
        {
          headings: ["Services We Offer", ""],
          list: ["<a href='/best-digital-marketing-agency' ><b>Best Digital Marketing Agency</b></a>", "<a href='/website-design-and-development-services' ><b>Website Design & Development Services</b></a>", "<a href='/Performance-marketing-agency' ><b>Performance Marketing Agency</b></a>", "<a href='/search-engine-optimization-agency' ><b>Search Engine Optimization Agency</b></a>", "<a href='/social-media-marketing-agency' ><b>Social Media Marketing Agency</b></a>", "<a href='/branding-and-graphic-design-agency' ><b>Branding and Graphic Design Agency</b></a>", "<a href='/influencer-marketing-agency' ><b>Influencer Marketing Agency</b></a>", "<a href='/analytics-and-reporting-agency' ><b>Analytics and Reporting Agency</b></a>", "<a href='/whatsapp-marketing-agency' ><b>WhatsApp Marketing Agency</b></a>", "<a href='/online-reputation-management-agency' ><b>Online Reputation Management Agency</b></a>", "<a href='/cyber-security-services' ><b>Cyber Security Services</b></a>"],
        },
      ],
    },
  },

];

export const metadata: Metadata = {title: "#1 Pay Per Click Advertising Agency | Skyhit Media Boost ROI",
  description:
    "Pay Per Click Advertising Agency Skyhit Media offers expert PPC services to increase your online visibility, drive targeted traffic, and maximize your ROI.",
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
    title: "#1 Pay Per Click Advertising Agency | Skyhit Media Boost ROI",
    description: "Pay Per Click Advertising Agency Skyhit Media offers expert PPC services to increase your online visibility, drive targeted traffic, and maximize your ROI.",
    url: "https://skyhitmedia.com/pay-per-click-advertising-agency",
  },
  alternates: { canonical: "https://skyhitmedia.com/pay-per-click-advertising-agency" },
};

export default function PpcPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/ppc-hero-section.webp" mobImg="/images/ppc-hero-section-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Expert Pay-Per-Click Advertising Agency"
          description1="As a top PPC advertising agency in Hyderabad, we specialize in delivering high-performing PPC marketing campaigns that drive measurable results. Our expert team offers a range of services, including pay-per-click advertising, PPC ad management, and SEO & PPC integration to maximize your ROI."
          description2="Whether you're looking for targeted PPC ads or comprehensive digital marketing strategies, we provide tailored solutions to boost your brand's online visibility and generate quality leads."
          imageUrl="/images/ppc-2ndsection-vector-skyhitmedia.webp"
          altText="About Digital Marketing Service"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Expert Pay Per Click Services We Offer"
          sectionDescription="Optimized PPC ads to enhance conversions and maximize ROI"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best for PPC Advertising Services"
          subTitle="Expert PPC strategies to drive traffic and boost your ROI"
          description1="Our PPC Marketing Strategies"
          description2="As a top PPC agency in Hyderabad, our strategies are designed to drive targeted traffic and maximize conversions. We specialize in integrating SEO and PPC services to ensure comprehensive digital marketing success. Our tailored pay-per-click campaigns focus on optimizing ROI, utilizing the best PPC advertising techniques to enhance visibility and generate quality leads for your business."
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

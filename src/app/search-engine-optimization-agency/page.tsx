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
  deskImgLink: "/images/seo-hero-sec-skyhitmedia.webp",
  mobImgLink: "/images/seo-hero-sec-skyhitmedia-mob.webp",
  title: "Search Engine Optimization Agency",
  subTitle:
    "Search Engine Optimization Agency at SKYHIT Media - Advanced SEO Strategies to Boost Visibility, Drive Organic Traffic & Improve Rankings.",
};

const cardData = [
  {
    icon: "/images/page-seo-icon.png",
    image: "/images/on-page-seo-skyhitmedia.webp",
    title: "On-Page SEO",
    description: "Optimizing individual web pages (content, title tags, meta descriptions) to rank higher and earn relevant traffic ",
    link: "#",
  },
  {
    icon: "/images/keyword-research-icon.png",
    image: "/images/keyword-research-skyhitmedia.webp",
    title: "Keyword Research",
    description: "Identifying high-value keywords that your target audience is searching for, ensuring your content ranks for the right terms ",
    link: "#",
  },
  {
    icon: "/images/technical-icon.png",
    image: "/images/Technical-SEO-skyhitmedia.webp",
    title: "Technical SEO",
    description: "Optimizing website infrastructure (site speed, mobile-friendliness, URL structure, schema markup) to enhance search engine crawlability and user experience ",
    link: "#",
  },
  {
    icon: "/images/content-optimization-icon.png",
    image: "/images/Content-Writing-skyhitmedia.webp",
    title: "Content Optimization",
    description: "Creating and optimizing content to target specific keywords, improve readability, and drive engagement  ",
    link: "#",
  },
  {
    icon: "/images/local-icon.png",
    image: "/images/local-seo-skyhitmedia.webp",
    title: "Local SEO",
    description: "Optimizing for location-based searches, including Google My Business setup, local citations, and on-page optimization for local search visibility ",
    link: "#",
  },
  {
    icon: "/images/link-icon.png",
    image: "/images/link-building-skyhitmedia.webp",
    title: "Link Building",
    description: "Acquiring high-quality backlinks from reputable websites to improve domain authority and search engine rankings ",
    link: "#",
  },
  {
    icon: "/images/audits-icon.png",
    image: "/images/seo-audit-skyhitmedia.webp",
    title: "SEO Audits",
    description: "Conducting thorough site audits to identify technical issues, content gaps, and opportunities for improvement ",
    link: "#",
  },
  {
    icon: "/images/mobile-seo-icon.png",
    image: "/images/mobile-seo-skyhitmedia.webp",
    title: "Mobile SEO",
    description: "Ensuring your website is mobile-friendly, with optimized layouts and fast loading times for a seamless mobile experience ",
    link: "#",
  },
  {
    icon: "/images/Buy2.png",
    image: "/images/voice-search-opt-skyhitmedia.webp",
    title: "Voice Search Optimization",
    description: "Optimizing content for voice-based searches focusing on natural language queries and featured snippets ",
    link: "#",
  },
  {
    icon: "/images/ecommerce-seo-icon.png",
    image: "/images/e-commerce-seo-skyhitmedia.webp",
    title: "E-commerce SEO",
    description: "Enhancing the search visibility of online stores by optimizing product pages, category pages, and site architecture for better rankings",
    link: "#",
  },
  {
    icon: "/images/seo-analytics-reporting-icon.png",
    image: "/images/seo-analytics-skyhitmedia.webp",
    title: "SEO Analytics & Reporting",
    description: "Providing regular, data-driven reports that track SEO performance, keyword rankings, and overall website traffic ",
    link: "#",
  },
  {
    icon: "/images/competitor-analysiz-icon.png",
    image: "/images/competitor-analysis-skyhitmedia.webp",
    title: "Competitor Analysis",
    description: "Analyzing your competitors' SEO strategies and performance to uncover opportunities and ensure you're staying ahead in search rankings ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Neha Kapoor",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Professional and result-driven! Skyhit Media improved our search rankings significantly. We now get more inquiries and quality website traffic.",
  },
  {
    name: "Rohan Verma",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Their SEO services are top-notch! Our website went from invisible to page one on Google. Great team and excellent support!",
  },
  {
    name: "Vikram Malhotra",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Highly recommend Skyhit Media for SEO! Their techniques increased our brand visibility and helped us attract more customers online.",
  },
];

const faqs = [
  {
    question: "Search Engine Optimization Agency - Skyhit Media Digital Marketing Agency",
    answer: {
      sections: [
        {
          texts: ["Welcome to <b>Skyhit Media</b>, a leading <b>Search Engine Optimization Agency</b> dedicated to helping businesses improve their online presence and achieve higher search engine rankings. As a trusted <b>SEO agency in Hyderabad</b>, we specialize in delivering tailored SEO solutions that drive organic traffic, boost website visibility, and increase your ROI. Whether you're looking for local SEO solutions or need advanced technical SEO strategies, our team is here to help.<br></br>"]

        },
        {
          texts: ["Welcome to <b>Skyhit Media</b>, a leading <b>Search Engine Optimization Agency</b> dedicated to helping businesses improve their online presence and achieve higher search engine rankings. As a trusted <b>SEO agency in Hyderabad</b>, we specialize in delivering tailored SEO solutions that drive organic traffic, boost website visibility, and increase your ROI. Whether you're looking for local SEO solutions or need advanced technical SEO strategies, our team is here to help.<br></br>"]
        },
        {
          headings: ["Why Choose Skyhit Media as Your SEO Partner?", ""],
          texts: ["In today's competitive online market, appearing at the top of search engine results is crucial for your business success. As a <b>Search Engine Optimization Agency, Skyhit Media</b> uses the latest SEO techniques and strategies to improve your website's performance. Our team of experienced SEO specialists works closely with clients to create a customized SEO plan that aligns with their business goals. <br></br>", "Whether you're a small business or an established brand, we can help you improve your website’s ranking and visibility. As one of the <b>best SEO agencies in Hyderabad</b>, we have a proven track record of delivering exceptional results for our clients. <br></br>"],
        },
        {
          headings: ["Our Search Engine Optimization Services", ""],
          texts: ["At <b>Skyhit Media</b>, we provide a wide range of <b>SEO services</b> designed to enhance your website's performance and visibility. Our expert team uses the most effective SEO techniques to ensure that your website ranks higher in search results, attracts more visitors, and increases conversions. Here’s a breakdown of our <b>SEO services:</b><br></br>"],
          list: ["<b>On-Page SEO: </b>On-page SEO is the foundation of any successful SEO strategy. Our <b>on-page SEO agency</b> focuses on optimizing your website’s content, structure, and HTML code to improve its search engine ranking. We ensure that each page on your website is properly optimized to attract both search engines and users. <br></br>", "<b>Keyword Research:</b> Keyword research is essential for identifying the terms and phrases your target audience is searching for. Our team conducts in-depth <b>keyword research</b> to find the best keywords for your business, ensuring that your website targets the right audience and ranks higher for relevant search queries. <br></br>", "<b>Technical SEO: </b>Technical SEO ensures that your website is properly optimized for search engines. As a <b>technical SEO agency</b>, we audit your website’s technical aspects, including site speed, mobile responsiveness, and <a href='https://en.wikipedia.org/wiki/Web_crawler' target=_'blanket'><b>crawlability</b></a>, to ensure search engines can easily index and rank your pages. <br></br>", "<b>Content Optimization: </b>Content is a key factor in SEO. We offer content optimization services to make sure your website’s content is informative, engaging, and optimized for both search engines and users. Well-optimized content helps increase organic traffic and improves user engagement. <br></br>", "<b>Local SEO: </b>If your business serves a local market, <b>local SEO</b> is essential to reach customers in your area. We optimize your website and Google My Business profile to ensure that your business appears in local search results, helping you attract more local customers. <br></br>", "<b>Link Building: </b>Link building is a crucial part of SEO. Our team implements effective <b>link building </b> strategies to acquire high-quality backlinks that improve your website’s domain authority and search engine rankings. <br></br>", "<b>SEO Audits: </b>We conduct comprehensive <b>SEO audits</b> to analyze your website’s current performance. Our audits identify issues that may be affecting your rankings and provide actionable insights to improve your website’s SEO. <br></br>", "<b>Mobile SEO: </b>With the majority of users accessing websites via mobile devices, <b>mobile SEO</b> is crucial for optimizing your site for mobile searches. We ensure that your website is mobile-friendly, responsive, and fast-loading to provide an optimal user experience across all devices. <br></br>", "<b>Voice Search Optimization: </b> With the rise of voice search, optimizing your website for voice queries is essential. We offer voice search optimization services to ensure your website is easily discoverable through voice-activated devices like smartphones and smart speakers. <br></br>", "</b>E-commerce SEO: </b>For online stores, <b>e-commerce SEO</b> is vital to improve product visibility and attract customers. We help optimize product pages, category pages, and site structure to ensure that your online store ranks higher on search engines and drives more traffic. <br></br>", "<b>SEO Analytics & Reporting: </b>We provide detailed <b>SEO analytics & reporting</b> to track your website’s performance. Our reports give you insights into key metrics, such as traffic, rankings, and conversions, allowing you to measure the effectiveness of your SEO strategy. <br></br>", "<b>Competitor Analysis: </b>Staying ahead of your competitors is crucial for online success. Our <b>competitor analysis/b> helps identify the strategies your competitors are using and provides actionable insights to outperform them in search rankings. <br></br>"]
        },
        {
          headings: ["Why Skyhit Media is the Best SEO Agency in Hyderabad", ""],
          texts: ["As a top-rated <b>SEO agency in Hyderabad, Skyhit Media</b> is known for delivering effective SEO solutions that drive results. Our team of experienced SEO experts stays up-to-date with the latest industry trends and Google algorithm updates to ensure that your website is always optimized according to the latest SEO practices. <br></br>", "We have worked with businesses across various industries, helping them achieve higher search engine rankings, increased traffic, and improved conversion rates. Whether you need <b>on-page SEO</b>, <b>technical SEO</b>, or <b>local SEO</b>, our team is here to provide the best <b>SEO services</b> that suit your business needs."],
        },
        {
          headings: ["Get in Touch with Skyhit Media – Your SEO Agency Partner", ""],
          texts: ["If you're looking for a reliable <b>Search Engine Optimization Agency</b> to help improve your website's SEO performance, <b>Skyhit Media</b> is the perfect choice. Our team of SEO specialists is ready to help your business achieve its online goals. <br></br>", "We offer customized SEO strategies tailored to your unique business needs. Whether you're looking for <b>SEO agency near me</b>, <b>best SEO company in Hyderabad</b>, or a comprehensive SEO solution, we are here to help. <br></br>", "Contact us today to discuss how our <b>SEO agency</b> can help grow your online presence and drive more traffic to your website. <br></br>", "At <a href='/' ><b>Skyhit Media</b></a>, we understand the importance of having a strong online presence. As a trusted <b>Search Engine Optimization Agency</b>, we offer a complete suite of SEO services, including <b>keyword research</b>, <b>content optimization, local SEO</b>, and more. If you're looking for the <b>best SEO agency in Hyderabad</b> or an <b>organic SEO agency</b>, we are here to deliver results-driven SEO solutions."],
        },
        {
          headings: ["Services We Offer", ""],
          list: ["<a href='/best-digital-marketing-agency' ><b>Best Digital Marketing Agency</b></a>", "<a href='/website-design-and-development-services' ><b>Website Design & Development Services</b></a>", "<a href='/Performance-marketing-agency' ><b>Performance Marketing Agency</b></a>", "<a href='/social-media-marketing-agency' ><b>Social Media Marketing Agency</b></a>", "<a href='/pay-per-click-advertising-agency' ><b>Pay Per Click Advertising Agency</b></a>", "<a href='/branding-and-graphic-design-agency' ><b>Branding and Graphic Design Agency</b></a>", "<a href='/influencer-marketing-agency' ><b>Influencer Marketing Agency</b></a>", "<a href='/analytics-and-reporting-agency' ><b>Analytics and Reporting Agency</b></a>", "<a href='/whatsapp-marketing-agency' ><b>WhatsApp Marketing Agency</b></a>", "<a href='/online-reputation-management-agency' ><b>Online Reputation Management Agency</b></a>", "<a href='/cyber-security-services' ><b>Cyber Security Services</b></a>"],
        },
      ],
    },
  },

];

export const metadata: Metadata = {
  title: "#1 Search Engine Optimization Agency | Skyhit Media Boost Your SEO",
  description:
    "Search Engine Optimization Agency Skyhit Media helps improve your website's ranking and visibility. Drive more traffic with our expert SEO strategies and solutions.",
};

export default function SeoPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/seo-hero-sec-skyhitmedia.webp" mobImg="/images/seo-hero-sec-skyhitmedia-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Leading Search Engine Optimization Agency"
          description1="As a leading SEO agency in Hyderabad, we specialize in providing comprehensive search engine optimization services, including technical SEO, on-page SEO, organic SEO, and local SEO. Our team of experts works tirelessly to enhance your website's visibility and rankings."
          description2="Whether you need a local SEO agency near you or the best SEO company in Hyderabad, we deliver tailored strategies to drive traffic, boost conversions, and ensure long-term online success for your business."
          imageUrl="/images/seo-2ndsec-vec-skyhitmedia.png"
          altText="About Search Engine Optimization (SEO) Service"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Best Search Engine Optimization Agency Services"
          sectionDescription="From local to organic SEO, we offer services for every need"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best for SEO Services"
          subTitle="Customized SEO strategies that deliver measurable results"
          description1="Our Proven SEO Marketing Strategies"
          description2="As the best SEO agency in Hyderabad, we specialize in creating customized SEO marketing strategies that drive results. From on-page and organic SEO to technical and local SEO, our approach ensures improved rankings and increased traffic. Our expert team uses the latest techniques to boost your online visibility and help your business succeed in a competitive digital landscape."
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

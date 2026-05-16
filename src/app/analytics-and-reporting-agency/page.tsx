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
  deskImgLink: "/images/analytics-hero-section-skyhitmedia.webp",
  mobImgLink: "/images/analytics-hero-section-skyhitmedia-mob.webp",
  title: "Analytics & Reporting Agency",
  subTitle:
    "Analytics & Reporting Agency at SKYHIT Media - Data-Driven Insights & Reports to Optimize Strategies, Track Performance & Maximize ROI",
};

const cardData = [
  {
    icon: "/images/website-analytics-icon.png",
    image: "/images/web-analytics-skyhitmedia.webp",
    title: "Website Analytics",
    description: "Monitoring website traffic, user behavior, and conversion patterns using tools like Google Analytics. ",
    link: "#",
  },
  {
    icon: "/images/campaign-performance-analysis-icon.png",
    image: "/images/campaign-performance-analysis-skyhitmedia.webp",
    title: "Campaign Performance Analysis",
    description: "Tracking the effectiveness of marketing campaigns across channels to optimize performance ",
    link: "#",
  },
  {
    icon: "/images/conversion-rate-optimization-icon.png",
    image: "/images/Conversion-Rate-Optimization-service-skyhitmedia.webp",
    title: "Conversion Rate Optimization (CRO)",
    description: "Analyzing user behavior to identify opportunities for increasing conversions on websites and landing pages ",
    link: "#",
  },
  {
    icon: "/images/seo-performance-reporting-icon.png",
    image: "/images/seo-performance-skyhitmedia.webp",
    title: "SEO Performance Reporting",
    description: "Providing detailed reports on keyword rankings, organic traffic, and SEO improvements ",
    link: "#",
  },
  {
    icon: "/images/ppc-campaign-analytics-icon.png",
    image: "/images/pay-p-c-skyhitmedia.webp",
    title: "PPC Campaign Analytics",
    description: "Analyzing pay-per-click campaigns to optimize ad spend, targeting, and ROI ",
    link: "#",
  },
  {
    icon: "/images/social-media-insights-icon.png",
    image: "/images/social-media-inshights-skyhitmedia.webp",
    title: "Social Media Insights",
    description: "Tracking engagement, growth, and performance of social media campaigns across platforms like Facebook, Instagram, and LinkedIn ",
    link: "#",
  },
  {
    icon: "/images/email-marketing-metrics-icon.png",
    image: "/images/emial-template-design-skyhitmedia.webp",
    title: "Email Marketing Metrics",
    description: "Measuring open rates, click-through rates, and conversions from email marketing campaigns ",
    link: "#",
  },
  {
    icon: "/images/ecommerce-analytics-icon.png",
    image: "/images/emial-template-design-skyhitmedia.webp",
    title: "E-Commerce Analytics",
    description: "Tracking sales, product performance, and customer behavior on e-commerce platforms to boost revenue ",
    link: "#",
  },
  {
    icon: "/images/audience-segmentation-icon.png",
    image: "/images/audience-segmentation-skyhitmedia.webp",
    title: "Audience Segmentation",
    description: "Analyzing customer data to segment audiences for more personalized and targeted marketing strategies ",
    link: "#",
  },
  {
    icon: "/images/competitor-analysis-icon.png",
    image: "/images/competitor-analysis-service-skyhitmedia.webp",
    title: "Competitor Analysis",
    description: "Monitoring competitors' digital performance to identify opportunities and benchmarks  ",
    link: "#",
  },
  {
    icon: "/images/real-time-reporting-icon.png",
    image: "/images/real-time-reporting-skyhitmedia.png",
    title: "Real-Time Reporting",
    description: "Providing live data on campaign performance, enabling quick adjustments for better results ",
    link: "#",
  },
  {
    icon: "/images/custom-reporting-dashboards-icon.png",
    image: "/images/Custom-Reporting-Dashboards-skyhitmedia.webp",
    title: "Custom Reporting Dashboards",
    description: "Creating tailored dashboards that consolidate all key metrics into easy-to-understand reports for better decision-making ",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Sophia",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Skyhit Media is the most dependable Analytics & Reporting Agency we've worked with. Their real-time reports and valuable data insights helped us improve our marketing and increase profits.",
  },
  {
    name: "Michael",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Working with Skyhit Media, the best Analytics & Reporting Agency, has completely changed how we use data. Their reports gave us a clearer understanding of our customers, helping us make better marketing decisions.",
  },
  {
    name: "Smith",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Skyhit Media, a top Analytics & Reporting Agency, doesn't just give us reports—they provide helpful advice. Their expertise helped us improve how we work and get better results from our campaigns.",
  },
];

const faqs = [
  {
    question: "Analytics & Reporting Agency - Skyhit Media Digital Marketing Agency",
    answer: {
      sections: [
        {
          texts: ["In today’s data-driven world, understanding your business performance through analytics is more crucial than ever. Whether you are looking to measure website traffic, optimize marketing campaigns, or gain insights into customer behavior, <b>Skyhit Media Digital Marketing Agency</b> is here to provide you with expert <b>Analytics & Reporting Agency</b> services. We help businesses unlock the full potential of their data to make informed decisions, improve performance, and drive growth.<br></br>", "As a leading <b>Analytics & Reporting Agency</b>, Skyhit Media specializes in delivering tailored solutions to meet your unique needs. We offer a range of services, from <b>Website Analytics</b> and <b>SEO Performance Reporting</b> to <b>PPC Campaign Analytics</b> and <b>E-Commerce Analytics</b>. Whether you're a small business or a large corporation, our team works closely with you to understand your objectives and create customized strategies that align with your goals."]

        },
        {
          headings: ["Why Choose Skyhit Media as Your Analytics & Reporting Agency?", ""],
          texts: ["At Skyhit Media, we believe in the power of data to drive business success. As a <b>top data analytics company</b>, we use advanced tools and strategies to help businesses gain valuable insights into their operations. Our team is made up of skilled professionals who are dedicated to providing accurate, real-time data that empowers you to make better decisions. As a <b>business analytics company</b>, we are committed to ensuring that you not only understand your data but also act on it to achieve measurable results. <br></br>", "Our expert team understands the complexities of data analysis and reporting, and we are committed to delivering clear, actionable insights that you can rely on. Whether you are looking to track marketing campaign success or optimize website performance, we provide <b>custom reporting solutions</b> that are easy to understand and help you reach your business goals."],
        },
        {
          headings: ["Our Analytics & Reporting Services", ""],
          list: ["<b>Website Analytics: </b> Understanding how visitors interact with your website is crucial for success. Our <b>Website Analytics</b> service provides you with detailed insights into user behavior, site traffic, and conversion patterns. We help you identify trends, troubleshoot issues, and find ways to improve user experience and site performance. <br></br>", "<b>Campaign Performance Analysis: </b> Tracking the success of your marketing campaigns is essential for understanding return on investment (ROI). Our <b>Campaign Performance Analysis</b> provides you with comprehensive insights into the effectiveness of your campaigns, helping you optimize strategies for maximum impact. <br></br>", "<b>Conversion Rate Optimization (CRO): </b> Maximizing conversions is a key focus for any business. Through <b>Conversion Rate Optimization (CRO) </b>, we analyze your website’s design, content, and functionality to identify areas for improvement. Our goal is to enhance your conversion rates and help you turn more visitors into customers. <br></br>", "<b>SEO Performance Reporting: </b> As an experienced <b>digital analytics agency</b>, we provide in-depth <b>SEO Performance Reporting</b> to help you track your website’s ranking, organic traffic, and keyword performance. Our data-driven insights help you refine your SEO strategy to achieve higher visibility and drive more qualified leads. <br></br>", "<b>PPC Campaign Analytics: </b> Pay-per-click (PPC) advertising is a powerful way to attract customers, but it’s essential to monitor and adjust campaigns regularly. Our <b>PPC Campaign Analytics</b> service helps you evaluate the performance of your PPC ads, track costs, and improve your ad strategies for better results. <br></br>", "<b>Social Media Insights</b> Social media is a key platform for engaging with your audience, but how do you know if your efforts are paying off? With our <b>Social Media Insights</b> service, we track engagement metrics, analyze audience behavior, and help you optimize your social media marketing strategy. <br></br>", "<b>Email Marketing Metrics: </b> Email marketing remains one of the most effective marketing tools. Our <b>Email Marketing Metrics</b> service allows you to measure open rates, click-through rates, and other key performance indicators (KPIs) to understand how well your campaigns are performing and where improvements can be made. <br></br>", "<b>E-Commerce Analytics: </b> For e-commerce businesses, understanding customer behavior is critical to success. Our <b>E-Commerce Analytics</b> service provides detailed insights into sales trends, customer interactions, product performance, and more. We help you optimize your online store to increase sales and improve customer satisfaction. <br></br>", "<b>Audience Segmentation: </b>Understanding your audience is key to effective marketing. Our <b>Audience Segmentation</b> service helps you categorize your customers based on behavior, demographics, and preferences. By segmenting your audience, we help you create more targeted and personalized marketing strategies. <br></br>", "<b>Competitor Analysis: </b> Keeping an eye on your competitors is crucial for staying ahead in the market. Our <b>Competitor Analysis</b> service provides insights into what your competitors are doing right (or wrong) and helps you identify opportunities for growth and differentiation. <br></br>", "<b>Real-Time Reporting: </b> In today’s fast-paced business environment, timely data is essential. Our <b>Real-Time Reporting</b> service ensures that you always have up-to-date insights into your <a href='https://en.wikipedia.org/wiki/Business_performance_management' target=_'blanket'><b>business performance,</b></a> enabling you to make decisions quickly and effectively. <br></br>", "<b>Custom Reporting Dashboards: </b> Our <b>Custom Reporting Dashboards</b> allow you to access all your key metrics in one place. Tailored to your business needs, our dashboards provide a clear overview of your performance and allow you to easily track and compare data across various channels."]
        },
        {
          headings: ["Why Analytics & Reporting Matters for Your Business", ""],
          texts: ["Data-driven decision-making is at the heart of every successful business strategy. As a <b>marketing analytics agency</b>, we help you make sense of the overwhelming amount of data generated by your business, so you can focus on what matters most: growth. <br></br>", "By working with <b>Skyhit Media</b>, an experienced <b>analytics agency</b>, you gain access to powerful insights that can help you make smarter decisions, improve ROI, and achieve your business objectives. We pride ourselves on being one of the <b>best analytics agencies</b> in the industry, offering <b>advanced data analytics</b> and comprehensive reporting to help you stay ahead of the competition. <br></br>", "Whether you’re looking to improve your website’s performance, optimize your marketing campaigns, or better understand your audience, <a href='/' ><b>Skyhit Media</b></a> has the expertise and tools to help you succeed."]
        },
        {
          headings: ["Get Started with Skyhit Media – Your Trusted Analytics & Reporting Agency", ""],
          texts: ["If you are looking for a trusted <b>Analytics & Reporting Agency</b>, <b>Skyhit Media Digital Marketing Agency</b> is here to assist. With our range of <b>Custom Reporting Solutions</b> and <b>advanced data analytics</b>, we can help you transform your business through data-driven insights. Contact us today to learn more about our <b>marketing agency</b> services and how we can help you optimize your performance for success."],
        },
        {
          headings: ["Services We Offer", ""],
          list: ["<a href='/best-digital-marketing-agency' ><b>Best Digital Marketing Agency</b></a>", "<a href='/website-design-and-development-services' ><b>Website Design & Development Services</b></a>", "<a href='/Performance-marketing-agency' ><b>Performance Marketing Agency</b></a>", "<a href='/search-engine-optimization-agency' ><b>Search Engine Optimization Agency</b></a>", "<a href='/social-media-marketing-agency' ><b>Social Media Marketing Agency</b></a>", "<a href='/pay-per-click-advertising-agency' ><b>Pay Per Click Advertising Agency</b></a>", "<a href='/branding-and-graphic-design-agency' ><b>Branding and Graphic Design Agency</b></a>", "<a href='/influencer-marketing-agency' ><b>Influencer Marketing Agency</b></a>", "<a href='/whatsapp-marketing-agency' ><b>WhatsApp Marketing Agency</b></a>", "<a href='/online-reputation-management-agency' ><b>Online Reputation Management Agency</b></a>", "<a href='/cyber-security-services' ><b>Cyber Security Services</b></a>"],
        },
      ],
    },
  },

];

export const metadata: Metadata = {title: "#1 Analytics & Reporting Agency For Your Business - SKYHIT MEDIA",
  description:
    "Analytics & Reporting Agency, Skyhit Media, provides data-driven insights, performance tracking, and custom reporting solutions to help grow your business.",
  keywords: ["Digital Marketing", "SEO", "PPC", "Web Design", "Skyhit Media", "Hyderabad"],
  openGraph: {
    title: "#1 Analytics & Reporting Agency For Your Business - SKYHIT MEDIA",
    description: "Analytics & Reporting Agency, Skyhit Media, provides data-driven insights, performance tracking, and custom reporting solutions to help grow your business.",
    url: "https://skyhitmedia.com/analytics-and-reporting-agency",
    images: ["/images/og-image-padded.png"],
  },
  alternates: { canonical: "https://skyhitmedia.com/analytics-and-reporting-agency" },
};

export default function AnalyticsPage() {
  return (
    <>
      <ServiceHeroPreload deskImg="/images/analytics-hero-section-skyhitmedia.webp" mobImg="/images/analytics-hero-section-skyhitmedia-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="Data-Driven Analytics & Reporting Agency"
          description1="As a leading business analytics company, we specialize in providing advanced data analytics and custom reporting solutions. Our digital analytics agency leverages cutting-edge tools and insights to drive strategic decisions."
          description2="From marketing analytics to Google Analytics expertise, our analytics marketing agency delivers tailored solutions to optimize performance and maximize ROI. Trust our experienced analytics agency to unlock the power of your data and propel your business forward."
          imageUrl="/images/analytics-2ndsection-vector-skyhitmedia.png"
          altText="About Analytics & Reporting Service"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Comprehensive Analytics & Reporting Services"
          sectionDescription="Advanced Analytics Solutions for Business Growth and Digital Success"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best Analytics & Reporting Services"
          subTitle="Experts in Advanced Analytics and Custom Reporting Solutions"
          description1="Our Advanced Analytics Marketing Strategies"
          description2="As a top data analytics company, we leverage advanced data analytics and custom reporting solutions to drive business growth. Our marketing analytics agency combines digital analytics expertise with Google Analytics insights to craft tailored strategies. From optimizing campaigns to providing actionable insights, our analytics agency helps businesses enhance performance, boost ROI, and stay ahead of the competition."
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

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
  deskImgLink: "/images/1st-secing-bg-image-desktop-3.webp",
  mobImgLink: "/images/1st-secing-bg-image-desktop-3-mob.webp",
  title: "Best Digital Marketing Agency",
  subTitle:
    "Best Digital Marketing Agency at SKYHIT Media - Innovative Strategies to Drive Traffic, Boost Engagement & Maximize ROI for All Businesses",
};

const cardData = [
  {
    icon: "/images/social-media-icon.png",
    image: "/images/seo-skyhimedia.png",
    title: "Search Engine Optimization (SEO)",
    description:
      "Search Engine Optimization (SEO) is crucial for improving your website's visibility on search engines. By optimizing content, keywords, and site  ",
    link: "/search-engine-optimization-agency",
  },
  {
    icon: "/images/franchise-seo-icon.png",
    image: "/images/Franchise-SEO-skyhitmedia.webp",
    title: "Franchise SEO",
    description:
      "Franchise SEO focuses on optimizing multiple locations of a franchise for local search visibility. We ensure each franchisee ranks well in their ",
    link: "#",
  },
  {
    icon: "/images/local-seo-icon.png",
    image: "/images/local-seo-skyhitmedia.webp",
    title: "Local SEO",
    description:
      "Local SEO helps businesses appear in local search results, driving more customers from specific geographic areas. By optimizing Google My Business, ",
    link: "#",
  },
  {
    icon: "/images/technical-seo-icon.png",
    image: "/images/Technical-SEO-skyhitmedia.webp",
    title: "Technical SEO",
    description:
      "Technical SEO focuses on optimizing the backend of your website for better search engine crawling and indexing. We improve site speed, mobile responsiveness,",
    link: "#",
  },
  {
    icon: "/images/link-building-icon.png",
    image: "/images/link-building-skyhitmedia.webp",
    title: "Link Building",
    description:
      "Link building is a key SEO strategy that involves acquiring high-quality backlinks to boost your website's authority. We focus on gaining relevant, credible ",
    link: "#",
  },
  {
    icon: "/images/webdesign-development-icon.png",
    image: "/images/Web-Design-Development-skyhitmedia.webp",
    title: "Web Design & Development",
    description:
      "Our Web Design & Development services focus on creating user-friendly, responsive websites that engage visitors and drive conversions. We ensure your website ",
    link: "/website-design-and-development-services",
  },
  {
    icon: "/images/Web-Design-02.png",
    image: "/images/Custom-Web-Design-skyhitmedia.png",
    title: "Custom Website Design",
    description:
      "Custom website design creates unique, user-friendly websites tailored to your brand, enhancing online presence, functionality, and customer engagement.",
    link: "#",
  },
  {
    icon: "/images/Social-Media2.png",
    image: "/images/Social-Media-Marketing-skyhitmedia.webp",
    title: "Social Media Marketing",
    description:
      "Social media marketing builds brand awareness, engages audiences, drives traffic, and boosts conversions through targeted strategies on popular platforms.",
    link: "/social-media-marketing-agency",
  },
  {
    icon: "/images/ppc-icon.png",
    image: "/images/pay-pc-skyhitmedia.webp",
    title: "Pay Per Click (PPC) Management",
    description:
      "Drive instant results with strategic PPC management, increasing visibility, enhancing leads, and ensuring cost-effective ad performance for your business.",
    link: "/pay-per-click-advertising-agency",
  },
  {
    icon: "/images/edit-music2.png",
    image: "/images/eCommerce-Marketing-skyhimedia.webp",
    title: "eCommerce Marketing",
    description:
      "Boost sales and brand visibility with eCommerce marketing strategies, including SEO, PPC, email campaigns, and social media engagement.",
    link: "#",
  },
  {
    icon: "/images/content-writing-icon.png",
    image: "/images/Content-Writing-skyhitmedia.webp",
    title: "Content Writing",
    description:
      "Engage your audience with compelling content writing that drives traffic, builds trust, improves SEO, and strengthens your brand's message.",
    link: "#",
  },
  {
    icon: "/images/cro-icon.png",
    image: "/images/Conversion-Rate-Optimization-skyhitmedia.png",
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Improve user experience and maximize sales with Conversion Rate Optimization (CRO), utilizing data-driven strategies to boost website performance.",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Neha Verma",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote:
      "Skyhit Media transformed our online presence with expert SEO and social media marketing. Their strategies boosted our engagement and ROI significantly.",
  },
  {
    name: "Rahul Sharma",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote:
      "Highly professional team! They delivered on time and provided excellent digital marketing solutions. Our website traffic and leads have increased tremendously.",
  },
  {
    name: "Amit Rao",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote:
      "Great experience with Skyhit Media! Their web development team built a sleek, high-performing website that improved our online presence. Very satisfied!",
  },
];

const faqs = [
  {
    question: "Best Digital Marketing Agency: Leading Experts in Online Growth",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["In today’s digital world, businesses need a strong online presence to succeed. If you’re looking for the <b>best digital marketing agency</b> to help you grow, you’re in the right place! Our <b>best digital marketing agency</b> offers a variety of services that can transform your online presence, boost your visibility, and increase your sales.<br><br>Whether you’re just starting or looking to optimize your current digital marketing strategies, we are here to help. As the <b>best digital marketing agency</b>, we pride ourselves on being a one-stop solution for all your marketing needs."]

        },
        {
          headings: ["Best Digital Marketing Services for Your Business", ""],
          texts: ["What sets us apart as the <b>best digital marketing agency</b> is our comprehensive range of services. We specialize in a variety of areas that are essential to your business’s growth:<br></br>"],
          list: ["<b>Search Engine Optimization (SEO): </b> Our <b>best <a href='/search-engine-optimization'><b>search engine optimization</b></a> agency</b> will optimize your website to rank higher on search engines, bringing in organic traffic and helping your business get noticed by the right audience.<br></br>", "<b>Pay-Per-Click Advertising (PPC): </b> Our team uses targeted PPC strategies to drive qualified leads and ensure you get the best ROI on your digital ad spend.<br></br>", "<b>Social Media Marketing: </b> As a <b>top digital marketing agency</b>, we know how important social media is in building a brand. We manage your accounts across platforms, engage with your audience, and boost your visibility with creative campaigns.<br></br>", "<b>E-commerce Marketing: </b> If you run an online store, we are the <b>best ecommerce marketing agency</b> for you. From setting up and optimizing your e-commerce platform to driving traffic and increasing conversions, our strategies are tailored to meet your unique business needs."]
        },
        {
          headings: ["Local and Global Reach: The Best Digital Marketing Agency Near Me", ""],
          texts: ["When it comes to choosing the <b>best digital marketing agency near me</b>, you want a team that understands local trends, culture, and consumer behavior. At our <b>best digital marketing agency</b>, we focus on both local and global marketing strategies to help your business thrive in any market. Whether you need a <b>best digital marketing company near me</b> or a team that can help you expand globally, we offer solutions tailored to your needs.<br></br>", "Looking for <b>internet marketing service near me</b>? We are local experts who can help you get started on the right path. We understand how local businesses work and can create strategies that make a real difference in your community."],
        },
        {
          headings: ["Why We Are the Best Digital Marketing Agency", ""],
          texts: ["As the <b>best digital marketing agency</b>, we are proud of the results we achieve for our clients. We focus on driving real, measurable results and offer a range of services designed to increase traffic, improve conversions, and help your business stand out.<br></br>"],
          list: ["<b>Expertise: </b> Our team consists of experienced professionals who are specialists in various aspects of digital marketing. From <a href='https://en.wikipedia.org/wiki/Search_engine_optimization' target='_blank'><b>SEO</b></a> to social media and PPC, we have the expertise to deliver exceptional results.<br></br>", "<b>Customized Strategies: </b> We understand that every business is unique. As a <b>top digital marketing agency</b>, we create personalized strategies that align with your goals, target audience, and industry.<br></br>", "<b>Transparency: </b> We believe in keeping our clients in the loop. You’ll always know where your money is going and how your campaigns are performing.",]
        },
        {
          headings: ["The Best Digital Marketing Agency in the World", ""],
          texts: ["Looking for the <b>best digital marketing agency</b> in the world? While our services are tailored to meet the needs of local businesses, we also have the experience and expertise to help businesses succeed on a global scale. Our innovative digital marketing strategies are effective in any market, making us the <b>best digital marketing company in the world</b> for businesses seeking international success.", "With a strong focus on results and a customer-centric approach, our <b>best digital marketing agency</b> delivers campaigns that help you stand out in a competitive market. We take pride in being one of the <b>top digital advertising agencies</b>, ensuring your business gets the best exposure and traffic possible"],
        },
        {
          headings: ["Why Choose Us as Your Digital Marketing Partner?", ""],
          texts: ["The key to success in today’s digital age is partnering with a <b>best marketing agency near me</b> that can help you navigate the complexities of the online world. Whether you're looking for a <b>best digital marketing agency near me</b> or an experienced team to take your brand to new heights globally, we offer the perfect blend of local knowledge and international expertise.", "We take a hands-on approach to each project, working closely with our clients to ensure their objectives are met. From improving your website’s SEO to managing your paid ad campaigns, we’ve got all aspects of digital marketing covered."],
        },
        {
          headings: ["Ready to Take Your Business to the Next Level?", ""],
          texts: ["Choosing the <b>best digital marketing agency</b> is the first step toward achieving your online marketing goals. Whether you're in need of <b>best digital marketing services</b> or want to work with the <b>best digital marketing company near me</b>, our team is ready to help.", "Get in touch with the <b>best digital marketing agency</b> today and let's discuss how we can help your business grow. We’ll work with you to develop a strategy that drives results, improves your digital footprint, and helps you reach your target audience."],
        },
        {
          headings: ["Services We Offer", ""],
          list: ["<a href='/website-design-and-development-services' ><b>Website Design & Development Services</b></a>", "<a href='/Performance-marketing-agency' ><b>Performance Marketing Agency</b></a>", "<a href='/search-engine-optimization-agency' ><b>Search Engine Optimization Agency</b></a>", "<a href='/social-media-marketing-agency' ><b>Social Media Marketing Agency</b></a>", "<a href='/pay-per-click-advertising-agency' ><b>Pay Per Click Advertising Agency</b></a>", "<a href='/branding-and-graphic-design-agency' ><b>Branding and Graphic Design Agency</b></a>", "<a href='/influencer-marketing-agency' ><b>Influencer Marketing Agency</b></a>", "<a href='/analytics-and-reporting-agency' ><b>Analytics and Reporting Agency</b></a>", "<a href='/whatsapp-marketing-agency' ><b>WhatsApp Marketing Agency</b></a>", "<a href='/online-reputation-management-agency' ><b>Online Reputation Management Agency</b></a>", "<a href='/cyber-security-services' ><b>Cyber Security Services</b></a>"],
        },
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
  deskImgLink: "/images/1st-secing-bg-image-desktop-3.webp",
  mobImgLink: "/images/1st-secing-bg-image-desktop-3-mob.webp",
  title: "Best Digital Marketing Agency",
  subTitle:
    "Best Digital Marketing Agency at SKYHIT Media - Innovative Strategies to Drive Traffic, Boost Engagement & Maximize ROI for All Businesses",
};

const cardData = [
  {
    icon: "/images/social-media-icon.png",
    image: "/images/seo-skyhimedia.png",
    title: "Search Engine Optimization (SEO)",
    description:
      "Search Engine Optimization (SEO) is crucial for improving your website's visibility on search engines. By optimizing content, keywords, and site  ",
    link: "/search-engine-optimization-agency",
  },
  {
    icon: "/images/franchise-seo-icon.png",
    image: "/images/Franchise-SEO-skyhitmedia.webp",
    title: "Franchise SEO",
    description:
      "Franchise SEO focuses on optimizing multiple locations of a franchise for local search visibility. We ensure each franchisee ranks well in their ",
    link: "#",
  },
  {
    icon: "/images/local-seo-icon.png",
    image: "/images/local-seo-skyhitmedia.webp",
    title: "Local SEO",
    description:
      "Local SEO helps businesses appear in local search results, driving more customers from specific geographic areas. By optimizing Google My Business, ",
    link: "#",
  },
  {
    icon: "/images/technical-seo-icon.png",
    image: "/images/Technical-SEO-skyhitmedia.webp",
    title: "Technical SEO",
    description:
      "Technical SEO focuses on optimizing the backend of your website for better search engine crawling and indexing. We improve site speed, mobile responsiveness,",
    link: "#",
  },
  {
    icon: "/images/link-building-icon.png",
    image: "/images/link-building-skyhitmedia.webp",
    title: "Link Building",
    description:
      "Link building is a key SEO strategy that involves acquiring high-quality backlinks to boost your website's authority. We focus on gaining relevant, credible ",
    link: "#",
  },
  {
    icon: "/images/webdesign-development-icon.png",
    image: "/images/Web-Design-Development-skyhitmedia.webp",
    title: "Web Design & Development",
    description:
      "Our Web Design & Development services focus on creating user-friendly, responsive websites that engage visitors and drive conversions. We ensure your website ",
    link: "/website-design-and-development-services",
  },
  {
    icon: "/images/Web-Design-02.png",
    image: "/images/Custom-Web-Design-skyhitmedia.png",
    title: "Custom Website Design",
    description:
      "Custom website design creates unique, user-friendly websites tailored to your brand, enhancing online presence, functionality, and customer engagement.",
    link: "#",
  },
  {
    icon: "/images/Social-Media2.png",
    image: "/images/Social-Media-Marketing-skyhitmedia.webp",
    title: "Social Media Marketing",
    description:
      "Social media marketing builds brand awareness, engages audiences, drives traffic, and boosts conversions through targeted strategies on popular platforms.",
    link: "/social-media-marketing-agency",
  },
  {
    icon: "/images/ppc-icon.png",
    image: "/images/pay-pc-skyhitmedia.webp",
    title: "Pay Per Click (PPC) Management",
    description:
      "Drive instant results with strategic PPC management, increasing visibility, enhancing leads, and ensuring cost-effective ad performance for your business.",
    link: "/pay-per-click-advertising-agency",
  },
  {
    icon: "/images/edit-music2.png",
    image: "/images/eCommerce-Marketing-skyhimedia.webp",
    title: "eCommerce Marketing",
    description:
      "Boost sales and brand visibility with eCommerce marketing strategies, including SEO, PPC, email campaigns, and social media engagement.",
    link: "#",
  },
  {
    icon: "/images/content-writing-icon.png",
    image: "/images/Content-Writing-skyhitmedia.webp",
    title: "Content Writing",
    description:
      "Engage your audience with compelling content writing that drives traffic, builds trust, improves SEO, and strengthens your brand's message.",
    link: "#",
  },
  {
    icon: "/images/cro-icon.png",
    image: "/images/Conversion-Rate-Optimization-skyhitmedia.png",
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Improve user experience and maximize sales with Conversion Rate Optimization (CRO), utilizing data-driven strategies to boost website performance.",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Neha Verma",
    position: "",
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote:
      "Skyhit Media transformed our online presence with expert SEO and social media marketing. Their strategies boosted our engagement and ROI significantly.",
  },
  {
    name: "Rahul Sharma",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote:
      "Highly professional team! They delivered on time and provided excellent digital marketing solutions. Our website traffic and leads have increased tremendously.",
  },
  {
    name: "Amit Rao",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote:
      "Great experience with Skyhit Media! Their web development team built a sleek, high-performing website that improved our online presence. Very satisfied!",
  },
];

const faqs = [
  {
    question: "Best Digital Marketing Agency: Leading Experts in Online Growth",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["In today’s digital world, businesses need a strong online presence to succeed. If you’re looking for the <b>best digital marketing agency</b> to help you grow, you’re in the right place! Our <b>best digital marketing agency</b> offers a variety of services that can transform your online presence, boost your visibility, and increase your sales.<br><br>Whether you’re just starting or looking to optimize your current digital marketing strategies, we are here to help. As the <b>best digital marketing agency</b>, we pride ourselves on being a one-stop solution for all your marketing needs."]

        },
        {
          headings: ["Best Digital Marketing Services for Your Business", ""],
          texts: ["What sets us apart as the <b>best digital marketing agency</b> is our comprehensive range of services. We specialize in a variety of areas that are essential to your business’s growth:<br></br>"],
          list: ["<b>Search Engine Optimization (SEO): </b> Our <b>best <a href='/search-engine-optimization'><b>search engine optimization</b></a> agency</b> will optimize your website to rank higher on search engines, bringing in organic traffic and helping your business get noticed by the right audience.<br></br>", "<b>Pay-Per-Click Advertising (PPC): </b> Our team uses targeted PPC strategies to drive qualified leads and ensure you get the best ROI on your digital ad spend.<br></br>", "<b>Social Media Marketing: </b> As a <b>top digital marketing agency</b>, we know how important social media is in building a brand. We manage your accounts across platforms, engage with your audience, and boost your visibility with creative campaigns.<br></br>", "<b>E-commerce Marketing: </b> If you run an online store, we are the <b>best ecommerce marketing agency</b> for you. From setting up and optimizing your e-commerce platform to driving traffic and increasing conversions, our strategies are tailored to meet your unique business needs."]
        },
        {
          headings: ["Local and Global Reach: The Best Digital Marketing Agency Near Me", ""],
          texts: ["When it comes to choosing the <b>best digital marketing agency near me</b>, you want a team that understands local trends, culture, and consumer behavior. At our <b>best digital marketing agency</b>, we focus on both local and global marketing strategies to help your business thrive in any market. Whether you need a <b>best digital marketing company near me</b> or a team that can help you expand globally, we offer solutions tailored to your needs.<br></br>", "Looking for <b>internet marketing service near me</b>? We are local experts who can help you get started on the right path. We understand how local businesses work and can create strategies that make a real difference in your community."],
        },
        {
          headings: ["Why We Are the Best Digital Marketing Agency", ""],
          texts: ["As the <b>best digital marketing agency</b>, we are proud of the results we achieve for our clients. We focus on driving real, measurable results and offer a range of services designed to increase traffic, improve conversions, and help your business stand out.<br></br>"],
          list: ["<b>Expertise: </b> Our team consists of experienced professionals who are specialists in various aspects of digital marketing. From <a href='https://en.wikipedia.org/wiki/Search_engine_optimization' target='_blank'><b>SEO</b></a> to social media and PPC, we have the expertise to deliver exceptional results.<br></br>", "<b>Customized Strategies: </b> We understand that every business is unique. As a <b>top digital marketing agency</b>, we create personalized strategies that align with your goals, target audience, and industry.<br></br>", "<b>Transparency: </b> We believe in keeping our clients in the loop. You’ll always know where your money is going and how your campaigns are performing.",]
        },
        {
          headings: ["The Best Digital Marketing Agency in the World", ""],
          texts: ["Looking for the <b>best digital marketing agency</b> in the world? While our services are tailored to meet the needs of local businesses, we also have the experience and expertise to help businesses succeed on a global scale. Our innovative digital marketing strategies are effective in any market, making us the <b>best digital marketing company in the world</b> for businesses seeking international success.", "With a strong focus on results and a customer-centric approach, our <b>best digital marketing agency</b> delivers campaigns that help you stand out in a competitive market. We take pride in being one of the <b>top digital advertising agencies</b>, ensuring your business gets the best exposure and traffic possible"],
        },
        {
          headings: ["Why Choose Us as Your Digital Marketing Partner?", ""],
          texts: ["The key to success in today’s digital age is partnering with a <b>best marketing agency near me</b> that can help you navigate the complexities of the online world. Whether you're looking for a <b>best digital marketing agency near me</b> or an experienced team to take your brand to new heights globally, we offer the perfect blend of local knowledge and international expertise.", "We take a hands-on approach to each project, working closely with our clients to ensure their objectives are met. From improving your website’s SEO to managing your paid ad campaigns, we’ve got all aspects of digital marketing covered."],
        },
        {
          headings: ["Ready to Take Your Business to the Next Level?", ""],
          texts: ["Choosing the <b>best digital marketing agency</b> is the first step toward achieving your online marketing goals. Whether you're in need of <b>best digital marketing services</b> or want to work with the <b>best digital marketing company near me</b>, our team is ready to help.", "Get in touch with the <b>best digital marketing agency</b> today and let's discuss how we can help your business grow. We’ll work with you to develop a strategy that drives results, improves your digital footprint, and helps you reach your target audience."],
        },
        {
          headings: ["Services We Offer", ""],
          list: ["<a href='/website-design-and-development-services' ><b>Website Design & Development Services</b></a>", "<a href='/Performance-marketing-agency' ><b>Performance Marketing Agency</b></a>", "<a href='/search-engine-optimization-agency' ><b>Search Engine Optimization Agency</b></a>", "<a href='/social-media-marketing-agency' ><b>Social Media Marketing Agency</b></a>", "<a href='/pay-per-click-advertising-agency' ><b>Pay Per Click Advertising Agency</b></a>", "<a href='/branding-and-graphic-design-agency' ><b>Branding and Graphic Design Agency</b></a>", "<a href='/influencer-marketing-agency' ><b>Influencer Marketing Agency</b></a>", "<a href='/analytics-and-reporting-agency' ><b>Analytics and Reporting Agency</b></a>", "<a href='/whatsapp-marketing-agency' ><b>WhatsApp Marketing Agency</b></a>", "<a href='/online-reputation-management-agency' ><b>Online Reputation Management Agency</b></a>", "<a href='/cyber-security-services' ><b>Cyber Security Services</b></a>"],
        },
      ],
    },
  },

];

export const metadata: Metadata = {title: "#1 Best Digital Marketing Agency for Business – SKYHIT MEDIA",
  description:
    "Discover the best digital marketing agency to boost your online presence. Get expert SEO, PPC, and social media strategies for guaranteed growth and success.",
  keywords: ["Digital Marketing", "SEO", "PPC", "Web Design", "Skyhit Media", "Hyderabad"],
  openGraph: {
    title: "#1 Best Digital Marketing Agency for Business – SKYHIT MEDIA",
    description: "Discover the best digital marketing agency to boost your online presence. Get expert SEO, PPC, and social media strategies for guaranteed growth and success.",
    url: "https://skyhitmedia.com/best-digital-marketing-agency",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-best-digital-marketing-skyhitmedia.png",
        width: 630,
        height: 630,
        alt: "Best Digital Marketing Agency - Skyhit Media",
      },
    ],
  },
  alternates: { canonical: "https://skyhitmedia.com/best-digital-marketing-agency" },
    <>
      <ServiceHeroPreload deskImg="/images/1st-secing-bg-image-desktop-3.webp" mobImg="/images/1st-secing-bg-image-desktop-3-mob.webp" />
      <HeroSection serviceData={serviceData} />
      <LazySection>
        <ReviewSection />
        <AboutSection
          title="About Our"
          subtitle="The Best Digital Marketing Agency for Business Growth"
          description1="As the best digital marketing agency, we help businesses reach their full potential online. Our expert team specializes in SEO, social media marketing, paid ads, and content strategy to drive traffic, increase conversions, and boost brand visibility."
          description2="With tailored solutions and data-driven strategies, we focus on achieving measurable results that align with your goals. Partner with us to take your digital presence to the next level and ensure long-term success in the competitive online landscape."
          imageUrl="/images/image_desktop_v.png"
          altText="About Digital Marketing Service Skyhit Media"
        />
        <ServiceCardList
          services={cardData}
          sectionTitle="Best Digital Marketing Agency Services We Offer"
          sectionDescription="Transform Your Business with Expert Digital Marketing Services"
        />
        <WhyChooseUsSection
          title="Why Skyhit Media is the Best Digital Marketing Agency"
          subTitle="Drive Growth and Success with Expert Marketing Strategies"
          description1="Unlock Your Business Potential with Digital Marketing"
          description2="As the best digital marketing agency, Skyhit Media offers a comprehensive range of services designed to elevate your brand. Our expert team specializes in SEO, social media marketing, PPC campaigns, and more, ensuring your business gains visibility and drives conversions. With data-driven strategies and a focus on measurable results, we tailor our approach to fit your unique goals."
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

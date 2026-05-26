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
          texts: ["In today’s , having an online presence is essential for any business to thrive. A professional and well-designed website is often the first impression customers will have of your brand. If you want to stand out from the competition and offer a seamless online experience to your visitors, you need top-quality <b>Website Design and Development Services.</b> That’s where SKYHIT Media comes in."]

        },
        {
          headings: ["Why Choose SKYHIT Media for Your Website Design and Development Services?"],
          texts: ["At <a href='/'><b>SKYHIT Media</b></a>, we understand that each business is unique, and your website should reflect that. Our team of expert designers and developers work closely with you to create a website that meets your needs and exceeds your expectations. Whether you need a simple website, an e-commerce platform, or a fully customized solution, we are the <b>website design and development agency </b>you can trust."],
        },
        {
          headings: ["Our Website Design and Development Services"],
          texts: ["We offer a wide range of services to ensure your website is not only visually appealing but also functional, user-friendly, and optimized for success.", "<br>"],
          list: ["<b>Custom Website Design and Development:</b> We specialize in <b>custom website design and development</b> to ensure that your website stands out. Our approach involves understanding your business, your goals, and your audience, so we can create a website tailored to your specific needs. From layout and design to functionality and content, every detail is customized to match your brand identity.<br></br>", "<b>WordPress Web Design Agency: </b>As a leading <b>WordPress web design agency, </b>SKYHIT Media has extensive experience in creating high-performance WordPress websites. Whether you need a simple blog, a portfolio site, or a large-scale business website, our team will design and develop a WordPress website that meets your requirements. WordPress is flexible, easy to manage, and offers a wide range of plugins and themes, making it an excellent choice for businesses of all sizes.<br></br>", "<b>Ecommerce Website Design and Development</b>If you are looking to sell products online, our <b>ecommerce website design and development </b>services are perfect for you. SKYHIT Media can create a fully functional, secure, and user-friendly e-commerce platform that helps you generate sales. From product pages to shopping carts and payment gateways, we ensure your online store is optimized for an excellent user experience and business growth.<br></br>", "<b>Responsive Web Design</b>With more people using smartphones and tablets to browse the web, having a <a href='https://en.wikipedia.org/wiki/Responsive_web_design'  target='_blank'><b>responsive website</b></a> is crucial. Our <b>Website Design and Development Services </b>focus on creating responsive websites that adapt to different screen sizes and devices. This ensures that your website looks great and functions properly on desktops, laptops, tablets, and mobile devices.<br></br>", "<b>Search Engine Optimization (SEO) </b>A beautiful website is only useful if people can find it. Our <b>Website Design and Development Services</b> include SEO best practices to ensure your site ranks well in search engines like Google. From optimizing your content to improving page load speed, we help you improve your website’s visibility and attract more organic traffic.<br></br>", "<b>Ongoing Support and Maintenance</b>At SKYHIT Media, we don’t just build your website and walk away. We offer ongoing support and maintenance services to ensure your website remains up to date, secure, and performing optimally. Whether you need regular updates, bug fixes, or new features added, our team is always here to help."]
        },
        {
          headings: ["Benefits of Our Website Design and Development Services", ""],
          list: ["<b>User-Friendly Experience: </b>We design websites that are easy to navigate, ensuring that your visitors can find what they’re looking for quickly and efficiently.<br></br>", "<b>Mobile-Friendly Design: </b>With the rise of mobile browsing, our websites are fully responsive, providing a seamless experience across all devices.<br></br>", "<b>Custom Solutions: </b>Whether it’s a simple website or a complex e-commerce platform, we provide custom solutions that are tailored to your business needs.<br></br>", "<b>SEO Optimization: </b> Our websites are designed with SEO in mind, helping you achieve better rankings on search engines and attract more visitors.<br></br>", "<b>Brand Consistency: </b>We ensure that your website reflects your brand’s values and identity, creating a cohesive experience for your customers."]
        },
        {
          headings: ["SKYHIT Media: Your Trusted Website Design and Development Agency", ""],
          texts: ["At SKYHIT Media, we pride ourselves on providing top-notch <b>website design and development services </b>that help businesses succeed online. Our team of experienced professionals is dedicated to delivering high-quality websites that are visually stunning, user-friendly, and highly functional. We work with businesses of all sizes, from startups to large corporations, and our goal is always to help you achieve your business objectives.If you are ready to take your business online or revamp your existing website, SKYHIT Media is the <b>website design and development agency</b> you can trust. We have the skills, expertise, and passion to bring your vision to life."],
        },
        {
          headings: ["Contact Us Today", ""],
          texts: ["Don’t let your website be an afterthought. Get in touch with SKYHIT Media today and take advantage of our expert <b>Website Design and Development Services. </b> Let us help you create a website that not only looks great but also drives success for your business. Whether you need <b>custom website design and development, </b> an <b>ecommerce website design, </b> or any other solution, we are here to help. Contact us now and start your journey towards a successful online presence."],
        },
        {
          headings: ["Services We Offer", ""],
          list: ["<a href='/best-digital-marketing-agency' ><b>Best Digital Marketing Agency</b></a>", "<a href='/Performance-marketing-agency' ><b>Performance Marketing Agency</b></a>", "<a href='/search-engine-optimization-agency' ><b>Search Engine Optimization Agency</b></a>", "<a href='/social-media-marketing-agency' ><b>Social Media Marketing Agency</b></a>", "<a href='/pay-per-click-advertising-agency' ><b>Pay Per Click Advertising Agency</b></a>", "<a href='/branding-and-graphic-design-agency' ><b>Branding and Graphic Design Agency</b></a>", "<a href='/influencer-marketing-agency' ><b>Influencer Marketing Agency</b></a>", "<a href='/analytics-and-reporting-agency' ><b>Analytics and Reporting Agency</b></a>", "<a href='/whatsapp-marketing-agency' ><b>WhatsApp Marketing Agency</b></a>", "<a href='/online-reputation-management-agency' ><b>Online Reputation Management Agency</b></a>", "<a href='/cyber-security-services' ><b>Cyber Security Services</b></a>"],
        },
      ],
    },
  },

];

export const metadata: Metadata = {title: "#1 Website Design and Development Services | Skyhit Media",
  description:
    "Website Design and Development Services by Skyhit Media offer custom, responsive & user-friendly websites that enhance your online presence and drive success.",
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
    title: "#1 Website Design and Development Services | Skyhit Media",
    description: "Website Design and Development Services by Skyhit Media offer custom, responsive & user-friendly websites that enhance your online presence and drive success.",
    url: "https://skyhitmedia.com/website-design-and-development-services",
  },
  alternates: { canonical: "https://skyhitmedia.com/website-design-and-development-services" },
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

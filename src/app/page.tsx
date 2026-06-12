import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import TrustedSection from "@/components/TrustedSection";
import HeroPreload from "@/components/HeroPreload";

const AgencySection = dynamic(() => import("@/components/AgencySection"));
const ServiceSection = dynamic(() => import("@/components/ServiceSection"));
const ClientSection = dynamic(() => import("@/components/ClientSection"));
const WhyChooseSection = dynamic(() => import("@/components/WhyChooseSection"));
const RecentWorksSection = dynamic(() => import("@/components/RecentWorksSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const FAQ = dynamic(() => import("@/components/FAQ"));

const testimonials = [
  {
    name: "Shreya",
    position: "",
    image: "/images/review-image-services-1.webp",
    stars: 5,
    quote: "Skyhit Media is the best Digital Marketing Agency! Their strategies improved our online presence, boosted traffic, and increased sales. Highly professional and results-driven team!",
  },
  {
    name: "Satish Varma",
    position: "",
    image: "/images/review-image-services-2.webp",
    stars: 5,
    quote: "Skyhit Media transformed our business with their expert digital marketing services. More leads, better engagement, and increased revenue. Highly recommend this agency!",
  },
  {
    name: "Rohan",
    position: "",
    image: "/images/review-image-services-3.webp",
    stars: 5,
    quote: "Professional and innovative Digital Marketing Agency! Skyhit Media's data-driven strategies helped us rank higher on Google and attract more customers. Truly impressive!",
  },
];

const practicalFaqs = [
  {
    question: "How much do digital marketing services cost in Hyderabad?",
    answer:
      "Pricing depends on the channels, campaign goals, ad spend, and reporting depth. Skyhit Media shares a custom proposal after reviewing your current website, target audience, and growth goals.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Paid campaigns can start generating enquiries after launch, while SEO and organic growth usually need consistent optimization over several months. Every plan includes tracking, reporting, and regular improvements.",
  },
  {
    question: "What results can Skyhit Media help a business improve?",
    answer:
      "Skyhit Media focuses on measurable growth signals such as qualified leads, search visibility, website engagement, conversion rate, brand reach, and campaign return on investment.",
  },
];

const faqs = [
  ...practicalFaqs,
  {
    question: "Welcome to Skyhit Media – Your Trusted Digital Marketing Agency in Hyderabad",
    answer: {
      sections: [
        {
          texts: ["At <b>Skyhit Media</b>, we specialize in providing comprehensive digital marketing solutions to businesses in Hyderabad. As a leading digital marketing agency in Hyderabad</b>, we offer customized strategies designed to drive growth and help you achieve your business objectives. Whether you’re a startup, an established business, or a large corporation, we have the expertise to elevate your brand and increase your online visibility."]

        },
        {
          headings: ["Why Choose Skyhit Media – The Best Digital Marketing Agency in Hyderabad? ", ""],
          texts: ["With 10+ years of experience and a team of skilled professionals, we’ve earned a reputation as the <b>best digital marketing agency in Hyderabad</b>. Our services span across all areas of digital marketing, including <b>social media marketing, Google Ads, and performance marketing</b>, making us the go-to <b>digital marketing company in Hyderabad</b> for businesses looking to expand their reach.<br></br>", "We understand that each business is unique, which is why we tailor our services to your specific industry. As a <b>real estate digital marketing agency in Hyderabad</b>, we create targeted strategies for real estate businesses looking to generate leads and increase conversions. From property listings to branding, we handle it all."],
        },
        {
          headings: ["Comprehensive Services Offered by Skyhit Media – The Top Digital Marketing Agency in Hyderabad", ""],
          list: ["<b>Social Media Marketing Agency in Hyderabad: </b> We craft effective social media strategies that connect your brand with your audience on platforms like Facebook, Instagram, LinkedIn, and more. <br></br>", "<b>Google Ads Agency in Hyderabad: </b> With our expertise in Google Ads and Youtube video ads we help your business get noticed at the right time and in front of the right people, increasing traffic and conversions. <br></br>", "<b>Web Design Company in Hyderabad: </b> As a leading <a href='/website-design-and-development-services' ><b>web design and development company in Hyderabad</b></a>, we create visually appealing, responsive, and user-friendly websites that help your business stand out. <br></br>", "<b>Branding Agency in Hyderabad: </b> We are more than just a <a href='/best-digital-marketing-agency' ><b>digital marketing agency in Hyderabad</b></a>; we are also a top <a href='/branding-and-graphic-design-agency' ><b>branding agency in Hyderabad </b></a>  that helps businesses establish a unique identity and presence in the market. <br></br>", "<b>Performance Marketing Agency in Hyderabad: </b> Skyhit Media excels in performance-driven marketing, ensuring every dollar spent on advertising contributes directly to your <a href='https://en.wikipedia.org/wiki/Growth_planning' target=_'blanket'><b>business growth,</b></a><br></br>", "<b>WhatsApp Marketing Agency in Hyderabad: </b> With our <a href='/whatsapp-marketing-agency' ><b>WhatsApp marketing services</b></a>, we help businesses leverage the power of personalized messaging to engage customers and boost conversions. <br></br>", "<b>Ecommerce Design Agency in Hyderabad: </b> As an <b>ecommerce design agency in Hyderabad</b>, we specialize in creating online stores that are easy to navigate, visually appealing, and optimized for conversions."]
        },
        {
          headings: ["Partner with the Best Digital Marketing Agency in Hyderabad", ""],
          texts: ["At Skyhit Media, we’re passionate about driving results and helping your business grow. Whether you need a <a href='/social-media-marketing-agency' ><b>social media marketing agency in Hyderabad</b></a> or a <b>Google Ads agency in Hyderabad</b>, our team is equipped to deliver measurable success. As a <b>top digital marketing agency in Hyderabad</b>, we focus on providing data-driven strategies that maximize ROI and bring long-term value to your business. <br></br>", "We believe in transparency and communication throughout our partnership. From strategy development to execution and tracking, we ensure you’re always in the loop. With our proven track record and dedication to success, Skyhit Media is the <b>digital marketing agency in Hyderabad</b> you can trust to take your business to the next level."]
        },
        {
          headings: ["Let’s Get Started Today", ""],
          texts: ["Reach out to <b>Skyhit Media</b>, the <b>best digital marketing agency in Hyderabad</b>, and discover how we can help your business succeed online. Whether you're interested in <b>Google Ads</b>, <b>ecommerce design</b>, or <a href='/Performance-marketing-agency' ><b>performance marketing</b></a>, we offer the full range of digital marketing services to meet your needs. <br></br>", "Contact us today to start your journey with the <b>best digital marketing company in Hyderabad! </b>"],
        },
        {
          headings: ["Services We Offer", ""],
          list: ["<a href='/best-digital-marketing-agency' ><b>Best Digital Marketing Agency</b></a>", "<a href='/website-design-and-development-services' ><b>Website Design & Development Services</b></a>", "<a href='/Performance-marketing-agency' ><b>Performance Marketing Agency</b></a>", "<a href='/search-engine-optimization-agency' ><b>Search Engine Optimization Agency</b></a>", "<a href='/social-media-marketing-agency' ><b>Social Media Marketing Agency</b></a>", "<a href='/pay-per-click-advertising-agency' ><b>Pay Per Click Advertising Agency</b></a>", "<a href='/branding-and-graphic-design-agency' ><b>Branding and Graphic Design Agency</b></a>", "<a href='/influencer-marketing-agency' ><b>Influencer Marketing Agency</b></a>", "<a href='/analytics-and-reporting-agency' ><b>Analytics and Reporting Agency</b></a>", "<a href='/whatsapp-marketing-agency' ><b>WhatsApp Marketing Agency</b></a>", "<a href='/online-reputation-management-agency' ><b>Online Reputation Management Agency</b></a>", "<a href='/cyber-security-services' ><b>Cyber Security Services</b></a>"],
        },
      ],
    },
  },

];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://skyhitmedia.com/#webpage",
      url: "https://skyhitmedia.com/",
      name: "Top Digital Marketing Agency in Hyderabad | Skyhit Media",
      description:
        "Skyhit Media is the top digital marketing agency and web design company in Hyderabad. Boost your business with expert services and innovative solutions.",
      isPartOf: { "@id": "https://skyhitmedia.com/#website" },
      about: { "@id": "https://skyhitmedia.com/#organization" },
      datePublished: "2026-06-12",
      dateModified: "2026-06-12",
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": "https://skyhitmedia.com/#faq",
      mainEntity: practicalFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

const FreeQuote = dynamic(() => import("@/components/FreeQuote"));
const ContactCta = dynamic(() => import("@/components/ContactCta"));
const GetInTouch = dynamic(() => import("@/components/GetInTouch"));

export const metadata: Metadata = {
  title: "Top Digital Marketing Agency in Hyderabad | Skyhit Media",
  description:
    "Skyhit Media is the top digital marketing agency and web design company in Hyderabad. Boost your business with expert services and innovative solutions.",
  openGraph: {
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "Skyhit Media",
      }
    ],
    title: "Top Digital Marketing Agency in Hyderabad | Skyhit Media",
    description:
      "Skyhit Media is the top digital marketing agency and web design company in Hyderabad. Boost your business with expert services and innovative solutions.",
    url: "https://skyhitmedia.com/",
  },
  alternates: { canonical: "https://skyhitmedia.com/" },
  keywords: ["Digital Marketing", "SEO", "PPC", "Web Design", "Skyhit Media", "Hyderabad"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroPreload />
      <Hero />
      <TrustedSection />
      <FreeQuote />

      <ServiceSection />
      <AgencySection />
      <WhyChooseSection />
      <RecentWorksSection />
      <ClientSection />

      <TestimonialsSection testimonials={testimonials} title="CLIENT REVIEWS" subtitle="What People Say About Us?" />



      <GetInTouch />
      <ContactCta />
      <FAQ faqs={faqs} />
    </>
  );
}

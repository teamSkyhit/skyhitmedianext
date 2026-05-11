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
    image: "/images/review-image-services-1.png",
    stars: 5,
    quote: "Skyhit Media is the best Digital Marketing Agency! Their strategies improved our online presence, boosted traffic, and increased sales. Highly professional and results-driven team!",
  },
  {
    name: "Satish Varma",
    position: "",
    image: "/images/review-image-services-2.png",
    stars: 5,
    quote: "Skyhit Media transformed our business with their expert digital marketing services. More leads, better engagement, and increased revenue. Highly recommend this agency!",
  },
  {
    name: "Rohan",
    position: "",
    image: "/images/review-image-services-3.png",
    stars: 5,
    quote: "Professional and innovative Digital Marketing Agency! Skyhit Media's data-driven strategies helped us rank higher on Google and attract more customers. Truly impressive!",
  },
];

const faqs = [
  {
    question: "Welcome to Skyhit Media – Your Trusted Digital Marketing Agency in Hyderabad",
    answer: {
      sections: [
        {
          headings: [""],
          texts: ["At <b>Skyhit Media</b>, we specialize in providing comprehensive digital marketing solutions to businesses in Hyderabad. As a leading digital marketing agency in Hyderabad, we offer customized strategies designed to drive growth and help you achieve your business objectives."],
        },
        {
          headings: ["Why Choose Skyhit Media – The Best Digital Marketing Agency in Hyderabad?", ""],
          texts: ["With 10+ years of experience and a team of skilled professionals, we've earned a reputation as the <b>best digital marketing agency in Hyderabad</b>. Our services span across all areas of digital marketing, including <b>social media marketing, Google Ads, and performance marketing</b>."],
        },
      ],
    },
  },
];
const FreeQuote = dynamic(() => import("@/components/FreeQuote"));
const ContactCta = dynamic(() => import("@/components/ContactCta"));
const GetInTouch = dynamic(() => import("@/components/GetInTouch"));

export const metadata: Metadata = {
  title: "#1 Top Digital Marketing Agency in Hyderabad | 🚀 SKYHIT MEDIA",
  description:
    "Skyhit Media is the top digital marketing agency and web design company in Hyderabad. Boost your business with expert services and innovative solutions.",
  openGraph: {
    title: "Top Digital Marketing Agency in Hyderabad | 🚀 SKYHIT MEDIA",
    description:
      "Skyhit Media is the top digital marketing agency and web design company in Hyderabad. Boost your business with expert services and innovative solutions.",
    images: ["/images/header%20skyhit%20logo%20desktop.png"],
    url: "https://skyhitmedia.com/",
  },
  alternates: { canonical: "https://skyhitmedia.com/" },
};

export default function HomePage() {
  return (
    <>
      <HeroPreload />
      <Hero />
      <TrustedSection />
      <AgencySection />
      <ServiceSection />
      <ClientSection />
      <WhyChooseSection />
      <RecentWorksSection />
      <TestimonialsSection testimonials={testimonials} title="CLIENT REVIEWS" subtitle="What People Say About Us?" />
      <FAQ faqs={faqs} />
      <FreeQuote />
      <ContactCta />
      <GetInTouch />
    </>
  );
}

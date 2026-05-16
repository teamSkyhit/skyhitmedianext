import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Banner from "@/components/Banner";

const AboutSection = dynamic(() => import("@/components/Services/AboutSection"));
const ClientSection = dynamic(() => import("@/components/ClientSection"));
const WhyChooseSection = dynamic(() => import("@/components/WhyChooseSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const GetInTouch = dynamic(() => import("@/components/GetInTouch"));
const LazySection = dynamic(() => import("@/components/LazySection"));

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

export const metadata: Metadata = {title: "About Skyhit Media | Top Digital Marketing Agency in Hyderabad",
  description:
    "Learn about Skyhit Media, the top digital marketing agency in Hyderabad. Our team delivers expert SEO, PPC, social media, and web development services.",
  keywords: ["Digital Marketing", "SEO", "PPC", "Web Design", "Skyhit Media", "Hyderabad"],
  openGraph: {
    title: "About Skyhit Media | Top Digital Marketing Agency in Hyderabad",
    description: "Learn about Skyhit Media, the top digital marketing agency in Hyderabad. Our team delivers expert SEO, PPC, social media, and web development services.",
    url: "https://skyhitmedia.com/about",
    images: ["/images/og-image-padded.png"],
  },
  alternates: { canonical: "https://skyhitmedia.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Banner title="About Our Agency" imgSrc="/images/about-us-header-skyhitmedia.webp" />
      <LazySection>
        <AboutSection
          title="About Our"
          subtitle="INDUSTRY LEADING DIGITAL MARKETING AGENCY"
          description1="Skyhit Media is a dynamic and innovative digital marketing agency committed to helping businesses grow and thrive in the digital landscape. With a passion for creativity and a focus on results, we provide end-to-end digital marketing solutions that drive measurable success. "
          description2="Founded on the belief that every business deserves a tailored marketing strategy, we specialize in crafting customized campaigns that resonate with your target audience. Our team of experts combines cutting-edge technology, industry knowledge, and creative thinking to deliver impactful online experiences that elevate your brand."
          imageUrl="/images/about-2nd-section-skyhitmedia.webp"
          altText="About"
        />
        <WhyChooseSection />
        <ClientSection />
        <TestimonialsSection
          testimonials={testimonials}
          title="CLIENT REVIEWS"
          subtitle="What People Say About Us?"
        />
        <GetInTouch />
      </LazySection>
    </>
  );
}

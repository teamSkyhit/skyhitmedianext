import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Banner from "@/components/Banner";

const GetInTouch = dynamic(() => import("@/components/GetInTouch"));
const ClientSection = dynamic(() => import("@/components/ClientSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
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

export const metadata: Metadata = {
  title: "Contact Skyhit Media | Digital Marketing Agency Hyderabad",
  description:
    "Get in touch with Skyhit Media, the top digital marketing agency in Hyderabad. We're here to help you grow your business online.",
};

export default function ContactPage() {
  return (
    <>
      <Banner title="Contact Us" imgSrc="/images/contactus-herosection-skyhitmedia.webp" />
      <GetInTouch />
      <LazySection>
        <ClientSection />
        <TestimonialsSection testimonials={testimonials} />
      </LazySection>
    </>
  );
}

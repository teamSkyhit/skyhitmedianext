import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Banner from "@/components/Banner";

const Careers = dynamic(() => import("@/components/Careers"));
const CareersForm = dynamic(() => import("@/components/CareersForm"));
const AboutSection = dynamic(() => import("@/components/Services/AboutSection"));

export const metadata: Metadata = {title: "Careers at Skyhit Media | Join Our Team in Hyderabad",
  description:
    "Join the Skyhit Media team in Hyderabad. Explore open positions in digital marketing, web development, content creation, and more.",
  keywords: ["Digital Marketing", "SEO", "PPC", "Web Design", "Skyhit Media", "Hyderabad"],
  openGraph: {
    title: "Careers at Skyhit Media | Join Our Team in Hyderabad",
    description: "Join the Skyhit Media team in Hyderabad. Explore open positions in digital marketing, web development, content creation, and more.",
    url: "https://skyhitmedia.com/careers",
    images: ["https://skyhitmedia.com/images/Digital-Marketing-og-.png"],
  },
  alternates: { canonical: "https://skyhitmedia.com/careers" },
};

export default function CareersPage() {
  return (
    <>
      <Banner title="Our Careers" imgSrc="/images/career-banner-skyhitmedia.webp" />
      <AboutSection
        title=""
        subtitle="Take the Next Step in Your Career with SkyHitMedia"
        description1="At SkyHitMedia, we're committed to delivering innovative solutions that drive success in the digital landscape. Our dynamic environment encourages growth, collaboration, and creativity. As we expand, we are looking for passionate individuals who are eager to contribute to our mission of excellence. "
        description2="If you're ready to make an impact and be part of a forward-thinking team, explore opportunities at SkyHitMedia and help shape the future of digital transformation. "
        imageUrl="/images/careers-about-skyhitmedia.webp"
        altText="Careers About Skyhit Media"
      />
      <Careers />
      <CareersForm />
    </>
  );
}

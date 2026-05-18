import type { Metadata } from "next";
import Banner from "@/components/Banner";
import ClientSection from "@/components/ClientSection";

export const metadata: Metadata = {title: "Digital Marketing Blog | Skyhit Media Insights",
  description:
    "Read the latest insights, tips, and strategies on digital marketing, SEO, social media, and web design from the Skyhit Media team.",
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
    title: "Digital Marketing Blog | Skyhit Media Insights",
    description: "Read the latest insights, tips, and strategies on digital marketing, SEO, social media, and web design from the Skyhit Media team.",
    url: "https://skyhitmedia.com/blogs",
  },
  alternates: { canonical: "https://skyhitmedia.com/blogs" },
};

export default function BlogsPage() {
  return (
    <>
      <Banner title="Blogs" imgSrc="/images/blog-hero-section-skyhitmedia.webp" />
      <ClientSection />
    </>
  );
}

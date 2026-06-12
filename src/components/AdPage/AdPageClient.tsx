"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";

const AdHeroSection = dynamic(() => import("@/components/AdPage/AdHeroSection"));
const TrustBadges = dynamic(() => import("@/components/AdPage/TrustBadges"));
const PortfolioGallery = dynamic(() => import("@/components/AdPage/PortfolioGallery"));
const PainSolutions = dynamic(() => import("@/components/AdPage/PainSolutions"));
const ExclusiveSolution = dynamic(() => import("@/components/AdPage/ExclusiveSolution"));
const AdWhyChoose = dynamic(() => import("@/components/AdPage/WhyChoose"));
const AdServices = dynamic(() => import("@/components/AdPage/Services"));
const AdTestimonials = dynamic(() => import("@/components/AdPage/Testimonials"));
const Stats = dynamic(() => import("@/components/AdPage/Stats"));
const Process = dynamic(() => import("@/components/AdPage/Process"));
const FAQSection = dynamic(() => import("@/components/AdPage/FAQSection"));
const CTAForm = dynamic(() => import("@/components/AdPage/CTAForm"));
const Coverage = dynamic(() => import("@/components/AdPage/Coverage"));
const FloatingForm = dynamic(() => import("@/components/AdPage/FloatingForm"));
const FloatingCTA = dynamic(() => import("@/components/AdPage/FloatingCTA"));
const ClientSection = dynamic(() => import("@/components/ClientSection"));

const portfolioImages = [
  { src: "/images/bakelore-skyhitmedia.webp", alt: "Modern Website Design" },
  { src: "/images/aix-investment-skyhitmedia1.webp", alt: "E-commerce Platform" },
  { src: "/images/signova-group-skyhitmedia.webp", alt: "Mobile App Interface" },
  { src: "/images/promea-skyhitmedia.webp", alt: "Business Website" },
  { src: "/images/prospera-kia-skyhitmedia.webp", alt: "Landing Page Design" },
  { src: "/images/happy-living-skyhitmedia.webp", alt: "Corporate Website" },
];

export default function AdPageClient() {
  const [isFloatingFormActive, setIsFloatingFormActive] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    requirements: "",
  });
  const [stats] = useState({
    projects: 500,
    conversion: 300,
    retention: 98,
    response: 24,
  });
  const statsRef = useRef<HTMLElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AdHeroSection
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <TrustBadges />
      <PortfolioGallery
        portfolioImages={portfolioImages}
        openLightbox={openLightbox}
        lightboxImage={lightboxImage}
        closeLightbox={closeLightbox}
      />
      <PainSolutions />
      <ExclusiveSolution scrollToSection={scrollToSection} />
      <AdWhyChoose />
      <AdServices />
      <AdTestimonials />
      <Stats ref={statsRef} stats={stats} />
      <Process />
      <FAQSection />
      <CTAForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <Coverage />
      <ClientSection />
      <FloatingForm
        isFloatingFormActive={isFloatingFormActive}
        setIsFloatingFormActive={setIsFloatingFormActive}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <FloatingCTA setIsFloatingFormActive={setIsFloatingFormActive} />
    </>
  );
}

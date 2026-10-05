"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import AdHeroSection from "@/components/DigitalMarketingAdPage/AdHeroSection";
import TrustBadges from "@/components/DigitalMarketingAdPage/TrustBadges";
import PainSolutions from "@/components/DigitalMarketingAdPage/PainSolutions";
const ExclusiveSolution = dynamic(() => import("@/components/DigitalMarketingAdPage/ExclusiveSolution"));
const AdWhyChoose = dynamic(() => import("@/components/DigitalMarketingAdPage/WhyChoose"));
const Services = dynamic(() => import("@/components/DigitalMarketingAdPage/Services"));
const AdTestimonials = dynamic(() => import("@/components/DigitalMarketingAdPage/Testimonials"));
const Stats = dynamic(() => import("@/components/DigitalMarketingAdPage/Stats"));
const Process = dynamic(() => import("@/components/DigitalMarketingAdPage/Process"));
const Industries = dynamic(() => import("@/components/DigitalMarketingAdPage/Industries"));
const CaseStudies = dynamic(() => import("@/components/DigitalMarketingAdPage/CaseStudies"));
const HyderabadLocations = dynamic(() => import("@/components/DigitalMarketingAdPage/HyderabadLocations"));

const FAQSection = dynamic(() => import("@/components/DigitalMarketingAdPage/FAQSection"));
const ContentAccordion = dynamic(() => import("@/components/DigitalMarketingAdPage/ContentAccordion"));

const FinalCTA = dynamic(() => import("@/components/DigitalMarketingAdPage/FinalCTA"));
const SEOFooter = dynamic(() => import("@/components/DigitalMarketingAdPage/SEOFooter"));
const CTAForm = dynamic(() => import("@/components/DigitalMarketingAdPage/CTAForm"));
const FloatingForm = dynamic(() => import("@/components/DigitalMarketingAdPage/FloatingForm"));
const FloatingCTA = dynamic(() => import("@/components/DigitalMarketingAdPage/FloatingCTA"));
const ClientSection = dynamic(() => import("@/components/ClientSection"));

export default function DigitalMarketingAdUI({ locationName }: { locationName?: string }) {
  const [isFloatingFormActive, setIsFloatingFormActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    requirements: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFloatingFormActive(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.offsetTop;
      window.scrollTo({
        top: sectionTop - navHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Floating UI ── */}
      <FloatingCTA setIsFloatingFormActive={setIsFloatingFormActive} />
      <FloatingForm
        isFloatingFormActive={isFloatingFormActive}
        setIsFloatingFormActive={setIsFloatingFormActive}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />

      {/* ── Hero & Trust ── */}
      <AdHeroSection
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        locationName={locationName}
      />
      <TrustBadges />

      {/* ── Core Conversion ── */}
      <PainSolutions locationName={locationName} />
      <ExclusiveSolution scrollToSection={scrollToSection} locationName={locationName} />
      <AdWhyChoose locationName={locationName} />
      <Stats />
      <Services />
      <Process />

      {/* ── Social Proof ── */}
      <AdTestimonials />
      <ClientSection />

      {/* ── New Sections ── */}
      <Industries />
      <CaseStudies />

      {/* ── Content & SEO ── */}
      <ContentAccordion locationName={locationName} />

      <FAQSection />

      {/* ── CRO & Conversion ── */}
      <CTAForm />
      <FinalCTA />

      {/* ── SEO Footer ── */}
      <SEOFooter locationName={locationName} />
    </>
  );
}

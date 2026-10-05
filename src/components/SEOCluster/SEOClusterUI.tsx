"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import SEOHeroSection from "./SEOHeroSection";
import TrustBadges from "@/components/DigitalMarketingAdPage/TrustBadges";
const FloatingForm = dynamic(() => import("@/components/DigitalMarketingAdPage/FloatingForm"), { ssr: false });
const FloatingCTA = dynamic(() => import("@/components/DigitalMarketingAdPage/FloatingCTA"), { ssr: false });
const SEOImpactNumbers = dynamic(() => import("./SEOImpactNumbers"));
const SEOServicesSection = dynamic(() => import("./SEOServicesSection"));
const SEOComparisonTable = dynamic(() => import("./SEOComparisonTable"));
const SEOCaseStudies = dynamic(() => import("./SEOCaseStudies"));
const SEOProcess = dynamic(() => import("./SEOProcess"));
const SEOToolsBadges = dynamic(() => import("./SEOToolsBadges"));
const SEOAwards = dynamic(() => import("./SEOAwards"));
const SEOVideoTestimonials = dynamic(() => import("./SEOVideoTestimonials"));
const SEOCampaignOptions = dynamic(() => import("./SEOCampaignOptions"));
const SEOCTAForm = dynamic(() => import("./SEOCTAForm"));
const SEOClusterFooter = dynamic(() => import("./SEOClusterFooter"));
const FAQSection = dynamic(() => import("@/components/DigitalMarketingAdPage/FAQSection"));


import { SEOContentProps } from "@/types/seo";

interface SEOClusterUIProps extends SEOContentProps {
  h1: string;
  heroSubTitle: string;
  introText?: string;
  seoFaqData?: any[];
}

import AnimatedBackground from "@/components/AnimatedBackground";

export default function SEOClusterUI({
  h1,
  heroSubTitle,
  introText,
  servicesData,
  faqData,
  seoFaqData,
  caseStudiesData,
  processData,
}: SEOClusterUIProps) {
  const [isFloatingFormActive, setIsFloatingFormActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "seo",
    requirements: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFloatingFormActive(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans relative">
      <AnimatedBackground />
      <FloatingCTA setIsFloatingFormActive={setIsFloatingFormActive} />
      <FloatingForm
        isFloatingFormActive={isFloatingFormActive}
        setIsFloatingFormActive={setIsFloatingFormActive}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />

      {/* 1. Hero */}
      <SEOHeroSection h1={h1} heroSubTitle={heroSubTitle} introText={introText} />
      
      {/* 2. Trust Logos (Thin borders) */}
      <TrustBadges />

      {/* 3. Impact Numbers (Dark blue strip) */}
      <SEOImpactNumbers />
      
      {/* 4. Services Tabs */}
      <div id="services">
        <SEOServicesSection servicesData={servicesData} />
      </div>

      {/* 5. Comparison Table */}
      <SEOComparisonTable />

      {/* 6. Case Studies */}
      <div id="case-studies">
        <SEOCaseStudies caseStudiesData={caseStudiesData} />
      </div>

      {/* 7. Process Timeline */}
      <div id="process">
        <SEOProcess processData={processData} />
      </div>

      {/* 8. Tools Badges */}
      <SEOToolsBadges />

      {/* 9. Awards */}
      <SEOAwards />

      {/* 10. Testimonials Carousel */}
      <SEOVideoTestimonials />

      {/* 11. Campaign Pricing */}
      <div id="pricing">
        <SEOCampaignOptions />
      </div>

      {/* 13. FAQs */}
      <div id="faqs">
        <FAQSection faqData={faqData} />
      </div>

      {/* 14. Bottom CTA Form */}
      <div id="contact">
        <SEOCTAForm seoFaqData={seoFaqData} />
      </div>

      {/* 15. Full Layout SEO Footer */}
      <SEOClusterFooter />
      
    </div>
  );
}

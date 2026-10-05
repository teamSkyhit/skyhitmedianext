"use client";

import React, { useState, useRef } from 'react';
import { Star, Check, CheckCircle, Award, TrendingUp, Megaphone, Monitor, Search, Share2, Target, Zap } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  requirements: string;
}

interface HeroSectionProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
  locationName?: string;
  heroSubTitle?: string;
}

const getSubHeadline = (loc: string) => {
  switch (loc.toLowerCase()) {
    case "jubilee hills":
      return "Help your business stand out in Jubilee Hills with data-driven digital marketing strategies that increase brand visibility, generate qualified leads, and deliver measurable business growth.";
    case "banjara hills":
      return "Grow your business in Banjara Hills with ROI-focused digital marketing solutions designed to attract high-quality customers, strengthen your online presence, and maximize conversions.";
    case "gachibowli":
      return "Accelerate your business growth in Gachibowli with performance-driven digital marketing, SEO, Google Ads, and lead generation strategies tailored for startups, IT companies, and B2B businesses.";
    case "madhapur":
      return "Scale your business in Madhapur with innovative digital marketing campaigns that improve online visibility, generate quality leads, and drive sustainable business growth.";
    case "hitec city":
      return "Drive measurable business growth in HITEC City with data-driven SEO, Google Ads, LinkedIn marketing, and performance marketing strategies built for technology and enterprise businesses.";
    case "kondapur":
      return "Reach more customers in Kondapur with customized digital marketing solutions that increase your online visibility, generate qualified enquiries, and help your business grow consistently.";
    case "financial district":
      return "Empower your business in Financial District with performance-focused digital marketing strategies that build brand authority, generate high-quality leads, and accelerate long-term business growth.";
    case "kukatpally":
      return "Grow your business in Kukatpally with result-oriented digital marketing campaigns that attract more local customers, increase enquiries, and improve your online presence.";
    case "miyapur":
      return "Build a stronger digital presence in Miyapur with customized digital marketing strategies that help your business reach more customers, generate quality leads, and achieve sustainable growth.";
    case "secunderabad":
      return "Transform your business in Secunderabad with strategic digital marketing solutions that increase brand visibility, generate qualified leads, and deliver measurable business results.";
    default:
      return "Transform your online presence into a revenue-generating machine with our proven digital marketing strategies and high-converting campaigns.";
  }
};

const HeroSection: React.FC<HeroSectionProps> = ({
  formData,
  handleInputChange,
  locationName,
  heroSubTitle,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isSubmittingRef = useRef(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneCleaned = formData.phone.trim();
    if (!/^[6-9]\d{9}$/.test(phoneCleaned)) {
      alert("Please enter a valid 10-digit phone number starting with 6-9.");
      return;
    }

    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_i2h82eb",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_4crdzlz",
        {
          from_name: "Skyhit Media Team",
          to_name: formData.name || "",
          name: formData.name || "",
          email: formData.email || "",
          number: phoneCleaned,
          phone: phoneCleaned,
          position: formData.projectType || "",
          projectType: formData.projectType || "",
          message: formData.requirements || "",
          msg: formData.requirements || "",
          requirements: formData.requirements || "",
          page: "Ad Page Hero Form",
          subject: "New Free Quote Inquiry",
          gender: "N/A",
          resume_link: "N/A",
          linkedin: "N/A",
          page_url: typeof window !== 'undefined' ? window.location.href : 'Unknown'
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "hjLXq5MC66R977QFn" }
      )
      .then(
        () => {
          router.push('/thank-you'); // Redirect after success
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          alert('Failed to send email.');
        }
      )
      .finally(() => {
        isSubmittingRef.current = false;
        setIsLoading(false);
      });
  };

  return (
    <section className="relative min-h-screen pt-24 lg:pt-32 pb-12 md:pb-20 bg-white overflow-hidden flex flex-col justify-center">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#5F6B7012_1px,transparent_1px),linear-gradient(to_bottom,#5F6B7012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Animated Glowing Orbs */}
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] mix-blend-multiply animate-[float_8s_ease-in-out_infinite] pointer-events-none"></div>
      <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-champagne-500/20 rounded-full blur-[120px] mix-blend-multiply animate-[float_10s_ease-in-out_infinite_reverse] pointer-events-none"></div>
      <div className="absolute -bottom-40 left-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply animate-[float_12s_ease-in-out_infinite_1s] pointer-events-none -translate-x-1/2"></div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
          100% { transform: translateY(0px) scale(1); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:mt-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Area */}
          <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-[2.5rem] md:text-5xl lg:text-[4rem] font-extrabold text-primary leading-[1.15] tracking-tight max-w-2xl">
              Best <span className="text-secondary">Digital Marketing</span> Agency in {locationName || "Hyderabad"}
            </h1>

            <p className="text-lg md:text-xl text-primary/80 leading-relaxed max-w-xl">
              {heroSubTitle || getSubHeadline(locationName || "Hyderabad")}
            </p>

            {/* Premium Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-champagne-500/30 shadow-sm hover:shadow-md transition-shadow">
                <Star className="text-secondary" size={16} fill="currentColor" />
                <span className="font-bold text-primary text-sm">5/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-champagne-500/30 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="text-secondary" size={16} />
                <span className="font-bold text-primary text-sm">500+ Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-champagne-500/30 shadow-sm hover:shadow-md transition-shadow">
                <Award className="text-secondary" size={16} />
                <span className="font-bold text-primary text-sm">200+ Clients</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-champagne-500/30 shadow-sm hover:shadow-md transition-shadow">
                <Check className="text-secondary" size={16} />
                <span className="font-bold text-primary text-sm">12+ Years Exp.</span>
              </div>
            </div>

            {/* Premium Offer Banner */}
            <div className="inline-block mt-4">
              <a href="#form" className="block bg-white p-1 rounded-2xl shadow-xl border border-champagne-500/20 relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne-500/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl relative z-10 border border-champagne-500/10">
                  <div className="bg-secondary p-2 rounded-full text-white shadow-lg shadow-secondary/30">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <span className="block font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                      Full-Funnel Marketing Solutions
                    </span>
                    <span className="block text-secondary text-sm font-medium tracking-wide">
                      Starting at ₹50,000* - Limited Offer!
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Form Area */}
          <div id="hero-form" className="lg:sticky lg:top-32 relative z-20">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-champagne-500/20 relative overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary shadow-[0_0_20px_rgba(190,127,81,0.5)]"></div>
              
              <div className="text-center mb-8 mt-2">
                <h3 className="text-[1.75rem] font-extrabold text-primary mb-2">Get Your Free Quote</h3>
                <p className="text-primary/70 font-medium">Join 500+ businesses that chose growth</p>
              </div>
              
              <form className="space-y-4" onSubmit={sendEmail}>
                <input
                  id="hero-name"
                  type="text"
                  name="name"
                  aria-label="Your Name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-primary placeholder-primary/50 font-medium"
                  required
                />
                <input
                  id="hero-email"
                  type="email"
                  name="email"
                  aria-label="Email Address"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-primary placeholder-primary/50 font-medium"
                  required
                />
                <input
                  id="hero-phone"
                  type="tel"
                  name="phone"
                  aria-label="Phone Number"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                    handleInputChange(e);
                  }}
                  maxLength={10}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-primary placeholder-primary/50 font-medium"
                  required
                />
                <select
                  id="hero-project-type"
                  name="projectType"
                  aria-label="Select Your Project Goal"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-primary font-medium appearance-none bg-white"
                  required
                >
                  <option value="">Select Your Project Goal</option>
                  <option value="seo">SEO & Organic Traffic</option>
                  <option value="ppc">Google Ads / PPC</option>
                  <option value="social">Meta Ads / Social Media</option>
                  <option value="website">Web Design</option>
                  <option value="full-funnel">Full Digital Marketing</option>
                </select>
                <textarea
                  id="hero-requirements"
                  name="requirements"
                  aria-label="Enter your requirements"
                  placeholder="Enter your requirements"
                  rows={3}
                  value={formData.requirements}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-primary placeholder-primary/50 font-medium resize-none"
                  required
                />
                <button
                  id="hero-submit-btn"
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-secondary hover:bg-[#a66a40] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-0.5 mt-2 disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Get My Free Quote Now"}
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 font-medium">
                  🔒 100% Free • No Spam • 24h Response
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

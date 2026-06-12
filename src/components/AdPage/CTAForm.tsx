"use client";

import React, { useState, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  requirements: string;
}

interface CTAFormProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleFormSubmit: (e: React.FormEvent) => void; // Optional
}

const CTAForm: React.FC<CTAFormProps> = ({ formData, handleInputChange }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter(); // For redirect
  const [isLoading, setIsLoading] = useState(false);
  const isSubmittingRef = useRef(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: "Skyhit Media Team",
          to_name: formData.name || "",
          email: formData.email || "",
          number: phoneCleaned,
          position: formData.projectType || "",
          message: formData.requirements || "",
          msg: formData.requirements || "",
          page: "Ad Page CTA Form",
          subject: "New Quote Inquiry (CTA Form)",
          gender: "N/A",
          resume_link: "N/A",
          linkedin: "N/A"
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      )
      .then(
        () => {
          router.push('/thank-you'); // Redirect on success
        },
        (error) => {
          console.error('❌ Email send error:', error);
          alert('Something went wrong. Please try again later.');
        }
      )
      .finally(() => {
        isSubmittingRef.current = false;
        setIsLoading(false);
      });
  };

  return (
    <section
      id="form"
      className="py-20 bg-gradient-to-br from-slate-800 to-slate-700 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-champagne-500/10 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-bold mb-6 animate-pulse">
            <AlertTriangle size={20} />
            <span>LIMITED TIME: 50% OFF for first 10 clients this month!</span>
          </div>

          <h2 className="text-5xl font-bold mb-6">🎯 Ready to 3X Your Website Conversions?</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join 500+ successful businesses. Get your tailored quote in 24 hours — completely free, no obligations.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white p-8 lg:p-12 rounded-2xl shadow-2xl text-slate-800"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-4 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="p-4 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
                handleInputChange(e);
              }}
              maxLength={10}
              className="p-4 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors"
              required
            />
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="p-4 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors"
              required
            >
              <option value="">Select Your Project Goal</option>
              <option value="new-website">New Website</option>
              <option value="redesign">Website Redesign</option>
              <option value="ecommerce">E-commerce Store</option>
              <option value="landing-page">Landing Page</option>
              <option value="other">Other</option>
            </select>
          </div>
          <textarea
            name="requirements"
            placeholder="Enter your requirements - Tell us about your project and current challenges"
            rows={4}
            value={formData.requirements}
            onChange={handleInputChange}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors resize-vertical mb-6"
            required
          />
          <div className="mb-6">
            <label className="flex items-start gap-3 text-slate-600 cursor-pointer">
              <input type="checkbox" className="mt-1" required />
              <span className="leading-relaxed">
                ✅ I agree to receive my free quote and occasional marketing updates. We keep your info 100% private.
              </span>
            </label>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-champagne-500 hover:bg-champagne-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors transform hover:scale-105 animate-pulse disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "📩 Sending..." : "📩 Get My Free Quote Now"}
          </button>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-slate-500">
            <span>🔒 100% Free</span>
            <span>📞 24h Response</span>
            <span>💰 No Hidden Costs</span>
            <span>🎯 Custom Strategy</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTAForm;

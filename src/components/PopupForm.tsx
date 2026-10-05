"use client";

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

const PopupForm = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isSubmittingRef = useRef(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const phoneCleaned = (formData.get("phone") as string || "").trim();
    if (!/^[6-9]\d{9}$/.test(phoneCleaned)) {
      alert("Please enter a valid 10-digit phone number starting with 6-9.");
      return;
    }

    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      )
      .then(() => {
        router.push('/thank-you');
      })
      .catch((err) => {
        console.error('Email send error:', err);
        alert('Something went wrong. Please try again later.');
      })
      .finally(() => {
        isSubmittingRef.current = false;
        setIsLoading(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl mx-4 p-6 rounded-xl shadow-xl relative">
        <button
          className="absolute top-2 right-3 text-gray-600 text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-3xl font-bold text-center mb-6" style={{ color: '#be7f51' }}>
          🚀 Get Your Free Quote
        </h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-[#be7f51]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-[#be7f51]"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              maxLength={10}
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                target.value = target.value.replace(/\D/g, "");
              }}
              className="p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-[#be7f51]"
              required
            />
            <select
              name="projectType"
              className="p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-[#be7f51]"
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
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-[#be7f51]"
            required
          />
          <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" className="mt-1" required />
            ✅ I agree to receive my free quote and occasional marketing updates.
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#be7f51] hover:bg-[#a46741] text-white font-bold py-3 px-8 rounded-md text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "📩 Get My Free Quote Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;

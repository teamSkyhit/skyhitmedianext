"use client";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

const PopupForm = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_i2h82eb',
        'template_4crdzlz',
        formRef.current,
        'hjLXq5MC66R977QFn'
      )
      .then(() => {
        router.push('/thank-you');
      })
      .catch((err) => {
        console.error('Email send error:', err);
        alert('Something went wrong. Please try again later.');
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
            className="w-full bg-[#be7f51] hover:bg-[#a46741] text-white font-bold py-3 px-8 rounded-md text-lg transition-all"
          >
            📩 Get My Free Quote Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;

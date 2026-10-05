"use client";

import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

export default function CTAForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isSubmittingRef = useRef(false);
  
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_i2h82eb",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_4crdzlz",
        {
          from_name: "Skyhit Media Team",
          to_name: "Subscriber",
          email: formData.email,
          page: "SEO Landing Page CTA Form",
          subject: "New Free Strategy Call Request",
          page_url: typeof window !== 'undefined' ? window.location.href : 'Unknown'
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "hjLXq5MC66R977QFn" }
      )
      .then(
        () => {
          router.push('/thank-you');
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
    <section className="py-20 bg-[#1a202c] relative overflow-hidden font-sans border-t-4 border-[#BE7F51]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Area */}
          <div className="flex flex-col items-start text-left text-white">
            <span className="text-[10px] font-bold text-[#BE7F51] tracking-widest uppercase mb-4">
              READY TO GROW?
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 tracking-tight leading-tight">
              Let's Build Your Competitive Advantage in Search.
            </h2>
            <p className="text-lg text-slate-400 max-w-md">
              Get a custom SEO strategy tailored to your business goals and start driving real, measurable growth.
            </p>
          </div>

          {/* Right Form Area */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="bg-white p-8 md:p-10 rounded-xl w-full max-w-[500px]">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#1a202c] mb-2 tracking-tight">Book Your Free Strategy Call</h3>
                <p className="text-slate-500 text-sm font-medium">30-minute call � No obligation</p>
              </div>
              
              <form onSubmit={sendEmail} className="flex flex-col gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:border-[#BE7F51] outline-none transition-all text-[#1a202c] placeholder:text-slate-400 font-medium text-sm"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#BE7F51] hover:bg-[#a66a41] text-white font-bold py-3.5 px-8 rounded-md text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isLoading ? "Booking..." : "Book My Free Call"} <ArrowRight className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}

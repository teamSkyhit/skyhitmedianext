"use client";

import React from 'react';
import Link from 'next/link';

const steps = [
  {
    number: "01",
    title: "Audit & Research",
    description: "We analyze your site, competitors, and market opportunities."
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description: "We build a custom SEO strategy aligned with your business goals."
  },
  {
    number: "03",
    title: "Execute & Optimize",
    description: "Our team implements, optimizes, and continuously improves performance."
  },
  {
    number: "04",
    title: "Report & Grow",
    description: "You get clear reporting and we scale what's working."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-24 bg-[#fcfcfc] relative overflow-hidden font-sans border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-bold text-[#BE7F51] tracking-widest uppercase mb-4">
            OUR PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#1a202c] mb-6 tracking-tight leading-tight">
            A Proven 4-Step Process
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Strategic. Transparent. Results-driven.
          </p>
        </div>

        {/* Process Steps (Horizontal layout on large screens) */}
        <div className="relative">
          {/* Horizontal Dotted Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-[2px] border-t-2 border-dotted border-slate-300 z-0"></div>
          
          {/* Vertical Dotted Line (Mobile/Tablet only) */}
          <div className="lg:hidden absolute top-[28px] bottom-[28px] left-[28px] w-[2px] border-l-2 border-dotted border-slate-300 z-0"></div>

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-start lg:items-center text-left lg:text-center relative pl-20 lg:pl-0">
                {/* Number Circle */}
                <div className="w-14 h-14 rounded-full bg-[#BE7F51] text-white flex items-center justify-center font-bold text-lg absolute left-0 top-0 lg:relative lg:mx-auto lg:mb-6 shadow-md border-4 border-[#fcfcfc]">
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-[#1a202c] mb-3 mt-1 lg:mt-0">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-[15px] leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-20">
          <Link href="#contact" className="inline-flex items-center justify-center bg-[#BE7F51] hover:bg-[#a66a41] text-white font-semibold py-3.5 px-8 rounded-md transition-all text-sm shadow-sm">
            Book a Strategy Call
          </Link>
        </div>

      </div>
    </section>
  );
}

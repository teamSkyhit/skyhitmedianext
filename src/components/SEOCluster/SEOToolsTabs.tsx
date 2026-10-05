"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SEOToolsTabs() {
  return (
    <section className="py-8 lg:py-10 bg-[#faf8f5] relative overflow-hidden font-sans border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Area (5 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-start text-left space-y-6"
          >
            <span className="text-[10px] font-bold text-secondary tracking-widest uppercase">
              OUR TECHNOLOGY STACK
            </span>
            
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#1a202c] leading-tight tracking-tight">
              Enterprise-Grade Tools. Smarter Results.
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              We leverage best-in-class platforms and proprietary workflows to deliver impact.
            </p>

            <Link href="#process" className="group inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-[#a66a41] transition-colors mt-4">
              View Our Process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Logos Area (7 columns) */}
          <div className="lg:col-span-7 w-full mt-10 lg:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-8 items-center justify-items-center opacity-80 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700">
              
              {[
                <div key="ahrefs" className="text-xl font-bold font-sans tracking-tighter text-slate-700 flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                   <span className="text-orange-500 text-2xl leading-none">a</span>hrefs
                </div>,
                <div key="semrush" className="text-xl font-bold font-sans tracking-tighter text-slate-700 flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                   <span className="w-5 h-5 bg-gradient-to-r from-orange-400 to-red-500 rounded-sm"></span> SEMRUSH
                </div>,
                <div key="screamingfrog" className="text-lg font-bold font-sans tracking-tight text-slate-700 flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                   <span className="text-primary">Screaming</span>Frog
                </div>,
                <div key="ga4" className="text-lg font-bold font-sans tracking-tight text-slate-700 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
                   <span className="w-4 h-4 border-[3px] border-primary rounded-full"></span> GA4
                </div>,
                <div key="looker" className="text-lg font-bold font-sans tracking-tight text-slate-700 flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                   <span className="text-champagne-500 font-serif italic text-2xl leading-none">S</span> Looker Studio
                </div>,
                <div key="clarity" className="text-lg font-bold font-sans tracking-tight text-slate-700 flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                   Microsoft Clarity
                </div>,
                <div key="gsc" className="text-lg font-bold font-sans tracking-tight text-slate-700 flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                   <span className="text-red-500 text-2xl leading-none font-serif">g</span> Google<br/><span className="text-[10px] leading-none">Search Console</span>
                </div>,
                <div key="hotjar" className="text-lg font-bold font-sans tracking-tight text-slate-700 flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                   <span className="w-4 h-4 bg-secondary rounded-sm transform rotate-45"></span> hotjar
                </div>,
                <div key="vwo" className="text-lg font-bold font-sans tracking-tight text-slate-700 flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                   <span className="w-4 h-4 bg-primary rounded-sm"></span> VWO
                </div>
              ].map((logo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {logo}
                </motion.div>
              ))}

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

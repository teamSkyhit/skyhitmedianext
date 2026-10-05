"use client";

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { name: "In-depth Technical Audits", skyhit: "Comprehensive", typical: "Basic" },
  { name: "Custom Strategy", skyhit: "Tailored for Your Business", typical: "Cookie-Cutter" },
  { name: "Core Web Vitals Optimization", skyhit: "Advanced", typical: "Limited" },
  { name: "Schema & Structured Data", skyhit: "Extensive", typical: "Minimal" },
  { name: "Transparent Reporting", skyhit: "Real-time Dashboards", typical: "Monthly PDFs" },
  { name: "Dedicated SEO Expert", skyhit: "Yes", typical: "No" },
  { name: "ROI Guarantee", skyhit: "Yes", typical: "No" }
];

export default function SEOComparisonTable() {
  return (
    <section className="py-8 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
              WHY WORK WITH SKYHIT MEDIA?
            </p>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1a202c] mb-6 leading-tight">
              More Than Traffic. We Drive Business Outcomes.
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-slate-700">Data-driven strategies</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-slate-700">Proven technical expertise</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-slate-700">Transparent reporting</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-slate-700">ROI-focused approach</span>
              </li>
            </ul>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-[#a66a41] text-white font-bold py-4 px-8 rounded-md transition-all shadow-[0_10px_30px_rgba(190,127,81,0.3)] hover:shadow-[0_10px_40px_rgba(190,127,81,0.5)] hover:-translate-y-1 duration-300 group">
              Start Growing Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column: Table */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 overflow-hidden py-4 w-full"
          >
            <div className="overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 w-[calc(100%+2rem)] sm:w-full">
              <div className="min-w-[600px] flex rounded-xl border border-slate-200 bg-white items-stretch hover:shadow-2xl transition-shadow duration-500">
              
              {/* Features Column */}
              <div className="w-[35%] flex flex-col py-2">
                <div className="h-16 flex items-center px-6 text-sm font-bold text-[#1a202c]">
                  Features
                </div>
                {features.map((item, idx) => (
                  <div key={idx} className={`h-16 flex items-center px-6 text-sm font-medium text-slate-600 ${idx !== features.length - 1 ? 'border-b border-slate-100' : ''}`}>
                    {item.name}
                  </div>
                ))}
              </div>

              {/* Skyhit Media Column - Highlighted */}
              <div className="w-[35%] flex flex-col -mt-4 -mb-4 bg-white rounded-xl border-2 border-primary shadow-xl relative z-10 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <div className="h-20 bg-primary flex items-center justify-center text-white text-sm font-bold tracking-wider">
                  SKYHIT MEDIA
                </div>
                <div className="flex-1 bg-white flex flex-col">
                  {features.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + (idx * 0.1) }}
                      className={`h-16 flex items-center gap-3 px-6 text-sm ${idx !== features.length - 1 ? 'border-b border-slate-100' : ''}`}
                    >
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm shadow-primary/30">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="font-semibold text-[#1a202c]">{item.skyhit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Typical Agency Column */}
              <div className="w-[30%] flex flex-col py-2 bg-slate-50/50 rounded-r-xl">
                <div className="h-16 flex items-center justify-center px-6 text-sm font-bold text-[#1a202c]">
                  Typical SEO Agency
                </div>
                {features.map((item, idx) => (
                  <div key={idx} className={`h-16 flex items-center justify-start gap-3 px-6 text-sm opacity-60 ${idx !== features.length - 1 ? 'border-b border-slate-100' : ''}`}>
                    <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center flex-shrink-0 bg-white">
                      <div className="w-2 h-0.5 rounded-full bg-slate-400"></div>
                    </div>
                    <span className="font-medium text-slate-600">{item.typical}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

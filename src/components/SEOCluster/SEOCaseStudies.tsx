"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { CaseStudy } from '@/types/seo';

const defaultCaseStudies: CaseStudy[] = [
  {
    client: "National Clinic Group",
    industry: "Healthcare",
    metric: "+317%",
    metricLabel: "Organic Traffic",
    timeframe: "in 6 Months",
    image: "/images/google-analytics-seo-dashboard.webp",
    alt: "Google Analytics SEO dashboard showing 317% organic traffic growth for healthcare client",
    link: "#"
  },
  {
    client: "Global Fashion Retailer",
    industry: "E-commerce",
    metric: "+254%",
    metricLabel: "Revenue from Organic",
    timeframe: "in 9 Months",
    image: "/images/seo-company-hyderabad-dashboard.webp",
    alt: "SEO company Hyderabad dashboard showing 254% e-commerce revenue growth from organic search",
    link: "#"
  },
  {
    client: "Luxury Developer Brand",
    industry: "Real Estate",
    metric: "+193%",
    metricLabel: "Leads from Organic",
    timeframe: "in 12 Months",
    image: "/images/seo-keyword-ranking-report.webp",
    alt: "SEO keyword ranking report showing 193% leads growth for real estate developer in Hyderabad",
    link: "#"
  }
];

export default function SEOCaseStudies({ caseStudiesData }: { caseStudiesData?: CaseStudy[] }) {
  const displayCaseStudies = caseStudiesData || defaultCaseStudies;
  return (
    <section className="py-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
            SUCCESS STORIES
          </p>
          <h2 className="text-3xl md:text-[2.5rem] font-sans font-bold text-[#1a202c]">
            Real Results for Real Businesses
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column: 3 Case Studies */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {displayCaseStudies.map((study, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col group hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                >
                  
                  {/* Image Background */}
                  <div className="h-40 w-full relative overflow-hidden">
                    <Image 
                      src={study.image} 
                      alt={(study as any).alt || study.title || (study as any).client || "SEO Case Study"} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1 relative bg-white">
                    <h3 className="font-bold text-[#1a202c] text-lg mb-1">{study.title || (study as any).client}</h3>
                    <p className="text-xs text-slate-500 font-medium mb-6">{study.industry}</p>
                    
                    <div className="mb-6">
                      <div className="text-3xl font-extrabold text-[#1a202c] group-hover:text-primary transition-colors duration-300">{study.metric}</div>
                      <div className="text-sm text-slate-600 mt-1">{study.metricLabel}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{study.timeframe}</div>
                    </div>
                    
                  </div>
                </motion.div>
              ))}
            </div>


          </div>

          {/* Right Column: Live Results Snapshot */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 h-full"
          >
            <div className="bg-[#0f172a] border border-[#1e293b] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] h-full p-6 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
              
              {/* Glow effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[50px]"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px]"></div>

              <div className="absolute top-0 right-0 p-4">
                 <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-1 rounded-full border border-slate-700">
                   <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
                   <span className="text-[10px] text-slate-300 font-medium">LIVE</span>
                 </div>
              </div>
              
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 mt-2">RESULTS SNAPSHOT</p>
              <h3 className="text-xl font-bold text-white mb-6 leading-tight">
                Your Growth, Measured in Real-Time
              </h3>

              {/* Real-time Dashboard Image */}
              <div className="relative w-full aspect-video mt-4 rounded-lg overflow-hidden border border-[#1e293b] shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                <Image 
                  src="/images/organic-traffic-growth-dashboard.webp" 
                  alt="Organic traffic growth dashboard – real-time SEO analytics and performance report Hyderabad"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

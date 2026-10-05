"use client";

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface SEOHeroSectionProps {
  h1: string;
  heroSubTitle: string;
  introText?: string;
}

export default function SEOHeroSection({
  h1,
  heroSubTitle,
  introText = "TECHNICAL SEO AGENCY FOR AMBITIOUS BRANDS",
}: SEOHeroSectionProps) {
  // Extract the last word of the h1 to style it with the secondary color
  const h1Words = h1.split(' ');
  const lastWord = h1Words.pop();
  const restOfH1 = h1Words.join(' ');
  return (
    <section className="relative min-h-[100svh] pt-32 pb-16 lg:pt-32 lg:pb-12 bg-[#0a0f18] overflow-hidden flex flex-col justify-center font-sans">
      
      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[90px] md:blur-[180px] pointer-events-none md:animate-pulse will-change-transform"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[75px] md:blur-[150px] pointer-events-none md:animate-pulse will-change-transform" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-champagne-500/10 rounded-full blur-[60px] md:blur-[120px] pointer-events-none md:animate-pulse will-change-transform" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Content Area (6 columns) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-1">
                <span className="text-[9px] sm:text-[10px] font-bold text-champagne-500 tracking-widest uppercase shadow-sm">
                  {introText}
                </span>
            </div>
            
            <h1 className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.25rem] font-sans font-bold text-white leading-[1.2] md:leading-[1.1] tracking-tight drop-shadow-md">
              {restOfH1} <span className="text-secondary drop-shadow-[0_0_20px_rgba(190,127,81,0.5)]">{lastWord}</span>
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-[95%]">
              {heroSubTitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
              <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-[#a66a41] text-white font-bold py-3.5 px-6 rounded-md transition-all shadow-[0_10px_30px_rgba(190,127,81,0.4)] hover:shadow-[0_10px_40px_rgba(190,127,81,0.6)] hover:-translate-y-1 duration-300">
                Get Free SEO Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#case-studies" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#121b28] border border-slate-600 hover:border-champagne-500 hover:text-champagne-500 text-white font-semibold py-3.5 px-6 rounded-md transition-all hover:bg-[#1a2536]">
                View Case Studies
              </a>
            </div>

            {/* Checklist Below Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs sm:text-sm font-medium text-slate-300 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-champagne-500" />
                White-Hat SEO Strategies
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-champagne-500" />
                Dedicated SEO Specialists
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-champagne-500" />
                Monthly Performance Reports
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-champagne-500" />
                Data-Driven SEO Campaigns
              </div>
            </div>

          </div>

          {/* Right UI Card Area (6 columns) */}
          <div className="lg:col-span-6 w-full relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            
            {/* Custom Tailwind UI Dashboard Card - Scaled down for better fit */}
            <div className="relative w-full max-w-[550px] animate-float transform scale-[0.85] sm:scale-95 lg:scale-95 xl:scale-100 origin-center lg:origin-right">
              
              {/* Main Card */}
              <div className="relative rounded-2xl bg-[#0f172a]/70 border border-slate-700/50 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl p-5 overflow-hidden group">
                
                {/* Animated Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-champagne-500/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Card Header */}
                <div className="relative flex items-center justify-between mb-5 pb-3 border-b border-slate-700/60 z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                    </div>
                    <span className="text-slate-300 text-[13px] font-semibold ml-1 tracking-wide">Rank Tracker Pro</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-500/10 text-green-400 px-2.5 py-1 rounded-full text-[10px] font-bold border border-green-500/30 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    LIVE SYNC
                  </div>
                </div>

                {/* Top Stats Row */}
                <div className="relative grid grid-cols-3 gap-3 mb-5 z-10">
                  <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-600/30 hover:bg-slate-800/60 transition-colors">
                    <div className="text-2xl font-black text-white mb-0.5 drop-shadow-md">150<span className="text-champagne-500 text-lg">%+</span></div>
                    <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Traffic Growth</div>
                  </div>
                  <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-600/30 hover:bg-slate-800/60 transition-colors">
                    <div className="text-2xl font-black text-white mb-0.5 drop-shadow-md">500<span className="text-secondary text-lg">+</span></div>
                    <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Sites Optimised</div>
                  </div>
                  <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-600/30 hover:bg-slate-800/60 transition-colors">
                    <div className="text-2xl font-black text-white mb-0.5 drop-shadow-md">#1</div>
                    <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Page Rankings</div>
                  </div>
                </div>

                {/* Keyword List */}
                <div className="relative space-y-2 z-10">
                  
                  {/* Item 1 */}
                  <div className="group/item flex items-center justify-between bg-slate-900/50 p-3 rounded-xl border border-slate-700/50 hover:border-slate-500/50 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 transition-transform duration-300 group-hover/item:translate-x-1">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-500/30 shadow-[inset_0_0_10px_rgba(59,130,246,0.2)]">S</div>
                      <div>
                        <div className="text-white font-semibold text-[13px] mb-0.5">"seo company hyderabad"</div>
                        <div className="text-[10px] text-slate-400 font-medium">B2B Services · 5.4k vol · Rank <span className="text-green-400 font-bold">#1 ↗</span></div>
                      </div>
                    </div>
                    <div className="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-[9px] uppercase tracking-wider font-bold border border-green-500/20">Page 1</div>
                  </div>

                  {/* Item 2 */}
                  <div className="group/item flex items-center justify-between bg-slate-900/50 p-3 rounded-xl border border-slate-700/50 hover:border-slate-500/50 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 transition-transform duration-300 group-hover/item:translate-x-1">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-orange-500/20 text-secondary flex items-center justify-center font-bold text-sm border border-secondary/30 shadow-[inset_0_0_10px_rgba(249,115,22,0.2)]">D</div>
                      <div>
                        <div className="text-white font-semibold text-[13px] mb-0.5">"digital marketing agency"</div>
                        <div className="text-[10px] text-slate-400 font-medium">Marketing · 8.1k vol · Rank <span className="text-green-400 font-bold">#2 ↗</span></div>
                      </div>
                    </div>
                    <div className="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-[9px] uppercase tracking-wider font-bold border border-green-500/20">Page 1</div>
                  </div>

                  {/* Item 3 */}
                  <div className="group/item flex items-center justify-between bg-slate-900/50 p-3 rounded-xl border border-slate-700/50 hover:border-slate-500/50 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 transition-transform duration-300 group-hover/item:translate-x-1">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-champagne-500/20 to-yellow-500/20 text-champagne-500 flex items-center justify-center font-bold text-sm border border-champagne-500/30 shadow-[inset_0_0_10px_rgba(234,179,8,0.2)]">L</div>
                      <div>
                        <div className="text-white font-semibold text-[13px] mb-0.5">"local seo services"</div>
                        <div className="text-[10px] text-slate-400 font-medium">Local Business · 3.2k vol · Rank <span className="text-yellow-400 font-bold">#4 ↗</span></div>
                      </div>
                    </div>
                    <div className="bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded-md text-[9px] uppercase tracking-wider font-bold border border-yellow-500/20">Rising</div>
                  </div>

                </div>
                
                {/* Decorative Blur Element inside Card */}
                <div className="absolute bottom-[-10%] right-[-10%] w-40 h-40 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
              </div>

              {/* Floating Overlap Widget */}
              <div className="absolute -top-6 -right-6 bg-[#1e293b]/90 border border-slate-600 shadow-[0_20px_40px_rgba(0,0,0,0.7)] backdrop-blur-md rounded-xl p-3 w-40 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-champagne-500/20 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-champagne-500 -rotate-45" />
                  </div>
                  <div className="text-[11px] text-slate-300 font-semibold">Organic ROI</div>
                </div>
                <div className="text-xl font-black text-white">+240%</div>
                <div className="w-full h-1 bg-slate-700 rounded-full mt-2 overflow-hidden">
                  <div className="w-[85%] h-full bg-gradient-to-r from-secondary to-champagne-500 rounded-full"></div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

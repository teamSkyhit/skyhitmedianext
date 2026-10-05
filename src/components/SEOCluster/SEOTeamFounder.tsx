"use client";

import React from "react";
import Image from "next/image";

export default function SEOTeamFounder() {
  return (
    <section className="py-6 md:py-8 bg-white relative overflow-hidden border-b border-slate-100">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center relative">
          
          {/* Image Section (Left) */}
          <div className="w-full lg:w-5/12 relative z-20">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgb(0,0,0,0.12)]">
              {/* Note: Fallback to a placeholder if the exact image isn't found */}
              <Image 
                src="/images/chiranjeevi-founder-skyhitmedia.webp" 
                alt="Chiranjeevi - Founder of Skyhit Media" 
                fill 
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#45556C]/80 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-2xl font-bold tracking-tight mb-1">Chiranjeevi</h3>
                <p className="text-champagne-500 font-medium text-sm tracking-wider uppercase">Founder & CEO, Skyhit Media</p>
              </div>
            </div>
          </div>

          {/* Text Section (Right - Overlapping) */}
          <div className="w-full lg:w-8/12 mt-12 lg:mt-0 lg:-ml-24 relative z-30">
            <div className="bg-white/90 backdrop-blur-xl p-10 md:p-16 rounded-[2rem] shadow-[0_20px_40px_rgb(0,0,0,0.05)] border border-slate-100">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-secondary"></div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">A Word from our Founder</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 leading-tight tracking-tight">
                "We built this agency because we were tired of seeing businesses get burned by vanity metrics."
              </h2>
              
              <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed mb-10">
                <p>
                  When I started Skyhit Media, the industry was flooded with agencies promising traffic but delivering zero bottom-line growth. I wanted to build something different—a true performance powerhouse.
                </p>
                <p>
                  Today, we are a 75-member strong in-house team of elite technical SEOs, content strategists, and digital PR experts. We don't outsource. We don't guess. We rely on hard data and technical rigor to ensure that every keyword we rank for translates directly into revenue for your business.
                </p>
              </div>
              
              {/* Signature / Branding */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-8">
                <div>
                  <p className="text-primary font-extrabold text-xl font-serif italic tracking-wide">
                    Chiranjeevi
                  </p>
                </div>
                <div className="text-right">
                   <span className="inline-block bg-sky-50 text-secondary px-4 py-2 rounded-full text-[13px] font-bold tracking-wide">
                     100% In-House Expertise
                   </span>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

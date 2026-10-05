"use client";

import React from "react";
import { Search, Settings, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: <Search className="w-10 h-10 text-champagne-500 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />,
    title: "Competitor Intelligence",
    description: "Deep-dive analysis of your top competitors' channels, content gaps, and ranking strategies to build a roadmap for outperforming them.",
  },
  {
    icon: <Settings className="w-10 h-10 text-champagne-500 mb-6 group-hover:scale-110 group-hover:rotate-90 transition-transform duration-700" />,
    title: "Technical Precision",
    description: "Resolving underlying site errors, optimizing mobile responsiveness, and improving page speeds to ensure flawless search engine crawling.",
  },
  {
    icon: <LinkIcon className="w-10 h-10 text-champagne-500 mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500" />,
    title: "Authority Building",
    description: "Executing ethical outreach, digital PR campaigns, and local citation signals to build domain authority and trust with Google.",
  },
];

export default function SEOMethodology() {
  return (
    <section className="py-8 bg-white relative overflow-hidden">
      {/* Decorative Background Grid & Glows */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#5F6B70 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[10px] font-bold text-secondary tracking-widest uppercase mb-4 block">
            OUR SEO METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a202c] mb-6 tracking-tight">
            A Smarter Approach to Organic Search Growth
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Our methodology moves beyond basic optimization, integrating technical rigor with aggressive authority building.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-primary p-10 rounded-3xl hover:bg-primary/95 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(95,107,112,0.4)] hover:-translate-y-2 border border-transparent hover:border-champagne-500/30"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-champagne-500/10 group-hover:scale-150 transition-all duration-700"></div>
              
              <div className="relative z-10">
                {pillar.icon}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

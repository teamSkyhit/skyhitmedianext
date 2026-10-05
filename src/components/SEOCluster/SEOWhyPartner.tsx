"use client";

import React from "react";
import { Settings2, BarChart3, TrendingUp, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <Settings2 className="w-8 h-8 text-secondary" strokeWidth={1} />,
    title: "Technical Excellence",
    description: "We fix what holds your site back — from crawlability to Core Web Vitals.",
    link: "#"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-secondary" strokeWidth={1} />,
    title: "Data-Driven Strategy",
    description: "We turn data into actionable insights that drive traffic, leads, and revenue.",
    link: "#"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-secondary" strokeWidth={1} />,
    title: "Content That Converts",
    description: "SEO content built for humans and optimized for search intent.",
    link: "#"
  },
  {
    icon: <MapPin className="w-8 h-8 text-secondary" strokeWidth={1} />,
    title: "Transparent Reporting",
    description: "Clear reporting, open communication, and full visibility into our work.",
    link: "#"
  },
];

export default function SEOWhyPartner() {
  return (
    <section className="py-8 lg:py-10 bg-white relative overflow-hidden font-sans border-b border-slate-100">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center"
        >
          <span className="text-[10px] font-bold text-secondary tracking-widest uppercase mb-4">
            OUR PARTNER APPROACH
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#1a202c] mb-6 tracking-tight">
            More Than Rankings. Real Results.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            A data-driven approach. Transparent process. Measurable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-start text-left h-full p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 border border-transparent hover:border-slate-100"
            >
              <div className="mb-6 w-16 h-16 rounded-full border border-secondary/30 flex items-center justify-center bg-white group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300 shadow-sm">
                <div className="group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(reason.icon, { className: "w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" })}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#1a202c] mb-4">
                {reason.title}
              </h3>
              
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6 flex-grow">
                {reason.description}
              </p>
              
              <Link href={reason.link} className="inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-[#a66a41] transition-colors mt-auto group-hover:translate-x-1 duration-300">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

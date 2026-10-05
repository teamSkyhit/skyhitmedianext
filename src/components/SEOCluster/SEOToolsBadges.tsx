"use client";

import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  {
    name: "Google Search Console",
    image: "/images/tool-logo-gsc.svg",
  },
  {
    name: "Screaming Frog",
    image: "/images/tool-logo-screamingfrog.svg",
  },
  {
    name: "Ahrefs",
    image: "/images/tool-logo-ahrefs.svg",
  },
  {
    name: "SEMrush",
    image: "/images/tool-logo-semrush.svg",
  },
  {
    name: "Sitebulb",
    image: "/images/tool-logo-sitebulb.svg",
  },
  {
    name: "BrightEdge",
    image: "/images/tool-logo-brightedge.svg",
  },
];

export default function SEOToolsBadges() {
  return (
    <section className="py-8 bg-slate-50/50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
            OUR TECH STACK
          </p>
          <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#1a202c] mb-16">
            Powered by Industry-Leading Tools
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {tools.map((tool, idx) => (
            <motion.div
              key={`tool-badge-${tool.name}-${idx}`}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.1 }}
              className="group flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Tool Image Logo Box */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-md border border-slate-100 bg-white flex items-center justify-center p-3.5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl overflow-hidden">
                <img
                  src={tool.image}
                  alt={`${tool.name} Brand Logo`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Label */}
              <span className="block mt-4 font-bold text-slate-700 text-sm md:text-base opacity-80 group-hover:opacity-100 group-hover:text-primary transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

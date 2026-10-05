"use client";

import React from 'react';
import { Search, PenTool, Settings, LineChart, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { ProcessStep } from '@/types/seo';

const defaultSteps = [
  { id: 1, title: "Discover", desc: "We audit your website and analyze opportunities.", icon: Search },
  { id: 2, title: "Strategize", desc: "We build a custom technical SEO roadmap.", icon: PenTool },
  { id: 3, title: "Implement", desc: "We fix issues and optimize your site.", icon: Settings },
  { id: 4, title: "Monitor", desc: "We track performance with real-time dashboards.", icon: LineChart },
  { id: 5, title: "Grow", desc: "We scale what works and drive continuous growth.", icon: TrendingUp }
];

const iconsList = [Search, PenTool, Settings, LineChart, TrendingUp];

export default function SEOProcess({ processData }: { processData?: ProcessStep[] }) {
  const displaySteps = processData 
    ? processData.map((step, idx) => ({
        id: idx + 1,
        title: step.title,
        desc: step.description,
        icon: iconsList[idx % iconsList.length]
      }))
    : defaultSteps;

  return (
    <section className="py-8 bg-slate-50/50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
            OUR PROVEN PROCESS
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1a202c]">
            A Clear Process. Powerful Results.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-y-12 gap-x-4 md:flex md:flex-row md:justify-between items-start md:items-center md:gap-0">
            {displaySteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`flex flex-col items-center text-center group md:flex-1 ${idx === displaySteps.length - 1 && displaySteps.length % 2 !== 0 ? 'col-span-2' : ''}`}
                >
                  
                  {/* Step Number */}
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300 shadow-sm">
                    {step.id}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="w-20 h-20 bg-white border border-slate-200 text-[#1a202c] rounded-full flex items-center justify-center mb-8 shadow-md group-hover:border-secondary group-hover:text-white group-hover:bg-secondary group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300">
                    <step.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1a202c] mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed px-4 md:px-6">
                    {step.desc}
                  </p>
                </motion.div>
                
                {/* Arrow connecting steps */}
                {idx < displaySteps.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: (idx * 0.15) + 0.1 }}
                    className="hidden md:flex items-center justify-center text-slate-300 w-16 flex-shrink-0 -mt-20"
                  >
                    <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300" strokeWidth={1.5} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

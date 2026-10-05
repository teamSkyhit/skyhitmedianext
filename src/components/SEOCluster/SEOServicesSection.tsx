"use client";

import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceTab } from '@/types/seo';

const defaultTabContent: ServiceTab[] = [
  {
    title: "Comprehensive Technical SEO Audit",
    desc: "We identify and fix technical issues that prevent your site from ranking. Get a complete breakdown of what's hurting your visibility—and how to fix it.",
    features: [
      "Crawl & indexation audit",
      "Site architecture analysis",
      "Technical issue identification",
      "Prioritized action plan"
    ],
    image: "/images/seo-audit-services-hyderabad.webp",
    alt: "SEO audit services Hyderabad – comprehensive technical website audit and crawl analysis"
  },
  {
    title: "On-Page SEO Optimization",
    desc: "Optimize your content and HTML source code. We ensure every page is perfectly tuned for both search engines and users.",
    features: [
      "Keyword mapping & optimization",
      "Title & meta description tuning",
      "Header tag structure (H1-H6)",
      "Internal linking strategy"
    ],
    image: "/images/on-page-seo-optimization-hyderabad.webp",
    alt: "On-page SEO optimization Hyderabad – keyword mapping, meta tags and content refinement"
  },
  {
    title: "Schema & Structured Data",
    desc: "Help search engines understand your content better and win rich snippets in search results with advanced schema markup.",
    features: [
      "JSON-LD implementation",
      "Organization & Local Business schema",
      "Product & Review markup",
      "FAQ & Article schema"
    ],
    image: "/images/website-seo-performance-report.webp",
    alt: "Website SEO performance report Hyderabad – schema markup and structured data for rich snippets"
  },
  {
    title: "Core Web Vitals Optimization",
    desc: "Improve your page speed and user experience metrics. We optimize LCP, FID, and CLS to meet Google's strict requirements.",
    features: [
      "Image & video optimization",
      "JavaScript & CSS minification",
      "Server response time (TTFB)",
      "Render-blocking resource removal"
    ],
    image: "/images/website-technical-seo-audit.webp",
    alt: "Website technical SEO audit Hyderabad – Core Web Vitals and page speed optimization"
  },
  {
    title: "Indexing & Crawlability",
    desc: "Ensure search engine bots can efficiently discover and crawl your most important pages without wasting crawl budget.",
    features: [
      "Robots.txt optimization",
      "XML Sitemap configuration",
      "Canonical tag management",
      "Fixing broken links & redirects"
    ],
    image: "/images/google-search-console-seo-report.webp",
    alt: "Google Search Console SEO report Hyderabad – indexing, crawlability and sitemap configuration"
  },
  {
    title: "Strategic SEO Consulting",
    desc: "Get expert guidance and a custom roadmap tailored to your specific business goals, industry landscape, and competitors.",
    features: [
      "Competitor analysis",
      "Growth opportunity identification",
      "Algorithm update recovery",
      "Dedicated SEO strategist"
    ],
    image: "/images/seo-consultant-hyderabad.webp",
    alt: "SEO consultant Hyderabad – expert strategy planning and competitor analysis session"
  }
];

export default function SEOServicesSection({ servicesData }: { servicesData?: ServiceTab[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const displayTabs = servicesData || defaultTabContent;

  return (
    <section className="py-8 bg-slate-50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
            TECHNICAL SEO SERVICES
          </p>
          <h2 className="text-3xl md:text-[2.5rem] font-sans font-bold text-[#1a202c]">
            End-to-End Technical SEO That Scales Your Business
          </h2>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 mb-8 pb-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent w-full"
        >
          {displayTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`whitespace-nowrap px-5 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 border ${activeTab === index
                  ? 'bg-white text-primary border-primary shadow-md scale-105'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-800 hover:shadow-sm'
                }`}
            >
              {tab.title}
            </button>
          ))}
        </motion.div>

        {/* Tab Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row"
            >

              {/* Left Illustration */}
              <div className="md:w-1/2 bg-slate-50/50 p-12 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-lg shadow-2xl overflow-hidden bg-white border border-slate-200 group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={displayTabs[activeTab].image}
                    alt={displayTabs[activeTab].alt || displayTabs[activeTab].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#1a202c] mb-4">
                  {displayTabs[activeTab].title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {displayTabs[activeTab].desc}
                </p>

                <ul className="space-y-4 mb-10">
                  {displayTabs[activeTab].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 bg-secondary/20 p-0.5 rounded-full">
                        <Check className="w-3.5 h-3.5 text-secondary" strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

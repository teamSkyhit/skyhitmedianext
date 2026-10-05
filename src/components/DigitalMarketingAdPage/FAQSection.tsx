"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

import { FAQItem } from '@/types/seo';

const defaultFaqs: FAQItem[] = [
  { question: "What is Technical SEO?", answer: "Technical SEO refers to website and server optimizations that help search engine spiders crawl and index your site more effectively." },
  { question: "What tools do you use?", answer: "We use enterprise tools like Google Search Console, Screaming Frog, Ahrefs, Semrush, and Sitebulb." },
  { question: "How long does it take to see results?", answer: "Technical fixes often show results within 4-6 weeks, though complete ranking transformations usually take 3-6 months depending on the industry." },
  { question: "Can you fix Core Web Vitals issues?", answer: "Yes, we specialize in optimizing LCP, FID, and CLS scores across all CMS platforms including WordPress, Shopify, and custom builds." },
  { question: "Do you work with enterprise websites?", answer: "Absolutely. We have experience managing technical SEO for enterprise sites with millions of pages and complex architectures." },
  { question: "Do you provide ongoing support?", answer: "Yes, we offer ongoing retainers to continuously monitor site health, fix new issues, and adapt to Google algorithm updates." }
];

export default function FAQSection({ faqData }: { faqData?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const displayFaqs = faqData || defaultFaqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1a202c]">
            Everything You Need to Know
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          {displayFaqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-md transition-all duration-300 h-fit"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-sm font-bold text-[#1a202c] pr-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-primary">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-4 h-4" strokeWidth={2.5} />
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-sm text-slate-600 leading-relaxed px-6 pb-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

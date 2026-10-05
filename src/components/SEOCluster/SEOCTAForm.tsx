"use client";

import React, { useState } from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const defaultSeoFaqData = [
  {
    question: "Best SEO Company in Hyderabad – Leading Experts in Online Growth",
    sections: [
      {
        texts: [
          "The way customers discover businesses has changed dramatically over the last few years. Whether someone is searching for a product, comparing services, or looking for a trusted local business, their journey almost always begins on Google. If your website isn't appearing on the first page of search results, you're missing valuable opportunities while your competitors capture the traffic, enquiries, and sales.<br/>",
          "Partnering with a professional <a href='/seo-services-hyderabad'><b>SEO Company in Hyderabad</b></a> helps your business build a strong online presence that delivers long-term results. Unlike paid advertising, <b>search engine optimization</b> continues to generate qualified traffic over time, making it one of the most cost-effective <a href='/best-digital-marketing-agency'><b>digital marketing strategies</b></a> for sustainable business growth.<br/>",
          "At <a href='/'><b>SKYHIT Media</b></a>, we help businesses improve their online visibility through customised <a href='/search-engine-optimization-agency'><b>SEO strategies</b></a> designed around their industry, competition, and business objectives. Rather than focusing only on rankings, we build SEO campaigns that attract the right audience, increase qualified enquiries, and support measurable business growth.",
        ],
      },
      {
        headings: ["What Does an SEO Company in Hyderabad Do?"],
        texts: [
          "A successful <b>SEO campaign</b> involves much more than adding keywords to a website. Search engines evaluate hundreds of factors before deciding which websites deserve to rank on the first page. A professional <b>SEO company</b> develops a complete optimisation strategy that improves your website's visibility, user experience, technical performance, and content quality.<br/>",
          "Our <b>SEO services</b> include comprehensive <b>keyword research</b>, <a href='/seo-audit-services-hyderabad'><b>technical SEO audits</b></a>, <b>on-page optimisation</b>, content strategy, <a href='/local-seo-services-hyderabad'><b>local SEO</b></a>, <b>Google Business Profile optimisation</b>, website performance improvements, and ethical <b>link-building strategies</b>. Every activity is designed to help your business achieve higher search rankings while providing a better experience for your website visitors.<br/>",
          "<b>SEO</b> is an ongoing process that requires continuous monitoring and optimisation. As search algorithms evolve and competitors improve their websites, your SEO strategy must adapt to maintain and improve your rankings. Our team regularly analyses website performance, tracks keyword movements, identifies new opportunities, and implements data-driven improvements that contribute to long-term success.",
        ],
      },
      {
        headings: ["Why Choose SKYHIT Media as Your SEO Company in Hyderabad?"],
        texts: [
          "Choosing an <b>SEO partner</b> is about more than finding a company that promises higher rankings. You need a team that understands your business, follows <b>ethical SEO practices</b>, and focuses on measurable outcomes rather than vanity metrics.<br/>",
          "At <b>SKYHIT Media</b>, every SEO strategy is tailored to your business goals. We begin by understanding your industry, analysing your competitors, identifying customer search behaviour, and building a roadmap that aligns with your long-term growth objectives. Our specialists combine <b>technical expertise</b> with <b>high-quality content</b> and performance analysis to create campaigns that improve visibility, increase <b>organic traffic</b>, and generate qualified business enquiries.<br/>",
          "Transparency is central to our approach. We provide regular <b>performance reports</b>, explain the work completed, and continuously optimise campaigns using real data. This allows you to clearly understand how your <b>SEO investment</b> contributes to your business growth.",
        ],
      },
      {
        headings: ["Industries We Help Grow Through SEO"],
        texts: [
          "Every industry has unique challenges, customer behaviour, and search patterns. That's why we never apply the same SEO strategy to every business.<br/>",
          "Our team has experience creating <b>SEO strategies</b> for businesses across <b>real estate</b>, <b>healthcare</b>, <b>education</b>, <a href='/ecommerce-seo-hyderabad'><b>ecommerce</b></a>, <b>hospitality</b>, <b>finance</b>, <b>manufacturing</b>, <b>technology</b>, professional services, and local businesses throughout Hyderabad. Whether your goal is generating <b>local enquiries</b>, increasing <b>ecommerce sales</b>, improving <b>brand visibility</b>, or attracting <b>B2B leads</b>, we create customised SEO campaigns that align with your industry and target audience.<br/>",
          "By combining <b>technical optimisation</b>, high-quality content, <b>local SEO</b>, and continuous performance improvements, we help businesses establish stronger online authority and maintain sustainable organic growth.",
        ],
      },
      {
        headings: ["Our SEO Process"],
        texts: [
          "Successful SEO requires a structured approach built on research, planning, execution, and continuous improvement. Every campaign begins with a detailed <a href='/seo-audit-services-hyderabad'><b>website audit</b></a> that identifies technical issues, content gaps, keyword opportunities, and competitor strengths.<br/>",
          "Based on these insights, we develop a customised <b>SEO roadmap</b> that prioritises activities capable of delivering measurable business impact. Our specialists then optimise your website, improve technical performance, create valuable content, strengthen <b>internal linking</b>, and build your online authority through <b>ethical SEO practices</b>.<br/>",
          "SEO is never a one-time activity. We continuously monitor rankings, organic traffic, user behaviour, and conversion performance, allowing us to refine strategies and maximise long-term growth as your business evolves.",
        ],
      },
      {
        headings: ["Why Businesses Trust SKYHIT Media"],
        texts: [
          "Businesses choose <b>SKYHIT Media</b> because we believe successful SEO should generate measurable business outcomes rather than simply improve rankings. Every recommendation we make is supported by research, <b>performance data</b>, and proven optimisation techniques.<br/>",
          "Our commitment to transparency, <b>ethical SEO</b>, customised strategies, and continuous improvement enables businesses to compete more effectively in search results while building stronger relationships with their customers. We focus on creating <b>sustainable growth</b> through search engine optimisation that supports your business today and continues delivering value well into the future.",
        ],
      },
    ],
  },
];

function SEOAccordion({ seoFaqData }: { seoFaqData: any[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderHTML = (html: string) => ({ __html: html });

  return (
    <div className="py-10 px-6 md:px-12 lg:px-24">
      <div className="space-y-4 max-w-[1148px] mx-auto">
        {seoFaqData.map((faq, index) => (
          <div
            key={index}
            className="bg-[#4A555A] border-[2px] border-secondary shadow-md transition-all duration-300 rounded-[42px]"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-[14px] font-medium text-white text-left sm:text-lg"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{faq.question}</span>
              <span className={`text-[16px] transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>▼</span>
            </button>

            {activeIndex === index && (
              <div className="px-6 pt-1 pb-4 text-black text-base bg-white border-t-[1px] border-secondary rounded-b-[42px] animate-[fadeIn_0.2s_ease]">
                {faq.sections.map((section: any, idx: number) => (
                  <div key={idx} className="mb-4">
                    {section.headings?.map((heading: any, hIdx: number) => (
                      <h4 key={hIdx} className="font-semibold text-lg mt-4" dangerouslySetInnerHTML={renderHTML(heading)} />
                    ))}
                    {section.texts?.map((text: any, tIdx: number) => (
                      <p key={tIdx} className="mt-2 leading-relaxed" dangerouslySetInnerHTML={renderHTML(text)} />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SEOCTAForm({ seoFaqData = defaultSeoFaqData }: { seoFaqData?: any[] }) {
  return (
    <>
      {/* Accordion Content Section */}
      <SEOAccordion seoFaqData={seoFaqData} />


      {/* CTA Form Section */}
      <section className="py-8 bg-[#0a0f18] relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Side: Rocket & Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start"
            >
              <div className="w-20 h-20 bg-primary/50 rounded-full flex items-center justify-center mb-8 border border-primary/50">
                <Rocket className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-[2.5rem] font-sans font-bold text-white mb-6 leading-tight">
                Ready to Dominate Search Rankings?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
                Get your free technical SEO audit and discover opportunities to grow your traffic, leads, and revenue.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full border border-secondary flex items-center justify-center">
                    <svg className="w-3 h-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  In-depth Website Analysis
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full border border-secondary flex items-center justify-center">
                    <svg className="w-3 h-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  Actionable Recommendations
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full border border-secondary flex items-center justify-center">
                    <svg className="w-3 h-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  1-3 Day Delivery
                </li>
              </ul>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-8 md:p-10 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>

                <h3 className="text-2xl font-bold text-[#1a202c] mb-6 relative z-10">
                  Get Your Free SEO Audit
                </h3>

                <form className="space-y-4 relative z-10">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3.5 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-slate-700"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Work Email"
                      className="w-full px-4 py-3.5 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-slate-700"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      placeholder="Website URL"
                      className="w-full px-4 py-3.5 rounded-md bg-slate-50 border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-slate-700"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-[#a66a41] text-white font-bold py-4 px-6 rounded-md transition-all shadow-[0_10px_30px_rgba(190,127,81,0.3)] hover:shadow-[0_10px_40px_rgba(190,127,81,0.5)] hover:-translate-y-1 mt-4 group"
                  >
                    Get My Free Audit <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>

                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}



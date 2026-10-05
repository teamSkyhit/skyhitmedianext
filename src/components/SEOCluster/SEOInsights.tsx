"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    category: "Technical SEO",
    title: "Core Web Vitals: The Ultimate Optimization Guide",
    date: "May 12, 2024",
    readTime: "8 min read",
    image: "/images/seo-audit-services-hyderabad.webp",
    alt: "SEO audit services Hyderabad – technical website audit report",
    link: "#"
  },
  {
    category: "SEO Audits",
    title: "Technical SEO Audit Checklist [2024 Edition]",
    date: "May 5, 2024",
    readTime: "12 min read",
    image: "/images/technical-seo-services-hyderabad.webp",
    alt: "Technical SEO services Hyderabad – comprehensive site audit checklist",
    link: "#"
  },
  {
    category: "Schema",
    title: "How Schema Markup Boosts Your Rankings",
    date: "April 21, 2024",
    readTime: "7 min read",
    image: "/images/on-page-seo-optimization-hyderabad.webp",
    alt: "On-page SEO optimization Hyderabad – schema markup and content strategy",
    link: "#"
  },
  {
    category: "Crawlability",
    title: "Fix Crawl Errors & Improve Indexation",
    date: "April 10, 2024",
    readTime: "10 min read",
    image: "/images/keyword-research-seo-hyderabad.webp",
    alt: "Keyword research SEO Hyderabad – crawl error analysis and indexation fix",
    link: "#"
  }
];

export default function SEOInsights() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
            SEO RESOURCES
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1a202c]">
            Insights to Help You Grow
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((post, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="h-40 w-full bg-slate-900 relative overflow-hidden">
                <Image src={post.image} alt={post.alt || post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-[#1a202c] mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="text-xs text-slate-500 font-medium mb-6">
                  {post.date} • {post.readTime}
                </div>
                <Link href={post.link} className="mt-auto text-primary font-semibold text-sm inline-flex items-center gap-1.5 hover:text-primary">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary">
            View All Resources <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

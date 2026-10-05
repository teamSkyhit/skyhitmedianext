"use client";

import React, { useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ravali Ravva",
    company: "Client",
    review: "We were specifically looking for a Google Partner agency in Hyderabad, and this team did an excellent job. Their expertise in Google Ads helped us generate quality leads consistently.",
    rating: 5,
    initials: "RR",
    color: "bg-primary",
    img: ""
  },
  {
    name: "Sri Kanth",
    company: "Client",
    review: "Very professional team in Hyderabad. Being a certified Google Partner and Meta Partner, they have deep knowledge of performance marketing and helped us scale our campaigns effectively.",
    rating: 5,
    initials: "SK",
    color: "bg-purple-600",
    img: ""
  },
  {
    name: "Satya",
    company: "Client",
    review: "One of the best marketing companies in India! They provide end to end support and help grow business.",
    rating: 5,
    initials: "S",
    color: "bg-green-600",
    img: ""
  },
];

export default function SEOVideoTestimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
            WHAT OUR CLIENTS SAY
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1a202c]">
            Trusted by Businesses Worldwide
          </h2>
        </div>

        <div className="relative flex items-center justify-center group">
          
          <button 
            onClick={scrollLeft}
            className="md:hidden absolute -left-2 sm:-left-6 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-primary shadow-md hover:bg-slate-50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex md:grid md:grid-cols-3 gap-6 w-full items-stretch overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className={`bg-white p-8 rounded-xl shadow-sm flex flex-col relative transition-all min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center ${
                  idx === 1 ? 'border-2 border-primary shadow-md md:scale-105 z-10' : 'border border-slate-200'
                }`}
              >
                
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary mb-6 fill-primary rotate-180" />
                
                {/* Review Text */}
                <p className="text-sm text-[#1a202c] font-medium leading-relaxed mb-8 flex-grow">
                  {testimonial.review}
                </p>
                
                {/* Person Info */}
                <div className="flex items-center gap-4 mb-6">
                  {testimonial.img ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden relative border border-slate-200 flex-shrink-0">
                      <Image src={testimonial.img} alt={testimonial.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${testimonial.color}`}>
                      {testimonial.initials}
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-bold text-[#1a202c]">{testimonial.name}</h4>
                    <p className="text-[10px] text-slate-500 font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>

              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="md:hidden absolute -right-2 sm:-right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-primary shadow-md hover:bg-slate-50"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <div className="w-6 h-1.5 rounded-full bg-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
        </div>

      </div>
    </section>
  );
}

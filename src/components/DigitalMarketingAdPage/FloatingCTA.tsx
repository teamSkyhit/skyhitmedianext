"use client";

import { MessageCircle, PhoneCall, MessageSquare } from 'lucide-react';

interface FloatingCTAProps {
  setIsFloatingFormActive: (active: boolean) => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ setIsFloatingFormActive }) => {
  return (
    <div className="fixed z-[100] flex gap-2 transition-all duration-300
                    bottom-4 left-4 right-4 flex-row bg-white/95 backdrop-blur-xl p-2 rounded-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                    md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:flex-col md:bg-transparent md:p-0 md:border-none md:shadow-none">
      {/* Get Quote / Form Trigger */}
      <button
        onClick={() => setIsFloatingFormActive(true)}
        className="bg-champagne-500 hover:bg-champagne-600 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:scale-105
                   py-3.5 px-2 rounded-xl flex-1 text-[11px] leading-none shadow-champagne-500/30
                   md:py-3 md:px-5 md:rounded-l-full md:flex-none md:text-sm md:shadow-lg md:animate-pulse"
        aria-label="Get a free quote"
        title="Get Free Quote"
      >
        <MessageSquare className="w-[14px] h-[14px] md:w-[15px] md:h-[15px] fill-current opacity-80" strokeWidth={1} /> 
        <span className="whitespace-nowrap">Get Quote</span>
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919030279661?text=Hi%20SKYHIT%20Media%2C%20I%20am%20interested%20in%20digital%20marketing%20services%20for%20my%20Hyderabad%20business"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:scale-105
                   py-3.5 px-2 rounded-xl flex-1 text-[11px] leading-none shadow-[#25D366]/30
                   md:py-3 md:px-4 md:rounded-l-full md:flex-none md:text-sm md:shadow-lg"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-[14px] h-[14px] md:w-[15px] md:h-[15px]" strokeWidth={2} /> 
        <span className="whitespace-nowrap">WhatsApp</span>
      </a>

      {/* Call Now Button */}
      <a
        href="tel:+919030279661"
        className="bg-secondary hover:opacity-90 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:scale-105
                   py-3.5 px-2 rounded-xl flex-1 text-[11px] leading-none shadow-secondary/30
                   md:py-3 md:px-4 md:rounded-l-full md:flex-none md:text-sm md:shadow-lg"
        aria-label="Call SKYHIT Media now"
        title="Call Now"
      >
        <PhoneCall className="w-[14px] h-[14px] md:w-[15px] md:h-[15px]" strokeWidth={2} /> 
        <span className="whitespace-nowrap">Call Now</span>
      </a>
    </div>
  );
};

export default FloatingCTA;

"use client";

import Image from "next/image";

const clients = [
  { src: "/images/clients-kia.webp", alt: "Kia" },
  { src: "/images/clients-mg-motor.webp", alt: "MG Motor" },
  { src: "/images/clients-hpcl.webp", alt: "HPCL" },
  { src: "/images/clients-indian-oil.webp", alt: "Indian Oil" },
  { src: "/images/clients-golddrop.webp", alt: "Gold Drop" },
];

export default function TrustBadges() {
  return (
    <section className="py-10 bg-white border-b border-slate-100 overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-slate-200"></div>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Trusted By Growing Brands & Market Leaders</p>
          <div className="h-[1px] w-12 bg-slate-200"></div>
        </div>
      </div>

      {/* Global Marquee Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-clients {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-180px * 5)); }
        }
        .animate-scroll-clients {
          animation: scroll-clients 30s linear infinite;
          display: flex;
          width: calc(180px * 10);
        }
        .animate-scroll-clients:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[150px] before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[150px] after:bg-gradient-to-l after:from-white after:to-transparent pb-4">
        <div className="animate-scroll-clients flex items-center">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="w-[180px] flex-shrink-0 flex items-center justify-center px-4">
              <Image 
                src={client.src} 
                alt={client.alt} 
                width={120} 
                height={60} 
                className="object-contain w-auto h-12 transition-all duration-300 cursor-pointer" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

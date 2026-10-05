"use client";

import Image from 'next/image';

const awards = [
  { name: "Clutch", title: "Top SEO Agency", year: "2024", image: "/images/clutch-desktop.png" },
  { name: "upcity", title: "Top Performer", year: "2023", image: "/images/upcity-desktop.png" },
  { name: "SEMRUSH", title: "Certified Agency Partner", year: "", image: "/images/BADGE ICON.png" },
  { name: "Google Partner", title: "Premier 2024", year: "", image: "/images/skyhit-google-partner.png" },
  { name: "The Manifest", title: "Most Reviewed", year: "2024", image: "/images/BADGE ICON.png" }
];

export default function SEOAwards() {
  return (
    <section className="py-8 bg-slate-50/50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border border-slate-200 rounded-xl p-10 shadow-sm">
        
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
            AWARDS & RECOGNITION
          </p>
          <h3 className="text-xl md:text-3xl font-bold text-[#1a202c] mb-12">
            Recognized for Excellence
          </h3>

          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-16 text-left">
            {awards.map((award, idx) => (
              <div key={idx} className={`flex items-start sm:items-center gap-2 sm:gap-4 ${idx === awards.length - 1 && awards.length % 2 !== 0 ? 'col-span-2 md:col-span-1 md:flex-initial mx-auto md:mx-0' : ''}`}>
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-300 text-xs shadow-sm bg-white overflow-hidden relative">
                  <Image src={award.image} alt={award.name} fill className="object-contain p-2" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-[#1a202c] text-sm">{award.name}</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">
                    {award.title} <br /> {award.year && <span className="text-slate-400">{award.year}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

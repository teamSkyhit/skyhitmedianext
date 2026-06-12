"use client";

import { memo, useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowHeader from "./ArrowHeader";
import './ServiceSection.css';

// Load GIF only when it enters the viewport — avoids downloading 3.3MB of GIFs on page load
const LazyGif = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLoaded(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Strip next/image query params — GIFs must be served raw
  const rawSrc = src.split('?')[0];

  return (
    <div ref={ref} className="w-12 h-12 flex items-center justify-center">
      {loaded ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={rawSrc} alt={alt} width={48} height={48} className="w-12 h-12 object-contain" loading="lazy" decoding="async" />
      ) : (
        <div className="w-12 h-12 bg-gray-200 rounded animate-pulse" />
      )}
    </div>
  );
};

const services = [
  { icon: "/images/digital_marketing_gif-skyhitmedia.gif", title: "Digital Marketing", link: "/best-digital-marketing-agency" },
  { icon: "/images/webdesign_gif-skyhitmedia.gif", title: "Website Design & Development", link: "/website-design-and-development-services" },
  { icon: "/images/performance_gif-skyhitmedia.gif", title: "Performance Marketing", link: "/Performance-marketing-agency" },
  { icon: "/images/seo_gif-skyhitmedia.gif", title: "Search Engine Optimization (SEO)", link: "/search-engine-optimization-agency" },
  { icon: "/images/social_media_gif-skyhitmedia.gif", title: "Social Media Marketing (SMM)", link: "/social-media-marketing-agency" },
  { icon: "/images/ppc_gif-skyhitmedia.gif", title: "Pay-Per-Click Advertising (PPC)", link: "/pay-per-click-advertising-agency" },
  { icon: "/images/graphic_designing_gif-skyhitmedia.gif", title: "Branding & Graphic Design", link: "/branding-and-graphic-design-agency" },
  { icon: "/images/influencer_gif-skyhitmedia.gif", title: "Influencer Marketing", link: "/influencer-marketing-agency" },
  { icon: "/images/analytics-reporting-gif-skyhitmedia.gif", title: "Analytics & Reporting", link: "/analytics-and-reporting-agency" },
  { icon: "/images/orm-gif-skyhitmedia.gif", title: "Online Reputation Management (ORM)", link: "/online-reputation-management-agency" },
  { icon: "/images/whatsapp-gif-skyhitmedia.gif", title: "Whatsapp Marketing", link: "/whatsapp-marketing-agency" },
  { icon: "/images/cyber-security-gif-skyhitmedia.gif", title: "Cyber Security", link: "/cyber-security-services" },
];

const ServicesSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <div className="text-[#7D4E28] font-semibold mb-4">
            <ArrowHeader title="OUR BEST SERVICES" />
          </div>
          <h3 className="text-[20px] md:text-[36px] lg:text-[52px] font-content font-bold text-[#774635] mb-2">
            Best Digital Marketing Agency in Hyderabad
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-6 lg:gap-4 xl:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 group hover:shadow-lg transition-all duration-300 flex flex-col justify-between
                ${index % 2 === 0 ? "lg:bg-[#F5F3EE] lg:text-gray-800" : "lg:bg-[#4A5568] lg:text-white"}
                ${Math.floor(index / 3) % 2 === 0 ? "md:bg-[#F5F3EE] md:text-gray-800" : "md:bg-[#4A5568] md:text-white"}
                ${index % 4 === 0 || index % 4 === 3 ? "bg-[#F5F3EE] text-gray-800" : "bg-[#4A5568] text-white"}`}
            >
              <div className="h-12 mb-4 flex items-left justify-left">
                <LazyGif src={service.icon} alt={`${service.title} Icon`} />
              </div>
              <h4 className="text-xs sm:text-base xl:text-lg leading-5 font-medium mb-4 text-left">
                <Link href={service.link} className="hover:underline">{service.title}</Link>
              </h4>
              <div className="mt-auto">
                <Link href={service.link} className="flex items-center font-medium text-sm" aria-label={`Read more about ${service.title}`}>
                  <span className="sr-only">{service.title}: </span>
                  Read More
                  <Image src="/images/logo-element-1.webp" alt="Read more arrow" className="w-4 h-4 ml-1" loading="lazy" width={16} height={16} unoptimized />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);

"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function Counter({
  end,
  duration = 2000,
  suffix = "",
  isFloat = false,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  isFloat?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(easeOutQuart * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  const formattedCount = isFloat
    ? (count / 10).toFixed(1)
    : count >= 1000
    ? count.toLocaleString()
    : count;

  return (
    <span ref={ref} className="text-inherit">
      {formattedCount}{suffix}
    </span>
  );
}

const metrics = [
  { end: 10, suffix: "+", label: "Years of SEO Excellence", isFloat: false },
  { end: 1200, suffix: "+", label: "Projects Completed", isFloat: false },
  { end: 500, suffix: "M+", label: "Organic Impressions", isFloat: false },
  { end: 250, suffix: "%+", label: "Avg. Traffic Growth", isFloat: false },
  { end: 98, suffix: "%", label: "Client Retention Rate", isFloat: false }
];

export default function SEOImpactNumbers() {
  return (
    <section className="bg-primary relative overflow-hidden py-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-4 text-center">
          {metrics.map((metric, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col items-center justify-center flex-1 ${i === 0 ? '' : 'lg:border-l border-white/20'}`}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-sm">
                <Counter
                  end={metric.end}
                  suffix={metric.suffix}
                  isFloat={metric.isFloat}
                  duration={2000 + i * 200}
                />
              </div>
              <div className="text-champagne-500 font-bold text-[11px] uppercase tracking-[0.15em]">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

"use client";

import { memo, useEffect, useState } from "react";
import { Users, Globe, MessageSquare } from "lucide-react";
import ArrowHeader from "./ArrowHeader";

const stats = [
  { number: "100+", label: "Our Loyal Clients", icon: <Users size={42} style={{ color: "#be7f51" }} /> },
  { number: "260+", label: "Digital Products", icon: <Globe size={42} style={{ color: "#be7f51" }} /> },
  { number: "150+", label: "Expert Consultants", icon: <MessageSquare size={42} style={{ color: "#be7f51" }} /> },
];

const WhyChooseUsSection = () => {
  const [countValues, setCountValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const targets = stats.map(s => parseInt(s.number.replace('+', ''), 10));
    const interval = setInterval(() => {
      setCountValues(prev =>
        prev.map((count, i) => count < targets[i] ? Math.min(count + Math.ceil(targets[i] / 100), targets[i]) : targets[i])
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#5F6B70] py-8 relative">
      <div className="container mx-auto px-6">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat opacity-10"
          style={{ backgroundImage: 'url("/images/Clip%20path%20group.png")' }}
        />
        <div className="text-center mb-4 z-50">
          <ArrowHeader title="Why Choose Us" />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/4 text-white">
            <h4 className="text-[25.6px] md:text-[18.4px] lg:text-[32px] font-medium mb-3 text-center md:text-left lg:text-start whitespace-normal">
              We Have <span className="text-[#BE7F51] whitespace-normal">10 Years</span><br />of Experience
            </h4>
            <p className="text-[12.96px] text-white leading-relaxed text-center md:text-start md:text-[11.34px] lg:text-start">
              &ldquo;With 10+ years of experience, we deliver proven digital marketing strategies that drive long-term success.&rdquo;
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 w-full md:w-3/4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white flex flex-col justify-between items-center md:gap-4 p-2 lg:p-8 md:p-8 rounded-lg text-center"
              >
                <span className="text-center text-[20.8px] md:text-4xl">{stat.icon}</span>
                <span className="text-[28.8px] md:text-6xl mb-2 block text-[#5F6B70] font-semibold">{countValues[index]}+</span>
                <span className="text-[9.6px] md:text-base lg:text-2xl text-[#7F8C91] font-medium lg:w-[60%]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhyChooseUsSection);

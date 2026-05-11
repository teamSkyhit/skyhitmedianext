"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, image, title, description, link }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const checkOverflow = () => {
    if (textRef.current) {
      const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight);
      const maxHeight = lineHeight * 4;
      setIsOverflowing(textRef.current.scrollHeight > maxHeight);
    }
  };

  useEffect(() => {
    checkOverflow();
    const observer = new ResizeObserver(() => checkOverflow());
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, [description]);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-200 flex flex-col items-center">
      {/* Icon and Image Section */}
      <div className="flex items-start justify-around w-full mb-4">
        {/* Left Icon */}
        <div className="w-28 h-16 flex items-center mt-[55px]">
          <Image src={icon} alt={title} width={60} height={60} className="w-full h-full object-contain" loading="lazy" decoding="async" unoptimized />
        </div>

        {/* Right Image */}
        <div className="w-33 h-22 ml-4 relative">
          <Image src={image} alt={title} width={200} height={150} sizes="(max-width: 768px) 150px, 200px" loading="lazy" decoding="async" unoptimized />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg text-[#774635] mb-2 text-left text-[19px] leading-[24.4px] font-medium">
        <a href={link} className="hover:underline">
          {title}
        </a>
      </h3>

      {/* Description and See More/See Less Button */}
      <p ref={textRef} className="text-gray-600 text-sm text-left" style={{ fontSize: "18px", lineHeight: "32.4px", fontWeight: 500 }}>
        {showFullText ? description : description.slice(0, 100) + "..."}{" "}
        {isOverflowing && (
          showFullText ? (
            <button
              onClick={() => setShowFullText(false)}
              className="text-[#774635] text-sm font-medium hover:underline focus:outline-none"
              style={{ fontSize: "18px", lineHeight: "32.4px", fontWeight: 500 }}
            >
              See Less
            </button>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#774635] text-sm font-medium hover:underline focus:outline-none"
              style={{ fontSize: "18px", lineHeight: "32.4px", fontWeight: 500 }}
            >
              See More...
            </a>
          )
        )}
      </p>
    </div>
  );
};

export default ServiceCard;

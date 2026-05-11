"use client";

import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  autoplaySpeed?: number;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos, autoplaySpeed = 25 }) => {
  // Use CSS marquee animation — no react-slick dependency needed
  const animDuration = `${logos.length * autoplaySpeed * 0.1}s`;
  const duplicateLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-[100%] max-w-[100%] py-6 overflow-hidden">
      <div
        className="flex animate-marquee whitespace-nowrap"
        style={{ animationDuration: animDuration }}
      >
        {duplicateLogos.map((logo, index) => (
          <div key={index} className="inline-flex px-2 flex-shrink-0" style={{ width: "80px" }}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={80}
              className="object-contain"
              style={{ width: "80px", height: "80px" }}
              loading="lazy"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;

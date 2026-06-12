"use client";

import { useEffect, useState, memo } from "react";
import Image from "next/image";
import ArrowHeader from "./ArrowHeader";

const logos = [
  { img: "/images/skyhit-meta-business-partner.webp", alt: "Meta Business Partner", link: "#" },
  { img: "/images/skyhit-shopify.webp", alt: "Shopify partner", link: "#" },
  { img: "/images/skyhit-jio-hotstar.webp", alt: "JioHotstar partner", link: "#" },
  { img: "/images/skyhit-wati-partner.webp", alt: "Wati partner", link: "#" },
  { img: "/images/skyhit-google-partner.webp", alt: "Google Partner", link: "https://www.google.com/partners/agency?id=7441878234" },
];

const bubbleColors = ["#c7a48c", "#b88972", "#9f6f58", "#d8b5a2"];

const TrustedSection = () => {
  const [size, setSize] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 480) return 230;
      if (window.innerWidth < 768) return 280;
    }
    return 350;
  });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const resize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth < 480) setSize(230);
        else if (window.innerWidth < 768) setSize(280);
        else setSize(350);
      }, 100);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      clearTimeout(timeoutId);
    };
  }, []);

  /* ===== RESPONSIVE VALUES ===== */
  const logoSize = size * 0.32;
  const orbitSize = size * 0.78;
  const radius = size / 2 + logoSize / 2 - 8;
  const bubbleRadius = orbitSize / 2;

  return (
    <section className="relative bg-[#ffffff] overflow-hidden">

      <div className="flex flex-col md:flex-row items-center">

        {/* ================= RIGHT CONTENT (FIRST IN MOBILE) ================= */}
        <div className="w-full md:w-1/2 order-1 md:order-2 px-6 md:px-12 py-12 md:py-28 text-center md:text-left">
          <ArrowHeader title="About SkyHit Media" />

          <h2 className="text-[22px] md:text-3xl lg:text-4xl font-bold text-[#774635] leading-snug mb-4">
            Trusted <br />
            Digital Marketing Agency in Hyderabad
          </h2>

          <p className="text-[#7D4E28] text-sm md:text-lg mb-3">
            Committed to delivering high-impact digital marketing solutions
          </p>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Skyhit Media is a leading Digital Marketing Agency in Hyderabad,
            dedicated to helping businesses grow online.
          </p>

          <a
            href="/about"
            className="bg-[#9B5E35] text-white px-6 py-3 rounded-full font-medium text-sm md:text-base hover:bg-[#7D4E28] transition"
          >
            Discover More
          </a>
        </div>

        {/* ================= LEFT IMAGE + CIRCLE ================= */}
        <div className="relative w-full md:w-1/2 order-2 md:order-1 flex justify-center items-center min-h-[400px] md:min-h-[600px]">
          {/* Full Width Background Image */}
          <Image
            src="/images/2nd-section-skyhit-01.webp"
            alt="Skyhit Media digital marketing team"
            fill
            className="object-cover object-center"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/40 md:bg-transparent" />

          {/* Circle Wrapper */}
          <div  
            className="relative z-10 flex items-center justify-center"
            style={{ width: size * 1.4, height: size * 1.4 }}
          > 

            {/* Background Circle Shadow */}
            <div
              className="absolute rounded-full bg-[#faf6f2] shadow-2xl flex items-center justify-center"
              style={{
                width: size * 1.4,
                height: size * 1.4,
              }}
            />

            {/* Orbit Wrapper //*/}
            <div
              className="relative flex items-center justify-center"
              style={{ width: size, height: size }}
            >

              {/* Dashed Circle */}
              <div
                className="absolute rounded-full border-2 border-dashed border-[#c7a48c] orbit"
                style={{ width: orbitSize, height: orbitSize }}
              />

              {/* Bubbles */}
              <div className="absolute inset-0 orbit">
                {[30, 140, 230, 320].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = bubbleRadius * Math.cos(rad);
                  const y = bubbleRadius * Math.sin(rad);

                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      }}
                    >
                      <div className="counter">
                        <div
                          className="rounded-full shadow-md"
                          style={{
                            width: size * 0.035,
                            height: size * 0.035,
                            background: bubbleColors[i % bubbleColors.length],
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Logos */}
              <div className="absolute inset-0 orbit">
                {logos.map((logo, i) => {
                  const angle = (360 / logos.length) * i - 90;
                  const rad = (angle * Math.PI) / 180;

                  const x = radius * Math.cos(rad);
                  const y = radius * Math.sin(rad);

                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      }}
                    >
                      <div className="counter">
                        <a
                          href={logo.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
                          style={{ width: logoSize, height: logoSize }}
                        >
                          <Image
                            src={logo.img}
                            alt={logo.alt}
                            width={100}
                            height={100}
                            sizes="(max-width: 768px) 70px, 100px"
                            loading="lazy"
                            decoding="async"
                            className="max-w-[70%] h-auto object-contain"
                          />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Center Logo */}
              <div
                className="absolute bg-white rounded-full flex items-center justify-center p-4 border-[1px] border-[#BE7F51]"
                style={{
                  width: logoSize * 1.3,
                  height: logoSize * 1.3,
                  boxShadow: "0 12px 35px rgba(190, 127, 81, 0.35)",
                }}
              >
                <Image
                  src="/images/skyhitmedia-middle-logo.webp"
                  alt="Skyhit Media"
                  width={150}
                  height={150}
                  loading="lazy"
                  decoding="async"
                  className="max-w-full object-contain"
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
    @keyframes orbitRotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes counterRotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    .orbit { animation: orbitRotate 75s linear infinite; }
    .counter { animation: counterRotate 75s linear infinite; }
  `}</style>

    </section>
  );
};

export default memo(TrustedSection);

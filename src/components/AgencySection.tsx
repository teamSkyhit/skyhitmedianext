"use client";

import { useState, memo } from "react";
import Image from "next/image";

const AgencyExcitedSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="container mx-auto my-8 relative h-[220px] md:h-[450px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/image-2036.webp"
            alt="Team collaboration"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            loading="lazy"
            unoptimized
          />
        </div>

        <div className="absolute top-0 right-0 h-full">
          <div className="relative h-full">
            <Image
              src="/images/side%20vec.png"
              alt="Vector design"
              width={500}
              height={600}
              className="h-full w-auto object-cover"
              loading="lazy"
              unoptimized
            />

            <div className="absolute inset-0 flex flex-row items-center justify-end text-white px-6 md:px-12 translate-x-0 transition-transform duration-700">
              <div className="relative flex flex-col gap-4 md:gap-8 items-center">
                <div className="relative flex items-center justify-center">
                  <span className="absolute rounded-full w-20 h-20 md:w-28 md:h-28 animate-wave bg-gray-600/50" />
                  <button
                    className="relative z-10 bg-gray-700/90 rounded-full p-2 md:p-6 lg:p-12 hover:bg-gray-600 transition duration-300"
                    aria-label="Play video"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <svg className="h-4 w-4 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                <p className="text-[12.08px] md:text-2xl lg:text-4xl font-medium leading-[17.2px] md:leading-[40px] lg:leading-[60px] text-left">
                  We are<br />excited to<br />help your<br />business<br />grow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg overflow-hidden w-[90%] max-w-3xl relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
            >✕</button>
            <iframe
              src="/images/Best-DigitaI-Marketing-Agency-skyhit-media.mp4"
              width="100%"
              height="500"
              allow="autoplay"
              title="Agency Video"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default memo(AgencyExcitedSection);

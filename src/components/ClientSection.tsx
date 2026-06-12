"use client";

import { useEffect, useRef, memo } from "react";
import Image from "next/image";

const clients = [
  "/images/clients-kia.webp",
  "/images/clients-venkat-fitness.webp",
  "/images/clients-mg-motor.webp",
  "/images/clients-nissan.webp",
  "/images/clients-golddrop.webp",
  "/images/clients-hpcl.webp",
];

const clients1 = [
  "/images/clients-indian-oil.webp",
  "/images/clients-aix-investment.webp",
  "/images/clients-ramee.webp",
  "/images/credai-logo-skyhitmedia.webp",
  "/images/clients-photriya.webp",
  "/images/clients-bakelore.webp",
  "/images/clients-thangedu.webp",
];

const clients2 = [
  "/images/clients-signova-group.webp",
  "/images/clients-ridge-homes.webp",
  "/images/clients-promea.webp",
  "/images/clients-international-appareal.webp",
  "/images/clients-my-pet-clinic.webp",
  "/images/clients-nris.webp",
];

const ClientSection: React.FC = () => {
  const clientRows = [clients, clients1, clients2];
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const scrollSpeed = 1;

    const startScrolling = (container: HTMLDivElement, isReverse: boolean) => {
      let scrollPosition = container.scrollLeft;

      const scroll = () => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        scrollPosition = isReverse ? scrollPosition - scrollSpeed : scrollPosition + scrollSpeed;

        if (scrollPosition >= maxScroll) scrollPosition = 0;
        if (scrollPosition <= 0 && isReverse) scrollPosition = maxScroll;

        container.scrollLeft = scrollPosition;
        requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);
    };

    containerRefs.current.forEach((container, index) => {
      if (container) {
        const isReverseScroll = index === 1;
        startScrolling(container, isReverseScroll);
      }
    });

    const handleResize = () => {
      containerRefs.current.forEach((container) => {
        if (container) {
          container.scrollLeft = 0;
        }
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
          <div className="relative flex flex-col items-center px-6 py-12 md:py-24">
            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-[24px] md:text-[28px] lg:text-[40px] xl:text-[48px] leading-12 font-semibold text-gray-800 mb-6">
                Just a Few of our Favorite Clients
              </h4>
              <p className="text-base text-[#666] mb-8">
                We pride ourselves on building long-lasting relationships by providing exceptional service and tailored solutions that meet their unique needs.
              </p>
              <a href="/projects" rel="noopener noreferrer">
                <button className="bg-[#93553B] text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
                  Our Projects
                </button>
              </a>
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url("/images/right-arrow.webp"), url("/images/left-arrow.webp")`,
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundPosition: "left 80%, right 20%",
                backgroundSize: "45% auto, 45% auto",
              }}
            />
          </div>

          <div className="space-y-12 py-12">
            {clientRows.map((rowClients, rowIndex) => (
              <div
                key={rowIndex}
                className="relative overflow-hidden"
                ref={(el) => { containerRefs.current[rowIndex] = el; }}
              >
                <div className="flex items-center space-x-4 px-4">
                  {[...rowClients, ...rowClients, ...rowClients, ...rowClients].map((client, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-32 h-24 md:w-40 md:h-32 bg-white rounded-lg shadow-sm border border-gray-100 p-4"
                      style={{
                        willChange: "transform",
                      }}
                    >
                      <Image
                        src={client}
                        alt="Client logo"
                        width={200}
                        height={100}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ClientSection);

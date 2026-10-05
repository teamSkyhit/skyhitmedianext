"use client";

import { memo } from "react";
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
  "/images/credai-logo-skyhitmedia.png",
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

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
          <div className="relative flex flex-col items-center px-6 py-12 md:py-24">
            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-[24px] md:text-[28px] lg:text-[40px] xl:text-[48px] leading-12 font-semibold text-slate-900 mb-6">
                Just a Few of our Favorite Clients
              </h4>
              <p className="text-base text-slate-500 mb-8">
                We pride ourselves on building long-lasting relationships by providing exceptional service and tailored solutions that meet their unique needs.
              </p>
              <a href="/projects" rel="noopener noreferrer">
                <button className="bg-slate-600 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-colors">
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
              >
                <div
                  className={`flex items-center gap-4 px-4 w-max ${rowIndex === 1 ? "animate-logo-marquee-reverse" : "animate-logo-marquee"}`}
                >
                  {[...rowClients, ...rowClients].map((client, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-32 h-24 md:w-40 md:h-32 bg-white rounded-lg shadow-sm border border-gray-100 p-4"
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
      <style jsx>{`
        @keyframes logo-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        .animate-logo-marquee,
        .animate-logo-marquee-reverse {
          animation: logo-marquee 36s linear infinite;
          will-change: transform;
        }

        .animate-logo-marquee-reverse {
          animation-direction: reverse;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-logo-marquee,
          .animate-logo-marquee-reverse {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default memo(ClientSection);

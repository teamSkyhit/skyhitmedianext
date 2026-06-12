// "use client";

// import { memo } from "react";
// import Image from "next/image";

// const clientLogos: string[] = [
//   "/images/clients-kia.webp",
//   "/images/clients-mg-motor.webp",
//   "/images/clients-nissan.webp",
//   "/images/clients-golddrop.webp",
//   "/images/clients-hpcl.webp",
//   "/images/clients-indian-oil.webp",
//   "/images/clients-aix-investment.webp",
//   "/images/clients-ramee.webp",
// ];

// const MarqueeClients = memo(() => (
//   <div className="overflow-hidden relative w-full py-2">
//     <div className="flex animate-marquee whitespace-nowrap" style={{ animationDuration: '20s' }}>
//       {Array.from({ length: 20 }, (_, i) => (
//         <Image
//           key={i}
//           src={clientLogos[i % clientLogos.length]}
//           alt={`Client ${i % clientLogos.length + 1}`}
//           width={248}
//           height={100}
//           className="h-8 md:h-12 w-auto object-cover mx-4 shrink-0"
//           loading="lazy"
//           decoding="async"
//         />
//       ))}
//     </div>
//   </div>
// ));

// MarqueeClients.displayName = "MarqueeClients";

// const Hero: React.FC = () => {
//   return (
//     <section className="hero relative overflow-hidden h-[360px] md:h-screen">
//       {/*
//         LCP hero image: use a plain <img> with <picture> for responsive loading.
//         fetchPriority="high" + decoding="sync" ensures fastest possible LCP.
//         We don't use next/image here because fill + useWindowSize causes hydration delay.
//       */}
//       <picture>
//         <source media="(max-width: 767px)" srcSet="/images/1st-2-mob.webp" type="image/webp" />
//         <source media="(min-width: 768px)" srcSet="/images/1st-2.webp" type="image/webp" />
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img
//           src="/images/1st-2.webp"
//           alt=""
//           aria-hidden="true"
//           fetchPriority="high"
//           decoding="sync"
//           className="absolute inset-0 w-full h-[432px] md:h-full object-cover object-center md:object-top"
//           width={1920}
//           height={900}
//         />
//       </picture>

//       <div className="relative h-full flex flex-col justify-between">
//         {/* Hero Content */}
//         <div className="grow flex items-center">
//           <div className="container mx-auto px-6">
//             <div className="text-white relative text-left lg:w-[90%]">
//               <h1 className="text-2xl md:text-[56px] lg:text-7xl xl:text-[88px] font-headline leading-tight drop-shadow-lg">
//                 Digital
//                 <span className="inline-block mx-2">
//                   <Image
//                     src="/images/traingle-icon.webp"
//                     alt=""
//                     aria-hidden="true"
//                     className="w-8 lg:w-16 h-auto relative top-2 inline-block"
//                     loading="lazy"
//                     decoding="async"
//                     width={64}
//                     height={64}
//                   />
//                 </span>
//                 <br />
//                 Marketing Agency
//                 <br />
//                 in Hyderabad
//               </h1>
//               <a
//                 href="/services"
//                 className="bg-[#9B5E35] text-white px-2 py-1 md:px-8 md:py-2 rounded-[30px] font-semibold mt-4 md:mt-8 text-[10px] md:text-lg inline-block transition-transform duration-300 hover:scale-105"
//                 aria-label="Our Services – view our digital marketing services"
//               >
//                 Our Services
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Client Logos */}
//         <div
//           className="absolute left-0 right-0 bottom-6 top-[290px] md:bottom-0 md:top-auto text-left"
//           style={{ animation: 'fadeIn 1.2s ease-in-out 1s both' }}
//         >
//           <div className="flex items-center md:shadow-xl bg-white bg-opacity-80">
//             <div className="bg-primary px-0 md:px-4 py-[0.8rem] md:py-8 shadow-lg rounded-e-sm">
//               <h2 className="text-white text-center text-[12px] px-2 md:text-base font-medium font-content uppercase md:whitespace-nowrap">
//                 OUR <span className="whitespace-nowrap">LOYAL CLIENTS</span>
//               </h2>
//             </div>
//             <MarqueeClients />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default memo(Hero);



"use client";

import { memo } from "react";
import Image from "next/image";

const clientLogos: string[] = [
  "/images/clients-kia.webp",
  "/images/clients-mg-motor.webp",
  "/images/clients-nissan.webp",
  "/images/clients-golddrop.webp",
  "/images/clients-hpcl.webp",
  "/images/clients-indian-oil.webp",
  "/images/clients-aix-investment.webp",
  "/images/clients-ramee.webp",
];

const marqueeLogos = [
  ...clientLogos.slice(0, 5),
  ...clientLogos.slice(0, 5),
];

const MarqueeClients = memo(() => (
  <div className="overflow-hidden relative w-full py-2">
    <div
      className="flex animate-marquee whitespace-nowrap"
      style={{ animationDuration: "20s" }}
    >
      {marqueeLogos.map((logo, i) => (
        <Image
          key={i}
          src={logo}
          alt={`Skyhit Media client logo ${(i % 5) + 1}`}
          width={248}
          height={100}
          className="h-8 md:h-12 w-auto object-cover mx-4 shrink-0"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  </div>
));

MarqueeClients.displayName = "MarqueeClients";

const Hero: React.FC = () => {
  return (
    <section className="hero relative overflow-hidden h-[360px] md:h-screen">
      {/* Hero Background Image */}
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/images/1st-2-mob.webp"
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/images/1st-2.webp"
          type="image/webp"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/1st-2.webp"
          alt="Skyhit Media digital marketing agency team"
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 w-full h-[432px] md:h-full object-cover object-center md:object-top"
          width={1920}
          height={900}
        />
      </picture>

      <div className="relative h-full flex flex-col justify-between">
        {/* Hero Content */}
        <div className="grow flex items-center">
          <div className="container mx-auto px-6">
            <div className="text-white relative text-left lg:w-[90%]">
              <h1
                className="font-headline text-2xl md:text-[56px] lg:text-7xl xl:text-[88px] font-semibold leading-tight drop-shadow-lg"
              >
                Digital{" "}
                <span className="inline-block mx-2">
                  <Image
                    src="/images/traingle-icon.webp"
                    alt="Skyhit Media accent icon"
                    className="w-8 lg:w-16 h-auto relative top-2 inline-block"
                    loading="lazy"
                    decoding="async"
                    width={64}
                    height={64}
                  />
                </span>{" "}
                <br />
                Marketing Agency{" "}
                <br />
                in Hyderabad
              </h1>

              <a
                href="/services"
                className="bg-[var(--color-secondary)] text-white px-2 py-1 md:px-8 md:py-2 rounded-[30px] font-semibold mt-4 md:mt-8 text-[10px] md:text-lg inline-block transition-transform duration-300 hover:scale-105"
                aria-label="Our Services – view our digital marketing services"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div
          className="absolute left-0 right-0 bottom-6 top-[290px] md:bottom-0 md:top-auto text-left"
          style={{ animation: "fadeIn 1.2s ease-in-out 1s both" }}
        >
          <div className="flex items-center md:shadow-xl bg-white bg-opacity-80">
            <div className="bg-primary px-0 md:px-4 py-[0.8rem] md:py-8 shadow-lg rounded-e-sm">
              <h2 className="text-white text-center text-[12px] px-2 md:text-base font-medium font-content uppercase md:whitespace-nowrap">
                OUR <span className="whitespace-nowrap">LOYAL CLIENTS</span>
              </h2>
            </div>

            <MarqueeClients />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);

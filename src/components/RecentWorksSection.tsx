"use client";

import { memo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ArrowHeader from "./ArrowHeader";

const Carousel = dynamic(() => import("./Carousel"), { ssr: false });

const projects = [
  { title: "Bakelore", desktop: "/images/bakelore-skyhitmedia.png" },
  { title: "Signova", desktop: "/images/signova-group-skyhitmedia.webp" },
  { title: "Hp Def", desktop: "/images/promea-skyhitmedia.webp" },
  { title: "Prospera", desktop: "/images/prospera-kia-skyhitmedia.webp" },
  { title: "Vastra Suka", desktop: "/images/aix-investment-skyhitmedia 1.webp" },
  { title: "Venket Fitness", desktop: "/images/happy-living-skyhitmedia.png" },
];

const RecentWorks: React.FC = () => {
  const slides = projects.map((project, index) => (
    <div key={index} className="relative mb-8">
      <Image
        src={project.desktop}
        alt={`${project.title} desktop view`}
        width={650}
        height={600}
        className="w-[275px] md:w-[600px] lg:w-[650px] lg:h-[600px] m-auto object-fill"
        loading="lazy"
        decoding="async"
        unoptimized
      />
    </div>
  ));

  return (
    <section className="py-6 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <ArrowHeader title="OUR RECENT WORKS" />
          <h3 className="text-xl md:text-4xl lg:text-[52px] lg:leading-[64px] text-[#774635] font-bold max-w-[18rem] md:max-w-xl lg:max-w-3xl mx-auto">
            Explore Our Digital Marketing Agency Projects
          </h3>
        </div>
        <Carousel
          slides={slides}
          showArrows={true}
          options={{ spaceBetween: 30, slidesPerView: 1, loop: true }}
          containerClassName="w-full"
          freeMode={true}
        />
      </div>
    </section>
  );
};

export default memo(RecentWorks);

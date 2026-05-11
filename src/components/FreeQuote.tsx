"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

const QuoteSection: React.FC = () => {
  return (
    <section className="relative w-full md:h-[200px] flex items-center overflow-hidden h-[81px]">
      <Image
        src="/images/3rd-section-1.webp"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover object-center"
        loading="lazy"
        sizes="100vw"
      />
      <div className="relative container mx-auto px-6 flex flex-col gap-[4px] md:flex-row lg:flex-row items-center justify-center md:justify-between lg:justify-between h-full z-10">
        <div className="max-w-xl md:max-w-sm lg:max-w-2xl text-white">
          <h3 className="text-[10px] md:text-[26px] lg:text-[36px] font-medium font-content leading-normal drop-shadow-md w-[208px] md:w-[100%] text-center md:text-left transition-all duration-700">
            Accelerate your online growth with the best digital marketing agency
          </h3>
        </div>
        <div className="z-10">
          <Link
            href="/contact"
            className="bg-[#9B5E35] hover:bg-[#7D4E28] text-white py-[5px] px-[5px] md:px-8 md:py-3 lg:py-5 font-content rounded-full text-[10px] md:text-xl lg:text-2xl font-bold transition-transform duration-300 hover:scale-105 shadow-md"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(QuoteSection);

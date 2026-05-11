"use client";

import { useRef, ReactNode } from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  slides: ReactNode[];
  options?: SwiperProps;
  showArrows?: boolean;
  showPagination?: boolean;
  arrowClassName?: string;
  containerClassName?: string;
  freeMode?: boolean;
  isArrowSpace?: boolean;
}

export default function Carousel({
  slides,
  options = {},
  showArrows = true,
  showPagination = false,
  arrowClassName = "bg-champagne-100 hover:bg-champagne-200 text-champagne-500",
  containerClassName = "text-secondary",
  freeMode,
  isArrowSpace
}: CarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const defaultOptions: SwiperProps = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    modules: [Navigation, Pagination],
    ...options
  };

  return (
    <div className={`relative ${containerClassName}`}>
      {showArrows && (
        <>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`absolute ${isArrowSpace ? '-left-12 lg:left-4' : '-left-5 md:left-0'} top-1/2 -translate-y-1/2 z-10 rounded-full p-2 md:p-4 transition-colors ${arrowClassName}`}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`absolute ${isArrowSpace ? '-right-12 lg:right-4' : '-right-5 md:right-0'}  top-1/2 -translate-y-1/2 z-10 rounded-full p-2 md:p-4 transition-colors ${arrowClassName}`}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={showPagination ? { clickable: true } : false}
        {...defaultOptions}
        className="w-full"
        freeMode={freeMode}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import ArrowHeader from "./ArrowHeader";

// Lazy-load Carousel (pulls in Swiper ~95KB) — only loads when component renders
const Carousel = dynamic(() => import("./Carousel"), { ssr: false });

interface Testimonial {
  name: string;
  position: string;
  image: string;
  stars: number;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  title = "OUR TESTIMONIALS",
  subtitle = "What Our Clients Are Saying?",
}) => {
  return (
    <section
      className="relative bg-contain bg-center bg-no-repeat py-2 px-8 md:px-16"
      style={{ backgroundImage: `url("/images/testimonials%20bg.png")` }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-2 md:mb-6">
          <div className="flex justify-center items-center space-x-2 md:mb-4">
            <ArrowHeader title={title} />
          </div>
          <h3 className="text-xl md:text-4xl lg:text-[52px] font-bold text-[#774635] mb-2">{subtitle}</h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[40%_60%] lg:grid-cols-[35%_65%] xl:grid-cols-[40%_60%] lg:items-center lg:gap-16">
          <div className="lg:max-w-2xl text-left">
            <h2 className="text-[12.6px] leading-[21.12px] md:text-[30.8px] md:leading-[36.96px] lg:text-[44px] lg:leading-[52px] font-medium tracking-tight text-[#111D15] text-center md:text-left">
              Feedback About Their Experience With Us
            </h2>
            <p className="mt-4 text-[14px] text-center md:text-left md:text-base text-[#666666]">
              At Skyhit Media, our clients&apos; feedback highlights our dedication to delivering impactful digital marketing solutions. Discover how we&apos;ve helped businesses achieve real growth and success.
            </p>
          </div>
          <div className="w-full px-4">
            <Carousel
              slides={testimonials.map((testimonial, index) => (
                <div className="shadow-xl py-8 lg:py-5 lg:px-20" key={index}>
                  <div className="relative lg:h-[280px] lg:w-[400px] xl:w-auto xl:h-[307px] bg-white rounded-3xl shadow-2xl shadow-slate-50 px-1 py-1 md:py-4 lg:px-8 lg:py-6 flex flex-col border-t-[10px] border-r-[10px] border-secondary">
                    <div className="absolute top-4 right-12 bg-secondary p-1 lg:p-2">
                      <svg viewBox="0 0 32 32" style={{ color: "#ECEAEA", zIndex: 999 }} className="sm:w-6 sm:h-6 md:w-9 md:h-9 lg:w-[42px] lg:h-[42px] fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6v12h8v8h8V6H0zm24 0v12h8v8h8V6H24z" />
                      </svg>
                    </div>
                    <div className="flex items-center space-x-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={160}
                        height={160}
                        loading="lazy"
                        className="w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-cover rounded-full border-[2px] border-gray-300"
                        unoptimized
                      />
                      <div className="flex-1">
                        <p className="text-sm lg:text-base xl:text-lg font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-[10px] lg:text-xs text-gray-500">{testimonial.position}</p>
                        <div className="flex text-[#FF9800] text-base lg:text-xl mt-0 lg:mt-2">
                          {"★".repeat(testimonial.stars)}{"☆".repeat(5 - testimonial.stars)}
                        </div>
                        <blockquote className="text-gray-600 mt-2 text-[0.5rem] lg:text-xs xl:text-lg leading-relaxed">
                          {testimonial.quote}
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              options={{ spaceBetween: 20, slidesPerView: 1, loop: testimonials.length > 1 }}
              showArrows={true}
              showPagination={true}
              arrowClassName="text-secondary"
              isArrowSpace={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

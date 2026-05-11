"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface HeroSectionProps {
  serviceData: ServiceData;
}

interface ServiceData {
  title: string;
  subTitle: string;
  deskImgLink: string;
  mobImgLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ serviceData }) => {
  const form = useRef<HTMLFormElement>(null);
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentPage = pathname === "/" ? "Home" : pathname.slice(1);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);

    if (form.current) {
      const formData = new FormData(form.current);

      if (!formData.get("to_name") || !formData.get("email") || !formData.get("number") || !formData.get("to_message")) {
        alert("Please fill in all fields.");
        setIsLoading(false);
        return;
      }

      try {
        const emailjs = await import("@emailjs/browser");
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          "template_v4fu3u7",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        setIsLoading(false);
        setIsSubmitted(true);
        form.current?.reset();
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        setIsLoading(false);
        console.error("Failed to send email:", error);
        alert("Failed to send your message. Please try again.");
      }
    }
  };

  return (
    <div className="relative md:pt-24">
      <div className="relative overflow-hidden h-[610px] md:h-screen flex flex-col md:flex-row items-center justify-center md:justify-around px-4 md:px-12 lg:px-24">
        {/* LCP hero image — local file, fetchPriority high */}
        <picture>
          <source media="(min-width: 768px)" srcSet={serviceData.deskImgLink} />
          <img
            src={serviceData.mobImgLink}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center md:object-top -z-10"
            width={1920}
            height={900}
            fetchPriority="high"
            decoding="sync"
          />
        </picture>

        {/* Left Section: Text */}
        <div className="block leading-3 md:leading-6">
          <div className="text-white max-w-lg max-sm:mt-[95px]">
            <div className="bg-[#5F6B70] opacity-60 absolute w-[100%] md:w-[70%] md:h-[220px] max-md:h-[200px] h-[80px] left-0 max-sm:h-[90px]"></div>
            <h1 className="md:text-[30px] lg:text-[50px] lg:leading-[60px] max-sm:text-[17px] md:leading-[40px] font-bold mb-4 relative pt-4 font-headline">
              {serviceData.title}
            </h1>
            <p className="text-lg md:text-[13px] md:leading-[29px] max-sm:leading-[15px] mb-3 max-sm:mb-0 max-sm:text-[9px] relative">
              {serviceData.subTitle}
            </p>
          </div>
          <a href="/contact" rel="noopener noreferrer">
            <button className="bg-[#9B5E35] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#7D4E28] min-sm:p-[10px] sm:mt-[-10px] max-sm:p-[8px] max-sm:text-[11px] md:mt-6 md:text-[22px] max-sm:mt-[20px]">
              Contact Us
            </button>
          </a>
        </div>

        {/* Right Section: Form */}
        <div className="relative p-1 rounded-lg border-2 border-dashed grad">
          <div className="hidden md:block bg-white p-6 rounded-xl shadow-lg w-full md:max-w-md">
            <h3 className="text-xl font-semibold mb-4">Get My Free Proposal</h3>
            <p className="text-gray-600 mb-6">We just need a little info to Get Started</p>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input
                type="text"
                name="to_name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-full p-3 mb-4"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="someone@example.com"
                className="w-full border border-gray-300 rounded-full p-3 mb-4"
                required
              />
              <input
                type="tel"
                name="number"
                placeholder="+91 0000000000"
                className="w-full border border-gray-300 rounded-full p-3 mb-4"
                required
              />
              <input
                type="text"
                name="to_message"
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 mb-4 pb-10 rounded-xl"
                required
              />
              <input type="hidden" name="page" value={currentPage} />
              <button
                type="submit"
                className="w-full bg-[#9B5E35] text-white py-3 rounded-full hover:bg-[#7D4E28]"
              >
                {isLoading ? "Sending..." : "Get Report"}
              </button>
              {isSubmitted && <p className="text-green-600 mt-4">Message sent successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

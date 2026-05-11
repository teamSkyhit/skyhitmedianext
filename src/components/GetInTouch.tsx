"use client";

import { useRef, useState, memo } from "react";
import { Mail, Phone } from "lucide-react";

const GetInTouch: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    const page = pathname === "/" ? "Home" : pathname.slice(1);
    if (page !== currentPage) setCurrentPage(page);
  }

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);
    if (form.current) {
      try {
        const emailjs = await import("@emailjs/browser");
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        setIsLoading(false);
        setIsSubmitted(true);
        form.current?.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } catch (error) {
        setIsLoading(false);
        console.error("Failed to send email:", error);
        alert("Failed to send your message. Please try again.");
      }
    }
  };

  return (
    <section className="relative bg-white py-1 px-6 lg:py-8 lg:px-24">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-6">
        Get My Free Digital Marketing Proposal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-md shadow-[#d1bfb4] border-secondary border-2">
        {/* Left Column */}
        <div className="bg-[#FFF6F3] p-8 rounded-2xl">
          <h3 className="text-xl md:text-[19.6px] lg:text-[28px] font-bold text-[#774635] mb-4">
            100% Satisfaction Guaranteed
          </h3>
          <p className="text-sm md:text-[11.2px] lg:text-base text-gray-600 mb-4">
            At Skyhit Media, we are committed to delivering exceptional digital marketing results with a focus on your business goals. Our 100% satisfaction guarantee ensures that every strategy we implement is tailored to meet your unique needs.
          </p>
          <h4 className="text-xl md:text-[19.6px] lg:text-[28px] font-bold text-[#774635] mb-4">What will be the next step?</h4>
          <ul className="text-base md:text-[16.8px] lg:text-2xl text-gray-600 space-y-2 mb-4">
            <li>✔ We&apos;ll prepare a proposal</li>
            <li>✔ Together we discuss it</li>
            <li>✔ Let&apos;s start a policy</li>
          </ul>
          <h4 className="text-lg md:text-[19.6px] lg:text-2xl font-bold text-[#774635] mb-4">Talk to an expert:</h4>
          <p className="text-base md:text-[19.6px] lg:text-2xl text-gray-600">
            <span className="flex items-center gap-2"><Phone size={18} /> +91 9030279661</span><br />
            <span className="flex items-center gap-2"><Mail size={18} /> contact@skyhitmedia.com</span>
          </p>
        </div>
        {/* Right Column */}
        <div className="bg-white p-8 rounded-2xl">
          <p className="text-sm text-[#333] mb-1 font-semibold uppercase tracking-wide">Contact Info</p>
          <h3 className="text-2xl md:text-[25.2px] lg:text-[36px] font-bold text-[#774635] mb-4">Keep In Touch</h3>
          <p className="text-sm md:text-[11.2px] lg:text-base text-gray-600 mb-6">
            We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner.
          </p>
          {isLoading ? (
            <div>
              <span id="ProgressLabel" className="sr-only">Loading</span>
              <span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow={75} className="block rounded-full bg-gray-200 h-3">
                <span className="block h-3 rounded-full bg-secondary" style={{ width: "75%" }} />
              </span>
            </div>
          ) : isSubmitted ? (
            <div className="text-green-600 text-lg font-semibold">Thank you for reaching us!</div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <input type="text" name="to_name" placeholder="Name" required className="border border-gray-300 rounded-md py-3 px-4 focus:ring-2 focus:ring-secondary outline-none" />
              <input type="tel" name="number" placeholder="Phone Number" required className="border border-gray-300 rounded-md py-3 px-4 focus:ring-2 focus:ring-secondary outline-none" />
              <input type="email" name="email" placeholder="Email" required className="border border-gray-300 rounded-md py-3 px-4 focus:ring-2 focus:ring-secondary outline-none" />
              <textarea placeholder="Message" name="message" rows={4} required className="border border-gray-300 rounded-md py-3 px-4 focus:ring-2 focus:ring-secondary outline-none" />
              <input type="hidden" name="page" value={currentPage} />
              <button type="submit" className="bg-[#9B5E35] lg:text-xs xl:text-lg lg:w-1/2 text-white py-3 lg:px-1 xl:px-6 rounded-2xl hover:bg-[#7D4E28] transition duration-300">
                Send My Free Proposal
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(GetInTouch);

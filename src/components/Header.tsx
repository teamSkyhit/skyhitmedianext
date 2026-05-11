"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import LinkedInFeed from "./LinkedInFeed";
import { scrollToTop } from "@/utils/isBrowser";

const services = [
  { path: "/best-digital-marketing-agency", label: "Digital Marketing" },
  { path: "/website-design-and-development-services", label: "Website Design & Development" },
  { path: "/Performance-marketing-agency", label: "Performance Marketing" },
  { path: "/search-engine-optimization-agency", label: "Search Engine Optimization (SEO)" },
  { path: "/social-media-marketing-agency", label: "Social Media Marketing (SMM)" },
  { path: "/pay-per-click-advertising-agency", label: "Pay-Per-Click Advertising (PPC)" },
  { path: "/branding-and-graphic-design-agency", label: "Branding & Graphic Design" },
  { path: "/influencer-marketing-agency", label: "Influencer Marketing" },
  { path: "/analytics-and-reporting-agency", label: "Analytics & Reporting" },
  { path: "/whatsapp-marketing-agency", label: "WhatsApp Marketing" },
  { path: "/online-reputation-management-agency", label: "Online Reputation Management (ORM)" },
  { path: "/cyber-security-services", label: "Cyber Security" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const handleClose = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    scrollToTop();
  };

  return (
    <header
      className="bg-primary shadow-md fixed w-full z-50"
      style={{
        backgroundImage: 'url("/images/header%20pattern.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container h-[65px] md:h-auto mx-auto flex justify-between items-center py-4 px-6 gap-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link href="/" className="flex items-center">
            {/* Plain img — avoids next/image auto-preloading the logo which competes with hero LCP */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/header%20skyhit%20logo%20desktop.png"
              alt="Skyhit Media Logo"
              width={172}
              height={64}
              className="h-12 w-[129px] md:h-16 md:w-[172px]"
              loading="lazy"
              decoding="async"
            />
          </Link>
        </div>

        {/* Mobile icons */}
        <div className="flex lg:hidden items-center space-x-4">
          <a href="tel:+919030279661" className="text-[#DCBE9E]" aria-label="Call Skyhit Media">
            <Phone size={24} aria-hidden="true" />
          </a>
          <button
            className="text-[#DCBE9E] text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className={`lg:flex ml-auto space-x-6 items-end absolute lg:relative lg:top-auto lg:left-auto top-16 left-0 w-full lg:w-auto bg-primary lg:bg-transparent transition-transform duration-300 ease-in-out pl-5
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 gap-2 lg:gap-0">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
            ].map(({ href, label }) => (
              <li key={href} className="py-3">
                <Link
                  href={href}
                  className={`text-white text-[1.125rem] ${pathname === href ? "text-secondary" : ""}`}
                  onClick={handleClose}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Services dropdown */}
            <li className="relative py-3 group">
              <div className="flex items-center space-x-2">
                <Link href="/services" className="text-white text-[1.125rem]" onClick={handleClose}>
                  Services
                </Link>
                <button
                  className="text-white p-1"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-label={isServicesOpen ? "Close services menu" : "Open services menu"}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  <ChevronDown
                    aria-hidden="true"
                    className={`transform transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              <ul
                className={`absolute left-0 top-full bg-primary text-white text-[1.125rem] w-[26rem] p-2 shadow-md transform transition-all duration-300 lg:opacity-0 lg:invisible group-hover:visible group-hover:opacity-100 lg:group-hover:translate-y-2 max-sm:w-[21rem]
                  ${isServicesOpen ? "visible opacity-100" : "invisible opacity-0"}`}
              >
                {services.map((s) => (
                  <li key={s.path}>
                    <Link
                      href={s.path}
                      className="hover:text-secondary py-2 flex items-center"
                      onClick={handleClose}
                    >
                      <ChevronRight className="mr-2" />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {[
              { href: "/projects", label: "Projects" },
              { href: "/blogs", label: "Blogs" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <li key={href} className="py-3">
                <Link
                  href={href}
                  className={`text-white text-[1.125rem] ${pathname === href ? "text-secondary" : ""}`}
                  onClick={handleClose}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className="py-3">
              <div className="ml-8">
                <LinkedInFeed companyId="74713267" navigateTo="/careers" />
              </div>
            </li>
          </ul>
        </nav>

        {/* Desktop contact */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Phone size={42} className="text-secondary" />
            <div>
              <span className="font-semibold text-white text-lg lg:text-base">Connect with us</span>
              <br />
              <a href="tel:+919030279661" className="text-2xl lg:text-base text-white">
                +91 9030 279 661
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

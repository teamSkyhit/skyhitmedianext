import Image from "next/image";
import Link from "next/link";
import EmailLink from "./EmailLink";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

// Inline SVGs for social icons not available in this lucide-react version
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 7.1c.3-1.6 1.6-2.9 3.2-3.1C9.4 3.7 12 3.7 12 3.7s2.6 0 6.3.3c1.6.2 2.9 1.5 3.2 3.1.3 1.9.3 4.9.3 4.9s0 3-.3 4.9c-.3 1.6-1.6 2.9-3.2 3.1-3.7.3-6.3.3-6.3.3s-2.6 0-6.3-.3c-1.6-.2-2.9-1.5-3.2-3.1C2.2 15 2.2 12 2.2 12s0-3 .3-4.9z"/>
    <polygon points="10 15 15 12 10 9 10 15"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Server Component — no state, no client APIs
export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-6 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Logo & description */}
        <div>
          <Link href="/">
            <Image
              src="/images/header-skyhit-logo-desktop.webp"
              alt="Skyhit Media Logo"
              width={155}
              height={58}
              className="mb-4"
              loading="lazy"
            />
          </Link>
          <p className="text-[18px]">
            Skyhit Media is the top digital marketing agency and web design company in Hyderabad.
            Boost your business with expert services and innovative solutions.
          </p>
          <div className="flex items-center gap-4 mt-4">
            {[
              { href: "https://www.facebook.com/skyhitmedia", icon: <FacebookIcon className="h-8 w-8" />, label: "Facebook" },
              { href: "https://www.youtube.com/c/SKYHITMEDIA", icon: <YoutubeIcon className="h-8 w-8" />, label: "Youtube" },
              { href: "https://www.linkedin.com/company/skyhit-media/", icon: <LinkedinIcon className="h-8 w-8" />, label: "LinkedIn" },
              { href: "https://www.instagram.com/skyhitmedia/", icon: <InstagramIcon className="h-8 w-8" />, label: "Instagram" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 bg-[#7D878C] hover:bg-gray-600 rounded-full"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <SectionHeading title="Explore" />

        {/* Services */}
        <div>
          <SectionHeading title="Services" />
          <ul className="space-y-5 text-sm">
            {[
              { href: "/best-digital-marketing-agency", label: "Digital Marketing" },
              { href: "/website-design-and-development-services", label: "Website Design & Development" },
              { href: "/Performance-marketing-agency", label: "Performance Marketing" },
              { href: "/social-media-marketing-agency", label: "Social Media Marketing" },
              { href: "/search-engine-optimization-agency", label: "Search Engine Optimization" },
              { href: "/branding-and-graphic-design-agency", label: "Branding & Graphic Design" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#DCBE9E] text-[18px]">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-lg font-semibold text-white">Contact</p>
            <DecorativeLine />
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <MapPin className="text-[#DCBE9E] mt-1 shrink-0 w-6 h-6" />
              <span className="text-[18px]">
                3rd Floor, Door No:301 Vipra Elite, Patrika Nagar, street No:1, Madhapur, Hyderabad, Telangana 500081
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-[#DCBE9E] h-6 w-6 shrink-0" />
              <a href="tel:+919030279661" className="hover:text-[#DCBE9E] transition text-[18px]">+91 9030279661</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-[#DCBE9E] h-6 w-6 shrink-0" />
              <EmailLink encoded="Y29udGFjdEBza3loaXRtZWRpYS5jb20=" className="hover:text-[#DCBE9E] transition text-[18px]" />
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-[3rem] text-[15.4px] text-white/90">
        © Copyright {new Date().getFullYear()} | All Rights Reserved <Link href="/" className="hover:text-[#DCBE9E] transition-colors font-medium">SKYHIT MEDIA</Link>
      </div>
    </footer>
  );
}

function DecorativeLine() {
  return (
    <div className="relative w-16 h-6 ml-2">
      <div className="absolute right-0 w-6 h-6 rounded-full border-2 border-[#DCBE9E]" />
      <div className="absolute right-1.5 top-1.5 w-3 h-3 rounded-full bg-[#DCBE9E]" />
      <div className="absolute left-0 top-1/2 w-10 h-0.5 bg-[#DCBE9E] -translate-y-1/2" />
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  const links: Record<string, { href: string; label: string }[]> = {
    Explore: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/projects", label: "Project" },
      { href: "/blogs", label: "Blog" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  };
  if (!links[title]) return null;
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <p className="text-lg font-semibold text-white">{title}</p>
        <DecorativeLine />
      </div>
      <ul className="space-y-5 text-sm">
        {links[title].map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="hover:text-[#DCBE9E] text-[18px]">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

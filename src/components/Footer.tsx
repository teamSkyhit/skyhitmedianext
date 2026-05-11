import Image from "next/image";
import Link from "next/link";
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
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
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
          <Image
            src="/images/header%20skyhit%20logo%20desktop.png"
            alt="Skyhit Media Logo"
            width={155}
            height={58}
            className="mb-4"
            loading="lazy"
          />
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
              <a href="mailto:contact@skyhitmedia.com" className="hover:text-[#DCBE9E] transition text-[18px]">contact@skyhitmedia.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-[3rem] text-[15.4px] text-white/90">
        © Copyright {new Date().getFullYear()} | All Rights Reserved SKYHIT MEDIA
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

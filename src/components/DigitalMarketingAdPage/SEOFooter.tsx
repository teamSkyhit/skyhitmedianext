import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  { name: 'SEO Services Hyderabad', href: '/search-engine-optimization-agency' },
  { name: 'Google Ads Agency Hyderabad', href: '/pay-per-click-advertising-agency' },
  { name: 'Meta Ads Agency Hyderabad', href: '/social-media-marketing-agency' },
  { name: 'Website Design Hyderabad', href: '/website-design-and-development-services' },
  { name: 'Performance Marketing Hyderabad', href: '/Performance-marketing-agency' },
  { name: 'WhatsApp Marketing Agency', href: '/whatsapp-marketing-agency' },
  { name: 'Social Media Marketing Hyderabad', href: '/social-media-marketing-agency' },
  { name: 'Online Reputation Management', href: '/online-reputation-management-agency' },
];

const locations = [
  { name: 'Digital Marketing Agency Jubilee Hills', slug: 'jubilee-hills' },
  { name: 'Digital Marketing Agency Banjara Hills', slug: 'banjara-hills' },
  { name: 'Digital Marketing Agency Gachibowli', slug: 'gachibowli' },
  { name: 'Digital Marketing Agency Madhapur', slug: 'madhapur' },
  { name: 'Digital Marketing Agency HITEC City', slug: 'hitec-city' },
  { name: 'Digital Marketing Agency Kondapur', slug: 'kondapur' },
  { name: 'Digital Marketing Agency Financial District', slug: 'financial-district' },
  { name: 'Digital Marketing Agency Kukatpally', slug: 'kukatpally' },
  { name: 'Digital Marketing Agency Miyapur', slug: 'miyapur' },
  { name: 'Digital Marketing Agency Secunderabad', slug: 'secunderabad' },
];

interface SEOFooterProps {
  locationName?: string;
}

export default function SEOFooter({ locationName }: SEOFooterProps) {
  const loc = locationName || "Hyderabad";

  return (
    <footer id="seo-footer" className="relative bg-[#0d131f] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#BE7F51]/50 to-transparent"></div>
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800">

          {/* Column 1: NAP */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/header%20skyhit%20logo%20desktop.png"
                alt="Skyhit Media Logo"
                width={160}
                height={60}
                className="brightness-0 invert opacity-90"
                loading="lazy"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {loc}&apos;s premium digital marketing agency — driving aggressive revenue growth through data-driven SEO, Google Ads, and performance marketing.
            </p>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin size={18} className="text-[#BE7F51] mt-0.5 flex-shrink-0" />
                <span className="leading-snug">HITEC City, Madhapur,<br />Hyderabad, Telangana – 500081</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone size={18} className="text-[#BE7F51] flex-shrink-0" />
                <a href="tel:+919030279661" className="hover:text-[#BE7F51] transition-colors font-medium">+91 9030279661</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail size={18} className="text-[#BE7F51] flex-shrink-0" />
                <a href="mailto:hello@skyhitmedia.com" className="hover:text-[#BE7F51] transition-colors font-medium">hello@skyhitmedia.com</a>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <Clock size={18} className="text-[#BE7F51] mt-0.5 flex-shrink-0" />
                <span className="font-medium">Mon–Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </address>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-extrabold text-white text-lg mb-6 tracking-tight">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <a
                    href={service.href}
                    className="flex items-center gap-2 text-slate-400 text-sm hover:text-[#BE7F51] transition-all duration-300 group hover:translate-x-1"
                  >
                    <ArrowRight size={14} className="text-[#BE7F51]/0 group-hover:text-[#BE7F51] transition-colors" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Local SEO links */}
          <div>
            <h3 className="font-extrabold text-white text-lg mb-6 tracking-tight">Service Areas</h3>
            <ul className="space-y-3">
              {locations.map((locItem, i) => (
                <li key={i}>
                  <Link
                    href={`/digital-marketing-agency-${locItem.slug}`}
                    className="flex items-center gap-2 text-slate-400 text-sm hover:text-[#BE7F51] transition-all duration-300 group hover:translate-x-1"
                  >
                    <MapPin size={14} className="text-[#BE7F51]/50 group-hover:text-[#BE7F51] transition-colors flex-shrink-0" />
                    {locItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Map embed placeholder + CTA */}
          <div>
            <h3 className="font-extrabold text-white text-lg mb-6 tracking-tight">Locate Us</h3>
            <div className="rounded-2xl overflow-hidden mb-6 border border-slate-700/50 shadow-lg relative group">
              <div className="absolute inset-0 bg-[#BE7F51]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.3802008!3d17.4480298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ccd329e2c9%3A0xa0bba1a951c49bbe!2sSKYHIT%20MEDIA%20-%20Branding%20and%20Digital%20Marketing%20Agency%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SKYHIT Media Office Location - HITEC City Hyderabad"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full bg-[#BE7F51] hover:bg-[#BE7F51] text-white font-bold py-4 rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-[#BE7F51]/25"
            >
              Get Directions <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} SKYHIT Media — Premium Digital Agency in {loc}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-400">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

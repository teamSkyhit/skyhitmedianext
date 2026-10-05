import { MapPin, Phone, Mail, Clock, ArrowRight, Search } from 'lucide-react';
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

const seoLinks = [
  { name: 'SEO Company Hyderabad', href: '/seo-company-hyderabad' },
  { name: 'SEO Services Hyderabad', href: '/seo-services-hyderabad' },
  { name: 'SEO Agency Hyderabad', href: '/seo-agency-hyderabad' },
  { name: 'Local SEO Services Hyderabad', href: '/local-seo-services-hyderabad' },
  { name: 'Technical SEO Services Hyderabad', href: '/technical-seo-services-hyderabad' },
  { name: 'E-Commerce SEO Hyderabad', href: '/ecommerce-seo-hyderabad' },
  { name: 'Enterprise SEO Services Hyderabad', href: '/enterprise-seo-services-hyderabad' },
  { name: 'SEO Consultant Hyderabad', href: '/seo-consultant-hyderabad' },
  { name: 'SEO Audit Services Hyderabad', href: '/seo-audit-services-hyderabad' },
  { name: 'SEO For Small Businesses', href: '/seo-for-small-businesses-hyderabad' },
];

export default function SEOClusterFooter() {
  const loc = "Hyderabad";

  return (
    <footer id="seo-footer" className="relative bg-[#5F6B70] text-white pt-16 pb-8 border-t border-slate-700">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#DCBE9E]/50 to-transparent"></div>
      
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-600">

          {/* Column 1: NAP */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/header%20skyhit%20logo%20desktop.png"
                alt="Skyhit Media Logo"
                width={160}
                height={60}
                className="brightness-0 invert opacity-100"
                loading="lazy"
              />
            </Link>
            <p className="text-slate-200 text-sm leading-relaxed mb-8">
              {loc}&apos;s premium digital marketing agency — driving aggressive revenue growth through data-driven SEO, Google Ads, and performance marketing.
            </p>
            <address className="not-italic space-y-4">
              <a href="https://maps.google.com/?q=SKYHIT+MEDIA" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-slate-200 hover:text-[#DCBE9E] transition-colors group">
                <MapPin size={18} className="text-[#DCBE9E] mt-0.5 flex-shrink-0" />
                <span className="leading-snug group-hover:text-white transition-colors">3rd Floor, Door No:301 Vipra Elite,<br />Patrika Nagar, street No:1,<br />Madhapur, Hyderabad, Telangana 500081</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Phone size={18} className="text-[#DCBE9E] flex-shrink-0" />
                <a href="tel:+919030279661" className="hover:text-[#DCBE9E] transition-colors font-medium">+91 9030279661</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Mail size={18} className="text-[#DCBE9E] flex-shrink-0" />
                <a href="mailto:contact@skyhitmedia.com" className="hover:text-[#DCBE9E] transition-colors font-medium">contact@skyhitmedia.com</a>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <Clock size={18} className="text-[#DCBE9E] mt-0.5 flex-shrink-0" />
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
                    className="flex items-center gap-2 text-slate-200 text-sm hover:text-[#DCBE9E] transition-all duration-300 group hover:translate-x-1"
                  >
                    <ArrowRight size={14} className="text-[#DCBE9E]/0 group-hover:text-[#DCBE9E] transition-colors" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SEO Specialized Links */}
          <div>
            <h3 className="font-extrabold text-white text-lg mb-6 tracking-tight">Core SEO Services</h3>
            <ul className="space-y-3">
              {seoLinks.map((locItem, i) => (
                <li key={i}>
                  <Link
                    href={locItem.href}
                    className="flex items-center gap-2 text-slate-200 text-sm hover:text-[#DCBE9E] transition-all duration-300 group hover:translate-x-1"
                  >
                    <Search size={14} className="text-[#DCBE9E]/50 group-hover:text-[#DCBE9E] transition-colors flex-shrink-0" />
                    {locItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Map embed placeholder + CTA */}
          <div>
            <h3 className="font-extrabold text-white text-lg mb-6 tracking-tight">Find Us</h3>
            <div className="rounded-2xl overflow-hidden mb-6 border border-slate-600/50 shadow-lg relative group">
              <div className="absolute inset-0 bg-[#DCBE9E]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.3802008!3d17.4480298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ccd329e2c9%3A0xa0bba1a951c49bbe!2sSKYHIT%20MEDIA%20-%20Branding%20and%20Digital%20Marketing%20Agency%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SKYHIT Media Office Location - HITEC City Hyderabad"
                className="opacity-90 hover:opacity-100 transition-all duration-500"
              />
            </div>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full bg-[#DCBE9E] hover:bg-[#b09070] text-[#1a202c] font-bold py-4 rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-[#DCBE9E]/25"
            >
              Get Free Consultation <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-300 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} SKYHIT Media — Best Digital Marketing Agency in {loc}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

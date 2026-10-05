"use client";

import { useState } from "react";
import { ChevronDown, MapPin, CheckCircle2 } from "lucide-react";

/* ─── Internal service page links ─── */
const SERVICE_LINKS: Record<string, string> = {
  "Search Engine Optimization (SEO)": "/search-engine-optimization-agency",
  "Google Ads Management": "/pay-per-click-advertising-agency",
  "Meta Ads (Facebook & Instagram)": "/social-media-marketing-agency",
  "Website Design & Development": "/website-design-and-development-services",
  "Social Media Marketing": "/social-media-marketing-agency",
  "Performance Marketing": "/Performance-marketing-agency",
  "WhatsApp Marketing & Automation": "/whatsapp-marketing-agency",
  "Online Reputation Management": "/online-reputation-management-agency",
};

const LOCATION_SLUGS: Record<string, string> = {
  "Jubilee Hills": "#hyderabad-locations",
  "Banjara Hills": "#hyderabad-locations",
  "HITEC City": "#hyderabad-locations",
  "Madhapur": "#hyderabad-locations",
  "Gachibowli": "#hyderabad-locations",
  "Kondapur": "#hyderabad-locations",
  "Financial District": "#hyderabad-locations",
  "Kukatpally": "#hyderabad-locations",
  "Miyapur": "#hyderabad-locations",
  "Secunderabad": "#hyderabad-locations",
  "Begumpet": "#hyderabad-locations",
  "Manikonda": "#hyderabad-locations",
  "Nanakramguda": "#hyderabad-locations",
  "Kokapet": "#hyderabad-locations",
};

/* ─── Accordion data ─── */
const sections = [
  {
    id: "why-hyderabad",
    title: "Why Businesses in Hyderabad Choose SKYHIT Media",
    icon: "🏙️",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
        <p>
          Hyderabad is one of India's fastest-growing business destinations, home to thriving
          industries such as IT, real estate, healthcare, education, manufacturing, retail, and
          eCommerce. With thousands of businesses competing for attention online, simply having a
          website is no longer enough.
        </p>
        <p>
          At <strong className="text-[#BE7F51]">SKYHIT Media</strong>, we help businesses attract
          the right audience, generate qualified leads, and increase revenue through data-driven
          digital marketing strategies. Whether your goal is improving Google rankings, generating
          high-quality leads, increasing online sales, or building a stronger brand, our team creates
          customized marketing campaigns focused on measurable business growth.
        </p>
        <p>
          From startups to established enterprises, businesses across{" "}
          {["Jubilee Hills", "Banjara Hills", "Gachibowli", "Madhapur", "Kondapur", "HITEC City", "Financial District", "Kukatpally", "Miyapur", "Secunderabad"].map((loc, i, arr) => (
            <span key={loc}>
              <a href={LOCATION_SLUGS[loc]} className="text-[#BE7F51] hover:underline font-medium">
                {loc}
              </a>
              {i < arr.length - 1 ? ", " : " "}
            </span>
          ))}
          trust SKYHIT Media as their digital growth partner.
        </p>
      </div>
    ),
  },
  {
    id: "services",
    title: "Complete Digital Marketing Services Under One Roof",
    icon: "🎯",
    content: (
      <div className="space-y-5">
        <p className="text-slate-600 text-sm leading-relaxed">
          Unlike agencies that specialize in only one channel, SKYHIT Media provides end-to-end
          digital marketing solutions designed to help businesses grow at every stage of the customer
          journey.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              name: "Search Engine Optimization (SEO)",
              desc: "Improve your Google rankings, increase organic traffic, and generate consistent enquiries by targeting high-intent keywords with technical SEO, local SEO, on-page optimization, and authority-building strategies.",
              icon: "📈",
            },
            {
              name: "Google Ads Management",
              desc: "Generate qualified leads quickly with ROI-focused Google Search, Display, Shopping, Performance Max, and YouTube advertising campaigns managed by certified PPC specialists.",
              icon: "🎯",
            },
            {
              name: "Meta Ads (Facebook & Instagram)",
              desc: "Reach your ideal customers through highly targeted Facebook and Instagram campaigns designed for lead generation, brand awareness, remarketing, and conversions.",
              icon: "📱",
            },
            {
              name: "Website Design & Development",
              desc: "Build fast, mobile-friendly, SEO-optimized websites that deliver an outstanding user experience and convert visitors into customers.",
              icon: "💻",
            },
            {
              name: "Social Media Marketing",
              desc: "Strengthen your online presence with engaging content, community management, and paid social media campaigns that grow your brand consistently.",
              icon: "📣",
            },
            {
              name: "Performance Marketing",
              desc: "Every campaign is tracked using real business metrics including leads, conversions, revenue, ROAS, and customer acquisition cost — ensuring maximum return on your investment.",
              icon: "📊",
            },
            {
              name: "WhatsApp Marketing & Automation",
              desc: "Increase customer engagement using WhatsApp Business API, automated workflows, broadcast campaigns, and CRM integrations that simplify communication.",
              icon: "💬",
            },
            {
              name: "Online Reputation Management",
              desc: "Build trust by managing customer reviews, improving Google Business Profile visibility, and protecting your brand's online reputation.",
              icon: "⭐",
            },
          ].map((service) => (
            <a
              key={service.name}
              href={SERVICE_LINKS[service.name] ?? "#"}
              className="group flex gap-3 p-4 rounded-xl border border-[#dcbe9e]/40 bg-[#dcbe9e]/5 hover:bg-[#dcbe9e]/15 hover:border-[#BE7F51]/50 transition-all duration-300"
            >
              <span className="text-xl flex-shrink-0 mt-0.5">{service.icon}</span>
              <div>
                <h4 className="font-semibold text-[#45556C] text-sm group-hover:text-[#BE7F51] transition-colors mb-1">
                  {service.name} →
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "why-skyhit",
    title: "Why SKYHIT Media Stands Apart",
    icon: "🏆",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          Choosing a digital marketing partner is an investment in your business growth. Here&apos;s
          why hundreds of businesses choose{" "}
          <a href="/" className="text-[#BE7F51] hover:underline font-medium">SKYHIT Media</a>.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Local Hyderabad Market Expertise",
              desc: "We understand customer behavior, competition, and search trends across Hyderabad, allowing us to build campaigns that connect with your local audience.",
            },
            {
              title: "Customized Growth Strategies",
              desc: "Every business is unique. We create personalized digital marketing plans based on your goals, industry, competition, and budget.",
            },
            {
              title: "Complete In-House Team",
              desc: "Our SEO specialists, Google Ads experts, Meta Ads strategists, web developers, designers, and content writers work together under one roof to deliver consistent results.",
            },
            {
              title: "Transparent Performance Reporting",
              desc: "Track every click, lead, conversion, and campaign performance through detailed monthly reports and clear communication.",
            },
            {
              title: "ROI-Driven Marketing",
              desc: "We focus on business outcomes — not vanity metrics — by optimizing campaigns to increase qualified leads, conversions, and long-term profitability.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
            >
              <CheckCircle2 className="text-[#BE7F51] flex-shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="font-semibold text-[#45556C] text-sm mb-1">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "industries",
    title: "Industries We Help Grow",
    icon: "🏭",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          Our digital marketing strategies are tailored to businesses across a wide range of
          industries. Explore our{" "}
          <a href="#industries" className="text-[#BE7F51] hover:underline font-medium">
            industry-specific expertise
          </a>
          .
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { name: "Real Estate Developers", emoji: "🏗️", href: "#industries" },
            { name: "Healthcare & Hospitals", emoji: "🏥", href: "#industries" },
            { name: "Educational Institutions", emoji: "🎓", href: "#industries" },
            { name: "E-commerce Brands", emoji: "🛒", href: "#industries" },
            { name: "Restaurants & Cafés", emoji: "🍽️", href: "#industries" },
            { name: "Fitness & Gyms", emoji: "💪", href: "#industries" },
            { name: "Manufacturing Companies", emoji: "⚙️", href: "#industries" },
            { name: "Financial Services", emoji: "💰", href: "#industries" },
            { name: "Interior Designers", emoji: "🎨", href: "#industries" },
            { name: "Construction & Infrastructure", emoji: "🏢", href: "#industries" },
            { name: "Software & IT Companies", emoji: "💻", href: "#industries" },
            { name: "Professional Services", emoji: "👔", href: "#industries" },
            { name: "Automotive Businesses", emoji: "🚗", href: "#industries" },
            { name: "Startups & SMEs", emoji: "🚀", href: "#industries" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 p-3 rounded-xl bg-[#dcbe9e]/10 border border-[#dcbe9e]/30 hover:bg-[#dcbe9e]/25 hover:border-[#BE7F51]/50 transition-all duration-200 group"
            >
              <span className="text-base">{item.emoji}</span>
              <span className="text-xs font-medium text-slate-700 group-hover:text-[#BE7F51] transition-colors leading-tight">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "framework",
    title: "Our Proven Growth Framework",
    icon: "⚙️",
    content: (
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              step: "01",
              title: "Business Discovery",
              desc: "We understand your business, audience, competitors, and growth objectives.",
              color: "from-[#dcbe9e]/30 to-[#dcbe9e]/10",
            },
            {
              step: "02",
              title: "Digital Growth Strategy",
              desc: "A customized roadmap is created based on SEO opportunities, paid advertising, content marketing, and conversion optimization.",
              color: "from-[#BE7F51]/20 to-[#BE7F51]/5",
            },
            {
              step: "03",
              title: "Campaign Execution",
              desc: "Our specialists launch and manage campaigns across multiple digital channels while maintaining consistent messaging.",
              color: "from-slate-100 to-slate-50",
            },
            {
              step: "04",
              title: "Continuous Optimization",
              desc: "Using analytics, A/B testing, and performance tracking, we continuously improve campaign performance to maximize ROI.",
              color: "from-slate-800/10 to-slate-800/5",
            },
          ].map((item) => (
            <div
              key={item.step}
              className={`bg-gradient-to-br ${item.color} border border-[#dcbe9e]/30 rounded-2xl p-5 relative overflow-hidden`}
            >
              <div className="absolute top-3 right-3 text-4xl font-black text-[#dcbe9e]/40 leading-none">
                {item.step}
              </div>
              <p className="text-[#BE7F51] text-xs font-bold uppercase tracking-widest mb-2">
                Step {item.step}
              </p>
              <h4 className="font-bold text-[#45556C] text-sm mb-2">{item.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "locations",
    title: "Businesses We Serve Across Hyderabad",
    icon: "📍",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          SKYHIT Media proudly partners with businesses located across Hyderabad. Whether you&apos;re
          a startup, a growing business, or an established enterprise, our team builds digital
          marketing strategies tailored to your local market.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {Object.keys(LOCATION_SLUGS).map((loc) => (
            <a
              key={loc}
              href={LOCATION_SLUGS[loc]}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-[#dcbe9e]/20 hover:border-[#BE7F51]/50 transition-all duration-200 group"
            >
              <MapPin size={12} className="text-[#BE7F51] flex-shrink-0" />
              <span className="text-xs font-medium text-slate-700 group-hover:text-[#BE7F51] transition-colors">
                {loc}
              </span>
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-2">
          Looking for{" "}
          <a href="/digital-marketing-agency-hyderabad" className="text-[#BE7F51] hover:underline">
            digital marketing services near you in Hyderabad
          </a>
          ? Contact us for a free consultation.
        </p>
      </div>
    ),
  },
];

/* ─── Main Component ─── */
const WhyChooseAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("why-hyderabad");

  return (
    <section
      id="why-choose-accordion"
      className="py-12 md:py-20 bg-white"
      aria-label="Why Businesses in Hyderabad Choose SKYHIT Media"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className="text-[#BE7F51] font-semibold uppercase tracking-widest text-sm mb-3"
            style={{ fontFamily: "var(--font-base)" }}
          >
            Everything You Need to Know
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#45556C] mb-4"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Why SKYHIT Media is Hyderabad&apos;s{" "}
            <span className="text-[#BE7F51]">Most Trusted</span> Digital Marketing Agency
          </h2>
          <div className="w-16 h-1 bg-[#dcbe9e] mx-auto rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {sections.map((section) => {
            const isOpen = openId === section.id;
            return (
              <div
                key={section.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#BE7F51]/50 shadow-lg shadow-[#dcbe9e]/20"
                    : "border-slate-200 hover:border-[#dcbe9e]/60"
                }`}
              >
                {/* Trigger */}
                <button
                  className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors duration-300 ${
                    isOpen ? "bg-gradient-to-r from-[#dcbe9e]/20 to-white" : "bg-white hover:bg-slate-50"
                  }`}
                  onClick={() => setOpenId(isOpen ? null : section.id)}
                  aria-expanded={isOpen}
                  id={`accordion-btn-${section.id}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? "bg-[#BE7F51] text-white" : "bg-[#dcbe9e]/20 text-slate-700"
                      }`}
                    >
                      {section.icon}
                    </span>
                    <h3
                      className={`font-semibold text-base leading-snug transition-colors duration-300 ${
                        isOpen ? "text-[#BE7F51]" : "text-[#45556C]"
                      }`}
                      style={{ fontFamily: "var(--font-base)" }}
                    >
                      {section.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-[#BE7F51]" : "text-slate-400"
                    }`}
                    size={20}
                  />
                </button>

                {/* Panel */}
                {isOpen && (
                  <div
                    className="px-6 pb-6 pt-2 bg-white border-t border-[#dcbe9e]/30"
                    role="region"
                    aria-labelledby={`accordion-btn-${section.id}`}
                  >
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-[#BE7F51] hover:bg-[#a86b40] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#BE7F51]/30"
            style={{ fontFamily: "var(--font-base)" }}
          >
            Get Your Free Strategy Session →
          </a>
          <p className="text-slate-400 text-xs mt-3">
            Free audit · No long-term contracts · Hyderabad-based team
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAccordion;

import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    industry: 'Real Estate',
    client: 'A Leading Hyderabad Developer',
    challenge: 'The client was spending ₹3L/month on Meta Ads with a cost-per-lead of ₹1,800 and very low site visit conversions. They needed quality over quantity.',
    solution: 'We rebuilt their funnel from scratch — revamped landing pages, audience segmentation, and introduced WhatsApp-based lead nurturing sequences.',
    results: [
      '↓ 68% reduction in Cost Per Lead (₹1,800 → ₹578)',
      '↑ 4.2x increase in qualified site visits',
      '₹2.4 Cr in sales pipeline generated in 90 days',
    ],
    tag: 'Meta Ads + CRO',
    tagColor: 'bg-primary',
  },
  {
    industry: 'Hospitals & Healthcare',
    client: 'Multi-Specialty Clinic, Jubilee Hills',
    challenge: 'The clinic had zero online visibility. Competitors were dominating "doctor near me" searches, and they were losing 200+ monthly inquiries to rivals.',
    solution: 'Executed a 3-month SEO blitz — Google Business Profile optimization, 40 medical service pages, structured data markup, and local citations across 50+ directories.',
    results: [
      '↑ 312% increase in organic website traffic',
      '#1 ranking for "best cardiologist Hyderabad" in 90 days',
      '180+ new monthly patient appointments from organic search',
    ],
    tag: 'SEO + Local',
    tagColor: 'bg-green-600',
  },
  {
    industry: 'Education & Coaching',
    client: 'EdTech Startup, Madhapur',
    challenge: 'High ad spend with poor ROAS on Google Ads. The client was getting clicks but zero conversions due to irrelevant keyword targeting and a weak landing page.',
    solution: 'Restructured the entire Google Ads account with SKAGs, introduced Performance Max campaigns, and redesigned the landing page with a clear CTA hierarchy.',
    results: [
      '↑ 520% improvement in ROAS (1.2x → 7.5x)',
      '↓ 55% reduction in Cost Per Enrollment',
      '340 new paid enrollments in the first batch after optimization',
    ],
    tag: 'Google Ads + PPC',
    tagColor: 'bg-orange-600',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-champagne-600 font-semibold uppercase tracking-widest text-sm mb-3">Proof Over Promises</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary text-center mb-6">
            Real Case Studies from Hyderabad Businesses
          </h2>
          <p className="text-lg text-primary/80 text-center max-w-3xl mx-auto mb-12 md:mb-16">
            We don&apos;t just talk results — we document them. Here&apos;s how we&apos;ve transformed businesses across Hyderabad.
          </p>
        </div>

        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left: Industry badge & visual */}
                <div className="lg:w-1/4 bg-gradient-to-br from-slate-800 to-slate-900 p-8 flex flex-col justify-center items-center text-center">
                  <span className={`${study.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest`}>
                    {study.tag}
                  </span>
                  <p className="text-slate-300 text-sm mb-2 uppercase tracking-widest">Industry</p>
                  <h3 className="text-white text-2xl font-bold mb-4">{study.industry}</h3>
                  <p className="text-slate-400 text-sm">{study.client}</p>
                </div>

                {/* Right: Challenge → Solution → Results */}
                <div className="lg:w-3/4 p-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-500 font-bold text-sm">!</span>
                      </div>
                      <h4 className="font-bold text-[#45556C] text-sm uppercase tracking-widest text-red-600">The Challenge</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <ArrowRight className="text-primary" size={14} />
                      </div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Our Solution</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="text-green-500" size={14} />
                      </div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-green-600">Results Achieved</h4>
                    </div>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                          <span className="text-slate-700 text-sm font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

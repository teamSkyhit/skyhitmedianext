import { Building2, Hospital, GraduationCap, UtensilsCrossed, Factory, TrendingUp, Rocket, Dumbbell, Hammer, Palette } from 'lucide-react';

const industries = [
  {
    icon: <Building2 className="text-secondary" size={36} />,
    name: 'Real Estate',
    description: 'Generate qualified buyer & seller leads with hyper-local SEO and targeted Google Ads for your projects.',
    color: 'from-secondary/5 to-secondary/10',
    borderColor: 'border-secondary/20',
  },
  {
    icon: <Hospital className="text-primary" size={36} />,
    name: 'Hospitals & Clinics',
    description: 'Patient acquisition campaigns with HIPAA-friendly ad strategies, reputation management & local SEO.',
    color: 'from-primary/5 to-primary/10',
    borderColor: 'border-primary/20',
  },
  {
    icon: <GraduationCap className="text-champagne-500" size={36} />,
    name: 'Education & Coaching',
    description: 'Fill your batches with high-intent student leads through Meta Ads, YouTube & Search campaigns.',
    color: 'from-champagne-500/10 to-champagne-500/20',
    borderColor: 'border-champagne-500/30',
  },
  {
    icon: <UtensilsCrossed className="text-secondary" size={36} />,
    name: 'Restaurants & Cafes',
    description: 'Drive footfall and online orders with mouth-watering social content, Google Maps optimization & Zomato-beating SEO.',
    color: 'from-secondary/5 to-secondary/10',
    borderColor: 'border-secondary/20',
  },
  {
    icon: <Factory className="text-primary" size={36} />,
    name: 'Manufacturing & B2B',
    description: 'Generate high-value B2B leads through LinkedIn Ads, industrial SEO and targeted PPC campaigns.',
    color: 'from-primary/5 to-primary/10',
    borderColor: 'border-primary/20',
  },
  {
    icon: <TrendingUp className="text-champagne-500" size={36} />,
    name: 'Finance & Insurance',
    description: 'Compliant digital marketing for BFSI brands — build trust, drive enquiries, and grow your AUM.',
    color: 'from-champagne-500/10 to-champagne-500/20',
    borderColor: 'border-champagne-500/30',
  },
  {
    icon: <Rocket className="text-secondary" size={36} />,
    name: 'Startups & SaaS',
    description: 'Go from 0 to 1 faster. We build full-funnel growth engines for early-stage startups and SaaS companies.',
    color: 'from-secondary/5 to-secondary/10',
    borderColor: 'border-secondary/20',
  },
  {
    icon: <Dumbbell className="text-primary" size={36} />,
    name: 'Gyms & Wellness',
    description: 'Membership campaigns, class bookings and brand building for fitness centers, spas and wellness studios.',
    color: 'from-primary/5 to-primary/10',
    borderColor: 'border-primary/20',
  },
  {
    icon: <Hammer className="text-champagne-500" size={36} />,
    name: 'Builders & Developers',
    description: 'Project launches, site visits, and pre-launch buzz — we turn your blueprints into bookings.',
    color: 'from-champagne-500/10 to-champagne-500/20',
    borderColor: 'border-champagne-500/30',
  },
  {
    icon: <Palette className="text-secondary" size={36} />,
    name: 'Interior Designers',
    description: 'Showcase your portfolio to high-net-worth clients searching for premium home & office designers in Hyderabad.',
    color: 'from-secondary/5 to-secondary/10',
    borderColor: 'border-secondary/20',
  },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-champagne-600 font-semibold uppercase tracking-widest text-sm mb-3">Sector-Specific Expertise</p>
          <h2 className="text-4xl font-bold text-[#45556C] mb-4">
            Industries We Serve in Hyderabad
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We have hands-on experience delivering measurable growth across 10+ high-growth industries in the Hyderabad market.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${industry.color} border ${industry.borderColor} p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default text-center`}
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>
              <h3 className="text-sm font-bold text-[#45556C] mb-2">{industry.name}</h3>
              <p className="text-slate-500 text-xs leading-relaxed hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white border border-gray-200 shadow-xl rounded-xl p-4 w-56 z-10 text-left">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Expanded description list for SEO */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className={`flex items-start gap-4 bg-gradient-to-r ${industry.color} border ${industry.borderColor} p-5 rounded-xl`}>
              <div className="flex-shrink-0 mt-1">{industry.icon}</div>
              <div>
                <h3 className="font-bold text-[#45556C] mb-1">{industry.name}</h3>
                <p className="text-slate-600 text-sm">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

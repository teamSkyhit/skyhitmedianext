import { Award, Target, Zap, Users } from 'lucide-react';

interface WhyChooseProps {
  locationName?: string;
}

const WhyChoose: React.FC<WhyChooseProps> = ({ locationName }) => {
  const features = [
    {
      icon: <Award className="text-champagne-500" size={48} />,
      title: 'Proven ROI Focus',
      description: 'We don’t just track clicks; we track revenue. Our campaigns have generated a 500% average increase in ROAS for our clients.',
      stat: '500% avg. ROAS increase'
    },
    {
      icon: <Users className="text-primary" size={48} />,
      title: 'Dedicated Account Manager',
      description: 'You get a dedicated marketing expert who understands your business, providing you with one point of contact for all campaigns.',
      stat: '1-on-1 Strategy'
    },
    {
      icon: <Target className="text-green-500" size={48} />,
      title: '100% Transparent Reports',
      description: 'No hidden metrics or confusing jargon. You get access to live dashboards showing exactly how your budget is performing.',
      stat: 'Live Dashboards'
    },
    {
      icon: <Award className="text-purple-500" size={48} />,
      title: 'Certified Marketing Experts',
      description: 'Our team holds top-tier certifications from Google, Meta, and HubSpot, ensuring your campaigns are handled by true professionals.',
      stat: 'Google & Meta Partners'
    },
    {
      icon: <Zap className="text-yellow-500" size={48} />,
      title: 'Custom Marketing Strategy',
      description: 'We never use cookie-cutter templates. Every campaign is custom-built around your specific business model and local market.',
      stat: '100% Custom Built'
    },
    {
      icon: <Target className="text-red-500" size={48} />,
      title: 'Lightning Fast Support',
      description: 'Questions? We reply instantly. Our local team is always available to optimize, pivot, or report on your campaigns.',
      stat: '< 2 Hour Response'
    },
    {
      icon: <Users className="text-secondary" size={48} />,
      title: 'Data-Driven Decisions',
      description: 'We use advanced analytics and AI to optimize your campaigns daily, squeezing the maximum value out of every single rupee.',
      stat: 'Daily Optimizations'
    },
    {
      icon: <Zap className="text-champagne-500" size={48} />,
      title: 'Local Hyderabad Expertise',
      description: 'We know the Hyderabad market intimately. From Jubilee Hills to Gachibowli, we know how local customers search and buy.',
      stat: 'Deep Local Insights'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary text-center mb-12 md:mb-16">
          Why 200+ Businesses Choose SkyHit Media
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#45556C] mb-4">{feature.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
              <div className="bg-champagne-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                {feature.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

import { Award, Target, Zap, Users } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const features = [
    {
      icon: <Award className="text-champagne-500" size={48} />,
      title: 'Proven Results',
      description: '500+ websites delivered with an average 32% increase in conversions. Our track record speaks for itself.',
      stat: '300% avg. conversion increase'
    },
    {
      icon: <Target className="text-blue-500" size={48} />,
      title: 'Built for Your Goals',
      description: "We don't do templates. Every website is custom-crafted around your specific business objectives.",
      stat: '100% custom solutions'
    },
    {
      icon: <Zap className="text-green-500" size={48} />,
      title: 'Blazing Fast & SEO-Ready',
      description: 'Lightning-fast websites that rank well on Google and convert visitors into customers.',
      stat: '<2 second load times'
    },
    {
      icon: <Users className="text-purple-500" size={48} />,
      title: 'Done-for-You Optimization',
      description: 'We implement advanced conversion psychology so your site becomes an automated sales machine.',
      stat: '24/7 sales automation'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          Why 500+ Businesses Choose SkyHit Media
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
              <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
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

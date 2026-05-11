import { Check } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🔧',
      title: 'Custom Website Design',
      description: 'Tailored UI/UX that reflects your brand, engages users, and drives measurable results for your business.',
      features: ['Brand-aligned design', 'User experience optimization', 'Conversion-focused layouts']
    },
    {
      icon: '📱',
      title: 'Mobile-First Development',
      description: 'Your site will work flawlessly on every device — because 70%+ of your traffic comes from mobile users.',
      features: ['Responsive design', 'Touch-optimized interface', 'Fast mobile loading']
    },
    {
      icon: '⚙️',
      title: 'SEO Optimization',
      description: 'From technical SEO to on-page content — we make sure Google finds you and ranks you higher.',
      features: ['Technical SEO setup', 'Content optimization', 'Local SEO integration']
    },
    {
      icon: '📦',
      title: 'Premium Add-Ons',
      description: 'Landing Pages, Blogs, Lead Magnets, Sales Funnels, Hosting Support & Advanced Analytics.',
      features: ['Lead generation systems', 'Analytics & tracking', 'Ongoing support']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          Complete Website Solutions That Drive Results
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-champagne-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="text-green-500" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

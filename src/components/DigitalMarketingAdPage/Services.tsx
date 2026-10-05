import { Check } from 'lucide-react';

interface ServicesProps {
  locationName?: string;
}

const Services: React.FC<ServicesProps> = ({ locationName }) => {
  const loc = locationName || "Hyderabad";

  const services = [
    {
      icon: '🔍',
      title: 'Search Engine Optimization',
      description: `Rank at the top of Google for high-intent keywords to capture customers searching for you in ${loc}.`,
      features: ['Technical SEO Audits', 'On-Page SEO', 'Link Building', 'Local SEO (GMB)'],
      link: '/search-engine-optimization-agency'
    },
    {
      icon: '🎯',
      title: 'Google Ads (PPC)',
      description: 'Laser-targeted Search and Display campaigns that generate immediate, high-quality leads.',
      features: ['Search Campaigns', 'Display Ads', 'Performance Max', 'A/B Testing'],
      link: '/pay-per-click-advertising-agency'
    },
    {
      icon: '📱',
      title: 'Meta Ads',
      description: 'High-converting Facebook and Instagram ads tailored for lead generation and e-commerce sales.',
      features: ['Audience Retargeting', 'Lead Gen Ads', 'Creative Testing', 'ROAS Tracking'],
      link: '/social-media-marketing-agency'
    },
    {
      icon: '💻',
      title: 'Website Design',
      description: 'Stunning, modern UI/UX design that builds trust and establishes your brand authority.',
      features: ['Custom UI/UX', 'Mobile-First', 'Brand Aligned', 'Figma Prototyping'],
      link: '/website-design-and-development-services'
    },
    {
      icon: '⚡',
      title: 'Website Development',
      description: 'Fast, secure, and scalable websites built on modern tech stacks like Next.js and React.',
      features: ['Custom Code', 'CMS Integration', 'API Connections', 'Speed Optimization'],
      link: '/website-design-and-development-company-in-hyderabad'
    },
    {
      icon: '🛒',
      title: 'E-commerce Solutions',
      description: 'Robust online stores built to handle massive traffic and maximize your checkout conversions.',
      features: ['Shopify/WooCommerce', 'Payment Gateways', 'Inventory Sync', 'Cart Abandonment'],
      link: '/website-design-and-development-company-in-hyderabad'
    },
    {
      icon: '💬',
      title: 'WhatsApp Marketing',
      description: 'Automated conversational marketing directly on WhatsApp to nurture and close leads instantly.',
      features: ['Automated Broadcasts', 'Chatbot Setup', 'CRM Integration', '24/7 Support Bots'],
      link: '/whatsapp-marketing-agency'
    },
    {
      icon: '📈',
      title: 'Social Media Management',
      description: 'Build a loyal organic following with engaging content, community management, and brand storytelling.',
      features: ['Content Strategy', 'Video Production', 'Community Management', 'Monthly Calendars'],
      link: '/social-media-marketing-agency'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary text-center mb-12 md:mb-16">
          Complete Digital Marketing Solutions For {loc} Businesses
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a
              href={service.link}
              key={index}
              className="block bg-white p-8 rounded-2xl shadow-lg border-l-4 border-champagne-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#45556C] mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="text-green-500" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <span className="text-champagne-500 font-semibold group-hover:text-champagne-600">Learn More &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

const PainSolutions: React.FC = () => {
  const painSolutions = [
    {
      painIcon: '😤',
      painTitle: 'Your Website Looks Outdated',
      painText: 'Visitors judge your business in 0.05 seconds. An outdated design screams "unprofessional" and sends customers running to competitors.',
      solutionIcon: '✨',
      solutionTitle: 'Modern, Trust-Building Design',
      solutionText: 'We create stunning, professional websites that instantly build credibility and make visitors want to do business with you.'
    },
    {
      painIcon: '📱',
      painTitle: "Mobile Users Can't Use Your Site",
      painText: "70% of traffic is mobile. If your site doesn't work perfectly on phones, you're losing 7 out of 10 potential customers.",
      solutionIcon: '🚀',
      solutionTitle: 'Mobile-First Development',
      solutionText: 'Every site we build works flawlessly on all devices. Your mobile users will love the experience and convert at higher rates.'
    },
    {
      painIcon: '🐌',
      painTitle: 'Slow Loading = Lost Sales',
      painText: 'A 1-second delay reduces conversions by 7%. Slow websites cost you thousands in lost revenue every month.',
      solutionIcon: '⚡',
      solutionTitle: 'Lightning-Fast Performance',
      solutionText: 'Our websites load in under 2 seconds. Fast sites rank higher on Google and convert visitors into customers.'
    },
    {
      painIcon: '🔍',
      painTitle: 'Nobody Can Find You Online',
      painText: "Without proper SEO, your website is invisible. You're missing out on thousands of potential customers searching for your services.",
      solutionIcon: '📈',
      solutionTitle: 'SEO-Optimized from Day 1',
      solutionText: 'We build SEO into every page. Your site will rank higher, get more traffic, and generate more leads automatically.'
    }
  ];

  return (
    <section id="pain-points" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          Are These Problems Costing You Money Every Day?
        </h2>
        <div className="space-y-12">
          {painSolutions.map((item, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-[#f5f3ee] p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-5xl mb-4">{item.painIcon}</div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">{item.painTitle}</h3>
                <p className="text-slate-700 text-lg leading-relaxed">{item.painText}</p>
              </div>
              <div className="bg-[#4a5568] p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-5xl mb-4">{item.solutionIcon}</div>
                <h3 className="text-2xl font-bold text-600 mb-4 text-[#ffffff]">{item.solutionTitle}</h3>
                <p className="text-700 text-[#fff] text-lg leading-relaxed">{item.solutionText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSolutions;

interface PainSolutionsProps {
  locationName?: string;
}

const PainSolutions: React.FC<PainSolutionsProps> = ({ locationName }) => {
  const loc = locationName || "Hyderabad";

  const painSolutions = [
    {
      painIcon: '💸',
      painTitle: 'Wasting Money on Ads with Zero ROI',
      painText: 'You are spending heavily on Google and Meta ads, but getting low-quality leads or no conversions at all. Your CPA is skyrocketing.',
      solutionIcon: '🎯',
      solutionTitle: 'Laser-Targeted Performance Ads',
      solutionText: `We build high-converting ad funnels that target the exact people ready to buy in ${loc}, dropping your CPA and maximizing ROI.`
    },
    {
      painIcon: '🔍',
      painTitle: "Invisible on Google Searches",
      painText: `When customers in ${loc} search for your services, your competitors show up first. You are losing organic, high-intent traffic every day.`,
      solutionIcon: '📈',
      solutionTitle: 'SEO Dominance on Page 1',
      solutionText: 'We optimize your website to rank at the top of Google for local and industry keywords, ensuring you capture every organic search.'
    },
    {
      painIcon: '📉',
      painTitle: 'Social Media Followers, But No Sales',
      painText: 'You have followers and engagement on Instagram or Facebook, but it is not translating into actual revenue or footfall for your business.',
      solutionIcon: '💰',
      solutionTitle: 'Revenue-Driven Social Media',
      solutionText: 'We transform your social media into a lead-generation machine with compelling creatives and offers that actually drive sales.'
    },
    {
      painIcon: '🤔',
      painTitle: 'No Clear Strategy or Tracking',
      painText: "You don't know which marketing channels are working. You have no reliable data on your Customer Acquisition Cost (CAC).",
      solutionIcon: '📊',
      solutionTitle: '100% Transparent Analytics',
      solutionText: 'We implement advanced tracking so you see exactly where every rupee goes and the exact ROI every campaign generates.'
    }
  ];

  return (
    <section id="pain-points" className="pt-4 pb-12 md:pt-12 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary text-center mb-12 md:mb-16">
          Problems Businesses Face Without Digital Marketing
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

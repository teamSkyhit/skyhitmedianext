const Process: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Tell Us Your Goals',
      description: 'Share your vision, challenges, and business objectives in a free consultation call',
      time: 'Day 1'
    },
    {
      number: '2',
      title: 'Get a Free Proposal Within 24H',
      description: 'Receive a detailed project proposal with timeline, pricing, and conversion strategy',
      time: 'Day 2'
    },
    {
      number: '3',
      title: 'Go Live in 7-15 Days',
      description: 'Launch your high-converting website and start seeing results immediately',
      time: 'Days 7-15'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          Our Proven 3-Step Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300 relative"
            >
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-champagne-500/10 rounded-full"></div>
              <div className="w-16 h-16 bg-champagne-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{step.description}</p>
              <div className="bg-champagne-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                {step.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

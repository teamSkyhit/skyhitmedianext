"use client";

interface ExclusiveSolutionProps {
  scrollToSection: (sectionId: string) => void;
}

const ExclusiveSolution: React.FC<ExclusiveSolutionProps> = ({ scrollToSection }) => {
  const steps = [
    {
      number: '1',
      title: 'Psychology-Based Design',
      description: 'We use proven conversion psychology to guide visitors toward your desired action'
    },
    {
      number: '2',
      title: 'Trust Signal Optimization',
      description: 'Strategic placement of testimonials, guarantees, and social proof to eliminate buying hesitation'
    },
    {
      number: '3',
      title: 'Conversion Funnel Integration',
      description: 'Every page is designed to move visitors through your sales funnel automatically'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-champagne-500/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-champagne-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-6 animate-bounce">
            EXCLUSIVE
          </div>
          <h2 className="text-5xl font-bold mb-6">The SkyHit 3-Step Conversion System™</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The secret weapon that&apos;s helped 500+ businesses increase their online sales by 300%+
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 bg-champagne-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection('form')}
            className="bg-champagne-500 hover:bg-champagne-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors transform hover:scale-105 animate-pulse"
          >
            🔥 Get This System For Your Business
          </button>
          <p className="text-champagne-400 font-semibold mt-4">
            ⚡ Limited Time: First 10 clients get 50% off implementation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveSolution;

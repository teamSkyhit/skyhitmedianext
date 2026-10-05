import { forwardRef } from 'react';

const Stats = forwardRef<HTMLElement>((_, ref) => {
  const statsData = [
    { number: 500, label: 'Campaigns Scaled', suffix: '+' },
    { number: 450, label: 'Average ROAS Increase', suffix: '%' },
    { number: 95, label: 'Client Retention Rate', suffix: '%' },
    { number: 1, label: 'Support Response', suffix: 'h' }
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-[#3b4b61] text-white relative overflow-hidden mt-10">
      <div className="absolute inset-0 bg-gradient-to-r from-champagne-500/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-12 md:mb-16">📊 Success by the Numbers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="text-5xl font-bold text-champagne-400 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-lg text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Stats.displayName = 'Stats';

export default Stats;

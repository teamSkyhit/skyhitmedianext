import { forwardRef } from 'react';

interface StatsProps {
  stats: {
    projects: number;
    conversion: number;
    retention: number;
    response: number;
  };
}

const Stats = forwardRef<HTMLElement, StatsProps>(({ stats }, ref) => {
  const statsData = [
    { number: stats.projects, label: 'Projects Completed', suffix: '+' },
    { number: stats.conversion, label: 'Average Conversion Increase', suffix: '%' },
    { number: stats.retention, label: 'Client Retention Rate', suffix: '%' },
    { number: stats.response, label: 'Response Time', suffix: 'h' }
  ];

  return (
    <section ref={ref} className="py-20 bg-slate-800 text-white relative overflow-hidden mt-10">
      <div className="absolute inset-0 bg-gradient-to-r from-champagne-500/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">📊 Success by the Numbers</h2>
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

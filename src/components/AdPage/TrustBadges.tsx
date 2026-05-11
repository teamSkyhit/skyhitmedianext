const TrustBadges: React.FC = () => {
  const badges = [
    { icon: '🏆', text: 'Google Partner Certified' },
    { icon: '🔒', text: 'SSL Secured' },
    { icon: '⚡', text: '99.9% Uptime' },
    { icon: '📱', text: 'Mobile First' },
    { icon: '🎯', text: 'Conversion Optimized' },
    { icon: '💰', text: 'Money Back Guarantee' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
              </div>
              <span className="text-sm font-semibold text-slate-700 text-center">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

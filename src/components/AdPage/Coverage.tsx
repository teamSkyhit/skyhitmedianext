import Image from 'next/image';

const Coverage: React.FC = () => {
  const locations = [
    { name: 'India', flag: '/images/flag-img-01.png' },
    { name: 'Canada', flag: '/images/flag-img-02.png' },
    { name: 'UAE', flag: '/images/flag-img-03.png' },
    { name: 'USA', flag: '/images/flag-img-04.png' },
    { name: 'UK', flag: '/images/flag-img-05.png' },
    { name: 'Australia', flag: '/images/flag-img-06.png' },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-8">
          🌍 We&apos;ve Helped Businesses Grow in 15+ Countries
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {locations.map((location, index) => (
            <span
              key={index}
              className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full font-semibold text-slate-700 hover:bg-champagne-500 hover:text-white transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              {location.flag && (
                <Image
                  src={location.flag}
                  alt={`${location.name} flag`}
                  width={20}
                  height={20}
                  className="object-contain"
                  loading="lazy"
                  unoptimized
                />
              )}
              {location.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;

import { MapPin } from 'lucide-react';
import Link from 'next/link';

const locations = [
  { area: 'Jubilee Hills', slug: 'jubilee-hills' },
  { area: 'Banjara Hills', slug: 'banjara-hills' },
  { area: 'Gachibowli', slug: 'gachibowli' },
  { area: 'Madhapur', slug: 'madhapur' },
  { area: 'HITEC City', slug: 'hitec-city' },
  { area: 'Kondapur', slug: 'kondapur' },
  { area: 'Financial District', slug: 'financial-district' },
  { area: 'Kukatpally', slug: 'kukatpally' },
  { area: 'Miyapur', slug: 'miyapur' },
  { area: 'Secunderabad', slug: 'secunderabad' },
];

const HyderabadLocations: React.FC = () => {
  return (
    <section id="hyderabad-locations" className="py-12 md:py-20 bg-[#0B0F19]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white mb-10">
          Serving Hyderabad
        </h2>

        <div className="flex flex-col space-y-5">
          {locations.map((loc, index) => (
            <Link
              key={index}
              href={`/digital-marketing-agency-${loc.slug}`}
              className="flex items-start gap-4 group"
            >
              <div className="mt-1">
                <MapPin className="text-slate-400 group-hover:text-champagne-500 transition-colors" size={20} strokeWidth={1.5} />
              </div>
              <span className="text-[1.35rem] text-slate-400 group-hover:text-champagne-500 font-medium transition-colors">
                Digital Marketing Agency {loc.area}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HyderabadLocations;

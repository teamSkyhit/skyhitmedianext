import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    content: 'We were specifically looking for a Google Partner agency in Hyderabad, and this team did an excellent job. Their expertise in Google Ads helped us generate quality leads consistently. Highly recommended!',
    author: 'Ravali Ravva',
    position: 'Client',
    location: 'Hyderabad',
    result: '↑ Consistent Quality Leads',
    resultColor: 'bg-green-100 text-green-700',
    initials: 'RR',
    avatarColor: 'bg-primary',
    date: 'Recent',
  },
  {
    rating: 5,
    content: 'Very professional team in Hyderabad. Being a certified Google Partner and Meta Partner, they have deep knowledge of performance marketing and helped us scale our campaigns effectively.',
    author: 'Sri Kanth',
    position: 'Client',
    location: 'Hyderabad',
    result: '↑ Scaled Campaigns Effectively',
    resultColor: 'bg-blue-100 text-blue-700',
    initials: 'SK',
    avatarColor: 'bg-purple-600',
    date: 'Recent',
  },
  {
    rating: 5,
    content: 'One of the best marketing companies in India! They provide end to end support and help grow business.',
    author: 'Satya',
    position: 'Client',
    location: 'India',
    result: '↑ End-to-End Support',
    resultColor: 'bg-orange-100 text-orange-700',
    initials: 'S',
    avatarColor: 'bg-green-600',
    date: 'Recent',
  },
  {
    rating: 5,
    content: 'From so many years we are struggling to find perfect digital marketing company in Hyderabad. Worked with 3 other companies before but after working with venky and his team skyhit media my struggle regarding my online sales got a perfect solution. Highly Recommended….',
    author: 'Sai Alekhya',
    position: 'Client',
    location: 'Hyderabad',
    result: '↑ Perfect Sales Solution',
    resultColor: 'bg-teal-100 text-teal-700',
    initials: 'SA',
    avatarColor: 'bg-teal-600',
    date: 'Recent',
  },
  {
    rating: 5,
    content: 'Such a nice startup company. People are well professional and have great attention to detail. Definitely this Digital Marketing Agency will reach the heights. Highly recommended!',
    author: 'Teja Kumar',
    position: 'Client',
    location: 'Hyderabad',
    result: '↑ Great Attention to Detail',
    resultColor: 'bg-red-100 text-red-700',
    initials: 'TK',
    avatarColor: 'bg-orange-600',
    date: 'Recent',
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-slate-500 font-semibold uppercase tracking-widest text-sm mb-3">Client Reviews</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#45556C] text-center mb-6">
            Real Results. Real Businesses. Real Growth.
          </h2>
          {/* Aggregate Google Rating */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <span className="text-2xl font-bold text-[#45556C]">5.0</span>
            <StarRating count={5} />
            <span className="text-slate-500 text-sm">from 70+ Google Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Header: Avatar + Name + Google logo */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#45556C] text-sm">{testimonial.author}</div>
                    <div className="text-slate-500 text-xs">{testimonial.position}</div>
                    <div className="text-slate-400 text-xs">{testimonial.location}</div>
                  </div>
                </div>
                {/* Google G logo */}
                <div className="flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>

              {/* Star Rating & Date */}
              <div className="flex items-center justify-between mb-3">
                <StarRating count={testimonial.rating} />
                <span className="text-slate-400 text-xs">{testimonial.date}</span>
              </div>

              {/* Review content */}
              <div className="relative flex-1 mb-4">
                <Quote className="absolute -top-1 -left-1 text-slate-200" size={30} />
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              {/* Result badge */}
              <div className={`${testimonial.resultColor} px-3 py-1.5 rounded-full text-xs font-bold inline-self-start`}>
                {testimonial.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

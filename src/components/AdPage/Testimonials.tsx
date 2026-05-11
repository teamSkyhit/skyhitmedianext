const Testimonials: React.FC = () => {
  const testimonials = [
    {
      rating: '⭐⭐⭐⭐⭐',
      content: 'SkyHit Media redesigned our entire web presence and we saw a 3x jump in qualified leads within the first month. The ROI has been incredible.',
      author: 'Rohit Jain',
      position: 'Director, Apex Logistics',
      result: '300% increase in leads'
    },
    {
      rating: '⭐⭐⭐⭐⭐',
      content: 'The team understood our vision perfectly and delivered a high-converting website in under 2 weeks. Our online sales doubled immediately.',
      author: 'Nisha Verma',
      position: 'Co-Founder, FitBlitz India',
      result: '200% sales increase'
    },
    {
      rating: '⭐⭐⭐⭐⭐',
      content: 'Finally, a web agency that delivers on their promises. Our bounce rate dropped by 60% and conversions are through the roof!',
      author: 'Arjun Singh',
      position: 'CEO, TechCorp Solutions',
      result: '60% bounce rate reduction'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          Real Results. Real Businesses. Real Growth.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border-l-4 border-champagne-500 hover:bg-white hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="absolute top-4 left-4 text-6xl text-champagne-500/20 font-serif">&ldquo;</div>
              <div className="mb-4 text-lg">{testimonial.rating}</div>
              <p className="text-slate-700 text-lg italic mb-6 leading-relaxed relative z-10">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-champagne-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-slate-800">{testimonial.author}</div>
                  <div className="text-slate-600 text-sm">{testimonial.position}</div>
                </div>
              </div>
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
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

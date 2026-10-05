import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-12 md:py-12 md:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p className="text-slate-400 font-semibold uppercase tracking-widest text-sm mb-4">
          Limited Free Slots Available This Month
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready To Turn Organic Search Into A{' '}
          <span className="text-slate-400">Revenue Engine?</span>
        </h2>
        <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Join 200+ Hyderabad businesses that have transformed their online presence with SKYHIT Media. Book your free audit and strategy call today — no strings attached.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { value: '200+', label: 'Happy Clients' },
            { value: '500%', label: 'Avg. ROI Increase' },
            { value: '12+', label: 'Years Experience' },
            { value: '5.0★', label: 'Google Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-slate-200">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/50"
          >
            Get Free Marketing Audit <ArrowRight size={18} />
          </a>
          <a
            href="https://wa.me/919030279661?text=Hi%20SKYHIT%20Media%2C%20I%20am%20interested%20in%20digital%20marketing%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
          <a
            href="tel:+919030279661"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            <Phone size={18} /> Call Now: +91 9030279661
          </a>
        </div>

        <p className="text-slate-400 text-sm">
          ✓ Free audit &nbsp;•&nbsp; ✓ No long-term contract &nbsp;•&nbsp; ✓ 30-day results guarantee
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;

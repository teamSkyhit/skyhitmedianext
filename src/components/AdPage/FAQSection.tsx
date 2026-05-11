const FAQ: React.FC = () => {
  const faqs = [
    {
      question: '✅ Will it be mobile-optimized?',
      answer: 'Absolutely! Every website we build is mobile-first and works perfectly on all devices and screen sizes.'
    },
    {
      question: '✅ Can I update my website after it\'s built?',
      answer: 'Yes! We provide easy-to-use CMS access and offer ongoing maintenance support packages.'
    },
    {
      question: '✅ What if I already have a website?',
      answer: 'No problem! We can revamp your existing site or migrate it to a new platform with zero downtime.'
    },
    {
      question: '✅ Do you offer branding and content too?',
      answer: 'Yes! We provide complete branding, copywriting, and content creation services as add-ons.'
    },
    {
      question: '✅ What\'s your guarantee?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy, we\'ll make it right or refund your money.'
    },
    {
      question: '✅ How fast will I see results?',
      answer: 'Most clients see improved metrics within the first week of launch, with significant growth in 30 days.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          💬 Still Have Questions?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-champagne-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-4">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

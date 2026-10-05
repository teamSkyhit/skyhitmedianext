import { Clock, ArrowRight, Tag } from 'lucide-react';

const articles = [
  {
    category: 'SEO',
    categoryColor: 'bg-green-100 text-green-700',
    title: 'How to Rank #1 on Google in Hyderabad: A 2025 Local SEO Guide',
    excerpt: 'A complete, actionable guide to dominating Google search results for your Hyderabad business — from Google Business Profile optimization to local link building.',
    readTime: '8 min read',
    date: 'July 2025',
    slug: '/blog/local-seo-guide-hyderabad',
  },
  {
    category: 'Google Ads',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: 'Google Ads for Small Businesses in Hyderabad: Budget Strategy & Tips',
    excerpt: 'Learn how to run profitable Google Ads campaigns on a limited budget. Real strategies from our Hyderabad PPC team with before/after ROAS data.',
    readTime: '6 min read',
    date: 'June 2025',
    slug: '/blog/google-ads-small-business-hyderabad',
  },
  {
    category: 'Meta Ads',
    categoryColor: 'bg-purple-100 text-purple-700',
    title: 'Meta Ads vs Google Ads: Which is Better for Hyderabad Businesses in 2025?',
    excerpt: 'A head-to-head comparison of Meta and Google Ads for Hyderabad businesses across 5 key industries, with real CPL data from our campaigns.',
    readTime: '7 min read',
    date: 'June 2025',
    slug: '/blog/meta-ads-vs-google-ads-hyderabad',
  },
  {
    category: 'Social Media',
    categoryColor: 'bg-pink-100 text-pink-700',
    title: 'Instagram Marketing for Hyderabad Businesses: 2025 Playbook',
    excerpt: 'From Reels strategy to influencer marketing — our complete Instagram growth playbook for local businesses in Hyderabad looking to build brand awareness.',
    readTime: '9 min read',
    date: 'May 2025',
    slug: '/blog/instagram-marketing-hyderabad',
  },
  {
    category: 'Website Design',
    categoryColor: 'bg-orange-100 text-orange-700',
    title: 'Why Your Hyderabad Business Website is Losing Customers (And How to Fix It)',
    excerpt: 'We audited 50 Hyderabad business websites and found these 8 conversion killers. Here\'s how to fix them without a complete redesign.',
    readTime: '5 min read',
    date: 'May 2025',
    slug: '/blog/website-conversion-optimization-hyderabad',
  },
  {
    category: 'WhatsApp Marketing',
    categoryColor: 'bg-teal-100 text-teal-700',
    title: 'WhatsApp Business API: The Secret Weapon for Hyderabad Businesses in 2025',
    excerpt: 'How Hyderabad businesses are using the WhatsApp Business API to achieve 94% open rates and generate 3x more revenue from existing customers.',
    readTime: '6 min read',
    date: 'April 2025',
    slug: '/blog/whatsapp-marketing-hyderabad',
  },
];

const RelatedBlogs: React.FC = () => {
  return (
    <section id="related-blogs" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-champagne-600 font-semibold uppercase tracking-widest text-sm mb-2">Knowledge Hub</p>
            <h2 className="text-4xl font-bold text-[#45556C]">
              Latest Marketing Insights
            </h2>
          </div>
          <a
            href="/blog"
            className="flex items-center gap-2 text-champagne-600 font-semibold hover:text-champagne-700 transition-colors group whitespace-nowrap"
          >
            View all articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.slug}
              className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group block bg-white"
            >
              {/* Color header bar */}
              <div className="h-2 bg-gradient-to-r from-champagne-400 to-champagne-600" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${article.categoryColor} text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}>
                    <Tag size={10} />
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Clock size={12} />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="font-bold text-[#45556C] text-base leading-snug mb-3 group-hover:text-champagne-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs">{article.date}</span>
                  <span className="text-champagne-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;

import { Car, ShoppingCart, Heart, DollarSign, GraduationCap, Building, Gamepad2, Scale, Wrench, Shirt, HandHeart } from 'lucide-react';
import { Industry } from '../types/Industry';

export const industries: Industry[] = [
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive',
    emoji: '🚘',
    headline: 'Leaders in Automotive Digital Marketing',
    subheadline: 'Proven Results in the Auto Industry: From Dealerships to OEMs, We Drive Sales Like No One Else.',
    cpl: '₹70',
    benefits: [
      'CPL starting at ₹70 with verified intent leads',
      'End-to-end funnel: ad → inquiry → test drive → sale',
      '92% of leads qualified by our proprietary verification model',
      'Up to 4X increase in showroom closures',
      '40% lower CPA compared to traditional campaigns',
      'Guaranteed 30–35% ROI in the first 90 days'
    ],
    testimonial: {
      quote: "Before working with SKYHIT MEDIA, we struggled to fill test drive slots. Now, we're closing more leads every week with lower ad spend. The results speak for themselves.",
      author: "Mr. Arjun Mehta",
      position: "Sales Head, Elite Motors"
    },
    cta: "Read more",
    color: 'from-champagne-400 to-green-500',
    bgImage: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce & Retail',
    emoji: '🛍️',
    headline: 'Turn Browsers Into Buyers — At Scale',
    subheadline: 'We help D2C and marketplace brands unlock sales with precision-targeted campaigns that reduce CPL, recover carts, and amplify ROI.',
    cpl: '₹35',
    benefits: [
      'Verified intent-driven traffic at ₹35 CPL',
      'Dynamic retargeting for abandoned carts',
      '2.5X increase in conversion rate',
      'Automated product feed ads',
      '30% avg. ROI within 90 days'
    ],
    testimonial: {
      quote: "Our conversion rates doubled within 60 days. SKYHIT MEDIA's retargeting campaigns brought back customers we thought were lost forever.",
      author: "Priya Sharma",
      position: "Founder, StyleHub"
    },
    cta: "Read more",
    color: 'from-green-400 to-blue-500',
    bgImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg'
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Health Care & Wellness',
    emoji: '🏥',
    headline: 'Acquire High-Quality Patients. Grow Trust.',
    subheadline: 'From multi-specialty clinics to wellness centers, we deliver appointment-ready leads who actually show up.',
    cpl: '₹60',
    benefits: [
      'HIPAA-compliant, verified leads',
      'Appointment booking funnels that convert',
      '3X increase in walk-ins',
      '₹60 average CPL',
      '25% month-over-month ROI growth'
    ],
    testimonial: {
      quote: "Patient acquisition was our biggest challenge. SKYHIT MEDIA delivered quality leads that actually convert to appointments.",
      author: "Dr. Rajesh Kumar",
      position: "Director, HealthFirst Clinic"
    },
    cta: "Read more",
    color: 'from-red-400 to-pink-500',
    bgImage: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg'
  },
  {
    id: 'finance',
    icon: DollarSign,
    title: 'Finance & Wealth Management',
    emoji: '💼',
    headline: 'Acquire Investors, Borrowers & Clients — Responsibly',
    subheadline: 'We help mutual funds, NBFCs, and wealth advisors generate qualified, KYC-ready leads at industry-best CPAs.',
    cpl: '₹40',
    benefits: [
      'CPL starting ₹40',
      '100% verified, compliant lead data',
      'High-conversion LPs for loan & fund services',
      '4X increase in SIPs and signups',
      'Personalized re-engagement flows'
    ],
    testimonial: {
      quote: "The quality of leads from SKYHIT MEDIA is exceptional. Our loan approval rates increased by 60% with their targeted campaigns.",
      author: "Amit Patel",
      position: "VP Marketing, SecureFinance"
    },
    cta: "Read more",
    color: 'from-emerald-400 to-teal-500',
    bgImage: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education & Online Learning',
    emoji: '🎓',
    headline: 'Fill More Classrooms. Increase Enrollments.',
    subheadline: 'From test-prep to edtech to universities — we connect high-intent learners with your offerings.',
    cpl: '₹45',
    benefits: [
      '₹45 avg. CPL for verified student leads',
      '3X increase in admission inquiries',
      'CRM-integrated inquiry management',
      'Smart remarketing to reduce drop-off',
      '25–35% ROI guaranteed'
    ],
    testimonial: {
      quote: "Our enrollment numbers tripled after partnering with SKYHIT MEDIA. Their understanding of the education sector is remarkable.",
      author: "Prof. Meera Singh",
      position: "Admissions Head, TechEd Institute"
    },
    cta: "Read more",
    color: 'from-blue-400 to-indigo-500',
    bgImage: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg'
  },
  {
    id: 'realestate',
    icon: Building,
    title: 'Real Estate',
    emoji: '🏢',
    headline: 'Generate Site Visits, Not Just Clicks',
    subheadline: 'We help developers, builders & channel partners get real leads that convert into walkthroughs and bookings.',
    cpl: '₹80',
    benefits: [
      '₹80 CPL for qualified buyer leads',
      'Local geo-fencing & intent targeting',
      '2X increase in site visit confirmations',
      'Integrated lead verification and scoring',
      'Up to 32% ROI on active campaigns'
    ],
    testimonial: {
      quote: "Site visits increased by 200% within the first month. SKYHIT MEDIA understands the real estate buyer journey perfectly.",
      author: "Rohit Agarwal",
      position: "Sales Director, Prime Properties"
    },
    cta: "Read more",
    color: 'from-purple-400 to-violet-500',
    bgImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
  },
  {
    id: 'gaming',
    icon: Gamepad2,
    title: 'Entertainment & Gaming',
    emoji: '🎮',
    headline: 'Get More Players. Keep Them Engaged.',
    subheadline: 'From mobile games to OTT platforms, we drive high-LTV users who stick — not just click.',
    cpl: '₹20-30',
    benefits: [
      '₹20–30 CPI range with high retention',
      'Custom audiences based on in-app actions',
      'AB-tested creatives for top CTRs',
      'Re-engagement via CRM and ads',
      'Anti-fraud installs only (SDK verified)'
    ],
    testimonial: {
      quote: "User retention improved dramatically with SKYHIT MEDIA's campaigns. They know how to find players who actually engage.",
      author: "Vikash Jain",
      position: "Growth Lead, GameStudio"
    },
    cta: "Read more",
    color: 'from-pink-400 to-rose-500',
    bgImage: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
  },
  {
    id: 'legal',
    icon: Scale,
    title: 'Legal Services',
    emoji: '⚖️',
    headline: 'More Consultations. Less Chasing Leads.',
    subheadline: 'We help law firms, legal tech startups, and solo lawyers attract qualified clients through smart local and digital outreach.',
    cpl: '35-40%',
    benefits: [
      'Verified leads with case type filter',
      'Booking-ready inquiries',
      '35–40% reduction in CPL',
      'Content-first funnel to build authority',
      'Geo + interest targeting for niche areas'
    ],
    testimonial: {
      quote: "Client consultations increased by 150% with higher quality leads. SKYHIT MEDIA transformed our practice.",
      author: "Adv. Sunita Reddy",
      position: "Managing Partner, Legal Associates"
    },
    cta: "Read more",
    color: 'from-slate-400 to-gray-600',
    bgImage: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg'
  },
  {
    id: 'homeservices',
    icon: Wrench,
    title: 'Home Services',
    emoji: '🏡',
    headline: 'Booked Jobs, Not Just Website Visits',
    subheadline: 'From cleaning and plumbing to interior design and renovation — we bring leads that call, book, and pay.',
    cpl: '₹50-75',
    benefits: [
      '₹50–₹75 CPL based on service',
      'Location-specific targeting',
      'Call-qualified inquiries only',
      'Booking calendars synced with leads',
      '24/7 lead nurturing flows'
    ],
    testimonial: {
      quote: "Our booking calendar is now full every week. SKYHIT MEDIA delivers leads that actually convert to paying customers.",
      author: "Ravi Kumar",
      position: "Owner, HomeFixPro Services"
    },
    cta: "Read more",
    color: 'from-champagne-400 to-red-500',
    bgImage: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg'
  },
  {
    id: 'fashion',
    icon: Shirt,
    title: 'Fashion & Influencer Marketing',
    emoji: '👗',
    headline: 'Make Style Go Viral — with Strategy',
    subheadline: 'We help fashion labels and influencers grow fast with trend-first ads, audience-building, and viral-ready funnels.',
    cpl: '₹40',
    benefits: [
      '₹40 CPL for apparel & lifestyle brands',
      'Influencer campaigns optimized for sales',
      '5X boost in follower → buyer conversions',
      'UGC, reels & ad synergy',
      'In-app sales integrations (Insta, Meta, Myntra)'
    ],
    testimonial: {
      quote: "Sales from social media increased 400% in just 3 months. SKYHIT MEDIA made our brand go viral with purpose.",
      author: "Neha Kapoor",
      position: "Founder, TrendSetters Fashion"
    },
    cta: "Read more",
    color: 'from-fuchsia-400 to-purple-500',
    bgImage: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg'
  },
  {
    id: 'nonprofit',
    icon: HandHeart,
    title: 'Non-Profit Organizations',
    emoji: '🤝',
    headline: 'Drive Purpose with Performance Marketing',
    subheadline: 'We help NGOs, campaigns, and changemakers build awareness, raise funds, and scale impact digitally.',
    cpl: '₹20-50',
    benefits: [
      'High-intent donor lead funnels',
      '₹20–₹50 CPL for verified cause supporters',
      'Automated storytelling for engagement',
      'Transparent reporting dashboards',
      'Retargeting for re-donations & volunteers'
    ],
    testimonial: {
      quote: "Donations increased by 300% with SKYHIT MEDIA's campaigns. They understand how to connect hearts with causes.",
      author: "Dr. Kavita Sharma",
      position: "Director, Hope Foundation"
    },
    cta: "Read more",
    color: 'from-green-400 to-emerald-500',
    bgImage: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg'
  }
];
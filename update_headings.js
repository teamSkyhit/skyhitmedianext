const fs = require('fs');

const pageContent = {
  'seo-company-hyderabad': {
    h1: 'SEO Company in Hyderabad That Drives Sustainable Organic Growth',
    heroSubTitle: 'Increase your Google rankings, attract qualified organic traffic, and generate more leads with data-driven SEO strategies tailored for businesses in Hyderabad. From technical SEO and content optimization to local SEO and ongoing performance tracking, we help businesses build long-term search visibility and sustainable growth.'
  },
  'seo-services-hyderabad': {
    h1: 'Results-Driven SEO Services in Hyderabad',
    heroSubTitle: 'Transform your digital presence with our comprehensive SEO services. We help businesses in Hyderabad achieve higher rankings, targeted traffic, and better conversions.'
  },
  'seo-agency-hyderabad': {
    h1: 'Award-Winning SEO Agency in Hyderabad',
    heroSubTitle: 'Work with a leading SEO agency that understands your market. We deliver tailored strategies to help you outrank competitors and capture high-intent leads.'
  },
  'local-seo-services-hyderabad': {
    h1: 'Dominate Your Market with Local SEO Services in Hyderabad',
    heroSubTitle: 'Capture customers right in your neighborhood. Our local SEO strategies ensure your business shows up when local customers search for your products or services.'
  },
  'technical-seo-services-hyderabad': {
    h1: 'Advanced Technical SEO Services in Hyderabad',
    heroSubTitle: 'Build a rock-solid foundation for your website. Our technical SEO experts identify and fix complex issues that are holding back your search engine rankings.'
  },
  'ecommerce-seo-hyderabad': {
    h1: 'Drive More Sales with Ecommerce SEO in Hyderabad',
    heroSubTitle: 'Turn your online store into a revenue-generating machine. Our proven eCommerce SEO strategies increase product visibility and drive high-converting traffic.'
  },
  'enterprise-seo-services-hyderabad': {
    h1: 'Enterprise SEO Services in Hyderabad for Massive Scale',
    heroSubTitle: 'Dominate complex and highly competitive search landscapes. We engineer advanced SEO strategies designed specifically for large-scale enterprise websites.'
  },
  'seo-consultant-hyderabad': {
    h1: 'Expert SEO Consultant in Hyderabad',
    heroSubTitle: 'Get actionable insights and tailored advice from a seasoned SEO consultant. We provide the roadmap you need to achieve sustainable organic growth.'
  },
  'seo-audit-services-hyderabad': {
    h1: 'In-Depth SEO Audit Services in Hyderabad',
    heroSubTitle: 'Find out exactly what\\\'s holding your website back. Our comprehensive SEO audits uncover critical issues and provide a clear, prioritized roadmap for higher rankings.'
  },
  'seo-for-small-businesses-hyderabad': {
    h1: 'Affordable SEO for Small Businesses in Hyderabad',
    heroSubTitle: 'Level the playing field against larger competitors. Our tailored SEO solutions for small businesses deliver maximum impact without breaking your budget.'
  }
};

for (const [path, content] of Object.entries(pageContent)) {
  const filePath = `src/app/${path}/page.tsx`;
  if (fs.existsSync(filePath)) {
    let fileStr = fs.readFileSync(filePath, 'utf8');

    // Using Regex to replace the h1 and heroSubTitle props
    fileStr = fileStr.replace(/h1="[^"]*"/, `h1="${content.h1}"`);
    fileStr = fileStr.replace(/heroSubTitle="[^"]*"/, `heroSubTitle="${content.heroSubTitle}"`);

    fs.writeFileSync(filePath, fileStr);
    console.log(`Updated ${path}`);
  }
}

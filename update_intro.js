const fs = require('fs');
const pages = [
  { path: 'seo-company-hyderabad', text: 'TOP SEO COMPANY IN HYDERABAD' },
  { path: 'seo-services-hyderabad', text: 'PROFESSIONAL SEO SERVICES' },
  { path: 'seo-agency-hyderabad', text: 'AWARD-WINNING SEO AGENCY' },
  { path: 'local-seo-services-hyderabad', text: 'EXPERT LOCAL SEO SERVICES' },
  { path: 'technical-seo-services-hyderabad', text: 'TECHNICAL SEO EXPERTS' },
  { path: 'ecommerce-seo-hyderabad', text: 'ECOMMERCE SEO SPECIALISTS' },
  { path: 'enterprise-seo-services-hyderabad', text: 'ENTERPRISE SEO SOLUTIONS' },
  { path: 'seo-consultant-hyderabad', text: 'FREELANCE SEO CONSULTANT' },
  { path: 'seo-audit-services-hyderabad', text: 'COMPREHENSIVE SEO AUDITS' },
  { path: 'seo-for-small-businesses-hyderabad', text: 'AFFORDABLE SMALL BUSINESS SEO' }
];

pages.forEach(p => {
  const filePath = `src/app/${p.path}/page.tsx`;
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace('<SEOClusterUI \n', `<SEOClusterUI \n      introText="${p.text}"\n`);
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + p.path);
  }
});

const fs = require('fs');
const content = fs.readFileSync('user_content.txt', 'utf8');

const pages = [
  'seo-services-hyderabad',
  'seo-company-hyderabad',
  'seo-agency-hyderabad',
  'local-seo-services-hyderabad',
  'technical-seo-services-hyderabad',
  'ecommerce-seo-hyderabad',
  'enterprise-seo-services-hyderabad',
  'seo-consultant-hyderabad',
  'seo-audit-services-hyderabad',
  'seo-for-small-businesses-hyderabad'
];

// Heuristically map the sections from the text.
// The user gave content with headers and paragraphs.
// We'll split the content by "SEO Metadata" to separate pages.
const pageBlocks = content.split('SEO Metadata');

for (const p of pages) {
  // Try to find the block matching this page.
  // We can search for the page's route string or similar.
  const keyword = p.replace(/-/g, ' ');
  const block = pageBlocks.find(b => b.toLowerCase().includes(keyword.toLowerCase()));
  if (!block) continue;
  
  const lines = block.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  const keywordLine = lines.find(l => l.toLowerCase().includes(keyword.toLowerCase()));
  const mainQuestion = keywordLine || lines[1] || lines[0];
  
  const sections = [];
  let currentSection = { texts: [] };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('USER_REQUEST') || line.includes('ADDITIONAL_METADATA') || line === mainQuestion) continue;
    
    // Simple heuristic: short lines might be headings
    if (line.length < 60 && !line.includes('.') && !line.includes(',')) {
      if (currentSection.texts.length > 0) {
        sections.push(currentSection);
      }
      currentSection = { headings: [line], texts: [] };
    } else {
      currentSection.texts.push(line);
    }
  }
  if (currentSection.texts.length > 0) {
    sections.push(currentSection);
  }

  const faqData = [{
    question: mainQuestion,
    sections: sections
  }];
  
  const faqDataString = `const seoFaqData = ${JSON.stringify(faqData, null, 2)};`;
  
  const path = `src/app/${p}/page.tsx`;
  if (fs.existsSync(path)) {
    let fileContent = fs.readFileSync(path, 'utf8');
    
    if (fileContent.includes('const seoFaqData =')) {
      fileContent = fileContent.replace(/const seoFaqData = \[[\s\S]*?\];/, faqDataString);
    } else {
      fileContent = fileContent.replace('export default function', faqDataString + '\n\nexport default function');
    }
    
    if (!fileContent.includes('seoFaqData={seoFaqData}')) {
      fileContent = fileContent.replace('<SEOClusterUI', '<SEOClusterUI\n      seoFaqData={seoFaqData}');
    }
    
    fs.writeFileSync(path, fileContent);
    console.log('Updated ' + p);
  }
}

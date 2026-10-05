const fs = require('fs');
const path = require('path');

const locations = {
  'jubilee-hills': {
    title: 'Digital Marketing Agency in Jubilee Hills Hyderabad | SKYHIT Media',
    description: 'Grow your premium brand with a trusted digital marketing agency in Jubilee Hills Hyderabad offering SEO, Google Ads, Meta Ads & web design.',
    keywords: 'Digital Marketing Agency Jubilee Hills, Digital Marketing Company Jubilee Hills, SEO Services Jubilee Hills, Google Ads Agency Jubilee Hills, Website Design Jubilee Hills, Performance Marketing Jubilee Hills, Social Media Marketing Jubilee Hills'
  },
  'banjara-hills': {
    title: 'Digital Marketing Agency in Banjara Hills Hyderabad | SKYHIT Media',
    description: 'Drive more enquiries with digital marketing services in Banjara Hills Hyderabad including SEO, Google Ads, Meta Ads & website development.',
    keywords: 'Digital Marketing Agency Banjara Hills, Digital Marketing Company Banjara Hills, SEO Services Banjara Hills, Google Ads Agency Banjara Hills, Website Design Banjara Hills, Performance Marketing Banjara Hills, Social Media Marketing Banjara Hills'
  },
  'gachibowli': {
    title: 'Digital Marketing Agency in Gachibowli Hyderabad | SKYHIT Media',
    description: 'Generate quality B2B leads in Gachibowli Hyderabad with SEO, Google Ads, Meta Ads, performance marketing & website development.',
    keywords: 'Digital Marketing Agency Gachibowli, Digital Marketing Company Gachibowli, SEO Services Gachibowli, Google Ads Agency Gachibowli, B2B Marketing Gachibowli, Website Design Gachibowli, Performance Marketing Gachibowli'
  },
  'madhapur': {
    title: 'Digital Marketing Agency in Madhapur Hyderabad | SKYHIT Media',
    description: 'Grow your business in Madhapur Hyderabad with SEO, Google Ads, Meta Ads, social media marketing & high-converting websites.',
    keywords: 'Digital Marketing Agency Madhapur, Digital Marketing Company Madhapur, SEO Services Madhapur, Google Ads Agency Madhapur, Website Design Madhapur, Performance Marketing Madhapur, Social Media Marketing Madhapur'
  },
  'hitec-city': {
    title: 'Digital Marketing Agency in HITEC City Hyderabad | SKYHIT Media',
    description: 'Scale your business in HITEC City Hyderabad with SEO, LinkedIn marketing, Google Ads, Meta Ads & performance marketing.',
    keywords: 'Digital Marketing Agency HITEC City, Digital Marketing Company HITEC City, SEO Services HITEC City, Google Ads Agency HITEC City, LinkedIn Marketing HITEC City, Website Design HITEC City, Performance Marketing HITEC City'
  },
  'kondapur': {
    title: 'Digital Marketing Agency in Kondapur Hyderabad | SKYHIT Media',
    description: 'Attract more customers in Kondapur Hyderabad with SEO, Google Ads, Meta Ads, website design & digital marketing solutions.',
    keywords: 'Digital Marketing Agency Kondapur, Digital Marketing Company Kondapur, SEO Services Kondapur, Google Ads Agency Kondapur, Website Design Kondapur, Performance Marketing Kondapur, Social Media Marketing Kondapur'
  },
  'financial-district': {
    title: 'Digital Marketing Agency in Financial District Hyderabad | SKYHIT Media',
    description: 'Empower your corporate brand in Financial District Hyderabad with SEO, Google Ads, LinkedIn marketing & performance campaigns.',
    keywords: 'Digital Marketing Agency Financial District, Digital Marketing Company Financial District, SEO Services Financial District, Google Ads Agency Financial District, LinkedIn Marketing Financial District, Website Design Financial District, Performance Marketing Financial District'
  },
  'kukatpally': {
    title: 'Digital Marketing Agency in Kukatpally Hyderabad | SKYHIT Media',
    description: 'Increase local leads in Kukatpally Hyderabad through SEO, Google Ads, Meta Ads, website design & social media marketing.',
    keywords: 'Digital Marketing Agency Kukatpally, Digital Marketing Company Kukatpally, SEO Services Kukatpally, Google Ads Agency Kukatpally, Website Design Kukatpally, Performance Marketing Kukatpally, Social Media Marketing Kukatpally'
  },
  'miyapur': {
    title: 'Digital Marketing Agency in Miyapur Hyderabad | SKYHIT Media',
    description: 'Help your business grow in Miyapur Hyderabad with SEO, Google Ads, Meta Ads, website development & local digital marketing.',
    keywords: 'Digital Marketing Agency Miyapur, Digital Marketing Company Miyapur, SEO Services Miyapur, Google Ads Agency Miyapur, Website Design Miyapur, Performance Marketing Miyapur, Social Media Marketing Miyapur'
  },
  'secunderabad': {
    title: 'Digital Marketing Agency in Secunderabad Hyderabad | SKYHIT Media',
    description: 'Strengthen your online presence in Secunderabad Hyderabad with SEO, Google Ads, Meta Ads, website design & lead generation.',
    keywords: 'Digital Marketing Agency Secunderabad, Digital Marketing Company Secunderabad, SEO Services Secunderabad, Google Ads Agency Secunderabad, Website Design Secunderabad, Performance Marketing Secunderabad, Social Media Marketing Secunderabad'
  }
};

const pagesDir = path.join(__dirname, 'src', 'app');

for (const [locSlug, seo] of Object.entries(locations)) {
  const pagePath = path.join(pagesDir, `digital-marketing-agency-${locSlug}`, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    console.warn(`File not found: ${pagePath}`);
    continue;
  }
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  const keywordArrayStr = seo.keywords
    .split(',')
    .map(k => `    "${k.trim()}"`)
    .join(',\n');
  
  const metadataStr = `export const metadata: Metadata = {
  title: "${seo.title}",
  description: "${seo.description}",
  keywords: [
${keywordArrayStr}
  ],
  openGraph: {
    title: "${seo.title}",
    description: "${seo.description}",
    url: "https://skyhitmedia.com/digital-marketing-agency-${locSlug}",
    images: [
      {
        url: "https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png",
        width: 630,
        height: 630,
        alt: "${seo.title}",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "${seo.title}",
    description: "${seo.description}",
    images: ["https://skyhitmedia.com/images/whatsapp-Digital-Marketing-og.png"],
  },
};`;

  const regex = /export const metadata: Metadata = \{[\s\S]*?^\};/m;
  
  if (regex.test(content)) {
    content = content.replace(regex, metadataStr);
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`Updated ${locSlug}`);
  } else {
    console.log(`Could not match metadata in ${locSlug}`);
  }
}

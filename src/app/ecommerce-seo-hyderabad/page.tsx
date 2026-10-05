import type { Metadata } from "next";
import SEOClusterUI from "@/components/SEOCluster/SEOClusterUI";

export const metadata: Metadata = {
  title: "Ecommerce SEO Hyderabad | Ecommerce SEO Services | SKYHIT MEDIA",
  description: "Grow your online store with Ecommerce SEO Services in Hyderabad. Optimize products, categories, technical SEO, schema and organic visibility with SKYHIT MEDIA.",
  keywords: ["Ecommerce SEO Services Hyderabad", "Ecommerce SEO Company Hyderabad", "Ecommerce SEO Agency Hyderabad", "Shopify SEO Hyderabad", "WooCommerce SEO Hyderabad", "Ecommerce Website SEO Hyderabad", "Product SEO Hyderabad", "Online Store SEO Hyderabad"],
  alternates: {
    canonical: "https://skyhitmedia.com/ecommerce-seo-hyderabad",
  },
};

const seoFaqData = [
  {
    "question": "Grow Your Online Store with Performance-Driven Ecommerce SEO",
    "sections": [
      {

        "texts": [
          "Looking for professional Ecommerce <a href='/seo-services-hyderabad'><b>SEO Services in Hyderabad</b></a> to increase your product visibility, organic traffic, and online sales?",
          "SKYHIT MEDIA provides data-driven Ecommerce <a href='/seo-services-hyderabad'><b>SEO Services in Hyderabad</b></a> designed specifically for online stores. We optimize product pages, category pages, website architecture, <a href='/technical-seo-services-hyderabad'><b>technical SEO</b></a>, internal linking, structured data, content, and search visibility to help potential customers discover your products through Google.",
          "Whether you run a Shopify store, WooCommerce website, custom ecommerce platform, or a large online marketplace, our ecommerce SEO strategies are built around your products, customers, search demand, and business goals."
        ]
      },
      {
        "headings": [
          "Ecommerce <a href='/seo-company-hyderabad'><b>SEO Company in Hyderabad</b></a>"
        ],
        "texts": [
          "Ecommerce SEO is different from traditional website SEO."
        ]
      },
      {
        "headings": [
          "Brand pages"
        ],
        "texts": [
          "Without the right SEO structure, important product pages may be difficult for search engines to discover, crawl, understand, and index.",
          "SKYHIT MEDIA develops ecommerce SEO strategies that connect <a href='/technical-seo-services-hyderabad'><b>technical SEO</b></a>, product optimization, content, website architecture, and conversion opportunities.",
          "Google's ecommerce guidance specifically highlights areas such as product data, structured data, URL structure, site navigation, pagination, and helping Google understand ecommerce site architecture."
        ]
      },
      {
        "headings": [
          "Ecommerce <a href='/seo-audit-services-hyderabad'><b>SEO Audit</b></a>"
        ],
        "texts": [
          "We start by analyzing your ecommerce website to identify SEO opportunities and technical issues."
        ]
      },
      {
        "headings": [
          "Search Console issues"
        ],
        "texts": [
          "We then prioritize recommendations based on their potential SEO and business impact."
        ]
      },
      {
        "headings": [
          "Product Page SEO"
        ],
        "texts": [
          "Your product pages are some of the most commercially valuable pages on your website."
        ]
      },
      {
        "headings": [
          "Structured data"
        ],
        "texts": [
          "We focus on creating useful product pages that help both search engines and customers understand what you sell.",
          "Google supports Product and ProductGroup structured data for ecommerce websites, including product variants where applicable."
        ]
      },
      {
        "headings": [
          "Ecommerce Category Page SEO"
        ],
        "texts": [
          "Category and collection pages can capture broader commercial searches and help users discover products."
        ]
      }
    ]
  }
];

export default function Page() {
  return (
    <SEOClusterUI
      seoFaqData={seoFaqData}
      introText="RESULT-DRIVEN SEO"
      h1={"Ecommerce SEO Hyderabad"}
      heroSubTitle={seoFaqData[0]?.sections?.[0]?.texts?.[0] || ""}
    />
  );
}

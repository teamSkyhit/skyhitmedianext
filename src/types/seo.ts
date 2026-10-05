export interface ServiceTab {
  title: string;
  desc: string;
  features: string[];
  image: string;
  alt?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CaseStudy {
  title?: string;
  client?: string;
  metric: string;
  metricLabel: string;
  industry: string;
  description?: string;
  image: string;
  alt?: string;
  timeframe?: string;
  link?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface SEOContentProps {
  servicesData?: ServiceTab[];
  faqData?: FAQItem[];
  caseStudiesData?: CaseStudy[];
  processData?: ProcessStep[];
}

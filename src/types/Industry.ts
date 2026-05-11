// import { DivideIcon as LucideIcon } from 'lucide-react';

// export interface Industry {
//   id: string;
//   icon: LucideIcon;
//   title: string;
//   emoji: string;
//   headline: string;
//   subheadline: string;
//   cpl: string;
//   benefits: string[];
//   testimonial: {
//     quote: string;
//     author: string;
//     position: string;
//   };
//   cta: string;
//   color: string;
//   bgImage: string;
// }



import { DivideIcon } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

export interface Industry {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>; // ✅ Proper type for a Lucide icon
  title: string;
  emoji: string;
  headline: string;
  subheadline: string;
  cpl: string;
  benefits: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  cta: string;
  color: string;
  bgImage: string;
}

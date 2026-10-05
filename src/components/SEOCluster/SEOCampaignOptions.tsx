"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter Audit",
    price: "Custom",
    billing: "",
    subBilling: "Tailored to Your Needs",
    features: [
      "Full Technical SEO Audit",
      "Prioritized Action Plan",
      "1 Strategy Call"
    ],
    buttonText: "Get Started",
    isPopular: false
  },
  {
    name: "Growth Plan",
    price: "Custom",
    billing: "",
    subBilling: "Tailored to Your Needs",
    features: [
      "Everything in Starter",
      "Monthly Technical SEO",
      "24/7 Dashboard Access",
      "Priority Support"
    ],
    buttonText: "Get Started",
    isPopular: true
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    billing: "",
    subBilling: "Tailored to Your Needs",
    features: [
      "Custom Strategy",
      "Advanced Reporting",
      "Dedicated SEO Expert"
    ],
    buttonText: "Contact Us",
    isPopular: false
  }
];

export default function SEOCampaignOptions() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
            SEO & WEB PLANS
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1a202c]">
            Simple, Transparent Pricing
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`bg-white rounded-xl border flex flex-col p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
              plan.isPopular 
                ? 'border-primary shadow-xl relative md:-translate-y-4' 
                : 'border-slate-200 shadow-sm'
            }`}>
              
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-sm font-bold text-slate-500 mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-[#1a202c]">{plan.price}</span>
                  {plan.billing && plan.billing.startsWith("/") && <span className="text-slate-500 font-medium">{plan.billing}</span>}
                </div>
                  
                  {plan.subBilling && (
                    <div className="text-sm font-semibold text-slate-600 mb-6">{plan.subBilling}</div>
                  )}
                  {!plan.subBilling && plan.billing && !plan.billing.startsWith("/") && (
                    <div className="text-sm font-semibold text-slate-600 mb-6">{plan.billing}</div>
                  )}
              </div>
                  
                  <div className="border-t border-slate-100 pt-8 mb-8 flex-grow text-left">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="#contact"
                    className={`block text-center w-full py-3.5 px-6 rounded-md font-bold text-sm transition-all shadow-sm ${
                      plan.isPopular 
                        ? 'bg-secondary/90 hover:bg-secondary text-white shadow-md shadow-secondary/20 hover:shadow-lg' 
                        : plan.name === "Starter Audit"
                        ? 'bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 hover:shadow-lg'
                        : 'bg-white border border-primary/30 text-primary hover:border-primary'
                    }`}
                  >
                    {plan.buttonText}
                  </a>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

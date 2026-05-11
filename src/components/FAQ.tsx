"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string | {
    sections: {
      headings?: string[];
      texts?: string[];
      list?: string[];
    }[];
  };
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderHTML = (html: string) => ({ __html: html });

  return (
    <div className="py-10 px-6 md:px-12 lg:px-24">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#774635] mb-8" />
      <div className="space-y-4 max-w-[1148px] mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#4A555A] border-[2px] border-secondary shadow-md transition-all duration-300 rounded-[42px]"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-[14px] font-medium text-white text-left sm:text-lg"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{faq.question}</span>
              <span className={`text-[16px] transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>▼</span>
            </button>

            {activeIndex === index && (
              <div className="px-6 pt-1 pb-4 text-black text-base bg-white border-t-[1px] border-secondary rounded-b-[42px] animate-[fadeIn_0.2s_ease]">
                {typeof faq.answer === "string" ? (
                  <p>{faq.answer}</p>
                ) : (
                  faq.answer.sections.map((section, idx) => (
                    <div key={idx} className="mb-4">
                      {section.headings?.map((heading, hIdx) => (
                        <h4 key={hIdx} className="font-semibold text-lg mt-4">{heading}</h4>
                      ))}
                      {section.texts?.map((text, tIdx) => (
                        <p key={tIdx} dangerouslySetInnerHTML={renderHTML(text)} />
                      ))}
                      {section.list && (
                        <ul className="list-disc pl-6">
                          {section.list.map((item, listIdx) => (
                            <li key={listIdx} dangerouslySetInnerHTML={renderHTML(item)} />
                          ))}
                        </ul>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

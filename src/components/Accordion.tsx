"use client";

import { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const renderFormattedContent = (text: string) => {
  return text.split('\n').map((paragraph, index) => {
    if (!paragraph.trim()) return null;
    if (paragraph.match(/^\d\./)) {
      const listContent = paragraph.replace(/^\d\.\s*/, '');
      return renderFormattedText(listContent, index, 'list-item');
    }
    return renderFormattedText(paragraph, index);
  });
};

const renderFormattedText = (text: string, key: React.Key | null | undefined, type = 'paragraph') => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  const formattedParts = parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-gray-900">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
  if (type === 'list-item') {
    return (
      <div key={key} className="flex items-center gap-2 mb-2">
        <span className="text-gray-900 text-2xl">•</span>
        <p className="text-gray-600">{formattedParts}</p>
      </div>
    );
  }
  return <p key={key} className="mb-4 text-gray-600 last:mb-0">{formattedParts}</p>;
};

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-[#4A555A] border-[2px] my-[20px] border-secondary shadow-md transition-all duration-300 ${
        isOpen ? "rounded-t-lg rounded-b-md" : "rounded-lg"
      }`}
    >
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-xs md:text-lg font-medium text-left text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white text-gray-600 text-base border-t-[1px] border-secondary animate-[fadeIn_0.2s_ease]">
          {renderFormattedContent(content)}
        </div>
      )}
    </div>
  );
};

export default Accordion;

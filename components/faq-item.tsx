"use client";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
  isLast?: boolean;
}

export default function FAQItem({ question, answer, index, isOpen, onToggle, isLast = false }: FAQItemProps) {
  return (
    <div className={isLast ? "" : "border-b border-gray-200 pb-6"}>
      <button 
        onClick={() => onToggle(index)}
        className="w-full text-left page-subheading mb-3 text-white hover:text-blue-400 transition-colors !font-bold"
      >
        {question} {isOpen ? '−' : '+'}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-white page-content-text-large transform transition-transform duration-300 ease-in-out">{answer}</p>
      </div>
    </div>
  );
}
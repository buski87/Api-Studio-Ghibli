'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FaqItem({ index, isOpen, onToggle, question, answer }) {
  return (
    <div className="rounded-lg bg-[#121f30] border border-[#50b4ff] shadow-lg transition">
      <button
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold text-white hover:bg-[#1a2e46] rounded-t-lg transition"
      >
        <span className="pr-4">{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-[#50b4ff] transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        id={`faq-answer-${index}`}
        className={`px-6 pt-0 overflow-hidden text-gray-300 text-sm transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0 pb-0'
        }`}
      >
        {isOpen && <p className="leading-relaxed">{answer}</p>}
      </div>
    </div>
  );
}

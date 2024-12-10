'use client';
import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-gray-100 last:border-0'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='group flex w-full items-center justify-between py-5 transition-all duration-200 hover:text-indigo-600'
      >
        <h5
          className={`text-lg font-medium transition-colors duration-200 ${
            isOpen ? 'text-indigo-600' : 'text-gray-900'
          }`}
        >
          {question}
        </h5>
        <div
          className={`ml-4 flex-shrink-0 rounded-full bg-gray-50 p-2 transition-all duration-300 group-hover:bg-indigo-50 ${
            isOpen ? 'bg-indigo-50' : ''
          }`}
        >
          <svg
            className={`h-5 w-5 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-indigo-600' : 'text-gray-500'
            }`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] pb-5' : 'max-h-0'}`}>
        <p className='pr-4 text-base leading-relaxed text-gray-600'>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;

"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "How do I add a new question?", answer: "You can add a new question by editing the FAQ component." },
  { question: "Can I insert pictures in my FAQ?", answer: "Yes, you can insert pictures in your FAQ by embedding image tags in the answer." },
  { question: "Can I insert a video in my FAQ?", answer: "Yes, videos can also be embedded in the answer using the video tag or other media components." },
  { question: "How do I edit or remove the 'FAQ title'?", answer: "You can edit or remove the title by changing the header in the FAQ component." },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-10 p-4">
      <h1 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="mb-3">
          <div 
            className="flex justify-between items-center bg-gray-100 py- pr-6 rounded-lg cursor-pointer" 
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center space-x-3">
              <span className="bg-[#589142] text-white text-3xl font-semibold w-20 h-16 flex justify-center items-center">
                {index + 1}
              </span>
              <span className="font-medium text-lg">{item.question}</span>
            </div>
            <span>
              {activeIndex === index ? (
                <FontAwesomeIcon icon={faCircleChevronUp} className="text-[#589142] rounded-full text-2xl" />
              ) : (
                <FontAwesomeIcon icon={faCircleChevronDown} className="text-[#589142] text-2xl" />
              )}
            </span>
          </div>
          {activeIndex === index && (
            <div className="mt-2 px-10 py-4 bg-gray-50 border-l-4 border-[#589142]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
      <div className='flex  justify-center items-center pt-10 pb-10 '>
      <Link href="/Faq" className='inline-block bg-[#589142] py-4 px-8 rounded-md text-white'>
        Read More
      </Link>
      </div>
    </div>
  );
};

export default FAQ;

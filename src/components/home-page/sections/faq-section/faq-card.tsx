import React from 'react';
import { FAQ } from './faq-section';
import { TbChevronDown } from 'react-icons/tb';

interface FAQCardProps {
  faq: FAQ
}

const FAQCard: React.FC<FAQCardProps> = ({
  faq
}) => {
  return (
    <div className='w-full border-2 p-[20px] md:p-[32px] rounded-lg border-main-gray shadow-lg'>
      {/* Title */}
      <div className='flex justify-between items-start mb-4'>
        <h3 className='font-bold text-xl md:text-2xl'>{faq.question}</h3>

        <button>
          <TbChevronDown className='text-[22px] md:text-[28px]' />
        </button>
      </div>
      
      <p>{faq.answer}</p>
    </div>
  );
};

export default FAQCard;
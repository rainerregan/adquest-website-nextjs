"use client"
import React, { useState } from 'react';
import { TbChevronDown, TbChevronUp } from 'react-icons/tb';
import { motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCardProps {
  faq: FAQ;
}

const FAQCard: React.FC<FAQCardProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className='w-full border-2 rounded-lg border-main-gray shadow-lg'
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Title */}
      <div className='flex justify-between items-start p-[20px] md:p-[24px]' onClick={toggleAccordion}>
        <h3 className='font-bold text-xl md:text-2xl'>{faq.question}</h3>

        <button>
          {isOpen ? (
            <TbChevronUp className='text-[22px] md:text-[28px]' />
          ) : (
            <TbChevronDown className='text-[22px] md:text-[28px]' />
          )}
        </button>
      </div>

      {/* Animated Content */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0,},
        }}
        transition={{ duration: 0.4 }}
        style={{ overflow: "hidden" }}
      >
        <div className=' px-[20px] pb-[20px] md:px-[24px] md:pb-[24px]'>
          <p>{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FAQCard;
import React from 'react'
import FAQCard from './faq-card'

export interface FAQ {
  question: string
  answer: string
}

const FaqSection = () => {
  const faqs: FAQ[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1'
    },
    {
      question: 'Question 2',
      answer: 'Answer 2'
    },
    {
      question: 'Question 3',
      answer: 'Answer 3'
    },
    {
      question: 'Question 4',
      answer: 'Answer 4'
    },
    {
      question: 'Question 5',
      answer: 'Answer 5'
    },
    {
      question: 'Question 6',
      answer: 'Answer 6'
    },
  ]

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto pt-[100px] pb-[150px] flex flex-col items-center px-[24px] lg:px-[48px]'>
        <h2 className='h2 max-w-[800px] text-balance !text-center !mb-[100px]'><span>Frequently</span> Asked Questions</h2>

        <div className='flex flex-col gap-[20px] w-full'>
          {faqs.map((faq, index) => (
            <FAQCard key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqSection
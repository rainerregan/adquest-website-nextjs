import React from 'react'
import FAQCard from './faq-card'

export interface FAQ {
  question: string
  answer: string
}

const FaqSection = () => {
  const faqs: FAQ[] = [
    {
      question: 'Question 3',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse autem cum fugiat iure, atque ea, libero temporibus fugit est, assumenda veniam? Atque officia labore, natus pariatur maxime numquam animi sunt?'
    },
    {
      question: 'Question 4',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse autem cum fugiat iure, atque ea, libero temporibus fugit est, assumenda veniam? Atque officia labore, natus pariatur maxime numquam animi sunt?'
    },
    {
      question: 'Question 5',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse autem cum fugiat iure, atque ea, libero temporibus fugit est, assumenda veniam? Atque officia labore, natus pariatur maxime numquam animi sunt?'
    },
    {
      question: 'Question 6',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse autem cum fugiat iure, atque ea, libero temporibus fugit est, assumenda veniam? Atque officia labore, natus pariatur maxime numquam animi sunt?'
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
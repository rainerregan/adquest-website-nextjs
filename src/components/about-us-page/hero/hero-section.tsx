import Button from '@/components/common/button'
import FAQCard from '@/components/home-page/sections/faq-section/faq-card'
import { FAQ } from '@/components/home-page/sections/faq-section/faq-section'
import React from 'react'

export const HeroSection = () => {
  const accordionData: FAQ[] = [
    {
      question: "Mission",
      answer: "Our mission is to help businesses grow by providing them with the best software solutions."
    },
    {
      question: "Vision",
      answer: "Our vision is to be the leading software development company in the world."
    },
    {
      question: "Values",
      answer: "Our values are quality, integrity, and customer satisfaction."
    },
    {
      question: "Our Story",
      answer: "We started as a small team of developers in 2010. Over the years, we have grown into a company with more than 100 employees."
    }
  ]

  return (
    <div className='bg-white'>
      <div className='py-[80px] md:py-[150px] flex flex-col md:flex-row items-start max-w-7xl mx-auto px-[24px] md:px-[48px] gap-[48px] md:gap-[90px]'>
        <div className='md:w-[30%] flex flex-col gap-[24px]'>
          <h1 className='h1'>About <span>Us</span></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ducimus nobis ex cupiditate nihil quae voluptatum delectus totam harum numquam error maiores nesciunt, optio aliquam dolorum quas recusandae molestias eaque.</p>
          <Button>Let&apos;s Talk</Button>
        </div>
        <div className='flex-1 flex flex-col gap-[24px]'>
          {accordionData.map((faq, index) => (
            <FAQCard key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  )
}
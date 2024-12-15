"use client"
import Button from '@/components/common/button'
import Input from '@/components/common/input/input'
import TextArea from '@/components/common/input/textarea'
import FAQCard from '@/components/home-page/sections/faq-section/faq-card'
import { FAQ } from '@/components/home-page/sections/faq-section/faq-section'
import Image from 'next/image'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import egg from '../../../../public/egg.png'

export const HeroSection = () => {
  const accordionData: FAQ[] = [
    {
      question: "Vision",
      answer: "To lead the evolution of interactive entertainment in Indonesia, creating a dynamic hub where players enjoy exciting challenges while gaining real value from their engagement."
    },
    {
      question: "Mission",
      answer: "To inspire and connect players nationwide by delivering innovative gaming experiences that combine exploration, enjoyment, and tangible benefits."
    },
    {
      question: "Values",
      answer: "Our values are quality, integrity, and customer satisfaction."
    },
  ]

  return (
    <div className='bg-white' data-aos="fade-right">
      <div className='py-[80px] md:py-[150px] flex flex-col md:flex-row items-start max-w-7xl mx-auto px-[24px] md:px-[48px] gap-[48px] md:gap-[60px]'>
        <div className='md:w-[50%] flex flex-col gap-[24px]'>
          <h1 className='h1'>About <span>Us</span></h1>
          <p>Di AdQuest, kami merevolusi pengalaman gaming mobile dengan mengintegrasikan peluang "main dan menangkan". Lebih dari 200.000 pemain secara aktif terlibat dengan platform kami, menemukan game baru, dan memperoleh hadiah sambil bermain.</p>
          <HeroContactForm />
        </div>
        <div className='flex-1 flex flex-col gap-[24px]' data-aos="fade-right">
          {accordionData.map((faq, index) => (
            <FAQCard key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface ContactInputs {
  name: string
  email: string
  message: string
}

const HeroContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactInputs>()

  const onSubmit: SubmitHandler<ContactInputs> = async (data) => {
    setIsLoading(true)
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        setIsSuccess(true)
      })
      .catch((err) => {
        setErrorMessage('Failed to send message. Please try again later.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return isSuccess ? (
    <div className='text-green-500'>Message sent successfully!</div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 relative'>
      {isLoading && (
        <div className='w-full h-full bg-gray-200/60 absolute flex items-center justify-center'>
          <Image src={egg} alt="Egg" height={80} className="absolute animate-bounce" />
        </div>
      )}
      {errorMessage && (
        <div className='text-red-500'>{errorMessage}</div>
      )}
      <div className='flex w-full gap-4'>
        <Input
          label='Name'
          type='text'
          placeholder='e.g. John Doe'
          className='flex-1'
          useFormRegister={register("name", { required: true })}
          errorMessage={errors.name?.message}
        />
        <Input
          label='Email'
          type='email'
          placeholder='e.g. johndoe@example.com'
          className='flex-1'
          useFormRegister={register("email", { required: true })}
          errorMessage={errors.email?.message}
        />
      </div>
      <TextArea
        label='Message'
        placeholder='Type your message here...'
        rows={5}
        useFormRegister={register("message", { required: true })}
        errorMessage={errors.message?.message}
      />
      <Button
        enableAnimation={false}
        buttonType='button'
      >
        Submit
      </Button>
    </form>
  )
}
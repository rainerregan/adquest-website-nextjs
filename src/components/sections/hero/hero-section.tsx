import { heroIllustration } from '@/components/common/illustration'
import Rating from '@/components/common/rating'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex items-center gap-[20px] bg-white pb-[100px] pt-[60px] px-[100px] rounded-b-[30px]'>
      <div className='w-fit'>
        <h1 className='text-[64px] font-bold leading-[76px] flex flex-col mb-8'>
          <span>Dapatkan hadiah</span>
          <span>uang tunai dari</span>
          <span>main mobile games</span>
          <div className='flex gap-4 items-center'>
            <span>untuk</span>
            <div className='text-[54px] overflow-hidden leading-none text-white hero-dynamic-text bg-main-green w-fit px-3 py-1 h-fit rounded-lg'>
              <span>Belanja Online</span>
            </div>
          </div>
        </h1>

        <p className='text-xl font-extrabold text-main-gray mb-4'>Gabung bersama 300,000+ players lainnya!</p>
        <div className='flex items-center gap-8'>
          <button className='bg-main-green text-white font-semibold px-6 py-3 rounded-lg'>Google Play Download</button>
          <Rating />
        </div>

      </div>

      <div className='flex-1 text-right flex items-center justify-end'>
        <Image
          src={heroIllustration}
          width={500}
          height={350}
          alt='hero illustration'
        />
      </div>
    </div>
  )
}

export default HeroSection
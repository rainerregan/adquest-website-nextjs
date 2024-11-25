import { heroIllustration } from '@/components/common/illustration'
import Rating from '@/components/common/rating'
import Image from 'next/image'
import React from 'react'
import CounterNumberItem from './counter/counter-number-item'

const HeroSection = () => {
  return (
    <div className='bg-white pt-[30px] rounded-b-[30px]'>
      <div className='max-w-7xl mx-auto relative'>
        <div className='flex items-center gap-[20px] pb-[100px]'>
          <div className='flex-1'>
            <h1 className='text-[50px] xl:text-[64px] font-bold leading-[66px] xl:leading-[76px] flex flex-col mb-[50px]'>
              <span>Dapatkan hadiah uang tunai dari main mobile games</span>
              <span></span>
              <div className='flex gap-4 items-center'>
                <span>untuk</span>
                <div className='text-[44px] xl:text-[54px] overflow-hidden leading-none text-white hero-dynamic-text bg-main-green w-fit px-3 py-1 h-fit rounded-lg'>
                  <span className='text-nowrap'>Belanja Online</span>
                </div>
              </div>
            </h1>

            <p className='text-xl font-extrabold text-main-gray mb-4'>Gabung bersama 300,000+ players lainnya!</p>
            <div className='flex items-center gap-8'>
              <button className='bg-main-green text-white font-semibold px-6 py-3 rounded-lg'>Google Play Download</button>
              <Rating />
            </div>

          </div>

          <div className='w-1/3 xl:w-[40%] text-right flex items-center justify-end'>
            <Image
              src={heroIllustration}
              width={550}
              height={350}
              alt='hero illustration'
            />
          </div>
        </div>

        <div className='absolute left-0 bottom-0 translate-y-[50%] w-full bg-main-black px-12 py-8 rounded-[25px] text-white flex flex-col justify-center items-center'>
          <h2 className='text-center mb-4 text-4xl'>Total Hadiah Uang Tunai Diberikan Hingga Saat Ini</h2>
          <div className='flex gap-8 items-center w-fit'>
            <span className='counter-text'>Rp</span>
            <div className='flex-1 flex gap-[20px] justify-between items-center'>
              <CounterNumberItem number={1} />
              <CounterNumberItem number={0} />
              <CounterNumberItem number={0} />
              <span className='counter-text__coma'>,</span>
              <CounterNumberItem number={0} />
              <CounterNumberItem number={0} />
              <CounterNumberItem number={0} />
              <span className='counter-text__coma'>,</span>
              <CounterNumberItem number={0} />
              <CounterNumberItem number={0} />
              <CounterNumberItem number={0} />
            </div>
            <span className='counter-text'>+</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
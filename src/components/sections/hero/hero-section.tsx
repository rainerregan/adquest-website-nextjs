import { heroIllustration } from '@/components/common/illustration'
import Rating from '@/components/common/rating'
import Image from 'next/image'
import CounterSection from './counter/counter-section'
import { twMerge } from 'tailwind-merge'

const HeroSection = () => {
  return (
    <div className='bg-white pt-[70px] lg:pt-[30px] rounded-b-[30px]'>
      <div className='max-w-7xl mx-auto px-[24px] lg:px-[48px] relative'>
        <div className='flex flex-col lg:flex-row items-center gap-[20px] pb-[80px] lg:pb-[120px]'>
          <div className='flex-1 w-full md:w-3/4 lg:w-full flex flex-col items-center lg:items-start'>
            <h1 className={twMerge(
              'font-bold flex flex-col items-center lg:items-start mb-[24px] lg:mb-[50px]', // Global
              'text-center lg:text-left', // Text Alignment
              'text-[28px] sm:text-[40px] lg:text-[45px] xl:text-[64px]', // Font Size
              'leading-[40px] sm:leading-[54px] lg:leading-[60px] xl:leading-[76px]' // Leading
            )}>
              <span>Dapatkan hadiah <span className='text-main-green break-normal'>uang tunai</span> dari main mobile games <span className='lg:hidden'>untuk</span></span>
              <div className='flex flex-col lg:flex-row lg:gap-4 items-center h-fit'>
                <span className='hidden lg:block'>untuk</span>
                <div className={twMerge(
                  'overflow-hidden leading-none text-white hero-dynamic-text bg-main-green w-fit px-3 h-fit rounded-lg mt-1',
                  'text-[24px] sm:text-[34px] lg:text-[40px] xl:text-[54px]', // Font Size
                )}>
                  <span className='text-nowrap leading-none'>Belanja Online</span>
                </div>
              </div>
            </h1>

            <p className='text-base lg:text-xl font-extrabold text-main-gray mb-4'>Gabung bersama 300,000+ players lainnya!</p>
            <div className='flex items-center gap-8'>
              <button className='bg-main-green text-white font-semibold px-6 py-3 rounded-lg'>Google Play Download</button>
              <Rating />
            </div>

          </div>

          <div className='w-full lg:w-1/3 xl:w-[40%] text-right flex items-center justify-end'>
            <div className='w-full h-[400px] sm:h-[400px] lg:h-[650px] relative'>
              <Image
                src={heroIllustration}
                objectFit="contain"
                fill
                alt='hero illustration'
                className='w-full h-full absolute'
              />
            </div>
          </div>
        </div>

        <CounterSection />
      </div>
    </div>
  )
}

export default HeroSection
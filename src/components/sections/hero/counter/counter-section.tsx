import React from 'react'
import CounterNumberItem from './counter-number-item'

const CounterSection = () => {
  return (
    <div className='absolute translate-y-[50%] right-0 left-0 bottom-0 w-full max-w-7xl mx-auto px-[24px] lg:px-[48px]'>
      <div className=' bg-main-black px-4 lg:px-12 py-4 md:py-8 rounded-[20px] lg:rounded-[25px] text-white flex flex-col justify-center items-center'>
        <h2 className='text-center mb-2 lg:mb-4 text-lg md:text-2xl lg:text-3xl xl:text-4xl text-balance'>Total Hadiah Uang Tunai Diberikan Hingga Saat Ini</h2>
        <div className='flex gap-1 md:gap-4 xl:gap-8 items-center w-full sm:w-fit mb-2'>
          <span className='counter-text'>Rp</span>
          <div className='flex-1 flex gap-[4px] sm:gap-[8px] md:gap-[12px] lg:gap-[16px] xl:gap-[20px] justify-between items-center'>
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
  )
}

export default CounterSection
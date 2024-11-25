import React from 'react'

interface CounterNumberItemProps {
  number: number
}

const CounterNumberItem: React.FC<CounterNumberItemProps> = ({
  number
}) => {
  return (
    <div className='bg-white rounded-md sm:rounded-xl text-main-black h-[30px] w-[22px] sm:w-full sm:h-[36px] md:h-[50px] lg:h-[60px] xl:h-[70px] sm:aspect-square flex items-center justify-center text-lg md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-bold'>
      {number}
    </div>
  )
}

export default CounterNumberItem
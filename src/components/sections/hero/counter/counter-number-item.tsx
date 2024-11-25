import React from 'react'

interface CounterNumberItemProps {
  number: number
}

const CounterNumberItem: React.FC<CounterNumberItemProps> = ({
  number
}) => {
  return (
    <div className='bg-white rounded-lg text-main-black h-[70px] w-[70px] flex items-center justify-center text-5xl font-montserrat font-bold'>
      {number}
    </div>
  )
}

export default CounterNumberItem
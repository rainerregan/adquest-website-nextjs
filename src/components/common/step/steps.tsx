import React from 'react'
import { twMerge } from 'tailwind-merge'

interface StepsProps {
  currentStep: number,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
  steps: string[],
}

interface StepItemProps {
  step: string,
  active?: boolean,
  isLast?: boolean,
  onClick?: () => void,
}

const Steps: React.FC<StepsProps> = ({
  currentStep,
  setCurrentStep,
  steps,
}) => {
  return (
    <div style={{ marginBottom: `${(steps.length -1) * 50}px` }}>
      {steps.map((step, index) => (
        <StepItem
          key={index}
          step={step}
          active={currentStep === index}
          isLast={index === steps.length - 1}
          onClick={() => setCurrentStep(index)}
        />
      ))}
    </div>
  )
}

const StepItem: React.FC<StepItemProps> = ({
  step,
  active,
  isLast,
  onClick,
}) => {
  return (
    <div>
      <div className='flex gap-[20px] items-center  h-[100px] '>
        <div className='min-w-[30px] flex justify-center'>
          <div className={twMerge(
            'aspect-square bg-main-green rounded-full z-10',
            active ? 'w-[30px]' : 'w-[20px]'
          )} />
        </div>
        <div className='h-[90%] flex items-center hover:cursor-pointer pl-8 pr-4' onClick={onClick}>
          <p className={twMerge('font-bold text-lg', active ? 'text-main-black' : 'text-main-gray opacity-50')}>{step}</p>
        </div>
      </div>
      <div className='flex gap-[20px] my-[-50px]'>
        {!isLast && (
          <div className='w-[30px] h-[100px] flex justify-center'>
            <div className='w-[2px] h-full bg-gray-200 z-0' />
          </div>
        )}
      </div>
    </div>
  )
}

export default Steps
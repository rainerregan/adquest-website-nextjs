import React from 'react'
import { TbChevronLeft } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'

interface ControlButtonProps {
  type: 'prev' | 'next',
  disabled?: boolean,
  onClick?: () => void,
  className?: string
}

const ControlButton: React.FC<ControlButtonProps> = ({
  type,
  disabled = true,
  onClick,
  className
}) => {
  return (
    <button
      className={twMerge(
        'p-[1px] md:p-[2px] aspect-square flex items-center justify-center text-2xl md:text-3xl border-[3px] border-main-black rounded-full',
        disabled ? 'text-main-green  bg-main-black' : 'text-main-black',
        'active:scale-75 transition-transform active:opacity-65',
        className,
      )}
      onClick={onClick}
    >
      <TbChevronLeft className={twMerge(
        type === 'prev' ? 'translate-x-[-1px]' : 'translate-x-[1px]',
        type === 'next' && 'rotate-180'
      )} />
    </button>
  )
}

export default ControlButton
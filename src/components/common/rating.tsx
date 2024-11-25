import React from 'react';
import { TbStarFilled } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';

export interface RatingProps {
  textClassName?: string;
  starClassName?: string;
}

const Rating: React.FC<RatingProps> = ({
  textClassName,
  starClassName
}) => {
  return (
    <div className='flex items-center gap-2 md:gap-4 '>
      <p className={twMerge('m-0 text-main-gray font-bold', textClassName)}>4.3</p>
      <div className='flex items-center gap-1 md:gap-1'>
        {Array.from({ length: 5 }).map((_, index) => (
          <TbStarFilled key={index} className={twMerge('text-rating-yellow', starClassName)} />
        ))}
      </div>
    </div>
  );
};

export default Rating;
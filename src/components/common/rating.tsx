import React from 'react';
import { TbStar, TbStarFilled, TbStarHalf, TbStarHalfFilled } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';

export interface RatingProps {
  textClassName?: string;
  starClassName?: string;
  rating?: number;
}

const Rating: React.FC<RatingProps> = ({
  textClassName,
  starClassName,
  rating = 4.3
}) => {

  const stars = Array.from({ length: 5 }, (_, index) => {
    const fullStar = rating - index >= 1;
    const halfStar = rating - index >= 0.1 && rating - index < 1;
    const emptyStar = rating - index < 0.1;

    if (fullStar) {
      return (
        <TbStarFilled
          key={index}
          className={twMerge('text-rating-yellow', starClassName)}
        />
      );
    } else if (halfStar) {
      return (
        <TbStarHalfFilled
          key={index}
          className={twMerge('text-rating-yellow', starClassName)}
        />
      );
    } else if (emptyStar) {
      return (
        <TbStar
          key={index}
          className={twMerge('text-main-green', starClassName)}
        />
      );
    }

  });

  return (
    <div className='flex items-center gap-2 md:gap-4 '>
      <p className={twMerge('m-0 text-main-gray font-bold', textClassName)}>{rating.toPrecision(2)}</p>
      <div className='flex items-center gap-1 md:gap-1'>
        {stars}
      </div>
    </div>
  );
};

export default Rating;
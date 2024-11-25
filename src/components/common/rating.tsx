import React from 'react';
import { TbStar, TbStarFilled } from 'react-icons/tb';

interface RatingProps {

}

const Rating: React.FC<RatingProps> = ({ }) => {
  return (
    <div className='flex items-center gap-4 '>
      <p className='m-0 text-main-gray font-bold'>4.3</p>
      <div className='flex items-center gap-2'>
        {Array.from({ length: 5 }).map((_, index) => (
          <TbStarFilled key={index} className='text-rating-yellow' />
        ))}
      </div>
    </div>
  );
};

export default Rating;
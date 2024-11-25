import React from 'react';
import { Review } from './review-section';
import { TbStar, TbStarFilled } from 'react-icons/tb';

interface ReviewCardProps {
  review: Review
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  review
}) => {

  const starFilled = Math.floor(review.rating || 0);
  const starEmpty = 5 - starFilled;

  return (
    <div className='bg-white p-[50px] shadow-md rounded-[20px] flex flex-col gap-4'>
      <div className='flex gap-1'>
        {[...Array(starFilled)].map((_, index) => (
          <TbStarFilled key={index} className='text-rating-yellow' />
        ))}
        {[...Array(starEmpty)].map((_, index) => (
          <TbStar key={index} className='text-rating-yellow' />
        ))}
      </div>
      <p>{review.review}</p>

      <div>
        <h3 className='font-bold'>{review.name}</h3>
        <p>{review.orgainzation}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
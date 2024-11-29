"use client"
import React from 'react';
import { Review } from './review-section';
import { TbStar, TbStarFilled } from 'react-icons/tb';
import { motion } from 'motion/react';

interface ReviewCardProps {
  review: Review
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  review
}) => {

  const starFilled = Math.floor(review.rating || 0);
  const starEmpty = 5 - starFilled;

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className='bg-white p-[36px] lg:p-[50px] min-w-[300px] md:min-w-[400px] shadow-md rounded-[20px] flex flex-col gap-4'>
      <div className='flex gap-1'>
        {[...Array(starFilled)].map((_, index) => (
          <TbStarFilled key={index} className='text-rating-yellow' />
        ))}
        {[...Array(starEmpty)].map((_, index) => (
          <TbStar key={index} className='text-rating-yellow' />
        ))}
      </div>
      <p className='text-sm md:text-base'>{review.review}</p>

      <div>
        <h3 className='font-bold'>{review.name}</h3>
        <p className='text-sm md:text-base'>{review.orgainzation}</p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
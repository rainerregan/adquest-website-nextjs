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
      className='bg-white p-[36px] lg:p-[50px] shadow-md rounded-[20px] flex flex-col justify-between gap-4 min-h-full'>
      <div>
        <div className='flex gap-1 mb-3'>
          {[...Array(starFilled)].map((_, index) => (
            <TbStarFilled key={index} className='text-rating-yellow' />
          ))}
          {[...Array(starEmpty)].map((_, index) => (
            <TbStar key={index} className='text-rating-yellow' />
          ))}
        </div>
        <p className='text-sm md:text-base'>{review.review}</p>
      </div>

      <div>
        <h3 className='font-bold'>{review.name}</h3>
        <p className='text-sm md:text-base'>{review.orgainzation}</p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
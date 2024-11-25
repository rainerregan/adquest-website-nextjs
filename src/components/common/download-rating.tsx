import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Rating, { RatingProps } from './rating'
import { gPlayDownload } from './illustration'

interface DownloadRatingProps {
  ratingProps?: RatingProps;
  showRating?: boolean;
}

const DownloadRating: React.FC<DownloadRatingProps> = ({
  ratingProps,
  showRating = true
}) => {
  return (
    <div className='flex items-center gap-4 md:gap-8'>
      <Link href="#" className='h-[50px] w-[140px] relative'>
        <Image
          src={gPlayDownload}
          alt='Google Play Download'
          fill
          objectFit='contain'
          className='h-full w-full'
        />
      </Link>
      {showRating && (
        <Rating {...ratingProps} />
      )}
    </div>
  )
}

export default DownloadRating
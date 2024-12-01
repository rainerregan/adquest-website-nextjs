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
      <Link href="https://play.google.com/store/apps/details?id=com.adquest.play&hl=id" className='h-[50px] w-[140px] md:w-[182px] md:h-[80px] relative'>
        <Image
          src={gPlayDownload}
          alt='Google Play Download'
          fill
          objectFit='contain'
          loading='eager'
          className='h-full w-full'
        />
      </Link>
      {showRating && (
        <Rating {...ratingProps} rating={4.3} />
      )}
    </div>
  )
}

export default DownloadRating
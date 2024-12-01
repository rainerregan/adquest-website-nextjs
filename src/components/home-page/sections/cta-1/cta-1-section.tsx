import DownloadRating from '@/components/common/download-rating'
import { circlePattern1, circlePattern2, cta1Illustration } from '@/components/common/illustration'
import Image from 'next/image'

const Cta1Section = () => {
  return (
    <div className=' flex items-center pt-[140px] lg:pt-[140px] relative'>
      <div className="absolute w-full h-full overflow-hidden">
        <Image
          priority
          src={circlePattern1}
          alt="pattern"
          className=' absolute left-0 bottom-0 translate-x-[-50%] translate-y-[50%] z-0 -mb-20'
        />
      </div>

      <Image
        priority
        src={circlePattern2}
        alt="pattern"
        className=' absolute right-0 top-0 translate-x-[50%] translate-y-[-30%] z-0'
      />

      <div className='max-w-7xl mx-auto px-[0px] md:px-[48px] z-10 h-full flex flex-col-reverse lg:flex-row items-center lg:gap-[24px] text-white'>
        <div className='flex-1 w-full flex justify-center lg:justify-start'>
          <div className='w-full sm:w-[500px] lg:w-full h-[500px] lg:h-[800px] relative translate-x-[-12%]'>
            <Image src={cta1Illustration} alt='cta 1 illustration' fill objectFit='contain' className='w-full h-full' />
          </div>
        </div>
        <div className='flex-1 flex flex-col items-center lg:items-start w-3/4 lg:w-full' data-aos="fade-up">
          <h2 className='text-4xl md:text-5xl lg:text-7xl mb-8 text-center md:text-left'>Bebaskan Dirimu dari Biaya Harian</h2>
          <DownloadRating
            ratingProps={{
              textClassName: 'text-white',
              starClassName: 'text-rating-yellow-light'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Cta1Section
import Button from '@/components/common/button'
import { serviceHeroIllustration } from '@/components/common/illustration'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <div className='bg-white relative z-[1] section-rounded__bottom'>
      <div className='max-w-7xl mx-auto px-[24px] lg:px-[48px] pt-[100px] pb-[100px] flex flex-col'>
        <div className='w-full md:max-w-[80%] mb-8' data-aos="fade-down">
          <h1 className='h1 !text-6xl text-center md:text-left'>Ready To Unlock The Full Ads <span>Revenue Potential</span> of Your Mobile Games?</h1>
        </div>

        <div className='flex flex-col md:flex-row gap-[48px]'>
          <div className='flex-1 flex flex-col gap-4 text-sm md:text-base' data-aos="fade-right">
            <p>Our expert team specializes in ad monetization, helping mobile games generate thousand dollar daily revenues. Join successful studios already capitalizing on the power of ads and start turning your games into a profitable venture today.</p>
            <p>Focus on developing your games, and let AdQuest work its magic with your ad monetization strategy.</p>
            <Button>Let&apos;s Talk</Button>
          </div>

          <div className='flex-1' data-aos="fade-right" data-aos-delay={300}>
            <Image src={serviceHeroIllustration} alt='Hero Image' />
          </div>
        </div>
      </div>
    </div>
  )
}
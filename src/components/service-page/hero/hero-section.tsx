import Button from '@/components/common/button'
import { serviceHeroIllustration } from '@/components/common/illustration'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <div className='bg-white relative z-[1] section-rounded__bottom'>
      <div className='max-w-7xl mx-auto px-[24px] lg:px-[48px] pt-[100px] pb-[100px] flex flex-col'>
        <div className='w-full md:max-w-[80%] mb-8'>
          <h1 className='h1 text-center md:text-left'>Ready To Unlock The Full Ads <span>Revenue Potential</span> of Your Mobile Games?</h1>
        </div>

        <div className='flex flex-col md:flex-row gap-[48px]'>
          <div className='flex-1 flex flex-col gap-4 text-sm md:text-base'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio veniam ipsum earum, adipisci quas quibusdam repellendus delectus impedit totam. Natus odit aut dolor maxime eum sed veritatis earum ullam distinctio?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio veniam ipsum earum, adipisci quas quibusdam repellendus delectus impedit totam. Natus odit aut dolor maxime eum sed veritatis earum ullam distinctio?</p>
            <Button>Let&apos;s Talk</Button>
          </div>

          <div className='flex-1'>
            <Image src={serviceHeroIllustration} alt='Hero Image' />
          </div>
        </div>
      </div>
    </div>
  )
}
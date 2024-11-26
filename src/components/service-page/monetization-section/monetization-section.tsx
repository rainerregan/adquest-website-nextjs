import Button from '@/components/common/button'
import { circlePattern1Black, circlePattern2Black, monetization1Illustration, monetization2Illustration } from '@/components/common/illustration'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export const MonetizationSection = () => {

  const items: MonetizationSectionItem[] = [
    {
      title: 'Massive Global User Base',
      description: 'There are over 3.5 billion smartphone users worldwide, and a large percentage of them play mobile games. This vast audience creates enormous potential for ad monetization across different game genres.',
      illust: monetization1Illustration,
      direction: 'left'
    },
    {
      title: 'Highly Engaged Audience',
      description: 'Mobile games are designed to be engaging and entertaining, which means that players are more likely to spend time in-game. This high level of engagement creates more opportunities for ad monetization and better ad performance.',
      illust: monetization2Illustration,
      direction: 'right'
    },
  ]

  return (
    <div className='text-white relative'>

      <div className="absolute w-full h-full overflow-hidden">
        <Image
          priority
          src={circlePattern1Black}
          alt="pattern"
          className=' absolute left-0 bottom-0 translate-x-[-50%] translate-y-[50%] z-0'
        />
      </div>

      <Image
        priority
        src={circlePattern2Black}
        alt="pattern"
        className=' absolute right-0 top-0 translate-x-[50%] translate-y-[-30%] z-0'
      />

      <div className='max-w-7xl mx-auto py-[120px] px-[24px] lg:px-[48px] z-[2] relative'>
        <div className='mb-[70px]'>
          <h1 className='h3 !text-center'>Ready To Unlock The Full Ads <span>Revenue Potential</span> of Your Mobile Games?</h1>
        </div>

        <div className='flex flex-col gap-[10px]'>
          {items.map((item, index) => (
            <MonetizationSectionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface MonetizationSectionItem {
  title: string
  description: string
  illust: string
  direction: 'left' | 'right'
}

interface MonetizationSectionItemProps {
  item: MonetizationSectionItem
}

const MonetizationSectionItem: React.FC<MonetizationSectionItemProps> = ({
  item
}) => {
  return (
    <div className={twMerge(
      'flex items-center justify-between',
      item.direction === 'left' ? 'flex-col-reverse md:flex-row' : 'flex-col-reverse md:flex-row-reverse'
    )}>
      <div className='flex-1 flex flex-col gap-4 text-center md:text-left items-center md:items-baseline'>
        <h5 className='h5 text-main-green'>{item.title}</h5>
        <p className='text-sm md:text-base'>{item.description}</p>
        <Button className='text-main-black'>Learn More</Button>
      </div>

      <div className='flex-1'>
        <Image src={item.illust} alt='Illustration' />
      </div>
    </div>
  )
}

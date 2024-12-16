import Button from '@/components/common/button'
import { circlePattern1Black, circlePattern2Black, monetization1Illustration, monetization2Illustration } from '@/components/common/illustration'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export const MonetizationSection = () => {

  const items: MonetizationSectionItem[] = [
    {
      title: 'Populasi Pemain Global',
      description: 'Terdapat lebih dari 3,5 miliar pengguna smartphone di seluruh dunia, dan sebagian besar dari mereka bermain mobile games. Audiens yang luas ini menciptakan potensi besar untuk monetisasi iklan di berbagai genre game.',
      illust: monetization1Illustration,
      direction: 'left'
    },
    {
      title: 'Audiens yang Aktif',
      description: 'Game mobile dirancang untuk dimainkan dengan menarik dan menghibur, yang berarti pemain akan cenderung menghabiskan lebih banyak waktu di dalam game. Tingkat keterlibatan yang tinggi ini menciptakan lebih banyak peluang untuk monetisasi iklan dan meningkatkan kinerja iklan.',
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
        <div className='mb-[70px] flex justify-center flex-col text-center' data-aos="fade-down">
          <h1 className='h2 !text-center text-balance'><span>Monetisasi</span> sekarang</h1>
          <p>Monetisasi iklan adalah strategi yang efektif untuk meningkatkan pendapatan game mobile Anda.</p>
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
      'flex items-center justify-between gap-[50px]',
      item.direction === 'left' ? 'flex-col-reverse md:flex-row' : 'flex-col-reverse md:flex-row-reverse'
    )}
      data-aos={`fade-${item.direction}`}
    >
      <div className='flex-1 flex flex-col gap-10 text-center md:text-left items-center md:items-baseline'>
        <h5 className='h5 text-3xl md:!text-4xl text-main-green'>{item.title}</h5>
        <p className='text-sm md:text-base'>{item.description}</p>
        {/* <Button className='text-main-black'>Pelajari lebih lanjut</Button> */}
      </div>

      <div className='flex-1'>
        <Image src={item.illust} alt='Illustration' />
      </div>
    </div>
  )
}

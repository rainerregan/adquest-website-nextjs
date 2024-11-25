import Button from '@/components/common/button'
import DownloadRating from '@/components/common/download-rating'
import { ctaImage, illustDino, illustKoin } from '@/components/common/illustration'
import Image from 'next/image'
import React from 'react'

const StepSection = () => {
  return (
    <div className='bg-white z-[1] relative pb-[150px] pt-[100px] section-rounded__top section-rounded__bottom'>
      <div className='section flex flex-col items-center'>
        <h2 className='h2 w-full md:w-1/2 text-balance !text-center'>Jelajahi <span className='text-main-green'>dan Menangkan</span></h2>

        <div className='flex items-center justify-between w-full mt-12 mb-[150px]'>
          <div className='flex-1'>
            Steps
          </div>

          <div className='w-1/3'>Illust</div>

          <div className='flex-1'>
            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim, voluptate omnis quia tempora eum tenetur ut, molestiae amet quibusdam assumenda ipsam fugiat officiis maiores quisquam dolor totam! Labore, voluptatem!</p>
            <Button className='max-w-[200px] text-center leading-tight'>
              Kumpulkan Eggs Sekarang!
            </Button>
          </div>
        </div>

        <div className='relative'>
          <Image src={illustKoin} alt='Image' className='absolute top-0 right-[50px] translate-y-[-55%] w-[100px] md:w-[150px] z-[3]' />
          <Image src={illustKoin} alt='Image' className='absolute bottom-[20px] md:bottom-0 left-[-30px] md:left-[50px] md:translate-y-[55%] w-[80px] md:w-[120px] z-[3]' />
          <Image src={illustDino} alt='Image' className='absolute bottom-0 right-[50px] translate-y-[20%] z-[3] w-[200px] md:w-[350px]' />

          <div className='rounded-[30px] text-white relative overflow-clip'>
            <div className='w-full h-full absolute left-0 top-0 z-[-1]'>
              <Image
                src={ctaImage}
                alt='Image'
                fill
                objectFit='cover'
                className='w-full h-full'
              />
            </div>

            <div className='flex flex-col justify-center px-[40px] py-[100px] md:p-[80px] z-[2] bg-main-gray-2/50'>
              <h2 className='text-2xl md:text-3xl lg:text-6xl z-[1] mb-4'>
                Nikmati Serunya Mendapatkan Keuntungan dari Bermain Games di <span className='text-main-green'>AdQuest</span> Bersama <span className='text-main-green'>300,000+</span> Players Lainnya!
              </h2>

              <DownloadRating showRating={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepSection
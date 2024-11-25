import React from 'react'
import appIcon from '../../../../public/images/logo/adquest_logo.png';
import Image from 'next/image';

const AppIcon = () => {
  return (
    <div className='w-[100px] lg:w-[110px] h-[40px] relative'>
      <Image src={appIcon} alt='Adquest Logo' fill objectFit='contain' className='w-full h-full' />
    </div>
  )
}

export default AppIcon
import React from 'react'
import appIcon from '../../../../public/images/logo/adquest_logo.png';
import Image from 'next/image';

const AppIcon = () => {
  return (
    <Image src={appIcon} alt='Adquest Logo' width={120} height={30} />
  )
}

export default AppIcon
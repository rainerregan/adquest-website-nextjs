import Image from 'next/image'
import Link from 'next/link'
import { TbBrandInstagram } from 'react-icons/tb'
import DownloadRating from '../download-rating'
import { appLogoWhite } from '../illustration'

const Footer = () => {
  const footerLinks = [
    { title: "Help", href: '#' },
    { title: "FAQ", href: '#' },
    { title: "T&C", href: '#' },
    { title: "Privacy Policy", href: '#' },
  ]

  return (
    <footer className='bg-white text-white'>
      <div className='bg-main-black section-rounded__top pt-[100px] pb-[70px]'>
        <div className='max-w-7xl mx-auto px-[24px] lg:px-[48px]'>

          <div className=' flex flex-col md:flex-row gap-[50px] mb-[40px]'>
            {/* Left Side */}
            <div className='w-full md:w-1/3 flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-8'>
                <Image src={appLogoWhite} alt='App Logo' width={150} height={50} />
                <p>AdQuest is a mobile app where gamers earn points by playing featured games and redeem them for cash or gift cards.</p>
              </div>

              {/* Google Play */}
              <DownloadRating showRating={false} />

              {/* Social Media */}
              <div className='flex gap-[20px]'>
                <Link href={"#"}>
                  <TbBrandInstagram className='text-white text-[40px]' />
                </Link>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className='flex flex-col-reverse md:flex-row gap-8 items-center justify-between'>
            <p className='text-sm md:text-base text-center md:text-left'>Copyright &copy; AdQuest.id. 2024. All Rights Reserved.</p>

            <ul className='flex gap-10 md:gap-8 font-bold text-sm md:text-base'>
              {footerLinks.map((x, index) => (
                <li key={index}><Link href={x.href}>{x.title}</Link></li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
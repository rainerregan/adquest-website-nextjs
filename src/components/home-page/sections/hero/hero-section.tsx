import DownloadRating from '@/components/common/download-rating'
import { twMerge } from 'tailwind-merge'
import CounterSection from './counter/counter-section'
import HeroIllustration from './hero-illustration'
import TextAnimation from './text-animation'
import { useTranslations } from 'next-intl'

const HeroSection = () => {
  const t = useTranslations("HomePage")
  return (
    <div className='bg-white pt-[70px] md:pt-[150px] lg:pt-[30px] section-rounded__bottom z-[1] relative'>
      <div className='max-w-7xl mx-auto px-[24px] lg:px-[48px] relative'>
        <div className='flex flex-col lg:flex-row items-center gap-[20px] pb-[80px] lg:pb-[120px]'>
          <div className='flex-1 w-full md:w-3/4 lg:w-full flex flex-col items-center lg:items-start'>
            <h1
              data-aos="fade-right"
              className={twMerge(
                'font-bold flex flex-col items-center lg:items-start mb-[36px] lg:mb-[50px]', // Global
                'text-center lg:text-left', // Text Alignment
                'text-[32px] sm:text-[40px] lg:text-[45px] xl:text-[64px]', // Font Size
                'leading-[40px] sm:leading-[54px] lg:leading-[60px] xl:leading-[76px]' // Leading
              )}
            >
              <p>
                {t('Hero.Title.0')} <span className='text-main-green break-normal'>{t('Hero.Title.1')}</span> {t('Hero.Title.2')} <span className='lg:hidden'>{t('Hero.Title.3')}</span>
              </p>
              <TextAnimation />
            </h1>

            <div data-aos="fade-right" data-aos-delay="500">
              <p className='text-base text-center lg:text-left lg:text-xl font-extrabold text-main-gray mb-4'>{t('Hero.Subtitle')}</p>
              <DownloadRating />
            </div>

          </div>

          <div className='w-full lg:w-1/3 xl:w-[40%] py-[70px] text-right flex items-center justify-end' data-aos="fade-left">
            <HeroIllustration />
          </div>
        </div>

        <CounterSection />
      </div>
    </div>
  )
}

export default HeroSection
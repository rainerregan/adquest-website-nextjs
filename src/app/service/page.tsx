import HeroSection from '@/components/service-page/hero-section/hero-section'
import MonetizationSection from '@/components/service-page/monetization-section/monetization-section'

const ServicePage = () => {
  return (
    <div className="service overflow-x-hidden">
      <HeroSection />
      <MonetizationSection />
    </div>
  )
}

export default ServicePage
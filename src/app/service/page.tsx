import CollaborateSection from '@/components/service-page/collaborate/collaborate-section'
import HeroSection from '@/components/service-page/hero-section/hero-section'
import MonetizationSection from '@/components/service-page/monetization-section/monetization-section'

const ServicePage = () => {
  return (
    <div className="service overflow-x-hidden">
      <HeroSection />
      <MonetizationSection />
      <CollaborateSection />
    </div>
  )
}

export default ServicePage
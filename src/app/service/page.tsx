import { CollaborateSection } from '@/components/service-page/collaborate/collaborate-section';
import { HeroSection } from '@/components/service-page/hero/hero-section';
import { MonetizationSection } from '@/components/service-page/monetization-section/monetization-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AdQuest | High Performance Ads Monetization Consultation",
  description: "Tim kami siap membantu Anda untuk menghasilkan pendapatan hingga ribuan dolar setiap hari melalui monetisasi iklan.",
  icons: {
    icon: "/egg.png",
  }
};

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
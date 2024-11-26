"use client";
import Loading from '@/components/loading';
import { CollaborateSection } from '@/components/service-page/collaborate/collaborate-section';
import { HeroSection } from '@/components/service-page/hero/hero-section';
import { MonetizationSection } from '@/components/service-page/monetization-section/monetization-section';
import { useEffect, useState } from 'react';

const ServicePage = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    }, 1000)
  }, [])

  if (!isMounted) return <Loading />
  return (
    <div className="service overflow-x-hidden">
      <HeroSection />
      <MonetizationSection />
      <CollaborateSection />
    </div>
  )
}

export default ServicePage
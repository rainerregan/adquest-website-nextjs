"use client"
import { HeroSection } from '@/components/about-us-page/hero/hero-section'
import Loading from '@/components/loading'
import React, { useEffect, useState } from 'react'

const AboutUsPage = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Delay, to show loading animation
    setTimeout(() => {
      setIsMounted(true)
    }, 1000)
  }, [])

  if (!isMounted) return <Loading />
  return (
    <div className='page overflow-x-hidden'>
      <HeroSection />
    </div>
  )
}

export default AboutUsPage
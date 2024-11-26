"use client"
import Cta1Section from "@/components/home-page/sections/cta-1/cta-1-section";
import FaqSection from "@/components/home-page/sections/faq-section/faq-section";
import GamesAvailableSection from "@/components/home-page/sections/games-available/games-available-section";
import HeroSection from "@/components/home-page/sections/hero/hero-section";
import ReviewSection from "@/components/home-page/sections/reviews/review-section";
import StepSection from "@/components/home-page/sections/steps/step-section";
import Loading from "@/components/loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <Loading />

  return (
    <div className="home overflow-x-hidden">
      <HeroSection />
      <Cta1Section />
      <StepSection />
      <ReviewSection />
      <GamesAvailableSection />
      <FaqSection />
    </div>
  )
}

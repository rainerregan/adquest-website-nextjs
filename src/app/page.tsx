import Cta1Section from "@/components/sections/cta-1/cta-1-section";
import HeroSection from "@/components/sections/hero/hero-section";
import ReviewSection from "@/components/sections/reviews/review-section";
import StepSection from "@/components/sections/steps/step-section";

export default function Home() {
  return (
    <div className="home overflow-x-hidden">
      <HeroSection />
      <Cta1Section />
      <StepSection />
      <ReviewSection />
    </div>
  )
}

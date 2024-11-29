import { homeMockup, illustDinoEgg, illustKoin } from "@/components/common/illustration"
import Image from "next/image"
import { motion } from "motion/react"

const HeroIllustration = () => {

  // Animation Variants
  const bobbingAnimation = {
    animate: {
      y: [0, -10, 0], // Move up and down
    },
    transition: {
      duration: 3, // Duration for one cycle
      stagger: 1, // Delay between each cycle
      repeat: Infinity, // Infinite loop
      ease: 'easeInOut', // Smooth easing
    },
  };

  return (
    <div className="relative w-full h-full">
      <motion.div {...bobbingAnimation} className="absolute z-[2] bottom-0 right-0">
        <Image src={illustDinoEgg} alt="illustration" className="h-[150px] w-fit" />
      </motion.div>
      <motion.div {...bobbingAnimation} className="absolute z-[-1] top-[-10%] right-[10%]">
        <Image src={illustKoin} alt="illustration" className="w-fit h-[150px]" />
      </motion.div>
      <motion.div {...bobbingAnimation} className="absolute z-[-1] bottom-[10%] left-[10%]">
        <Image src={illustKoin} alt="illustration" className="w-fit h-[100px]" />
      </motion.div>
      <div className='w-full h-[500px] relative'>
        <Image src={homeMockup} alt='Hero Image' fill objectFit='contain' />
      </div>
    </div>
  )
}

export default HeroIllustration
import { homeMockup, illustDinoEgg, illustKoin } from "@/components/common/illustration"
import Image from "next/image"

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full">
      <Image src={illustDinoEgg} alt="illustration" className="absolute z-[2] w-fit h-[150px] bottom-0 right-0" />
      <Image src={illustKoin} alt="illustration" className="absolute z-[-1] w-fit h-[150px] top-0 translate-y-[-50%] translate-x-[-40%] right-0" />
      <Image src={illustKoin} alt="illustration" className="absolute z-[-1] w-fit h-[100px] bottom-0 translate-y-[-50%] translate-x-[60%] left-0" />
      <div className='w-full h-[500px] relative'>
        <Image src={homeMockup} alt='Hero Image' fill objectFit='contain' />
      </div>
    </div>
  )
}

export default HeroIllustration
import Image from "next/image"
import egg from '../../public/egg.png';

const Loading = () => {
  return (
    <div className="h-screen w-screen fixed z-[99999] bg-white top-0 left-0 flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-main-green-background">
      </div>
      <Image src={egg} alt="Egg" height={80} className="absolute animate-bounce" />
    </div>
  )
}

export default Loading
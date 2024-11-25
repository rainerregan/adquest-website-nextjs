import { circlePattern1, circlePattern2 } from '@/components/common/illustration'
import Image from 'next/image'
import ControlButton from './control-button'
import ReviewCard from './review-card'

export interface Review {
  name: string
  orgainzation: string
  review: string
  rating?: number
}

const ReviewSection = () => {
  const dummyReviews: Review[] = [
    {
      name: 'John Doe',
      orgainzation: 'Questies',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim, voluptate omnis quia tempora eum tenetur ut, molestiae amet quibusdam assumenda ipsam fugiat officiis maiores quisquam dolor totam! Labore, voluptatem!',
      rating: 5
    },
    {
      name: 'Jane Doe',
      orgainzation: 'Questies',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim, voluptate omnis quia tempora eum tenetur ut, molestiae amet quibusdam assumenda ipsam fugiat officiis maiores quisquam dolor totam! Labore, voluptatem!',
      rating: 5
    },
    {
      name: 'John Doe',
      orgainzation: 'Questies',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim, voluptate omnis quia tempora eum tenetur ut, molestiae amet quibusdam assumenda ipsam fugiat officiis maiores quisquam dolor totam! Labore, voluptatem!',
      rating: 5
    },
    {
      name: 'Jane Doe',
      orgainzation: 'Questies',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim, voluptate omnis quia tempora eum tenetur ut, molestiae amet quibusdam assumenda ipsam fugiat officiis maiores quisquam dolor totam! Labore, voluptatem!',
      rating: 5
    },
  ]

  return (
    <div className='relative overflow-hidden'>
      <div className="absolute w-full h-full overflow-hidden">
        <Image
          priority
          src={circlePattern1}
          alt="pattern"
          className=' absolute left-0 bottom-0 translate-x-[-50%] translate-y-[50%] z-0 -mb-20'
        />
      </div>

      <Image
        priority
        src={circlePattern2}
        alt="pattern"
        className=' absolute right-0 top-0 translate-x-[50%] translate-y-[-30%] z-0'
      />

      <div className='section py-[100px] flex flex-col items-center relative z-[2]'>
        <h2 className='h2 text-white'>Cerita Questies</h2>

        {/* Reviews */}
        <div className='grid grid-cols-2 gap-8 mt-8 mb-8'>
          {dummyReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Controls */}
        <div className='flex gap-4'>
          <ControlButton type='prev' disabled={true} />
          <ControlButton type='next' disabled={false} />
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
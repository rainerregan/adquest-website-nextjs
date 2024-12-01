import DownloadRating from '@/components/common/download-rating'
import { circlePattern1, circlePattern2 } from '@/components/common/illustration'
import Image from 'next/image'
import { useRef } from 'react'
import ControlButton from './control-button'
import ReviewCard from './review-card'
import './review-section.css'

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
    {
      name: 'Jane Doe',
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
      name: 'Jane Doe',
      orgainzation: 'Questies',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim, voluptate omnis quia tempora eum tenetur ut, molestiae amet quibusdam assumenda ipsam fugiat officiis maiores quisquam dolor totam! Labore, voluptatem!',
      rating: 5
    },
  ]

  const containerRef = useRef<HTMLDivElement | null>(null)
  const scrollToCard = (direction: 'prev' | 'next') => {
    if (containerRef.current) {
      const container = containerRef.current
      const scrollAmount = window.innerWidth < 768 ? 300 : 500 // Width of one viewport
      container.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className='relative'>
      <div className="absolute w-full h-full overflow-hidden">
        <Image
          priority
          src={circlePattern1}
          alt="pattern"
          className=' absolute left-0 bottom-0 translate-x-[-50%] translate-y-[50%] z-0'
        />
      </div>

      <Image
        priority
        src={circlePattern2}
        alt="pattern"
        className=' absolute right-0 top-0 translate-x-[50%] translate-y-[-30%] z-0'
      />

      <div className='overflow-visible mx-auto py-[100px] flex flex-col items-center relative z-[2]'>
        <h2 className='h2 text-white' data-aos="fade-down">Cerita Questies</h2>

        {/* Reviews */}
        <div ref={containerRef} className='w-full mt-4 lg:mt-8 mb-8 scroll-container px-[200px]'>
          <div className='flex gap-6'>
            {dummyReviews.map((review, index) => (
              <div className="scroll-item" key={index}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className='flex gap-4 mb-8'>
          <ControlButton
            onClick={() => scrollToCard('prev')}
            type='prev' disabled={true} />
          <ControlButton
            onClick={() => scrollToCard('next')}
            type='next' disabled={false} />
        </div>

        {/* GPLAY */}
        <DownloadRating showRating={false} />
      </div>
    </div>
  )
}

export default ReviewSection
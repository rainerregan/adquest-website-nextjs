import { gameIcon1, gameIcon2, gameIcon3, gameIcon4, gameIcon5, gameIcon6 } from '@/assets/game-icons'
import Button from '@/components/common/button'
import { illustKoin } from '@/components/common/illustration'
import Image from 'next/image'
import React from 'react'

interface Game {
  name: string
  image: string
  url: string
}

const GamesAvailableSection = () => {
  const games: Game[] = [
    {
      name: 'Game 1',
      image: gameIcon1,
      url: 'https://game1.com'
    },
    {
      name: 'Game 2',
      image: gameIcon2,
      url: 'https://game2.com'
    },
    {
      name: 'Game 3',
      image: gameIcon3,
      url: 'https://game3.com'
    },
    {
      name: 'Game 4',
      image: gameIcon4,
      url: 'https://game4.com'
    },
    {
      name: 'Game 5',
      image: gameIcon5,
      url: 'https://game5.com'
    },
    {
      name: 'Game 6',
      image: gameIcon6,
      url: 'https://game6.com'
    },
    {
      name: 'Game 7',
      image: gameIcon1,
      url: 'https://game7.com'
    },
    {
      name: 'Game 8',
      image: gameIcon2,
      url: 'https://game8.com'
    },
    {
      name: 'Game 9',
      image: gameIcon3,
      url: 'https://game9.com'
    },
    {
      name: 'Game 10',
      image: gameIcon4,
      url: 'https://game10.com'
    }
  ]

  return (
    <div className='bg-white relative z-[1] section-rounded__top'>
      <div className='pt-[100px] pb-[80px] mx-auto flex flex-col items-center gap-[60px] md:gap-[100px]'>
        <h2 className='h2 text-center'>Games <span>Available</span></h2>

        <div className='games-row flex flex-row gap-[40px] min-w-full w-fit items-center justify-center'>
          {games.map((game, index) => (
            <div key={index} className='game-card rounded-[20px] shadow-xl h-[120px] w-[120px]  overflow-clip'>
              <Image src={game.image} alt={game.name} className='w-full h-full object-cover' />
            </div>
          ))}
        </div>

        <div className='flex flex-col items-center gap-[50px]'>
          <h3 className='font-bold text-xl md:text-2xl text-center'>#BerkaryaUntukBangsa</h3>
          <Button className='max-w-[200px] text-center'>
            Kumpulkan Eggs Sekarang
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GamesAvailableSection
"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import { gameIcon1, gameIcon2, gameIcon3, gameIcon4, gameIcon5, gameIcon6, gameIcon7, gameIcon8, gameIcon9, gameIcon10 } from '@/assets/game-icons';
import Button from '@/components/common/button';
import Image from 'next/image';
import React, { useEffect } from 'react';
import useMeasure from "react-use-measure";

interface Game {
  name: string;
  image: string;
  url: string;
}

const GamesAvailableSection = () => {
  const games: Game[] = [
    { name: 'Game 1', image: gameIcon1, url: 'https://game1.com' },
    { name: 'Game 2', image: gameIcon2, url: 'https://game2.com' },
    { name: 'Game 3', image: gameIcon3, url: 'https://game3.com' },
    { name: 'Game 4', image: gameIcon4, url: 'https://game4.com' },
    { name: 'Game 5', image: gameIcon5, url: 'https://game5.com' },
    { name: 'Game 6', image: gameIcon6, url: 'https://game6.com' },
    { name: 'Game 7', image: gameIcon7, url: 'https://game7.com' },
    { name: 'Game 8', image: gameIcon8, url: 'https://game8.com' },
    { name: 'Game 9', image: gameIcon9, url: 'https://game9.com' },
    { name: 'Game 10', image: gameIcon10, url: 'https://game10.com' },
  ];

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className='bg-white relative z-[1] section-rounded__top overflow-hidden'>
      <div className='pt-[80px] md:pt-[120px] pb-[80px] mx-auto flex flex-col items-center gap-[20px] md:gap-[60px]'>
        <h2 className='h2 text-center'>Games <span>Available</span></h2>

        <div className='w-full overflow-hidden'>
          {/* Motion row for infinite animation */}
          <motion.div
            ref={ref}
            className='games-row flex flex-row gap-[20px] md:gap-[40px] w-fit py-[50px]'
            style={{ x: xTranslation }}
          >
            {/* Render games twice for seamless looping */}
            {[...games, ...games].map((game, index) => (
              <motion.div
                key={index}
                className='game-card rounded-[20px] shadow-xl h-[100px] md:h-[120px] w-[100px] md:w-[120px] overflow-hidden hover:cursor-pointer'
                whileHover={{ scale: 1.2, x: -5, }} // Hover scale effect
                transition={{ type: "spring", stiffness: 200, damping: 10, duration: 0.5 }} // Smooth hover transition
              >
                <Image src={game.image} alt={game.name} className='w-full h-full object-cover' />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className='flex flex-col items-center gap-[50px]'>
          <h3 className='font-bold text-xl md:text-2xl text-center'>#BerkaryaUntukBangsa</h3>
          <Button className='max-w-[200px] text-center'>Kumpulkan Eggs Sekarang</Button>
        </div>
      </div>
    </div>
  );
};

export default GamesAvailableSection;
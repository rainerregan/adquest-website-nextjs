"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";

const TextAnimation = () => {
  const t = useTranslations("HomePage");

  const texts = [
    "Hero.Animation.0",
    "Hero.Animation.1",
    "Hero.Animation.2",
    "Hero.Animation.3",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  // Update the width based on the text content
  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth + 30); // Add padding
    }
  }, [currentTextIndex]);

  // Cycle through texts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500); // Change text every 2.5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [texts.length]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-4 items-center h-fit">
      <span className="hidden lg:block">{t('Hero.Title.3')}</span>
      <motion.div
        // Animate the width of the container dynamically
        animate={{ width: textWidth }}
        transition={{
          duration: 0.5, // Smooth width transition
          ease: "easeInOut",
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className={twMerge(
          "overflow-hidden leading-none text-white hero-dynamic-text bg-main-green flex items-center justify-center md:justify-start px-3 h-[40px] md:h-[60px] rounded-lg mt-1",
          "text-[30px] sm:text-[34px] lg:text-[40px] xl:text-[54px] relative"
        )}
      >
        <div
          ref={textRef} // Reference to measure width
          className="opacity-0 w-fit text-nowrap"
        >
          {t(texts[currentTextIndex])}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex} // Key changes trigger animation
            initial={{ y: "100%" }} // Start below
            animate={{ y: "0%" }} // Slide into view
            exit={{ y: "-140%" }} // Slide out above
            transition={{
              duration: 0.7, // Smooth transition duration
              type: "spring",
            }}
            className="text-nowrap leading-none absolute"
          >
            {t(texts[currentTextIndex])}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TextAnimation;
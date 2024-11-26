"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

const TextAnimation = () => {
  const texts = [
    "Belanja Online",
    "Beli Pulsa",
    "Top Up Game",
    "Budget Healing"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through texts
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [texts.length]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-4 items-center h-fit">
      <span className="hidden lg:block">untuk</span>
      <div
        className={twMerge(
          "overflow-y-hidden leading-none text-white hero-dynamic-text bg-main-green w-[480px] px-3 h-[60px] rounded-lg mt-1",
          "text-[30px] sm:text-[34px] lg:text-[40px] xl:text-[54px] relative"
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex} // Key changes trigger animation
            initial={{ y: "100%" }} // Start below
            animate={{ y: "0%" }} // Slide into view
            exit={{ y: "-100%" }} // Slide out above
            transition={{
              duration: 0.7, // Smooth transition duration
              ease: "easeInOut",
            }}
            className="text-nowrap leading-none absolute"
          >
            {texts[currentTextIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextAnimation;
"use client";
import React from "react";
import { motion } from "framer-motion";

interface CounterNumberItemProps {
  number: number;
}

const CounterNumberItem: React.FC<CounterNumberItemProps> = ({ number }) => {
  return (
    <div
      className="bg-white rounded-md sm:rounded-lg lg:rounded-xl text-main-black h-[30px] w-full sm:h-[36px] md:h-[50px] lg:h-[60px] xl:h-[70px] sm:aspect-square flex items-center justify-center text-lg md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-bold"
    >
      <motion.span
        key={number} // Key to trigger animation on change
        initial={{ y: 50, opacity: 1 }} // Initial state
        animate={{ y: 0, opacity: 1 }} // Animation state
        exit={{ y: -50, opacity: 1 }} // Exit state
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      >
        {number}
      </motion.span>
    </div>
  );
};

export default CounterNumberItem;
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  href,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1, // Slightly enlarges the button
        rotate: 5, // Bouncy shake effect
      }}
      initial={{
        rotate: 0
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 10, // Natural spring feel
        duration: 0.5, // Controls overall timing
      }}
    >
      <Link href={href ?? "/"} className={twMerge('px-4 py-2 block w-fit rounded-lg hover:cursor-pointer bg-main-green text-white font-bold', className)}>
        {children}
      </Link>
    </motion.div>
  );
};

export default Button;
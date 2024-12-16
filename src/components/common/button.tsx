import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  enableAnimation?: boolean;
  buttonType?: 'link' | 'button';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  href,
  enableAnimation = true,
  buttonType = 'link',
  disabled = false,
}) => {
  return (
    <motion.div
      whileHover={enableAnimation ? {
        scale: 1.1, // Slightly enlarges the button
        rotate: 2, // Bouncy shake effect
      } : {}}
      initial={enableAnimation ? {
        rotate: 0
      } : {}}
      transition={enableAnimation ? {
        type: 'spring',
        stiffness: 300,
        damping: 10, // Natural spring feel
        duration: 0.5, // Controls overall timing
      } : {}}
    >
      {buttonType === 'button' ? (
        <button type='submit' className={
          twMerge(
            'px-4 py-2 block w-fit rounded-lg hover:cursor-pointer bg-main-green text-white font-bold',
            disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80',
            className,
          )}
          disabled={disabled}
        >
          {children}
        </button>
      ) : (
        <Link href={href ?? "/"} className={twMerge('px-4 py-2 block w-fit rounded-lg hover:cursor-pointer bg-main-green text-white font-bold', className)}>
          {children}
        </Link>
      )}
    </motion.div>
  );
};

export default Button;
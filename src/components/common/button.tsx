import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

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
    <Link href={href ?? "/"} className={twMerge('px-4 py-2 block w-fit rounded bg-main-green text-white font-bold', className)}>
      {children}
    </Link>
  );
};

export default Button;
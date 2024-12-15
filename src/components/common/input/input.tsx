import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  useFormRegister?: UseFormRegisterReturn;
}

const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  useFormRegister,
  ...props
}) => {
  return (
    <div className='flex flex-col flex-1'>
      <label htmlFor={props.id} className={twMerge(
        'text-sm mb-1 font-semibold',
        errorMessage ? 'text-red-500' : ''
      )}>{label}</label>
      <input
        {...props}
        className={twMerge(
          'border border-gray-300 rounded-lg px-4 py-2',
          'focus:outline-none focus:border-main-green focus:ring-1 focus:ring-main-green',
          'transition-all duration-200',
          errorMessage ? 'border-red-500' : '',
          props.className,
          'h-fit'
        )}
        {...useFormRegister}
      />
      {errorMessage && <span className='mt-1 text-red-500 font-semibold text-xs'>{errorMessage}</span>}
    </div>
  );
};

export default Input;
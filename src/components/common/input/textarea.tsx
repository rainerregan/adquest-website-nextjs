import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  useFormRegister?: UseFormRegisterReturn;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  useFormRegister,
  ...props
}) => {
  return (
    <div className='flex flex-col flex-1'>
      <label htmlFor={props.id} className='text-sm mb-1 font-semibold'>{label}</label>
      <textarea
        {...props}
        className={twMerge(
          'border border-gray-300 rounded-lg px-4 py-2',
          'focus:outline-none focus:border-main-green focus:ring-1 focus:ring-main-green',
          'transition-all duration-200',
          props.className
        )}
        {...useFormRegister}
      />
    </div>
  );
};

export default TextArea;
import React from 'react';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonVariants = cva({
  base: 'px-8 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    intent: {
      primary:
        'bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 focus:ring-indigo-500',
      outline:
        'bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 focus:ring-white',
      
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

const PrimaryButton = ({ label, onClick, type = 'button', intent, disabled, className }) => {
  return (
    <button type={type} onClick={onClick} className={clsx(buttonVariants({ intent }), { 'opacity-50 cursor-not-allowed': disabled }, className)} disabled={disabled}>
      {label}
    </button>
  );
};

export default PrimaryButton;
import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from '../../utils/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({ children, className, onClick, ...props }: ButtonProps) {
  return (
    <button
    {...props}
      onClick={onClick}
      className={classNames(
        className,
        'flex w-full flex-row items-center justify-center rounded-[10px] bg-red-600 font-bold uppercase text-white hover:bg-red-700'
      )}
    >
      {children}
    </button>
  );
}

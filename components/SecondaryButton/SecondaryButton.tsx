import { ReactNode } from 'react';
import classNames from '../../utils/classNames';

type ButtonProps = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function SecondaryButton({
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        'font-bold text-black bg-white w-full rounded-[10px] uppercase hover:bg-gray-100 transition-all flex flex-row items-center justify-center border-2'
      )}
    >
      {children}
    </button>
  );
}

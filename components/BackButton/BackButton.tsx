import { ReactNode } from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import classNames from '../../utils/classNames';

interface BackButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function BackButton({
  children,
  onClick,
  className,
}: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(className, 'flex items-center gap-4')}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 pl-1 hover:bg-gray-200">
        <MdArrowBackIos size={13} className="text-gray-700" />
      </div>
      <span className="font-bold underline">{children}</span>
    </button>
  );
}

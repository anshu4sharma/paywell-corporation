import { ReactNode } from 'react';
import classNames from '../../utils/classNames';

interface FormHeaderProps {
  className?: string;
  children: ReactNode;
}

export default function FormHeader({ className, children }: FormHeaderProps) {
  return (
    <h1
      className={classNames(className, 'font-bold text-[32px] text-gray-900')}
    >
      {children}
    </h1>
  );
}

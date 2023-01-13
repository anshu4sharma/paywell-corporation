import { ReactNode } from 'react';
import classNames from '../../utils/classNames';

interface ItemLinkProps {
  children: ReactNode;
  className?: string;
}

export default function ItemLink({ children, className }: ItemLinkProps) {
  return (
    <span
      className={classNames(className, 'text-blue-900 font-bold underline')}
    >
      {children}
    </span>
  );
}

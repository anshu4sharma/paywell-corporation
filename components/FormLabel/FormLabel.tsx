import { ReactNode } from 'react';
import classNames from '../../utils/classNames';

type FormLabelProps = {
  htmlFor?: string;
  children: ReactNode;
  required?: boolean;
  className?: string;
};

export default function FormLabel({
  htmlFor,
  children,
  required,
  className,
}: FormLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        className,
        'font-bold text-base capitalize text-[#1D1D1D] leading-5 inline-flex'
      )}
    >
      {children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
}

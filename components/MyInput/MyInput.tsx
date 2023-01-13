import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import classNames from '../../utils/classNames';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
``;
const MyInput = forwardRef(
  (props: MyInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { className, ...customProps } = props;
    return (
      <input
        ref={ref}
        className={classNames(
          className,
          'w-full rounded-[10px] bg-gray-100 px-4 py-5 outline-none focus:ring-2 focus:ring-blue-500'
        )}
        {...customProps}
      />
    );
  }
);

MyInput.displayName = 'MyInput';
export default MyInput;

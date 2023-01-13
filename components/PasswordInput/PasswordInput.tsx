import { InputHTMLAttributes, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>;

export default function PasswordInput(props: PasswordInputProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState('');

  return (
    <>
      <div className="relative w-full rounded-[10px] bg-gray-100 ">
        <input
          {...props}
          type={visible ? 'text' : 'password'}
          className="w-full rounded-[10px] bg-gray-100 py-5 pl-6 text-gray-600 focus:outline-blue-500"
          // onChange={(e) => setValue(e.target.value)}
          // value={value}
        />
        <button
          className="absolute  right-7 top-5 max-w-max text-xl text-gray-400"
          onClick={() => setVisible(!visible)}
        >
          {visible ? <FiEye /> : <FiEyeOff />}
        </button>
      </div>
    </>
  );
}

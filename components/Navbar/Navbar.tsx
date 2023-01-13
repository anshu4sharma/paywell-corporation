import { BsFillBellFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import classNames from '../../utils/classNames';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <nav
      className={classNames(
        className,
        'fixed top-0 z-10 flex w-full flex-row items-center bg-white'
      )}
    >
      <div className="flex w-10/12 flex-col items-center">
        <div className="relative flex h-[52px] w-[524px] flex-row rounded-lg bg-gray-100">
          <FiSearch className="absolute left-4 max-w-max self-center text-xl text-red-500" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search with keywords..."
            className="w-full rounded-md bg-gray-100 pl-14 focus:outline-2 focus:outline-blue-500"
          />
        </div>
      </div>
      <div className="flex w-2/12 flex-row justify-end pr-20">
        <div className="relative flex flex-row   ">
          <BsFillBellFill className="text-2xl text-red-500 " />
          <div className=" absolute  -top-[6px] left-[12px]  flex h-5 w-5 flex-row items-center justify-center  rounded-full border-2 border-white  bg-yellow-400 text-black">
            <span className="text-sm ">5</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

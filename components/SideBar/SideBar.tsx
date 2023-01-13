import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { IoIosExit } from 'react-icons/io';
import sidebarLinks from '../../data/sidebarLinks';
import img from '../../public/images/beats.png';
import classNames from '../../utils/classNames';
import Button from '../Button/Button';

interface SideBarProps {
  className?: string;
}

export default function SideBar({ className }: SideBarProps) {
  const [activeId, setActiveId] = useState<number>();

  return (
    <div
      className={classNames(
        className,
        'fixed left-0 h-[85vh] overflow-x-hidden overflow-y-scroll rounded-lg bg-white pt-10 pb-20'
      )}
    >
      <div className="flex flex-col items-center">
        <div className=" mb-4 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2  border-dashed border-red-500 bg-white">
          <Image src={img} width={100} height={100} alt=""></Image>
        </div>
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold">Beats Nepal</span>
          <HiBadgeCheck className="text-2xl text-blue-800" />
        </div>
        <div className="text-gray-400">9823232323</div>
        <div className="text-gray-400">beatsnepal_123@gmail.com</div>
      </div>
      {/* links */}
      <div className="pb-16">
        <div>
          {sidebarLinks.map((item, index) => {
            let activeClass;
            if (activeId === item.id) {
              activeClass = 'text-rose-700';
            }
            return (
              <div
                key={index}
                className=" w-full  text-gray-400"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveId(item.id);
                }}
              >
                {item.icon ? (
                  <Link
                    href={item.link}
                    className="group relative inline-flex w-full  cursor-pointer items-center space-x-7 py-6 px-9 transition-all duration-150 ease-in-out hover:bg-gray-200"
                  >
                    <span
                      className={`text-3xl  transition-all duration-150 ease-in-out ${activeClass}`}
                    >
                      {item.icon}
                    </span>
                    <p
                      className={` transition-all duration-150 ease-in-out ${activeClass}`}
                    >
                      {item.name}
                    </p>
                    {activeId === item.id && (
                      <div className="absolute -right-[2px] h-8 w-1 rounded-lg bg-rose-700"></div>
                    )}
                  </Link>
                ) : (
                  <p className="px-9 py-6 font-bold text-black">{item.name}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-9">
        <Button
          className="h-[72px]"
          onClick={() => {
            localStorage.clear();
            Router.push('/signin');
          }}
        >
          <IoIosExit size={30} />
          &nbsp;&nbsp;&nbsp; Log out
        </Button>
      </div>
    </div>
  );
}

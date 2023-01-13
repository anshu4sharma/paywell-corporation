import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import MyInput from '../../../../components/MyInput/MyInput';

type RemitAgentProps = {
  header: string;
  children: string;
  options:{
    name:string;
    id:number;
    img:StaticImageData;
    link:string;
  }[]
};

export default function RemitAgent({ header, children, options}: RemitAgentProps) {
  return (
    <div className="h-fit w-full bg-white px-4 pt-10 pb-32">
      <div className="space-y-4 px-8">
        <div className="relative">
          <p className="text-2xl font-bold text-gray-900">{header}</p>
          <AiOutlineSearch className="absolute top-0 right-0 text-2xl text-gray-500" />
        </div>
        <p className="text-gray-700">{children}</p>
      </div>
      <div className="px-6">
        <MyInput
          placeholder="Search...."
          className="my-8 rounded-full pl-8 text-gray-600"
        ></MyInput>
      </div>
      <div className="grid w-full auto-rows-max  grid-cols-3 justify-center gap-y-12 gap-x-0 2xl:grid-cols-4  ">
        {options.map((item) => {
          return (
            <Link href={item.link}
              className=" group flex h-min flex-col items-center space-y-2"
              key={item.id}
            >
              <div className="flex h-36  w-36  flex-col  items-center justify-center rounded-lg bg-gray-200 object-cover transition-all duration-150 ease-in-out group-hover:bg-gray-300">
                <Image src={item.img} alt=""></Image>
              </div>
              <p className="text-gray-800 transition-all duration-150 ease-in-out group-hover:text-red-600">
                {item.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

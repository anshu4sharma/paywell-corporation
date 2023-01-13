import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { HiPhone } from 'react-icons/hi';
import { ImMobile } from 'react-icons/im';
import { IoIosMail } from 'react-icons/io';

export default function ContactUs() {
  return (
    <div className="flex flex-col space-y-4 shadow-md py-6 px-7 w-96 bg-white rounded-xl">
      <div className="font-bold ">Contact Us</div>
      <div className=" border-t-[1px] border-dashed border-gray-300"></div>
      <div className="space-y-7 pt-2">
        <div className="inline-flex items-center space-x-5 ">
          <HiPhone className="text-2xl" />
          <p className="">01-123456789</p>
        </div>
        <div className="inline-flex items-center space-x-5">
          <ImMobile className="text-2xl" />
          <p>+977 98187889998</p>
        </div>
        <div className="inline-flex items-center space-x-5">
          <IoIosMail className="text-2xl" />
          <p>support@paywell.com</p>
        </div>
        <div className="inline-flex items-center space-x-5">
          <BsFillQuestionCircleFill className="text-2xl" />
          <p>About us</p>
        </div>
      </div>
    </div>
  );
}

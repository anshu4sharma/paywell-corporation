import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import img from '../../public/images/qr.png';
import classNames from '../../utils/classNames';

interface QrCodeProps {
  className?: string;
}

export default function QrCode({ className }: QrCodeProps) {
  return (
    <div
      className={classNames(
        className,
        'bg-white w-full inline-flex items-center rounded-lg px-4 py-4 space-x-4'
      )}
    >
      <Image src={img} alt="" width={64} height={64} />
      <p>Share Your QR Code</p>
      <IoIosArrowForward className="text-2xl ml-6"></IoIosArrowForward>
    </div>
  );
}

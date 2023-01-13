import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import img from '../../../../public/images/wallet.png';
import classNames from '../../../../utils/classNames';
import LoadMoneyModal from '../LoadMoneyModal/LoadMoneyModal';
import SendMoneyModal from '../SendMoneyModal/SendMoneyModal';

interface BalanceCardProps {
  className?: string;
}

export default function BalanceCard({ className }: BalanceCardProps) {
  const [visible, setVisible] = useState(false);
  const [isLoadMoneyOpen, setIsLoadMoneyOpen] = useState(false);
  const [isSendMoneyOpen, setIsSendMoneyOpen] = useState(false);

  const encryptedValue = 'XXXX';

  return (
    <>
      <LoadMoneyModal
        isOpen={isLoadMoneyOpen}
        closeModal={() => setIsLoadMoneyOpen(false)}
      />
      <SendMoneyModal
        isOpen={isSendMoneyOpen}
        closeModal={() => setIsSendMoneyOpen(false)}
      />

      <div
        className={classNames(
          'balance-card-bg w-96 min-w-fit rounded-lg bg-no-repeat p-8',
          className
        )}
      >
        {/* BalanceCard */}
        <div className=" relative mb-12 flex w-80  min-w-fit flex-row space-x-6 rounded-lg bg-white bg-opacity-20 px-5 pt-7  pb-12 text-white drop-shadow-lg backdrop-blur-[2px]">
          <div>
            <div>
              <p className="text-2xl ">
                <span className="text-sm ">Nrs</span>{' '}
                <span className="font-bold">
                  {visible ? 5000.0 : encryptedValue}
                </span>
              </p>
            </div>
            <p>Paywell Balance</p>
          </div>
          <div className="text-right">
            <div>
              <p className="text-2xl ">
                <span className="text-sm ">Nrs</span>{' '}
                <span className="font-bold">
                  {visible ? 50.0 : encryptedValue}
                </span>
              </p>
            </div>
            <p>Bonus Balance</p>
          </div>

          <button
            className=" absolute bottom-2 right-2 rounded-full border-[1px] border-black bg-white p-1"
            onClick={() => setVisible(!visible)}
          >
            {visible ? (
              <FiEyeOff className="text-xs text-black" />
            ) : (
              <FiEye className="text-xs text-black" />
            )}
          </button>
        </div>
        {/* load money */}
        <button
          onClick={() => setIsLoadMoneyOpen(true)}
          className="mb-6 flex w-full flex-row justify-between rounded-full bg-white py-1 pl-1 pr-6"
        >
          <div className="flex flex-row items-center space-x-6">
            <div className="flex h-14 w-14 items-center  justify-center rounded-full border-[1px] border-black">
              <Image src={img} width={24} height={24} alt="icon"></Image>
            </div>
            <div className="font-bold">Load Money</div>
          </div>
          <FaArrowRight className="self-center text-2xl"></FaArrowRight>
        </button>
        {/* send money */}
        <button
          onClick={() => setIsSendMoneyOpen(true)}
          className="flex w-full flex-row justify-between rounded-full bg-white py-1 pl-1 pr-6"
        >
          <div className="flex flex-row items-center space-x-6">
            <div className="flex h-14 w-14 items-center  justify-center rounded-full border-[1px] border-black">
              <Image src={img} width={24} height={24} alt="icon"></Image>
            </div>
            <div className="font-bold">Send Money</div>
          </div>
          <FaArrowRight className="self-center text-2xl"></FaArrowRight>
        </button>
      </div>
    </>
  );
}

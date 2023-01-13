import Router from 'next/router';
import { useEffect } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { FiClipboard } from 'react-icons/fi';
import { HiShoppingBag } from 'react-icons/hi';
import { RiRefund2Line } from 'react-icons/ri';
import ProductsList from '../features/corporate-pay/components/ProductsList/ProductsList';
import { CardLayout } from '../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from './_app';

const DashBoard: NextPageWithLayout = () => {
  return (
    <>
      <div className="mb-8 grid grid-cols-2 gap-8 rounded-[10px] bg-white p-8">
        <ItemCard
          heading="total orders"
          value="35"
          text="orders received"
          icon={<FiClipboard size={24} className="text-blue-500" />}
        />
        <ItemCard
          heading="completed orders"
          value="17"
          text="orders delivered"
          icon={<HiShoppingBag size={25} className="text-green-500" />}
        />
        <ItemCard
          heading="pending orders"
          value="16"
          text="orders to deliver"
          icon={<BiTimeFive size={24} className="text-green-500" />}
        />
        <ItemCard
          heading="refunded orders"
          value="02"
          text="orders refunded"
          icon={<RiRefund2Line size={24} className="text-red-500" />}
        />
      </div>
      <ProductsList className="mb-8" />
    </>
  );
};

interface ItemCardProps {
  heading: string;
  value: string;
  icon: JSX.Element;
  text: string;
}

const ItemCard = ({ heading, value, icon, text }: ItemCardProps) => {
  return (
    <div className="rounded-lg bg-gray-100 p-5">
      <div className="flex items-center gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-md bg-white">
          {icon}
        </div>
        <div>
          <p className="mb-3 font-bold capitalize">{heading}</p>
          <div className="flex items-end gap-3">
            <p className="text-5xl font-bold">{value}</p>
            <p className="capitalize text-gray-400">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

DashBoard.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default DashBoard;

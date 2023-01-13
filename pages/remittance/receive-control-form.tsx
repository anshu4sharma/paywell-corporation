import { useState } from 'react';
import Button from '../../components/Button/Button';
import MyInput from '../../components/MyInput/MyInput';
import OrderSummary from '../../features/remittance/components/OrderSummary/OrderSummary';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const ControlForm: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <OrderSummary
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
      <div className="h-fit w-full space-y-8 rounded-lg bg-white px-10 pt-9 pb-16">
        <p className="text-2xl font-bold text-gray-800">Small World</p>
        <div className="space-y-5">
          <p className="text-xl font-bold text-gray-800">Control Number</p>
          <div className="space-y-2">
            <MyInput
              placeholder="Enter control Number"
              className="rounded-2xl bg-white px-9 text-lg ring-1 ring-gray-400"
            />
            <p className="pl-4 text-gray-500">
              Control number between 06-18 digits
            </p>
          </div>
        </div>
        <div className="mx-auto w-1/2 pt-8">
          <Button
            className="rounded-full py-4 text-xl"
            onClick={() => setIsModalOpen(true)}
          >
            check
          </Button>
        </div>
      </div>
    </>
  );
};

ControlForm.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default ControlForm;

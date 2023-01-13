import { useRouter } from 'next/router';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
const SendMoneyTransaction = () => {
  const router = useRouter();
  console.log(router.query);
  // acNumber: '',
  // acHolderName: '',
  // amount: '',
  // purpose: '',
  // remarks: '',
  return (
    <CardLayout>
      <div className="w-full rounded-lg bg-white px-6 py-12">
        <p className="mb-4 text-lg font-bold">Transaction Details </p>
        <div className="pb-20">
          <div className="inline-flex w-full   items-center justify-between border-t-2 py-6 text-gray-700">
            <p>Sender&apos;s Name</p>
            <p>Bharat</p>
          </div>
          <div className="inline-flex w-full   items-center justify-between border-t-2 py-6 text-gray-700">
            <p>Receiver&apos;s Name</p>
            <p>{router.query.acHolderName}</p>
          </div>
          <div className="inline-flex w-full   items-center justify-between border-t-2 py-6 text-gray-700">
            <p>Destination Bank</p>
            <p>Global IME Bank</p>
          </div>
          <div className="inline-flex w-full   items-center justify-between border-t-2 py-6 text-gray-700">
            <p>Account Number</p>
            <p>{router.query.acHolderName}</p>
          </div>
          <div className="inline-flex w-full  items-center justify-between border-t-2 py-6 text-gray-700">
            <p>Transaction Amount</p>
            <p>NRS {router.query.acHolderName}</p>
          </div>
          <div className="inline-flex w-full   items-center justify-between border-t-2 py-6 text-gray-700">
            <p>Purpose</p>
            <p>{router.query.acHolderName}</p>
          </div>
          <div className="inline-flex w-full   items-center justify-between border-t-2 py-6 text-gray-700">
            <p className="flex w-1/2 flex-col">Amount In Figure</p>
            <p className="flex w-1/2 flex-col items-end capitalize">
              Twenty seven lakh forty five thousand one hundred and fifty five
            </p>
          </div>
          <div className="inline-flex w-full   items-center justify-between border-t-2 py-6 text-gray-700">
            <p>Transaction ID</p>
            <p>PW-123</p>
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-8">
          <button className="flex w-1/3 flex-row  items-center justify-center rounded-[10px] bg-white py-3 font-bold uppercase text-gray-700 ring-2 ring-gray-300 hover:bg-gray-200 hover:ring-gray-200">
            Done
          </button>
          <button className="flex w-1/3 flex-row items-center justify-center rounded-[10px] bg-red-600 py-3 font-bold uppercase text-white hover:bg-red-700">
            SEND NOW
          </button>
        </div>
      </div>
    </CardLayout>
  );
};

export default SendMoneyTransaction;

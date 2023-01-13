import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { GrFormClose } from 'react-icons/gr';
import Button from '../../../../components/Button/Button';
import SecondaryButton from '../../../../components/SecondaryButton/SecondaryButton';
import classNames from '../../../../utils/classNames';

const summaryData = [
  { name: 'Order ID 1', value: 'PW-123' },
  { name: 'Order ID 2', value: 'PW-C6396' },
  {
    name: 'Status',
    value: (
      <div
        className="rounded-[3px] border bg-green-100 
        py-[2px] px-2 text-sm text-[#1BAD64]"
      >
        Received
      </div>
    ),
  },
  {
    name: 'Priority',
    value: (
      <div className="rounded-[3px] border bg-blue-100 py-[2px] px-2 text-sm text-[#02B2E8]">
        Standard
      </div>
    ),
  },
  { name: 'Created At', value: '12 JAN, 2022' },
  { name: 'Completed At', value: '--/--/----' },
];

const senderData = [
  { name: 'Name', value: 'Prajwal Acharya' },
  { name: 'Phone', value: '+12 652348965' },
  { name: 'Email', value: 't_uttam3@gmail.com' },
  { name: 'Address', value: 'Dubai' },
  { name: 'Payment Type', value: 'Remittance' },
  { name: 'Remit Agent', value: 'IME Pay' },
  { name: 'AC Number', value: '0124556978662458' },
  { name: 'Amount', value: '40,000.00' },
];

const receiverData = [
  { name: 'Name', value: 'Satyandra Shrestha' },
  { name: 'Phone', value: '9818181818' },
  { name: 'Email', value: 'I_barbara12@gmail.com' },
  { name: 'Address', value: 'Kathmandu, Nepal' },
  { name: 'Amount', value: '40,000.00' },
  { name: 'Distributor', value: 'Paywell' },
];

interface OrderSummaryProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function OrderSummary({
  isOpen,
  closeModal,
}: OrderSummaryProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 font-montserrat"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 pt-14 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative">
                <button
                  className="absolute -right-8 -top-8 rounded-full bg-white p-1 hover:bg-gray-100"
                  onClick={closeModal}
                >
                  <GrFormClose size={24} />
                </button>
                <Dialog.Panel className="w-full max-w-[930px] transform overflow-hidden rounded-[10px] bg-white px-12 py-10 text-left align-middle shadow-xl transition-all">
                  <h3 className="mb-7 text-2xl font-bold">Order Summary</h3>
                  <hr className="mb-5" />
                  <InformationLayout options={summaryData} />

                  <h3 className="mb-7 text-2xl font-bold">
                    Sender&apos;s Information
                  </h3>
                  <hr className="mb-5" />
                  <InformationLayout options={senderData} />

                  <h3 className="mb-7 text-2xl font-bold">
                    Receiver&apos;s Information
                  </h3>
                  <hr className="mb-5" />
                  <InformationLayout options={receiverData} />

                  <h3 className="mb-7 text-2xl font-bold">Summary</h3>
                  <hr className="mb-5" />
                  <Summary />

                  <div className="flex justify-end gap-8">
                    <SecondaryButton onClick={closeModal} className="w-44 py-5">
                      Cancel
                    </SecondaryButton>
                    <Button onClick={closeModal} className="w-44 py-5">
                      Receive
                    </Button>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

const InformationLayout = ({
  options,
}: {
  options: { name: string; value: string | JSX.Element }[];
}) => {
  return (
    <div className="mb-11 grid grid-cols-2 gap-y-5 gap-x-24">
      {options.map((item, index) => (
        <div
          key={index}
          className={classNames(
            index % 2 !== 0 ? 'justify-between' : '',
            'flex'
          )}
        >
          <p className="w-44">{item.name}:</p>
          <span className="font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

const Summary = () => {
  return (
    <div className="mb-11">
      <div className="mb-5 flex justify-between">
        <p>Transfer Amount:</p>
        <p className="font-medium">NPR 40,000.00</p>
      </div>
      <div className="mb-5 flex justify-between">
        <p>Transfer Fee:</p>
        <p className="font-medium">NPR 400.00</p>
      </div>
      <div className="mb-5 flex justify-end">
        <hr className="h-0 w-64 border" />
      </div>
      <div className="mb-5 flex justify-between">
        <p>Transfer Total:</p>
        <p className="font-medium">NPR 40,000.00</p>
      </div>
      <div className="flex justify-between">
        <p>Receiver&apos;s Total:</p>
        <p className="font-medium">NPR 40,000.00</p>
      </div>
    </div>
  );
};

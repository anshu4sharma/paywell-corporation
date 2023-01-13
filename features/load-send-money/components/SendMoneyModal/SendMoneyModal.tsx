import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { AiFillBank } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';

interface SendMoneyModalProps {
  closeModal: () => void;
  isOpen: boolean;
}

export default function SendMoneyModal({
  closeModal,
  isOpen,
}: SendMoneyModalProps) {
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative w-full max-w-[930px]">
                <button
                  className="absolute -right-8 -top-8 rounded-full bg-white p-1 hover:bg-gray-100"
                  onClick={closeModal}
                >
                  <GrFormClose size={24} />
                </button>
                <Dialog.Panel className="transform overflow-hidden rounded-[10px] bg-white px-12 py-10 text-left align-middle shadow-xl transition-all">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold">Send Money</h3>
                    <p className="mb-3 text-gray-500">
                      Transfer to any bank in Nepal
                    </p>
                    <hr className="mb-5" />
                    <Link
                      href="/send-money/banks"
                      className="-ml-4 flex cursor-pointer items-center gap-7 rounded-md py-4 pl-4 transition-colors hover:bg-gray-100"
                    >
                      <AiFillBank size={30} />
                      <div>
                        <p className="mb-2 font-semibold">Send to any bank</p>
                        <p>Transfer to any bank in Nepal</p>
                      </div>
                    </Link>
                    <hr className="my-2 border" />
                    <Link
                      href="/send-money/user"
                      onClick={closeModal}
                      className="-ml-4 flex cursor-pointer items-center gap-7 rounded-md py-4 pl-4 transition-colors hover:bg-gray-100"
                    >
                      <BsFillPeopleFill size={30} />
                      <div>
                        <p className="mb-2 font-semibold">
                          Send to Paywell user
                        </p>
                        <p>Transfer to Paywell user</p>
                      </div>
                    </Link>
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

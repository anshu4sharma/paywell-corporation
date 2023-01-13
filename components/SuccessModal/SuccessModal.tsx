import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import Button from '../Button/Button';

interface SuccessModalProps {
  title: string;
  description: string;
}

export default function SuccessModal({
  title,
  description,
}: SuccessModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }
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
              <div className="relative w-full max-w-[800px]">
                <button
                  className="absolute -right-8 -top-8 rounded-full bg-white p-1 hover:bg-gray-100"
                  onClick={closeModal}
                >
                  <GrFormClose size={24} />
                </button>
                <Dialog.Panel className="transform overflow-hidden rounded-[10px] bg-white p-12 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-10 flex w-full flex-col items-center">
                      <AiFillCheckCircle
                        size={100}
                        className="z-10 bg-white text-[#1BAD64]"
                      />
                      <hr className="absolute top-1/2 h-1 w-full" />
                    </div>
                    <h3 className="mb-10 text-2xl font-bold">{title}</h3>
                    <p className="mb-16 max-w-[500px] text-center leading-7 text-gray-400">
                      {description}
                    </p>
                  </div>
                  <Button onClick={closeModal} className="py-5">
                    Done
                  </Button>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

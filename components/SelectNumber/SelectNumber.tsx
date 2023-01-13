import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import classNames from '../../utils/classNames';

const numberOptions = [
  { id: 1, name: '+977' },
  { id: 2, name: '+001' },
];

export default function SelectNumber() {
  const [selected, setSelected] = useState(numberOptions[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative w-32">
            <Listbox.Button className="relative w-full cursor-pointer rounded-l-md bg-gray-100 py-5 pl-3 pr-10 text-left ring-inset focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <span className="flex items-center">
                <span className="ml-3 block truncate text-gray-400">
                  {selected.name}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-5">
                  {open ? (
                    <AiFillCaretUp
                      size={15}
                      className="text-gray-600"
                      aria-hidden="true"
                    />
                  ) : (
                    <AiFillCaretDown
                      size={15}
                      className="text-gray-600"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-2 max-h-56 w-full overflow-auto rounded-md bg-gray-100 py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {numberOptions.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-gray-200' : 'text-gray-900',
                        'relative cursor-default select-none py-3 pl-3 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {option.name}
                          </span>
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

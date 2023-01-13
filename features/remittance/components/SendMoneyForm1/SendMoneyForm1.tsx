import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../../../../components/Button/Button";
import MyInput from "../../../../components/MyInput/MyInput";
import SelectListBox from "../../../../components/SelectListBox/SelectListBox";
import HighlightedText from "../HighlightedText/HighlightedText";
import TransactionLoader from "../TransactionLoader/TransactionLoader";

type Props = {
  onClick: () => void;
};

export default function SendMoneyForm1({ onClick }: Props) {
  const options = [
    {
      id: -1,
      name: "Select District",
    },
    {
      id: 0,
      name: "Bhaktapur",
    },
    {
      id: 0,
      name: "Lalitpur",
    },
    {
      id: 0,
      name: "Bhaktapur",
    },
    {
      id: 0,
      name: "Lalitpur",
    },
    {
      id: 0,
      name: "Bhaktapur",
    },
    {
      id: 0,
      name: "Lalitpur",
    },
    {
      id: 0,
      name: "Bhaktapur",
    },
    {
      id: 0,
      name: "Lalitpur",
    },
    {
      id: 0,
      name: "Bhaktapur",
    },
    {
      id: 0,
      name: "Lalitpur",
    },
    {
      id: 0,
      name: "Bhaktapur",
    },
    {
      id: 0,
      name: "Lalitpur",
    },
  ];
  return (
    <>
      <div className="bg-white px-10 py-10 w-full">
        <div className="px-4 space-y-4 ">
          <div className="relative">
            <p className="font-bold text-2xl text-gray-900"> Send Money</p>
            <AiOutlineSearch className="text-2xl text-gray-500 absolute top-0 right-0" />
          </div>
          <p className="text-gray-700">Send money To remit agents in Nepal</p>
        </div>
        <div className="px-5">
          <TransactionLoader className="mb-16 mt-12 " />
        </div>
        <HighlightedText />

        <div className="space-y-8 py-10 pb-12">
          <SelectListBox
            options={options}
            className="!rounded-full !pl-5 bg-white ring-1 ring-gray-400"
          ></SelectListBox>
          <div className="space-y-2 relative pb-5">
            <MyInput
              className="rounded-full bg-white ring-1 ring-gray-400 pl-8 text-gray-700"
              placeholder="Amount"
            />
            <p className="font-bold text-gray-600 pl-6 absolute">
              Minimum transaction amount Rs 100
            </p>
          </div>
          <MyInput
            className="rounded-full bg-white ring-1 ring-gray-400 pl-8 text-gray-700"
            placeholder="Service Fee"
          />
        </div>
        <div className="px-28">
          <Button className="py-5 rounded-full" onClick={onClick}>
            proceed
          </Button>
        </div>
      </div>
    </>
  );
}

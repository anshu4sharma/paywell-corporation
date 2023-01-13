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

export default function SendMoneyForm2({ onClick }: Props) {
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
        <p className="font-bold pt-10">Receiver&apos;s Information</p>
        <div className="space-y-8 py-4 pb-8">
          <MyInput
            className="rounded-full bg-white ring-1 ring-gray-400 pl-8 text-gray-700"
            placeholder="Name"
          />
          <MyInput
            className="rounded-full bg-white ring-1 ring-gray-400 pl-8 text-gray-700"
            placeholder="Mobile Number"
          />
          <MyInput
            className="rounded-full bg-white ring-1 ring-gray-400 pl-8 text-gray-700"
            placeholder="Address"
          />
          <MyInput
            className="rounded-full bg-white ring-1 ring-gray-400 pl-8 text-gray-700"
            placeholder="Relation with Receiver"
          />
          <MyInput
            className="rounded-full bg-white ring-1 ring-gray-400 pl-8 text-gray-700"
            placeholder="Remit Purpose"
          />
          <MyInput
            className="rounded-full bg-white ring-1 ring-gray-400 pl-8 text-gray-700"
            placeholder="Service Fee"
          />
        </div>
        <p className="font-bold">Receiver&apos;s Documents/Vaild ID</p>
        <div className="space-y-8 py-4 pb-12">
          <MyInput
            className="rounded-full bg-white ring-1 ring-gray-400 pl-8 text-gray-700"
            placeholder="Document Type"
          />
          <MyInput
            className="rounded-full bg-white ring-1 ring-gray-400 pl-8 text-gray-700"
            placeholder="Document Number"
          />
          <MyInput
            className="rounded-full bg-white ring-1 ring-gray-400 pl-8 text-gray-700"
            placeholder="Remarks"
          />
        </div>
        <div className="px-28">
          <Button className="py-5 rounded-full" onClick={onClick}>
            continue
          </Button>
        </div>
      </div>
    </>
  );
}

import React from "react";

type Props = {
  className: string;
};

export default function TransactionLoader({ className }: Props) {
  return (
    <div className={`flex flex-row items-center relative w-full ${className}`}>
      <div className="w-6 h-6 rounded-full ring-4 ring-green-600 z-[1]"></div>
      <div className="bg-gray-600 h-1 w-full"></div>
      <div className="w-6 h-6 rounded-full ring-4 ring-gray-600"></div>
      <p className="absolute top-8 text-gray-700 -left-8">Transaction</p>
      <p className="absolute top-8 text-gray -right-8">Receiver</p>
    </div>
  );
}

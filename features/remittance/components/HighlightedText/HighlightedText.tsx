import React from "react";

type Props = {
  // children: string;
};

export default function HighlightedText({}: Props) {
  return (
    <div
      className="text-gray-800 py-6 px-8 bg-[#00A3FFBA]/10 rounded-lg shadow-md shadow-gray-500 ring-2
    ring-blue-300
    "
    >
      The receiver can collect the sent amount from any nearby agent across the
      country
    </div>
  );
}

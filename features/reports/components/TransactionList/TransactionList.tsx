import { BsFileEarmarkPdf } from 'react-icons/bs';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import transactionData from '../../data/transactionData';

export default function TransactionList() {
  return (
    <div>
      <div>
        <table className="mb-10 w-full">
          <thead className="text-gray-400">
            <tr className="border-b-2">
              <th className="w-16 pb-3 text-left font-normal">SN</th>
              <th className="pb-3 text-center font-normal">Date</th>
              <th className="pb-3 text-center font-normal">TXN Id</th>
              <th className="pb-3 text-center font-normal">Account Name</th>
              <th className="pb-3 text-center font-normal">Bank Name</th>
              <th className="pb-3 text-center font-normal">Account Number</th>
              <th className="pb-3 text-center font-normal">Principal (NPR)</th>
              <th className="pb-3 text-center font-normal">Fee</th>
              <th className="pb-3 text-center font-normal">Total (NPR)</th>
              <th className="pb-3 text-center font-normal">Status</th>
              <th className="pb-3 text-center font-normal">Export</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((value) => (
              <TableRow key={value.id} value={value} />
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="py-4 text-center text-2xl font-bold uppercase">
                total
              </td>
              <td className="py-4 text-center text-2xl font-bold">30,000</td>
              <td className="py-4 text-center text-2xl font-bold">300</td>
              <td className="py-4 text-center text-2xl font-bold">30,300</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between">
          <p>Showing 10 Results of 10</p>
          <div className="flex items-center gap-4">
            <button className="w-max rounded-full bg-gray-100 p-3 hover:bg-gray-200">
              <IoChevronBackOutline />
            </button>
            <div className="flex h-10 items-center justify-center rounded-full bg-red-500 p-4 font-bold text-white">
              <p>1</p>
            </div>
            <button className="w-max rounded-full bg-gray-100 p-3 hover:bg-gray-200">
              <IoChevronForwardOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const TableRow = ({ value }: { value: typeof transactionData[0] }) => {
  return (
    <tr className="border-b-2">
      <td className="pt-8 pb-2 text-left">{value.id}.</td>
      <td className="pt-8 pb-2 text-center text-blue-700">{value.date}</td>
      <td className="pt-8 pb-2 text-center text-blue-700">
        {value.transactionId}
      </td>
      <td className="pt-8 pb-2 text-center">{value.account.name}</td>
      <td className="pt-8 pb-2 text-center">{value.bankName}</td>
      <td className="pt-8 pb-2 text-center">{value.accountNumber}</td>
      <td className="pt-8 pb-2 text-center">
        {value.principal.toLocaleString()}
      </td>
      <td className="pt-8 pb-2 text-center">{value.fee}</td>
      <td className="pt-8 pb-2 text-center">{value.total.toLocaleString()}</td>
      <td className="flex items-center justify-center pt-8 pb-2 text-center">
        <TransactionStatus status={value.status} />
      </td>
      <td className="pt-8 pb-2">
        <div className="flex justify-center">
          <BsFileEarmarkPdf size={23} />
        </div>
      </td>
    </tr>
  );
};

const TransactionStatus = ({ status }: { status: string }) => {
  if (status === 'success') {
    return (
      <div className="w-20 rounded-[4px] bg-green-200 py-1 text-sm capitalize text-green-600">
        {status}
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="w-20 rounded-[4px] bg-rose-200 py-1 text-sm capitalize text-red-500">
        {status}
      </div>
    );
  }

  if (status === 'processing') {
    return (
      <div className="w-20 rounded-[4px] bg-yellow-200 py-1 text-sm capitalize text-yellow-500">
        {status}
      </div>
    );
  }

  if (status === 'initiated') {
    return (
      <div className="w-20 rounded-[4px] bg-blue-200 py-1 text-sm capitalize text-blue-500">
        {status}
      </div>
    );
  }

  return <></>;
};

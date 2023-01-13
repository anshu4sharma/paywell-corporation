import { useState } from 'react';
import { AiFillFileExcel, AiFillFilePdf } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import Button from '../../components/Button/Button';
import SearchTransaction from '../../features/reports/components/SearchTransaction/SearchTransaction';
import TransactionList from '../../features/reports/components/TransactionList/TransactionList';
import { NextPageWithLayout } from '../_app';

const TransactionReport: NextPageWithLayout = () => {
  const [selectedTab, setSelectedTab] = useState('corporate');

  return (
    <div className="h-full rounded-[10px] bg-white py-6 px-10">
      <div className="relative flex items-center justify-between pb-6">
        <div className="flex gap-14">
          <div className="flex flex-col items-center">
            <button
              className="text-2xl text-gray-400 hover:text-gray-500"
              onClick={() => setSelectedTab('corporate')}
            >
              Paywell Corporate
            </button>
            {selectedTab === 'corporate' && (
              <div className="absolute -bottom-1 w-28 rounded-full border-b-[5px] border-red-500" />
            )}
          </div>
          <div
            className="flex flex-col items-center"
            onClick={() => setSelectedTab('search')}
          >
            <button className="text-2xl text-gray-400 hover:text-gray-500">
              Search
            </button>
            {selectedTab === 'search' && (
              <div className="absolute -bottom-1 w-28 rounded-full border-b-[5px] border-red-500" />
            )}
          </div>
        </div>
        <div className="flex gap-3">
          <Button className="w-28 py-3 px-4 font-normal normal-case">
            <div className="flex items-center gap-3">
              <AiFillFilePdf />
              <p>Export</p>
            </div>
          </Button>
          <Button className="w-28 py-3 px-4 font-normal normal-case">
            <div className="flex items-center gap-3">
              <AiFillFileExcel />
              <p>Export</p>
            </div>
          </Button>
        </div>
      </div>
      <div className="mb-8 border-b border-gray-300" />
      {selectedTab === 'search' ? <SearchTransaction /> : <Heading />}
      <TransactionList />
    </div>
  );
};

const Heading = () => {
  return (
    <div className="mb-12 flex items-center justify-between">
      <h2 className="text-2xl font-bold">Transactions History</h2>
      <div className="flex items-center gap-3">
        <p className="text-2xl font-bold">DATE</p>
        <button className="rounded-full bg-red-500 p-4 text-white hover:bg-red-600">
          <GoSettings size={20} className="rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default TransactionReport;

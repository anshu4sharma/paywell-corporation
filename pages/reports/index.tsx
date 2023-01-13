import Link from 'next/link';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const Reports: NextPageWithLayout = () => {
  return (
    <Link href="/reports/transaction">
      <div className="rounded-[10px] bg-white py-4 pl-28 shadow-sm transition-colors hover:bg-gray-50">
        <p className="mb-3 text-2xl font-bold">Paywell Corporate +</p>
        <p className="text-gray-500">View reports of Paywell corporate +</p>
      </div>
    </Link>
  );
};

export default Reports;

Reports.getLayout = (page) => <CardLayout>{page}</CardLayout>;

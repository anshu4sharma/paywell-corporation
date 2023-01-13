import Link from 'next/link';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const RemittanceHome: NextPageWithLayout = () => {
  return (
    <div className="space-y-4">
      <Item
        heading="Send Cash Pickup"
        label="Send money to remit agents in Nepal"
        href="/remittance/send-money"
      />
      <Item
        heading="Receive Cash Pickup"
        label="Receive Remittance in Paywell wallet directly"
        href="/remittance/receive-money"
      />
      <Item
        heading="Track Transaction"
        label="Check the status of Money Transfer"
        href="/remittance/track-transaction"
      />
    </div>
  );
};

const Item = ({
  heading,
  label,
  href,
}: {
  heading: string;
  label: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="group flex w-full flex-col items-start space-y-3 rounded-lg bg-white py-3 pl-28 transition-all duration-150 hover:bg-gray-200"
    >
      <p className="text-2xl font-bold capitalize text-gray-700 group-hover:text-rose-600">
        {heading}
      </p>
      <p className="text-gray-700">{label}</p>
    </Link>
  );
};

RemittanceHome.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default RemittanceHome;

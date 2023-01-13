import { useRouter } from 'next/router';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import FormLabel from '../../components/FormLabel/FormLabel';
import MyInput from '../../components/MyInput/MyInput';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const BankAccount: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <div className="rounded-[10px] bg-white p-10">
      <div className="mb-10 flex items-center gap-3">
        <BackButton onClick={() => router.back()} />
        <h1 className="text-2xl font-bold">Bank Accounts</h1>
      </div>
      <div className="mb-10 flex items-center gap-10">
        <div className="h-14 w-14 rounded-full bg-gray-200" />
        <div>
          <p className="mb-3 font-semibold">Agriculture Development Bank</p>
          <p>MBanking</p>
        </div>
      </div>

      <div className="mb-7">
        <FormLabel required htmlFor="amount" className="mb-3">
          Amount
        </FormLabel>
        <MyInput id="amount" placeholder="Enter Amount" />
      </div>
      <div className="mb-8">
        <p className="mb-4 text-gray-600">Enter or select amount</p>
        <div className="flex items-center gap-5">
          <button className="rounded-3xl border border-gray-700 px-7 py-3 font-semibold transition-colors hover:border-rose-600  hover:bg-rose-600 hover:text-white">
            Rs. 50
          </button>
          <button className="rounded-3xl border border-gray-700 px-7 py-3 font-semibold transition-colors hover:border-rose-600  hover:bg-rose-600 hover:text-white">
            Rs. 100
          </button>
          <button className="rounded-3xl border border-gray-700 px-7 py-3 font-semibold transition-colors hover:border-rose-600  hover:bg-rose-600 hover:text-white">
            Rs. 200
          </button>
        </div>
      </div>
      <div className="mb-20">
        <FormLabel htmlFor="remarks" required className="mb-3">
          Remarks
        </FormLabel>
        <MyInput id="remarks" placeholder="Remarks" />
      </div>
      <Button className="py-6">Continue</Button>
    </div>
  );
};

BankAccount.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default BankAccount;

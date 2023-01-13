import { useRouter } from 'next/router';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';
import Button from '../../components/Button/Button';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const TrackTransition: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <div className="h-fit w-full space-y-3 rounded-lg bg-white px-10 pt-9 pb-16">
      <p className="text-2xl font-bold text-gray-800">Track Money</p>
      <p className="text-gray-600">Track Status of Remittance</p>
      <div className="space-y-5 py-5 px-4">
        <p className="text-xl font-bold text-gray-800">Tracking Status</p>
        <InProgress />
        <Completed />
      </div>
      <div className="mx-auto w-1/2 pt-8">
        <Button
          className="rounded-full py-4 text-xl"
          onClick={() => router.push('/remittance')}
        >
          done
        </Button>
      </div>
    </div>
  );
};

const InProgress = () => {
  return (
    <div className="flex flex-row items-center space-x-5 rounded-lg bg-gray-100 px-9 py-8">
      <BiLoaderCircle className="text-6xl text-rose-700" />
      <div className="space-y-0">
        <p className="text-2xl font-bold text-gray-800 ">Unpaid</p>
        <p className="text-lg text-gray-800">
          Your money is currently in progress
        </p>
      </div>
    </div>
  );
};

const Completed = () => {
  return (
    <div className="flex flex-row items-center space-x-5 rounded-lg bg-gray-100 px-9 py-8">
      <AiFillCheckCircle className="text-6xl text-green-600" />
      <div className="space-y-0">
        <p className="text-2xl font-bold text-gray-800 ">Completed</p>
        <p className="text-lg text-gray-800">Your transaction is complete</p>
      </div>
    </div>
  );
};

TrackTransition.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default TrackTransition;

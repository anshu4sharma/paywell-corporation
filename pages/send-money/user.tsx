import { useRouter } from 'next/router';
import { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import FormLabel from '../../components/FormLabel/FormLabel';
import MyInput from '../../components/MyInput/MyInput';
import SelectListBox from '../../components/SelectListBox/SelectListBox';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const purposeOptions = [
  { id: 1, name: 'Personal Use' },
  { id: 2, name: 'Borrow/lend' },
  { id: 3, name: 'Bill' },
  { id: 4, name: 'Salary' },
];

const UserForm: NextPageWithLayout = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (isConfirmed) {
      return;
    } else {
      setIsConfirmed(true);
    }
  };

  return (
    <div className="rounded-[10px] bg-white p-10">
      <div className="mb-10 flex gap-5">
        <BackButton onClick={() => router.back()} />
        <div>
          <h1 className="mb-2 text-2xl font-bold">Send to Paywell user</h1>
          <p className="text-gray-500">
            {isConfirmed
              ? 'Please verify details before proceeding'
              : 'Enter Details'}
          </p>
        </div>
      </div>
      {isConfirmed ? <ConfirmDetails /> : <Form />}
      <Button onClick={handleClick} className="py-6">
        {isConfirmed ? 'Transfer' : 'Continue'}
      </Button>
    </div>
  );
};

const ConfirmDetails = () => {
  return (
    <div className="mb-20 rounded-[30px] bg-gray-200 p-5 px-7">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="py-5 text-gray-600">Paywell Mobile Number</td>
            <td className="py-5 text-end font-semibold">9803939558</td>
          </tr>
          <tr>
            <td className="pb-5 text-gray-600 ">Account Holder Name</td>
            <td className="pb-5 text-end font-semibold ">Prajwal Adhikari</td>
          </tr>{' '}
          <tr>
            <td className="pb-5 text-gray-600 ">Purpose</td>
            <td className="pb-5 text-end font-semibold ">Borrow/Lend</td>
          </tr>{' '}
          <tr className="border-b border-dashed border-gray-500">
            <td className="pb-6 text-gray-600 ">Remarks</td>
            <td className="pb-6 text-end font-semibold ">Food</td>
          </tr>
          <tr>
            <td className="py-5 text-gray-600">Total paying</td>
            <td className="py-5 text-end font-semibold">Rs 200.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Form = () => {
  return (
    <div>
      <div className="mb-8">
        <FormLabel required htmlFor="mobileNumber" className="mb-3">
          Paywell Mobile Number
        </FormLabel>
        <MyInput id="mobileNumber" placeholder="Paywell Mobile Number" />
      </div>
      <div className="mb-8">
        <FormLabel required htmlFor="amount" className="mb-3">
          Amount
        </FormLabel>
        <MyInput id="amount" placeholder="Amount" />
      </div>
      <div className="mb-8">
        <FormLabel required htmlFor="purpose" className="mb-3">
          Purpose
        </FormLabel>
        <SelectListBox options={purposeOptions} />
      </div>
      <div className="mb-20">
        <FormLabel required htmlFor="remarks" className="mb-3">
          Remarks
        </FormLabel>
        <MyInput id="remarks" placeholder="Remarks" />
      </div>
    </div>
  );
};

UserForm.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default UserForm;

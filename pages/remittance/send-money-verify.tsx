import Button from '../../components/Button/Button';
import FormHeader from '../../components/FormHeader/FormHeader';
import ItemLink from '../../components/ItemLink/ItemLink';
import NumberField from '../../components/NumberField/NumberField';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const VerifyForm: NextPageWithLayout = () => {
  const arr = Array.from(Array(6).keys());

  return (
    <div className="flex h-min flex-col rounded-[10px] bg-white py-16 px-11">
      <FormHeader className="mb-5">Verify Your OTP</FormHeader>
      <p className="mb-11">
        We have sent verification <span className="font-bold">OTP Code</span>{' '}
        into your Phone.
        <br />
        Please, verify and complete the process
      </p>
      <div className="mb-11 flex gap-8">
        {arr.map((_, i) => {
          return <NumberField key={i} />;
        })}
      </div>
      <p className="mb-11">
        Didn&apos;t recieve your code?{' '}
        <ItemLink className="ml-4">Resend Code in 56 sec</ItemLink>
      </p>
      <Button className="py-6">Verify</Button>
    </div>
  );
};

VerifyForm.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default VerifyForm;

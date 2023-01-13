import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import FormLabel from '../../components/FormLabel/FormLabel';
import MyInput from '../../components/MyInput/MyInput';
import SelectListBox from '../../components/SelectListBox/SelectListBox';
import bankOptions from '../../data/bankOptions';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const CorporatePayForm: NextPageWithLayout = () => {
  return (
    <div className="rounded-[10px] bg-white px-8 py-10">
      <BackButton className="mb-12">Exit Corporate Pay</BackButton>
      <h2 className="mb-8 text-2xl font-bold">Receiver&apos;s Information</h2>
      <div className="mb-5">
        <FormLabel className="mb-4" htmlFor="selectBank" required>
          Select Bank
        </FormLabel>
        <SelectListBox options={bankOptions} />
      </div>
      <div className="mb-5">
        <FormLabel required htmlFor="accountHolder" className="mb-4">
          Account Holder&apos;s Name
        </FormLabel>
        <MyInput type="text" id="accountHolder" placeholder="Ram Laxman" />
      </div>
      <div className="mb-8">
        <FormLabel required htmlFor="accountNumber" className="mb-4">
          Account Number
        </FormLabel>
        <MyInput id="accountNumber" type="number" placeholder="123456" />
      </div>
      <h2 className="mb-8 text-2xl font-bold">Sender&apos; Details</h2>
      <div className="mb-5">
        <FormLabel required htmlFor="sendersName" className="mb-4">
          Sender&apos;s Name
        </FormLabel>
        <MyInput id="sendersName" placeholder="Ram Laxman" />
      </div>
      <div className="mb-5">
        <FormLabel required htmlFor="receiverRelation" className="mb-4">
          Relation To Receiver
        </FormLabel>
        <MyInput id="receiverRelation" />
      </div>
      <div className="mb-5">
        <FormLabel required htmlFor="purpose" className="mb-4">
          Purpose
        </FormLabel>
        <MyInput id="purpose" />
      </div>
      <div className="mb-11">
        <FormLabel htmlFor="remarks" className="mb-4">
          Remarks
        </FormLabel>
        <MyInput id="remarks" />
      </div>
      <h2 className="mb-8 text-2xl font-bold">Payment Details</h2>
      <div className="mb-14 grid grid-cols-2 gap-8">
        <div>
          <FormLabel className="mb-4">Service Fee</FormLabel>
          <MyInput placeholder="100.0" />
        </div>
        <div>
          <FormLabel required htmlFor="principalAmount" className="mb-4">
            Principal Amount
          </FormLabel>
          <MyInput id="principalAmount" placeholder="1000.00" />
        </div>
        <div>
          <FormLabel required htmlFor="totalAmount" className="mb-4">
            Total Amount
          </FormLabel>
          <MyInput id="totalAmount" placeholder="100.0" />
        </div>
      </div>
      <p className="mb-5 font-bold">
        <span className="text-red-500">*</span> These fields are mandatory to be
        filled
      </p>
      <div className="flex justify-center">
        <Button className="max-w-xs py-6">Submit For Verification</Button>
      </div>
    </div>
  );
};

CorporatePayForm.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default CorporatePayForm;

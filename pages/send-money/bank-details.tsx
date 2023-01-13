import { useFormik } from 'formik';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import FormLabel from '../../components/FormLabel/FormLabel';
import MyInput from '../../components/MyInput/MyInput';
import SelectListBox from '../../components/SelectListBox/SelectListBox';
import bankOptions from '../../data/bankOptions';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';
import sendMoney from '../../schemas/sendMoney';
import ValidationError from '../../components/ValidationError';
import {useRouter} from 'next/router';
const BankDetails: NextPageWithLayout = () => {
  const router = useRouter()
  const [selectedValue, setSelectedValue] = useState(bankOptions[0]);
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      acNumber: '',
      acHolderName: '',
      amount: '',
      purpose: '',
      remarks: '',
    },
    validationSchema: sendMoney,
    onSubmit: () => {
      console.log(values, selectedValue?.name);
      router.push({
        pathname: '/send-money/transaction-details',
        query: {
          ...values,
          bankName: selectedValue?.name,
        },
      });
    },
  });
  return (
    <div className="rounded-[10px] bg-white p-10">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-3 text-2xl font-bold">Send Money</h1>
        <p className="mb-10 text-gray-700">Enter Bank Details</p>
        <div className="mb-8">
          <FormLabel required htmlFor="bankName" className="mb-3">
            Bank Name {selectedValue?.name}
          </FormLabel>
          <SelectListBox
            options={bankOptions}
            setSelectedValue={setSelectedValue}
            selectedValue={selectedValue}
          />
        </div>
        <div className="mb-8">
          <FormLabel required htmlFor="acNumber" className="mb-3">
            Account Number
          </FormLabel>
          <MyInput
            id="acNumber"
            name="acNumber"
            onChange={handleChange}
            value={values.acNumber}
            type="number"
            placeholder="A/C No."
          />
          {touched.acNumber && errors.acNumber && (
            <ValidationError error={errors.acNumber} />
          )}
        </div>
        <div className="mb-8">
          <FormLabel required htmlFor="acHolderName" className="mb-3">
            Account Holder Name
          </FormLabel>
          <MyInput
            id="acHolderName"
            onChange={handleChange}
            value={values.acHolderName}
            name="acHolderName"
            placeholder="Account Holder Name"
          />
          {touched.acHolderName && errors.acHolderName && (
            <ValidationError error={errors.acHolderName} />
          )}
        </div>
        <div className="mb-8">
          <FormLabel required htmlFor="amount" className="mb-3">
            Amount
          </FormLabel>
          <MyInput
            id="amount"
            onChange={handleChange}
            value={values.amount}
            name="amount"
            placeholder="Amount"
            type="number"
          />
          {touched.amount && errors.amount && (
            <ValidationError error={errors.amount} />
          )}
        </div>
        <div className="mb-8">
          <FormLabel required htmlFor="purpose" className="mb-3">
            Purpose
          </FormLabel>
          <MyInput
            id="purpose"
            onChange={handleChange}
            value={values.purpose}
            name="purpose"
            placeholder="Purpose"
          />
          {touched.purpose && errors.purpose && (
            <ValidationError error={errors.purpose} />
          )}
        </div>
        <div className="mb-20">
          <FormLabel required htmlFor="remarks" className="mb-3">
            Remarks
          </FormLabel>
          <MyInput
            id="remarks"
            onChange={handleChange}
            value={values.remarks}
            name="remarks"
            placeholder="Remarks"
          />
          {touched.remarks && errors.remarks && (
            <ValidationError error={errors.remarks} />
          )}
        </div>
        <Button type="submit" className="py-6">
          Continue
        </Button>
      </form>
    </div>
  );
};

BankDetails.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default BankDetails;

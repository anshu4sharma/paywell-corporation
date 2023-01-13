import { useState } from 'react';
import SendModal from '../../features/remittance/components/SendModal/SendModal';
import SendMoneyForm1 from '../../features/remittance/components/SendMoneyForm1/SendMoneyForm1';
import SendMoneyForm2 from '../../features/remittance/components/SendMoneyForm2/SendMoneyForm2';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const SendMoneyForm: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formIndex, setFormIndex] = useState(1);
  
  return (
    <>
      {formIndex ? (
        <SendMoneyForm1 onClick={() => setFormIndex(0)} />
      ) : (
        <SendMoneyForm2 onClick={() => setIsModalOpen(true)} />
      )}
      <SendModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};

SendMoneyForm.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default SendMoneyForm;

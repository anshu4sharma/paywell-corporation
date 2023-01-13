import TransactionDetails from '../../features/corporate-pay/components/TransactionDetails/TransactionDetails';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const CorporatePayTransaction: NextPageWithLayout = () => {
  return <TransactionDetails />;
};

CorporatePayTransaction.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default CorporatePayTransaction;

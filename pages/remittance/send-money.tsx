import { SendRemitAgents } from '../../data/remitAgents';
import RemitAgent from '../../features/remittance/components/RemitAgent/RemitAgent';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const SendMoney: NextPageWithLayout = () => {
  return (
    <RemitAgent header="Send Money" options={SendRemitAgents}>
      Send money To remit agents in Nepal
    </RemitAgent>
  );
};

SendMoney.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default SendMoney;

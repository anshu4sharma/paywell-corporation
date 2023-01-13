import { ReceiveRemitAgents } from '../../data/remitAgents';
import RemitAgent from '../../features/remittance/components/RemitAgent/RemitAgent';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const ReceiveMoney: NextPageWithLayout = () => {
  return (
    <RemitAgent options={ReceiveRemitAgents} header="Receive Money">
      Receive Money from any remit agents in Nepal
    </RemitAgent>
  );
};

ReceiveMoney.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default ReceiveMoney;

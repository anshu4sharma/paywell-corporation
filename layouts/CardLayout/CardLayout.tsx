import { ReactNode } from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import QrCode from '../../components/QrCode/QrCode';
import BalanceCard from '../../features/load-send-money/components/BalanceCard/BalanceCard';
import classNames from '../../utils/classNames';

interface CardLayoutProps {
  children: ReactNode;
  className?: string;
}

export function CardLayout({ className, children }: CardLayoutProps) {
  return (
    <div className={classNames(className, 'flex gap-x-8')}>
      <div className="grow">{children}</div>
      <div className="mr-8">
        <BalanceCard className="mb-4" />
        <QrCode className="mb-4" />
        <ContactUs />
      </div>
    </div>
  );
}

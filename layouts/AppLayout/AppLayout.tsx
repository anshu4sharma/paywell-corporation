import { ReactNode } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SideBar from '../../components/SideBar/SideBar';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="h-[100vh] bg-gray-100 font-montserrat">
      {/* Explicit margins defined since navbar & sidebar have fixed layouts */}
      <Navbar className="h-[100px]" />
      <div className="pt-[130px]">
        <SideBar className="w-[360px]" />
        <div className="ml-[360px] pl-8">{children}</div>
      </div>
    </div>
  );
}

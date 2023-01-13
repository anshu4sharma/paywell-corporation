import { AiFillBank } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { HiDocument } from 'react-icons/hi';
import { IoMdWallet } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';

const sidebarLinks = [
  {
    icon: <MdDashboard />,
    name: 'Dashboard',
    link: '#',
    id: 0,
  },
  {
    icon: <FaUserAlt />,
    name: 'My Account',
    link: '#',
    id: 1,
  },
  {
    icon: <AiFillBank />,
    name: 'Bank Account',
    link: '#',
    id: 2,
  },
  {
    icon: <IoMdWallet />,
    name: 'Load Funds',
    link: '#',
    id: 3,
  },
  {
    icon: <HiDocument />,
    name: 'My Staffs',
    link: '#',
    id: 4,
  },
  {
    icon: <FaUserAlt />,
    name: 'Transactions',
    link: '#',
    id: 5,
  },
  {
    icon: <FaUserAlt />,
    name: 'Reports',
    link: '/reports',
    id: 6,
  },
  {
    icon: <FaUserAlt />,
    name: 'Paywell Corporate +',
    link: '#',
    id: 7,
  },
  {
    icon: <FaUserAlt />,
    name: 'Remittance',
    link: '#',
    id: 8,
  },
  {
    name: 'Paywell Exclusive',
  },
  {
    icon: <FaUserAlt />,
    name: 'Checked in Users',
    link: '#',
    id: 9,
  },
  {
    icon: <FaUserAlt />,
    name: 'My Customer',
    link: '#',
    id: 10,
  },
  {
    icon: <FaUserAlt />,
    name: 'Merchant Commissions',
    link: '#',
    id: 11,
  },
  {
    icon: <FaUserAlt />,
    name: 'Remit Agent',
    link: '#',
    id: 12,
  },
  {
    name: 'Configurations',
  },
  {
    icon: <FaUserAlt />,
    name: 'My Services',
    link: '#',
    id: 13,
  },
  {
    icon: <FaUserAlt />,
    name: 'Change Password',
    link: '#',
    id: 14,
  },
  {
    icon: <FaUserAlt />,
    name: 'Change PIN',
    link: '#',
    id: 15,
  },
];

export default sidebarLinks;

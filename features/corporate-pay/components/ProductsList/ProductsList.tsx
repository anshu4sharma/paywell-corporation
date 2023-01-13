import Image from 'next/image';
import { IoChevronForward } from 'react-icons/io5';
import ItemLink from '../../../../components/ItemLink/ItemLink';
import classNames from '../../../../utils/classNames';

export default function ProductsList({ className }: { className?: string }) {
  return (
    <div className={classNames(className, 'rounded-[10px] p-8 bg-white')}>
      <h3 className="text-2xl mb-11 font-bold capitalize">
        Top Selling Products
      </h3>
      <table className="w-full font-light mb-9">
        <thead>
          <tr className="text-gray-300 border-b-2">
            <th className="text-left pb-3 w-28">SN</th>
            <th className="text-left pb-3">Name</th>
            <th className="text-left pb-3">QTY Left</th>
            <th className="text-left pb-3">Sold QTY</th>
          </tr>
        </thead>
        {productsData.map((item, index) => {
          return <TableRow key={item.id} {...item} />;
        })}
      </table>
      <div className="flex justify-end items-center gap-4">
        <ItemLink>View All</ItemLink>
        <button
          className="w-8 h-8 hover:bg-gray-200 flex items-center justify-center rounded-full
                 bg-gray-100"
        >
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
}

interface TableRowProps {
  id: number;
  name: string;
  price: number;
  quantityLeft: number;
  quantitySold: number;
  image: string;
}

const TableRow = (props: TableRowProps) => {
  return (
    <tbody>
      <tr className="font-normal border-b-2">
        <td className="py-6">{props.id}.</td>
        <td className="py-6">
          <div className="flex items-center gap-4">
            <Image
              src={props.image}
              alt={props.name}
              width={100}
              height={100}
            />
            <div>
              <p className="mb-3">{props.name}</p>
              <p className="font-bold">NRS. {props.price.toLocaleString()}</p>
            </div>
          </div>
        </td>
        <td className="py-6">{props.quantityLeft}</td>
        <td className="py-6">{props.quantitySold}</td>
      </tr>
    </tbody>
  );
};
const productsData = [
  {
    id: 1,
    name: 'Apple Airpods Max',
    price: 30000,
    quantityLeft: 25,
    quantitySold: 15,
    image: '/images/features/corporate-pay/products/apple_airpods.png',
  },
  {
    id: 2,
    name: 'Apple Watch Series 7',
    price: 30000,
    quantityLeft: 25,
    quantitySold: 14,
    image: '/images/features/corporate-pay/products/apple_watch.png',
  },
  {
    id: 3,
    name: 'Apple ipad Pro 12inch 128GB',
    price: 30000,
    quantityLeft: 25,
    quantitySold: 12,
    image: '/images/features/corporate-pay/products/apple_ipad_pro.png',
  },
  {
    id: 4,
    name: 'Apple Macbook Air (512 GB)',
    price: 30000,
    quantityLeft: 25,
    quantitySold: 11,
    image: '/images/features/corporate-pay/products/macbook_air.png',
  },
  {
    id: 5,
    name: 'Apple Airpods 3',
    price: 30000,
    quantityLeft: 25,
    quantitySold: 10,
    image: '/images/features/corporate-pay/products/apple_headphone.png',
  },
];

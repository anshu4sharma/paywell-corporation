import MyInput from '../../../../components/MyInput/MyInput';
import SelectListBox from '../../../../components/SelectListBox/SelectListBox';

const searchOptions = [
  { id: 1, name: 'TXN ID' },
  { id: 1, name: 'Account Name' },
  { id: 1, name: 'Bank Name' },
  { id: 1, name: 'Account Number' },
  { id: 1, name: 'Principal Amount' },
  { id: 1, name: 'Status' },
];

export default function SearchTransaction() {
  return (
    <div className="mb-12 flex items-center gap-5">
      <p className="text-2xl font-bold">Search By</p>
      <SelectListBox
        width={270}
        options={searchOptions}
        className="rounded-full"
      />
      <MyInput className="max-w-md rounded-full border border-gray-500" />
    </div>
  );
}

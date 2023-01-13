import { ReactNode } from 'react';
import SelectDropdown from '../../components/SelectDropdown/SelectDropdown';
import languageOptions from '../../data/languageOptions';

interface AuthPageLayoutProps {
  children: ReactNode;
}

export default function AuthPageLayout({ children }: AuthPageLayoutProps) {
  return (
    <div className="font-montserrat flex h-[100vh]">
      <div className="w-full pt-5 px-24 overflow-y-auto flex flex-col">
        <div className="text-end">
          <SelectDropdown width={120} options={languageOptions} />
        </div>
        <div className="flex flex-col justify-center grow">{children}</div>
      </div>
      {/* Image */}
      <div className="bg-gray-500 w-full" />
    </div>
  );
}

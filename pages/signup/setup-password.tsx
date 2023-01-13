import { BsCheckCircleFill } from 'react-icons/bs';
import Button from '../../components/Button/Button';
import FormHeader from '../../components/FormHeader/FormHeader';
import FormLabel from '../../components/FormLabel/FormLabel';
import ItemLink from '../../components/ItemLink/ItemLink';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import AuthPageLayout from '../../layouts/AuthPageLayout/AuthPageLayout';
import classNames from '../../utils/classNames';

export default function SetupPassword() {
  return (
    <AuthPageLayout>
      <FormHeader className="mb-5">Set your Password</FormHeader>
      <p className="mb-12">
        Knowing your customer identity eliminates risks, online frauds, and
        financial crimes. Verify Selfies, ID Documents and Mobile 2FA from
        anywhere in only 30 seconds
      </p>
      <div className="mb-8">
        <FormLabel htmlFor="password" required className="mb-3">
          Password
        </FormLabel>
        <PasswordInput />
      </div>
      <div className="mb-8">
        <FormLabel htmlFor="confirmPassword" required className="mb-3">
          Confirm Password
        </FormLabel>
        <PasswordInput />
      </div>
      <ValidationChecks className="mb-16" />
      <Button className="mb-11 py-6">Save & Continue</Button>
      <p>
        Already have an account? <ItemLink className="ml-4">Sign In</ItemLink>
      </p>
    </AuthPageLayout>
  );
}

const ValidationChecks = ({ className }: { className?: string }) => {
  return (
    <div className={classNames(className)}>
      <div className="mb-7 flex items-center gap-4">
        <BsCheckCircleFill
          className="shrink-0 rounded-full bg-white text-green-600"
          size={23}
        />
        <p>Please include Capital Letters (A,B,...,Z)</p>
      </div>
      <div className="mb-7 flex items-center gap-4">
        <BsCheckCircleFill
          className="shrink-0 rounded-full bg-white text-green-600"
          size={23}
        />
        <p>Please include special characters (!,@,...,#)</p>
      </div>
      <div className="flex items-center gap-4">
        <BsCheckCircleFill
          className="shrink-0 rounded-full bg-white text-gray-300"
          size={23}
        />
        <p>Password should be more than 8 characters</p>
      </div>
    </div>
  );
};

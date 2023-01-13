import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import FormHeader from '../../components/FormHeader/FormHeader';
import FormLabel from '../../components/FormLabel/FormLabel';
import ItemLink from '../../components/ItemLink/ItemLink';
import MyInput from '../../components/MyInput/MyInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import SelectListBox from '../../components/SelectListBox/SelectListBox';
import SelectNumber from '../../components/SelectNumber/SelectNumber';
import ValidationError from '../../components/ValidationError';
import AuthPageLayout from '../../layouts/AuthPageLayout/AuthPageLayout';
import signUpSchema from '../../schemas/signUpSchema';
const merchantOptions = [
  { id: 1, name: 'Gift Product Merchant' },
  { id: 2, name: 'Select option 2' },
  { id: 3, name: 'Select option 3' },
];

export default function SignupPage() {
  // business name is username
  const [merchantType, setMerchantType] = useState('');
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      midname: '',
      password: '',
      businessName: '',
      businessPhone: '',
      policy: '',
    },
    validationSchema: signUpSchema,
    onSubmit: () => {
      requestOtp();
    },
  });

  const requestOtp = async () => {
    try {
      let res = await axios.post(
        'https://uatapi.paywellcorp.com/auth/api/v1/public/otp/',
        { phone: values.businessPhone, email: '' },
        { headers: { purpose: 'register' } }
      );
      if (res.status == 200) {
        router.push({
          pathname: '/signup/verify',
          query: {
            phone: values.businessPhone,
            password: values.password,
            first_name: values.firstName,
            username: values.businessName,
            middle_name: values.midname,
            last_name: values.lastName,
          },
        });
      }
    } catch (err: any) {
      console.log(err.response.data.message);
      setError(err.response.data.message);
      alert(err.response.data.message);
    }
  };
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/signin');
    }
    else{
      router.push('/dashboard');
    }
  }, [])
  return (
    <AuthPageLayout>
      <FormHeader className="mb-5">Glad to see you here!!</FormHeader>
      <p className="mb-12">Become a part of the Ultimate Vendor Experience</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <FormLabel className="mb-3" htmlFor="merchantType">
            Merchant Type
          </FormLabel>
          <SelectListBox
            options={merchantOptions}
            onChange={(e) => {
              console.log(e);
            }}
          />
        </div>
        <div className="mb-8">
          <FormLabel className="mb-3" htmlFor="firstName">
            First Name
          </FormLabel>
          <MyInput
            placeholder="eg: Beats Nepal"
            onChange={handleChange}
            value={values.firstName}
            name="firstName"
          />
          {touched.firstName && errors.firstName && (
            <ValidationError error={errors.firstName} />
          )}
        </div>
        <div className="mb-8">
          <FormLabel className="mb-3" htmlFor="midname">
            Middle Name
          </FormLabel>
          <MyInput
            value={values.midname}
            placeholder="eg: Beats Nepal"
            onChange={handleChange}
            name="midname"
          />
          {touched.midname && errors.midname && (
            <ValidationError error={errors.midname} />
          )}
        </div>
        <div className="mb-8">
          <FormLabel className="mb-3" htmlFor="lastName">
            Last Name
          </FormLabel>
          <MyInput
            placeholder="eg: Beats Nepal"
            onChange={handleChange}
            value={values.lastName}
            name="lastName"
          />
          {touched.lastName && errors.lastName && (
            <ValidationError error={errors.lastName} />
          )}
        </div>
        <div className="mb-8">
          <FormLabel className="mb-3" htmlFor="businessName">
            Business Name
          </FormLabel>
          <MyInput
            placeholder="eg: Beats Nepal"
            onChange={handleChange}
            value={values.businessName}
            name="businessName"
          />
          {touched.businessName && errors.businessName && (
            <ValidationError error={errors.businessName} />
          )}
        </div>
        <div className="mb-12">
          <FormLabel className="mb-3" htmlFor="businessPhone">
            Business Number
          </FormLabel>
          <div className="flex">
            <SelectNumber />
            <MyInput
              placeholder="9818000000"
              className="z-10 rounded-l-none"
              onChange={handleChange}
              value={values.businessPhone}
              name="businessPhone"
              type={'number'}
            />
          </div>
          {touched.businessPhone && errors.businessPhone && (
            <ValidationError error={errors.businessPhone} />
          )}
        </div>
        <div className="mb-12">
          <FormLabel className="mb-3" htmlFor="password">
            Password
          </FormLabel>
          <div className="flex">
            <PasswordInput
              name="password"
              onChange={handleChange}
              value={values.password}
            />
          </div>
          {touched.password && errors.password && (
            <ValidationError error={errors.password} />
          )}
        </div>
        {error && <ValidationError error={error} />}
        {touched.policy && errors.policy && (
          <ValidationError error={errors.policy} />
        )}
        <div className="mb-12 flex items-start gap-8">
          <input
            type="checkbox"
            name="policy"
            onChange={handleChange}
            value={values.policy}
            id=""
            className="mt-2 scale-150"
          />
          <p className="leading-relaxed">
            By <span className="uppercase">Clicking</span> up, you agree to our{' '}
            <ItemLink>Terms of Service</ItemLink> and acknowledge that you have
            read our <ItemLink>Privacy Policy</ItemLink> to learn how we
            collect, use and share your data
          </p>
        </div>

        <Button className="mb-11 py-6" type="submit">
          Join Now
        </Button>
      </form>
      <div>
        <p>
          Already have an account?
          <ItemLink className="ml-4">Sign In</ItemLink>
        </p>
      </div>
    </AuthPageLayout>
  );
}

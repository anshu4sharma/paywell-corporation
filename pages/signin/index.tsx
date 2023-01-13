import axios from 'axios';
import { useFormik } from 'formik';
import Router from 'next/router';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import Button from '../../components/Button/Button';
import FormHeader from '../../components/FormHeader/FormHeader';
import FormLabel from '../../components/FormLabel/FormLabel';
import ItemLink from '../../components/ItemLink/ItemLink';
import MyInput from '../../components/MyInput/MyInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import ValidationError from '../../components/ValidationError';
import AuthPageLayout from '../../layouts/AuthPageLayout/AuthPageLayout';
import signInSchema from '../../schemas/signInSchema';
export default function SignIn() {
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      phone: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: () => {
      console.log(values);
      handleSignin()
    },
  });
  const handleSignin = async () => {
    try {
      const data = axios.post('https://uatapi.paywellcorp.com/auth/api/v1/public/merchant/login',
        { email: values.phone, password: values.password })
      console.log(data);
      // localStorage.setItem("token", JSON.stringify(data.token))
      Router.push('/dashboard')

    } catch (error:any) {
      if (error.message) {
        toast.error(error.message)
      }
    }
  };

  return (
    <AuthPageLayout>
      <FormHeader className="mb-5">Welcome Back</FormHeader>
      <p className="mb-12">Become a part of the cashless world.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <FormLabel className="mb-3" htmlFor="phoneNumber" required>
            Email
          </FormLabel>
          <div className="flex">
            {/* <SelectNumber /> */}
            <MyInput
              placeholder=""
              className="z-10 rounded-l-none"
              onChange={handleChange}
              value={values.phone}
              name="phone"
            />
          </div>
          {touched.phone && errors.phone && (
            <ValidationError error={errors.phone} />
          )}
        </div>
        <div className="mb-8">
          <FormLabel className="mb-3" htmlFor="phoneNumber" required>
            Password
          </FormLabel>
          <PasswordInput
            onChange={handleChange}
            value={values.password}
            name="password"
          />
          {touched.password && errors.password && (
            <ValidationError error={errors.password} />
          )}
        </div>
        <div className="mb-12 flex justify-between">
          <div className="flex gap-5">
            <input type="checkbox" className="scale-150" />
            <p>Keep me Signed in.</p>
          </div>
          <a className="font-bold text-blue-900 underline">Forgot Password?</a>
        </div>
        <Button className="mb-12 py-6" type="submit">
          Log In
        </Button>
      </form>
      <p>
        Don&apos;t have an account?
        <ItemLink className="ml-4">Create For Free</ItemLink>
      </p>
    </AuthPageLayout>
  );
}

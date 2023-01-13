import axios from 'axios';
import { Router, useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import FormHeader from '../../components/FormHeader/FormHeader';
import ItemLink from '../../components/ItemLink/ItemLink';
import AuthPageLayout from '../../layouts/AuthPageLayout/AuthPageLayout';
export default function SignupVerify() {
  let currentIndex = 0;
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleOtpField = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const newOtp: string[] = [...otp];
    newOtp[currentIndex] = value.substring(value.length - 1);
    if (!value) setActiveIndex(currentIndex - 1);
    else setActiveIndex(currentIndex + 1);
    setOtp(newOtp);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const registerMerchant = async () => {
    let InputOtp = otp.join('')
    try {
      let res = await axios.post(
        'https://uatapi.paywellcorp.com/auth/api/v1/public/merchant-register/',
        { ...router.query , otp:InputOtp},
        {
          headers: {
            purpose: 'register',
            'device-id': 'FF994DE1-1A02-4B1B-84C7-524A839A4EEB',
          },
        }
      );
      localStorage.setItem('authToken', JSON.stringify(res.data));
      router.push('/signin');
    } catch (err: any) {
      console.log(err.response.data.message);
      alert(JSON.stringify(err.response.data.message));
    }
  };

  const handleKeydown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentIndex = index;
    if (key == 'Backspace') setActiveIndex(currentIndex - 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerMerchant();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeIndex]);


  return (
    <AuthPageLayout>
      <form onSubmit={handleFormSubmit}>
        <BackButton className="mb-10">Back</BackButton>
        <FormHeader className="mb-5">Verify Your Phone</FormHeader>
        <p className="mb-12">
          We have sent verification <span className="font-bold">OTP Code</span>{' '}
          into your Phone. <br />
          Please, verify and complete your account
        </p>
        <div className="mb-11 flex gap-8">
          {otp.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  ref={index === activeIndex ? inputRef : null}
                  type="number"
                  className="spin-button-none h-12 w-12 rounded border-2 border-gray-400 bg-transparent text-center text-xl font-semibold text-gray-400 outline-none transition focus:border-gray-700 focus:text-gray-700"
                  value={otp[index]}
                  onChange={handleOtpField}
                  onKeyDown={(e) => handleKeydown(e, index)}
                />
                {index === otp.length - 1 ? null : (
                  <span className="w-2 bg-gray-400 py-0.5" />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <p className="mb-12">
          Didn&apos;t receive your code?
          <ItemLink className="ml-4">Resend Code in 56 Sec</ItemLink>
        </p>
        <Button type="submit" className="py-6">
          Verify
        </Button>
      </form>
    </AuthPageLayout>
  );
}

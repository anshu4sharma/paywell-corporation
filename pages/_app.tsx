import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';
import AppLayout from '../layouts/AppLayout/AppLayout';
import '../styles/globals.css';
import '../public/CSS/Calendar.css';
import '../public/CSS/DatePicker.css';
import { Toaster } from 'react-hot-toast';
export type NextPageWithLayout = NextPage & {
  getLayout?: (_page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const ignoreUrls = ['/signin', '/signup'];

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

  // don't apply default layouts on some pages
  for (let i = 0; i < ignoreUrls.length; i++) {
    if (router.pathname.startsWith(ignoreUrls[i])) {
      return getLayout(<>  <Toaster /><Component {...pageProps} /> </>);
    }
  }

  // AppLayout is the root layout
  return (
    <AppLayout>{getLayout(<> <Toaster />
      <Component {...pageProps} /></>)}</AppLayout>
  );
}

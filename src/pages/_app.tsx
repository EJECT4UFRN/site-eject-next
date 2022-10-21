import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

import { GlobalStyles } from '../styles/Global-styles';
import { ToastContainer } from 'react-toastify';
import ligth from '../styles/themes/light';
import 'react-toastify/dist/ReactToastify.css';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={ligth}>
        <GlobalStyles />
        <ToastContainer />
        <NextNProgress
          color="#0678BE"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../application/utils/createEmotionCache';
import '$application/styles/globals.css';

import { getReactQueryClient } from '../application/utils/getReactQueryClient';
import { Hydrate, QueryClientProvider } from 'react-query';
import { AuthProvider } from '$application/lib/auth/AuthProvider';
import theme from '$application/theme/theme';
import { Header } from '$application/components/Layout/Header/Header';
import { Footer } from '$application/components/Layout/Footer';
import NotificationProvider from '$application/components/NotificationProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <QueryClientProvider client={getReactQueryClient()}>
      <Hydrate state={pageProps.dehydratedState}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NotificationProvider>
              <AuthProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
              </AuthProvider>
            </NotificationProvider>
          </ThemeProvider>
        </CacheProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;

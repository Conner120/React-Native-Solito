import 'raf/polyfill';

import { Provider } from 'app/provider';
import Head from 'next/head';
import React from 'react';
import type { SolitoAppProps } from 'solito';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyA3B9FL1Nor_6ZV_su_thA8Zi5_LB5yzew',
  authDomain: 'my-family-movie.firebaseapp.com',
  projectId: 'my-family-movie',
  storageBucket: 'my-family-movie.appspot.com',
  messagingSenderId: '102632806390',
  appId: '1:102632806390:web:70e60a5917b1a23a0219d7',
  measurementId: 'G-07TVHG6FXJ',
};
const app = initializeApp(firebaseConfig);

export const metadata = {
  title: 'Next.js head starter kit with gluestack-ui',
  description:
    'A comprehensive starter kit to kick-start your next.js application using gluestack-ui - your one-stop solution for faster, smoother, and better web development.',
};

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;

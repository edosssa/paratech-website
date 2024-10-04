import { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { App } from './App';
import './globals.css';

const euclid = localFont({
  src: [
    {
      path: '../public/fonts/Euclid Circular B Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Euclid Circular B Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Euclid Circular B Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Euclid Circular B SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Euclid Circular B Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Euclid Circular B Bold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Para Technologies',
  description: 'Para Technologies',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={euclid.className}>
        <App>{children}</App>
      </body>
    </html>
  );
};

export default RootLayout;

import '../styles/globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Head from 'next/head';
import { pretendard } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body className={`${pretendard.className} font-display bg-white px-4 mx-auto max-w-[640px]`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

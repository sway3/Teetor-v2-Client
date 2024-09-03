import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Teetor',
  description: 'Mentor-mentee matching platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-[100vh]`}>
        <Providers>
          {children}
          <Script src="https://accounts.google.com/gsi/client" async defer />
        </Providers>
      </body>
    </html>
  );
}

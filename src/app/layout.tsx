import Toaster from '@/components/Toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Website Wizard | Goudeketting.nl',
  description:
    'The personal website of Robin Goudeketting, the Website Wizard. Check out my work and get in touch!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex min-h-[100dvh] flex-col items-center justify-between relative'>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}

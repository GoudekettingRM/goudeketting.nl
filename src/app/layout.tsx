import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHead from '@/components/PageHead';
import Toaster from '@/components/Toaster';
import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Robin Goudeketting',
  description:
    'Portfolio of Robin Goudeketting, website wizard, software sorcerer, and digital dabbler, a.k.a. full-stack developer. Check out my work and get in touch!',
  openGraph: {
    title: 'Portfolio | Robin Goudeketting',
    description:
      'Portfolio of Robin Goudeketting, website wizard, software sorcerer, and digital dabbler, a.k.a. full-stack developer. Check out my work and get in touch!',
    url: 'https://goudeketting.nl',
    type: 'website',
    locale: 'en_US',
    siteName: 'Robin Goudeketting',
    images: [
      {
        url: 'https://www.goudeketting.nl/robin-goudeketting.jpg',
        width: 1200,
        height: 630,
        alt: 'Robin Goudeketting'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RMGoudeketting',
    creator: '@RMGoudeketting',
    title: 'Portfolio | Robin Goudeketting',
    description:
      'Portfolio of Robin Goudeketting, website wizard, software sorcerer, and digital dabbler, a.k.a. full-stack developer. Check out my work and get in touch!',
    images: [
      {
        url: 'https://www.goudeketting.nl/robin-goudeketting.jpg',
        width: 1200,
        height: 630,
        alt: 'Robin Goudeketting'
      }
    ]
  },
  alternates: {
    canonical: '/'
  },
  generator: 'Next.js',
  applicationName: 'Goudeketting Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Portfolio',
    'Webdevelopment',
    'Developer',
    'Software',
    'Website',
    'Programmer',
    'Goudeketting',
    'Robin Goudeketting'
  ],
  authors: [{ name: 'Robin Goudeketting', url: 'https://goudeketting.nl' }],
  creator: 'Robin Goudeketting',
  publisher: 'Robin Goudeketting',
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: 'https://www.goudeketting.nl/android-chrome-192x192.png',
    shortcut: 'https://www.goudeketting.nl/android-chrome-192x192.png',
    apple: 'https://www.goudeketting.nl/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: 'https://www.goudeketting.nl/apple-touch-icon.png'
    }
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <PageHead />
      <body className={`${roboto.className} flex h-[100dvh] flex-col`}>
        <main className='flex flex-col items-center justify-between relative grow shrink-0 basis-0'>
          <Navbar />
          {children}
        </main>
        <Footer />

        <Toaster />
      </body>
    </html>
  );
}

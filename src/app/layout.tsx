import Toaster from '@/components/Toaster';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Robin Goudeketting | goudeketting.nl',
  description:
    'Portfolio of Robin Goudeketting, website wizard, software sorcerer, and digital dabbler, a.k.a. full-stack developer and the guy who made this website. Check out my work and get in touch!',
  openGraph: {
    title: 'Robin Goudeketting | goudeketting.nl',
    description:
      'Portfolio of Robin Goudeketting, website wizard, software sorcerer, and digital dabbler, a.k.a. full-stack developer and the guy who made this website. Check out my work and get in touch!',
    url: 'https://goudeketting.nl',
    type: 'website',
    locale: 'en_US',
    siteName: 'Robin Goudeketting',
    images: [
      {
        url: '/robin-goudeketting.jpg',
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
    title: 'Robin Goudeketting | goudeketting.nl',
    description:
      'Portfolio of Robin Goudeketting, website wizard, software sorcerer, and digital dabbler, a.k.a. full-stack developer and the guy who made this website.',
    images: [
      {
        url: '/robin-goudeketting.jpg',
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
    icon: '/android-chrome-192x192.png',
    shortcut: '/android-chrome-192x192.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
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
      <body className={inter.className}>
        <main className='flex min-h-[100dvh] flex-col items-center justify-between relative'>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}

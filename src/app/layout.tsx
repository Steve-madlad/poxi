import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Poxi',
  description:
    'Transform the way you work. Our innovative tool offers top-notch customizability and robust features to help you track progress, manage projects, and hit every deadline. User-friendly, highly integrable, and built for modern teams. Get started for free today.',
  authors: [{ name: 'Poxi Team' }],
  creator: 'Steeve',
  category: 'productivity',
  applicationName: 'Poxi',
  themeColor: '#2347c5',
  publisher: 'Steeve',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://poxify.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Poxi - track your progress, motivate your efforts and realize your goals',
    description:
      'Transform the way you work. Our innovative tool offers top-notch customizability and robust features to help you track progress, manage projects, and hit every deadline. User-friendly, highly integrable, and built for modern teams. Get started for free today.',
    url: 'https://poxify.vercel.app',
    siteName: 'Poxi',
    images: [
      {
        url: '/poxi.webp',
        width: 1200,
        height: 630,
        alt: 'Poxi | Innovative Project Management Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poxi | Innovative Project Management Tool',
    description:
      'Stay organized, collaborate seamlessly, and hit every deadline with Poxi — your all-in-one productivity workspace.',
    images: ['/poxi.webp'],
    creator: '@Theblackguy_1',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env['GOOGLE_SITE_VERIFICATION'],
  },
  icons: {
    icon: [{ url: '/favicon-32x32.png', type: 'image/png' }, { url: '/favicon.ico' }],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

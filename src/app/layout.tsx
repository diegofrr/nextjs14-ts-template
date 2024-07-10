import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';

import './globals.css';

import Providers from './providers';
import { cn } from '@/lib/utils';
import Scripts from './scripts';

const APP_NAME = 'NJS App';
const APP_DESCRIPTION = 'Next.js PWA';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: '%s - NJS App',
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: '#000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn('font-sans', GeistSans.variable)}>
        <Providers>{children}</Providers>
        <Scripts />
      </body>
    </html>
  );
}

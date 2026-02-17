import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { locales } from '@/config/i18n';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Trionex Technologies - Enterprise IT Solutions',
    template: '%s | Trionex Technologies'
  },
  description: 'Leading provider of IT services, software development, AI & cloud solutions for businesses worldwide. Enterprise-grade solutions for global enterprises.',
  keywords: [
    'IT services',
    'software development',
    'AI solutions',
    'cloud computing',
    'enterprise software',
    'digital transformation',
    'cybersecurity',
    'DevOps',
    'machine learning',
    'data analytics'
  ],
  authors: [{ name: 'Trionex Technologies' }],
  creator: 'Trionex Technologies',
  publisher: 'Trionex Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://trionex.tech'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'hi-IN': '/hi',
      'es-ES': '/es',
      'de-DE': '/de',
      'fr-FR': '/fr',
      'ja-JP': '/ja',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Trionex Technologies - Enterprise IT Solutions',
    description: 'Leading provider of IT services, software development, AI & cloud solutions for businesses worldwide.',
    siteName: 'Trionex Technologies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trionex Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trionex Technologies - Enterprise IT Solutions',
    description: 'Leading provider of IT services, software development, AI & cloud solutions for businesses worldwide.',
    images: ['/og-image.jpg'],
    creator: '@trionextech',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export default function RootLayout({
  children,
  params: { lang }
}: RootLayoutProps) {
  // Ensure that the incoming `lang` is valid
  if (!locales.includes(lang as any)) {
    notFound();
  }

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { ClientWrapper } from '@/components/ClientWrapper';
import { FloatingLogo } from '@/components/ui/FloatingLogo';
import { BackgroundLogo } from '@/components/ui/BackgroundLogo';
import { CookieConsent } from '@/components/ui/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';

const websiteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://trionex.tech';

export const metadata: Metadata = {
  title: {
    default: 'Trionex Technologies - Professional AI & Software Solutions',
    template: '%s | Trionex Technologies'
  },
  description: 'Professional AI & Software Solutions company offering Website Development, AI Chatbots, AI Agents, Voice Bots, Analysis Systems, Mobile Applications, and Cloud Services on AWS.',
  keywords: ['Trionex Technologies', 'AI Solutions', 'Software Development', 'Web Development', 'AI Chatbots', 'Mobile Apps', 'AWS', 'Cloud Services', 'AI Agents', 'Voice Bots', 'Academic Projects'],
  authors: [{ name: 'Trionex Technologies' }],
  creator: 'Trionex Technologies',
  publisher: 'Trionex Technologies',
  metadataBase: new URL(websiteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
    },
  },
  openGraph: {
    title: 'Trionex Technologies - Professional AI & Software Solutions',
    description: 'Professional AI & Software Solutions company offering Website Development, AI Chatbots, AI Agents, Voice Bots, Mobile Applications, and Cloud Services.',
    url: websiteUrl,
    siteName: 'Trionex Technologies',
    locale: 'en_US',
    type: 'website',
    alternateLocale: 'en_US',
    images: [
      {
        url: `${websiteUrl}/images/logo.svg`,
        width: 1200,
        height: 630,
        alt: 'Trionex Technologies - AI & Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trionex Technologies - Professional AI & Software Solutions',
    description: 'Professional AI & Software Solutions company offering Website Development, AI Chatbots, AI Agents, Voice Bots, Mobile Applications.',
    creator: '@trionextech',
    images: [`${websiteUrl}/images/logo.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'technology',
  classification: 'Business',
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Trionex Technologies',
  url: websiteUrl,
  logo: `${websiteUrl}/images/logo.svg`,
  description: 'Professional AI & Software Solutions company offering Website Development, AI Chatbots, AI Agents, Voice Bots, Mobile Applications, and Cloud Services.',
  foundingDate: '2020',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 10,
    maxValue: 50,
  },
  areaServed: 'Worldwide',
  serviceType: [
    'Website Development',
    'AI Chatbots',
    'AI Agents',
    'Voice Bots',
    'Mobile Applications',
    'Cloud Services',
    'Academic Projects',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-234-567-8900',
    contactType: 'customer service',
    email: 'contact@trionex.tech',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://linkedin.com/company/trionex-technologies',
    'https://twitter.com/trionextech',
    'https://instagram.com/trionextech',
  ],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${websiteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// Website Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Trionex Technologies',
  url: websiteUrl,
  description: 'Professional AI & Software Solutions',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${websiteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href={websiteUrl} />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Trionex Technologies - Professional AI & Software Solutions" />
        <meta name="description" content="Professional AI & Software Solutions company offering Website Development, AI Chatbots, AI Agents, Voice Bots, Mobile Applications, and Cloud Services on AWS." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:title" content="Trionex Technologies - Professional AI & Software Solutions" />
        <meta property="og:description" content="Professional AI & Software Solutions company offering Website Development, AI Chatbots, AI Agents, Voice Bots, Mobile Applications, and Cloud Services." />
        <meta property="og:image" content={`${websiteUrl}/images/logo.svg`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={websiteUrl} />
        <meta property="twitter:title" content="Trionex Technologies - Professional AI & Software Solutions" />
        <meta property="twitter:description" content="Professional AI & Software Solutions company offering Website Development, AI Chatbots, AI Agents, Voice Bots, Mobile Applications." />
        <meta property="twitter:image" content={`${websiteUrl}/images/logo.svg`} />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <ClientWrapper />
          <BackgroundLogo />
          <FloatingLogo />
          <CookieConsent />
          {children}
        </Providers>
      </body>
    </html>
  );
}

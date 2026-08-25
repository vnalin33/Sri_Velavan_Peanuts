import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://srivelavanpeanuts.com'),
  title: 'Sri Velavan — Premium Peanuts, Naturally Better',
  description: 'Premium peanuts sourced with care, handled with precision, and delivered with consistency. From the farm to your business.',
  openGraph: {
    title: 'Sri Velavan — From the Farm. Naturally Better.',
    description: 'Premium peanuts sourced with care, handled with precision, and delivered with consistency.',
    url: 'https://srivelavanpeanuts.com',
    siteName: 'Sri Velavan',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sri Velavan Premium Peanuts',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gb text-dg antialiased">
        {children}
      </body>
    </html>
  );
}

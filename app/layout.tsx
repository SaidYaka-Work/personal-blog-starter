import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { getSiteSettings, getThemeVariables } from '@/lib/settings';

const inter = Inter({ subsets: ['latin'] });

const settings = getSiteSettings();

export const metadata: Metadata = {
  title: {
    default: settings.site.title,
    template: `%s | ${settings.site.title}`,
  },
  description: settings.site.description,
  keywords: settings.seo.keywords,
  authors: [{ name: settings.author.name }],
  openGraph: {
    title: settings.site.title,
    description: settings.site.description,
    url: settings.site.url,
    siteName: settings.site.title,
    type: 'website',
    images: [settings.seo.ogImage],
  },
  twitter: {
    card: settings.seo.twitterCard as 'summary' | 'summary_large_image',
    site: settings.social.twitter ? `@${settings.social.twitter}` : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const themeVars = getThemeVariables();

  return (
    <html lang="en" style={themeVars as React.CSSProperties}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

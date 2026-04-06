import type {Metadata} from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-mono',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tehnobehno.site'),
  title: 'Техно-Бэхно — Разработка сайтов и мобильных приложений',
  description: 'Создаем премиальные веб-сайты и приложения для iOS и Android с акцентом на качество и минимализм.',
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
  openGraph: {
    title: 'Техно-Бэхно — Разработка сайтов и мобильных приложений',
    description: 'Создаем премиальные веб-сайты и приложения для iOS и Android.',
    url: 'https://tehnobehno.site',
    siteName: 'Техно-Бэхно',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Техно-Бэхно — Digital Agency',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Техно-Бэхно — Разработка сайтов и мобильных приложений',
    description: 'Создаем премиальные веб-сайты и приложения для iOS и Android.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-black text-white font-sans antialiased selection:bg-white/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

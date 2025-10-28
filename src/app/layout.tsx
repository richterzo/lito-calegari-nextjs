import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

// Optimize font loading with Next.js 14+ font optimization
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Lito Calegari - Studio Grafico e Stampa a Bologna',
    template: '%s | Lito Calegari',
  },
  description:
    'Studio grafico e stampa di alta qualità a Bologna. Dalla progettazione grafica alla stampa offset e digitale, offriamo soluzioni creative e su misura per valorizzare la tua comunicazione.',
  keywords: [
    'studio grafico Bologna',
    'stampa Bologna',
    'design grafico',
    'stampa offset',
    'stampa digitale',
    'biglietti da visita',
    'branding',
    'comunicazione visiva',
  ],
  authors: [{ name: 'Lito Calegari' }],
  creator: 'Lito Calegari',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://litocalegari.it',
    siteName: 'Lito Calegari',
    title: 'Lito Calegari - Studio Grafico e Stampa',
    description: 'Dove le tue idee prendono forma',
    images: [
      {
        url: '/images/Logo-LitoCalegari.png',
        width: 1200,
        height: 630,
        alt: 'Lito Calegari',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lito Calegari - Studio Grafico e Stampa',
    description: 'Dove le tue idee prendono forma',
    images: ['/images/Logo-LitoCalegari.png'],
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C6D92E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={poppins.variable}>
      <body className="antialiased font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

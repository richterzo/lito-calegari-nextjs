import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lito Calegari - Studio Grafico e Stampa',
  description:
    'Studio grafico e stampa di alta qualità. Dalla progettazione grafica alla stampa, offriamo soluzioni creative e su misura per valorizzare la tua comunicazione.',
  keywords: 'studio grafico, stampa, design, comunicazione, branding, Milano',
  authors: [{ name: 'Lito Calegari' }],
  openGraph: {
    title: 'Lito Calegari - Studio Grafico e Stampa',
    description: 'Dove le tue idee prendono forma',
    type: 'website',
    locale: 'it_IT',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Preload critical font for better CLS and LCP */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Load fonts with display=swap for stability */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}

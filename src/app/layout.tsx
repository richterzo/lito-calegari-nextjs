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
        {/* Load fonts with display=swap to reduce CLS */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}

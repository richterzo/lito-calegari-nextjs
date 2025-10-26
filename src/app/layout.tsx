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
        {/* Critical inline CSS - eliminates 160ms render blocking */}
        <style
          dangerouslySetInnerHTML={{
            __html: `*,::before,::after{box-sizing:border-box;border:0 solid #e5e7eb}::before,::after{--tw-content:''}html{-webkit-text-size-adjust:100%;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5;font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit;font-family:'Poppins','Poppins-fallback',-apple-system,sans-serif;-webkit-font-smoothing:antialiased}h1,h2,h3,h4,h5,h6{font-family:'Poppins','Poppins-fallback',sans-serif;font-weight:600;font-size:inherit;line-height:inherit}p{margin:0}.min-h-screen{min-height:100vh}.flex{display:flex}.items-center{align-items:center}.justify-center{justify-content:center}.relative{position:relative}.fixed{position:fixed}.absolute{position:absolute}.z-10{z-index:10}.z-50{z-index:50}.overflow-hidden{overflow:hidden}.text-center{text-align:center}.pt-20{padding-top:5rem}@font-face{font-family:'Poppins-fallback';src:local('Arial');ascent-override:92%;descent-override:24%;line-gap-override:0%;size-adjust:107%}`,
          }}
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Preload critical font */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Load fonts - critical CSS inline eliminates blocking */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}

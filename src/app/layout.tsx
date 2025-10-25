import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lito Calegari - Studio Grafico e Stampa",
  description: "Studio grafico e stampa di alta qualità. Dalla progettazione grafica alla stampa, offriamo soluzioni creative e su misura per valorizzare la tua comunicazione.",
  keywords: "studio grafico, stampa, design, comunicazione, branding, Milano",
  authors: [{ name: "Lito Calegari" }],
  openGraph: {
    title: "Lito Calegari - Studio Grafico e Stampa",
    description: "Dove le tue idee prendono forma",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://carlos-suprema-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Carlos Suprema — Tatuador | Línea Fina · Realismo · Blackwork",
  description:
    "Carlos Suprema, tatuador especializado en línea fina, realismo y blackwork. +39K seguidores, +470 piezas en portafolio. Agenda tu consulta en Santiago, Chile.",
  keywords: [
    "Carlos Suprema",
    "tatuador Chile",
    "tatuador Santiago",
    "tattoo artist",
    "línea fina",
    "realismo tatuaje",
    "blackwork",
  ],
  authors: [{ name: "Carlos Suprema" }],
  openGraph: {
    title: "Carlos Suprema — Tatuador | Línea Fina · Realismo · Blackwork",
    description:
      "Tatuador especializado en línea fina, realismo y blackwork. +39K seguidores, +470 piezas en portafolio. Con base en Santiago, Chile.",
    url: siteUrl,
    siteName: "Carlos Suprema",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Suprema — Tatuador",
    description: "Línea fina · Realismo · Blackwork. Agenda tu próxima pieza.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebas.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}

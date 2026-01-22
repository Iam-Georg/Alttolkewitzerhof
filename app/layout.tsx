import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Caveat } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ClientLayout } from "@/components/client-layout"
import { GoogleTranslate } from "@/components/google-translate"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
})

export const metadata: Metadata = {
  title: "Alttolkewitzer Hof | Hotel & Restaurant Dresden",
  description:
    "Idyllisch am Dresdner Elbufer gelegen – Ihr Hotel & Restaurant mit Charme. Komfortable Zimmer im Landhausstil, regionale Küche und perfekte Lage für Ausflüge.",
  keywords:
    "Hotel Dresden, Restaurant Dresden, Elbufer, Elberadweg, Laubegast, Sächsische Schweiz, Übernachtung Dresden, Restaurant mit Terrasse, Landhausstil, Regionale Küche, Familienbetrieb, Ausflugsziel Dresden, Restaurant Dresden",
  openGraph: {
    title: "Alttolkewitzer Hof | Hotel & Restaurant Dresden",
    description: "Idyllisch am Dresdner Elbufer gelegen – Ihr Hotel & Restaurant mit Charme.",
    locale: "de_DE",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/30095.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/30095.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
      </head>
      <body className={`${playfair.variable} ${inter.variable} ${caveat.variable} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
        <GoogleTranslate />
      </body>
    </html>
  )
}


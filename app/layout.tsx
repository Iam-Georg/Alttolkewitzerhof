import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Caveat } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "@/components/client-layout"

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
      <body className={`${playfair.variable} ${inter.variable} ${caveat.variable} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
        {/* Hidden Google Translate element container */}
        <div id="google_translate_element" style={{ display: 'none' }} />
        {/* Google Translate initialization script - loaded after page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  function googleTranslateElementInit() {
                    new google.translate.TranslateElement(
                      {
                        pageLanguage: 'de',
                        includedLanguages: 'en',
                        autoDisplay: false
                      },
                      'google_translate_element'
                    );
                  }
                  var script = document.createElement('script');
                  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
                  script.async = true;
                  document.head.appendChild(script);
                }, 2000); // Delay loading by 2 seconds
              });
            `,
          }}
        />
      </body>
    </html>
  )
}


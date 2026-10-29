import type { Metadata } from "next"
import NextTopLoader from 'nextjs-toploader';

import { Playfair_Display, Inter } from 'next/font/google'

import "./globals.css"
import ClientProviders from "@/components/providers/client-provider"
import { Toaster } from "@/components/ui/toaster"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Abdouraouf Youssouf — Développeur Full-Stack React & Next.js",
  description:
    "Conception et développement d'applications web sur mesure, plateformes SaaS et outils métier de la conception à la production. Master 2 en ingénierie informatique.",
  metadataBase: new URL("https://yabdouraouf.vercel.app"),
  openGraph: {
    title: "Abdouraouf Youssouf — Développeur Full-Stack React & Next.js",
    description:
      "Conception et développement d'applications web sur mesure, plateformes SaaS et outils métier de la conception à la production.",
    url: "https://yabdouraouf.vercel.app",
    siteName: "Abdouraouf Youssouf Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://yabdouraouf.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased bg-[#FAFAF8] text-[#16181D]`}>
        <ClientProviders>
          
            {children}
          
          <Toaster />
          <NextTopLoader showSpinner={false} />

        </ClientProviders>
      </body>
    </html>
  )
}
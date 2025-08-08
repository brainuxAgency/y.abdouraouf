import type { Metadata } from "next"
import NextTopLoader from 'nextjs-toploader';

import { Geist } from 'next/font/google'

import "./globals.css"
import ClientProviders from "@/components/providers/client-provider"
import { Toaster } from "@/components/ui/toaster"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdouraouf Youssouf",
  description: "Développeur Full Stack React & Next.js & Tailwind CSS , spécialisé dans la création de sites web et applications modernes et performantes avec une integration parfaite des l'intelligence artificielle pour automatiser les tâches et les processus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ClientProviders>
          
            {children}
          
          <Toaster />
          <NextTopLoader showSpinner={false} />

        </ClientProviders>
      </body>
    </html>
  )
}
import { Navbar } from "@/components/home/Navbar"
import Footer from "@/components/home/Footer"
import { IntroLoader } from "@/components/intro/IntroLoader"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <IntroLoader>
      <div className="w-full flex flex-col min-h-screen bg-[#0a0c10] text-white">
        <Navbar />
        {/* <VisitorTracker /> */}

        {children}
        <Footer />
      </div>
    </IntroLoader>
  )
}

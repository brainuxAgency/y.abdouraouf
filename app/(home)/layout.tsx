import Footer from "@/components/home/Footer"
import { Navbar } from "@/components/home/Navbar"




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#0a0c10] text-white">
      <Navbar />
      {/* <VisitorTracker /> */}

      {children}
      <Footer />
    </div>

  )
}
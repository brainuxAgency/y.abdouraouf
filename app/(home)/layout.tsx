import Footer from "@/components/home/Footer"
import { Navbar } from "@/components/home/Navbar"




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className=" w-full flex flex-col min-h-screen">
      <Navbar />
      {/* <VisitorTracker /> */}

      {children}
      <Footer />
    </div>

  )
}
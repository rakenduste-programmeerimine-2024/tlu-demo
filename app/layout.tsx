import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import FrontHeader from "@/components/front-header"
import Sidebar from "@/components/sidebar"
import DtiSidebar from "@/components/dti-sidebar"
import { ThemeSwitcher } from "@/components/theme-switcher"
import Footer from "@/components/footer"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Tallinna Ülikool",
  description: "Tallinna Ülikool",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={GeistSans.className}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <div className="absolute z-10">
              <Sidebar />
            </div>
            <div>
              <FrontHeader />
            </div>
            <div className="absolute right-0 top-0">
              <ThemeSwitcher />
            </div>
            {/* <div className="absolute right-0 top-0">
              <DtiSidebar />
            </div> */}
            <div className="absolute right-0 top-0">
              <DtiSidebar />
            </div>
          </div>
          <main className="flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center h-8"></nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}

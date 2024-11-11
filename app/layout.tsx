import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import { ThemeSwitcher } from "@/components/theme-switcher"
import FrontHeader from "@/components/front-header"
import Sidebar from "@/components/sidebar"

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
          <div className="items-center">
            <div className="absolute z-10">
              <Sidebar />
            </div>
            <div className="flex ml-10">
              <FrontHeader />
            </div>
          </div>
          <main className="flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center h-16"></nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

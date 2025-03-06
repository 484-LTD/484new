import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { SplashScreen } from "@/components/splash-screen"
import { Logo } from "@/components/logo"
import { CustomCursor } from "@/components/custom-cursor"
import { SocialIcons } from "@/components/social-icons"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "484 LTD - Premium Technology",
  description: "The 484 family of companies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-gray-100`}>
        <SplashScreen />
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
          <Logo />
        </div>
        <div className="fixed top-4 right-4 z-50">
          <SocialIcons />
        </div>
        {children}
        <footer className="w-full py-6 px-4 bg-dark-600 text-gray-400">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 484 LTD | EXTON, PA 2025. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <SocialIcons />
            </div>
          </div>
        </footer>
        <CustomCursor />
      </body>
    </html>
  )
}



import './globals.css'
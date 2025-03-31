import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Cormorant } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "THE DERMA LOUNGE | Skin and Laser Clinic Newport, Wales",
  description:
    "THE DERMA LOUNGE offers premium laser hair removal and facial treatments in Newport, Wales. Visit us at 242 Stow Hill or book your appointment online today.",
  keywords:
    "laser hair removal Newport, facials Wales, skin clinic Newport, beauty treatments Wales, laser treatments UK",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


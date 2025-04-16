import type React from "react"
import type { Metadata } from "next"
import { Inter, Lexend } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "@/lib/get-messages"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import "@/app/globals.css"
import { locales } from "@/lib/i18n"
import { notFound } from "next/navigation"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap", // Optimize font loading
})

const lexend = Lexend({
  subsets: ["latin", "vietnamese"],
  variable: "--font-lexend",
  display: "swap", // Optimize font loading
})

export const metadata: Metadata = {
  title: "Nông Nguyễn Thanh - AI Application & Workflow Automation Specialist",
  description: "Portfolio của Nông Nguyễn Thanh - Chuyên gia Ứng dụng AI & Tự động hóa Quy trình với tư duy AI-First",
  keywords: ["AI", "Automation", "Portfolio", "Developer", "Mobile", "Web", "Flutter", "React", "Next.js"],
  authors: [{ name: "Nông Nguyễn Thanh", url: "https://github.com/thanhnn16" }],
  creator: "Nông Nguyễn Thanh",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://thanhnn16.vercel.app",
    title: "Nông Nguyễn Thanh - AI Application & Workflow Automation Specialist",
    description: "Portfolio của Nông Nguyễn Thanh - Chuyên gia Ứng dụng AI & Tự động hóa Quy trình với tư duy AI-First",
    siteName: "Nông Nguyễn Thanh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nông Nguyễn Thanh - AI Application & Workflow Automation Specialist",
    description: "Portfolio của Nông Nguyễn Thanh - Chuyên gia Ứng dụng AI & Tự động hóa Quy trình với tư duy AI-First",
    creator: "@thanhnn16",
  },
  metadataBase: new URL("https://thanhnn16.vercel.app"),
}

export default async function RootLayout({
  children,
  params: { locale = "vi" },
}: {
  children: React.ReactNode
  params: { locale?: string }
}) {
  // Validate locale
  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages(locale)

  return (
    <html lang={locale} suppressHydrationWarning className="dark">
      <body className={cn("min-h-screen bg-zinc-900 font-sans antialiased", inter.variable, lexend.variable)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {/* Skip to content link for accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-zinc-800 focus:text-orange-500"
            >
              Skip to content
            </a>
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}


import './globals.css'
import type React from "react"
import { NextIntlClientProviderWrapper } from "@/components/i18n/next-intl-client-provider-wrapper"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <NextIntlClientProviderWrapper>
        <Header />
      </NextIntlClientProviderWrapper>
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <NextIntlClientProviderWrapper>
        <Footer />
      </NextIntlClientProviderWrapper>
    </div>
  )
}

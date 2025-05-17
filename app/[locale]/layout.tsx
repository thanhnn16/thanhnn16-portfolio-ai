import type React from "react";
import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "../globals.css";
import { locales, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getMessages } from "next-intl/server";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap", // Optimize font loading
});

const lexend = Lexend({
  subsets: ["latin", "vietnamese"],
  variable: "--font-lexend",
  display: "swap", // Optimize font loading
});

export const metadata: Metadata = {
  title: "Nông Nguyễn Thành - AI Application & Workflow Automation Specialist",
  description:
    "Portfolio của Nông Nguyễn Thành - Chuyên gia Ứng dụng AI & Tự động hóa Quy trình với tư duy AI-First",
  keywords: [
    "AI",
    "Automation",
    "Portfolio",
    "Developer",
    "Mobile",
    "Web",
    "Flutter",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Nông Nguyễn Thành", url: "https://github.com/thanhnn16" }],
  creator: "Nông Nguyễn Thành",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://thanhnn16.io.vn",
    title:
      "Nông Nguyễn Thành - AI Application & Workflow Automation Specialist",
    description:
      "Portfolio của Nông Nguyễn Thành - Chuyên gia Ứng dụng AI & Tự động hóa Quy trình với tư duy AI-First",
    siteName: "Nông Nguyễn Thành Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nông Nguyễn Thành - AI Application & Workflow Automation Specialist",
    description:
      "Portfolio của Nông Nguyễn Thành - Chuyên gia Ứng dụng AI & Tự động hóa Quy trình với tư duy AI-First",
    creator: "@thanhnn16",
  },
  metadataBase: new URL("https://thanhnn16.io.vn"),
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={cn(inter.variable, lexend.variable)}>
      <body className="min-h-screen bg-zinc-950 antialiased">
        <NextIntlClientProvider locale={locale} timeZone="Asia/Ho_Chi_Minh">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <Header />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-zinc-800 focus:text-orange-500"
            >
              Skip to content
            </a>
            {children}
            <Toaster />
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

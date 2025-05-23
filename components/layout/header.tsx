"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSelector } from "@/components/layout/language-selector"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Link, usePathname } from "@/i18n/navigation"

export function Header() {
  const t = useTranslations("common.nav")
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const routes = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/projects", label: t("projects") },
    { href: "/skills", label: t("skills") },
    { href: "/blog", label: t("blog") },
    { href: "/workflows", label: t("workflows") },
    { href: "/contact", label: t("contact") },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/95 backdrop-blur transition-shadow",
        scrolled && "shadow-md shadow-black/10",
      )}
      aria-label="Main navigation"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" aria-label="thanhnn16 homepage">
          <span className="text-xl font-bold text-orange-500">thanhnn16</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6" aria-label="Desktop navigation">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-md px-2 py-1",
                pathname === route.href ? "text-orange-500" : "text-zinc-200",
              )}
              aria-current={pathname === route.href ? "page" : undefined}
            >
              {route.label}
            </Link>
          ))}
          <LanguageSelector />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-zinc-900 p-0" aria-label="Mobile navigation">
            <div className="flex h-16 items-center border-b border-zinc-800 px-6">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 p-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-md px-2 py-1",
                    pathname === route.href ? "text-orange-500" : "text-zinc-200",
                  )}
                  aria-current={pathname === route.href ? "page" : undefined}
                >
                  {route.label}
                </Link>
              ))}
              <div className="pt-4">
                <LanguageSelector />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

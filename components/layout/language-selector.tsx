"use client"

import { usePathname, useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { locales } from "@/lib/i18n"

export function LanguageSelector() {
  const t = useTranslations("common.language")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    // Get the path without the locale prefix
    const segments = pathname.split("/")
    const isLocalePath = locales.includes(segments[1])

    let pathWithoutLocale
    if (isLocalePath) {
      pathWithoutLocale = segments.slice(2).join("/")
    } else {
      pathWithoutLocale = segments.slice(1).join("/")
    }

    // Create the new path with the new locale
    const newPath = newLocale === "vi" ? `/${pathWithoutLocale}` : `/${newLocale}/${pathWithoutLocale}`

    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-full focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
          aria-label="Change language"
        >
          <Globe className="h-5 w-5" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zinc-800 border-zinc-700">
        <DropdownMenuItem
          onClick={() => switchLocale("vi")}
          className={locale === "vi" ? "bg-zinc-700 text-orange-500" : ""}
          aria-label="Switch to Vietnamese"
        >
          {t("vi")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLocale("en")}
          className={locale === "en" ? "bg-zinc-700 text-orange-500" : ""}
          aria-label="Switch to English"
        >
          {t("en")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLocale("ja")}
          className={locale === "ja" ? "bg-zinc-700 text-orange-500" : ""}
          aria-label="Switch to Japanese"
        >
          {t("ja")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

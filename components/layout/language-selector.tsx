"use client"

import { useLocale, useTranslations } from "next-intl"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { usePathname, useRouter } from "@/i18n/navigation"

export function LanguageSelector() {
  const t = useTranslations("common.language")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const switchLocale = (newLocale: string) => {
    let targetPath = pathname;
    
    if (pathname.includes("/blog/") && pathname !== "/blog") {
      targetPath = "/blog";
    } else if (pathname.includes("/projects/") && pathname !== "/projects") {
      targetPath = "/projects";
    }
    
    router.replace(targetPath, { locale: newLocale })
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

import createMiddleware from "next-intl/middleware"
import { locales, defaultLocale } from "./lib/i18n"

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed", // Or 'always' or 'never'
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/", // Match root
    "/(vi|en|ja)/:path*", // Match all routes starting with /vi, /en, or /ja
    // Enable optional default locale prefix
    // '/((?!_next|.*\\..*).*)'
  ],
}

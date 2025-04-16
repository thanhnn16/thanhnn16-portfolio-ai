import { getRequestConfig } from "next-intl/server"

// Define the supported locales
export const locales = ["vi", "en", "ja"]
export const defaultLocale = "vi"

export default getRequestConfig(async ({ locale }) => {
  // If the locale is not supported, use the default locale
  const resolvedLocale = locales.includes(locale as string) ? locale : defaultLocale

  return {
    locale: resolvedLocale as string,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  }
})
import { getRequestConfig } from "next-intl/server"

// Define the supported locales
export const locales = ["vi", "en", "ja"]
export const defaultLocale = "vi"

export default getRequestConfig(async ({ locale }) => {
  // Validate the incoming locale against the supported locales.
  // If it's not valid (or undefined), fall back to the default locale.
  let resolvedLocale = defaultLocale // Start with default
  if (locale && locales.includes(locale)) {
    resolvedLocale = locale
  }

  return {
    locale: resolvedLocale, // Now guaranteed to be a string
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  }
})
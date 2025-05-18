import { locales } from "@/i18n/routing"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL for the site
  const baseUrl = "https://thanhnn16.io.vn"

  // Current date for lastModified
  const currentDate = new Date()

  // Routes without locale prefix
  const routes = [
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      path: "/about",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/projects",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "/skills",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/blog",
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      path: "/contact",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  // Generate sitemap entries for all locales and routes
  const sitemap: MetadataRoute.Sitemap = []

  // Default locale (vi) doesn't have a prefix in the URL
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route.path}`,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })
  })

  // Other locales have their prefix in the URL
  locales
    .filter((locale) => locale !== "vi")
    .forEach((locale) => {
      routes.forEach((route) => {
        sitemap.push({
          url: `${baseUrl}/${locale}${route.path}`,
          lastModified: currentDate,
          changeFrequency: route.changeFrequency,
          priority: route.priority,
        })
      })
    })

  return sitemap
}

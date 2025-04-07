import type { MetadataRoute } from "next"
import { coloringPages } from "@/data/coloring-pages"

export default function sitemap(): MetadataRoute.Sitemap {
  // URL base del sitio
  const baseUrl = "https://ausmalspass.com"

  // Fecha actual para lastModified
  const currentDate = new Date()

  // Páginas estáticas principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/kategorien`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Obtener todas las categorías únicas
  const categories = [...new Set(coloringPages.map((page) => page.categorySlug))]

  // Crear entradas para las páginas de categorías
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/kategorie/${category}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Crear entradas para cada página de colorear con la nueva estructura de URL
  const coloringPageEntries = coloringPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Combinar todas las entradas
  return [...staticPages, ...categoryPages, ...coloringPageEntries]
}


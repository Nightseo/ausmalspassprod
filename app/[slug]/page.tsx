import { coloringPages } from "@/data/coloring-pages"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ColoringPageClient from "./ColoringPageClient"
import Script from "next/script"

type Props = {
  params: Promise<{ slug: string }> | { slug: string }
}

// Lista de rutas estáticas conocidas
const staticRoutes = ["kategorien", "ueber-uns", "debug", "debug-routes", "diagnostico"]

// Traducción de categorías al alemán
const categoryTranslations: Record<string, string> = {
  deportes: "Sport",
  animales: "Tiere",
  patrones: "Muster",
  naturaleza: "Natur",
  fantasia: "Fantasie",
  "bobbie-goods": "Bobbie Goods",
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Manejar params como Promise en Next.js 15
  const resolvedParams = await params
  const slug = resolvedParams.slug

  // Si es una ruta estática conocida, no generar metadata aquí
  if (staticRoutes.includes(slug)) {
    return {
      title: "Redirecting...",
    }
  }

  const page = coloringPages.find((page) => page.slug === slug)

  if (!page) {
    return {
      title: "Ausmalbild nicht gefunden",
    }
  }

  // Generar palabras clave basadas en el título, categoría y keywords existentes
  const keywords = [
    page.title,
    `${page.title} ausmalbild`,
    `${page.title} malvorlage`,
    `${page.title} zum ausmalen`,
    categoryTranslations[page.categorySlug] || page.category,
    "kostenlos",
    "ausdrucken",
    "kinder",
    ...(page.keywords || []),
  ].join(", ")

  return {
    title: `${page.title} - Ausmalbild zum Ausdrucken | AusmalSpass`,
    description: `${page.description} Kostenlos online ausmalen, ausdrucken oder herunterladen. Hochwertiges ${categoryTranslations[page.categorySlug] || page.category} Ausmalbild für Kinder und Erwachsene.`,
    keywords: keywords,
    openGraph: {
      title: `${page.title} - Ausmalbild zum Ausdrucken | AusmalSpass`,
      description: `${page.description} Kostenlos online ausmalen, ausdrucken oder herunterladen.`,
      images: [
        {
          url: page.thumbnailUrl,
          width: 1200,
          height: 630,
          alt: `${page.title} - Ausmalbild zum Ausdrucken`,
        },
      ],
      type: "article",
      locale: "de_DE",
      siteName: "AusmalSpass",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} - Ausmalbild zum Ausdrucken | AusmalSpass`,
      description: `${page.description} Kostenlos online ausmalen, ausdrucken oder herunterladen.`,
      images: [page.thumbnailUrl],
    },
    alternates: {
      canonical: `https://www.ausmalspass.com/${page.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [{ name: "AusmalSpass Team" }],
    publisher: "AusmalSpass",
    metadataBase: new URL("https://www.ausmalspass.com"),
  }
}

export function generateStaticParams() {
  return coloringPages.map((page) => ({
    slug: page.slug,
  }))
}

export default async function ColoringPage({ params }: Props) {
  // Manejar params como Promise en Next.js 15
  const resolvedParams = await params
  const slug = resolvedParams.slug

  // Si es una ruta estática conocida, redirigir a la página correcta
  if (staticRoutes.includes(slug)) {
    return notFound()
  }

  // Verificar si el slug existe en los datos
  const page = coloringPages.find((page) => page.slug === slug)

  if (!page) {
    console.log(`Page not found for slug: ${slug}`)
    notFound()
  }

  // Construir el schema JSON-LD para la página
  const categoryName = categoryTranslations[page.categorySlug] || page.category
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // ImageObject para la imagen principal
      {
        "@type": "ImageObject",
        "@id": `https://www.ausmalspass.com/${page.slug}#primaryImage`,
        name: `${page.title} - Ausmalbild zum Ausdrucken`,
        contentUrl: page.imageUrl,
        thumbnailUrl: page.thumbnailUrl,
        description: page.description,
        representativeOfPage: true,
        inLanguage: "de-DE",
        copyrightHolder: {
          "@type": "Organization",
          name: "AusmalSpass",
          url: "https://www.ausmalspass.com",
        },
      },
      // CreativeWork para el dibujo para colorear
      {
        "@type": "CreativeWork",
        "@id": `https://www.ausmalspass.com/${page.slug}#coloringPage`,
        url: `https://www.ausmalspass.com/${page.slug}`,
        name: `${page.title} - Ausmalbild zum Ausdrucken`,
        headline: `${page.title} - Ausmalbild zum Ausdrucken`,
        description: page.description,
        inLanguage: "de-DE",
        datePublished: "2023-01-01T00:00:00Z", // Fecha ficticia, idealmente usar la fecha real
        dateModified: new Date().toISOString(),
        image: {
          "@id": `https://www.ausmalspass.com/${page.slug}#primaryImage`,
        },
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.ausmalspass.com/#website",
          url: "https://www.ausmalspass.com",
          name: "AusmalSpass",
          description: "Kostenlose Malvorlagen zum Ausdrucken und Ausmalen",
          inLanguage: "de-DE",
        },
        publisher: {
          "@type": "Organization",
          name: "AusmalSpass",
          url: "https://www.ausmalspass.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.ausmalspass.com/images/logo.png",
          },
        },
        keywords: [
          page.title,
          `${page.title} ausmalbild`,
          `${page.title} malvorlage`,
          categoryName,
          "ausmalbild",
          "malvorlage",
          "kostenlos",
          "ausdrucken",
        ].join(", "),
        genre: categoryName,
        audience: {
          "@type": "Audience",
          audienceType: "Kinder und Erwachsene",
        },
        potentialAction: [
          {
            "@type": "DownloadAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: page.imageUrl,
            },
            name: "Herunterladen",
          }
        ],
      },
      // BreadcrumbList para la navegación
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.ausmalspass.com/${page.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: "https://www.ausmalspass.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: categoryName,
            item: `https://www.ausmalspass.com/kategorie/${page.categorySlug}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.title,
          },
        ],
      },
    ],
  }

  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ColoringPageClient slug={slug} />
    </>
  )
}


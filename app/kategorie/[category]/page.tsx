import { coloringPages } from "@/data/coloring-pages"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Script from "next/script"

type Props = {
  params: Promise<{ category: string }> | { category: string }
}

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
  const categorySlug = resolvedParams.category

  const categoryName = categoryTranslations[categorySlug] || categorySlug
  const categoryPages = coloringPages.filter((page) => page.categorySlug === categorySlug)

  // Generar palabras clave basadas en la categoría
  const keywords = [
    categoryName,
    `${categoryName} ausmalbilder`,
    `${categoryName} malvorlagen`,
    `${categoryName} zum ausmalen`,
    "kostenlos",
    "ausdrucken",
    "kinder",
    ...categoryPages.slice(0, 5).map((page) => page.title),
  ].join(", ")

  return {
    title: `${categoryName} Ausmalbilder zum Ausdrucken | AusmalSpass`,
    description: `Entdecke unsere Sammlung von ${categoryName} Ausmalbildern zum kostenlosen Ausdrucken und Ausmalen. ${categoryPages.length} hochwertige Motive für Kinder und Erwachsene.`,
    keywords: keywords,
    openGraph: {
      title: `${categoryName} Ausmalbilder zum Ausdrucken | AusmalSpass`,
      description: `Entdecke unsere Sammlung von ${categoryName} Ausmalbildern zum kostenlosen Ausdrucken und Ausmalen. ${categoryPages.length} hochwertige Motive für Kinder und Erwachsene.`,
      type: "website",
      locale: "de_DE",
      siteName: "AusmalSpass",
      images:
        categoryPages.length > 0
          ? [
              {
                url: categoryPages[0].thumbnailUrl,
                width: 1200,
                height: 630,
                alt: `${categoryName} Ausmalbilder`,
              },
            ]
          : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} Ausmalbilder zum Ausdrucken | AusmalSpass`,
      description: `Entdecke unsere Sammlung von ${categoryName} Ausmalbildern zum kostenlosen Ausdrucken und Ausmalen.`,
      images: categoryPages.length > 0 ? [categoryPages[0].thumbnailUrl] : undefined,
    },
    alternates: {
      canonical: `https://ausmalspass.com/kategorie/${categorySlug}`,
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
  }
}

export function generateStaticParams() {
  const categories = [...new Set(coloringPages.map((page) => page.categorySlug))]
  return categories.map((category) => ({
    category,
  }))
}

export default async function CategoryPage({ params }: Props) {
  // Manejar params como Promise en Next.js 15
  const resolvedParams = await params
  const categorySlug = resolvedParams.category

  const categoryPages = coloringPages.filter((page) => page.categorySlug === categorySlug)

  if (categoryPages.length === 0) {
    console.log(`Category not found: ${categorySlug}`)
    notFound()
  }

  const categoryName = categoryTranslations[categorySlug] || categoryPages[0].category

  // Construir el schema JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // CollectionPage para la categoría
      {
        "@type": "CollectionPage",
        "@id": `https://ausmalspass.com/kategorie/${categorySlug}#webpage`,
        url: `https://ausmalspass.com/kategorie/${categorySlug}`,
        name: `${categoryName} Ausmalbilder zum Ausdrucken | AusmalSpass`,
        description: `Entdecke unsere Sammlung von ${categoryName} Ausmalbildern zum kostenlosen Ausdrucken und Ausmalen. ${categoryPages.length} hochwertige Motive für Kinder und Erwachsene.`,
        inLanguage: "de-DE",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://ausmalspass.com/#website",
          url: "https://ausmalspass.com",
          name: "AusmalSpass",
          description: "Kostenlose Malvorlagen zum Ausdrucken und Ausmalen",
          inLanguage: "de-DE",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: categoryPages.length > 0 ? categoryPages[0].thumbnailUrl : "https://ausmalspass.com/images/logo.png",
        },
      },
      // ItemList para los elementos de la categoría
      {
        "@type": "ItemList",
        "@id": `https://ausmalspass.com/kategorie/${categorySlug}#itemlist`,
        itemListElement: categoryPages.slice(0, 10).map((page, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://ausmalspass.com/${page.slug}`,
          name: page.title,
          image: page.thumbnailUrl,
        })),
        numberOfItems: categoryPages.length,
        itemListOrder: "https://schema.org/ItemListUnordered",
      },
      // BreadcrumbList para la navegación
      {
        "@type": "BreadcrumbList",
        "@id": `https://ausmalspass.com/kategorie/${categorySlug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: "https://ausmalspass.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: categoryName,
          },
        ],
      },
    ],
  }

  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-slate-50 min-h-screen pb-12">
        {/* Breadcrumb y navegación */}
        <div className="bg-white border-b border-slate-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-500">
              <Link href="/" className="hover:text-emerald-500 transition-colors">
                Startseite
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gray-900 font-medium truncate">{categoryName} Ausmalbilder</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Encabezado de la categoría */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8 text-center">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                  {categoryName} Ausmalbilder
                </h1>
                <p className="text-lg text-gray-600">
                  Entdecke unsere Sammlung von {categoryName} Ausmalbildern zum kostenlosen Ausdrucken und Ausmalen.
                  Wähle aus {categoryPages.length} verschiedenen Motiven.
                </p>
              </div>
            </div>

            {/* Cuadrícula de dibujos para colorear - versión simplificada */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {categoryPages.map((page) => (
                <Link key={page.id} href={`/${page.slug}`} className="group">
                  <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm transition-all group-hover:shadow-md group-hover:translate-y-[-5px] duration-300">
                    <div className="relative h-64 sm:h-72 bg-white flex justify-center items-center p-6">
                      <img
                        src={page.thumbnailUrl || "/placeholder.svg"}
                        alt={page.title}
                        className="max-h-full max-w-full object-contain"
                        style={{ display: "block" }}
                      />
                    </div>
                    <div className="p-4 text-center border-t border-slate-100">
                      <p className="font-medium text-gray-900 group-hover:text-emerald-500 transition-colors">
                        {page.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Botón para volver a todas las categorías */}
            <div className="mt-12 text-center">
              <Link
                href="/kategorien"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors font-medium"
              >
                Alle Kategorien anzeigen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


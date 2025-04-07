import Link from "next/link"
import { coloringPages } from "@/data/coloring-pages"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Kategorien - AusmalSpass",
  description: "Entdecke alle Kategorien von Ausmalbildern auf AusmalSpass. Finde deine Lieblingsmotive zum Ausmalen.",
}

export default function KategorienPage() {
  // Agrupar páginas por categoría
  const pagesByCategory = coloringPages.reduce(
    (acc, page) => {
      if (!acc[page.categorySlug]) {
        acc[page.categorySlug] = []
      }
      acc[page.categorySlug].push(page)
      return acc
    },
    {} as Record<string, typeof coloringPages>,
  )

  // Traducción de categorías al alemán
  const categoryTranslations: Record<string, string> = {
    deportes: "Sport",
    animales: "Tiere",
    patrones: "Muster",
    naturaleza: "Natur",
    fantasia: "Fantasie",
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      {/* Breadcrumb y navegación */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Startseite
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium truncate">Kategorien</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado de la página */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Alle Kategorien</h1>
              <p className="text-lg text-gray-600">
                Entdecke unsere vielfältigen Kategorien und finde die perfekten Ausmalbilder für dich
              </p>
            </div>
          </div>

          {/* Cuadrícula de categorías */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(pagesByCategory).map(([categorySlug, pages]) => (
              <Link key={categorySlug} href={`/kategorie/${categorySlug}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 transition-all group-hover:shadow-md group-hover:translate-y-[-5px] duration-300 h-full">
                  <div className="h-64 bg-white p-6 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                      {pages.slice(0, 4).map((page, index) => (
                        <div key={index} className="bg-slate-50 rounded-lg p-2 flex items-center justify-center">
                          <img
                            src={page.thumbnailUrl || "/placeholder.svg"}
                            alt={page.title}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 text-center border-t border-slate-100">
                    <p className="text-xl font-semibold text-gray-900 group-hover:text-emerald-500 transition-colors">
                      {categoryTranslations[categorySlug] || pages[0].category}
                    </p>
                    <p className="text-gray-500 mt-1">{pages.length} Ausmalbilder</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


import { coloringPages } from "@/data/coloring-pages"
import Link from "next/link"

export default function DebugRoutesPage() {
  // Obtener todas las categorías únicas
  const categories = [...new Set(coloringPages.map((page) => page.categorySlug))]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Debug de Rutas</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Rutas de Categorías</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category} className="p-2 border rounded hover:bg-slate-50">
              <Link href={`/kategorie/${category}`} className="text-emerald-600 hover:underline">
                /kategorie/{category}
              </Link>
              <div className="text-sm text-gray-500 mt-1">Slug: {category}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Rutas de Dibujos</h2>
        <ul className="space-y-2">
          {coloringPages.map((page) => (
            <li key={page.id} className="p-2 border rounded hover:bg-slate-50">
              <Link href={`/${page.slug}`} className="text-emerald-600 hover:underline">
                /{page.slug}
              </Link>
              <div className="text-sm text-gray-500 mt-1">
                ID: {page.id}, Categoría: {page.category}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


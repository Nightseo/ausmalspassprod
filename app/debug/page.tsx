import { coloringPages } from "@/data/coloring-pages"
import Link from "next/link"

export default function DebugPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Depuración de Rutas y Datos</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Vinicius Jr. (Caso Especial)</h2>
        <div className="p-4 border rounded mb-4">
          <p>
            <strong>Slug esperado:</strong> vinicius-jr-real-madrid
          </p>
          <p>
            <strong>URL esperada:</strong> /vinicius-jr-real-madrid
          </p>
          <div className="mt-2">
            <Link
              href="/vinicius-jr-real-madrid"
              className="px-3 py-1 bg-emerald-500 text-white rounded text-sm hover:bg-emerald-600"
            >
              Probar enlace
            </Link>
          </div>
        </div>

        <h3 className="font-semibold mb-2">Datos de Vinicius Jr. en coloringPages:</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-auto text-xs">
          {JSON.stringify(
            coloringPages.find((page) => page.slug === "vinicius-jr-real-madrid") || "No encontrado en los datos",
            null,
            2,
          )}
        </pre>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Todas las páginas disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coloringPages.map((page) => (
            <div key={page.id} className="p-3 border rounded hover:bg-slate-50">
              <p>
                <strong>Título:</strong> {page.title}
              </p>
              <p>
                <strong>Slug:</strong> {page.slug}
              </p>
              <p>
                <strong>URL:</strong> /{page.slug}
              </p>
              <div className="mt-2">
                <Link
                  href={`/${page.slug}`}
                  className="px-3 py-1 bg-emerald-500 text-white rounded text-sm hover:bg-emerald-600"
                >
                  Probar enlace
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Categorías disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from(new Set(coloringPages.map((page) => page.categorySlug))).map((category) => (
            <div key={category} className="p-3 border rounded hover:bg-slate-50">
              <p>
                <strong>Slug de categoría:</strong> {category}
              </p>
              <p>
                <strong>URL:</strong> /kategorie/{category}
              </p>
              <div className="mt-2">
                <Link
                  href={`/kategorie/${category}`}
                  className="px-3 py-1 bg-emerald-500 text-white rounded text-sm hover:bg-emerald-600"
                >
                  Probar enlace
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


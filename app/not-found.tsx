import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import { coloringPages } from "@/data/coloring-pages"

export default function NotFound() {
  // Obtener la URL actual para depuración
  const currentPath = typeof window !== "undefined" ? window.location.pathname : ""
  const pathWithoutSlash = currentPath.startsWith("/") ? currentPath.slice(1) : currentPath

  // Buscar si existe una página con este slug
  const matchingPage = coloringPages.find((page) => page.slug === pathWithoutSlash)

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
        Seite nicht gefunden
      </h1>
      <p className="text-lg text-slate-700 mb-8">Es tut uns leid, wir konnten das gesuchte Ausmalbild nicht finden.</p>

      {/* Información de depuración */}
      <div className="w-full max-w-2xl p-4 mb-8 bg-slate-100 rounded-lg text-sm">
        <h2 className="font-bold mb-2">Debug Info:</h2>
        <p>
          <strong>Ruta actual:</strong> {currentPath}
        </p>
        <p>
          <strong>¿Existe en datos?</strong> {matchingPage ? "Sí" : "No"}
        </p>
        {matchingPage && (
          <div className="mt-2 p-2 bg-white rounded">
            <p>
              <strong>ID:</strong> {matchingPage.id}
            </p>
            <p>
              <strong>Slug:</strong> {matchingPage.slug}
            </p>
            <p>
              <strong>Título:</strong> {matchingPage.title}
            </p>
            <div className="mt-2">
              <p className="font-bold text-red-500">Solución temporal:</p>
              <Link href={`/${matchingPage.slug}`} className="text-blue-500 underline">
                Intentar acceder directamente a /{matchingPage.slug}
              </Link>
            </div>
          </div>
        )}
        <p className="mt-2">
          <strong>Rutas disponibles:</strong>
        </p>
        <ul className="list-disc pl-5 mt-1">
          {coloringPages.slice(0, 5).map((page) => (
            <li key={page.id}>
              <Link href={`/${page.slug}`} className="text-blue-500 hover:underline">
                /{page.slug}
              </Link>
            </li>
          ))}
          <li>... y {coloringPages.length - 5} más</li>
        </ul>
      </div>

      <Link href="/">
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          <Home className="h-4 w-4 mr-2" />
          Zurück zur Startseite
        </Button>
      </Link>
    </div>
  )
}


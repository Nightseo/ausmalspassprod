import Link from "next/link"

export default function DiagnosticoPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Diagnóstico de Rutas</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Prueba de rutas</h2>

        <div className="space-y-4">
          <div className="p-4 border rounded">
            <h3 className="font-medium mb-2">Página de prueba simple</h3>
            <p className="text-sm text-gray-600 mb-2">Esta ruta debería funcionar sin problemas</p>
            <Link href="/test-page" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Ir a /test-page
            </Link>
          </div>

          <div className="p-4 border rounded">
            <h3 className="font-medium mb-2">Vinicius Jr. (Ruta problemática)</h3>
            <p className="text-sm text-gray-600 mb-2">Esta es la ruta que está causando problemas</p>
            <Link href="/vinicius-jr-real-madrid" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Ir a /vinicius-jr-real-madrid
            </Link>
          </div>

          <div className="p-4 border rounded">
            <h3 className="font-medium mb-2">Categoría Deportes</h3>
            <p className="text-sm text-gray-600 mb-2">Verificar que las categorías funcionan</p>
            <Link href="/kategorie/deportes" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Ir a /kategorie/deportes
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Información del sistema</h2>
        <p>
          <strong>Fecha y hora:</strong> {new Date().toLocaleString()}
        </p>
        <p>
          <strong>URL actual:</strong> {typeof window !== "undefined" ? window.location.href : "No disponible en SSR"}
        </p>
        <p>
          <strong>Navegador:</strong>{" "}
          {typeof window !== "undefined" ? window.navigator.userAgent : "No disponible en SSR"}
        </p>
      </div>
    </div>
  )
}


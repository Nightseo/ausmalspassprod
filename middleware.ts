import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { coloringPages } from "./data/coloring-pages"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Ignorar rutas estáticas conocidas
  const staticRoutes = ["/", "/kategorien", "/ueber-uns", "/debug", "/debug-routes", "/diagnostico"]

  if (
    staticRoutes.includes(path) ||
    path.startsWith("/api/") ||
    path.startsWith("/_next/") ||
    path.startsWith("/images/") ||
    path.startsWith("/kategorie/")
  ) {
    return NextResponse.next()
  }

  // Verificar si la ruta corresponde a un dibujo
  const pathWithoutSlash = path.startsWith("/") ? path.slice(1) : path
  const isDrawingPage = coloringPages.some((page) => page.slug === pathWithoutSlash)

  // Si es una página de dibujo, permitir que la ruta [slug] la maneje
  if (isDrawingPage) {
    console.log(`[Middleware] Ruta de dibujo detectada: ${path}`)
    return NextResponse.next()
  }

  // Para otras rutas, verificar si existe un archivo de página estática
  // Si no existe, dejar que el sistema maneje el 404
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Excluir archivos estáticos y API routes
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}


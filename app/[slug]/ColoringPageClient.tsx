"use client"

import { useState, useRef } from "react"
import { coloringPages } from "@/data/coloring-pages"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PrintView from "@/components/print-view"
import ImageView from "@/components/image-view"
import SimpleColoringView from "@/components/simple-coloring-view"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ColoringSidebar from "@/components/coloring-sidebar"

type Props = {
  slug: string
}

export default function ColoringPageClient({ slug }: Props) {
  // Buscar la página por slug
  const page = coloringPages.find((page) => page.slug === slug)
  const [activeTab, setActiveTab] = useState("colorear")
  const printFrameRef = useRef<HTMLIFrameElement | null>(null)

  if (!page) {
    console.error(`Page not found for slug: ${slug}`)
    return null // Cambiamos notFound() por return null para evitar errores en el cliente
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

  const isJpgImage =
    page.imageUrl.endsWith(".jpg") ||
    page.imageUrl.endsWith(".jpeg") ||
    page.imageUrl.includes("blob.vercel-storage.com")

  // Función para imprimir
  const handlePrint = () => {
    // Cambiar a la pestaña de imprimir y luego activar la impresión
    setActiveTab("imprimir")

    // Dar tiempo para que se cargue la vista de impresión
    setTimeout(() => {
      const printViewComponent = document.querySelector("[data-print-button]")
      if (printViewComponent) {
        ;(printViewComponent as HTMLButtonElement).click()
      }
    }, 300)
  }

  // Función para descargar
  const handleDownload = () => {
    // Cambiar a la pestaña de descargar
    setActiveTab("descargar")

    // Dar tiempo para que se cargue la vista de descarga
    setTimeout(() => {
      const downloadButton = document.querySelector("[data-download-button]")
      if (downloadButton) {
        ;(downloadButton as HTMLButtonElement).click()
      }
    }, 300)
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb y navegación */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Startseite
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href={`/kategorie/${page.categorySlug}`} className="hover:text-emerald-500 transition-colors">
              {categoryTranslations[page.categorySlug] || page.category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium truncate">{page.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contenido principal */}
            <div className="lg:flex-1">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">{page.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{page.description}</p>

                {/* H2 ocultos para SEO que corresponden a los tabs */}
                <div className="sr-only">
                  <h2>Ausmalen</h2>
                  <h2>Drucken</h2>
                  <h2>Herunterladen</h2>
                </div>

                <Tabs defaultValue="colorear" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-3 mb-8 bg-slate-100">
                    <TabsTrigger
                      value="colorear"
                      className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 text-base font-semibold"
                    >
                      Ausmalen
                    </TabsTrigger>
                    <TabsTrigger
                      value="imprimir"
                      className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 text-base font-semibold"
                    >
                      Drucken
                    </TabsTrigger>
                    <TabsTrigger
                      value="descargar"
                      className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-600 text-base font-semibold"
                    >
                      Herunterladen
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="colorear" className="mt-0">
                    <SimpleColoringView imageUrl={page.imageUrl} title={page.title} />
                  </TabsContent>

                  <TabsContent value="imprimir" className="mt-0">
                    <PrintView imageUrl={page.imageUrl} title={page.title} isJpgImage={isJpgImage} />
                  </TabsContent>

                  <TabsContent value="descargar" className="mt-0">
                    <ImageView imageUrl={page.imageUrl} title={page.title} />
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sección de dibujos relacionados */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="text-2xl font-bold mb-6 text-gray-900">Ähnliche Ausmalbilder</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {coloringPages
                    .filter((relatedPage) => relatedPage.category === page.category && relatedPage.id !== page.id)
                    .slice(0, 3)
                    .map((relatedPage) => (
                      <Link key={relatedPage.id} href={`/${relatedPage.slug}`} className="group">
                        <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200 transition-all group-hover:shadow-md group-hover:translate-y-[-3px] duration-300">
                          <div className="h-40 bg-white p-3 flex items-center justify-center border-b border-slate-100">
                            <img
                              src={relatedPage.thumbnailUrl || "/placeholder.svg"}
                              alt={relatedPage.title}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <div className="p-4">
                            <div className="font-medium text-gray-900 group-hover:text-emerald-500 transition-colors line-clamp-2">
                              {relatedPage.title}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 sidebar">
              <div className="lg:sticky lg:top-24">
                <ColoringSidebar
                  title={page.title}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  onPrint={handlePrint}
                  onDownload={handleDownload}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


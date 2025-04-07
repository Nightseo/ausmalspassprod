"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Printer, Facebook, Twitter } from "lucide-react"

type ColoringSidebarProps = {
  title: string
  activeTab: string
  onTabChange: (tab: string) => void
  onPrint: () => void
  onDownload: () => void
}

export default function ColoringSidebar({ title, activeTab, onTabChange, onPrint, onDownload }: ColoringSidebarProps) {
  // Función para compartir en redes sociales
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `Schau dir dieses Ausmalbild von ${title} an!`

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank")
  }

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      "_blank",
    )
  }

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`, "_blank")
  }

  const shareOnPinterest = () => {
    const description = encodeURIComponent(shareText)
    const url = encodeURIComponent(shareUrl)
    const imageUrl = encodeURIComponent(
      typeof window !== "undefined" ? window.location.origin + "/images/logo.png" : "",
    )
    window.open(
      `https://pinterest.com/pin/create/button/?url=${url}&media=${imageUrl}&description=${description}`,
      "_blank",
    )
  }

  const shareOnInstagram = () => {
    // Instagram no tiene una API directa para compartir, así que mostramos un mensaje
    alert("Um auf Instagram zu teilen, speichere das Bild und teile es über die Instagram-App.")
  }

  return (
    <div className="space-y-6">
      {/* Acciones principales */}
      <Card className="bg-white border-slate-200">
        <CardContent className="p-4">
          <div className="font-medium text-lg mb-4 text-slate-700">Aktionen</div>

          <div className="space-y-3">
            <Button
              variant={activeTab === "colorear" ? "default" : "outline"}
              className={`w-full justify-start ${
                activeTab === "colorear"
                  ? "bg-emerald-500 hover:bg-emerald-600"
                  : "border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
              onClick={() => onTabChange("colorear")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-2"
              >
                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                <circle cx="17" cy="7" r="5" />
              </svg>
              Ausmalen
            </Button>

            <Button
              variant={activeTab === "imprimir" ? "default" : "outline"}
              className={`w-full justify-start ${
                activeTab === "imprimir"
                  ? "bg-emerald-500 hover:bg-emerald-600"
                  : "border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
              onClick={() => onTabChange("imprimir")}
            >
              <Printer className="h-4 w-4 mr-2" />
              Drucken
            </Button>

            <Button
              variant={activeTab === "descargar" ? "default" : "outline"}
              className={`w-full justify-start ${
                activeTab === "descargar"
                  ? "bg-emerald-500 hover:bg-emerald-600"
                  : "border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
              onClick={() => onTabChange("descargar")}
            >
              <Download className="h-4 w-4 mr-2" />
              Herunterladen
            </Button>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="font-medium text-sm mb-3 text-slate-700">Schnellaktionen</div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="border-slate-200 text-slate-700 hover:bg-slate-100"
                onClick={onPrint}
              >
                <Printer className="h-4 w-4 mr-2" />
                Drucken
              </Button>

              <Button
                variant="outline"
                className="border-slate-200 text-slate-700 hover:bg-slate-100"
                onClick={onDownload}
              >
                <Download className="h-4 w-4 mr-2" />
                Herunterladen
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compartir en redes sociales */}
      <Card className="bg-white border-slate-200">
        <CardContent className="p-4">
          <div className="font-medium text-lg mb-4 text-slate-700">Teilen</div>

          <div className="flex justify-between items-center">
            <button
              className="p-2 text-[#1877F2] hover:bg-[#E7F3FF] rounded-full transition-colors"
              onClick={shareOnFacebook}
              title="Auf Facebook teilen"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </button>

            <button
              className="p-2 text-[#1DA1F2] hover:bg-[#E8F5FD] rounded-full transition-colors"
              onClick={shareOnTwitter}
              title="Auf Twitter teilen"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </button>

            <button
              className="p-2 text-[#25D366] hover:bg-[#E6F9EE] rounded-full transition-colors"
              onClick={shareOnWhatsApp}
              title="Über WhatsApp teilen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.646.075-.3-.15-1.267-.465-2.414-1.485-.893-.795-1.494-1.78-1.67-2.079-.174-.3-.019-.462.13-.61.136-.135.301-.353.451-.528.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.483.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="sr-only">WhatsApp</span>
            </button>

            <button
              className="p-2 text-[#E60023] hover:bg-[#FFF0F1] rounded-full transition-colors"
              onClick={shareOnPinterest}
              title="Auf Pinterest teilen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
              <span className="sr-only">Pinterest</span>
            </button>

            <button
              className="p-2 text-[#C13584] hover:bg-[#FCF0F6] rounded-full transition-colors"
              onClick={shareOnInstagram}
              title="Auf Instagram teilen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="sr-only">Instagram</span>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Información */}
      <Card className="bg-slate-50 border-slate-200">
        <CardContent className="p-4">
          <div className="font-medium text-emerald-700 mb-2">Tipp</div>
          <p className="text-sm text-slate-600">
            Du kannst deine fertigen Ausmalbilder speichern und mit Freunden teilen. Viel Spaß beim Ausmalen!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}


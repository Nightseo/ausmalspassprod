"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

type SimpleColoringViewProps = {
  imageUrl: string
  title: string
}

export default function SimpleColoringView({ imageUrl, title }: SimpleColoringViewProps) {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = imageUrl
    const extension = imageUrl.toLowerCase().endsWith(".svg") ? "svg" : "jpg"
    link.download = `${title.toLowerCase().replace(/\s+/g, "-")}.${extension}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col">
      <Card className="p-4 bg-white border-slate-200">
        <div className="flex justify-between mb-4">
          <div className="font-medium text-slate-700">Ausmalbild</div>
          <Button onClick={handleDownload} className="bg-emerald-500 hover:bg-emerald-600">
            <Download className="h-4 w-4 mr-2" />
            Herunterladen
          </Button>
        </div>

        <div
          className="border border-slate-200 rounded-lg overflow-hidden bg-white flex justify-center p-4"
          style={{ minHeight: "500px" }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="max-w-full max-h-[500px] object-contain"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </Card>

      <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
        <div className="text-sm font-medium mb-2 text-slate-700">Anleitung:</div>
        <ul className="text-sm space-y-1 list-disc pl-4 text-slate-600">
          <li>Drucke das Bild aus, um es auf Papier auszumalen</li>
          <li>Lade das Bild herunter, um es auf deinem Gerät zu speichern</li>
          <li>Teile dein fertiges Kunstwerk mit Freunden und Familie</li>
        </ul>
      </div>
    </div>
  )
}


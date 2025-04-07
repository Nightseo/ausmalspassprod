"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Printer } from "lucide-react"

type PrintViewProps = {
  imageUrl: string
  title: string
  isJpgImage?: boolean
}

export default function PrintView({ imageUrl, title, isJpgImage = false }: PrintViewProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const printFrameRef = useRef<HTMLIFrameElement>(null)

  // Fetch SVG content if not JPG
  useEffect(() => {
    if (!isJpgImage) {
      const fetchSvg = async () => {
        try {
          const response = await fetch(imageUrl)
          const svgText = await response.text()
          setSvgContent(svgText)
        } catch (error) {
          console.error("Error loading SVG:", error)
        }
      }

      fetchSvg()
    }
  }, [imageUrl, isJpgImage])

  // Modificar la función handlePrint para que imprima solo la imagen en formato A4
  const handlePrint = () => {
    if (!printFrameRef.current) return

    const iframe = printFrameRef.current
    const iframeWindow = iframe.contentWindow

    if (!iframeWindow) return

    // Create print document
    const printDocument = iframeWindow.document
    printDocument.open()

    // Different content for JPG vs SVG - simplificado para mostrar solo la imagen
    if (isJpgImage) {
      printDocument.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <style>
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            .print-container {
              max-width: 100%;
              max-height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .image-container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .image-container img {
              max-width: 100%;
              max-height: 100vh;
              object-fit: contain;
            }
            @media print {
              body {
                width: 100%;
                height: 100%;
              }
            }
          </style>
        </head>
        <body>
          <div class="print-container">
            <div class="image-container">
              <img src="${imageUrl}" alt="${title}" />
            </div>
          </div>
        </body>
      </html>
    `)
    } else if (svgContent) {
      printDocument.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <style>
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            .print-container {
              max-width: 100%;
              max-height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .svg-container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .svg-container svg {
              max-width: 100%;
              max-height: 100vh;
            }
            @media print {
              body {
                width: 100%;
                height: 100%;
              }
            }
          </style>
        </head>
        <body>
          <div class="print-container">
            <div class="svg-container">
              ${svgContent}
            </div>
          </div>
        </body>
      </html>
    `)
    } else {
      printDocument.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              font-family: sans-serif;
            }
          </style>
        </head>
        <body>
          <div>Bild wird geladen...</div>
        </body>
      </html>
      `)
    }

    printDocument.close()

    // Wait for images to load before printing
    setTimeout(() => {
      iframeWindow.focus()
      iframeWindow.print()
    }, 500)
  }

  return (
    <div className="flex flex-col">
      <Card className="p-4 bg-white border-slate-200 mb-6">
        <div className="flex justify-between mb-4">
          <div className="font-medium text-slate-700">Druckvorschau</div>
          <Button onClick={handlePrint} className="bg-emerald-500 hover:bg-emerald-600" data-print-button>
            <Printer className="h-4 w-4 mr-2" />
            Drucken
          </Button>
        </div>

        <div
          className="border border-slate-200 rounded-lg overflow-hidden bg-white flex justify-center p-4"
          style={{ minHeight: "500px" }}
        >
          {isJpgImage ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                className="max-w-full max-h-[500px] object-contain"
              />
            </div>
          ) : svgContent ? (
            <div dangerouslySetInnerHTML={{ __html: svgContent }} className="max-w-full max-h-full" />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-800">
              <p>Ausmalbild wird geladen...</p>
            </div>
          )}
        </div>
      </Card>

      <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-600 border border-slate-200">
        <div className="font-medium mb-2 text-slate-700">Tipps zum Drucken:</div>
        <ul className="space-y-1 list-disc pl-4">
          <li>Das Bild wird im A4-Format gedruckt</li>
          <li>Verwende dickeres Papier für bessere Ergebnisse</li>
          <li>Stelle deinen Drucker auf hohe Qualität ein</li>
          <li>Um Tinte zu sparen, verwende den "Entwurf" oder "Öko"-Modus</li>
        </ul>
      </div>

      {/* Hidden iframe for printing */}
      <iframe ref={printFrameRef} style={{ display: "none" }} title="Print Frame" />
    </div>
  )
}


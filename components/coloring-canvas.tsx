"use client"

import { useState, useRef, useEffect } from "react"

type ColoringCanvasProps = {
  svgUrl: string
  title: string
}

export default function ColoringCanvas({ svgUrl, title }: ColoringCanvasProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(svgUrl)
        const svgText = await response.text()
        setSvgContent(svgText)
      } catch (error) {
        console.error("Error loading SVG:", error)
      }
    }

    fetchSvg()
  }, [svgUrl])

  useEffect(() => {
    if (svgContent && canvasRef.current) {
      drawSvgOnCanvas(svgContent, canvasRef.current)
    }
  }, [svgContent])

  const drawSvgOnCanvas = (svgText: string, canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.src = "data:image/svg+xml;base64," + btoa(svgText)

    img.onload = () => {
      const width = img.width
      const height = img.height

      canvas.width = width
      canvas.height = height

      ctx.drawImage(img, 0, 0, width, height)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} className="border border-slate-300 bg-white" />
    </div>
  )
}


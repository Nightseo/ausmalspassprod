import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

// Esta página se mostrará automáticamente cuando Next.js devuelva un 404
export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
        Seite nicht gefunden
      </h1>
      <p className="text-lg text-slate-700 mb-8">Es tut uns leid, wir konnten die gesuchte Seite nicht finden.</p>
      
      <Link href="/">
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          <Home className="h-4 w-4 mr-2" />
          Zurück zur Startseite
        </Button>
      </Link>
    </div>
  )
}


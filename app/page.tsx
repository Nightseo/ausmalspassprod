import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Palette, Calendar, Shield, Users, Search, Download, Printer } from "lucide-react"
import { coloringPages } from "@/data/coloring-pages"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  // Agrupar páginas por categoría
  const pagesByCategory = coloringPages.reduce(
    (acc, page) => {
      if (!acc[page.categorySlug]) {
        acc[page.categorySlug] = []
      }
      acc[page.categorySlug].push(page)
      return acc
    },
    {} as Record<string, typeof coloringPages>,
  )

  // Traducción de categorías al alemán
  const categoryTranslations: Record<string, string> = {
    deportes: "Sport",
    animales: "Tiere",
    patrones: "Muster",
    naturaleza: "Natur",
    fantasia: "Fantasie",
  }

  // Ventajas de la plataforma
  const advantages = [
    {
      icon: <Check className="h-6 w-6 text-emerald-500" />,
      title: "100 % kostenlos",
      description: "Alle ausmalbilder sind völlig gratis – ohne Anmeldung, ohne Abo, ohne Haken.",
    },
    {
      icon: <Palette className="h-6 w-6 text-emerald-500" />,
      title: "Originale Motive",
      description: "Unsere Bilder sind selbst gezeichnet und exklusiv auf AusmalSpass.com verfügbar.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-emerald-500" />,
      title: "Wöchentliche Updates",
      description: "Jeden Freitag gibt es neue Motive – damit es nie langweilig wird.",
    },
    {
      icon: <Users className="h-6 w-6 text-emerald-500" />,
      title: "Erfahrung, der du vertrauen kannst",
      description:
        "Tausende zufriedene Nutzer besuchen unsere Seite jeden Monat und schätzen die liebevolle Gestaltung sowie die einfache Bedienung.",
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-500" />,
      title: "Sicher & werbefrei",
      description:
        "Deine Privatsphäre liegt uns am Herzen. Unsere Seite ist sicher, übersichtlich und ohne störende Werbung.",
    },
  ]

  // Características destacadas
  const features = [
    {
      icon: <Search className="h-10 w-10 text-emerald-500" />,
      title: "Einfach zu finden",
      description:
        "Durchsuche unsere Sammlung nach Kategorien oder nutze die Suchfunktion, um schnell das perfekte Ausmalbild zu finden.",
    },
    {
      icon: <Printer className="h-10 w-10 text-emerald-500" />,
      title: "Sofort ausdrucken",
      description: "Drucke deine Lieblingsmotive mit nur einem Klick aus und starte sofort mit dem Ausmalen.",
    },
    {
      icon: <Download className="h-10 w-10 text-emerald-500" />,
      title: "Herunterladen",
      description: "Speichere die Ausmalbilder auf deinem Gerät, um sie später offline zu verwenden.",
    },
  ]

  return (
    <main>
      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-b from-emerald-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-72 h-72 bg-emerald-100 rounded-full opacity-50"></div>
          <div className="absolute right-1/4 top-1/3 w-40 h-40 bg-emerald-100 rounded-full opacity-30"></div>
          <div className="absolute left-1/4 bottom-1/4 w-56 h-56 bg-emerald-100 rounded-full opacity-40"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-100 rounded-full opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
              Willkommen bei <span className="text-emerald-500">AusmalSpass</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-700 mb-8">
              Deine Quelle für ausmalbilder kostenlos
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Bei AusmalSpass dreht sich alles um eines: ausmalbilder kostenlos, in höchster Qualität und mit ganz viel
              Liebe gestaltet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                Ausmalbilder entdecken
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 text-lg py-6 px-8 rounded-full"
              >
                Kategorien ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Entdecke unsere Kategorien</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Finde das perfekte Ausmalbild in unseren sorgfältig kuratierten Kategorien
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Object.entries(pagesByCategory).map(([categorySlug, pages]) => (
              <Link key={categorySlug} href={`/kategorie/${categorySlug}`} className="group">
                <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group-hover:translate-y-[-5px] duration-300">
                  <div className="h-40 bg-white p-4 flex items-center justify-center border-b border-slate-100">
                    {pages[0] && (
                      <img
                        src={pages[0].thumbnailUrl || "/placeholder.svg"}
                        alt={categoryTranslations[categorySlug] || pages[0].category}
                        className="max-h-full max-w-full object-contain"
                      />
                    )}
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {categoryTranslations[categorySlug] || (pages[0] ? pages[0].category : "")}
                    </h3>
                    <p className="text-sm text-gray-500">{pages.length} Ausmalbilder</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/kategorien">
              <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50">
                Alle Kategorien ansehen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer Section with Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Was bietet AusmalSpass?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unsere Plattform ist randvoll mit ausmalbildern kostenlos, die direkt online entdeckt werden können.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:translate-y-[-5px] duration-300"
              >
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Wachsende Sammlung einzigartiger Zeichnungen</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Wir stellen dir eine wachsende Sammlung einzigartiger Zeichnungen zur Verfügung – sorgfältig gestaltet
                  von unserem kleinen, aber erfahrenen Kreativteam. Ob klassische Motive, fantasievolle Formen oder
                  saisonale Designs – wir bieten für jeden Geschmack etwas.
                </p>
                <p className="text-lg text-gray-700">
                  Die übersichtliche Navigation und klaren Kategorien helfen dir dabei, schnell dein neues Lieblingsbild
                  zu finden. Kein langes Suchen, keine versteckten Kosten – einfach loslegen und Spaß haben.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                {Object.entries(pagesByCategory)
                  .slice(0, 2)
                  .flatMap(([_, pages]) =>
                    pages.slice(0, 2).map((page) => (
                      <div
                        key={page.id}
                        className="bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="h-48 bg-white p-2 flex items-center justify-center">
                          <img
                            src={page.thumbnailUrl || "/placeholder.svg"}
                            alt={page.title}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-gray-900 truncate">{page.title}</h3>
                        </div>
                      </div>
                    )),
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Deine Vorteile auf einen Blick</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Warum AusmalSpass die beste Wahl für deine Ausmalbilder ist
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-100"
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-emerald-50 rounded-full">{advantage.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Coloring Pages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Neueste Ausmalbilder</h2>
              <p className="text-lg text-gray-600">Entdecke unsere neuesten Kreationen</p>
            </div>
            <Link href="/alle-ausmalbilder" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50">
                Alle anzeigen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coloringPages.slice(0, 4).map((page) => (
              <Link key={page.id} href={`/${page.slug}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm transition-all group-hover:shadow-md group-hover:translate-y-[-5px] duration-300">
                  <div className="relative h-56 bg-slate-50 flex justify-center items-center p-2 border-b border-slate-100">
                    <img
                      src={page.thumbnailUrl || "/placeholder.svg"}
                      alt={page.title}
                      className="max-h-full max-w-full object-contain"
                      style={{ display: "block" }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full">
                        {categoryTranslations[page.categorySlug] || page.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-emerald-500 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{page.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-500 font-medium group-hover:underline">Anzeigen</span>
                      <ArrowRight className="h-4 w-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Was unsere Nutzer sagen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tausende zufriedene Nutzer vertrauen AusmalSpass für ihre Ausmalbilder
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Die Ausmalbilder sind wunderschön und detailliert. Meine Kinder lieben es, damit zu malen. Vielen Dank
                für diese tolle kostenlose Ressource!"
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Sarah M.</div>
                <span className="mx-2 text-gray-400">•</span>
                <div className="text-sm text-gray-500">Mutter von zwei Kindern</div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Als Lehrer nutze ich AusmalSpass regelmäßig für meinen Unterricht. Die Vielfalt der Motive ist
                beeindruckend und die Qualität ist erstklassig."
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Thomas K.</div>
                <span className="mx-2 text-gray-400">•</span>
                <div className="text-sm text-gray-500">Grundschullehrer</div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Endlich eine Seite ohne nervige Werbung und versteckte Kosten. Die Ausmalbilder sind kreativ und
                originell. Ich komme immer wieder gerne zurück!"
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Lisa B.</div>
                <span className="mx-2 text-gray-400">•</span>
                <div className="text-sm text-gray-500">Hobby-Künstlerin</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Jetzt entdecken und kreativ werden!</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Warte nicht länger – tauche ein in die Welt von AusmalSpass und entdecke unsere riesige Auswahl an
            ausmalbildern kostenlos. Egal ob du nur kurz abschalten oder stundenlang kreativ sein möchtest – hier
            beginnt dein Malspaß.
          </p>
          <p className="text-xl font-medium mb-8">Viel Freude beim Ausmalen!</p>
          <Button className="bg-white text-emerald-500 hover:bg-slate-100 text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
            Ausmalbilder entdecken
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}


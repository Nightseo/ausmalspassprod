import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Palette, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AusmalSpass - Malvorlagen zum Ausdrucken und Ausmalen",
  description:
    "Kostenlose Malvorlagen zum Ausdrucken und Ausmalen. Entdecke unsere Sammlung von hochwertigen Ausmalbildern für Kinder und Erwachsene.",
  keywords: "ausmalbilder, malvorlagen, ausmalen, kostenlos, kinder, ausdrucken, bilder zum ausmalen",
  metadataBase: new URL("https://ausmalspass.com"),
  alternates: {
    canonical: "https://ausmalspass.com",
  },
  icons: {
    icon: '/images/ausmalspass-favicon.jpg',
    apple: '/images/ausmalspass-favicon.jpg',
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://ausmalspass.com",
    siteName: "AusmalSpass",
    title: "AusmalSpass - Malvorlagen zum Ausdrucken und Ausmalen",
    description:
      "Kostenlose Malvorlagen zum Ausdrucken und Ausmalen. Entdecke unsere Sammlung von hochwertigen Ausmalbildern für Kinder und Erwachsene.",
    images: [
      {
        url: "https://ausmalspass.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AusmalSpass - Malvorlagen zum Ausdrucken und Ausmalen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AusmalSpass - Malvorlagen zum Ausdrucken und Ausmalen",
    description:
      "Kostenlose Malvorlagen zum Ausdrucken und Ausmalen. Entdecke unsere Sammlung von hochwertigen Ausmalbildern für Kinder und Erwachsene.",
    images: ["https://ausmalspass.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "AusmalSpass Team" }],
  publisher: "AusmalSpass",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Schema JSON-LD para la página principal
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ausmalspass.com/#website",
    url: "https://ausmalspass.com",
    name: "AusmalSpass",
    description: "Kostenlose Malvorlagen zum Ausdrucken und Ausmalen",
    inLanguage: "de-DE",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://ausmalspass.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    ],
  }

  // Schema JSON-LD para la organización
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ausmalspass.com/#organization",
    name: "AusmalSpass",
    url: "https://ausmalspass.com",
    logo: {
      "@type": "ImageObject",
      url: "https://ausmalspass.com/images/logo.png",
      width: 180,
      height: 60,
    },
    sameAs: [
      "https://facebook.com/ausmalspass",
      "https://twitter.com/ausmalspass",
      "https://instagram.com/ausmalspass",
    ],
  }

  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/images/ausmalspass-favicon.jpg" />
        <link rel="apple-touch-icon" href="/images/ausmalspass-favicon.jpg" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className={cn(inter.className, "bg-slate-50 text-gray-900 antialiased")}>
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <header className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
              <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
                  <Palette className="h-7 w-7 text-emerald-500" />
                  <span className="font-bold text-xl md:text-2xl">AusmalSpass</span>
                </Link>

                <div className="flex items-center gap-4">
                  <Link href="/kategorien">
                    <Button variant="ghost" className="font-medium hover:text-emerald-600 hover:bg-emerald-50">
                      Kategorien
                    </Button>
                  </Link>

                  <Link href="/ueber-uns">
                    <Button className="font-medium bg-emerald-500 hover:bg-emerald-600 text-white hidden md:flex">
                      Über uns
                    </Button>
                  </Link>

                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menü</span>
                  </Button>
                </div>
              </div>
            </header>
            <div className="flex-grow">{children}</div>
            <footer className="border-t border-slate-200 py-12 bg-white">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <Link href="/" className="flex items-center gap-2 mb-4">
                      <Palette className="h-6 w-6 text-emerald-500" />
                      <span className="font-bold text-xl">AusmalSpass</span>
                    </Link>
                    <p className="text-gray-600 mb-4">Deine Quelle für kostenlose Ausmalbilder in höchster Qualität.</p>
                    <p className="text-gray-500 text-sm">
                      © {new Date().getFullYear()} AusmalSpass. Alle Rechte vorbehalten.
                    </p>
                  </div>

                  <div>
                    <div className="font-semibold text-lg mb-4">Schnelllinks</div>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/" className="text-gray-600 hover:text-emerald-500 transition-colors">
                          Startseite
                        </Link>
                      </li>
                      <li>
                        <Link href="/kategorien" className="text-gray-600 hover:text-emerald-500 transition-colors">
                          Kategorien
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/neue-ausmalbilder"
                          className="text-gray-600 hover:text-emerald-500 transition-colors"
                        >
                          Neue Ausmalbilder
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/beliebte-ausmalbilder"
                          className="text-gray-600 hover:text-emerald-500 transition-colors"
                        >
                          Beliebte Ausmalbilder
                        </Link>
                      </li>
                      <li>
                        <Link href="/ueber-uns" className="text-gray-600 hover:text-emerald-500 transition-colors">
                          Über uns
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-semibold text-lg mb-4">Kontakt</div>
                    <p className="text-gray-600 mb-2">Hast du Fragen oder Anregungen?</p>
                    <a
                      href="mailto:info@ausmalspass.com"
                      className="text-emerald-500 hover:text-emerald-600 transition-colors"
                    >
                      info@ausmalspass.com
                    </a>
                    <div className="mt-4 flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
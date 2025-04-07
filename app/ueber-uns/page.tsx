import Link from "next/link"
import { ChevronRight, Mail, Phone, Clock, MapPin, Heart, Shield, Palette, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Über uns - AusmalSpass",
  description:
    "Lerne das Team hinter AusmalSpass kennen. Erfahre mehr über unsere Mission, hochwertige Ausmalbilder kostenlos anzubieten.",
}

export default function UeberUnsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Startseite
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium truncate">Über uns</span>
          </div>
        </div>
      </div>

      {/* Hero Section - Mejorado */}
      <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-20 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full opacity-20 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100 rounded-full opacity-20 -ml-20 -mb-20"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white p-3 rounded-full shadow-sm mb-6">
              <Palette className="h-10 w-10 text-emerald-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Das Team hinter <span className="text-emerald-500">AusmalSpass</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Wir sind ein <strong>kreatives Team</strong> mit einer gemeinsamen Leidenschaft:
              <strong> hochwertige Ausmalbilder kostenlos</strong> für alle zugänglich zu machen.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white rounded-xl p-4 shadow-sm flex items-center border border-emerald-100 w-48">
                <div className="bg-emerald-50 p-2 rounded-full mr-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                </div>
                <div className="text-left">
                  <span className="block text-sm text-gray-500">Gegründet</span>
                  <strong className="text-gray-900">2020</strong>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm flex items-center border border-emerald-100 w-48">
                <div className="bg-emerald-50 p-2 rounded-full mr-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                </div>
                <div className="text-left">
                  <span className="block text-sm text-gray-500">Ausmalbilder</span>
                  <strong className="text-gray-900">100+</strong>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm flex items-center border border-emerald-100 w-48">
                <div className="bg-emerald-50 p-2 rounded-full mr-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                </div>
                <div className="text-left">
                  <span className="block text-sm text-gray-500">Nutzer</span>
                  <strong className="text-gray-900">10.000+</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Our Story Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <Heart className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Unsere Geschichte</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                AusmalSpass.com ist aus dem Wunsch entstanden, eine{" "}
                <strong>verlässliche und liebevoll gestaltete Plattform</strong> für ausmalbilder kostenlos zu schaffen
                – <strong>ohne Werbung, ohne versteckte Kosten, ohne Kompromisse</strong>.
              </p>
              <p className="mb-4">
                Unsere Illustrator*innen bringen <strong>langjährige Erfahrung</strong> in der Gestaltung von
                fantasievollen und hochwertigen Ausmalmotiven mit. Jedes einzelne Bild entsteht in{" "}
                <strong>echter Handarbeit</strong> – digital umgesetzt, aber mit einem persönlichen Touch.
              </p>
            </div>

            {/* Team Image with Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-100 rounded-xl overflow-hidden">
                <div className="aspect-[1/1] flex items-center justify-center">
                  <div className="text-center p-4">
                    <Palette className="h-10 w-10 text-emerald-400 mx-auto mb-2 opacity-50" />
                    <p className="text-slate-500 text-sm font-medium">Kreatives Zeichnen</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 rounded-xl overflow-hidden">
                <div className="aspect-[1/1] flex items-center justify-center">
                  <div className="text-center p-4">
                    <Palette className="h-10 w-10 text-emerald-400 mx-auto mb-2 opacity-50" />
                    <p className="text-slate-500 text-sm font-medium">Digitale Bearbeitung</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 rounded-xl overflow-hidden">
                <div className="aspect-[1/1] flex items-center justify-center">
                  <div className="text-center p-4">
                    <Palette className="h-10 w-10 text-emerald-400 mx-auto mb-2 opacity-50" />
                    <p className="text-slate-500 text-sm font-medium">Qualitätskontrolle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Palette className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Unsere Mission</h2>
              </div>

              <p className="text-gray-700 mb-6">
                Unser Ziel ist es, eine <strong>vertrauenswürdige und inspirierende Quelle</strong> für ausmalbilder
                kostenlos zu sein.
              </p>

              <ul className="space-y-4">
                <li className="flex">
                  <div className="bg-emerald-50 p-2 rounded-full mr-3 flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-1">Qualität statt Masse</span>
                    <span className="text-gray-600 text-sm">
                      Alle Inhalte sind original, selbst erstellt und urheberrechtsfrei
                    </span>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-emerald-50 p-2 rounded-full mr-3 flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-1">Wöchentliche Updates</span>
                    <span className="text-gray-600 text-sm">
                      Neue Bilder jede Woche, damit du immer etwas Neues entdecken kannst
                    </span>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-emerald-50 p-2 rounded-full mr-3 flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-1">Zugänglichkeit für alle</span>
                    <span className="text-gray-600 text-sm">Für Eltern, Lehrer*innen und alle Fans vom Ausmalen</span>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-emerald-50 p-2 rounded-full mr-3 flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-1">Sicher & werbefrei</span>
                    <span className="text-gray-600 text-sm">Keine Cookies, keine Banner – nur Malspaß pur</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Warum uns vertrauen?</h2>
              </div>

              <p className="text-gray-700 mb-6">
                <strong>Mehrere zehntausend Nutzer*innen</strong> vertrauen bereits Monat für Monat auf AusmalSpass.com.
                Viele von ihnen kommen regelmäßig zurück – weil sie wissen, dass sie bei uns ausmalbilder kostenlos
                finden, die <strong>nicht nur schön, sondern auch legal und sicher nutzbar</strong> sind.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-600 font-bold text-lg">10K+</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Zufriedene Nutzer</h3>
                    <p className="text-sm text-gray-600">Monatlich aktive Besucher</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-600 font-bold text-lg">100+</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Ausmalbilder</h3>
                    <p className="text-sm text-gray-600">Und wöchentlich werden es mehr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section with Real Map */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Wo wir arbeiten</h2>
            </div>

            <p className="text-gray-700 mb-6">
              Unser kleines Studio befindet sich in der <strong>charmanten Stadt Freiburg im Breisgau</strong>, im
              Südwesten Deutschlands.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-gray-900 mb-4">Kontaktinformationen</h3>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-gray-900">AusmalSpass.com</span>
                      <span className="block text-gray-600">Hauptstraße 142</span>
                      <span className="block text-gray-600">79104 Freiburg im Breisgau</span>
                      <span className="block text-gray-600">Deutschland</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <a href="mailto:info@ausmalspass.com" className="text-emerald-600 hover:underline font-bold">
                      info@ausmalspass.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-900 font-bold">+49 761 12345678</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-gray-900">Bürozeiten:</span>
                      <span className="block text-gray-600">Montag bis Freitag</span>
                      <span className="block text-gray-600">9:00 – 17:00 Uhr</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Real Google Maps iframe */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43015.47739581773!2d7.809663071889133!3d47.99502291542184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911b26560bd665%3A0x41f6bb7a5df57b0!2sFreiburg%20im%20Breisgau%2C%20Germany!5e0!3m2!1sen!2sus!4v1712432592985!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Freiburg im Breisgau Map"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-600 italic bg-slate-50 p-4 rounded-lg border border-slate-100">
              <p>
                <strong>Bitte beachte:</strong> Da wir eine digitale Plattform sind, empfangen wir keine Besucher vor
                Ort. Für Fragen, Feedback oder Anregungen erreichst du uns jederzeit per E-Mail oder telefonisch während
                der Bürozeiten.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-100 shadow-sm">
            <div className="inline-block bg-white p-3 rounded-full shadow-sm mb-4">
              <Heart className="h-8 w-8 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Danke, dass du da bist!</h2>
            <p className="text-emerald-700 mb-6 max-w-2xl mx-auto">
              Unser Team steht hinter jedem einzelnen Motiv – mit{" "}
              <strong>Begeisterung, Sorgfalt und dem Anspruch</strong>, dir ein sicheres und inspirierendes
              Online-Erlebnis zu bieten.
            </p>
            <Link href="/">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-bold shadow-sm">
                Ausmalbilder entdecken
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


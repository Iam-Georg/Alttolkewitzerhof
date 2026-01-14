import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const APPLE_MAPS_URL = "https://maps.apple.com/?q=Alttolkewitz+7+01279+Dresden&ll=51.0316896,13.8302079"
const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Alttolkewitz+7,+01279+Dresden"

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <span className="text-accent text-lg tracking-widest uppercase">Kontakt</span>
            <h1 className="text-4xl md:text-5xl font-semibold mt-4 mb-6 text-primary">Wir freuen uns auf Sie</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie eine Reservierung vornehmen? Kontaktieren Sie uns!
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold mb-8 text-primary">Kontaktinformationen</h2>

                <div className="grid grid-cols-1 xl:grid-cols-2 space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10  flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        <span className="text-sm font-bold">Hotel & Restaurant Alttolkewitzer Hof</span>
                        <br />
                        Alttolkewitz 7<br />
                        01279 Dresden
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Telefon</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+4935121767930" className="hover:text-accent transition-colors">
                          +49 351 217 679 30
                        </a>
                      </p>
                      <p className="text-muted-foreground text-sm">Fax: +49 351 217 679 32</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">E-Mail</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@alttolkewitzerhof.de" className="hover:text-accent transition-colors">
                          info@alttolkewitzerhof.de
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Restaurant Öffnungszeiten</h3>
                      <p className="text-muted-foreground text-sm">
                        Mo–Do: 15:00–21:00 Uhr
                        <br />
                        Fr–Sa: 12:00–22:00 Uhr
                        <br />
                        So: 12:00–21:00 Uhr
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.5909290967255!2d13.830328467025979!3d51.03173904644751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709c8788c4afc85%3A0x64c08a42d720d9db!2sAlttolkewitzer%20Hof!5e1!3m2!1sde!2sde!4v1767631853860!5m2!1sde!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps - Standort Alttolkewitzer Hof"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Google Maps
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent">
                    <a
                      href={APPLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      Apple Karten
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold mb-8 text-primary">Nachricht senden</h2>

                <form className="space-y-6 bg-card p-8 rounded-lg border border-border">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">E-Mail *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">Betreff</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Worum geht es?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">Nachricht *</label>
                    <textarea
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-2.75 w-4 h-4 border-2 checked-background hover:scale-110" id="datenschutz" />
                    <label htmlFor="datenschutz" className="text-sm text-muted-foreground">
                      Mit der Nutzung dieses Formulars erkläre ich mich mit der Speicherung und Verarbeitung meiner
                      Daten einverstanden.{" "}
                      <br></br>
                      <a href="/datenschutz" className="text-accent hover:underline">
                        Datenschutzerklärung »
                      </a>
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Nachricht senden
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an info@alttolkewitzerhof.de
                  widerrufen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

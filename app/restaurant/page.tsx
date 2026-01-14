import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Clock, Users, Trees as Tree, Tent } from "lucide-react"

export default function RestaurantPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img
            src="/placeholder.svg?height=600&width=1920"
            alt="Restaurant Alttolkewitzer Hof"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
            <div>
              <span className="text-lg tracking-widest uppercase mb-4 block">Unser Restaurant</span>
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">Frische und moderne Küche</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Regionale Klassiker und moderne Kochkunst in gemütlicher Atmosphäre
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-accent text-lg tracking-widest uppercase">Kulinarik</span>
                <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6 text-primary">Genuss für jeden Gaumen</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Unser gemütliches Restaurant befindet sich im Haupthaus und verwöhnt Ihren Gaumen täglich mit frisch
                  zubereiteten Köstlichkeiten der modernen Kochkunst, ohne die leckeren Klassiker der regionalen Küche
                  aus den Augen zu verlieren.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Gern begrüßen wir Sie für Ihre Veranstaltung auch nach Absprache außerhalb unserer Öffnungszeiten.
                </p>

                {/* Opening Hours */}
                <div className="bg-secondary p-6 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-accent" />
                    <h3 className="font-semibold text-lg lg:text-xl text-primary">Öffnungszeiten (ab 1.3.2025)</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground text-sm lg:text-lg">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">Montag – Donnerstag</span>
                      <span>15:00 – 21:00 Uhr</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">Freitag – Samstag</span>
                      <span>12:00 – 22:00 Uhr</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">Sonntag</span>
                      <span>12:00 – 21:00 Uhr</span>
                    </div>
                    <p className="text-sm pt-2">
                      <strong>Küchenschluss:</strong> 1 Stunde vor Ladenschluss
                    </p>
                    <div className="mt-4 pt-4 border-t border-border text-sm">
                      <p>
                        <strong>24.12.2025 (Heiligabend):</strong> geschlossen
                      </p>
                      <p>
                        <strong>25. & 26.12.2025:</strong> 11–15 Uhr und 16–20 Uhr
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="/speisekarte">Speisekarte</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="#reservierung">Tisch reservieren</a>
                  </Button>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Sauerbraten"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Zander"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Schnitzel"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Spare Ribs"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Salon Elbblick */}
        <section className="py-20 bg-secondary" id="salon">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Salon Elbblick"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Feier im Salon"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Geschäftsessen"
                  className="rounded-lg w-full h-48 object-cover col-span-2"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-accent" />
                  <span className="text-accent text-lg tracking-widest uppercase">Separee</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">Salon Elbblick</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Für Feierlichkeiten bis 30 Personen können wir Ihnen unseren Salon Elbblick empfehlen. Gern bieten wir
                  Ihnen hier individuelle Menüs oder Buffets an.
                </p>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent" />
                    Bis zu 30 Personen
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent" />
                    Flachbildschirm verfügbar
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent" />
                    Kleine Musikanlage
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent" />
                    Individuelle Menüs oder Buffets
                  </li>
                </ul>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href="/kontakt">Anfrage senden</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Garden */}
        <section className="py-20 bg-background" id="garten">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Tree className="h-6 w-6 text-accent" />
                  <span className="text-accent text-lg tracking-widest uppercase">Biergarten</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">Gartenanlage</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Geben Sie sich dem entspannten Nichtstun hin und genießen Sie im Schatten jahrhundertealter Bäume ein
                  frisch gezapftes, kühles Blondes oder einen erlesenen Wein.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Lassen Sie Ihren Blick über die saftigen Auen und den Wachwitzer Elbhang zum Fernsehturm schweifen –
                  ein perfekter Ort für entspannte Stunden.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Gartenanlage"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Terrasse"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Abendstimmung"
                  className="rounded-lg w-full h-48 object-cover col-span-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Festzelt */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  //src="/img/20200711_211407-250x250.jpg"
                  alt="Festzelt"
                  className="rounded-lg w-full shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Tent className="h-6 w-6 text-primary-foreground/80" />
                  <span className="text-primary-foreground/80 text-lg tracking-widest uppercase">Events</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Feiern im exklusiven Festzelt</h2>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  Sollten Sie mit bis zu 60 Gästen feiern wollen, steht ein exklusives beheizbares Festzelt für Sie
                  bereit – perfekt für Hochzeiten, Geburtstage und besondere Anlässe.
                </p>
                <Button asChild variant="secondary">
                  <a href="/feiern">Mehr erfahren</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation Form Placeholder */}
        <section className="py-20 bg-secondary" id="reservierung">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="text-center mb-12">
              <span className="text-accent text-lg tracking-widest uppercase">Reservierung</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6 text-primary">Tisch reservieren</h2>
              <p className="text-muted-foreground">
                Reservieren Sie Ihren Tisch bequem online oder telefonisch unter +49 351 217 679 30
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">E-Mail *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">Datum *</label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">Uhrzeit *</label>
                    <input
                      type="time"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">Personen *</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Personen</option>
                      <option value="3">3 Personen</option>
                      <option value="4">4 Personen</option>
                      <option value="5">5 Personen</option>
                      <option value="6">6+ Personen</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">Anlass</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer pr-10">
                      <option value="">Bitte wählen</option>
                      <option value="romantic">Romantisches Essen</option>
                      <option value="business">Geschäftsessen</option>
                      <option value="birthday">Geburtstag</option>
                      <option value="other">Sonstiges</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">Nachricht</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Besondere Wünsche oder Anmerkungen..."
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 cursor-pointer text-accent-foreground">
                  Reservierung anfragen
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Wifi, Tv, Wine, Wind, Phone, Bike, PawPrint, Car } from "lucide-react"

const rooms = [
  {
    name: "Einzelzimmer",
    description: "Gemütliches Zimmer für Alleinreisende im Landhausstil.",
    image: "cozy single hotel room German country style warm lighting comfortable bed",
  },
  {
    name: "Doppelzimmer",
    description: "Geschmackvoll eingerichtetes Zimmer für zwei Personen.",
    image: "elegant double hotel room German Landhaus style wooden furniture large bed",
  },
  {
    name: "Familienzimmer",
    description: "Geräumiges Zimmer für die ganze Familie.",
    image: "spacious family hotel room German country style multiple beds comfortable",
  },
  {
    name: "Maisonette",
    description: "Zweistöckiges Zimmer mit besonderem Charme.",
    image: "charming maisonette hotel room two floors German country style unique design",
  },
]

const amenities = [
  { icon: Tv, label: "Fernseher", description: "Flachbildfernseher in jedem Zimmer" },
  { icon: Phone, label: "Telefon", description: "Direktwahl-Telefon" },
  { icon: Wine, label: "Minibar", description: "Gut gefüllte Minibar" },
  { icon: Wifi, label: "WLAN", description: "Kostenloses WLAN" },
  { icon: Wind, label: "Klimaanlage", description: "In ausgewählten Zimmern" },
]

export default function HotelPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img
            src="/placeholder.svg?height=600&width=1920"
            alt="Hotel Alttolkewitzer Hof"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
            <div>
              <span className="text-lg tracking-widest uppercase mb-4 block">Unser Hotel</span>
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">Komfort im Landhausstil</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Geschmackvoll eingerichtete Zimmer laden zum Wohlfühlen und Entspannen ein
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent text-lg tracking-widest uppercase">Geschichte</span>
                <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6 text-primary">
                  Denkmalgeschützte Substanz mit Charme
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In den Jahren 1990 bis 1994 wurde die Anlage nach historischen Vorlagen zum Hotel und Restaurant
                  ausgebaut und umgestaltet. Der besondere Charme des Anwesens ergibt sich nicht nur aus der Bewahrung
                  der denkmalgeschützten Substanz, sondern auch aus der zauberhaften Umgebung.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  An das historische Haupthaus mit Restaurant und das neu erbaute Hotel schließt sich ein wunderschöner
                  Gästegarten mit uraltem Baumbestand an, von dem aus Sie den Blick auf die Elbwiesen und -hänge
                  genießen können. Ein perfekter Platz um seinen Gedanken freien Lauf zu lassen.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Historisches Haupthaus"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-accent text-lg tracking-widest uppercase">Zimmer</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6 text-primary">Unsere Unterkünfte</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {rooms.map((room) => (
                <div key={room.name} className="bg-card rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(room.image)}`}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-primary">{room.name}</h3>
                    <p className="text-muted-foreground">{room.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Zimmerausstattung</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {amenities.map((amenity) => (
                  <div key={amenity.label} className="text-center">
                    <div className="w-14 h-14 bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <amenity.icon className="h-7 w-7 text-accent" />
                    </div>
                    <p className="font-medium text-primary">{amenity.label}</p>
                    <p className="text-sm text-muted-foreground">{amenity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-accent text-lg tracking-widest uppercase">Services</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6 text-primary">Zusätzliche Leistungen</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bicycle Rental */}
              <div className="bg-card p-8 rounded-lg border border-border" id="fahrrad">
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center mb-6">
                  <Bike className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Fahrradvermietung</h3>
                <p className="text-muted-foreground mb-4">
                  Für Fahrradtouren auf dem Elberadweg z. B. nach Dresden, Schloss Pillnitz oder in die Sächsische
                  Schweiz bieten wir unseren Gästen von Jung bis Alt Fahrräder zur Tagespauschale von 14,00 €.
                </p>
                <p className="text-accent font-semibold">14,00 € pro Tag</p>
              </div>

              {/* Pets */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center mb-6">
                  <PawPrint className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Haustiere</h3>
                <p className="text-muted-foreground mb-4">
                  Es ist erlaubt Haustiere mit in unser Hotel zu bringen. Bitte melden Sie dies vorher an. Wir berechnen
                  einen Aufschlag für unsere Hygienestandards.
                </p>
                <p className="text-accent font-semibold">15,00 € pro Tier/Nacht</p>
              </div>

              {/* E-Bike Charging */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center mb-6">
                  <Car className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Fahrrad-Unterstellung</h3>
                <p className="text-muted-foreground mb-4">
                  Benötigen Sie eine Unterstellmöglichkeit für Ihren Drahtesel? Sprechen Sie uns einfach an. E-Bike
                  Akkus können gegen Gebühr geladen werden.
                </p>
                <p className="text-accent font-semibold">Akku-Laden: 3,00 € pro Tag</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Reservieren Sie direkt und erhalten Sie die günstigsten Konditionen!
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Angenehm natürlich und doch mittendrin – Ihr Hotel am Elberadweg.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <a
                href="https://app.mews.com/distributor/275fe8d0-0c02-4602-aba7-b36f011bf606"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jetzt online buchen
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

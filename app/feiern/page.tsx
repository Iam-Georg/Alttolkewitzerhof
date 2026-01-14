import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Tent, UtensilsCrossed, Heart, Building, Flower2 } from "lucide-react"

const eventSpaces = [
  {
    name: "Salon Elbblick",
    capacity: "bis 30 Gäste",
    icon: Heart,
    description:
      "Unser separater Salon mit Blick auf die Elbe eignet sich perfekt für intime Feiern, Geburtstage oder Geschäftsessen.",
    features: ["Flachbildschirm", "Musikanlage", "Individuelle Menüs", "Separate Atmosphäre"],
    image: "elegant private dining room river view celebration dinner German restaurant",
  },
  {
    name: "Exklusives Festzelt",
    capacity: "bis 60 Gäste",
    icon: Tent,
    description:
      "Unser beheizbares Festzelt in der Gartenanlage bietet den perfekten Rahmen für größere Feierlichkeiten.",
    features: ["Beheizbar", "Im Garten gelegen", "Flexible Bestuhlung", "Romantische Atmosphäre"],
    image: "beautiful heated marquee tent wedding garden party evening lights",
  },
  {
    name: "Restaurant",
    capacity: "Flexibel",
    icon: UtensilsCrossed,
    description:
      "Unser gemütliches Restaurant kann auch außerhalb der Öffnungszeiten für Ihre Veranstaltung reserviert werden.",
    features: ["Gemütliches Ambiente", "Nach Absprache verfügbar", "Regionale Küche", "Individuelle Gestaltung"],
    image: "cozy German restaurant interior celebration dinner wooden tables",
  },
]

const occasions = [
  { name: "Hochzeiten", icon: Heart },
  { name: "Geburtstage", icon: Users },
  { name: "Firmenfeiern", icon: Building },
  { name: "Trauerfeiern", icon: Flower2 },
]

export default function FeiernPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img
            src="/placeholder.svg?height=600&width=1920"
            alt="Feiern im Alttolkewitzer Hof"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
            <div>
              <span className="text-lg tracking-widest uppercase mb-4 block">Events</span>
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">Feiern im Alttolkewitzer Hof</h1>
              <p className="text-xl max-w-2xl mx-auto">Der perfekte Rahmen für Ihre besonderen Anlässe</p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <span className="text-accent text-lg tracking-widest uppercase">Ihr Anlass</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6 text-primary">Unvergessliche Momente</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ob Hochzeit, Familienfeier, Firmenveranstaltung oder Trauerfeier – wir bieten Ihnen den passenden Rahmen
              für jeden Anlass. Mit individuellen Menüs oder Buffets, aufmerksamer Betreuung und unserer einzigartigen
              Atmosphäre am Elbufer.
            </p>
          </div>
        </section>

        {/* Occasions */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-6">
              {occasions.map((occasion) => (
                <div key={occasion.name} className="flex items-center gap-3 bg-card px-6 py-4  shadow-sm">
                  <occasion.icon className="h-5 w-5 text-accent" />
                  <span className="font-medium text-primary">{occasion.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Spaces */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-accent text-lg tracking-widest uppercase">Räumlichkeiten</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6 text-primary">Unsere Veranstaltungsräume</h2>
            </div>

            <div className="space-y-16">
              {eventSpaces.map((space, index) => (
                <div
                  key={space.name}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <space.icon className="h-6 w-6 text-accent" />
                      <span className="text-accent font-medium">{space.capacity}</span>
                    </div>
                    <h3 className="text-3xl font-semibold mb-4 text-primary">{space.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{space.description}</p>
                    <ul className="grid grid-cols-2 gap-3 mb-8">
                      {space.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-2 h-2 bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a href="/kontakt">Anfrage senden</a>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <img
                      src={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(space.image)}`}
                      alt={space.name}
                      className="rounded-lg shadow-xl w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Catering Info */}
        <section className="py-20 bg-primary text-primary-foreground" id="festzelt">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary-foreground/70 text-lg tracking-widest uppercase">Service</span>
                <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">Individuelle Betreuung</h2>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  Unser erfahrenes Team berät Sie gerne bei der Planung Ihrer Veranstaltung. Wir erstellen für Sie
                  individuelle Menüs oder Buffets, abgestimmt auf Ihre Wünsche und die Anzahl Ihrer Gäste.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-primary-foreground/80">
                    <span className="w-2 h-2 bg-primary-foreground/60" />
                    Persönliche Beratung
                  </li>
                  <li className="flex items-center gap-3 text-primary-foreground/80">
                    <span className="w-2 h-2 bg-primary-foreground/60" />
                    Individuelle Menügestaltung
                  </li>
                  <li className="flex items-center gap-3 text-primary-foreground/80">
                    <span className="w-2 h-2 bg-primary-foreground/60" />
                    Flexible Raumgestaltung
                  </li>
                  <li className="flex items-center gap-3 text-primary-foreground/80">
                    <span className="w-2 h-2 bg-primary-foreground/60" />
                    Catering-Service
                  </li>
                </ul>
                <Button asChild variant="secondary">
                  <a href="/kontakt">Jetzt anfragen</a>
                </Button>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Catering Service"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">Planen Sie Ihre Feier</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir freuen uns darauf, Ihre Veranstaltung
              zu einem unvergesslichen Erlebnis zu machen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="/kontakt">Kontakt aufnehmen</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+4935121767930">+49 351 217 679 30</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

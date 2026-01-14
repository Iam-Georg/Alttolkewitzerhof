import { HandDrawnCircle, StarBurst } from "./decorative-elements"

const eventSpaces = [
  {
    name: "Salon Elbblick",
    capacity: "bis 30 Gäste",
    description: "Individuelle Menüs oder Buffets mit Flachbildschirm und Musikanlage",
    image: "elegant private dining room Dresden hotel celebration event space warm lighting",
  },
  {
    name: "Festzelt",
    capacity: "bis 60 Gäste",
    description: "Beheizbares Festzelt für größere Feiern in unserer Gartenanlage",
    image: "beautiful party tent garden celebration wedding venue Dresden elegant",
  },
  {
    name: "Restaurant",
    capacity: "Flexibel",
    description: "Auch außerhalb der Öffnungszeiten für Ihre Veranstaltung verfügbar",
    image: "German restaurant private event celebration dinner party Dresden",
  },
]

export function EventsPreview() {
  return (
    <section className="py-24 md:py-32 bg-secondary relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-2">
            <div className="flex items-center gap-3 md:flex-col md:items-start">
              <span
                className="text-4xl md:text-6xl font-light text-border"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                04
              </span>
              <div className="w-12 h-px md:w-px md:h-12 bg-border" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <p className="text-accent text-lg mb-3" style={{ fontFamily: "var(--font-caveat)" }}>
              Für besondere Momente
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight md:leading-[0.95]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Feiern & <span className="italic">Events</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl" style={{ fontFamily: "var(--font-inter)" }}>
              Ob Hochzeit, Familienfeier, Firmenveranstaltung oder Trauerfeier – wir bieten Ihnen den passenden Rahmen
              für jeden Anlass.
            </p>
          </div>
        </div>

        {/* Event Spaces - Creative Cards */}
        <div className="grid grid-cols-12 gap-6">
          {eventSpaces.map((space, index) => (
            <div
              key={space.name}
              className={`relative group ${index === 0
                  ? "col-span-12 md:col-span-6 lg:col-span-5"
                  : index === 1
                    ? "col-span-12 md:col-span-6 lg:col-span-4"
                    : "col-span-12 lg:col-span-3"
                }`}
            >
              <div className="relative overflow-hidden bg-card h-full">
                <img
                  src={`/placeholder.svg?height=400&width=500&query=${encodeURIComponent(space.image)}`}
                  alt={space.name}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${index === 2 ? "h-[250px] lg:h-full" : "h-[300px] md:h-[350px]"
                    }`}
                />

                {/* Capacity Badge */}
                <div
                  className="absolute top-4 right-4 bg-white text-primary px-4 py-2 text-sm font-medium"
                  style={{
                    transform: "rotate(3deg)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {space.capacity}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    {space.name}
                  </h3>
                  <p className="text-white/80 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                    {space.description}
                  </p>
                </div>

                {/* Hover Decoration */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <HandDrawnCircle className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/feiern"
            className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-5 hover:bg-accent transition-colors duration-300"
          >
            <span className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
              Alle Möglichkeiten entdecken
            </span>
            <StarBurst className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

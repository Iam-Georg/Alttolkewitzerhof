import { HandDrawnArrow, StarBurst } from "./decorative-elements"

const rooms = [
  {
    name: "Einzelzimmer",
    description: "Gemütlicher Rückzugsort",
    image: "cozy single hotel room German country style warm wooden furniture soft lighting Dresden",
  },
  {
    name: "Doppelzimmer",
    description: "Klassischer Komfort",
    image: "elegant double hotel room German Landhaus style warm colors Dresden hotel comfortable bed",
  },
  {
    name: "Familienzimmer",
    description: "Raum für alle",
    image: "spacious family hotel room German country style multiple beds Dresden hotel bright",
  },
  {
    name: "Maisonette",
    description: "Besonderes Erlebnis",
    image: "charming maisonette hotel suite two floors German country style Dresden luxury",
  },
]

export function RoomsPreview() {
  return (
    <section className="py-24 md:py-32 bg-secondary relative">
      {/* Section Number */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-2">
            <div className="flex items-center gap-3 md:flex-col md:items-start">
              <span
                className="text-4xl md:text-6xl font-light text-border"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                02
              </span>
              <div className="w-12 h-px md:w-px md:h-12 bg-border" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-6">
            <p className="text-accent text-lg mb-3" style={{ fontFamily: "var(--font-caveat)" }}>
              Übernachten mit Charme
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight md:leading-[0.95]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Unsere <span className="italic">Zimmer</span>
            </h2>
          </div>
        </div>

        {/* Rooms Grid - Asymmetric Masonry Style */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className={`relative group cursor-pointer ${index === 0
                ? "col-span-12 md:col-span-6 lg:col-span-5"
                : index === 1
                  ? "col-span-12 md:col-span-6 lg:col-span-7"
                  : index === 2
                    ? "col-span-12 md:col-span-7 lg:col-span-7"
                    : "col-span-12 md:col-span-5 lg:col-span-5"
                }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={`/placeholder.svg?height=500&width=700&query=${encodeURIComponent(room.image)}`}
                  //src="/img/Logo.png"
                  alt={room.name}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${index % 2 === 0 ? "h-[350px] md:h-[400px]" : "h-[300px] md:h-[350px]"
                    }`}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white/70 text-sm mb-1" style={{ fontFamily: "var(--font-caveat)" }}>
                    {room.description}
                  </p>
                  <h3 className="text-white text-2xl md:text-3xl" style={{ fontFamily: "var(--font-playfair)" }}>
                    {room.name}
                  </h3>
                </div>

                {/* Decorative Corner on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <StarBurst className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-card border border-border">
          <div>
            <p className="text-muted-foreground text-lg mb-2" style={{ fontFamily: "var(--font-inter)" }}>
              Direkt buchen und beste Preise sichern
            </p>
            <p className="text-accent text-xl" style={{ fontFamily: "var(--font-caveat)" }}>
              Frühstück inklusive!
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://app.mews.com/distributor/275fe8d0-0c02-4602-aba7-b36f011bf606"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 hover:bg-accent transition-colors duration-300"
            >
              <span className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                Online buchen
              </span>
              <HandDrawnArrow className="w-8 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/hotel"
              className="inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <span className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                Alle Details
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

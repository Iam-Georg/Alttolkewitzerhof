import { HandDrawnArrow } from "./decorative-elements"

const attractions = [
  { name: "Dresdner Altstadt", distance: "15 min", image: "Dresden Frauenkirche baroque old town panorama" },
  { name: "Schloss Pillnitz", distance: "10 min", image: "Pillnitz Castle garden park Dresden baroque" },
  { name: "Bastei", distance: "40 min", image: "Bastei bridge Saxon Switzerland rocks panorama" },
  { name: "Königstein", distance: "45 min", image: "Königstein Fortress Saxon Switzerland hilltop" },
]

const APPLE_MAPS_URL = "https://maps.apple.com/?q=Alttolkewitz+7+01279+Dresden&ll=51.0316896,13.8302079"
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/BQ7LAwEAuDFY954H6"

export function LocationSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-2">
            <div className="flex items-center gap-3 md:flex-col md:items-start">
              <span
                className="text-4xl md:text-6xl font-light text-border"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                06
              </span>
              <div className="w-12 h-px md:w-px md:h-12 bg-border" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-6">
            <p className="text-accent text-lg mb-3" style={{ fontFamily: "var(--font-caveat)" }}>
              Perfekt gelegen
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight md:leading-[0.95]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Anfahrt & <span className="italic">Umgebung</span>
            </h2>
          </div>
        </div>

        {/* Map/Location Embed */}
        <div className="col-span-12 relative">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1760.9850758283483!2d13.8302079!3d51.0316896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709c8788c4afc85%3A0x64c08a42d720d9db!2sAlttolkewitzer%20Hof!5e1!3m2!1sde!2sde!4v1768089694144!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lage des Alttolkewitzer Hofs"
            />
            {/* Address Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 pointer-events-none">
              <p className="text-white/70 text-lg ml-12" style={{ fontFamily: "var(--font-inter)" }}>
                Alttolkewitz 7 · 01279 Dresden · Laubegast
              </p>
            </div>
          </div>

          {/* Map Link Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {/* Google Maps Button */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 hover:bg-accent transition-colors duration-300"
            >
              <span className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                Auf Google Maps öffnen
              </span>
              <HandDrawnArrow className="w-6 h-3 transition-transform group-hover:translate-x-1" />
            </a>
            {/* Apple Maps Button */}
            <a
              href={APPLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-background border-2 border-primary text-primary px-6 py-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                In Apple Karten öffnen
              </span>
            </a>
          </div>
        </div>

        {/* Attractions */}
        <div className="mt-20">
          <h3 className="text-2xl text-primary mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            Ausflugsziele in der Nähe
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {attractions.map((place, index) => (
              <div
                key={place.name}
                className="group relative overflow-hidden"
                style={{ transform: `rotate(${index % 2 === 0 ? "-1" : "1"}deg)` }}
              >
                <img
                  src={`/placeholder.svg?height=250&width=350&query=${encodeURIComponent(place.image)}`}
                  alt={place.name}
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium" style={{ fontFamily: "var(--font-playfair)" }}>
                    {place.name}
                  </p>
                  <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                    {place.distance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


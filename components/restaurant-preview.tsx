import { ElbeWaves, HandDrawnArrow } from "./decorative-elements"

export function RestaurantPreview() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Waves at Top */}
      <ElbeWaves className="absolute top-0 left-0 right-0 w-full h-16 text-border" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-2">
            <div className="flex items-center gap-3 md:flex-col md:items-start">
              <span
                className="text-4xl md:text-6xl font-light text-border"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                03
              </span>
              <div className="w-12 h-px md:w-px md:h-12 bg-border" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-6">
            <p className="text-accent text-lg mb-3" style={{ fontFamily: "var(--font-caveat)" }}>
              Genuss am Elbufer
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight md:leading-[0.95]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Unser <span className="italic">Restaurant</span>
            </h2>
          </div>
        </div>

        {/* Main Content - Overlapping Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Large Feature Image */}
          <div className="col-span-12 lg:col-span-7 relative">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Restaurant Interieur"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            {/* Overlapping Text Box */}
            <div className="relative lg:absolute lg:-bottom-8 lg:-right-8 bg-card p-8 border border-border mt-6 lg:mt-0 lg:max-w-sm">
              <p className="text-lg leading-relaxed text-muted-foreground" style={{ fontFamily: "var(--font-inter)" }}>
                Unser gemütliches Restaurant verwöhnt Ihren Gaumen täglich mit frisch zubereiteten Köstlichkeiten der
                modernen Kochkunst – ohne die Klassiker der regionalen Küche aus den Augen zu verlieren.
              </p>
            </div>
          </div>

          {/* Opening Hours - Creative Card */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
            <div className="bg-primary text-primary-foreground p-8 relative" style={{ transform: "rotate(1deg)" }}>
              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary-foreground/30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary-foreground/30" />

              <h3 className="text-2xl mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Öffnungszeiten
              </h3>
              <div className="space-y-4" style={{ fontFamily: "var(--font-inter)" }}>
                <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-3">
                  <span className="text-primary-foreground/80">Mo – Do</span>
                  <span className="font-medium">15:00 – 21:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-3">
                  <span className="text-primary-foreground/80">Fr – Sa</span>
                  <span className="font-medium">12:00 – 22:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-3">
                  <span className="text-primary-foreground/80">Sonntag</span>
                  <span className="font-medium">12:00 – 21:00</span>
                </div>
                <p className="text-sm text-primary-foreground/60 pt-2">Küchenschluss: 1h vor Ladenschluss</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/restaurant"
                className="group inline-flex items-center gap-3 bg-accent text-white px-6 py-3 hover:bg-primary transition-colors duration-300"
              >
                <span className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                  Mehr erfahren
                </span>
                <HandDrawnArrow className="w-6 h-3 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/speisekarte"
                className="inline-flex items-center gap-3 border-2 border-primary text-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <span className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                  Speisekarte
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Garden Feature - Full Width Banner */}
        <div className="mt-20 relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 relative">
              <img
                src="/placeholder.svg?height=500&width=1000"
                alt="Gartenanlage mit Elbblick"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
            <div className="col-span-12 lg:col-span-4 bg-secondary p-8 flex flex-col justify-center">
              <p className="text-accent text-xl mb-2" style={{ fontFamily: "var(--font-caveat)" }}>
                Unter alten Bäumen
              </p>
              <h3 className="text-3xl text-primary mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Gartenanlage
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                Genießen Sie im Schatten jahrhundertealter Bäume ein kühles Bier oder erlesenen Wein mit Blick auf die
                Elbwiesen und den Wachwitzer Hang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

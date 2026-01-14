import { ElbeWaves, HandDrawnArrow } from "./decorative-elements"

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative Waves */}
      <ElbeWaves className="absolute top-0 left-0 right-0 w-full h-12 text-primary-foreground/20" />

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='white' strokeWidth='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Handwritten Accent */}
          <p
            className="text-primary-foreground/80 text-2xl md:text-3xl mb-4"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            Wir freuen uns auf Sie
          </p>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-[0.95] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Erleben Sie <span className="italic">Gastlichkeit</span> am Elbufer
          </h2>

          <p
            className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Genuss, Erholung und herzliche Gastfreundschaft erwarten Sie im historischen Alttolkewitzer Hof.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.mews.com/distributor/275fe8d0-0c02-4602-aba7-b36f011bf606"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 hover:bg-accent hover:text-white transition-colors duration-300"
            >
              <span className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                Zimmer reservieren
              </span>
              <HandDrawnArrow className="w-6 h-3 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <span className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                Kontakt aufnehmen
              </span>
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-8 left-8 hidden lg:block">
          <div
            className="px-4 py-2 border-2 border-primary-foreground/30 text-primary-foreground/60 text-sm"
            style={{
              transform: "rotate(-5deg)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Seit 1994
          </div>
        </div>
        <div className="absolute top-1/2 right-8 hidden lg:block">
          <div
            className="px-4 py-2 border-2 border-primary-foreground/30 text-primary-foreground/60 text-sm"
            style={{
              transform: "rotate(3deg)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Dresden
          </div>
        </div>
      </div>
    </section>
  )
}

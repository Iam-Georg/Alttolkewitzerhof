import Image from "next/image"
import { HandDrawnArrow, CornerFlourish, StarBurst } from "./decorative-elements"

export function HeroSection() {
  return (
    <section className="
  relative
  pt-28 sm:pt-24 md:pt-28 md:pt-24 lg:pt-0
  min-h-[65vh] sm:min-h-[70vh] md:min-h-[75vh] md:min-h-[75vh] lg:min-h-[100svh]
  flex items-end
  pb-12 md:pb-16 md:pb-16 lg:pb-20
  overflow-hidden
">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/alttolkewitzer-hof-nacht.jpg"
          alt="Alttolkewitzer Hof - Front"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      </div>

      {/* Main Content - Asymmetric Layout */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-6">
        <div className="flex justify-center md:grid-cols-12 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-6">
          {/* Left: Main Title */}
          <div className="col-span-1 md:col-span-8 lg:col-span-8 max-w-[875px]">
            {/* Desktop Brand Headline */}
            <h1
              className="hidden lg:block md:block text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white font-medium leading-tight mb-4 lg:mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="block italic text-center">Alttolkewitzer Hof</span>
            </h1>
            {/* Tagline with decorative line */}
            <div className="hidden xl:flex flex-nowrap items-center justify-center gap-3 md:gap-4 mb-6 lg:mb-8">
              <div className="flex-1 min-w-[120px] h-px bg-white/50" />
              <p
                className="text-white/70 text-xs sm:text-sm tracking-[0.1em] md:tracking-[0.25em] lg:tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Hotel & Restaurant seit 1994
              </p>
              <div className="flex-1 min-w-[120px] h-px bg-white/50" />
            </div>

            {/* CTAs */}
            <div className="flex justify-center flex-col sm:flex-row flex-wrap gap-6 md:gap-8">
              <a
                href="https://app.mews.com/distributor/275fe8d0-0c02-4602-aba7-b36f011bf606"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white text-primary px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 hover:bg-accent hover:text-white transition-colors duration-300 text-sm"
                style={{ minHeight: "48px" }}
              >
                <span className="uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                  Zimmer reservieren
                </span>
                <HandDrawnArrow className="w-6 h-3 md:w-7 lg:w-8 lg:h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/restaurant"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/60 text-white px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 hover:bg-white/10 transition-colors duration-300 text-sm"
                style={{ minHeight: "48px" }}
              >
                <span className="uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                  Restaurant entdecken
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


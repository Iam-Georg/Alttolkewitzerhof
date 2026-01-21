import Image from "next/image"
import { LeafDecoration, CornerFlourish } from "./decorative-elements"

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <LeafDecoration className="absolute top-20 right-10 w-16 h-24 text-border opacity-50 hidden lg:block" />
      <CornerFlourish className="absolute bottom-20 left-10 w-20 h-20 text-border opacity-40 hidden lg:block" />

      <div className="container mx-auto px-6">
        {/* Section Header - Asymmetric */}
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-2">
            <div className="flex items-center gap-3 md:flex-col md:items-start">
              <span
                className="text-4xl md:text-6xl font-light text-border"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                01
              </span>
              <div className="w-12 h-px md:w-px md:h-12 bg-border" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <p className="text-accent text-lg mb-3" style={{ fontFamily: "var(--font-caveat)" }}>
              Angenehm natürlich
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight md:leading-[0.95]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ein verborgenes Juwel
              <br />
              <span className="italic">am Dresdner Elbufer</span>
            </h2>
          </div>
        </div>

        {/* Content Grid - Creative Layout */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Large Image */}
          <div className="col-span-12 lg:col-span-7 relative">
            <div className="relative flex justify-center">
              <img
                //src="/placeholder.svg?height=700&width=900"
                src="/img/Alttolkewitzerhof-Logo-500x500.jpg"
                alt="Gästegarten mit Elbblick"
                className="w-[500px] h-[500px] object-cover"
              />
              {/* Overlapping Label */}
              <div
                className="absolute -bottom-6 -right-4 md:right-8 bg-accent text-white px-6 py-4"
                style={{ transform: "rotate(-3deg)" }}
              >
                <p className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  30+
                </p>
                <p className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                  Jahre Tradition
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center pt-8 lg:pt-0">
            <p
              className="text-lg leading-relaxed text-muted-foreground mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Nur 15 Minuten Fahrzeit vom Dresdner Stadtzentrum entfernt liegt der Alttolkewitzer Hof idyllisch im
              historischen Stadtteil Laubegast – einem ehemaligen Fischerdorf direkt an der Elbe zwischen Stadtzentrum
              und Schloss Pillnitz.
            </p>
            <p
              className="text-lg leading-relaxed text-muted-foreground mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Der besondere Charme des Anwesens ergibt sich nicht nur aus der denkmalgeschützten Substanz, sondern auch
              aus der zauberhaften Umgebung mit wunderschönem Gästegarten und Blick auf die Elbwiesen.
            </p>

            {/* Features as Stamps */}
            <div className="flex flex-wrap gap-4">
              {["Elberadweg", "Historisch", "Gartenidylle"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border-2 border-primary text-primary text-sm uppercase tracking-wider"
                  style={{
                    transform: `rotate(${Math.random() * 4 - 2}deg)`,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Small Images Row */}
          <div className="col-span-12 grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="relative group overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Historische Fassade"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
            <div className="relative group overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Gemütliches Interieur"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
            <div className="relative group overflow-hidden hidden md:block">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Elberadweg"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

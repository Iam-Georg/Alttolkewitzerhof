import { HandDrawnCircle, StarBurst } from "./decorative-elements"

const guestFeatures = [
    {
        name: "Hotel Gutshof Hauber",
        description: "Entdecken Sie unser Partnerhotel in idyllischer Lage – traditionelle Gastfreundschaft und moderne Annehmlichkeiten.",
        image: "gutshof-hauber.jpg",
        link: "https://www.gutshof-hauber.de/",
    },
    {
        name: "Cafe Blümchen",
        description: "Genießen Sie frische Backwaren, Kaffeespezialitäten und hausgemachte Köstlichkeiten in unserem Cafe.",
        image: "cafe-bluemchen.jpg",
        link: "https://cafe-bluemchen.eu/",
    },
]

export function GuestFeatures() {
    return (
        <section className="py-24 md:py-32 bg-background relative">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="grid grid-cols-12 gap-8 mb-16">
                    <div className="col-span-12 md:col-span-2">
                        <div className="flex items-center gap-3 md:flex-col md:items-start">
                            <span
                                className="text-4xl md:text-6xl font-light text-border"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                05
                            </span>
                            <div className="w-12 h-px md:w-px md:h-12 bg-border" />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-10 lg:col-span-8">
                        <p className="text-accent text-lg mb-3" style={{ fontFamily: "var(--font-caveat)" }}>
                            Unsere Partner
                        </p>
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight md:leading-[0.95]"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            <span className="italic">Partner</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mt-6 max-w-2xl" style={{ fontFamily: "var(--font-inter)" }}>
                            Entdecken Sie unsere weiteren Betriebe – von einem traditionellem Hotel bis hin zum gemütlichem Café.
                        </p>
                    </div>
                </div>

                {/* Guest Features Cards */}
                <div className="grid grid-cols-12 gap-6">
                    {guestFeatures.map((feature, index) => (
                        <div
                            key={feature.name}
                            className={`relative group ${index === 0
                                ? "col-span-12 md:col-span-6"
                                : "col-span-12 md:col-span-6"
                                }`}
                        >
                            <a
                                href={feature.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative overflow-hidden bg-card h-full"
                            >
                                <img
                                    src={`/img/${encodeURIComponent(feature.image)}`}
                                    alt={feature.name}
                                    className="w-full h-[300px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-white text-2xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                                        {feature.name}
                                    </h3>
                                    <p className="text-white/80 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Hover Decoration */}
                                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <HandDrawnCircle className="w-12 h-12 text-white" />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground text-sm mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                        Mehr über unsere Partner erfahren
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://www.gutshof-hauber.de/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 hover:bg-accent transition-colors duration-300"
                        >
                            <span className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                                Hotel Gutshof Hauber besuchen
                            </span>
                            <StarBurst className="w-5 h-5" />
                        </a>
                        <a
                            href="https://cafe-bluemchen.eu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-secondary text-secondary-foreground px-8 py-4 hover:bg-secondary/80 transition-colors duration-300"
                        >
                            <span className="text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                                Cafe Blümchen bestellen
                            </span>
                            <StarBurst className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

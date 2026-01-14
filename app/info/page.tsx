import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CreditCard, Clock, PawPrint, Bike, XCircle, Info, Car, Euro } from "lucide-react"

export default function InfoPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <span className="text-accent text-lg tracking-widest uppercase">Information</span>
            <h1 className="text-4xl md:text-5xl font-semibold mt-4 mb-6 text-primary">Gut zu wissen</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kurz und bündig – alle wichtigen Informationen zu Ihrem Aufenthalt im Alttolkewitzer Hof.
            </p>
          </div>
        </section>

        {/* Info Sections */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">

            {/* Buchung */}
            <div className="mb-16 pb-16 border-b border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                  <Info className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Info</h2>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Liebe Gäste,
                </p>
                <p>
                  <strong>
                    Die Baustelle auf der Österreicherstraße ist vorbei.
                  </strong>{" "}
                  Wir freuen uns auf 
                </p>
                <p>
                  Sollten Sie über keine Kreditkarte verfügen, setzen Sie sich bitte mit uns in Verbindung. Wir schicken
                  Ihnen eine Anzahlungsrechnung der 1. Nacht.
                </p>
                <p className="text-sm italic">
                  Gerne versuchen wir, spezielle Zimmerwünsche zu berücksichtigen, jedoch können wir diese nicht
                  garantieren.
                </p>
              </div>
            </div>

            {/* Buchung */}
            <div className="mb-16 pb-16 border-b border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Buchung</h2>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Eine Buchung ist über unsere Homepage jederzeit möglich und Sie erhalten unsere schriftliche
                  Buchungsbestätigung per E-Mail.
                </p>
                <p>
                  <strong>
                    Für eine Festbuchung brauchen wir Ihre Kontaktdaten und eine Kreditkartennummer mit Ablaufdatum zur
                    Sicherheit.
                  </strong>{" "}
                  Es wird erst 24 Stunden vor Anreisedatum von der Karte abgebucht.
                </p>
                <p>
                  Sollten Sie über keine Kreditkarte verfügen, setzen Sie sich bitte mit uns in Verbindung. Wir schicken
                  Ihnen eine Anzahlungsrechnung der 1. Nacht.
                </p>
                <p className="text-sm italic">
                  Gerne versuchen wir, spezielle Zimmerwünsche zu berücksichtigen, jedoch können wir diese nicht
                  garantieren.
                </p>
              </div>
            </div>

            {/* An- und Abreise */}
            <div className="mb-16 pb-16 border-b border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">An- und Abreise</h2>
              </div>
              <div className="text-muted-foreground space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-secondary p-6 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Check-in</h3>
                    <p>Ab 14:00 Uhr</p>
                    <p className="text-sm mt-2">
                      Sollten Sie nach 20:00 Uhr anreisen, bitten wir um kurze Mitteilung. Erhalten wir keine Nachricht,
                      behalten wir uns vor, das Zimmer anderweitig zu vergeben.
                    </p>
                  </div>
                  <div className="bg-secondary p-6 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Check-out</h3>
                    <p>07:00 – 11:00 Uhr</p>
                    <p className="text-sm mt-2">
                      Nach Absprache ist ein Check-out auch zeitiger möglich. Eine spätere Abreise ist nur nach
                      vorheriger Absprache möglich und wird gegebenenfalls gesondert berechnet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Haustiere */}
            <div className="mb-16 pb-16 border-b border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                  <PawPrint className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Haustiere</h2>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>Es ist erlaubt Haustiere mit in unser Hotel zu bringen. Wir bitten Sie, dies vorher anzumelden.</p>
                <p className="bg-secondary p-4 rounded-lg">
                  <strong className="text-primary">Aufschlag: 15,00 € pro Tier pro Nacht</strong>
                </p>
                <p>
                  Dieses Geld wird genutzt um unseren Hygienestandards gerecht zu werden. Die Hotelhygiene spielt bei
                  all unseren Gästen eine immer wichtigere Rolle. Wir als Ihr Gastgeber nehmen Ihre Ansprüche an
                  Wohlfühl-Komfort sehr ernst.
                </p>
              </div>
            </div>

            {/* Fahrräder */}
            <div className="mb-16 pb-16 border-b border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                  <Bike className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Fahrräder</h2>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>Benötigen Sie eine Unterstellmöglichkeit für Ihren Drahtesel? Sprechen Sie uns bitte einfach an.</p>
                <p className="bg-secondary p-4 rounded-lg">
                  <strong className="text-primary">Akku-Laden: 3,00 € pro Tag</strong>
                </p>
              </div>
            </div>

            {/* Stornierung */}
            <div className="mb-16 pb-16 border-b border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                  <XCircle className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Stornierung</h2>
              </div>
              <div className="text-muted-foreground space-y-6">
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Hotdeal Rate</h3>
                  <p>Dieser günstige Zimmerrate kann nicht kostenlos storniert werden.</p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-semibold text-primary mb-4">Flexible Rate</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        <strong>1 Zimmer:</strong> Kostenlose Stornierung bis 24 Stunden vor Anreise.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        <strong>2–5 Zimmer:</strong> Kostenlose Stornierung bis 7 Tage vor Anreise.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        <strong>Ab 6 Zimmer:</strong> Kostenlose Stornierung bis 30 Tage vor Anreise.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm">
                    Bei verspäteter Stornierung oder Nichtanreise wird der Wert der ersten Nacht als Stornogebühr
                    abgebucht. Bei vorzeitiger Abreise gelten gleiche Vereinbarungen. Als Anreisezeit wird die mögliche
                    Check-in-Zeit von 14:00 Uhr angerechnet.
                  </p>
                </div>
              </div>
            </div>

            {/* Preise */}
            <div className="mb-16 pb-16 border-b border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                  <Euro className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Preise</h2>
              </div>
              <div className="text-muted-foreground space-y-4">
                <p>Alle angegebenen Preise sind reine Übernachtungspreise ohne Beherbergungssteuer.</p>
                <p>
                  Zusätzliche Leistungen wie z.B. Frühstück, garantierter Parkplatz, Aufbettungen oder das Mitbringen
                  von Haustieren werden separat abgerechnet.
                </p>
                <p className="text-sm italic">
                  Preisänderungen, Druckfehler, Irrtümer sowie Angebotsänderungen bleiben vorbehalten.
                </p>
                <Button asChild variant="outline" className="mt-4 bg-transparent">
                  <a
                    href="https://www.dresden.de/media/pdf/sport/Beherbergungssteuer_Infoblatt_2017-10-01.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Informationen zur Beherbergungssteuer (CityTax)
                  </a>
                </Button>
              </div>
            </div>

            {/* Anfahrt */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                  <Car className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Anfahrt</h2>
              </div>
              <div className="text-muted-foreground space-y-4">
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-semibold text-primary mb-4">Von der A17 (Ausfahrt Prohlis)</h3>
                  <p className="mb-4">Ca. 14 min (7,9 km)</p>
                  <p className="text-sm">
                    Tschirnhausstraße → Langer Weg → Mügelner Str. → Moränenende → Pirnaer Landstraße → Bodenbacher
                    Straße → Marienberger Straße → Saalbachstraße → Wehlener Straße → Alttolkewitz
                  </p>
                </div>
                <p>
                  <strong>Am besten navigieren Sie nach „Wasserwerk Tolkewitz"</strong>, dann fahren Sie weiter
                  geradeaus in die Sackgasse (Wehlener-/Österreicherstraße). Das Hotel ist erreichbar am Ende der
                  Sackgasse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">Noch Fragen?</h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Unser Team steht Ihnen gerne für weitere Fragen zur Verfügung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <a href="/kontakt">Kontakt aufnehmen</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
              >
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

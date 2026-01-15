"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { ElbeWaves } from "./decorative-elements"

const footerLinks = {
  hotel: [
    { name: "Zimmer & Preise", href: "/hotel" },
    { name: "Online Buchen", href: "https://app.mews.com/distributor/275fe8d0-0c02-4602-aba7-b36f011bf606", target: "_blank" },
    { name: "Fahrradvermietung", href: "/hotel#fahrrad" },
    { name: "Wissenswertes", href: "/info" },
  ],
  restaurant: [
    { name: "Restaurant", href: "/restaurant" },
    { name: "Speisekarte", href: "/speisekarte" },
    { name: "Gartenanlage", href: "/restaurant#garten" },
    { name: "Salon Elbblick", href: "/restaurant#salon" },
  ],
  events: [
    { name: "Feiern & Events", href: "/feiern" },
    { name: "Trauerfeiern", href: "/trauerfeier" },
    { name: "Catering", href: "/catering" },
  ],
}

const APPLE_MAPS_URL = "https://maps.apple.com/?q=Alttolkewitz+7+01279+Dresden&ll=51.0316896,13.8302079"
const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Alttolkewitz+7,+01279+Dresden"

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative">
      {/* Decorative Top Wave */}
      <ElbeWaves className="absolute -top-6 left-0 right-0 w-full h-12 text-foreground" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div className="mb-6">
              <p
                className="text-sm tracking-[0.3em] uppercase text-background/60 mb-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Hotel & Restaurant
              </p>
              <h3 className="text-3xl text-background" style={{ fontFamily: "var(--font-playfair)" }}>
                Alttolkewitzer Hof
              </h3>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-background/70" style={{ fontFamily: "var(--font-inter)" }}>
              <div className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm">
                    Alttolkewitz 7<br />
                    01279 Dresden
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-background/50 hover:text-background transition-colors underline"
                    >
                      Google Maps
                    </a>
                    <span className="text-background/30">·</span>
                    <a
                      href={APPLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-background/50 hover:text-background transition-colors underline"
                    >
                      Apple Karten
                    </a>
                  </div>
                </div>
              </div>
              <a href="tel:+4935121767930" className="flex items-center gap-3 hover:text-background transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+49 351 217 679 30</span>
              </a>
              <a
                href="mailto:info@alttolkewitzerhof.de"
                className="flex items-center gap-3 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@alttolkewitzerhof.de</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-6 md:col-span-2 lg:col-span-3">
            <h4 className="text-lg text-background mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Hotel
            </h4>
            <ul className="space-y-2" style={{ fontFamily: "var(--font-inter)" }}>
              {footerLinks.hotel.map((link) => (
                <li key={link.name}>
                  {link.target ? (
                    <a
                      href={link.href}
                      target={link.target}
                      rel="noopener noreferrer"
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2 lg:col-span-3">
            <h4 className="text-lg text-background mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Restaurant
            </h4>
            <ul className="space-y-2" style={{ fontFamily: "var(--font-inter)" }}>
              {footerLinks.restaurant.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm _blank text-background/60 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2 lg:col-span-3">
            <h4 className="text-lg text-background mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Veranstaltungen
            </h4>
            <ul className="space-y-2" style={{ fontFamily: "var(--font-inter)" }}>
              {footerLinks.events.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <p>&copy; {new Date().getFullYear()} Alttolkewitzer Hof. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link href="/impressum" className="hover:text-background transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-background transition-colors">
                Datenschutz
              </Link>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-settings"))}
                className="hover:text-background transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

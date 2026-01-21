"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { LanguageSwitch } from "@/components/language-switch"

const navigation = [
  { name: "Hotel", href: "/hotel" },
  { name: "Restaurant", href: "/restaurant" },
  { name: "Feiern", href: "/feiern" },
  { name: "Wissenswertes", href: "/info" },
  { name: "Kontakt", href: "/kontakt" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Einzigartiges vertikales Layout */}
          <Link href="/" className="group relative">
            <div className="flex flex-col items-start">
              <span
                className={`text-xs sm:text-sm md:text-sm lg:text-sm xl:text-md tracking-[0.3em] lg:tracking-[0.4em] uppercase transition-colors duration-300 ${scrolled || !isHomePage ? "text-muted-foreground" : "text-white/70"}`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Hotel & Restaurant
              </span>
              <span
                className={`text-lg sm:text-l md:text-xl lg:text-2xl font-medium tracking-wide transition-colors duration-300 ${scrolled || !isHomePage ? "text-primary" : "text-white"}`}
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Alttolkewitzer Hof
                <div className={`w-full h-px bg-current tracking-wide transition-colors duration-300 ${scrolled || !isHomePage ? "text-primary" : "text-white"}`} />
              </span>
              {/* SVG Logo */}

            </div> 
            {/* Handgezeichnete Unterstreichung */}
            {/*<svg
              className={`absolute -bottom-1 left-0 w-full h-2 transition-opacity duration-300 ${scrolled || !isHomePage ? "text-accent opacity-100" : "text-white opacity-60"}`}
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
            >
              <path d="M0 4 Q 50 0, 100 4 T 200 4" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>*/}

          </Link>

          {/* Desktop Navigation - Ab lg Breakpoint sichtbar */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2 text-sm tracking-wide uppercase transition-colors duration-300 group ${scrolled || !isHomePage ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-current transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}

            {/* Buchungs-Button mit Stamp-Style */}
            <a
              href="https://app.mews.com/distributor/275fe8d0-0c02-4602-aba7-b36f011bf606"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-6 px-5 py-2 border-2 transition-all duration-300 hover:rotate-0 ${scrolled || !isHomePage ? "border-accent text-accent hover:bg-accent hover:text-white" : "border-white text-white hover:bg-white hover:text-primary"}`}
              style={{
                transform: "rotate(-2deg)",
                fontFamily: "var(--font-inter)",
              }}
            >
              <span className="text-sm tracking-wider uppercase">Buchen</span>
            </a>

            {/* Language Switch */}
            <div className={`ml-6 ${scrolled || !isHomePage ? "text-foreground" : "text-white"}`}>
              <LanguageSwitch />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2 transition-colors ${scrolled || !isHomePage ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Fullscreen overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-background">
            <div className="flex flex-col h-full">
              {/* Mobile menu header with close button */}
              <div className="flex items-center justify-between p-4 lg:px-6 border-b border-border/50">
                <span
                  className="text-sm tracking-widest uppercase text-muted-foreground"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Menü
                </span>
                <button
                  type="button"
                  className="p-2 text-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile menu items */}
              <div className="flex-1 flex flex-col justify-start px-4 lg:px-6 py-8 bg-background shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg md:text-xl text-foreground/80 hover:text-foreground transition-colors py-4 border-b border-border/30"
                      style={{ fontFamily: "var(--font-playfair)" }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile booking button */}
                <a
                  href="https://app.mews.com/distributor/275fe8d0-0c02-4602-aba7-b36f011bf606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 px-6 py-4 bg-accent text-white text-center uppercase tracking-wider text-base"
                  style={{ fontFamily: "var(--font-inter)", minHeight: "56px" }}
                >
                  Zimmer buchen
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}


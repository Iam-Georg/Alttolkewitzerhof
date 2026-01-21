import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"

// Lazy load heavy components below the fold
const MarqueeBanner = dynamic(() => import("@/components/marquee-banner").then(mod => ({ default: mod.MarqueeBanner })), {
  loading: () => <div className="h-16 bg-secondary animate-pulse" />
})
const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="h-96 bg-secondary animate-pulse" />
})
const RoomsPreview = dynamic(() => import("@/components/rooms-preview").then(mod => ({ default: mod.RoomsPreview })), {
  loading: () => <div className="h-96 bg-secondary animate-pulse" />
})
const RestaurantPreview = dynamic(() => import("@/components/restaurant-preview").then(mod => ({ default: mod.RestaurantPreview })), {
  loading: () => <div className="h-96 bg-secondary animate-pulse" />
})
const EventsPreview = dynamic(() => import("@/components/events-preview").then(mod => ({ default: mod.EventsPreview })), {
  loading: () => <div className="h-96 bg-secondary animate-pulse" />
})
const GuestFeatures = dynamic(() => import("@/components/guest-features").then(mod => ({ default: mod.GuestFeatures })), {
  loading: () => <div className="h-96 bg-secondary animate-pulse" />
})
const LocationSection = dynamic(() => import("@/components/location-section").then(mod => ({ default: mod.LocationSection })), {
  loading: () => <div className="h-96 bg-secondary animate-pulse" />
})
const CtaSection = dynamic(() => import("@/components/cta-section").then(mod => ({ default: mod.CtaSection })), {
  loading: () => <div className="h-96 bg-secondary animate-pulse" />
})

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/*<MarqueeBanner />*/}
        <AboutSection />
        <RoomsPreview />
        <RestaurantPreview />
        <EventsPreview />
        <GuestFeatures />
        <LocationSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}



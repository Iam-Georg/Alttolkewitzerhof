import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { MarqueeBanner } from "@/components/marquee-banner"
import { AboutSection } from "@/components/about-section"
import { RoomsPreview } from "@/components/rooms-preview"
import { RestaurantPreview } from "@/components/restaurant-preview"
import { EventsPreview } from "@/components/events-preview"
import { GuestFeatures } from "@/components/guest-features"
import { LocationSection } from "@/components/location-section"
import { CtaSection } from "@/components/cta-section"

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



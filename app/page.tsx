import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
    </main>
  )
}

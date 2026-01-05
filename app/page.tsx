import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryNav } from "@/components/category-nav"
import { DailyNewsSection } from "@/components/daily-news-section"
import { ResourceSection } from "@/components/resource-section"
import { ProductShowcase } from "@/components/product-showcase"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryNav />
        <DailyNewsSection />
        <ResourceSection />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  )
}

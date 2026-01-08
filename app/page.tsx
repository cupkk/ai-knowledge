import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryNav } from "@/components/category-nav"
import { IndustrySection } from "@/components/industry-section"
import { ResourceSection } from "@/components/resource-section"
import { ApplicationShowcase } from "@/components/application-showcase"
import { PaperSection } from "@/components/paper-section"
import { ProductShowcase } from "@/components/product-showcase"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pb-20 pt-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <HeroSection />
          <CategoryNav />
          <div className="space-y-14">
            <IndustrySection />
            <ResourceSection />
            <ApplicationShowcase />
            <PaperSection />
            <ProductShowcase />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { BlogSection } from "@/components/blog-section"
import { ConsultationCTA } from "@/components/consultation-cta"
import { Footer } from "@/components/footer"
import { InquiryButton } from "@/components/inquiry-button"
import { ScrollToTop } from "@/components/scroll-to-top"

// 데이터 캐싱 옵션 (60초마다 갱신)
export const revalidate = 60

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <BlogSection />
      <ConsultationCTA />
      <Footer />
      <InquiryButton />
    </main>
  )
}

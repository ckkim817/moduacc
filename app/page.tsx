"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { BlogSection } from "@/components/blog-section"
import { ConsultationCTA } from "@/components/consultation-cta"
import { Footer } from "@/components/footer"
import { InquiryButton } from "@/components/inquiry-button"

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <main className="min-h-screen">
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

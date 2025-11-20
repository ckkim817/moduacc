"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryButton } from "@/components/inquiry-button"

export default function ServicesPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  const services = [
    {
      slug: "bookkeeping",
      title: "기장",
      description:
        "기업의 재무상태와 세무 리스크를 정확히 관리할 수 있도록 전문 회계사가 직접 장부를 관리합니다. 안정적인 경영 판단을 위한 기초 데이터를 제공합니다.",
      image: "/images/service-bookkeeping.png",
    },
    {
      slug: "audit",
      title: "회계감사",
      description:
        "법정감사, 임의감사, 특수목적감사 등 다양한 감사 경험을 바탕으로, 기업의 재무제표 신뢰성을 제고하고 이해관계자에게 투명한 정보를 제공합니다.",
      image: "/images/service-audit.png",
    },
    {
      slug: "inheritance",
      title: "상속/증여/양도",
      description:
        "자산 이전 과정에서 발생할 수 있는 세금 부담을 최소화할 수 있도록 맞춤형 절세 전략을 수립하고, 안정적인 자산 관리 및 승계를 지원합니다.",
      image: "/images/service-inheritance.png",
    },
    {
      slug: "tax-appeal",
      title: "경정청구/조세불복",
      description:
        "잘못 납부한 세금을 돌려받을 수 있는 경정청구부터 국세청 과세처분에 대한 조세불복까지, 풍부한 실무 경험을 바탕으로 유리한 해결책을 제시합니다.",
      image: "/images/service-tax-appeal.png",
    },
    {
      slug: "tax-audit",
      title: "세무조사대응",
      description:
        "국세청 출신 전문가들과 협업하여 세무조사 전 과정을 대비하고, 불필요한 세무 리스크를 최소화할 수 있도록 전문적인 대응을 제공합니다.",
      image: "/images/service-tax-audit.png",
    },
    {
      slug: "valuation",
      title: "기업가치평가",
      description:
        "M&A, 투자유치, 주식거래, 상속·증여 등 다양한 상황에 맞는 공정한 기업가치평가 서비스를 제공합니다. 객관적이고 합리적인 평가를 통해 의사결정을 지원합니다.",
      image: "/images/service-valuation.png",
    },
    {
      slug: "due-diligence",
      title: "실사(Due Diligence)",
      description:
        "재무 및 세무 실사를 통해 기업의 현황과 잠재 리스크를 면밀히 검토합니다. 투자, 인수합병 등 주요 거래 과정에서 신뢰성 있는 정보를 제공합니다.",
      image: "/images/service-due-diligence.png",
    },
    {
      slug: "consulting",
      title: "자문",
      description:
        "기업 운영 과정에서 발생하는 세무·회계·재무 관련 이슈에 대해 지속적인 자문을 제공합니다. 빠르게 변화하는 법령과 제도에 대응해 최적의 솔루션을 제시합니다.",
      image: "/images/service-consulting.png",
    },
    {
      slug: "diagnosis",
      title: "기업진단",
      description:
        "인허가, 자격 요건 충족, 금융기관 제출 등을 위한 객관적인 기업진단 보고서를 작성합니다. 실질자본금 평가 및 관련 규정을 충족하는 진단 서비스를 제공합니다.",
      image: "/images/service-diagnosis.png",
    },
    {
      slug: "subsidy",
      title: "보조금 검증",
      description:
        "정부 및 지방자치단체 보조금 지원 사업에 대한 정산 검증을 수행하여, 사업의 투명성과 신뢰성을 보장합니다.",
      image: "/images/service-subsidy.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - using component with forceWhiteMode */}
      <Navigation forceWhiteMode />

      {/* Hero Section */}
      <section className="pb-16 bg-white max-[440px]:pb-8 pt-[190px] max-[440px]:!pt-[116px]">
        <div className="max-[440px]:!px-5">
          <div className="container mx-auto px-6 max-[440px]:px-0">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="font-bold text-gray-900 mb-6 leading-tight max-[440px]:text-2xl text-6xl">
                원스톱
                <br />
                회계·세무 서비스
              </h1>
              <p
                className="max-[440px]:text-sm font-semibold text-2xl"
                style={{
                  marginBottom: "calc(100vw * 100 / 1920)",
                  color: "rgba(17, 17, 17, 0.5)", // Changed text color to #111111 with 50% opacity
                }}
              >
                기초 기장부터 합병·분할, 투자 실사까지 한 곳에서 해결하세요.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width hero image */}
        <div className="relative w-full mx-auto aspect-[1920/400] max-[440px]:aspect-[375/440]">
          <Image
            src="/images/services-hero.png"
            alt="Modern office workspace"
            fill
            unoptimized
            className="object-cover max-[440px]:rounded-none"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-20 bg-white pb-[calc(100vw*300/1920)] max-[440px]:pt-12 max-[440px]:pb-[160px]">
        <div
          className="max-[440px]:!px-5"
          style={{
            paddingLeft: "min(calc(100vw * 360 / 1920), 360px)",
            paddingRight: "min(calc(100vw * 360 / 1920), 360px)",
          }}
        >
          <div className="container mx-auto px-6 max-[440px]:px-0">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-bold text-gray-900 mb-8 max-[440px]:text-lg text-3xl">서비스</h2>

              {/* Services Grid - 2 columns */}
              <div
                className="grid grid-cols-1 md:grid-cols-2"
                style={{
                  columnGap: "min(calc(100vw * 20 / 1920), 20px)",
                  rowGap: "min(calc(100vw * 100 / 1920), 100px)",
                }}
              >
                {services.map((service, index) => (
                  <Link key={index} href={`/services/${service.slug}`} className="flex flex-col group cursor-pointer">
                    {/* Service image - Desktop */}
                    <div 
                      className="w-full relative rounded-[30px] overflow-hidden max-[440px]:hidden" 
                      style={{ 
                        aspectRatio: "590 / 400",
                        marginBottom: "30px" 
                      }}
                    >
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Service image - Mobile */}
                    <div 
                      className="w-full relative rounded-[20px] overflow-hidden hidden max-[440px]:block" 
                      style={{ 
                        aspectRatio: "335 / 200",
                        marginBottom: "16px" 
                      }}
                    >
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Service title */}
                    <h3 className="font-bold text-gray-900 mb-3 max-[440px]:text-lg text-2xl min-[441px]:px-[10px]">{service.title}</h3>

                    {/* Service description */}
                    <p className="text-gray-600 leading-relaxed max-[440px]:text-sm text-xl min-[441px]:px-[10px]">{service.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Inquiry Button */}
      <InquiryButton />
    </div>
  )
}

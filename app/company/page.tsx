"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryButton } from "@/components/inquiry-button"

export default function CompanyPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - using component with forceWhiteMode */}
      <Navigation forceWhiteMode />

      {/* Hero Section */}
      <section
        className="pb-[100px] bg-white max-[440px]:pb-8 pt-[220px] max-[440px]:!pt-[116px]"
      >
        <div
          className="max-[440px]:!px-5"
          style={{ paddingLeft: "calc(100vw / 5.5)", paddingRight: "calc(100vw / 5.5)" }}
        >
          <div className="container mx-auto px-6 max-[440px]:px-0">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="font-bold text-[#111111] max-[440px]:text-[30px] max-[440px]:leading-[39px] text-[60px] leading-[80px] max-[440px]:mb-[10px] mb-[20px]">
                안정된 재무 관리로
                <br />
                내일의 도약을 준비합니다.
              </h1>
              <p
                className="max-[440px]:text-[16px] max-[440px]:leading-[24px] max-[440px]:!mb-[60px] font-semibold text-2xl"
                style={{
                  marginBottom: "calc(100vw * 100 / 1920)",
                  color: "rgba(17, 17, 17, 0.5)",
                }}
              >
                국내 최고 수준의 회계사·세무사가
                <br className="max-[440px]:block hidden" />
                {" "}처음부터 끝까지 책임지고,
                <br />
                모든 세무 리스크에 최적의 답을 제시합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full mx-auto aspect-[1920/400] max-[440px]:aspect-[375/440]">
          <Image src="/images/company-hero.jpeg" alt="Modern office building" fill className="object-cover" />
        </div>
      </section>

      <section className="bg-white pb-[calc(100vw*300/1920)] max-[440px]:pt-12 max-[440px]:!pb-[calc(100vw*160/375)] pt-[100px]">
        <div
          className="max-[440px]:!px-5"
          style={{ paddingLeft: "calc(100vw / 5.5)", paddingRight: "calc(100vw / 5.5)" }}
        >
          <div className="container mx-auto px-6 max-[440px]:px-0">
            <div className="max-w-7xl mx-auto space-y-16 max-[440px]:space-y-[60px]">
              {/* Section 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-[440px]:gap-[10px] items-start">
                <h2 className="font-bold text-[#111111] max-[440px]:text-[20px] max-[440px]:leading-[25px] text-[30px] leading-[42px]">
                  처음부터 끝까지
                  <br />
                  함께하는 책임 파트너
                </h2>
                <p className="text-[#535353] max-[440px]:text-[16px] max-[440px]:leading-[24px] text-[22px] leading-[31px]">
                  모두세무회계그룹은 처음 상담부터 신고/조정/자문까지 동일한 책임 파트너가 끝까지 함께합니다. 건별로 담당자가 바뀌지 않아 사업 특성과 수치의 맥락이 누락되지 않고, 의사결정 속도가 빨라집니다.
                </p>
              </div>

              {/* Section 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-[440px]:gap-[10px] items-start">
                <h2 className="font-bold text-[#111111] max-[440px]:text-[20px] max-[440px]:leading-[25px] text-[30px] leading-[42px]">
                  빅펌 출신 전문가들로
                  <br />
                  구성된 핵심멤버
                </h2>
                <div>
                  <p className="text-[#535353] max-[440px]:text-[16px] max-[440px]:leading-[24px] text-[22px] leading-[31px] mb-5 max-[440px]:mb-[10px]">
                    삼일, 안진 등 국내 최고 회계법인(Big 4)출신의 공인회계사와 세무사들이 모두세무회계그룹의 핵심 멤버입니다. 대기업과 중견 기업의 복잡한 회계 및 세무 이슈를 다루며 쌓아온 체계적인 노하우와 최고 수준의 전문성을 바탕으로 고객에게 한 차원 높은 서비스를 제공합니다.
                  </p>
                  <Link href="/experts" className="text-[#355CBA] inline-flex items-center gap-0.5 font-bold max-[440px]:text-[16px] text-[20px]">
                    전문가 소개
                    <Image src="/images/design-mode/icon3.svg" alt="" width={20} height={20} className="inline-block" />
                  </Link>
                </div>
              </div>

              {/* Section 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-[440px]:gap-[10px] items-start">
                <h2 className="font-bold text-[#111111] max-[440px]:text-[20px] max-[440px]:leading-[25px] text-[30px] leading-[42px]">
                  모든 세무·회계 이슈에
                  <br />
                  아우르는 종합 솔루션
                </h2>
                <div>
                  <p className="text-[#535353] max-[440px]:text-[16px] max-[440px]:leading-[24px] text-[22px] leading-[31px] mb-5 max-[440px]:mb-[10px]">
                    전통적인 기장 대리, 결산 및 세무조정 업무를 넘어 M&A, 상속·증여, 세무조사 등 복잡하고 특수한 세무 이슈까지 모두 대응이 가능합니다.
                    <br />
                    다양한 산업과 비즈니스 형태에 대한 깊은 이해를 바탕으로 기업이 마주할 수 있는 어떤 세무/회계 문제에도 막힘없는 원스톱(One-Stop) 솔루션을 제시합니다.
                  </p>
                  <Link href="/services" className="text-[#355CBA] inline-flex items-center gap-0.5 font-bold max-[440px]:text-[16px] text-[20px]">
                    서비스 소개
                    <Image src="/images/design-mode/icon3.svg" alt="" width={20} height={20} className="inline-block" />
                  </Link>
                </div>
              </div>

              {/* Section 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-[440px]:gap-[10px] items-start">
                <h2 className="font-bold text-[#111111] max-[440px]:text-[20px] max-[440px]:leading-[25px] text-[30px] leading-[42px]">
                  국세청 출신 전문가와의
                  <br />
                  강력한 협업 네트워크
                </h2>
                <p className="text-[#535353] max-[440px]:text-[16px] max-[440px]:leading-[24px] text-[22px] leading-[31px]">
                  모두세무회계그룹은 국세청 출신 세무사 및 전문가들과의 강력한 협업 네트워크를 구축하고 있습니다. 과세당국의 시각에서 문제를 분석하고 논리를 예측하여, 세무조사와 조세 불복 등 민감한 이슈에 대해 가장 효과적인 방어 논리를 만들어 냅니다.
                  <br />
                  예측하기 어려운 세무 리스크, 모두가 미리 대비하고 최적으로 대응합니다.
                </p>
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

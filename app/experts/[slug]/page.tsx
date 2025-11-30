"use client"

import { useEffect } from "react"
import { useParams, useRouter } from 'next/navigation'
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryButton } from "@/components/inquiry-button"
import { CommonButton } from "@/components/common-button"
import { expertsData } from "@/lib/experts-data"

export default function ExpertDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const expert = expertsData.find((e) => e.slug === slug)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  if (!expert) {
    return <div>Expert not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation forceWhiteMode />

      {/* Hero Section with Expert Image and Info */}
      <section className="relative bg-white max-[440px]:!pt-[56px]" style={{ paddingTop: "calc(110px)" }}>
        <div
          className="relative mx-auto max-[440px]:hidden"
          style={{
            paddingLeft: "calc(100vw * 360 / 1920)",
            paddingRight: "calc(100vw * 360 / 1920)",
          }}
        >
          <div
            className="relative max-w-[1200px] mx-auto"
            style={{
              width: "calc(100vw * 1200 / 1920)",
              height: "min(530px, calc(100vw * 530 / 1920))",
            }}
          >

            {/* Blue Gradient Section - Middle layer (z-20), all corners rounded */}
            <div
              className="absolute z-20"
              style={{
                width: "100%",
                height: "min(440px, calc(100vw * 440 / 1920))",
                top: "min(90px, calc(100vw * 90 / 1920))",
                left: 0,
                background: "linear-gradient(180deg, #2C498C 0%, #223B77 100%)",
                borderRadius: "30px",
              }}
            >
              <div className="relative w-full h-full">
                <div
                  className="absolute flex flex-col max-[440px]:hidden"
                  style={{
                    left: "min(80px, calc(100vw * 80 / 1920))",
                    top: "min(70px, calc(100vw * 70 / 1920))",
                    gap: "min(14px, calc(100vw * 14 / 1920))",
                  }}
                >
                  <p className="text-white text-[20px] font-semibold">
                    {expert.tagline}
                  </p>
                  <h1 className="text-white font-bold text-[48px] leading-[64px]">
                    {expert.name} {expert.title}
                  </h1>
                </div>

                {/* Mobile version */}
                <p
                  className="absolute text-white text-[13px] font-medium hidden max-[440px]:block"
                  style={{
                    left: "calc(100vw * 80 / 1920)",
                    top: "calc(100vw * 70 / 1920)",
                  }}
                >
                  {expert.tagline}
                </p>

                <h1
                  className="absolute text-white font-bold text-[24px] leading-[34px] hidden max-[440px]:block"
                  style={{
                    left: "calc(100vw * 80 / 1920)",
                    top: "min(calc(100vw * 104 / 1920), 104px)",
                  }}
                >
                  {expert.name} {expert.title}
                </h1>

                <div
                  className="absolute flex items-center text-white opacity-50"
                  style={{
                    left: "min(80px, calc(100vw * 80 / 1920))",
                    bottom: "min(70px, calc(100vw * 70 / 1920))",
                  }}
                >
                  <Image src="/images/icon_email.svg" alt="email" width={24} height={24} unoptimized />
                  <span
                    className="text-base"
                    style={{
                      marginLeft: "min(6px, calc(100vw * 6 / 1920))",
                    }}
                  >
                    email
                  </span>
                  <span
                    className="text-base"
                    style={{
                      marginLeft: "min(10px, calc(100vw * 10 / 1920))",
                    }}
                  >
                    {expert.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Expert Image - Top layer (z-30), aligned with blue section bottom */}
            <div
              className="absolute z-30"
              style={{
                width: "min(400px, calc(100vw * 400 / 1920))",
                height: "min(530px, calc(100vw * 530 / 1920))",
                top: `calc(min(90px, calc(100vw * 90 / 1920)) + min(440px, calc(100vw * 440 / 1920)) - min(530px, calc(100vw * 530 / 1920)))`,
                right: "min(60px, calc(100vw * 60 / 1920))",
              }}
            >
              <Image
                src={expert.image || "/placeholder.svg"}
                alt={`${expert.title} ${expert.name}`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Gray Description Section - overlaps blue by 70px, only bottom corners rounded */}
          <div
            className="relative bg-[#F5F5F5] max-[440px]:hidden max-w-[1200px]"
            style={{
              width: "calc(100vw * 1200 / 1920)",
              margin: "0 auto",
              marginTop: "max(-70px, calc(-100vw * 70 / 1920))",
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "30px",
            }}
          >
            <div
              style={{
                paddingTop: "calc(min(70px, 100vw * 70 / 1920) + 50px)",
                paddingBottom: "50px",
                paddingLeft: "80px",
                paddingRight: "80px",
              }}
            >
              <p className="text-[#333333] text-[22px] leading-[36px] font-medium">{expert.description}</p>
            </div>
          </div>
        </div>

        <div className="hidden max-[440px]:block px-5">
          <div className="mx-auto" style={{ width: "calc(100vw * 335 / 375)" }}>
            {/* Container with extra top padding to accommodate photo overflow */}
            <div className="relative" style={{ paddingTop: "calc(100vw * 60 / 375)" }}>
              {/* Container for blue area and photo with bottom alignment */}
              <div className="relative flex items-end">
                {/* Blue gradient area - 335 x 385 (background only) */}
                <div
                  className="relative rounded-[20px] overflow-visible z-10"
                  style={{
                    width: "calc(100vw * 335 / 375)",
                    aspectRatio: "335 / 385",
                    background: "linear-gradient(180deg, #2C498C 0%, #223B77 100%)",
                  }}
                />

                {/* Expert photo - 335 x 444, bottom-aligned with blue area */}
                <div
                  className="absolute bottom-0 left-0 z-20"
                  style={{
                    width: "calc(100vw * 335 / 375)",
                    aspectRatio: "335 / 444",
                  }}
                >
                  <Image
                    src={expert.image || "/placeholder.svg"}
                    alt={`${expert.title} ${expert.name}`}
                    fill
                    className="object-cover object-bottom"
                  />
                </div>

                {/* Gradient overlay for text readability - on top of photo */}
                <div
                  className="absolute bottom-0 left-0 z-30"
                  style={{
                    width: "calc(100vw * 335 / 375)",
                    height: "calc(100vw * 140 / 375)",
                  }}
                >
                  <Image src="/images/design-mode/gradient-overlay-mobile.png" alt="" fill className="object-cover" />
                </div>

                {/* Email icon */}
                <div className="absolute top-3 right-3 z-40">
                  <Image
                    src="/images/icon_email.svg"
                    alt="email"
                    width={20}
                    height={20}
                    unoptimized
                    className="opacity-40"
                  />
                </div>

                {/* Text content - on top of gradient */}
                <div className="absolute bottom-6 left-0 right-0 z-40 text-white text-center px-6">
                  <p className="text-[13px] font-medium" style={{ marginBottom: "6px" }}>{expert.tagline}</p>
                  <h1 className="font-bold mb-1 text-[24px] leading-[34px]">
                    {expert.name} {expert.title}
                  </h1>
                </div>
              </div>

              {/* Gray description area */}
              <div
                className="relative bg-[#F5F5F5] z-0"
                style={{
                  width: "calc(100vw * 335 / 375)",
                  marginTop: "calc(100vw * -30 / 375)",
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                  paddingTop: "60px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "32px",
                }}
              >
                <p className="text-[#333333] font-medium text-[16px] leading-[22px] max-[440px]:text-center">
                  {expert.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section
        className="bg-white max-[440px]:!px-5 pt-[60px] max-[440px]:!pt-[20px]"
        style={{
          paddingLeft: "calc(100vw * 360 / 1920)",
          paddingRight: "calc(100vw * 360 / 1920)",
        }}
      >
        <div className="mx-auto max-[440px]:!w-full max-w-[1200px]" style={{ width: "calc(100vw * 1200 / 1920)", margin: "0 auto" }}>
          {/* Education & Qualifications */}
          <div className="grid grid-cols-[200px_1fr] gap-8 py-[60px] max-[440px]:py-[40px] max-[440px]:grid-cols-1 max-[440px]:gap-4">
            <h2 className="font-bold text-[#111111] max-[440px]:text-[18px] max-[440px]:leading-[25px] text-[26px] leading-[40px]">학력 및 자격</h2>
            <div className="space-y-2">
              {expert.education.map((item, index) => (
                <p key={index} className="text-[#333333] max-[440px]:text-[16px] max-[440px]:leading-[25px] text-[22px] leading-[36px] whitespace-pre-line">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-black/[0.07]" />

          {/* Career */}
          <div className="grid grid-cols-[200px_1fr] gap-8 py-[60px] max-[440px]:py-[40px] max-[440px]:grid-cols-1 max-[440px]:gap-4">
            <h2 className="font-bold text-[#111111] max-[440px]:text-[18px] max-[440px]:leading-[25px] text-[26px] leading-[40px]">경력</h2>
            <div className="space-y-2">
              {expert.career.map((item, index) => (
                <p key={index} className="text-[#333333] max-[440px]:text-[16px] max-[440px]:leading-[25px] text-[22px] leading-[36px] whitespace-pre-line">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-black/[0.07]" />

          {/* Main Work Areas */}
          <div className="grid grid-cols-[200px_1fr] gap-8 py-[60px] max-[440px]:py-[40px] max-[440px]:grid-cols-1 max-[440px]:gap-4">
            <h2 className="font-bold text-[#111111] max-[440px]:text-[18px] max-[440px]:leading-[25px] text-[26px] leading-[40px]">주요 업무분야</h2>
            <div className="flex flex-col gap-[20px] max-[440px]:gap-[16px]">
              {expert.workAreas.map((item, index) => (
                <p key={index} className="text-[#333333] max-[440px]:text-[16px] max-[440px]:leading-[25px] text-[22px] leading-[36px] whitespace-pre-line">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div
            className="flex justify-center pt-[60px] pb-[300px] max-[440px]:!pt-[20px] max-[440px]:!pb-[160px]"
          >
            <CommonButton onClick={() => router.push("/experts")}>목록으로 돌아가기</CommonButton>
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

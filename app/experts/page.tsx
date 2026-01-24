"use client"

import { useEffect } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryButton } from "@/components/inquiry-button"
import { expertsData } from "@/lib/experts-data"

export default function ExpertsPage() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation forceWhiteMode />

      <section className="bg-white pt-[220px] max-[440px]:!pt-[116px]">
        <div
          className="max-[440px]:!px-5"
          style={{ paddingLeft: "calc(100vw / 5.5)", paddingRight: "calc(100vw / 5.5)" }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="font-bold text-[#111111] mb-6 max-[440px]:mb-[10px] leading-tight max-[440px]:text-[30px] max-[440px]:leading-[39px] text-6xl">
                숫자 너머의 가치를
                <br />
                함께 만드는 파트너
              </h1>
              <p className="max-[440px]:text-[16px] max-[440px]:leading-[24px] text-2xl font-semibold" style={{ color: "rgba(17, 17, 17, 0.5)" }}>
                각 분야의 전문성을 갖춘 회계사들이 비즈니스의 든든한 동반자가 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white pb-[calc(100vw*300/1920)] max-[440px]:!pb-[160px] max-[440px]:!mt-[calc(100vw*60/375)]"
        style={{
          marginTop: "calc(100vw * 140 / 1920)",
        }}
      >
        <div
          className="max-[440px]:!px-5"
          style={{ paddingLeft: "calc(100vw * 360 / 1920)", paddingRight: "calc(100vw * 360 / 1920)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-[440px]:gap-[10px]">
            {expertsData.map((expert) => (
              <button
                key={expert.slug}
                onClick={() => router.push(`/experts/${expert.slug}`)}
                className="relative aspect-[387/512] rounded-[30px] max-[440px]:rounded-[20px] overflow-hidden cursor-pointer group isolate"
              >
                <Image
                  src={expert.imageWithBackground || expert.image || "/placeholder.svg"}
                  alt={`${expert.title} ${expert.name}`}
                  fill
                  className="object-cover object-top min-[441px]:group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 pointer-events-none max-[440px]:hidden"
                  style={{
                    height: "calc(100vw * 180 / 1920)",
                  }}
                >
                  <Image src="/images/design-mode/gradient-overlay-pc.png" alt="" fill className="object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none hidden max-[440px]:block max-[440px]:h-[calc(100vw*140/375)] max-[440px]:w-[calc(100vw*335/375)] max-[440px]:mx-auto">
                  <Image src="/images/design-mode/gradient-overlay-mobile.png" alt="" fill className="object-cover" />
                </div>
                <div
                  className="absolute flex flex-col items-start text-white z-10 max-[440px]:!left-6 max-[440px]:!bottom-6"
                  style={{
                    left: "calc(100vw * 40 / 1920)",
                    bottom: "calc(100vw * 40 / 1920)",
                  }}
                >
                  <p
                    className="font-semibold max-[440px]:!text-[16px] max-[440px]:!mb-1"
                    style={{
                      fontSize: "17px",
                      marginBottom: "min(8px, calc(100vw * 8 / 1920))",
                    }}
                  >
                    {expert.title}
                  </p>
                  <h3 className="font-bold max-[440px]:text-[24px]" style={{ fontSize: "30px" }}>{expert.name}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <InquiryButton />
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryButton } from "@/components/inquiry-button"

declare global {
  interface Window {
    kakao: any
  }
}

const KAKAO_MAP_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY

export default function LocationPage() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }

    // Kakao Maps SDK가 이미 로드되어 있으면 지도 초기화
    if (window.kakao && window.kakao.maps && mapRef.current) {
      window.kakao.maps.load(() => {
        initializeMap()
      })
    }
  }, [])

  const initializeMap = () => {
    if (!window.kakao || !window.kakao.maps || !mapRef.current) {
      return
    }

    try {
      const container = mapRef.current
      const options = {
        center: new window.kakao.maps.LatLng(37.274991, 127.071493),
        level: 3,
      }

      const map = new window.kakao.maps.Map(container, options)

      // Add marker
      const markerPosition = new window.kakao.maps.LatLng(37.274991, 127.071493)
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      })
      marker.setMap(map)
    } catch (error) {
      console.error('Failed to initialize Kakao Map:', error)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Kakao Map Script */}
      {KAKAO_MAP_KEY && (
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&autoload=false`}
          strategy="afterInteractive"
          onLoad={() => {
            window.kakao.maps.load(initializeMap)
          }}
        />
      )}

      {/* Navigation - using component with forceWhiteMode */}
      <Navigation forceWhiteMode />

      {/* Main Content */}
      <section
        className="bg-white pb-[calc(100vw*300/1920)] max-[439px]:!pb-[calc(100vw*160/375)] pt-[220px] max-[440px]:!pt-[116px]"
      >
        <div
          className="max-[440px]:!px-5"
          style={{ paddingLeft: "calc(100vw / 5.5)", paddingRight: "calc(100vw / 5.5)" }}
        >
          <div className="container mx-auto px-6 max-[440px]:px-0">
            <div className="max-w-7xl mx-auto">
              {/* Page Title */}
              <h1 className="font-bold text-gray-900 text-center max-[440px]:text-[30px] max-[440px]:leading-[39px] max-[440px]:mb-[60px] text-6xl leading-[80px] mb-[100px]">
                오시는 길
              </h1>

              {/* Map Container */}
              <div
                ref={mapRef}
                className="w-full mx-auto mb-12 aspect-[12/5] max-[440px]:aspect-[375/440] max-[440px]:mb-[60px] max-[440px]:!-mx-5 max-[440px]:!w-[100vw]"
                style={{
                  maxWidth: "1200px",
                }}
              />

              {/* Location Information */}
              <div className="mx-auto space-y-6 mb-8 max-[440px]:space-y-8 max-[440px]:mb-[40px]" style={{ maxWidth: "1200px" }}>
                <div className="flex gap-4 max-[440px]:flex-col max-[440px]:gap-2">
                  <div className="font-bold text-[#111111] min-w-[100px] max-[440px]:min-w-0 max-[440px]:text-[18px] max-[440px]:leading-[25px] text-[22px] leading-[31px]">주소</div>
                  <div className="text-[#535353] max-[440px]:text-[16px] max-[440px]:leading-[24px] text-[22px] leading-[31px]">경기도 용인시 기흥구 흥덕1로 79번길 2, 가은프라자 717호(영덕동)</div>
                </div>

                <div className="flex gap-4 max-[440px]:flex-col max-[440px]:gap-2">
                  <div className="font-bold text-[#111111] min-w-[100px] max-[440px]:min-w-0 max-[440px]:text-[18px] max-[440px]:leading-[25px] text-[22px] leading-[31px]">대중교통</div>
                  <div className="text-[#535353] max-[440px]:text-[16px] max-[440px]:leading-[24px] text-[22px] leading-[31px]">상현역 2번 출구에서 55번 버스 탑승 (15분 소요)</div>
                </div>

                <div className="flex gap-4 max-[440px]:flex-col max-[440px]:gap-2">
                  <div className="font-bold text-[#111111] min-w-[100px] max-[440px]:min-w-0 max-[440px]:text-[18px] max-[440px]:leading-[25px] text-[22px] leading-[31px]">주차장</div>
                  <div className="text-[#535353] max-[440px]:text-[16px] max-[440px]:leading-[24px] text-[22px] leading-[31px]">건물 내 주차 가능 (무료)</div>
                </div>
              </div>

              {/* Kakao Map Button */}
              <div className="mx-auto flex justify-start max-[440px]:justify-center" style={{ maxWidth: "1200px" }}>
                <Link
                  href="https://place.map.kakao.com/1394637530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 max-[440px]:border text-[#355CBA] border-[#355CBA] hover:bg-[#355CBA] hover:text-white transition-colors font-semibold max-[440px]:w-[calc(100vw*335/375)] max-[440px]:px-6 max-[440px]:py-3 max-[440px]:gap-1 max-[440px]:text-[15px] max-[440px]:leading-[22px] px-[30px] py-[18px] gap-[6px] text-[20px]"
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                >
                  <Image
                    src={isButtonHovered ? "/images/icon_map_pin_hover.svg" : "/images/icon_map_pin.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="max-[440px]:w-5 max-[440px]:h-5"
                  />
                  카카오맵 보러 가기
                </Link>
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

"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // React는 SSR HTML에 muted 속성을 내보내지 않아 iOS Safari에서 자동재생이 막힐 수 있으므로
  // 마운트 후 직접 muted를 걸고 재생한다. 모션 줄이기 설정이면 포스터 이미지만 보여준다.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause()
      return
    }
    video.muted = true
    video.play().catch(() => {})
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (poster: 영상의 첫 프레임. 영상 로드 전·재생 불가 환경에서 표시되며, 첫 프레임과 같아 전환이 보이지 않는다) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <Image
          src="/images/icon_scroll_down.svg"
          alt="Scroll down"
          width={60}
          height={30}
          className="w-[60px] h-[30px] max-[441px]:w-[50px] max-[441px]:h-[20px]"
          priority
        />
      </div>
    </section>
  )
}

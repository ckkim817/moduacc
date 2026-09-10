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
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>

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
        {/* 오버레이 50%: 문구 가독성 확보 (2026-09-10 고객 요청으로 문구 복원) */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white font-bold leading-[84px] max-[441px]:text-[30px] max-[441px]:leading-tight text-[66px] animate-fade-in-up">
          성장의 모든 순간,
          <br />
          모두
        </h1>
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

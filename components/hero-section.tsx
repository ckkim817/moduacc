"use client"

import Image from "next/image"

export function HeroSection() {
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

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/main_hero.png"
          alt="Modern office buildings"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white font-bold leading-tight max-[440px]:text-[30px] text-[66px] animate-fade-in-up">
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
          className="w-[60px] h-[30px] max-[440px]:w-[50px] max-[440px]:h-[20px]"
          priority
        />
      </div>
    </section>
  )
}

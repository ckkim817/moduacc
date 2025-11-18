import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <h1 className="text-white font-bold leading-tight max-[440px]:text-[30px] text-[66px]">
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
          className="w-15 h-7.5"
          priority
        />
      </div>
    </section>
  )
}

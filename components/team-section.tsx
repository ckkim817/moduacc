"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { CommonButton } from "@/components/common-button"

const leftColumnMembers = [
  {
    name: "이원준",
    role: "회계사",
    slug: "lee-won-jun",
    image: "/images/expert-lee-won-jun-bg.png",
  },
  {
    name: "김민준",
    role: "회계사",
    slug: "kim-min-jun",
    image: "/images/expert-kim-min-jun-bg.png",
  },
  {
    name: "최인규",
    role: "회계사",
    slug: "choi-in-gyu",
    image: "/images/expert-choi-in-gyu-bg.png",
  },
]

const rightColumnMembers = [
  {
    name: "임형진",
    role: "세무사",
    slug: "im-hyeong-jin",
    image: "/images/expert-im-hyeong-jin-bg.png",
  },
  {
    name: "김지섭",
    role: "회계사",
    slug: "kim-ji-seop",
    image: "/images/expert-kim-ji-seop-bg.png",
  },
  {
    name: "정광화",
    role: "회계사",
    slug: "jeong-gwang-hwa",
    image: "/images/expert-jeong-gwang-hwa-bg.png",
  },
]

export function TeamSection() {
  return (
    <section className="bg-white relative overflow-hidden pb-[300px] max-[440px]:pt-[40px] max-[440px]:pb-[160px]">
      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, -50%, 0);
          }
        }

        .animate-scroll-up {
          animation: scrollUp 120s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>

      <div className="max-w-[1240px] mx-auto px-5">
        <div className="flex flex-col min-[1070px]:flex-row min-[1070px]:items-start gap-[50px] min-[1070px]:gap-0">
          {/* Left side: Title and Button */}
          <div className="flex flex-col items-center min-[1070px]:items-start text-center min-[1070px]:text-left min-[1070px]:flex-shrink-0 min-[1070px]:w-[400px]">
            <h2 className="font-bold text-[#111111] text-balance max-[440px]:text-[24px] max-[440px]:leading-[34px] text-[48px] leading-[64px]">
              수치 너머의 가치를
              <br />
              함께 만드는 전문가들
            </h2>

            <div className="hidden min-[1070px]:block mt-[50px]">
              <CommonButton href="/experts">파트너 모두 보기</CommonButton>
            </div>
          </div>

          {/* Right side: Card Animation */}
          <div className="relative w-full h-[500px] min-[1070px]:w-[630px] min-[1070px]:h-[800px] min-[441px]:max-[1069px]:h-auto min-[441px]:max-[1069px]:aspect-[630/800] overflow-hidden min-[1070px]:flex-shrink-0 min-[1070px]:ml-auto">
            <div className="absolute -top-[1px] -left-[1px] -right-[1px] -bottom-[1px] pointer-events-none z-10">
              <Image src="/images/img_white_gradient.png" alt="" fill className="object-cover" priority />
            </div>

            <div className="grid grid-cols-2 gap-[10px] min-[441px]:gap-[30px] pointer-events-none relative z-0">
              <div className="flex flex-col gap-[10px] min-[441px]:gap-[30px] animate-scroll-up">
                {[...Array(6)].flatMap((_, arrayIndex) =>
                  leftColumnMembers.map((member, index) => (
                    <Link
                      key={`left-${arrayIndex}-${index}-${member.slug}`}
                      href={`/experts/${member.slug}`}
                      className="pointer-events-auto"
                    >
                      <Card className="overflow-hidden border-0 relative p-0 rounded-xl lg:rounded-3xl">
                        <div className="aspect-[3/4] overflow-hidden relative">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 45vw, 300px"
                          />
                        </div>
                        <div className="absolute left-4 bottom-4 lg:left-[40px] lg:bottom-[40px] flex flex-col items-start">
                          <p className="text-white font-normal text-xs lg:text-[18px] mb-1 lg:mb-[8px]">
                            {member.role}
                          </p>
                          <h3 className="text-white font-bold text-lg lg:text-[32px]">{member.name}</h3>
                        </div>
                      </Card>
                    </Link>
                  )),
                )}
              </div>

              <div className="flex flex-col gap-[10px] min-[441px]:gap-[30px] animate-scroll-up pt-10 min-[441px]:pt-[80px]">
                {[...Array(6)].flatMap((_, arrayIndex) =>
                  rightColumnMembers.map((member, index) => (
                    <Link
                      key={`right-${arrayIndex}-${index}-${member.slug}`}
                      href={`/experts/${member.slug}`}
                      className="pointer-events-auto"
                    >
                      <Card className="overflow-hidden border-0 relative p-0 rounded-xl lg:rounded-3xl">
                        <div className="aspect-[3/4] overflow-hidden relative">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 45vw, 300px"
                          />
                        </div>
                        <div className="absolute left-4 bottom-4 lg:left-[40px] lg:bottom-[40px] flex flex-col items-start">
                          <p className="text-white font-normal text-xs lg:text-[18px] mb-1 lg:mb-[8px]">
                            {member.role}
                          </p>
                          <h3 className="text-white font-bold text-lg lg:text-[32px]">{member.name}</h3>
                        </div>
                      </Card>
                    </Link>
                  )),
                )}
              </div>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="flex justify-center min-[1070px]:hidden">
            <CommonButton href="/experts">파트너 모두 보기</CommonButton>
          </div>
        </div>
      </div>
    </section>
  )
}

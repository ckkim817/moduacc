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
    <section className="bg-white relative overflow-hidden lg:mt-[300px] max-[440px]:pt-[40px] max-[440px]:pb-[160px] lg:py-0 lg:h-[calc(100vw*800/1920)]">
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
          animation: scrollUp 80s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>

      <div className="px-5 lg:px-[calc(100vw*360/1920)] max-w-[1920px] mx-auto h-full">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-[50px] lg:gap-0 h-full">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-shrink-0">
            <h2 className="font-bold text-gray-900 text-balance max-[440px]:text-[24px] max-[440px]:leading-[34px] text-[48px] leading-[64px]">
              수치 너머의 가치를
              <br />
              함께 만드는 전문가들
            </h2>
          </div>

          <div className="relative w-full h-[calc(100vw*800/630)] lg:w-[calc(100vw*630/1920)] lg:h-[calc(100vw*799/1920)] overflow-hidden lg:flex-shrink-0 lg:order-2">
            <div className="absolute top-0 left-0 right-0 h-[calc(100vw*800/630)] lg:h-[calc(100vw*800/1920)] pointer-events-none z-10">
              <Image src="/images/img_white_gradient.png" alt="" fill className="object-cover" priority />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-[calc(100vw*30/1920)] pointer-events-none relative z-0">
              <div className="flex flex-col gap-4 lg:gap-[calc(100vw*30/1920)] animate-scroll-up">
                {[...Array(6)].flatMap(() =>
                  leftColumnMembers.map((member, index) => (
                    <Link
                      key={`left-${index}-${member.slug}`}
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
                            sizes="(max-width: 1024px) 45vw, 15vw"
                          />
                        </div>
                        <div className="absolute left-4 bottom-4 lg:left-[calc(100vw*40/1920)] lg:bottom-[calc(100vw*40/1920)] flex flex-col items-start">
                          <p className="text-white font-normal text-xs lg:text-[calc(100vw*18/1920)] mb-1 lg:mb-[calc(100vw*8/1920)]">
                            {member.role}
                          </p>
                          <h3 className="text-white font-bold text-lg lg:text-[calc(100vw*32/1920)]">{member.name}</h3>
                        </div>
                      </Card>
                    </Link>
                  )),
                )}
              </div>

              <div className="flex flex-col gap-4 lg:gap-[calc(100vw*30/1920)] animate-scroll-up pt-10 lg:pt-[calc(100vw*80/1920)]">
                {[...Array(6)].flatMap(() =>
                  rightColumnMembers.map((member, index) => (
                    <Link
                      key={`right-${index}-${member.slug}`}
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
                            sizes="(max-width: 1024px) 45vw, 15vw"
                          />
                        </div>
                        <div className="absolute left-4 bottom-4 lg:left-[calc(100vw*40/1920)] lg:bottom-[calc(100vw*40/1920)] flex flex-col items-start">
                          <p className="text-white font-normal text-xs lg:text-[calc(100vw*18/1920)] mb-1 lg:mb-[calc(100vw*8/1920)]">
                            {member.role}
                          </p>
                          <h3 className="text-white font-bold text-lg lg:text-[calc(100vw*32/1920)]">{member.name}</h3>
                        </div>
                      </Card>
                    </Link>
                  )),
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start lg:absolute lg:left-[calc(100vw*360/1920)] lg:top-[calc(100vw*200/1920)] lg:order-1">
            <CommonButton href="/experts">파트너 모두 보기</CommonButton>
          </div>
        </div>
      </div>
    </section>
  )
}

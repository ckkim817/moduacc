import Link from "next/link"
import Image from "next/image"
import { CommonButton } from "@/components/common-button"

const services = [
  {
    slug: "bookkeeping",
    title: "기장",
    description:
      "기업의 재무상태와 세무 리스크를 정확히 관리할 수 있도록 전문 회계사가 직접 장부를 관리합니다. 안정적인 경영 판단을 위한 기초 데이터를 제공합니다.",
    image: "/images/service-bookkeeping.png",
  },
  {
    slug: "audit",
    title: "회계감사",
    description:
      "법정감사, 임의감사, 특수목적감사 등 다양한 감사 경험을 바탕으로, 기업의 재무제표 신뢰성을 제고하고 이해관계자에게 투명한 정보를 제공합니다.",
    image: "/images/service-audit.png",
  },
  {
    slug: "inheritance",
    title: "상속·증여·양도",
    description:
      "자산 이전 과정에서 발생할 수 있는 세금 부담을 최소화할 수 있도록 맞춤형 절세 전략을 수립하고, 안정적인 자산 관리 및 승계를 지원합니다.",
    image: "/images/service-inheritance.png",
  },
  {
    slug: "tax-appeal",
    title: "경정청구·조세불복",
    description:
      "잘못 납부한 세금을 돌려받을 수 있는 경정청구부터 국세청 과세처분에 대한 조세불복까지, 풍부한 실무 경험을 바탕으로 유리한 해결책을 제시합니다.",
    image: "/images/service-tax-appeal.png",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-white pt-[200px] pb-[300px] max-[440px]:!pt-[78px] max-[440px]:!pb-[160px]">
      <div className="max-w-[1240px] mx-auto px-5">
        <h2 className="font-bold text-[#111111] text-balance max-[440px]:text-[24px] max-[440px]:leading-[34px] max-[440px]:text-center text-[48px] leading-[64px]">
          비즈니스 전 과정을 아우르는
          <br />
          회계·세무 원스톱 솔루션
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 max-[440px]:mt-[40px] max-[440px]:gap-[40px] gap-x-5 gap-y-[100px]">
          {services.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`} className="flex flex-col cursor-pointer group">
              <div className="w-full relative rounded-[30px] overflow-hidden mb-[30px] max-[440px]:mb-4 max-[440px]:rounded-[20px] max-[440px]:[aspect-ratio:335/200]" style={{ aspectRatio: "590 / 400" }}>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  unoptimized
                  className="object-cover min-[441px]:group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="font-bold text-[#111111] mb-[10px] max-[440px]:mb-[6px] max-[440px]:text-[18px] max-[440px]:leading-[25px] text-[28px] leading-[39px] min-[441px]:px-[10px]">{service.title}</h3>

              <p className="text-gray-600 max-[440px]:text-[16px] max-[440px]:leading-[24px] text-[22px] leading-[31px] min-[441px]:px-[10px]">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center max-[440px]:mt-[50px] mt-[120px]">
          <CommonButton href="/services">서비스 전체 보기</CommonButton>
        </div>
      </div>
    </section>
  )
}

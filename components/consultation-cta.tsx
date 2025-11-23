import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ConsultationCTA() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden h-[271px] min-[440px]:h-[418px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/consultation-bg.png" alt="City skyline" fill className="object-cover" quality={85} />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center py-12 max-w-[1240px] mx-auto px-5">
        <h2 className="text-white text-4xl max-[440px]:text-[20px] max-[440px]:leading-[28px] max-[440px]:w-[315px] max-[440px]:h-[56px] font-bold mb-8 leading-tight">
          복잡한 회계,
          <br />
          지금 바로 전문가에게 맡겨보세요
        </h2>
        <a
          href="https://lp.appplay.co.kr/cnsl_appc_001.act?k=f85e86ec-25d0-449f-9426-2fcf0f3b1692"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="lg"
            className="h-auto border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#111111] transition-colors rounded-full font-bold text-[20px] leading-[28px] px-[30px] py-[15px] max-[440px]:text-[14px] max-[440px]:leading-[19px] max-[440px]:px-[16px] max-[440px]:py-[10px] cursor-pointer"
          >
            상담 신청하기
          </Button>
        </a>
      </div>
    </section>
  )
}

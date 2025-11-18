import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ConsultationCTA() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden h-[271px] lg:h-[418px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/consultation-bg.png" alt="City skyline" fill className="object-cover" quality={85} />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center py-12"
        style={{ paddingLeft: "calc(100vw / 5.5)", paddingRight: "calc(100vw / 5.5)" }}
      >
        <h2 className="text-white text-4xl max-[439px]:text-[20px] max-[439px]:leading-[28px] max-[439px]:w-[315px] max-[439px]:h-[56px] font-bold mb-8 leading-tight">
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
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 transition-colors text-lg px-8 py-6 rounded-full font-bold"
          >
            상담 신청하기
          </Button>
        </a>
      </div>
    </section>
  )
}

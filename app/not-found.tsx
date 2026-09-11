import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CommonButton } from "@/components/common-button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation forceWhiteMode />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-5 pt-[80px] pb-[80px]">
        <h1 className="font-bold text-[40px] leading-[56px] max-[441px]:text-[24px] max-[441px]:leading-[34px] mb-4" style={{ color: "#111111" }}>
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-[18px] leading-[25.2px] max-[441px]:text-[16px] max-[441px]:leading-[24px] mb-10" style={{ color: "#777777" }}>
          주소가 잘못 입력되었거나 삭제된 페이지입니다.
        </p>
        <Link href="/">
          <CommonButton>홈으로 가기</CommonButton>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

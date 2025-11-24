import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="text-white pt-[100px] pb-[120px] max-[440px]:pt-[60px] max-[440px]:pb-[calc(80px+env(safe-area-inset-bottom))]" style={{ backgroundColor: "#222222", fontFamily: "Pretendard, sans-serif" }}>
      <div className="max-w-[1240px] mx-auto px-5">
            {/* Logo */}
            <div className="mb-8">
              <Image src="/images/img_logo_white.png" alt="MODU Logo" width={170} height={53} className="h-[53px] max-[440px]:h-[44px] w-auto" />
            </div>

            <div className="mb-8 max-[440px]:mb-6">
              <div className="text-[16px] max-[440px]:text-[13px] space-y-2" style={{ color: "#BDBDBD" }}>
                <p className="max-[440px]:hidden">
                  모두세무회계그룹 | 회계·세무 | 대표자 : 이원준 | 사업자등록번호 : 162-21-01995
                </p>
                <div className="hidden max-[440px]:block space-y-2">
                  <p>모두세무회계그룹 | 회계·세무</p>
                  <p>대표자 : 이원준 | 사업자등록번호 : 162-21-01995</p>
                </div>
                <p>경기도 용인시 기흥구 흥덕1로 79번길 2, 가은프라자 717호(영덕동)</p>
                <p>Fax. 070-8282-2199 | contact@moduacc.com</p>
              </div>
            </div>

            <div
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 max-[440px]:gap-[40px] text-[16px] max-[440px]:text-[13px] pt-8 max-[440px]:pt-4"
              style={{ color: "#BDBDBD" }}
            >
              <div className="flex flex-wrap gap-2 max-[440px]:flex-col max-[440px]:gap-1">
                <Link href="/privacy" className="hover:text-[#FFFFFF] transition-colors">개인정보처리방침</Link>
              </div>
              <div>
                <p>@ Copyright 2025 Modoo Accounting Firm</p>
              </div>
            </div>
      </div>
    </footer>
  )
}

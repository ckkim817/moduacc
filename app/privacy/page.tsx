"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryButton } from "@/components/inquiry-button"

export default function PrivacyPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation forceWhiteMode />

      <section className="bg-white pt-[190px] max-[440px]:!pt-[116px]">
        <div
          className="max-[440px]:!px-5"
          style={{ paddingLeft: "calc(100vw * 360 / 1920)", paddingRight: "calc(100vw * 360 / 1920)" }}
        >
          <div className="max-w-[1160px] mx-auto">
            {/* Title */}
            <h1 className="font-bold text-[60px] leading-[80px] mb-[110px] text-center max-[440px]:text-[30px] max-[440px]:leading-[39px] max-[440px]:mb-[60px]" style={{ color: "#111111" }}>
              개인정보처리방침
            </h1>

            {/* Intro */}
            <p className="text-[22px] leading-[36px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              모두세무회계그룹(이하 "회사")은 「개인정보 보호법」을 준수하며, 개인정보가 어떠한 용도와 방식으로 이용되고 있는지, 그리고 개인정보 보호를 위해 어떠한 조치가 이루어지고 있는지를 안내드립니다.
            </p>

            {/* Section 1 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제1조. 처리하는 개인정보 항목, 처리 목적, 보유 기간
            </h2>
            <p className="text-[22px] leading-[36px] font-normal mb-[40px] whitespace-pre-line max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              {`① 고객 개인정보
개인정보 항목: 성명(사명), 연락처, 전자우편주소
처리 목적: 고객의 문의사항에 필요한 연락, 회사가 제작하는 간행물 발송
보유 기간: 처리 목적 달성 시 또는 개인정보 동의 철회 시까지

② 입사지원자 개인정보
개인정보 항목: 성명, 사진, 성별, 생년월일, 주소, 전화번호, 이메일, 학력, 경력, 병역, 수상·징계 내역, 제출 서류(이력서, 자기소개서, 성적증명서 등)에 기재된 개인정보 일체 자격 사항, 어학 능력
처리 목적: 신원, 학력, 경력 확인, 과거 지원 이력 관리, 채용 여부 결정 및 통지, 향후 채용 시 지원 의사 확인
보유 기간: 채용 절차 종료 후 3년간`}
            </p>

            {/* Section 2 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제2조. 개인정보의 제3자 제공
            </h2>
            <p className="text-[22px] leading-[36px] font-normal mb-[40px] whitespace-pre-line max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              회사는 정보주체의 동의가 있거나 법률에 특별한 규정이 있는 경우를 제외하고는 개인정보를 제3자에게 제공하지 않습니다.{"\n"}(관련 법령: 개인정보 보호법 제17조 및 제18조)
            </p>

            {/* Section 3 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제3조. 정보주체의 권리·의무 및 행사 방법
            </h2>
            <div className="text-[22px] leading-[36px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              <p className="mb-0">1. 정보주체는 다음의 권리를 행사할 수 있습니다:</p>
              <p className="pl-6 mb-0">a. 개인정보 열람 요구</p>
              <p className="pl-6 mb-0">b. 정정 요구</p>
              <p className="pl-6 mb-0">c. 삭제 요구</p>
              <p className="pl-6 mb-0">d. 처리정지 요구</p>
              <p className="mb-0">2. 권리 행사는 서면, 이메일, FAX 등을 통해 신청할 수 있으며, 회사는 지체 없이 조치합니다.</p>
              <p className="mb-0">3. 정정 또는 삭제 요청 시, 해당 조치를 완료할 때까지 개인정보는 이용 또는 제공되지 않습니다.</p>
              <p className="mb-0">4. 법정대리인이나 위임받은 자를 통해서도 권리 행사가 가능합니다. 이 경우 위임장이 필요합니다.</p>
              <p className="mb-0">5. 열람 및 처리정지 요구는 법령에 따라 제한될 수 있습니다. (개인정보 보호법 제35조 제5항, 제37조 제2항)</p>
              <p className="mb-0">6. 다른 법령에서 수집 대상으로 명시된 개인정보는 정정 및 삭제 요청이 제한될 수 있습니다.</p>
              <p className="mb-0">7. 열람, 정정, 삭제, 처리정지 요구 시 본인 또는 정당한 대리인인지 확인합니다.</p>
            </div>

            {/* Section 4 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제4조. 개인정보의 파기
            </h2>
            <div className="text-[22px] leading-[36px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              <p className="mb-0">•  보유 기간 경과 또는 처리 목적 달성 등 불필요해진 경우, 지체 없이 해당 개인정보를 파기합니다.</p>
              <p className="mb-0 pl-[14px]">(다만, 법령에 따라 보존해야 하는 경우 제외)</p>
              <p className="mb-0">•  보존이 필요한 개인정보는 다른 개인정보와 분리해 저장·관리합니다.</p>
              <p className="mb-0">•  파기 사유가 발생한 개인정보는 개인정보 보호 책임자의 승인 후 파기합니다.</p>
              <p className="mb-0">•  전자적 파일 형태는 복구 불가능한 방법으로 영구 삭제하며, 서면은 파쇄 또는 소각합니다.</p>
            </div>

            {/* Section 5 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제5조. 개인정보의 안전성 확보 조치
            </h2>
            <div className="text-[22px] leading-[36px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              <p className="mb-0">•  회사는 개인정보의 안전성을 확보하기 위해 다음과 같은 조치를 시행합니다.</p>
              <p className="mb-0">•  관리적 조치: 내부관리계획 수립 및 시행, 취급 담당자 최소화 및 교육</p>
              <p className="mb-0">•  기술적 조치: 접근권한 관리, 접근통제시스템 설치, 암호화, 보안프로그램 설치</p>
              <p className="mb-0">•  물리적 조치: 전산실, 자료보관실 등의 접근 통제</p>
            </div>

            {/* Section 6 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제6조. 개인정보 보호 책임자
            </h2>
            <div className="text-[22px] leading-[36px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              <p className="mb-0">회사는 개인정보 보호 및 관련 민원 처리를 위해 개인정보 보호 책임자와 담당자를 지정하고 있습니다.</p>
              <p className="mb-0">•  개인정보 보호 책임자</p>
              <p className="mb-0 pl-[14px]">•  직책: OOO</p>
              <p className="mb-0 pl-[14px]">•  성명: OOO</p>
              <p className="mb-0 pl-[14px]">•  이메일:</p>
              <p className="mb-0">•  개인정보 보호 실무 담당자</p>
              <p className="mb-0 pl-[14px]">•  직책: OOO</p>
              <p className="mb-0 pl-[14px]">•  성명: OOO</p>
              <p className="mb-0 pl-[14px]">•  이메일:</p>
            </div>

            {/* Section 7 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제7조. 개인정보 처리방침의 변경
            </h2>
            <p className="text-[22px] leading-[36px] font-normal max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              회사는 개인정보 처리방침을 변경하는 경우, 변경 내역과 시행 시기를 지속적으로 공개합니다.
            </p>
          </div>
        </div>
      </section>

      <div className="h-[300px] max-[440px]:h-[160px]" />

      <Footer />
      <InquiryButton />
    </div>
  )
}

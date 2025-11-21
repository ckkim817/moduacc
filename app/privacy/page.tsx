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

      <section className="bg-white pt-[220px] max-[440px]:!pt-[116px]">
        <div
          className="max-[440px]:!px-5"
          style={{ paddingLeft: "calc(100vw * 360 / 1920)", paddingRight: "calc(100vw * 360 / 1920)" }}
        >
          <div className="max-w-[1160px] mx-auto">
            {/* Title */}
            <h1 className="font-bold text-[60px] leading-[80px] mb-[110px] text-center max-[440px]:text-[30px] max-[440px]:leading-[39px] max-[440px]:mb-[60px]" style={{ color: "#111111" }}>
              개인정보 처리방침
            </h1>

            {/* Intro */}
            <p className="text-[20px] leading-[28px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              모두세무회계그룹(이하 "당사")은 개인정보보호법을 준수하고 있습니다. 본 개인정보 처리방침은 개인정보보호법 제30조(개인정보 처리방침의 수립 및 공개)에 의해 입사지원자, 고객정보 등 수집한 개인정보가 당사에서 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지를 고지하고자 함을 목적으로 합니다.
            </p>

            {/* Section 1 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제 1 조 (개인정보의 수집 및 이용)
            </h2>
            <div className="text-[20px] leading-[28px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              <p className="mb-4">① 당사는 개인정보보호법 제15조(개인정보의 수집·이용)에 명시된 다음 각 호에 따라 개인정보를 수집 및 이용합니다.</p>
              <p className="mb-0 pl-4">1. 정보주체의 동의를 받은 경우</p>
              <p className="mb-0 pl-4">2. 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우</p>
              <p className="mb-0 pl-4">3. 공공기관이 법령 등에서 정하는 소관 업무의 수행을 위하여 불가피한 경우</p>
              <p className="mb-0 pl-4">4. 정보주체와 체결한 계약을 이행하거나 계약을 체결하는 과정에서 정보주체의 요청에 따른 조치를 이행하기 위하여 필요한 경우</p>
              <p className="mb-0 pl-4">5. 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</p>
              <p className="mb-0 pl-4">6. 개인정보처리자의 정당한 이익을 달성하기 위하여 필요한 경우로서 명백하게 정보주체의 권리보다 우선하는 경우. 이 경우 개인정보처리자의 정당한 이익과 상당한 관련이 있고 합리적인 범위를 초과하지 아니하는 경우에 한함</p>
              <p className="mb-4 pl-4">7. 공중위생 등 공공의 안전과 안녕을 위하여 긴급히 필요한 경우</p>
              <p className="mb-4">② 당사는 다음과 같은 목적으로 입사지원자의 동의 하에 개인정보를 수집 및 이용합니다.</p>
              <p className="mb-0 pl-4">1. 목적: 홈페이지를 통한 채용절차진행, 채용관련 의사소통 등을 위한 제반 업무</p>
              <p className="mb-0 pl-4">2. 처리 및 보유기간: 지원일 기준 2년</p>
              <p className="mb-4 pl-4">3. 처리하는 개인정보 항목: 이름(국문명/영문명), 개인 이메일, 비밀번호, 국적, 성별, 생년월일, 주소, 자택 전화, 휴대폰 번호, 증명사진, 학력사항, 자격사항, 경력사항, 외국어 능력, 병역사항, 취업보호대상여부, 장애여부, 근무관련사항(근무가능 시작일, 근무형태, 희망연봉일)</p>
              <p className="mb-4">③ 당사는 Newsletter, 저널 등 발간물 발송을 위하여 구독자의 개인정보를 수집 및 이용합니다.</p>
              <p className="mb-0 pl-4">1. 목적: 뉴스레터 및 저널 발송</p>
              <p className="mb-0 pl-4">2. 처리 및 보유기간: 구독 취소 시 즉시 파기</p>
              <p className="mb-0 pl-4">3. 처리하는 개인정보 항목: 성명, 소속회사, 본부 및 직급, 연락처, (선택) E-mail, (우편 시)주소</p>
            </div>

            {/* Section 2 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제 2 조 (법인정보 수집 및 이용)
            </h2>
            <div className="text-[20px] leading-[28px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              <p className="mb-0">① 당사는 제안 요청자 정보를 법인정보로서 취급하고 있습니다.</p>
              <p className="mb-0">② 제안 요청자는 정보 정정 또는 삭제 등 개인정보 보호 관련 권리를 행사할 경우, 본 방침 제5조(정보주체의 권리와 그 행사방법)에 따라 행사할 수 있습니다.</p>
            </div>

            {/* Section 3 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제 3 조 (개인정보 제3자 제공)
            </h2>
            <div className="text-[20px] leading-[28px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              <p className="mb-4">당사는 정보주체의 개인정보를 제1조(개인정보의 수집 및 이용)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의 없이 범위를 초과하여 외부에 제공하지 않습니다. 다만, 다음의 경우에는 정보주체 동의 없이 개인정보를 제공할 수 있습니다.</p>
              <p className="mb-0 pl-4">1. 다른 법률에 특별한 규정이 있는 경우</p>
              <p className="mb-0 pl-4">2. 정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</p>
              <p className="mb-0 pl-4">3. 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 개인정보를 제공하는 경우</p>
              <p className="mb-0 pl-4">4. 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우로서 보호위원회의 심의·의결을 거친 경우</p>
              <p className="mb-0 pl-4">5. 조약, 그 밖의 국제협정의 이행을 위하여 외국정부 또는 국제기구에 제공하기 위하여 필요한 경우</p>
              <p className="mb-0 pl-4">6. 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우</p>
              <p className="mb-0 pl-4">7. 법원의 재판업무 수행을 위하여 필요한 경우</p>
              <p className="mb-0 pl-4">8. 형(刑) 및 감호, 보호처분의 집행을 위하여 필요한 경우</p>
            </div>

            {/* Section 4 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제 4 조 (개인정보의 파기)
            </h2>
            <div className="text-[20px] leading-[28px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              <p className="mb-0">① 당사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
              <p className="mb-0">② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 타 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.</p>
              <p className="mb-4">③ 개인정보의 파기절차 및 방법은 다음과 같습니다.</p>
              <p className="mb-0 pl-4">1. 파기절차</p>
              <p className="mb-4 pl-4">당사는 파기 사유가 발생한 개인정보를 선정하여 삭제하며, 수탁자 시스템에 저장된 개인정보는 정기적으로 파기 요청을 하여 파기확인서를 제출 받습니다.</p>
              <p className="mb-0 pl-4">2. 파기방법</p>
              <p className="mb-0 pl-4">종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기하며 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없도록 삭제합니다.</p>
            </div>

            {/* Section 5 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제 5 조 (정보주체의 권리와 그 행사방법)
            </h2>
            <div className="text-[20px] leading-[28px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              <p className="mb-4">① 정보주체는 당사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
              <p className="mb-0 pl-4">1. 개인정보 열람 요청</p>
              <p className="mb-0 pl-4">2. 필요 시 개인정보 정정 및 삭제 요청</p>
              <p className="mb-4 pl-4">3. 개인정보 처리중지 요청 및 이의제기</p>
              <p className="mb-0">② 제1항에 따른 권리 행사는 전화, 전자우편 등을 통하여 하실 수 있으며 개인정보 보호 책임자 또는 홈페이지에 기재된 연락처로 연락주시면 당사는 이에 대해 지체없이 조치하겠습니다.</p>
              <p className="mb-0">③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 당사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.</p>
              <p className="mb-0">④ 제1항 제3호에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여도 가능합니다. 다만 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 별도로 작성하여 제출하여야 합니다.</p>
              <p className="mb-0">⑤ 제1항 제3호에 따른 개인정보 처리 중지 요청 시 업무수행에 일부 제약이 있을 수 있습니다.</p>
            </div>

            {/* Section 6 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제 6 조 (개인정보의 안전성 확보 조치)
            </h2>
            <div className="text-[20px] leading-[28px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              <p className="mb-4">당사는 이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 안정성 확보 조치를 이행하고 있습니다.</p>
              <p className="mb-0 pl-4">1. 관리적 조치: 내부 규정 수립 및 운영, 개인정보보호 교육, 개인정보보호 내부점검 등</p>
              <p className="mb-0 pl-4">2. 기술적 조치: 접근권한 관리, 정보보호시스템 운영 등</p>
              <p className="mb-0 pl-4">3. 물리적 조치: 전산실, 자료실 등의 출입통제 등</p>
            </div>

            {/* Section 7 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제 7 조 (민원의 처리)
            </h2>
            <div className="text-[20px] leading-[28px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              <p className="mb-0">① 정보주체는 개인정보 처리에 관한 모든 문의사항 발생 시 당사 내 개인정보 보호책임자 및 담당자에게 문의할 수 있으며 개인정보보호 책임자 및 담당자는 정보주체의 문의사항에 대해 성실하게 답변해줄 의무가 있습니다.</p>
              <p className="mb-0">② 정보주체는 당사의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하거나 보다 자세한 도움이 필요할 경우 외부 기관에 문의할 수 있습니다.</p>
              <p className="mb-0">③ 당사의 개인정보보호 책임자와 담당자 정보 및 연락처는 제8조(개인정보 보호 책임자)에서 확인할 수 있습니다.</p>
            </div>

            {/* Section 8 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제 8 조 (개인정보 보호 책임자)
            </h2>
            <div className="text-[20px] leading-[28px] font-normal mb-[40px] max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              <p className="mb-4">당사는 개인정보를 보호하고 개인정보와 관련한 민원을 처리하기 위하여 개인정보보호법 제31조 제1항에 따라 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.</p>
              <p className="mb-0 font-semibold">개인정보 보호 책임자</p>
              <p className="mb-0 pl-4">직책 : 대표회계사</p>
              <p className="mb-0 pl-4">성명 : 정광화</p>
              <p className="mb-4 pl-4">이메일 : ghjungcpa@moduacc.com</p>
              <p className="mb-0 font-semibold">개인정보 보호 실무 담당자</p>
              <p className="mb-0 pl-4">직책 : 주임</p>
              <p className="mb-0 pl-4">성명 : 정미진</p>
              <p className="mb-0 pl-4">이메일 : sd0003759@moduacc.com</p>
            </div>

            {/* Section 9 */}
            <h2 className="text-[22px] leading-[31px] font-bold mb-[12px] max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#111111" }}>
              제 9 조 (고지의 의무)
            </h2>
            <p className="text-[20px] leading-[28px] font-normal max-[440px]:text-[17px] max-[440px]:leading-[26px]" style={{ color: "#333333" }}>
              본 방침에 내용 추가, 삭제, 수정이 있을 시에는 홈페이지를 통해 고지하도록 하겠습니다.
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

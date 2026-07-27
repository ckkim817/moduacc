"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CommonButton } from "@/components/common-button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    phone1: "010",
    phone2: "",
    phone3: "",
    emailId: "",
    emailDomain: "",
    emailDomainSelect: "",
    service: "",
    message: "",
    agreePrivacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const services = [
    "기장",
    "회계감사",
    "상속·증여·양도",
    "경정청구·조세불복",
    "세무조사대응",
    "기업가치평가",
    "실사(Due Diligence)",
    "자문",
    "기업진단",
    "보조금 검증",
  ]

  const emailDomains = [
    { value: "", label: "직접 입력" },
    { value: "naver.com", label: "naver.com" },
    { value: "gmail.com", label: "gmail.com" },
    { value: "daum.net", label: "daum.net" },
    { value: "kakao.com", label: "kakao.com" },
  ]

  const handleEmailDomainChange = (value: string) => {
    if (value === "" || value === "direct-input") {
      // "직접 입력" selected
      setFormData(prev => ({
        ...prev,
        emailDomainSelect: "",
        emailDomain: "",
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        emailDomainSelect: value,
        emailDomain: value,
      }))
    }
  }

  const isFormComplete = formData.name && formData.phone2 && formData.phone3 && formData.emailId && formData.emailDomain && formData.service && formData.message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone2 || !formData.phone3 || !formData.emailId || !formData.emailDomain || !formData.service || !formData.message) {
      alert("모든 필수 항목을 입력해주세요.")
      return
    }

    const submitData = {
      name: formData.name,
      phone: `${formData.phone1}-${formData.phone2}-${formData.phone3}`,
      email: `${formData.emailId}@${formData.emailDomain}`,
      service: formData.service,
      message: formData.message,
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby515QbVEGjfSgeb-eVUQZLmmAjxx9WC2Ar5MsUFZf4M44uPB020ZrhcN3JlNRp8Vzf/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        }
      )

      // no-cors 모드에서는 response를 읽을 수 없으므로 성공으로 간주
      alert("상담 신청이 완료되었습니다.")
      setFormData({
        name: "",
        phone1: "010",
        phone2: "",
        phone3: "",
        emailId: "",
        emailDomain: "",
        emailDomainSelect: "",
        service: "",
        message: "",
        agreePrivacy: false,
      })
    } catch (error) {
      console.error("제출 오류:", error)
      alert("상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation forceWhiteMode />

      {/* Hero Section */}
      <section className="bg-white pt-[220px] max-[440px]:!pt-[116px]">
        <div className="max-[440px]:!px-5">
          <div className="container mx-auto px-6 max-[440px]:px-0">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="font-bold text-[#111111] mb-6 leading-[56px] max-[440px]:text-[30px] max-[440px]:leading-[39px] text-[40px]">
                전문가와 함께,
                <br />
                정확한 해답을 찾아보세요.
              </h1>
              <p
                className="max-[440px]:text-[16px] max-[440px]:leading-[24px] max-[440px]:!mb-[60px] font-semibold text-[18px] leading-[25.2px]"
                style={{
                  marginBottom: "calc(100vw * 100 / 1920)",
                  color: "rgba(17, 17, 17, 0.5)",
                }}
              >
                세무·회계 관련 궁금한 사항을 남겨주시면
                <br />
                담당 파트너가 확인 후 신속하게 안내드리겠습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width hero image */}
        <div className="relative w-full mx-auto aspect-[1920/400] max-[440px]:aspect-[375/440]">
          <Image
            src="/images/contact-hero.png"
            alt="Contact hero"
            fill
            unoptimized
            className="object-cover max-[440px]:rounded-none"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pt-[160px] pb-[300px] bg-white max-[440px]:pt-[80px] max-[440px]:pb-[160px]">
        <div
          className="max-[440px]:!px-5"
          style={{
            paddingLeft: "min(calc(100vw * 420 / 1920), 420px)",
            paddingRight: "min(calc(100vw * 420 / 1920), 420px)",
          }}
        >
          {/* 좌우 패딩이 1920 에서 420px 로 상한에 걸리는데 필드는 안 늘어나므로,
              폼을 디자인 기준폭(1080px)에서 묶지 않으면 라벨↔필드 간격만 계속 벌어진다 */}
          <div className="w-full min-[440px]:max-w-[1080px] min-[440px]:mx-auto">
              <form onSubmit={handleSubmit} className="w-full min-[440px]:space-y-[40px] max-[440px]:space-y-[24px]">
                {/* 성함 */}
                <div className="flex flex-col max-[440px]:flex-col min-[440px]:flex-row min-[440px]:items-center min-[440px]:justify-between min-[440px]:gap-x-[24px]">
                  <label className="text-[22px] font-bold text-[#111111] min-[440px]:whitespace-nowrap min-[440px]:shrink-0 min-[440px]:mb-0 max-[440px]:mb-[8px] max-[440px]:text-[16px]">
                    성함 <span className="text-[#355CBA]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="성함을 입력해 주세요."
                    className="min-[440px]:w-[81.944%] min-[440px]:h-[60px] max-[440px]:w-full max-[440px]:h-[48px] min-[440px]:pl-[24px] min-[440px]:pr-4 max-[440px]:px-4 border border-[#DFDFDF] min-[440px]:rounded-[16px] max-[440px]:rounded-[8px] min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px] font-normal focus:outline-none placeholder:text-[#B7B7B7] caret-[#355CBA]"
                  />
                </div>

                {/* 연락처 */}
                <div className="flex flex-col max-[440px]:flex-col min-[440px]:flex-row min-[440px]:items-center min-[440px]:justify-between min-[440px]:gap-x-[24px]">
                  <label className="text-[22px] font-bold text-[#111111] min-[440px]:whitespace-nowrap min-[440px]:shrink-0 min-[440px]:mb-0 max-[440px]:mb-[8px] max-[440px]:text-[16px]">
                    연락처 <span className="text-[#355CBA]">*</span>
                  </label>
                  {/* PC 는 885px 안에서 "-" 구분자 2개를 두고 세 필드가 남은 폭을 균등 분배한다 (디자인 271/272/272) */}
                  <div className="flex items-center min-[440px]:w-[81.944%] min-[440px]:min-w-0 min-[440px]:gap-[12px] max-[440px]:gap-[6px] max-[440px]:w-full max-[440px]:min-w-0">
                    <Select value={formData.phone1} onValueChange={(value) => setFormData(prev => ({ ...prev, phone1: value }))}>
                      <SelectTrigger className="group min-[440px]:flex-1 min-[440px]:min-w-0 min-[440px]:!h-[60px] max-[440px]:flex-1 max-[440px]:min-w-0 max-[440px]:!h-[48px] min-[440px]:pl-[24px] min-[440px]:pr-4 max-[440px]:px-3 border border-[#DFDFDF] min-[440px]:rounded-[16px] max-[440px]:rounded-[8px] min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px] font-normal bg-white shadow-none focus:ring-0 focus:border-[#DFDFDF] [&>svg]:hidden">
                        <SelectValue />
                        <Image src="/images/icon_arrow_small_down.svg" alt="" width={24} height={24} className="max-[440px]:w-4 max-[440px]:h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </SelectTrigger>
                      <SelectContent align="end" className="max-[440px]:min-w-[100px] border-[#DFDFDF] rounded-[16px] max-[440px]:rounded-[8px]">
                        <SelectItem value="010" className="min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px]">010</SelectItem>
                        <SelectItem value="011" className="min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px]">011</SelectItem>
                        <SelectItem value="016" className="min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px]">016</SelectItem>
                        <SelectItem value="017" className="min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px]">017</SelectItem>
                        <SelectItem value="018" className="min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px]">018</SelectItem>
                        <SelectItem value="019" className="min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px]">019</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-[#777777] text-[14px] min-[440px]:text-[24px] shrink-0">-</span>
                    <input
                      type="text"
                      value={formData.phone2}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone2: e.target.value.replace(/[^0-9]/g, '').slice(0, 4) }))}
                      placeholder="1234"
                      className="min-[440px]:flex-1 min-[440px]:min-w-0 min-[440px]:h-[60px] max-[440px]:flex-1 max-[440px]:min-w-0 max-[440px]:h-[48px] min-[440px]:pl-[24px] min-[440px]:pr-4 max-[440px]:px-3 border border-[#DFDFDF] min-[440px]:rounded-[16px] max-[440px]:rounded-[8px] min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px] font-normal text-left focus:outline-none placeholder:text-[#B7B7B7] caret-[#355CBA]"
                    />
                    <span className="text-[#777777] text-[14px] min-[440px]:text-[24px] shrink-0">-</span>
                    <input
                      type="text"
                      value={formData.phone3}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone3: e.target.value.replace(/[^0-9]/g, '').slice(0, 4) }))}
                      placeholder="1234"
                      className="min-[440px]:flex-1 min-[440px]:min-w-0 min-[440px]:h-[60px] max-[440px]:flex-1 max-[440px]:min-w-0 max-[440px]:h-[48px] min-[440px]:pl-[24px] min-[440px]:pr-4 max-[440px]:px-3 border border-[#DFDFDF] min-[440px]:rounded-[16px] max-[440px]:rounded-[8px] min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px] font-normal text-left focus:outline-none placeholder:text-[#B7B7B7] caret-[#355CBA]"
                    />
                  </div>
                </div>

                {/* 이메일 */}
                <div className="flex flex-col max-[440px]:flex-col min-[440px]:flex-row min-[440px]:items-center min-[440px]:justify-between min-[440px]:gap-x-[24px]">
                  <label className="text-[22px] font-bold text-[#111111] min-[440px]:whitespace-nowrap min-[440px]:shrink-0 min-[440px]:mb-0 max-[440px]:mb-[8px] max-[440px]:text-[16px]">
                    이메일 <span className="text-[#355CBA]">*</span>
                  </label>
                  {/* Desktop: emailId @ domain input + select */}
                  <div className="hidden min-[768px]:flex items-center min-[768px]:w-[81.667%] min-[768px]:min-w-0">
                    <input
                      type="text"
                      value={formData.emailId}
                      onChange={(e) => setFormData(prev => ({ ...prev, emailId: e.target.value }))}
                      placeholder="abcd1234"
                      className="flex-1 basis-[270px] min-w-0 h-[60px] pl-[24px] pr-4 border border-[#DFDFDF] rounded-[16px] text-[18px] leading-[25.2px] font-normal focus:outline-none placeholder:text-[#B7B7B7] caret-[#355CBA]"
                    />
                    <span className="text-[20px] leading-[28px] font-normal text-[#777777] mx-[12px] shrink-0">@</span>
                    <input
                      type="text"
                      value={formData.emailDomain}
                      onChange={(e) => setFormData(prev => ({ ...prev, emailDomain: e.target.value, emailDomainSelect: "" }))}
                      placeholder="naver.com"
                      className="flex-1 basis-[270px] min-w-0 h-[60px] pl-[24px] pr-4 border border-[#DFDFDF] rounded-[16px] text-[18px] leading-[25.2px] font-normal focus:outline-none placeholder:text-[#B7B7B7] caret-[#355CBA]"
                    />
                    <Select value={formData.emailDomainSelect} onValueChange={(value) => handleEmailDomainChange(value)}>
                      <SelectTrigger className="group basis-[280px] min-w-0 !h-[60px] ml-[20px] pl-[24px] pr-4 border border-[#DFDFDF] rounded-[16px] text-[18px] leading-[25.2px] font-normal bg-white shadow-none focus:ring-0 focus:border-[#DFDFDF] [&>svg]:hidden text-[#111111] data-[placeholder]:text-[#111111]">
                        <SelectValue placeholder="직접 입력" />
                        <Image src="/images/icon_arrow_small_down.svg" alt="" width={24} height={24} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </SelectTrigger>
                      <SelectContent align="end" className="min-w-[280px] border-[#DFDFDF] rounded-[16px]">
                        {emailDomains.map((domain) => (
                          <SelectItem key={domain.value || "direct"} value={domain.value || "direct-input"} className="text-[18px] leading-[25.2px]">
                            {domain.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Mobile: emailId @ select/input (1줄) */}
                  <div className="min-[768px]:hidden grid grid-cols-[1fr_auto_1fr] items-center w-full gap-[6px] min-[440px]:gap-[12px] min-[440px]:w-[81.667%] min-[440px]:min-w-0">
                    <input
                      type="text"
                      value={formData.emailId}
                      onChange={(e) => setFormData(prev => ({ ...prev, emailId: e.target.value }))}
                      placeholder="abcd1234"
                      className="w-full min-w-0 h-[48px] px-3 border border-[#DFDFDF] rounded-[8px] text-[14px] font-normal focus:outline-none placeholder:text-[#B7B7B7] caret-[#355CBA] min-[440px]:h-[60px] min-[440px]:pl-[24px] min-[440px]:pr-4 min-[440px]:rounded-[16px] min-[440px]:text-[18px] min-[440px]:leading-[25.2px]"
                    />
                    <span className="text-[14px] font-normal text-[#777777] min-[440px]:text-[20px] min-[440px]:leading-[28px]">@</span>
                    <div className="relative w-full min-w-0">
                      <input
                        type="text"
                        value={formData.emailDomain}
                        onChange={(e) => setFormData(prev => ({ ...prev, emailDomain: e.target.value, emailDomainSelect: "" }))}
                        placeholder="직접 입력"
                        className="w-full h-[48px] pl-3 pr-9 border border-[#DFDFDF] rounded-[8px] text-[14px] font-normal focus:outline-none placeholder:text-[#B7B7B7] caret-[#355CBA] text-[#111111] min-[440px]:h-[60px] min-[440px]:pl-[24px] min-[440px]:pr-[52px] min-[440px]:rounded-[16px] min-[440px]:text-[18px] min-[440px]:leading-[25.2px]"
                      />
                      <Select value={formData.emailDomainSelect || ""} onValueChange={(value) => handleEmailDomainChange(value)}>
                        <SelectTrigger className="group absolute right-2 min-[440px]:right-[24px] top-1/2 -translate-y-1/2 w-auto h-auto p-0 border-0 bg-transparent shadow-none focus:ring-0 [&>svg]:hidden">
                          <Image src="/images/icon_arrow_small_down.svg" alt="" width={16} height={16} className="min-[440px]:w-6 min-[440px]:h-6 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                        </SelectTrigger>
                        <SelectContent align="end" className="border-[#DFDFDF] rounded-[8px] min-[440px]:rounded-[16px]">
                          {emailDomains.map((domain) => (
                            <SelectItem key={domain.value || "direct"} value={domain.value || "direct-input"} className="text-[14px] min-[440px]:text-[18px] min-[440px]:leading-[25.2px]">
                              {domain.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* 문의 서비스 */}
                <div className="flex flex-col max-[440px]:flex-col min-[440px]:flex-row min-[440px]:items-center min-[440px]:justify-between min-[440px]:gap-x-[24px]">
                  <label className="text-[22px] font-bold text-[#111111] min-[440px]:whitespace-nowrap min-[440px]:shrink-0 min-[440px]:mb-0 max-[440px]:mb-[8px] max-[440px]:text-[16px]">
                    문의 서비스 <span className="text-[#355CBA]">*</span>
                  </label>
                  <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                    <SelectTrigger className={`group min-[440px]:w-[81.944%] min-[440px]:!h-[60px] max-[440px]:w-full max-[440px]:!h-[48px] min-[440px]:pl-[24px] min-[440px]:pr-4 max-[440px]:px-3 border border-[#DFDFDF] min-[440px]:rounded-[16px] max-[440px]:rounded-[8px] min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px] font-normal bg-white shadow-none focus:ring-0 focus:border-[#DFDFDF] [&>svg]:hidden data-[placeholder]:text-[#B7B7B7] ${!formData.service ? 'text-[#B7B7B7]' : 'text-[#111111]'}`}>
                      <SelectValue placeholder="카테고리를 선택해 주세요." />
                      <Image src="/images/icon_arrow_small_down.svg" alt="" width={24} height={24} className="max-[440px]:w-4 max-[440px]:h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </SelectTrigger>
                    <SelectContent align="end" className="max-[440px]:min-w-[calc(100vw-40px)] border-[#DFDFDF] min-[440px]:rounded-[16px] max-[440px]:rounded-[8px]">
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px]">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* 문의 내용 */}
                <div className="flex flex-col max-[440px]:flex-col min-[440px]:flex-row min-[440px]:items-start min-[440px]:justify-between min-[440px]:gap-x-[24px]">
                  <label className="text-[22px] font-bold text-[#111111] min-[440px]:whitespace-nowrap min-[440px]:shrink-0 min-[440px]:mb-0 min-[440px]:pt-4 max-[440px]:mb-[8px] max-[440px]:text-[16px]">
                    문의 내용 <span className="text-[#355CBA]">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="문의 내용을 입력해 주세요."
                    className="min-[440px]:w-[81.944%] min-[440px]:h-[200px] max-[440px]:w-full max-[440px]:h-[150px] min-[440px]:px-[25px] min-[440px]:py-[20px] max-[440px]:px-[16px] max-[440px]:py-[20px] scroll-pb-[20px] border border-[#DFDFDF] min-[440px]:rounded-[16px] max-[440px]:rounded-[8px] min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px] font-normal focus:outline-none resize-none placeholder:text-[#B7B7B7] caret-[#355CBA] [&::-webkit-scrollbar]:w-[12px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:my-[8px] [&::-webkit-scrollbar-thumb]:bg-[#DFDFDF] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding"
                  />
                </div>

                {/* 개인정보 동의 */}
                <div className="flex justify-center min-[440px]:!mt-[100px] max-[440px]:!mt-[40px]">
                  <p className="min-[440px]:text-[18px] min-[440px]:leading-[25.2px] max-[440px]:text-[14px] font-normal text-[#777777] max-[440px]:text-center">
                    <span className="min-[440px]:inline max-[440px]:hidden">상담 신청 시 <Link href="/privacy" className="underline cursor-pointer hover:text-[#111111] transition-colors">개인정보 수집 및 이용</Link>에 동의하는 것으로 간주됩니다.</span>
                    <span className="min-[440px]:hidden max-[440px]:inline">상담 신청 시 <Link href="/privacy" className="underline cursor-pointer hover:text-[#111111] transition-colors">개인정보 수집 및 이용</Link>에<br />동의하는 것으로 간주됩니다.</span>
                  </p>
                </div>

                {/* 제출 버튼 */}
                <div className="flex justify-center min-[440px]:!mt-[40px] max-[440px]:!mt-[24px]">
                  <CommonButton
                    size="sub"
                    onClick={() => {
                      if (isSubmitting) return
                      const form = document.querySelector('form')
                      if (form) form.requestSubmit()
                    }}
                    bgColor={isFormComplete && !isSubmitting ? '#223B77' : undefined}
                    textColor={isFormComplete && !isSubmitting ? '#FFFFFF' : '#B7B7B7'}
                    className={`max-[440px]:text-[16px] max-[440px]:leading-[22px] max-[440px]:px-[30px] max-[440px]:py-[16px] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? '신청 중...' : '상담 신청하기'}
                  </CommonButton>
                </div>
              </form>
            </div>
          </div>
      </section>

      <Footer />
    </div>
  )
}

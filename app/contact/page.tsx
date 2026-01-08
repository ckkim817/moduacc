"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
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
    emailDomain: "naver.com",
    emailDomainSelect: "naver.com",
    service: "",
    message: "",
    agreePrivacy: false,
  })
  const [isMobileDirectInput, setIsMobileDirectInput] = useState(false)

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

  const handleEmailDomainChange = (value: string, isMobile = false) => {
    if (value === "" || value === "direct-input") {
      // "직접 입력" selected
      if (isMobile) {
        setIsMobileDirectInput(true)
      }
      setFormData(prev => ({
        ...prev,
        emailDomainSelect: "",
        emailDomain: "",
      }))
    } else {
      if (isMobile) {
        setIsMobileDirectInput(false)
      }
      setFormData(prev => ({
        ...prev,
        emailDomainSelect: value,
        emailDomain: value,
      }))
    }
  }

  const isFormComplete = formData.name && formData.phone2 && formData.phone3 && formData.emailId && formData.emailDomain && formData.service && formData.message

  const handleSubmit = (e: React.FormEvent) => {
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

    console.log("상담 신청 데이터:", submitData)
    alert("상담 신청이 완료되었습니다.")
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation forceWhiteMode />

      {/* Hero Section */}
      <section className="bg-white pt-[220px] max-[440px]:!pt-[116px]">
        <div className="max-[440px]:!px-5">
          <div className="container mx-auto px-6 max-[440px]:px-0">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="font-bold text-[#111111] mb-6 leading-tight max-[440px]:text-[30px] max-[440px]:leading-[39px] text-6xl">
                전문가와 함께,
                <br />
                정확한 해답을 찾아보세요.
              </h1>
              <p
                className="max-[440px]:text-[16px] max-[440px]:leading-[24px] max-[440px]:!mb-[60px] font-semibold text-2xl"
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
          <div className="w-full">
              <form onSubmit={handleSubmit} className="w-full min-[441px]:space-y-[40px] max-[440px]:space-y-[24px]">
                {/* 성함 */}
                <div className="flex flex-col max-[440px]:flex-col min-[441px]:flex-row min-[441px]:items-center min-[441px]:justify-between">
                  <label className="text-[24px] font-bold text-[#111111] min-[441px]:mb-0 max-[440px]:mb-[8px] max-[440px]:text-[16px]">
                    성함 <span className="text-[#355CBA]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="성함을 입력해 주세요"
                    className="min-[441px]:w-[885px] min-[441px]:h-[60px] max-[440px]:w-full max-[440px]:h-[48px] min-[441px]:pl-[24px] min-[441px]:pr-4 max-[440px]:px-4 border border-[#DFDFDF] min-[441px]:rounded-[16px] max-[440px]:rounded-[8px] min-[441px]:text-[20px] max-[440px]:text-[14px] font-normal focus:outline-none placeholder:text-[#B7B7B7]"
                  />
                </div>

                {/* 연락처 */}
                <div className="flex flex-col max-[440px]:flex-col min-[441px]:flex-row min-[441px]:items-center min-[441px]:justify-between">
                  <label className="text-[24px] font-bold text-[#111111] min-[441px]:mb-0 max-[440px]:mb-[8px] max-[440px]:text-[16px]">
                    연락처 <span className="text-[#355CBA]">*</span>
                  </label>
                  <div className="flex items-center min-[441px]:gap-[22px] max-[440px]:gap-[6px] max-[440px]:w-full max-[440px]:min-w-0">
                    <Select value={formData.phone1} onValueChange={(value) => setFormData(prev => ({ ...prev, phone1: value }))}>
                      <SelectTrigger className="group min-[441px]:w-[280px] min-[441px]:h-[60px] max-[440px]:flex-1 max-[440px]:min-w-0 max-[440px]:h-[48px] min-[441px]:pl-[24px] min-[441px]:pr-4 max-[440px]:px-3 border border-[#DFDFDF] min-[441px]:rounded-[16px] max-[440px]:rounded-[8px] min-[441px]:text-[20px] max-[440px]:text-[14px] font-normal bg-white shadow-none focus:ring-0 focus:border-[#DFDFDF] [&>svg]:hidden">
                        <SelectValue />
                        <Image src="/images/icon_arrow_small_down.svg" alt="" width={24} height={24} className="max-[440px]:w-4 max-[440px]:h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </SelectTrigger>
                      <SelectContent align="end" className="min-[441px]:min-w-[280px] max-[440px]:min-w-[100px] border-[#DFDFDF] rounded-[16px] max-[440px]:rounded-[8px]">
                        <SelectItem value="010" className="min-[441px]:text-[20px] max-[440px]:text-[14px]">010</SelectItem>
                        <SelectItem value="011" className="min-[441px]:text-[20px] max-[440px]:text-[14px]">011</SelectItem>
                        <SelectItem value="016" className="min-[441px]:text-[20px] max-[440px]:text-[14px]">016</SelectItem>
                        <SelectItem value="017" className="min-[441px]:text-[20px] max-[440px]:text-[14px]">017</SelectItem>
                        <SelectItem value="018" className="min-[441px]:text-[20px] max-[440px]:text-[14px]">018</SelectItem>
                        <SelectItem value="019" className="min-[441px]:text-[20px] max-[440px]:text-[14px]">019</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-[#777777] text-[14px] min-[441px]:hidden shrink-0">-</span>
                    <input
                      type="text"
                      value={formData.phone2}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone2: e.target.value.replace(/[^0-9]/g, '').slice(0, 4) }))}
                      placeholder="1234"
                      className="min-[441px]:w-[280px] min-[441px]:h-[60px] max-[440px]:flex-1 max-[440px]:min-w-0 max-[440px]:h-[48px] min-[441px]:pl-[24px] min-[441px]:pr-4 max-[440px]:px-3 border border-[#DFDFDF] min-[441px]:rounded-[16px] max-[440px]:rounded-[8px] min-[441px]:text-[20px] max-[440px]:text-[14px] font-normal text-left focus:outline-none placeholder:text-[#B7B7B7]"
                    />
                    <span className="text-[#777777] text-[14px] min-[441px]:hidden shrink-0">-</span>
                    <input
                      type="text"
                      value={formData.phone3}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone3: e.target.value.replace(/[^0-9]/g, '').slice(0, 4) }))}
                      placeholder="1234"
                      className="min-[441px]:w-[280px] min-[441px]:h-[60px] max-[440px]:flex-1 max-[440px]:min-w-0 max-[440px]:h-[48px] min-[441px]:pl-[24px] min-[441px]:pr-4 max-[440px]:px-3 border border-[#DFDFDF] min-[441px]:rounded-[16px] max-[440px]:rounded-[8px] min-[441px]:text-[20px] max-[440px]:text-[14px] font-normal text-left focus:outline-none placeholder:text-[#B7B7B7]"
                    />
                  </div>
                </div>

                {/* 이메일 */}
                <div className="flex flex-col max-[440px]:flex-col min-[441px]:flex-row min-[441px]:items-center min-[441px]:justify-between">
                  <label className="text-[24px] font-bold text-[#111111] min-[441px]:mb-0 max-[440px]:mb-[8px] max-[440px]:text-[16px]">
                    이메일 <span className="text-[#355CBA]">*</span>
                  </label>
                  {/* Desktop: emailId @ domain input + select */}
                  <div className="min-[441px]:flex items-center max-[440px]:hidden">
                    <input
                      type="text"
                      value={formData.emailId}
                      onChange={(e) => setFormData(prev => ({ ...prev, emailId: e.target.value }))}
                      placeholder="abcd1234"
                      className="w-[270px] h-[60px] pl-[24px] pr-4 border border-[#DFDFDF] rounded-[16px] text-[20px] font-normal focus:outline-none placeholder:text-[#B7B7B7]"
                    />
                    <span className="text-[24px] font-normal text-[#777777] mx-[12px]">@</span>
                    <input
                      type="text"
                      value={formData.emailDomain}
                      onChange={(e) => setFormData(prev => ({ ...prev, emailDomain: e.target.value, emailDomainSelect: "" }))}
                      placeholder="naver.com"
                      className="w-[270px] h-[60px] pl-[24px] pr-4 border border-[#DFDFDF] rounded-[16px] text-[20px] font-normal focus:outline-none placeholder:text-[#B7B7B7]"
                    />
                    <Select value={formData.emailDomainSelect} onValueChange={(value) => handleEmailDomainChange(value)}>
                      <SelectTrigger className="group w-[280px] h-[60px] ml-[20px] pl-[24px] pr-4 border border-[#DFDFDF] rounded-[16px] text-[20px] font-normal bg-white shadow-none focus:ring-0 focus:border-[#DFDFDF] [&>svg]:hidden">
                        <SelectValue placeholder="직접 입력" />
                        <Image src="/images/icon_arrow_small_down.svg" alt="" width={24} height={24} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </SelectTrigger>
                      <SelectContent align="end" className="min-w-[280px] border-[#DFDFDF] rounded-[16px]">
                        {emailDomains.map((domain) => (
                          <SelectItem key={domain.value || "direct"} value={domain.value || "direct-input"} className="text-[20px]">
                            {domain.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Mobile: emailId @ select/input (1줄) */}
                  <div className="min-[441px]:hidden flex items-center gap-[6px] w-full min-w-0">
                    <input
                      type="text"
                      value={formData.emailId}
                      onChange={(e) => setFormData(prev => ({ ...prev, emailId: e.target.value }))}
                      placeholder="abcd1234"
                      className="flex-1 min-w-0 h-[48px] px-3 border border-[#DFDFDF] rounded-[8px] text-[14px] font-normal focus:outline-none placeholder:text-[#B7B7B7]"
                    />
                    <span className="text-[14px] font-normal text-[#777777] shrink-0">@</span>
                    {isMobileDirectInput ? (
                      <input
                        type="text"
                        value={formData.emailDomain}
                        onChange={(e) => setFormData(prev => ({ ...prev, emailDomain: e.target.value }))}
                        placeholder="직접 입력"
                        className="flex-1 min-w-0 h-[48px] px-3 border border-[#DFDFDF] rounded-[8px] text-[14px] font-normal focus:outline-none placeholder:text-[#B7B7B7]"
                      />
                    ) : (
                      <Select value={formData.emailDomainSelect} onValueChange={(value) => handleEmailDomainChange(value, true)}>
                        <SelectTrigger className="group flex-1 min-w-0 h-[48px] px-3 border border-[#DFDFDF] rounded-[8px] text-[14px] font-normal bg-white shadow-none focus:ring-0 focus:border-[#DFDFDF] [&>svg]:hidden">
                          <SelectValue placeholder="직접 입력" />
                          <Image src="/images/icon_arrow_small_down.svg" alt="" width={16} height={16} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                        </SelectTrigger>
                        <SelectContent align="end" className="border-[#DFDFDF] rounded-[8px]">
                          {emailDomains.map((domain) => (
                            <SelectItem key={domain.value || "direct"} value={domain.value || "direct-input"} className="text-[14px]">
                              {domain.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                </div>

                {/* 문의 서비스 */}
                <div className="flex flex-col max-[440px]:flex-col min-[441px]:flex-row min-[441px]:items-center min-[441px]:justify-between">
                  <label className="text-[24px] font-bold text-[#111111] min-[441px]:mb-0 max-[440px]:mb-[8px] max-[440px]:text-[16px]">
                    문의 서비스 <span className="text-[#355CBA]">*</span>
                  </label>
                  <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                    <SelectTrigger className={`group min-[441px]:w-[885px] min-[441px]:h-[60px] max-[440px]:w-full max-[440px]:h-[48px] min-[441px]:pl-[24px] min-[441px]:pr-4 max-[440px]:px-3 border border-[#DFDFDF] min-[441px]:rounded-[16px] max-[440px]:rounded-[8px] min-[441px]:text-[20px] max-[440px]:text-[14px] font-normal bg-white shadow-none focus:ring-0 focus:border-[#DFDFDF] [&>svg]:hidden ${!formData.service ? 'text-[#B7B7B7]' : 'text-[#111111]'}`}>
                      <SelectValue placeholder="카테고리를 선택해 주세요" />
                      <Image src="/images/icon_arrow_small_down.svg" alt="" width={24} height={24} className="max-[440px]:w-4 max-[440px]:h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </SelectTrigger>
                    <SelectContent align="end" className="min-[441px]:min-w-[885px] max-[440px]:min-w-[calc(100vw-40px)] border-[#DFDFDF] min-[441px]:rounded-[16px] max-[440px]:rounded-[8px]">
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="min-[441px]:text-[20px] max-[440px]:text-[14px]">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* 문의 내용 */}
                <div className="flex flex-col max-[440px]:flex-col min-[441px]:flex-row min-[441px]:items-start min-[441px]:justify-between">
                  <label className="text-[24px] font-bold text-[#111111] min-[441px]:mb-0 min-[441px]:pt-4 max-[440px]:mb-[8px] max-[440px]:text-[16px]">
                    문의 내용 <span className="text-[#355CBA]">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="문의 내용을 입력해 주세요"
                    className="min-[441px]:w-[885px] min-[441px]:h-[200px] max-[440px]:w-full max-[440px]:h-[150px] min-[441px]:pl-[24px] min-[441px]:pr-4 min-[441px]:py-4 max-[440px]:p-3 border border-[#DFDFDF] min-[441px]:rounded-[16px] max-[440px]:rounded-[8px] min-[441px]:text-[20px] max-[440px]:text-[14px] font-normal focus:outline-none resize-none placeholder:text-[#B7B7B7]"
                  />
                </div>

                {/* 개인정보 동의 */}
                <div className="flex justify-center min-[441px]:!mt-[100px] max-[440px]:!mt-[40px]">
                  <p className="min-[441px]:text-[20px] max-[440px]:text-[14px] font-normal text-[#777777] max-[440px]:text-center">
                    <span className="min-[441px]:inline max-[440px]:hidden">상담 신청 시 <span className="underline cursor-pointer">개인정보 수집 및 이용</span>에 동의하는 것으로 간주됩니다.</span>
                    <span className="min-[441px]:hidden max-[440px]:inline">상담 신청 시 <span className="underline cursor-pointer">개인정보 수집 및 이용</span>에<br />동의하는 것으로 간주됩니다.</span>
                  </p>
                </div>

                {/* 제출 버튼 */}
                <div className="flex justify-center min-[441px]:!mt-[40px] max-[440px]:!mt-[24px]">
                  <CommonButton
                    onClick={() => {
                      const form = document.querySelector('form')
                      if (form) form.requestSubmit()
                    }}
                    bgColor={isFormComplete ? '#223B77' : undefined}
                    textColor={isFormComplete ? '#FFFFFF' : '#B7B7B7'}
                    className="max-[440px]:w-full"
                  >
                    상담 신청하기
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

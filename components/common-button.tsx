"use client"

import type React from "react"

import Link from "next/link"

// 디자인상 버튼 글자 크기는 메인 페이지만 20, 나머지 페이지는 18 (PC 기준)
//   main  20/28    서비스 전체 보기 · 파트너 모두 보기 · 전체 블로그 보기
//   sub   18/25.2  목록으로 돌아가기 · 상담 신청하기
// 모바일(<lg) 크기와 패딩은 두 종류가 동일하다.
type CommonButtonSize = "main" | "sub"

const SIZE_CLASSES: Record<CommonButtonSize, string> = {
  main: "lg:text-[20px] lg:leading-[28px]",
  sub: "lg:text-[18px] lg:leading-[25.2px]",
}

interface CommonButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  bgColor?: string
  textColor?: string
  size?: CommonButtonSize
}

export function CommonButton({ children, href, onClick, className = "", bgColor, textColor, size = "sub" }: CommonButtonProps) {
  const buttonClasses = `relative inline-flex items-center justify-center font-bold rounded-full text-[15px] leading-[22px] px-5 py-3 ${SIZE_CLASSES[size]} lg:px-[44px] lg:py-[22.5px] transition-colors cursor-pointer overflow-hidden before:absolute before:inset-0 before:bg-black/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200 ${className}`
  const buttonStyles = {
    backgroundColor: bgColor || "#F5F5F5",
    color: textColor || "#535353",
  }

  if (href) {
    return (
      <Link href={href} className={buttonClasses} style={buttonStyles}>
        <span className="relative z-10">{children}</span>
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses} style={buttonStyles}>
      <span className="relative z-10">{children}</span>
    </button>
  )
}

"use client"

import type React from "react"

import Link from "next/link"

// 버튼 글자 크기는 위치와 무관하게 PC 18/25.2 하나뿐이다.
// (디자인 규칙이 24/20/18 → 메인 20·나머지 18 → 전부 18 순으로 두 번 바뀐 끝의 값)

interface CommonButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  bgColor?: string
  textColor?: string
}

export function CommonButton({ children, href, onClick, className = "", bgColor, textColor }: CommonButtonProps) {
  const buttonClasses = `relative inline-flex items-center justify-center font-bold rounded-full text-[15px] leading-[22px] px-5 py-3 lg:text-[18px] lg:leading-[25.2px] lg:px-[44px] lg:py-[22.5px] transition-colors cursor-pointer overflow-hidden before:absolute before:inset-0 before:bg-black/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200 ${className}`
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

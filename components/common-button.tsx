"use client"

import type React from "react"

import Link from "next/link"

interface CommonButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  bgColor?: string
  textColor?: string
}

export function CommonButton({ children, href, onClick, className = "", bgColor, textColor }: CommonButtonProps) {
  const buttonClasses = `relative inline-flex items-center justify-center font-bold rounded-full text-[15px] leading-[22px] px-5 py-3 lg:text-[24px] lg:leading-[34px] lg:px-[44px] lg:py-[22.5px] transition-colors cursor-pointer overflow-hidden before:absolute before:inset-0 before:bg-black/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200 ${className}`
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

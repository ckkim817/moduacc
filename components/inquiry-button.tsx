"use client"

import { useState } from "react"
import Image from "next/image"

export function InquiryButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    // Here you would typically open a chat widget or modal
    console.log("Inquiry button clicked")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed z-50 hover:scale-105 transition-transform max-[439px]:bottom-4 max-[439px]:right-4 min-[440px]:bottom-8 min-[440px]:right-8"
      aria-label="문의하기"
    >
      <Image src="/images/img_channel_talk.svg" alt="문의하기" width={80} height={80} className="w-20 h-20" />
    </button>
  )
}

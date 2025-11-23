"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import ChannelService from "@/lib/channel-service"

export function InquiryButton() {
  const [unreadCount, setUnreadCount] = useState(0)
  const [isMessengerOpen, setIsMessengerOpen] = useState(false)

  useEffect(() => {
    ChannelService.loadScript()

    ChannelService.boot({
      pluginKey: "26d8bb53-48e6-4ab3-aefe-b499cdb9b681",
      customLauncherSelector: "#channel-talk-button",
      hideChannelButtonOnBoot: true,
      hidePopup: true,
    })

    // Listen for badge changes (unread messages)
    ChannelService.onBadgeChanged((unread, alert) => {
      setUnreadCount(alert)
    })

    // Hide button when messenger opens
    ChannelService.onShowMessenger(() => {
      setIsMessengerOpen(true)
    })

    // Show button when messenger closes
    ChannelService.onHideMessenger(() => {
      setIsMessengerOpen(false)
    })
  }, [])

  return (
    <button
      id="channel-talk-button"
      className={`fixed z-50 hover:scale-105 transition-transform max-[439px]:bottom-4 max-[439px]:right-4 min-[440px]:bottom-[40px] min-[440px]:right-[40px] ${isMessengerOpen ? 'invisible' : 'visible'}`}
      aria-label="문의하기"
    >
      <div className="relative">
        <Image src="/images/img_channel_talk.svg" alt="문의하기" width={80} height={80} className="w-[60px] h-[60px] min-[440px]:w-[80px] min-[440px]:h-[80px]" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 bg-red-500 text-white font-bold rounded-full flex items-center justify-center text-[10px] min-w-[15px] h-[15px] px-0.5 min-[440px]:text-xs min-[440px]:min-w-[20px] min-[440px]:h-[20px] min-[440px]:px-1">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </div>
    </button>
  )
}

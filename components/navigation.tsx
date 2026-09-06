"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'

interface NavigationProps {
  forceWhiteMode?: boolean
  // 메인 페이지는 메뉴 전부를 볼드로 표시한다. usePathname으로 판정하면 Vercel ISR 재생성 시
  // 서버가 "/"가 아닌 경로로 렌더해 font-medium HTML이 내려오고, 하이드레이션은 클래스 불일치를
  // 고치지 않아 첫 화면이 얇게 보였다. 페이지가 명시적으로 넘겨 서버·클라이언트가 항상 일치하게 한다.
  isMainPage?: boolean
}

export function Navigation({ forceWhiteMode = false, isMainPage = false }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCompanySubmenuOpen, setIsCompanySubmenuOpen] = useState(false)
  const pathname = usePathname()

  const isCompanyActive = pathname?.startsWith("/company") || pathname === "/location"
  const isServicesActive = pathname?.startsWith("/services")
  const isExpertsActive = pathname?.startsWith("/experts")
  const isBlogActive = pathname?.startsWith("/blog")
  const isContactActive = pathname?.startsWith("/contact")

  useEffect(() => {
    if (forceWhiteMode) {
      setIsScrolled(true)
      return
    }

    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const navHeight = 110
      const scrollThreshold = heroHeight - navHeight / 2

      setIsScrolled(window.scrollY > scrollThreshold)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [forceWhiteMode])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsCompanySubmenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (typeof document === 'undefined') return

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // 현재 페이지와 같은 링크를 누르면 이동 대신 맨 위로 스크롤한다.
  // 클릭 시점의 실제 주소(window.location)를 읽으므로 서버 렌더 경로와 무관하게 동작한다.
  const scrollToTopIfCurrent = (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.location.pathname === path) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
  const handleLogoClick = scrollToTopIfCurrent("/")
  const handleCompanyClick = scrollToTopIfCurrent("/company")
  const handleServicesClick = scrollToTopIfCurrent("/services")
  const handleLocationClick = scrollToTopIfCurrent("/location")
  const handleExpertsClick = scrollToTopIfCurrent("/experts")
  const handleBlogClick = scrollToTopIfCurrent("/blog")
  const handleContactClick = scrollToTopIfCurrent("/contact")

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          forceWhiteMode || isScrolled || isMobileMenuOpen ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1240px] mx-auto min-[830px]:px-5">
          <div
            className="flex items-center justify-between h-14 min-[830px]:h-[110px]"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center max-[829px]:pl-[16px] max-[829px]:py-[10px]"
              onClick={handleLogoClick}
            >
              <Image
                src={
                  forceWhiteMode || isScrolled || isMobileMenuOpen
                    ? "/images/img_logo_black.png"
                    : "/images/img_logo_white.png"
                }
                alt="MODU Logo"
                width={197}
                height={62}
                className="h-[62px] w-auto max-[829px]:h-[36px]"
                priority
                quality={95}
              />
            </Link>

            {/* Desktop Navigation */}
            <div
              className="hidden min-[830px]:flex items-center gap-2 min-[830px]:h-[110px]"
            >
              {/* MODU Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("company")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/company"
                  onClick={handleCompanyClick}
                  className={`text-[18px] transition-all px-4 py-2 rounded-[10px] block ${
                    isCompanyActive || isMainPage ? "font-bold" : "font-medium"
                  } ${
                    forceWhiteMode || isScrolled
                      ? "text-[#414141] hover:bg-gray-200/80"
                      : "text-white hover:bg-gray-700/80"
                  }`}
                >
                  <span className="inline-flex flex-col items-center after:content-['MODU'] after:font-bold after:h-0 after:overflow-hidden after:invisible">MODU</span>
                </Link>
                {activeDropdown === "company" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                    onMouseEnter={() => setActiveDropdown("company")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div
                      className="bg-white rounded-[24px] shadow-lg py-2 overflow-hidden"
                      style={{ width: "147px", minWidth: "147px" }}
                    >
                      <Link
                        href="/company"
                        onClick={handleCompanyClick}
                        className="block px-4 py-2 text-[18px] font-medium text-[#333333] hover:text-[#355CBA] transition-colors text-center"
                      >
                        ABOUT
                      </Link>
                      <Link
                        href="/location"
                        onClick={handleLocationClick}
                        className="block px-4 py-2 text-[18px] font-medium text-[#333333] hover:text-[#355CBA] transition-colors text-center"
                      >
                        LOCATION
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/services"
                onClick={handleServicesClick}
                className={`text-[18px] transition-all px-4 py-2 rounded-[10px] block ${
                  isServicesActive || isMainPage ? "font-bold" : "font-medium"
                } ${
                  forceWhiteMode || isScrolled
                    ? "text-[#414141] hover:bg-gray-200/80"
                    : "text-white hover:bg-gray-700/80"
                }`}
              >
                <span className="inline-flex flex-col items-center after:content-['SERVICE'] after:font-bold after:h-0 after:overflow-hidden after:invisible">SERVICE</span>
              </Link>

              <Link
                href="/experts"
                onClick={handleExpertsClick}
                className={`text-[18px] transition-all px-4 py-2 rounded-[10px] block ${
                  isExpertsActive || isMainPage ? "font-bold" : "font-medium"
                } ${
                  forceWhiteMode || isScrolled
                    ? "text-[#414141] hover:bg-gray-200/80"
                    : "text-white hover:bg-gray-700/80"
                }`}
              >
                <span className="inline-flex flex-col items-center after:content-['MEMBER'] after:font-bold after:h-0 after:overflow-hidden after:invisible">MEMBER</span>
              </Link>

              <Link
                href="/blog"
                onClick={handleBlogClick}
                className={`text-[18px] transition-all px-4 py-2 rounded-[10px] block ${
                  isBlogActive || isMainPage ? "font-bold" : "font-medium"
                } ${
                  forceWhiteMode || isScrolled
                    ? "text-[#414141] hover:bg-gray-200/80"
                    : "text-white hover:bg-gray-700/80"
                }`}
              >
                <span className="inline-flex flex-col items-center after:content-['BLOG'] after:font-bold after:h-0 after:overflow-hidden after:invisible">BLOG</span>
              </Link>

              <Link
                href="/contact"
                onClick={handleContactClick}
                className={`text-[18px] transition-all px-4 py-2 rounded-[10px] block ${
                  isContactActive || isMainPage ? "font-bold" : "font-medium"
                } ${
                  forceWhiteMode || isScrolled
                    ? "text-[#414141] hover:bg-gray-200/80"
                    : "text-white hover:bg-gray-700/80"
                }`}
              >
                <span className="inline-flex flex-col items-center after:content-['CONTACT'] after:font-bold after:h-0 after:overflow-hidden after:invisible">CONTACT</span>
              </Link>

              <a
                href="https://lp.appplay.co.kr/cnsl_appc_001.act?k=f85e86ec-25d0-449f-9426-2fcf0f3b1692"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 block"
              >
                <Image
                  src={
                    forceWhiteMode || isScrolled
                      ? "/images/btn_tax_refund_navy.png"
                      : "/images/btn_tax_refund_white.png"
                  }
                  alt="세금 환급 신청"
                  width={162}
                  height={53}
                  className="transition-opacity hover:opacity-80"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="min-[830px]:hidden focus:outline-none max-[829px]:mr-[16px] max-[829px]:py-[13px]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <Image src="/icon-close.svg" alt="Close menu" width={30} height={30} />
              ) : (
                <Image
                  src={forceWhiteMode || isScrolled ? "/icon-hamburger-black.svg" : "/icon-hamburger-white.svg"}
                  alt="Open menu"
                  width={30}
                  height={30}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`min-[830px]:hidden bg-white overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-6 py-6">
            {/* MODU with submenu */}
            <div className="mb-4">
              <button
                onClick={() => setIsCompanySubmenuOpen(!isCompanySubmenuOpen)}
                className="w-full flex items-center justify-between text-base font-bold text-[#111111] py-2"
              >
                MODU
                <Image
                  src="/images/icon_arrow_medium_down.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={`transition-transform duration-300 ${isCompanySubmenuOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isCompanySubmenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-2 pl-4 space-y-1">
                  <Link href="/company" className="block text-base font-bold text-[#999999] py-1.5">
                    ABOUT
                  </Link>
                  <Link href="/location" className="block text-base font-bold text-[#999999] py-1.5">
                    LOCATION
                  </Link>
                </div>
              </div>
            </div>

            {/* SERVICE */}
            <Link href="/services" className="block text-base font-bold text-[#111111] py-2 mb-4">
              SERVICE
            </Link>

            {/* MEMBER */}
            <Link href="/experts" className="block text-base font-bold text-[#111111] py-2 mb-4">
              MEMBER
            </Link>

            {/* BLOG */}
            <Link href="/blog" onClick={handleBlogClick} className="block text-base font-bold text-[#111111] py-2 mb-4">
              BLOG
            </Link>

            {/* CONTACT */}
            <Link href="/contact" onClick={handleContactClick} className="block text-base font-bold text-[#111111] py-2 mb-4">
              CONTACT
            </Link>

            {/* Tax Refund Application */}
            <a
              href="https://lp.appplay.co.kr/cnsl_appc_001.act?k=f85e86ec-25d0-449f-9426-2fcf0f3b1692"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base font-bold py-2"
              style={{ color: "#355CBA" }}
            >
              세금 환급 신청
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[90] min-[830px]:hidden"
          style={{ top: "80px" }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

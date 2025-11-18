"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState, useEffect, useRef } from "react"
import { blogPosts } from "@/lib/blog-data"

const getPostsForPage = (page: number) => {
  const startIndex = (page - 1) * 9
  const endIndex = startIndex + 9
  return blogPosts.slice(startIndex, endIndex)
}

const featuredPosts = blogPosts.slice(0, 5)

export default function BlogPage() {
  const [currentFeatured, setCurrentFeatured] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(blogPosts.length / 9)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  useEffect(() => {
    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }

      intervalRef.current = setInterval(() => {
        if (!isHovered) {
          setIsFading(true)
          setTimeout(() => {
            setCurrentFeatured((prev) => (prev + 1) % featuredPosts.length)
            setIsFading(false)
          }, 300)
        }
      }, 5000)
    }

    startInterval()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, currentFeatured])

  const nextFeatured = () => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentFeatured((prev) => (prev + 1) % featuredPosts.length)
      setIsFading(false)
    }, 300)

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setIsFading(true)
        setTimeout(() => {
          setCurrentFeatured((prev) => (prev + 1) % featuredPosts.length)
          setIsFading(false)
        }, 300)
      }
    }, 5000)
  }

  const prevFeatured = () => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentFeatured((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)
      setIsFading(false)
    }, 300)

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setIsFading(true)
        setTimeout(() => {
          setCurrentFeatured((prev) => (prev + 1) % featuredPosts.length)
          setIsFading(false)
        }, 300)
      }
    }, 5000)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const getPageNumbers = () => {
    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5]
    } else if (currentPage >= totalPages - 1) {
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    } else {
      return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
    }
  }

  const displayedPosts = getPostsForPage(currentPage)

  return (
    <>
      <Navigation forceWhiteMode={true} />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-white pt-[190px] max-[440px]:!pt-[116px]">
          <div
            className="max-[440px]:!px-5"
            style={{ paddingLeft: "calc(100vw * 3 / 16)", paddingRight: "calc(100vw * 3 / 16)" }}
          >
            <div className="container mx-auto px-6">
              <div className="max-w-7xl mx-auto text-center">
                <h1 className="font-bold text-gray-900 mb-6 max-[440px]:mb-[10px] leading-tight max-[440px]:text-[30px] max-[440px]:leading-[39px] text-6xl">
                  회계사가 쉽게 풀어주는
                  <br />
                  재무와 세무의 모든 것
                </h1>
                <p
                  className="max-[440px]:text-[16px] max-[440px]:leading-[24px] text-2xl font-semibold"
                  style={{
                    marginBottom: "calc(100vw * 140 / 1920)",
                    color: "rgba(17, 17, 17, 0.5)", // Changed text color to #111111 with 50% opacity
                  }}
                >
                  전문가의 노하우를 누구나 이해할 수 있도록 나누는 곳입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Carousel Section */}
        <section
          style={{
            paddingBottom: "calc(100vw * 160 / 1920)",
          }}
        >
          <div
            className="max-[440px]:!px-5"
            style={{ paddingLeft: "calc(100vw * 3 / 16)", paddingRight: "calc(100vw * 3 / 16)" }}
          >
            <div
              className="overflow-hidden rounded-3xl max-[440px]:w-[calc(100vw*335/375)] max-[440px]:!h-[calc(100vw*524/375)] max-[440px]:mx-auto max-[440px]:flex max-[440px]:flex-col group"
              style={{
                backgroundColor: "#2D3345",
                height: "calc(100vw * 480 / 1920)",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full max-[440px]:hidden">
                {/* Desktop layout - Text on left */}
                <div
                  className="relative h-full flex flex-col justify-between"
                  style={{
                    padding: "calc(100vw * 60 / 1920)",
                  }}
                >
                  <div>
                    <div
                      className="font-semibold text-[18px]"
                      style={{ color: "#FFFFFF", marginBottom: "calc(100vw * 16 / 1920)" }}
                    >
                      오늘의 커버스토리
                    </div>
                    <h2
                      className="font-bold leading-tight max-[440px]:text-[20px] max-[440px]:leading-[28px] text-[28px] leading-[39px]"
                      style={{
                        color: "#FFFFFF",
                        marginBottom: "calc(100vw * 16 / 1920)",
                      }}
                    >
                      {featuredPosts[currentFeatured].title}
                    </h2>
                    <div
                      className="text-[18px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      {featuredPosts[currentFeatured].date}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={prevFeatured}
                      className="hover:opacity-80 transition-opacity"
                      aria-label="Previous post"
                    >
                      <Image src="/images/icon_swipe_arrow_left.svg" alt="Previous" width={40} height={40} />
                    </button>
                    <button
                      onClick={nextFeatured}
                      className="hover:opacity-80 transition-opacity"
                      aria-label="Next post"
                    >
                      <Image src="/images/icon_swipe_arrow_right.svg" alt="Next" width={40} height={40} />
                    </button>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPosts[currentFeatured].slug}`}
                  className="relative h-full block overflow-hidden"
                >
                  <Image
                    src={featuredPosts[currentFeatured].image || "/placeholder.svg"}
                    alt={featuredPosts[currentFeatured].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{
                      opacity: isFading ? 0 : 1,
                      transition: "opacity 300ms ease-in-out",
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>
              </div>

              <div className="hidden max-[440px]:flex max-[440px]:flex-col max-[440px]:h-full">
                {/* Top half - Image (335 x 262) */}
                <Link
                  href={`/blog/${featuredPosts[currentFeatured].slug}`}
                  className="relative block w-full h-[calc(100vw*262/375)] flex-shrink-0 overflow-hidden rounded-t-3xl"
                >
                  <Image
                    src={featuredPosts[currentFeatured].image || "/placeholder.svg"}
                    alt={featuredPosts[currentFeatured].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{
                      opacity: isFading ? 0 : 1,
                      transition: "opacity 300ms ease-in-out",
                    }}
                    sizes="100vw"
                  />
                </Link>

                {/* Bottom half - Text content (335 x 262) */}
                <div className="flex flex-col justify-between w-full h-[calc(100vw*262/375)] flex-shrink-0 px-5 py-6">
                  <div>
                    <div className="text-[14px] font-semibold mb-3" style={{ color: "#FFFFFF" }}>
                      오늘의 커버스토리
                    </div>
                    <h2
                      className="text-lg font-bold leading-snug mb-3 max-[440px]:text-[20px] max-[440px]:leading-[28px] text-[28px] leading-[39px]"
                      style={{
                        color: "#FFFFFF",
                      }}
                    >
                      {featuredPosts[currentFeatured].title}
                    </h2>
                    <div
                      className="text-[14px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      {featuredPosts[currentFeatured].date}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={prevFeatured}
                      className="hover:opacity-80 transition-opacity"
                      aria-label="Previous post"
                    >
                      <Image src="/images/icon_swipe_arrow_left.svg" alt="Previous" width={40} height={40} />
                    </button>
                    <button
                      onClick={nextFeatured}
                      className="hover:opacity-80 transition-opacity"
                      aria-label="Next post"
                    >
                      <Image src="/images/icon_swipe_arrow_right.svg" alt="Next" width={40} height={40} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Posts Section */}
        <section
          className="max-[440px]:!pb-[160px]"
          style={{
            paddingBottom: "calc(100vw * 300 / 1920)",
          }}
        >
          <div
            className="max-[440px]:!px-5"
            style={{ paddingLeft: "calc(100vw * 3 / 16)", paddingRight: "calc(100vw * 3 / 16)" }}
          >
            <h2 className="font-bold mb-6 text-3xl" style={{ color: "#111111" }}>
              모든 글
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 mb-16 max-[440px]:gap-y-4 max-[440px]:mb-[50px]" style={{ columnGap: "calc(100vw * 20 / 1920)" }}>
              {displayedPosts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`} className="overflow-hidden group cursor-pointer block max-[440px]:flex max-[440px]:items-start max-[440px]:gap-[14px]">
                  <div className="relative overflow-hidden rounded-2xl mb-[24px] max-[440px]:mb-0 max-[440px]:w-[110px] max-[440px]:h-[80px] max-[440px]:flex-shrink-0 max-[440px]:rounded-xl" style={{ aspectRatio: "387 / 250" }}>
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="max-[440px]:flex-1 max-[440px]:pt-[8px]">
                    <div className="font-semibold mb-[6px] max-[440px]:mb-[2px] max-[440px]:text-[12px] text-[18px]" style={{ color: "#355CBA" }}>
                      {post.category}
                    </div>
                    <h3 className="font-bold text-[22px] leading-[31px] max-[440px]:text-[16px] max-[440px]:leading-[24px] max-[440px]:line-clamp-2" style={{ color: "#111111" }}>
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`w-8 h-8 flex items-center justify-center transition-opacity ${
                  currentPage === 1 ? "opacity-30 cursor-not-allowed" : "hover:opacity-60"
                }`}
                aria-label="Previous page"
              >
                <Image src="/images/icon_arrow_medium_left.svg" alt="Previous" width={24} height={24} />
              </button>
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                    page === currentPage
                      ? "bg-[#F5F5F5] text-[#333333] font-semibold"
                      : "text-[#999999] hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`w-8 h-8 flex items-center justify-center transition-opacity ${
                  currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "hover:opacity-60"
                }`}
                aria-label="Next page"
              >
                <Image src="/images/icon_arrow_medium_right.svg" alt="Next" width={24} height={24} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

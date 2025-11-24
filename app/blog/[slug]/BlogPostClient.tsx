"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { CommonButton } from "@/components/common-button"
import { PortableText } from "@portabletext/react"
import { urlFor } from "@/sanity/lib/image"

// 날짜 형식 변환 (yyyy-MM-dd → yyyy.MM.dd)
const formatDate = (date: string) => date?.replace(/-/g, '.') || ''

// PortableText용 커스텀 스타일 컴포넌트
const ptComponents = {
  block: {
    title: ({children}: any) => (
      <h2 className="font-bold mb-6 max-[440px]:text-[22px] max-[440px]:leading-[31px] text-[30px] leading-[42px]" style={{ color: "#333333" }}>
        {children}
      </h2>
    ),
    normal: ({children}: any) => (
      <p className="mb-6 max-[440px]:text-[17px] max-[440px]:leading-[26px] text-[22px] leading-[36px]" style={{ color: "#333333" }}>
        {children}
      </p>
    ),
    caption: ({children}: any) => (
      <p className="mb-6 max-[440px]:text-[15px] max-[440px]:leading-[21px] text-[20px] leading-[30px]" style={{ color: "#999999" }}>
        {children}
      </p>
    ),
  },
  types: {
    image: ({value}: any) => {
      if (!value?.asset?._ref) return null
      return (
        <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'blog image'}
            fill
            className="object-cover"
          />
        </div>
      )
    }
  },
  marks: {
    link: ({children, value}: any) => {
      let href = value.href
      // 프로토콜이 없고 /로 시작하지 않으면 https:// 추가
      if (!href.startsWith('/') && !href.startsWith('http://') && !href.startsWith('https://')) {
        href = `https://${href}`
      }
      const isExternal = !href.startsWith('/')
      const rel = isExternal ? 'noopener noreferrer' : undefined
      const target = isExternal ? '_blank' : undefined
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className="underline"
          style={{ color: "#355CBA" }}
        >
          {children}
        </a>
      )
    }
  }
}

interface BlogPostClientProps {
  post: any
  previousPost: any
  nextPost: any
  slug: string
}

export default function BlogPostClient({ post, previousPost, nextPost, slug }: BlogPostClientProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [slug])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <CommonButton>목록으로 돌아가기</CommonButton>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article
      className="w-full max-[440px]:!pb-[160px]"
      style={{
        paddingBottom: "calc(100vw * 300 / 1920)",
      }}
    >
      {/* Header Section */}
      <div
        className="w-full flex flex-col items-center max-[440px]:!px-5 max-[440px]:!pt-24"
        style={{
          paddingTop: "calc(110px + (100vw * 130 / 1920))",
          paddingLeft: "calc(100vw * 360 / 1920)",
          paddingRight: "calc(100vw * 360 / 1920)",
        }}
      >
        {/* Category */}
        <div className="text-center mb-6 max-[440px]:mb-[5px]">
          <span
            className="font-bold max-[440px]:text-[14px] text-[20px]"
            style={{
              color: "#355CBA",
            }}
          >
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-bold text-center text-balance text-5xl leading-[64px] max-[440px]:text-[24px] max-[440px]:leading-[34px] max-[440px]:mb-[5px] mb-[20px]">
          {post.title}
        </h1>

        {/* Date and Author */}
        <div
          className="text-center max-[440px]:!mb-[60px]"
          style={{
            color: "#666666",
            marginBottom: "calc(100vw * 120 / 1920)",
          }}
        >
          <span className="font-medium max-[440px]:text-[14px] text-[20px]">
            {formatDate(post.date)} · {post.author || '김정선 회계사'} 작성
          </span>
        </div>

        {/* Posting Image */}
        <div
          className="w-full mb-20 overflow-hidden max-w-[1200px] mx-auto rounded-[24px] aspect-[5/2] max-[440px]:!-mx-5 max-[440px]:!w-[100vw] max-[440px]:max-w-none max-[440px]:!aspect-[375/240] max-[440px]:!rounded-none max-[440px]:!mb-[40px]"
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={480}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post Content */}
        <div className="w-full prose prose-lg max-w-[1160px] mx-auto mb-[160px] max-[440px]:mb-[80px]">
          {post.body ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : (
            <p className="leading-relaxed mb-6 max-[440px]:text-[17px] max-[440px]:leading-[26px] text-[22px] leading-[36px]" style={{ color: "#333333" }}>
              내용이 없습니다.
            </p>
          )}
        </div>

        {/* Previous/Next Post Navigation */}
        <div className="w-full mb-[160px] max-[440px]:mb-[100px] max-w-[1200px] mx-auto">
          {previousPost && (
            <Link
              href={`/blog/${previousPost.slug}`}
              className={`flex items-center justify-between py-6 pr-6 pl-5 max-[440px]:p-0 ${nextPost ? 'border-b border-gray-200' : ''} max-[440px]:border-none hover:bg-gray-50 max-[440px]:hover:bg-transparent transition-colors group`}
            >
              <div className="flex items-center flex-1 max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-[6px]" style={{ gap: "calc(100vw * 30 / 1920)" }}>
                <div className="flex justify-between max-[440px]:w-full">
                  <span className="whitespace-nowrap font-bold text-[20px] max-[440px]:text-[16px] max-[440px]:leading-[24px]" style={{ color: "#535353" }}>
                    이전 글
                  </span>
                  <Image
                    src="/images/icon_arrow_small_up.svg"
                    alt="Previous"
                    width={24}
                    height={24}
                    className="flex-shrink-0 hidden max-[440px]:block"
                  />
                </div>
                <span className="transition-opacity font-normal text-[20px] max-[440px]:text-[16px] max-[440px]:leading-[22px] max-[440px]:w-full" style={{ color: "#777777" }}>
                  {previousPost.title}
                </span>
              </div>
              <Image
                src="/images/icon_arrow_medium_up.svg"
                alt="Previous"
                width={24}
                height={24}
                className="flex-shrink-0 max-[440px]:hidden"
                style={{
                  marginLeft: "calc(100vw * 16 / 1920)",
                }}
              />
            </Link>
          )}

          {previousPost && nextPost && (
            <div className="hidden max-[440px]:block w-full h-[1px] my-[24px]" style={{ backgroundColor: "#EFEFEF" }} />
          )}

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="flex items-center justify-between py-6 pr-6 pl-5 max-[440px]:p-0 hover:bg-gray-50 max-[440px]:hover:bg-transparent transition-colors group"
            >
              <div className="flex items-center flex-1 max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-[6px]" style={{ gap: "calc(100vw * 30 / 1920)" }}>
                <div className="flex justify-between max-[440px]:w-full">
                  <span className="whitespace-nowrap font-bold text-[20px] max-[440px]:text-[16px] max-[440px]:leading-[24px]" style={{ color: "#535353" }}>
                    다음 글
                  </span>
                  <Image
                    src="/images/icon_arrow_small_down.svg"
                    alt="Next"
                    width={24}
                    height={24}
                    className="flex-shrink-0 hidden max-[440px]:block"
                  />
                </div>
                <span className="transition-opacity font-normal text-[20px] max-[440px]:text-[16px] max-[440px]:leading-[22px] max-[440px]:w-full" style={{ color: "#777777" }}>
                  {nextPost.title}
                </span>
              </div>
              <Image
                src="/images/icon_arrow_medium_down.svg"
                alt="Next"
                width={24}
                height={24}
                className="flex-shrink-0 max-[440px]:hidden"
                style={{
                  marginLeft: "calc(100vw * 16 / 1920)",
                }}
              />
            </Link>
          )}
        </div>

        {/* Back to List Button */}
        <div className="flex justify-center">
          <Link href="/blog">
            <CommonButton>목록으로 돌아가기</CommonButton>
          </Link>
        </div>
      </div>
    </article>
  )
}

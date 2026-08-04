import { cache } from "react"
import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { permanentRedirect } from "next/navigation"
import BlogPostClient from "./BlogPostClient"
import BlogPostPreview from "./BlogPostPreview"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryButton } from "@/components/inquiry-button"
import { getPost, getPosts, extractPlainText, postLastModified } from "@/lib/sanity-utils"

const BASE_URL = "https://www.moduacc.com"

// generateMetadata와 페이지 본문이 같은 요청을 두 번 날리지 않도록 캐싱
const getCachedPost = cache((slug: string, preview: boolean) => getPost(slug, preview))

// 한글 슬러그는 Next 버전에 따라 인코딩된 채로 들어올 수 있음
function decodeSlug(slug: string) {
  try {
    return decodeURIComponent(slug)
  } catch {
    return slug
  }
}

// author 필드 형식: "이름 직함" 또는 "이름 / 직함"
function parseAuthor(author: string): { name: string; jobTitle?: string } {
  const bySlash = author.split("/").map((part) => part.trim()).filter(Boolean)
  if (bySlash.length >= 2) return { name: bySlash[0], jobTitle: bySlash.slice(1).join(" ") }
  const bySpace = author.trim().split(/\s+/)
  if (bySpace.length === 2) return { name: bySpace[0], jobTitle: bySpace[1] }
  return { name: author.trim() }
}

// 정적 페이지 생성을 위한 params 생성
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export const revalidate = 60

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getCachedPost(decodeSlug(slug), false)

  if (!post) {
    return {
      title: "글을 찾을 수 없습니다 | 모두세무회계그룹",
      robots: { index: false },
    }
  }

  const description = extractPlainText(post.body, 160)
  const url = `${BASE_URL}/blog/${encodeURIComponent(post.slug)}`
  const ogImage = post.image ? `${post.image}?w=1200&h=630&fit=crop` : undefined

  return {
    title: `${post.title} | 모두세무회계그룹`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "모두세무회계그룹",
      title: post.title,
      description,
      publishedTime: post.date,
      modifiedTime: postLastModified(post).toISOString(),
      ...(post.author ? { authors: [post.author] } : {}),
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const decodedSlug = decodeSlug(slug)
  const { isEnabled: isDraftMode } = await draftMode()
  const postData = await getCachedPost(decodedSlug, isDraftMode)

  // 슬러그가 있는 글에 옛 주소(UUID)로 접근하면 대표 주소로 301
  if (!isDraftMode && postData && postData.slug !== decodedSlug) {
    permanentRedirect(`/blog/${encodeURIComponent(postData.slug)}`)
  }

  const author = postData?.author ? parseAuthor(postData.author) : null

  const jsonLd =
    !isDraftMode && postData
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: postData.title,
          datePublished: postData.date,
          dateModified: postLastModified(postData).toISOString(),
          inLanguage: "ko",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/blog/${encodeURIComponent(postData.slug)}`,
          },
          ...(postData.image ? { image: [postData.image] } : {}),
          ...(author
            ? {
                author: {
                  "@type": "Person",
                  name: author.name,
                  ...(author.jobTitle ? { jobTitle: author.jobTitle } : {}),
                  worksFor: { "@type": "Organization", name: "모두세무회계그룹" },
                },
              }
            : {}),
          publisher: {
            "@type": "Organization",
            name: "모두세무회계그룹",
            logo: {
              "@type": "ImageObject",
              url: `${BASE_URL}/images/img_logo_black.png`,
            },
          },
        }
      : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      )}
      <Navigation forceWhiteMode={true} />
      {isDraftMode ? (
        <BlogPostPreview
          initialPost={postData}
          slug={decodedSlug}
        />
      ) : (
        <BlogPostClient
          post={postData}
          previousPost={postData?.previousPost}
          nextPost={postData?.nextPost}
          slug={decodedSlug}
        />
      )}
      <Footer />
      <InquiryButton />
    </>
  )
}

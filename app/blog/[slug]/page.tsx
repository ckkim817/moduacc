import { draftMode } from "next/headers"
import BlogPostClient from "./BlogPostClient"
import BlogPostPreview from "./BlogPostPreview"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryButton } from "@/components/inquiry-button"
import { getPost, getPosts } from "@/lib/sanity-utils"

// 정적 페이지 생성을 위한 params 생성
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export const revalidate = 60

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { isEnabled: isDraftMode } = await draftMode()
  const postData = await getPost(slug, isDraftMode)

  return (
    <>
      <Navigation forceWhiteMode={true} />
      {isDraftMode ? (
        <BlogPostPreview
          initialPost={postData}
          slug={slug}
        />
      ) : (
        <BlogPostClient
          post={postData}
          previousPost={postData?.previousPost}
          nextPost={postData?.nextPost}
          slug={slug}
        />
      )}
      <Footer />
      <InquiryButton />
    </>
  )
}

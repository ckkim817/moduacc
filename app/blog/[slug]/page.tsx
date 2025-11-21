import { blogPosts } from "@/lib/blog-data"
import BlogPostClient from "./BlogPostClient"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryButton } from "@/components/inquiry-button"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = blogPosts.find((p) => p.slug === slug)
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <>
      <Navigation forceWhiteMode={true} />
      <BlogPostClient post={post} previousPost={previousPost} nextPost={nextPost} slug={slug} />
      <Footer />
      <InquiryButton />
    </>
  )
}

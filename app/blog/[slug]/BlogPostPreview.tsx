"use client"

import { useLiveQuery } from "@sanity/preview-kit"
import BlogPostClient from "./BlogPostClient"
import { postQuery } from "@/lib/sanity-utils"

interface BlogPostPreviewProps {
  initialPost: any
  slug: string
}

export default function BlogPostPreview({ initialPost, slug }: BlogPostPreviewProps) {
  const [post] = useLiveQuery(initialPost, postQuery, { slug })

  return (
    <BlogPostClient
      post={post}
      previousPost={post?.previousPost}
      nextPost={post?.nextPost}
      slug={slug}
    />
  )
}

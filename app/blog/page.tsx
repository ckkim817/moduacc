import { getPosts } from "@/lib/sanity-utils"
import BlogListClient from "./BlogListClient"

// 데이터 캐싱 옵션 (60초마다 갱신)
export const revalidate = 60

export default async function BlogPage() {
  // Sanity에서 데이터 가져오기
  const posts = await getPosts()

  // 클라이언트 컴포넌트에 데이터 주입
  return <BlogListClient posts={posts} />
}

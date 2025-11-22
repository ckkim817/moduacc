import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CommonButton } from "@/components/common-button"
import { getLatestPosts } from "@/lib/sanity-utils"

export async function BlogSection() {
  const posts = await getLatestPosts(4)

  // 글이 없으면 섹션 숨기기
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="bg-white pb-[300px] max-[440px]:!pt-[40px] max-[440px]:!pb-[160px]">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="max-[440px]:space-y-[30px] min-[440px]:space-y-[50px]">
          <div>
            <h2
              className="font-bold max-[440px]:text-[24px] max-[440px]:leading-[34px] text-[48px] leading-[64px]"
              style={{ color: "#111111" }}
            >
              전문가가 전하는
              <br />
              회계·세무의 모든 것
            </h2>
          </div>

          <div className="hidden min-[440px]:flex min-[440px]:flex-col">
            <Link href={`/blog/${posts[0].slug}`} className={posts.length > 1 ? "mb-[60px]" : ""}>
              <Card
                className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow group cursor-pointer p-0"
                style={{ border: "none", boxShadow: "none" }}
              >
                <div className="flex flex-col sm:flex-row gap-6 min-[440px]:gap-[50px]">
                  <div className="overflow-hidden flex-shrink-0 rounded-[24px] relative w-full sm:w-[720px] sm:max-w-[60%]" style={{ aspectRatio: "720 / 400" }}>
                    <Image
                      src={posts[0].image || "/placeholder.svg"}
                      alt={posts[0].title}
                      fill
                      className="object-cover min-[441px]:group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, 720px"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="text-[14px] lg:text-[20px] font-semibold mb-3 min-[440px]:mb-[16px]" style={{ color: "#355CBA" }}>
                      {posts[0].category}
                    </div>
                    <h3 className="font-bold leading-snug mb-4 text-3xl" style={{ color: "#000000" }}>
                      {posts[0].title}
                    </h3>
                    <div className="font-normal text-base" style={{ color: "#777777" }}>
                      {posts[0].date}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>

            {posts.slice(1).map((post: any, index: number) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={index < posts.length - 2 ? "mb-[40px]" : ""}
              >
                <Card
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow group cursor-pointer p-0"
                  style={{ border: "none", boxShadow: "none" }}
                >
                  <div className="flex flex-row items-center min-[440px]:gap-[30px]">
                    <div className="overflow-hidden flex-shrink-0 rounded-[16px] relative w-[360px] max-w-[30%]" style={{ aspectRatio: "360 / 220" }}>
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover min-[441px]:group-hover:scale-105 transition-transform duration-300"
                        sizes="360px"
                      />
                    </div>
                    <div className="p-6 min-[440px]:p-0 flex flex-col justify-center flex-1">
                      <div className="text-[14px] lg:text-[20px] font-semibold mb-[12px]" style={{ color: "#355CBA" }}>
                        {post.category}
                      </div>
                      <h3 className="font-bold leading-snug text-2xl" style={{ color: "#000000" }}>
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="max-[439px]:block min-[440px]:hidden space-y-[30px]">
            {/* First post with image */}
            <Link href={`/blog/${posts[0].slug}`}>
              <div className="space-y-4 pb-[30px]">
                <div className="w-full aspect-[16/10] overflow-hidden rounded-[24px] relative">
                  <Image
                    src={posts[0].image || "/placeholder.svg"}
                    alt={posts[0].title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <div className="space-y-[6px]">
                  <div className="text-sm font-semibold" style={{ color: "#355CBA" }}>
                    {posts[0].category}
                  </div>
                  <h3 className="text-base font-bold leading-snug max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#000000" }}>
                    {posts[0].title}
                  </h3>
                </div>
              </div>
            </Link>

            {/* Divider - only show if there are more posts */}
            {posts.length > 1 && <div className="border-t" style={{ borderColor: "#E5E5E5" }} />}

            {/* Posts 2-4: text only */}
            {posts.slice(1).map((post: any, index: number) => (
              <div key={post.id}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="space-y-[6px]">
                    <div className="text-sm font-semibold" style={{ color: "#355CBA" }}>
                      {post.category}
                    </div>
                    <h3 className="text-base font-bold leading-snug max-[440px]:text-[18px] max-[440px]:leading-[25px]" style={{ color: "#000000" }}>
                      {post.title}
                    </h3>
                  </div>
                </Link>
                {index < posts.length - 2 && <div className="border-t mt-[30px]" style={{ borderColor: "#E5E5E5" }} />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[120px] max-[440px]:mt-[50px] text-center">
          <CommonButton href="/blog">전체 블로그 보기</CommonButton>
        </div>
      </div>
    </section>
  )
}

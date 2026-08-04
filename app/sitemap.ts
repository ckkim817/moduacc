import { MetadataRoute } from 'next'
import { getPosts, postLastModified } from '@/lib/sanity-utils'
import { expertsData } from '@/lib/experts-data'

// 빌드 시점에 고정되지 않도록 최대 1시간 주기로 재생성 (새 글 발행 시 자동 반영)
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.moduacc.com'

  // 서비스 슬러그 목록
  const servicesSlugs = [
    'bookkeeping',
    'audit',
    'inheritance',
    'tax-appeal',
    'tax-audit',
    'valuation',
    'due-diligence',
    'consulting',
    'diagnosis',
    'subsidy',
  ]

  // 정적 페이지들 — 실제 수정 시각을 알 수 없으므로 lastmod는 생략 (빌드 시각으로 위장하지 않음)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/company`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experts`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // 서비스 상세 페이지들
  const servicesPages: MetadataRoute.Sitemap = servicesSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 전문가 상세 페이지들
  const expertsPages: MetadataRoute.Sitemap = expertsData.map((expert) => ({
    url: `${baseUrl}/experts/${expert.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 블로그 포스트 페이지들 (Sanity에서 가져오기)
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const posts = await getPosts()
    blogPages = posts.map((post: any) => ({
      url: `${baseUrl}/blog/${encodeURIComponent(post.slug)}`,
      lastModified: postLastModified(post),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  return [...staticPages, ...servicesPages, ...expertsPages, ...blogPages]
}

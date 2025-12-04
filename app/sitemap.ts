import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/sanity-utils'
import { expertsData } from '@/lib/experts-data'

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

  // 정적 페이지들
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/company`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // 서비스 상세 페이지들
  const servicesPages: MetadataRoute.Sitemap = servicesSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 전문가 상세 페이지들
  const expertsPages: MetadataRoute.Sitemap = expertsData.map((expert) => ({
    url: `${baseUrl}/experts/${expert.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 블로그 포스트 페이지들 (Sanity에서 가져오기)
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const posts = await getPosts()
    blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  return [...staticPages, ...servicesPages, ...expertsPages, ...blogPages]
}

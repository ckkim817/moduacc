import { client, previewClient } from "@/sanity/lib/client"
import { groq } from "next-sanity"

// 클라이언트 선택 (draft mode 여부에 따라)
const getClient = (preview: boolean = false) => preview ? previewClient : client

// 모든 포스트 가져오기
export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post" && isHidden != true] | order(publishedAt desc){
      "id": _id,
      "slug": coalesce(slug.current, _id),
      category,
      title,
      "date": publishedAt,
      "updatedAt": _updatedAt,
      author,
      "image": mainImage.asset->url,
      "palette": mainImage.asset->metadata.palette,
      "body": body
    }`
  )
}

// 단일 포스트 가져오기 (이전글/다음글 포함)
export async function getPost(slug: string, preview: boolean = false) {
  return getClient(preview).fetch(
    groq`*[_type == "post" && (slug.current == $slug || _id == $slug) && isHidden != true][0]{
      "id": _id,
      "slug": coalesce(slug.current, _id),
      category,
      title,
      "date": publishedAt,
      "updatedAt": _updatedAt,
      author,
      "image": mainImage.asset->url,
      "body": body,
      "previousPost": *[_type == "post" && (publishedAt > ^.publishedAt || (publishedAt == ^.publishedAt && _createdAt > ^._createdAt)) && isHidden != true] | order(publishedAt asc, _createdAt asc) [0] {
        "slug": coalesce(slug.current, _id),
        title
      },
      "nextPost": *[_type == "post" && (publishedAt < ^.publishedAt || (publishedAt == ^.publishedAt && _createdAt < ^._createdAt)) && isHidden != true] | order(publishedAt desc, _createdAt desc) [0] {
        "slug": coalesce(slug.current, _id),
        title
      }
    }`,
    { slug }
  )
}

// 단일 포스트 GROQ 쿼리 (실시간 미리보기용)
export const postQuery = groq`*[_type == "post" && (slug.current == $slug || _id == $slug) && isHidden != true][0]{
  "id": _id,
  "slug": coalesce(slug.current, _id),
  category,
  title,
  "date": publishedAt,
  "updatedAt": _updatedAt,
  author,
  "image": mainImage.asset->url,
  "body": body,
  "previousPost": *[_type == "post" && (publishedAt > ^.publishedAt || (publishedAt == ^.publishedAt && _createdAt > ^._createdAt)) && isHidden != true] | order(publishedAt asc, _createdAt asc) [0] {
    "slug": coalesce(slug.current, _id),
    title
  },
  "nextPost": *[_type == "post" && (publishedAt < ^.publishedAt || (publishedAt == ^.publishedAt && _createdAt < ^._createdAt)) && isHidden != true] | order(publishedAt desc, _createdAt desc) [0] {
    "slug": coalesce(slug.current, _id),
    title
  }
}`

// 글의 최종 수정 시각 — 발행일을 문서 수정 시각보다 뒤로 지정한 경우 발행일을 우선
export function postLastModified(post: { date?: string; updatedAt?: string }): Date {
  const published = post.date ? new Date(post.date) : null
  const updated = post.updatedAt ? new Date(post.updatedAt) : null
  if (published && updated) return updated > published ? updated : published
  return updated || published || new Date()
}

// Portable Text 본문에서 순수 텍스트 추출 (메타 description용)
export function extractPlainText(body: unknown, maxLength: number = 160): string {
  if (!Array.isArray(body)) return ""
  const text = body
    .filter((block: any) => block?._type === "block" && Array.isArray(block.children))
    .map((block: any) => block.children.map((child: any) => child?.text ?? "").join(""))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trimEnd()}…` : text
}

// 최신 포스트 N개 가져오기 (메인 페이지용)
export async function getLatestPosts(limit: number = 4) {
  return client.fetch(
    groq`*[_type == "post" && isHidden != true] | order(publishedAt desc)[0...$limit]{
      "id": _id,
      "slug": coalesce(slug.current, _id),
      category,
      title,
      "date": publishedAt,
      author,
      "image": mainImage.asset->url
    }`,
    { limit: limit - 1 }
  )
}

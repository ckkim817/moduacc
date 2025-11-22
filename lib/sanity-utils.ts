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
      author,
      "image": mainImage.asset->url,
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

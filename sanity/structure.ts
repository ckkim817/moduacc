import type {StructureResolver, DefaultDocumentNodeResolver} from 'sanity/structure'
import {Iframe} from 'sanity-plugin-iframe-pane'

// 미리보기 URL 생성
function getPreviewUrl(doc: any) {
  const slug = doc?.slug?.current || doc?._id
  if (!slug) return null

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return `${baseUrl}/api/draft/enable?slug=/blog/${slug}`
}

// 문서 편집 시 미리보기 패널 추가
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view.component(Iframe).options({
        url: (doc: any) => getPreviewUrl(doc),
        reload: {button: true},
      }).id('preview').title('Preview'),
    ])
  }
  return S.document().views([S.view.form()])
}

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())

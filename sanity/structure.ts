import type {StructureResolver, DefaultDocumentNodeResolver} from 'sanity/structure'
import {Iframe} from 'sanity-plugin-iframe-pane'

// 문서 편집 시 미리보기 패널 추가 (미리보기 시크릿 발급은 플러그인이, 검증은 /api/draft/enable이 처리)
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view.component(Iframe).options({
        url: {
          origin: 'same-origin',
          preview: (doc: any) => {
            const slug = doc?.slug?.current || doc?._id?.replace(/^drafts\./, '')
            return slug ? `/blog/${slug}` : new Error('슬러그가 없습니다')
          },
          draftMode: '/api/draft/enable',
        },
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

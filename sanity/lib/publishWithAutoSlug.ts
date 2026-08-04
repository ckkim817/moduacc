import {useClient, useDocumentOperation} from 'sanity'
import type {DocumentActionComponent, DocumentActionProps} from 'sanity'
import {apiVersion} from '../env'
import {koreanTitleSlugify} from './slugify'

// 기본 Publish 액션을 감싸, 슬러그가 비어 있으면 발행 시 제목으로 자동 생성한다.
// 같은 슬러그가 이미 있으면 -2, -3 … 을 붙인다.
export function withAutoSlug(originalPublish: DocumentActionComponent): DocumentActionComponent {
  const PublishWithAutoSlug: DocumentActionComponent = (props: DocumentActionProps) => {
    const originalResult = originalPublish(props)
    const {patch, publish} = useDocumentOperation(props.id, props.type)
    const client = useClient({apiVersion})

    if (!originalResult) return originalResult

    return {
      ...originalResult,
      onHandle: async () => {
        const draft = props.draft as {title?: string; slug?: {current?: string}} | null
        if (draft?.title && !draft.slug?.current) {
          try {
            const base = koreanTitleSlugify(draft.title)
            if (base) {
              const taken: string[] = await client.fetch(
                `*[_type == "post" && string::startsWith(slug.current, $base) && !(_id in [$id, $draftId])].slug.current`,
                {base, id: props.id, draftId: `drafts.${props.id}`},
              )
              let slug = base
              for (let n = 2; taken.includes(slug); n++) slug = `${base}-${n}`
              patch.execute([{set: {slug: {_type: 'slug', current: slug}}}])
            }
          } catch {
            // 자동 생성에 실패해도 발행은 막지 않는다 (슬러그 없으면 UUID 주소로 동작)
          }
        }
        publish.execute()
        props.onComplete()
      },
    }
  }
  PublishWithAutoSlug.action = 'publish'
  return PublishWithAutoSlug
}

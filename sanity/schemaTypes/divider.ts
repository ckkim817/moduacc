import { defineField, defineType } from 'sanity'

// 본문 구분선 블록. 렌더링은 app/blog/[slug]/portable-text-components.tsx
export default defineType({
  name: 'divider',
  title: '구분선',
  type: 'object',
  fields: [
    defineField({
      name: 'style',
      title: '모양',
      type: 'string',
      options: {
        list: [
          { title: '실선', value: 'line' },
          { title: '점선', value: 'dashed' },
          { title: '선 없이 빈 여백만', value: 'space' },
        ],
        layout: 'radio',
      },
      initialValue: 'line',
    }),
  ],
  preview: {
    select: { style: 'style' },
    prepare({ style }) {
      return { title: style === 'space' ? '빈 여백' : style === 'dashed' ? '구분선 (점선)' : '구분선 (실선)' }
    },
  },
})

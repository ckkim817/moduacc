import { defineField, defineType } from 'sanity'

// 본문용 표 블록. @sanity/table 의 `table` 타입(행·셀 문자열 격자)을 감싸 제목 행 여부와 캡션을 함께 둔다.
// 셀은 순수 문자열이라 셀 안 서식·병합은 지원하지 않는다. 렌더링은 app/blog/[slug]/portable-text-components.tsx
export default defineType({
  name: 'blogTable',
  title: '표',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      title: '표 제목 (선택)',
      type: 'string',
      description: '표 위에 굵게 표시됩니다. 비워 두면 표만 나옵니다.',
    }),
    defineField({
      name: 'hasHeaderRow',
      title: '첫 행을 제목 행으로 표시',
      type: 'boolean',
      description: '켜면 첫 행이 배경색과 굵은 글씨로 구분됩니다. 항목·값처럼 제목 행이 없는 표는 끄세요.',
      initialValue: true,
    }),
    defineField({
      name: 'table',
      title: '표 내용',
      type: 'table',
      description: '셀을 클릭해 내용을 입력하고, 아래 버튼으로 행과 열을 추가하세요.',
      validation: (rule) =>
        rule.required().custom((value: any) =>
          Array.isArray(value?.rows) && value.rows.length > 0 ? true : '표에 행을 하나 이상 추가해 주세요',
        ),
    }),
  ],
  preview: {
    select: { caption: 'caption', rows: 'table.rows' },
    prepare({ caption, rows }) {
      const list: any[] = Array.isArray(rows) ? rows : []
      const colCount = list.reduce((max, row) => Math.max(max, row?.cells?.length ?? 0), 0)
      return {
        title: caption || '표',
        subtitle: list.length ? `${list.length}행 × ${colCount}열` : '내용 없음',
      }
    },
  },
})

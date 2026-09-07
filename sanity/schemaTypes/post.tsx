import { defineField, defineType } from 'sanity'
import React from 'react'
import { koreanTitleSlugify } from '../lib/slugify'

// ── 편집기 안 미리보기용 컴포넌트 (실제 사이트 렌더링은 app/blog/[slug]/portable-text-components.tsx) ──
const TitleStyle = (props: any) => (
  <span style={{ fontWeight: 700, fontSize: '24px' }}>
    {props.children}
  </span>
)

const SubheadingStyle = (props: any) => (
  <span style={{ fontWeight: 700, fontSize: '20px' }}>
    {props.children}
  </span>
)

const MainTextStyle = (props: any) => (
  <span style={{ fontWeight: 400, fontSize: '18px' }}>
    {props.children}
  </span>
)

const CaptionStyle = (props: any) => (
  <span style={{ fontWeight: 400, fontSize: '16px', color: '#999999' }}>
    {props.children}
  </span>
)

const BlockquoteStyle = (props: any) => (
  <span style={{ display: 'block', borderLeft: '4px solid #355CBA', paddingLeft: '16px', fontSize: '18px', color: '#555555' }}>
    {props.children}
  </span>
)

// 글자 색 프리셋. 사이트 렌더러는 저장된 hex 값을 그대로 쓴다
export const TEXT_COLORS = [
  { title: '파란색 (브랜드)', value: '#355CBA' },
  { title: '남색', value: '#223B77' },
  { title: '빨간색', value: '#D93636' },
  { title: '초록색', value: '#1D8F5B' },
  { title: '회색', value: '#888888' },
]

const HighlightDecorator = (props: any) => (
  <span style={{ backgroundColor: '#FFF3B0', borderRadius: '2px' }}>{props.children}</span>
)
// 정렬 데코레이터는 문단 전체에 걸리는 설정이라 편집기에서는 점선 밑줄로 표시만 한다
const AlignDecorator = (props: any) => (
  <span style={{ textDecoration: 'underline dotted #9AA5B5', textUnderlineOffset: '3px' }}>{props.children}</span>
)
const TextColorAnnotation = (props: any) => (
  <span style={{ color: props.value?.color }}>{props.renderDefault(props)}</span>
)

// 툴바 아이콘 (@sanity/icons 는 직접 의존성이 아니라 간단한 SVG/글자로 대신한다)
const HighlightIcon = () => (
  <span style={{ display: 'inline-block', backgroundColor: '#FFF3B0', padding: '0 3px', borderRadius: '2px', fontWeight: 700, lineHeight: '1.2em' }}>가</span>
)
const TextColorIcon = () => <span style={{ color: '#355CBA', fontWeight: 700 }}>A</span>
const Lines = ({ widths, align }: { widths: number[]; align: 'center' | 'right' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    {widths.map((w, i) => {
      const x1 = align === 'center' ? (16 - w) / 2 : 15 - w
      return <line key={i} x1={x1} y1={3.5 + i * 4.5} x2={x1 + w} y2={3.5 + i * 4.5} />
    })}
  </svg>
)
const AlignCenterIcon = () => <Lines widths={[13, 8, 11]} align="center" />
const AlignRightIcon = () => <Lines widths={[13, 8, 11]} align="right" />
const LinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M6.5 9.5a3 3 0 0 0 4.2 0l2-2a3 3 0 0 0-4.2-4.2l-1 1" />
    <path d="M9.5 6.5a3 3 0 0 0-4.2 0l-2 2a3 3 0 0 0 4.2 4.2l1-1" />
  </svg>
)

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '제목 (Title)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '슬러그 (URL 주소)',
      type: 'slug',
      description:
        '글 주소(URL)입니다. 비워두고 발행하면 제목에서 자동으로 만들어집니다. 짧은 주소를 원하면 Generate 버튼으로 만든 뒤 핵심 키워드만 남기고 다듬어 주세요. (예: 가업상속공제-총정리)',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: koreanTitleSlugify,
      },
    }),
    defineField({
      name: 'category',
      title: '카테고리',
      type: 'string',
      options: {
        list: [
          { title: '세무', value: '세무' },
          { title: '회계', value: '회계' },
          { title: '상속·증여', value: '상속·증여' },
          { title: '양도소득세', value: '양도소득세' },
          { title: '법인세', value: '법인세' },
          { title: '종합소득세', value: '종합소득세' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: '작성일 (Date)',
      type: 'date',
      options: {
        dateFormat: 'YYYY.MM.DD',
      },
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: '작성자',
      type: 'string',
      placeholder: '이름 / 직업',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isHidden',
      title: '숨김',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      title: '썸네일 이미지',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: '본문 내용',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Main Text', value: 'normal', component: MainTextStyle },
            { title: 'Title', value: 'title', component: TitleStyle },
            { title: 'Subheading (소제목)', value: 'subheading', component: SubheadingStyle },
            { title: 'Caption', value: 'caption', component: CaptionStyle },
            { title: 'Quote (인용)', value: 'blockquote', component: BlockquoteStyle },
          ],
          marks: {
            // 기본 데코레이터(굵게·기울임·밑줄·취소선·코드)는 기존 글이 쓰고 있으므로 유지
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
              { title: 'Code', value: 'code' },
              { title: '형광펜', value: 'highlight', icon: HighlightIcon, component: HighlightDecorator },
              // 정렬은 문단 단위. 문단 안 아무 글자에나 적용하면 그 문단 전체가 정렬된다
              { title: '가운데 정렬 (문단)', value: 'alignCenter', icon: AlignCenterIcon, component: AlignDecorator },
              { title: '오른쪽 정렬 (문단)', value: 'alignRight', icon: AlignRightIcon, component: AlignDecorator },
            ],
            annotations: [
              {
                name: 'link',
                title: '링크',
                type: 'object',
                icon: LinkIcon,
                fields: [
                  {
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    description: 'https:// 없이 주소만 넣어도 됩니다. 사이트 안 페이지는 /blog 처럼 / 로 시작하세요.',
                    validation: (rule: any) => rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
                  },
                ],
              },
              {
                name: 'textColor',
                title: '글자 색',
                type: 'object',
                icon: TextColorIcon,
                fields: [
                  {
                    name: 'color',
                    title: '색상',
                    type: 'string',
                    options: { list: TEXT_COLORS, layout: 'radio' },
                    initialValue: TEXT_COLORS[0].value,
                    validation: (rule: any) => rule.required(),
                  },
                ],
                components: { annotation: TextColorAnnotation },
              },
            ],
          },
        },
        {
          type: 'image',
          title: '이미지',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: '대체 텍스트',
              type: 'string',
              description: '이미지를 설명하는 짧은 문구. 검색엔진과 화면 낭독기가 읽습니다.',
            }),
            defineField({
              name: 'caption',
              title: '캡션',
              type: 'string',
              description: '이미지 아래에 작은 회색 글씨로 표시됩니다.',
            }),
            defineField({
              name: 'fit',
              title: '비율',
              type: 'string',
              description: '예전 글의 이미지는 설정이 없으면 16:9 로 잘라서 채우던 방식 그대로 표시됩니다.',
              options: {
                list: [
                  { title: '원본 비율 그대로', value: 'contain' },
                  { title: '16:9 로 잘라서 채우기', value: 'cover' },
                ],
                layout: 'radio',
              },
              initialValue: 'contain',
            }),
            defineField({
              name: 'size',
              title: '표시 크기',
              type: 'string',
              options: {
                list: [
                  { title: '전체 너비', value: 'full' },
                  { title: '중간 (2/3 너비, 가운데)', value: 'medium' },
                  { title: '작게 (1/2 너비, 가운데)', value: 'small' },
                ],
                layout: 'radio',
              },
              initialValue: 'full',
            }),
          ],
        },
        { type: 'blogTable' },
        { type: 'divider' },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})

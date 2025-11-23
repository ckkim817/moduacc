import { defineField, defineType } from 'sanity'

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
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-가-힣]/g, '')
          .slice(0, 96)
      },
      hidden: true,
    }),
    defineField({
      name: 'category',
      title: '카테고리',
      type: 'string',
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
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
            { title: '설명 (회색)', value: 'note' },
          ],
        },
        { type: 'image' },
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

'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import './sanity/studio.css'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure, defaultDocumentNode} from './sanity/structure'
import {withAutoSlug} from './sanity/lib/publishWithAutoSlug'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  document: {
    // 블로그 글 발행 시 슬러그가 비어 있으면 제목으로 자동 생성
    actions: (prev, context) =>
      context.schemaType === 'post'
        ? prev.map((action) => (action.action === 'publish' ? withAutoSlug(action) : action))
        : prev,
  },
  plugins: [
    structureTool({structure, defaultDocumentNode}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft/enable',
        },
      },
    }),
  ],
})

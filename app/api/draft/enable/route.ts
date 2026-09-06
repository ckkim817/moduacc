import { defineEnableDraftMode } from 'next-sanity/draft-mode'

import { client } from '@/sanity/lib/client'

// Studio(Presentation·미리보기 패널)가 발급한 시크릿을 검증한 뒤에만 draft mode를 켠다
export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
})

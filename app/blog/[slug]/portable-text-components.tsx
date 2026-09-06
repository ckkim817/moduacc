import Image from "next/image"
import React from "react"
import { urlFor } from "@/sanity/lib/image"

// 블로그 본문(Portable Text) 렌더링 규칙. 스키마는 sanity/schemaTypes/post.tsx, blogTable.ts
const isEmptyChildren = (children: any) =>
  !children ||
  (Array.isArray(children) && children.length === 0) ||
  (React.Children.count(children) === 1 && children[0] === '')

export const ptComponents = {
  block: {
    title: ({children}: any) => (
      <h2 className="font-bold mb-6 max-[441px]:text-[22px] max-[441px]:leading-[31px] text-[24px] leading-[33.6px]" style={{ color: "#333333" }}>
        {isEmptyChildren(children) ? <br /> : children}
      </h2>
    ),
    normal: ({children}: any) => (
      <p className="mb-6 max-[441px]:text-[17px] max-[441px]:leading-[26px] text-[18px] leading-[25.2px]" style={{ color: "#333333" }}>
        {isEmptyChildren(children) ? <br /> : children}
      </p>
    ),
    caption: ({children}: any) => (
      <p className="mb-6 max-[441px]:text-[15px] max-[441px]:leading-[21px] text-[20px] leading-[30px]" style={{ color: "#999999" }}>
        {isEmptyChildren(children) ? <br /> : children}
      </p>
    ),
  },
  types: {
    image: ({value}: any) => {
      if (!value?.asset?._ref) return null
      return (
        <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'blog image'}
            fill
            className="object-cover"
          />
        </div>
      )
    },
    // 표 블록. 셀은 문자열이라 텍스트만 그린다. 모바일에서 표가 화면보다 넓으면 표 영역만 가로 스크롤된다.
    blogTable: ({value}: any) => {
      const rows: any[] = Array.isArray(value?.table?.rows) ? value.table.rows : []
      const colCount = rows.reduce((max, row) => Math.max(max, Array.isArray(row?.cells) ? row.cells.length : 0), 0)
      if (rows.length === 0 || colCount === 0) return null

      const hasHeaderRow = value.hasHeaderRow !== false
      const headerRow = hasHeaderRow ? rows[0] : null
      const bodyRows = hasHeaderRow ? rows.slice(1) : rows
      const cellsOf = (row: any) => Array.from({ length: colCount }, (_, i) => row?.cells?.[i] ?? "")
      const cellClass = "border border-[#E5E5E5] px-4 py-3 max-[441px]:px-3 max-[441px]:py-2 max-[441px]:min-w-[120px] align-top"

      return (
        <figure className="my-8 max-[441px]:my-6">
          {value.caption && (
            <figcaption className="mb-3 font-bold max-[441px]:text-[15px] max-[441px]:leading-[22px] text-[18px] leading-[25.2px]" style={{ color: "#333333" }}>
              {value.caption}
            </figcaption>
          )}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse max-[441px]:text-[15px] max-[441px]:leading-[22px] text-[18px] leading-[25.2px]" style={{ color: "#333333" }}>
              {headerRow && (
                <thead>
                  <tr>
                    {cellsOf(headerRow).map((cell, i) => (
                      <th key={i} scope="col" className={`${cellClass} bg-[#F5F7FA] font-bold text-left whitespace-nowrap`}>
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {bodyRows.map((row, rowIndex) => (
                  <tr key={row?._key ?? rowIndex}>
                    {cellsOf(row).map((cell, i) => (
                      <td key={i} className={cellClass}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </figure>
      )
    },
  },
  list: {
    bullet: ({children}: any) => (
      <ul className="mb-6 pl-7 list-disc space-y-2 max-[441px]:text-[17px] max-[441px]:leading-[26px] text-[18px] leading-[25.2px]" style={{ color: "#333333" }}>
        {children}
      </ul>
    ),
    number: ({children}: any) => (
      <ol className="mb-6 pl-7 list-decimal space-y-2 max-[441px]:text-[17px] max-[441px]:leading-[26px] text-[18px] leading-[25.2px]" style={{ color: "#333333" }}>
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({children, value}: any) => {
      let href = value?.href
      if (!href) return <>{children}</>

      // 프로토콜이 없고 /로 시작하지 않으면 https:// 추가
      if (!href.startsWith('/') && !href.startsWith('http://') && !href.startsWith('https://')) {
        href = `https://${href}`
      }
      const isExternal = !href.startsWith('/')
      const rel = isExternal ? 'noopener noreferrer' : undefined
      const target = isExternal ? '_blank' : undefined
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className="underline"
          style={{ color: "#355CBA" }}
        >
          {children}
        </a>
      )
    }
  }
}

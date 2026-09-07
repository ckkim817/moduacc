import Image from "next/image"
import React from "react"
import { urlFor } from "@/sanity/lib/image"

// 블로그 본문(Portable Text) 렌더링 규칙. 스키마는 sanity/schemaTypes/post.tsx, blogTable.ts, divider.ts
const isEmptyChildren = (children: any) =>
  !children ||
  (Array.isArray(children) && children.length === 0) ||
  (React.Children.count(children) === 1 && children[0] === '')

// 문단 정렬: 문단 안 어느 글자에든 정렬 데코레이터가 있으면 문단 전체에 적용한다 (Portable Text 블록에는 정렬 속성이 없어서 이렇게 표현)
const alignOf = (block: any): React.CSSProperties["textAlign"] => {
  const marks: string[] = Array.isArray(block?.children) ? block.children.flatMap((c: any) => c?.marks ?? []) : []
  if (marks.includes("alignCenter")) return "center"
  if (marks.includes("alignRight")) return "right"
  return undefined
}
const blockStyle = (block: any, color: string): React.CSSProperties => ({ color, textAlign: alignOf(block) })

// Sanity 이미지 asset ref(image-<id>-<w>x<h>-<ext>)에서 원본 치수를 읽는다
const dimensionsOf = (ref: string) => {
  const m = /-(\d+)x(\d+)-/.exec(ref)
  return m ? { width: Number(m[1]), height: Number(m[2]) } : { width: 1600, height: 900 }
}

export const ptComponents = {
  block: {
    title: ({children, value}: any) => (
      <h2 className="font-bold mb-6 max-[441px]:text-[22px] max-[441px]:leading-[31px] text-[24px] leading-[33.6px]" style={blockStyle(value, "#333333")}>
        {isEmptyChildren(children) ? <br /> : children}
      </h2>
    ),
    subheading: ({children, value}: any) => (
      <h3 className="font-bold mb-4 max-[441px]:text-[19px] max-[441px]:leading-[27px] text-[20px] leading-[28px]" style={blockStyle(value, "#333333")}>
        {isEmptyChildren(children) ? <br /> : children}
      </h3>
    ),
    normal: ({children, value}: any) => (
      <p className="mb-6 max-[441px]:text-[17px] max-[441px]:leading-[26px] text-[18px] leading-[25.2px]" style={blockStyle(value, "#333333")}>
        {isEmptyChildren(children) ? <br /> : children}
      </p>
    ),
    caption: ({children, value}: any) => (
      <p className="mb-6 max-[441px]:text-[15px] max-[441px]:leading-[21px] text-[20px] leading-[30px]" style={blockStyle(value, "#999999")}>
        {isEmptyChildren(children) ? <br /> : children}
      </p>
    ),
    blockquote: ({children, value}: any) => (
      <blockquote
        className="my-8 max-[441px]:my-6 border-l-4 border-[#355CBA] pl-5 max-[441px]:pl-4 py-1 max-[441px]:text-[16px] max-[441px]:leading-[25px] text-[18px] leading-[28px]"
        style={blockStyle(value, "#555555")}
      >
        {isEmptyChildren(children) ? <br /> : children}
      </blockquote>
    ),
  },
  types: {
    // 이미지. 예전 글(fit 없음)은 기존처럼 16:9 로 잘라 채우고, 새 글 기본값은 원본 비율이다
    image: ({value}: any) => {
      const ref: string | undefined = value?.asset?._ref
      if (!ref) return null
      const fit: "cover" | "contain" = value.fit === "contain" ? "contain" : "cover"
      const size: "full" | "medium" | "small" = value.size === "medium" || value.size === "small" ? value.size : "full"
      const sizeClass = size === "small" ? "min-[441px]:w-1/2 mx-auto" : size === "medium" ? "min-[441px]:w-2/3 mx-auto" : "w-full"
      const alt = value.alt || value.caption || "blog image"
      const { width, height } = dimensionsOf(ref)
      return (
        <figure className={`my-8 ${sizeClass}`}>
          {fit === "cover" ? (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src={urlFor(value).width(1600).height(900).fit("crop").url()}
                alt={alt}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <Image
              src={urlFor(value).width(1600).fit("max").url()}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-auto rounded-lg"
            />
          )}
          {value.caption && (
            <figcaption className="mt-3 text-center max-[441px]:text-[13px] max-[441px]:leading-[19px] text-[15px] leading-[22px]" style={{ color: "#999999" }}>
              {value.caption}
            </figcaption>
          )}
        </figure>
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
    divider: ({value}: any) =>
      value?.style === "space" ? (
        <div className="h-10 max-[441px]:h-8" aria-hidden="true" />
      ) : (
        <hr className={`my-10 max-[441px]:my-8 border-t border-[#E5E5E5] ${value?.style === "dashed" ? "border-dashed" : ""}`} />
      ),
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
      if (!href.startsWith('/') && !href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        href = `https://${href}`
      }
      const isExternal = href.startsWith('http://') || href.startsWith('https://')
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
    },
    textColor: ({children, value}: any) => (
      <span style={{ color: value?.color || undefined }}>{children}</span>
    ),
    highlight: ({children}: any) => (
      <mark className="rounded-[2px] px-[2px]" style={{ backgroundColor: "#FFF3B0", color: "inherit" }}>
        {children}
      </mark>
    ),
    // 정렬 데코레이터 자체는 표시가 없고, 위 alignOf 가 문단 단위로 처리한다
    alignCenter: ({children}: any) => <>{children}</>,
    alignRight: ({children}: any) => <>{children}</>,
  },
}

"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { CommonButton } from "@/components/common-button"
import type { BlogPost } from "@/lib/blog-data"

interface BlogPostClientProps {
  post: BlogPost | undefined
  previousPost: BlogPost | null
  nextPost: BlogPost | null
  slug: string
}

export default function BlogPostClient({ post, previousPost, nextPost, slug }: BlogPostClientProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [slug])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <CommonButton>목록으로 돌아가기</CommonButton>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article
      className="w-full max-[440px]:!pb-[160px]"
      style={{
        paddingBottom: "calc(100vw * 300 / 1920)",
      }}
    >
      {/* Header Section */}
      <div
        className="w-full flex flex-col items-center max-[440px]:!px-5 max-[440px]:!pt-24"
        style={{
          paddingTop: "calc(80px + (100vw * 130 / 1920))",
          paddingLeft: "calc(100vw * 360 / 1920)",
          paddingRight: "calc(100vw * 360 / 1920)",
        }}
      >
        {/* Category */}
        <div className="text-center mb-6 max-[440px]:mb-[6px]">
          <span
            className="font-bold max-[440px]:text-[14px] text-[20px]"
            style={{
              color: "#355CBA",
            }}
          >
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-bold text-center text-balance text-5xl max-[440px]:text-[24px] max-[440px]:leading-[34px] max-[440px]:mb-[10px] mb-[20px]">
          {post.title}
        </h1>

        {/* Date and Author */}
        <div
          className="text-center max-[440px]:!mb-[60px]"
          style={{
            color: "#666666",
            marginBottom: "calc(100vw * 120 / 1920)",
          }}
        >
          <span className="font-medium max-[440px]:text-[14px] text-[20px]">{post.date} · 김정선 회계사 작성</span>
        </div>

        {/* Posting Image */}
        <div
          className="w-full mb-20 overflow-hidden max-w-[1200px] mx-auto rounded-[30px] aspect-[5/2] max-[440px]:!-mx-5 max-[440px]:!w-[100vw] max-[440px]:max-w-none max-[440px]:!aspect-[375/240] max-[440px]:!rounded-none max-[440px]:!mb-[40px]"
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={480}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post Content */}
        <div className="w-full prose prose-lg max-w-[1160px] mx-auto mb-32 max-[440px]:mb-[80px]" style={{ color: "#333333" }}>
          <p className="leading-relaxed mb-6 max-[440px]:text-[17px] max-[440px]:leading-[26px] text-[22px] leading-[36px]">
            "퇴근 후 배달을 시작한 지 4개월째입니다. 생활비 보태려는 정도로만 부업소득을 벌고 있는데, 굳이 세금 신고를 따로 해야 할까요? 이 정도 금액은 괜찮을 것 같은데…"
          </p>

          <p className="leading-relaxed mb-6 max-[440px]:text-[17px] max-[440px]:leading-[26px] text-[22px] leading-[36px]">
            부업을 하는 직장인이라면 누구나 한 번쯤 해봤을 고민이죠.
            <br />
            하지만 '겨우 이 정도 쯤이야.' 하고 신고하지 않는다면 나중에 후회할 수 있어요.
            <br />
            국세청에서는 부업 소득도 꼼꼼하게 살피기 때문에, 금액이 작다고 무심코 넘어갔다가는 세무적인 불이익을 겪을 수 있거든요.
            <br />
            종합소득세 신고를 안 했을 때 어떻게 되는지 궁금하다면 여기에서 확인할 수 있어요.
          </p>

          <h2 className="font-bold mt-12 mb-6 max-[440px]:text-[22px] max-[440px]:leading-[31px] text-[30px] leading-[42px]">부업을 한다면</h2>
          <h2 className="font-bold mb-6 max-[440px]:text-[22px] max-[440px]:leading-[31px] text-[30px] leading-[42px]">친해져야 할 종합소득세</h2>

          <p className="leading-relaxed mb-6 max-[440px]:text-[17px] max-[440px]:leading-[26px] text-[22px] leading-[36px]">
            직장에서 받는 월급의 세금은 연말정산으로 정리되지만, 부업 소득에 대한 세금은 5월 종합소득세 신고기간에 별도로 처리해야해요.
            <br />
            부업 소득은 직장에서 발생한 근로소득과 합산해서 세금이 산출되기 때문에, 두 소득을 더한 금액이 높을수록 세율도 높아져 세금 부담이 생길 수 있어요. 하지만 이때 신고를 하지 않는다면 나중에 가산세 등의 더 큰 비용이 발생합니다.
            <br />
            물론, 모든 부업 소득이 종합소득세 신고 대상인 건 아니에요. 소득의 종류와 금액, 수익 구조가 반복적인지에 따라 달라져요.
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-4">① 부업이 기타소득인 경우</h3>

          <p className="leading-relaxed mb-6 max-[440px]:text-[17px] max-[440px]:leading-[26px] text-[22px] leading-[36px]">
            일시적인 강연료, 단발성 원고료처럼 반복적이지 않은 수입은 기타소득으로 분류됩니다. 기타소득 금액이 300만 원을 초과하면 다른 소득과 합산해 종합소득세 신고를 해야 해요. 300만 원 이하라면 분리과세*나 종합과세* 중 나에게 더 유리한 것을 선택하면 됩니다.
            <br />
            * 분리과세: 다른 소득과 합치지 않고, 해당 소득에만 따로 세금을 매기는 방식이에요. 소득이 높아 세율이 높은 사람에게 유리해요.
            <br />
            * 종합과세: 모든 소득을 합쳐 한꺼번에 세금을 매기는 방식이에요. 소득이 많지 않거나 공제 혜택을 받을 수 있는 사람에게 유리해요.
          </p>

          <p className="leading-relaxed mb-8 max-[440px]:text-[17px] max-[440px]:leading-[26px] text-[22px] leading-[36px]">
            강연료, 원고료, 인세 등 일반적인 인적용역 기타소득의 경우, 별도의 증빙자료 없이도 수입의 60%까지는 필요경비로 인정받을 수 있어요. 즉, 필요경비가 450만 원으로 적용되는 750만 원의 수입까지는 일반적으로 종합소득세 신고 대상이 아닌거죠. 750만 원을 넘는 수입을 얻었지만 실제 지출한 비용을 증빙하여 차감한 금액이 300만 원 이하라면, 종합소득세 신고를 통해 기타소득임을 인정받으면 됩니다.
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-4">② 부업이 사업소득인 경우</h3>

          <p className="leading-relaxed mb-6 max-[440px]:text-[17px] max-[440px]:leading-[26px] text-[22px] leading-[36px]">
            크몽, 스마트스토어, 유튜브, 배달처럼 반복적으로 수익을 얻을 수 있는 부업 활동은 사업소득에 해당해요. 사업소득은 금액에 관계없이 모두 종합소득세 신고 대상이에요. 플랫폼에서 단발성으로 수익을 얻었더라도, 계정이 등록되어 언제든 추가 거래가 가능한 상태라면 사업소득으로 신고하는 것이 안전합니다. 계정을 삭제했거나 정지해서 추가 거래 가능성이 없다면 기타소득으로 분류할 수 있어요.
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-4">③ 부업이 근로소득인 경우</h3>

          <p className="leading-relaxed mb-6 max-[440px]:text-[17px] max-[440px]:leading-[26px] text-[22px] leading-[36px]">
            두 회사에서 급여를 받는다면, 한 회사에서 받은 근로소득 원천징수영수증을 다른 회사에 제출해 두 소득을 합산하여 연말정산할 수 있어요. 이 경우 종합소득세 신고를 따로 하지 않아도 됩니다. 하지만 각 회사에서 별도로 연말정산을 했다면, 두 소득을 합산해 종합소득세 신고를 해야 해요. 각각 신고하면 세금이 일시적으로 적게 나올 수 있지만, 나중에 국세청이 두 소득을 합산해 다시 계산하면 미납 세금과 가산세를 추가로 내야 할 수 있으니 처음부터 정확하게 신고하는 게 좋습니다.
            <br />
            하루 단위로 일한 행사 보조나 단기 알바처럼 일시적인 근로는 일용 근로소득으로 분류됩니다. 일용 근로소득은 보통 지급받을 때 원천징수가 이미 완료되기 때문에 별도로 신고하지 않아도 됩니다. 하지만 세금을 떼지 않고 현금이나 계좌이체 등으로 직접 받았다면, 기타소득이나 사업소득으로 간주되어 신고 대상이 될 수 있어요. 수익 활동이 반복적이고 지속적이라면 사업소득, 그렇지 않다면 기타소득으로 신고하면 됩니다.
          </p>

          <h2 className="font-bold mt-12 mb-6 max-[440px]:text-[22px] max-[440px]:leading-[31px] text-[30px] leading-[42px]">세금을 줄이고 싶다면</h2>
          <h2 className="font-bold mb-6 max-[440px]:text-[22px] max-[440px]:leading-[31px] text-[30px] leading-[42px]">영수증은 꼼꼼하게</h2>

          <p className="leading-relaxed mb-6 max-[440px]:text-[17px] max-[440px]:leading-[26px] text-[22px] leading-[36px]">
            많은 분들이 세금은 번 돈 전체에 붙는다고 생각해요. 하지만 세금은 수입에서 지출 비용을 뺀 소득에 부과됩니다. 그래서 지출 비용을 얼마나 어떻게 인정받느냐에 따라 내야 할 세금은 크게 달라질 수 있어요.
            <br />
            단, 부업과 관련 없는 지출은 인정되지 않아요. 직접적인 관련성이 있어야 하고, 영수증 같은 증빙 자료가 꼭 있어야 합니다. 그래서 부업용 카드나 통장을 만들어서 지출 자료를 미리 정리해두면 나중에 세금 신고할 때 큰 도움이 됩니다. 경비처리 규정이 담긴 소득세법 시행령 제55조는 법제처 사이트에서 자세히 확인할 수 있어요.
          </p>
        </div>

        {/* Previous/Next Post Navigation */}
        <div className="w-full mb-20 max-[440px]:mb-[100px] max-w-[1200px] mx-auto">
          {previousPost && (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="flex items-center justify-between py-6 pr-6 pl-5 max-[440px]:p-0 border-b border-gray-200 max-[440px]:border-none hover:bg-gray-50 max-[440px]:hover:bg-transparent transition-colors group"
            >
              <div className="flex items-center flex-1 max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-[6px]" style={{ gap: "calc(100vw * 30 / 1920)" }}>
                <div className="flex justify-between max-[440px]:w-full">
                  <span className="whitespace-nowrap font-bold text-[20px] max-[440px]:text-[16px] max-[440px]:leading-[24px]" style={{ color: "#535353" }}>
                    이전 글
                  </span>
                  <Image
                    src="/images/icon_arrow_medium_up.svg"
                    alt="Previous"
                    width={24}
                    height={24}
                    className="flex-shrink-0 hidden max-[440px]:block"
                  />
                </div>
                <span className="transition-opacity font-normal text-[20px] max-[440px]:text-[16px] max-[440px]:leading-[22px] max-[440px]:w-full" style={{ color: "#777777" }}>
                  {previousPost.title}
                </span>
              </div>
              <Image
                src="/images/icon_arrow_medium_up.svg"
                alt="Previous"
                width={24}
                height={24}
                className="flex-shrink-0 max-[440px]:hidden"
                style={{
                  marginLeft: "calc(100vw * 16 / 1920)",
                }}
              />
            </Link>
          )}

          {previousPost && nextPost && (
            <div className="hidden max-[440px]:block w-full h-[1px] my-[24px]" style={{ backgroundColor: "#EFEFEF" }} />
          )}

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="flex items-center justify-between py-6 pr-6 pl-5 max-[440px]:p-0 hover:bg-gray-50 max-[440px]:hover:bg-transparent transition-colors group"
            >
              <div className="flex items-center flex-1 max-[440px]:flex-col max-[440px]:items-start max-[440px]:gap-[6px]" style={{ gap: "calc(100vw * 30 / 1920)" }}>
                <div className="flex justify-between max-[440px]:w-full">
                  <span className="whitespace-nowrap font-bold text-[20px] max-[440px]:text-[16px] max-[440px]:leading-[24px]" style={{ color: "#535353" }}>
                    다음 글
                  </span>
                  <Image
                    src="/images/icon_arrow_medium_down.svg"
                    alt="Next"
                    width={24}
                    height={24}
                    className="flex-shrink-0 hidden max-[440px]:block"
                  />
                </div>
                <span className="transition-opacity font-normal text-[20px] max-[440px]:text-[16px] max-[440px]:leading-[22px] max-[440px]:w-full" style={{ color: "#777777" }}>
                  {nextPost.title}
                </span>
              </div>
              <Image
                src="/images/icon_arrow_medium_down.svg"
                alt="Next"
                width={24}
                height={24}
                className="flex-shrink-0 max-[440px]:hidden"
                style={{
                  marginLeft: "calc(100vw * 16 / 1920)",
                }}
              />
            </Link>
          )}
        </div>

        {/* Back to List Button */}
        <div className="flex justify-center">
          <Link href="/blog">
            <CommonButton>목록으로 돌아가기</CommonButton>
          </Link>
        </div>
      </div>
    </article>
  )
}

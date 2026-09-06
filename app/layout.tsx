import type React from "react"
import type { Metadata, Viewport } from "next"
import { draftMode } from "next/headers"
import { VisualEditing } from "next-sanity/visual-editing"
import PreviewProvider from "@/components/preview-provider"
import "./globals.css"

export const viewport: Viewport = {
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "모두세무회계그룹 | MODU Accounting",
  description: "성장의 모든 순간, 모두와 함께. 전문 세무사와 회계사가 제공하는 원스톱 회계·세무 솔루션",
  generator: "v0.app",
  verification: {
    other: {
      'naver-site-verification': '552bd3cbe08a94693507715744a4050b14bf3b50'
    }
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "모두세무회계그룹 | MODU Accounting",
    description: "성장의 모든 순간, 모두와 함께. 전문 세무사와 회계사가 제공하는 원스톱 회계·세무 솔루션",
    images: [
      {
        url: "https://www.moduacc.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MODU Accounting Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "모두세무회계그룹 | MODU Accounting",
    description: "성장의 모든 순간, 모두와 함께. 전문 세무사와 회계사가 제공하는 원스톱 회계·세무 솔루션",
    images: ["https://www.moduacc.com/images/og-image.png"],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isEnabled: isDraftMode } = await draftMode()

  return (
    <html lang="ko">
      <body
        className="font-sans antialiased"
        style={{ fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif" }}
      >
        <div className="bg-background min-h-[100dvh] w-full flex flex-col relative">
          {isDraftMode ? (
            <PreviewProvider token={process.env.SANITY_API_READ_TOKEN!}>
              {children}
              <VisualEditing />
            </PreviewProvider>
          ) : (
            children
          )}
        </div>
      </body>
    </html>
  )
}

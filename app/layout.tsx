import type React from "react"
import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { VisualEditing } from "next-sanity/visual-editing"
import PreviewProvider from "@/components/preview-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "모두세무회계그룹 | MODU Accounting",
  description: "성장의 모든 순간, 모두와 함께. 전문 세무사와 회계사가 제공하는 원스톱 회계·세무 솔루션",
  generator: "v0.app",
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
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og%20image-tvHNTxeEuahR1zaHZbUjkYXBRdQ6j1.png",
        width: 1200,
        height: 630,
        alt: "MODU Accounting - Accounting for All",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "모두세무회계그룹 | MODU Accounting",
    description: "성장의 모든 순간, 모두와 함께. 전문 세무사와 회계사가 제공하는 원스톱 회계·세무 솔루션",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og%20image-tvHNTxeEuahR1zaHZbUjkYXBRdQ6j1.png"],
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
      <head>
        {/* Preload expert images for main page */}
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img_%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8C%E1%85%AE%E1%86%AB%E1%84%82%E1%85%B5%E1%86%B7-b1rOhnzifvFWq63rXGBdXmsqudMFeC.svg"
          as="image"
        />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img_%E1%84%8E%E1%85%AC%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%80%E1%85%B2%E1%84%82%E1%85%B5%E1%86%B7-VuTP0xuW3FknawmsD7cPSixk7qcfwi.svg"
          as="image"
        />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img_%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%82%E1%85%B5%E1%86%B7-BeAI31rHelbVBcpIFQ7eImfzyv94o6.svg"
          as="image"
        />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img_%E1%84%92%E1%85%AC%E1%84%80%E1%85%A8%E1%84%80%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A1-MBHWKGVvwJlC7HGKaKb8TU9hBCU9Je.svg"
          as="image"
        />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img_%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%8B%E1%85%A7%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%83%E1%85%A9-lyYfBwMdvQAQheLU9UF2paQEynDE6g.svg"
          as="image"
        />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img_%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8E%E1%85%A5%E1%86%BC%E1%84%80%E1%85%AE-GiVvG2ALXWokAzoUH5J6ZgR44c9STs.svg"
          as="image"
        />
      </head>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif" }}
      >
        {isDraftMode ? (
          <PreviewProvider token={process.env.SANITY_API_READ_TOKEN!}>
            {children}
            <VisualEditing />
          </PreviewProvider>
        ) : (
          children
        )}
      </body>
    </html>
  )
}

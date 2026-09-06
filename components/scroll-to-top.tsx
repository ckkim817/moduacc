"use client"

import { useEffect } from "react"

// 첫 로드(새로고침 포함) 시 항상 맨 위에서 시작한다.
// 브라우저는 새로고침 때 이전 스크롤 위치를 load 이벤트 뒤에 다시 복원하므로
// scrollTo(0, 0) 한 번으로는 부족하고, 이 페이지에 있는 동안 복원 기능 자체를 끈다.
export function ScrollToTop() {
  useEffect(() => {
    if (typeof window === "undefined") return
    const history = window.history
    const supported = "scrollRestoration" in history
    if (supported) history.scrollRestoration = "manual"

    window.scrollTo(0, 0)
    // 하이드레이션이 load 이벤트보다 늦은 경우까지 대비
    const onLoad = () => window.scrollTo(0, 0)
    if (document.readyState !== "complete") window.addEventListener("load", onLoad, { once: true })

    return () => {
      window.removeEventListener("load", onLoad)
      // 브라우저는 새로고침 뒤에도 이 설정을 기억하므로, 이전 값이 아니라 기본값으로 되돌린다
      if (supported) history.scrollRestoration = "auto"
    }
  }, [])

  return null
}

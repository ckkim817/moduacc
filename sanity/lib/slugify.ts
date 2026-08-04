// 제목 → 한글 슬러그 변환 (Studio Generate 버튼과 발행 시 자동 생성이 공용으로 사용)
// 예: "외부감사 선임 기한 / 지정감사" → "외부감사-선임-기한-지정감사"
//     "간이과세자 vs 일반과세자" → "간이과세자-vs-일반과세자"
export function koreanTitleSlugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s가-힣-]/g, '') // 이모지·특수문자 제거 (한글·영문·숫자·공백·하이픈만 유지)
    .replace(/_/g, '') // 언더스코어 제거 (\w에 포함되어 있어 별도 처리)
    .replace(/[\s-]+/g, '-') // 공백·연속 하이픈 → 하이픈 하나
    .replace(/^-+|-+$/g, '') // 앞뒤 하이픈 제거
    .slice(0, 96)
    .replace(/-+$/, '') // 96자 절단으로 생긴 끝 하이픈 정리
}

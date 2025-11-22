export interface Expert {
  slug: string
  name: string
  title: string
  tagline: string
  email: string
  description: string
  image: string
  imageWithBackground: string
  education: string[]
  career: string[]
  workAreas: string[]
}

export const expertsData: Expert[] = [
  {
    slug: "lee-won-jun",
    name: "이원준",
    title: "회계사",
    tagline: "복잡한 회계 문제를 명확한 해답으로 풀어내는 전문가",
    email: "modu123@naver.com",
    description:
      "이원준 회계사는 다년간의 세무 및 회계 경험을 바탕으로 스타트업부터 대기업까지 다양한 고객에게 신뢰할 수 있는 전문 서비스를 제공합니다.",
    image: "/images/expert-lee-won-jun.png",
    imageWithBackground: "/images/expert-lee-won-jun-bg.png",
    education: ["- 한양대학교 졸업\n- 2017년 한국공인회계사 시험 합격"],
    career: ["- (전) Deloitte 안진회계법인 감사본부\n- (전) 대현회계법인\n- (현) 모두세무회계그룹 대표회계사"],
    workAreas: [
      "[Audit&PA]\n- 제조업 및 건설업, 도소매업 회계감사\n- C사 등 연결재무제표 작성 및 별도재무제표 작성 관련 회계자문\n- 수주 및 건설업 진행매출 인식 관련 회계자문",
      "[TAX]\n- T사 등 법인세 경정청구\n- N사 및 S사 세무조사 대응",
      "[FAS]\n- D사 PPA(인수가격배분) 용역 수행\n- C사 지분투자 관련 실사",
    ],
  },
  {
    slug: "im-hyeong-jin",
    name: "임형진",
    title: "세무사",
    tagline: "복잡한 회계 문제를 명확한 해답으로 풀어내는 전문가",
    email: "modu123@naver.com",
    description:
      "임형진 세무사는 중소기업 법인세무조사 대응과 회계 시스템 안정화에 특화된 전문가입니다. 다년간의 실무 경험을 통해 축적된 노하우로 예기치 못한 세무 리스크를 최소화하고, 기업의 재무 건전성을 확보하는 가장 확실한 솔루션을 제공합니다.",
    image: "/images/expert-im-hyeong-jin.png",
    imageWithBackground: "/images/expert-im-hyeong-jin-bg.png",
    education: ["- 강남대학교 졸업\n- 2018년 세무사 시험 합격"],
    career: ["- (전) 세무법인모두 법무팀\n- (현) 모두세무회계그룹 대표 세무사"],
    workAreas: [
      "[조세자문]\n- 법인세, 소득세, 상증세 관련 포괄적인 조세자문\n- 공익법인 등에 대한 조세자문\n- 비상장주식 평가",
      "[세무조사]\n- 세무진단을 통한 세무 리스크 컨설팅 용역\n- 세무조사 포괄적 대응\n- 자금출처증여세 조사 대응",
      "[조세불복]\n- 세액공제 경정청구\n- 과세전적부심사, 이의신청, 조세심판원 심판청구",
      "[세무조정 및 신고]\n- 법인세 세무조정 (세액감면공제 검토)\n- 중소기업 전문 세무기장서비스\n- 종합소득세 및 부가가치세 신고대행",
    ],
  },
  {
    slug: "kim-min-jun",
    name: "김민준",
    title: "회계사",
    tagline: "복잡한 회계 문제를 명확한 해답으로 풀어내는 전문가",
    email: "modu123@naver.com",
    description:
      "김민준 회계사는 풍부한 실무 경험과 전문성을 기반으로 복잡한 세무, 회계 환경 속에서도 정확한 해결책을 제시하여 고객의 안정적인 성장을 지원하는 것을 최우선 가치로 삼고 있습니다.",
    image: "/images/expert-kim-min-jun.png",
    imageWithBackground: "/images/expert-kim-min-jun-bg.png",
    education: ["- 서울대학교 졸업\n- 2019년 한국공인회계사 시험 합격"],
    career: ["- (전) PwC 삼일회계법인 감사본부\n- (전) PwC 삼일회계법인 세무본부\n- (현) 모두세무회계그룹 대표회계사"],
    workAreas: [
      "[Audit&PA]\n- 제조업 및 건설업, 엔터테인먼트 산업 회계감사\n- I사 등 연결재무제표 작성 및 별도재무제표 작성 관련 회계자문\n- R사 IFRS 컨버전 회계자문",
      "[TAX]\n- K사, H사 등 법인세 세무조사 대응\n- D사 세무진단\n- K사 등 국내 대기업 및 중소,중견기업 경정청구",
    ],
  },
  {
    slug: "kim-ji-seop",
    name: "김지섭",
    title: "회계사",
    tagline: "복잡한 회계 문제를 명확한 해답으로 풀어내는 전문가",
    email: "modu123@naver.com",
    description:
      "김지섭 회계사는 국내 최고 상장사들의 세무업무를 진행했던 경험을 바탕으로 대한민국 조세와 관련된 모든 업무에 대해 신뢰할 수 있는 전문 서비스를 제공합니다.",
    image: "/images/expert-kim-ji-seop.png",
    imageWithBackground: "/images/expert-kim-ji-seop-bg.png",
    education: ["- 서울대학교 졸업\n- 2019년 한국공인회계사 시험 합격"],
    career: ["- (전) PWC 삼일회계법인 세무본부\n- (현) 모두세무회계그룹 대표회계사"],
    workAreas: [
      "[TAX]\n- 세무조사 : 제조업 및 도소매업, 건설업, 정보통신업 등 세무조사 대응\n- 조세불복 : 국세청의 처분에 대한 불복진행\n- 세무진단 : 사전적인 세무진단으로 세무조사 리스크 최소화 및 절세방안 마련\n- 경정청구 : 최신 법령 및 유권해석을 반영하여 과거 과오납한 세금 환급\n- 세무기장 : 최신 트렌드를 반영한 정확하고 합리적인 세무 기장\n- 재산제세 : 각종 재산제세 신고대행",
      "[Audit]\n- 효율적인 회계감사 업무 수행 및 회계기준과 세무기준의 차이로 부터 발생하는 리스크 안내",
    ],
  },
  {
    slug: "choi-in-gyu",
    name: "최인규",
    title: "회계사",
    tagline: "복잡한 회계 문제를 명확한 해답으로 풀어내는 전문가",
    email: "modu123@naver.com",
    description:
      "최인규 회계사는 감사본부와 재무재문 본부를 거치며 다양한 업종에 대한 많은 경험을 쌓았습니다. 상장 대기업에서부터 스타트업까지, 신뢰와 전문성을 바탕으로 고객에게 최적의 솔루션을 제공합니다.",
    image: "/images/expert-choi-in-gyu.png",
    imageWithBackground: "/images/expert-choi-in-gyu-bg.png",
    education: ["- 인하대학교 졸업\n- 2019년 한국공인회계사 시험 합격"],
    career: ["- (전) Deloitte 안진회계법인 감사본부\n- (전) KPMG 삼정회계법인 재무자문본부\n- (현) 모두세무회계그룹 대표회계사"],
    workAreas: [
      "[Audit]\n- 제조업 및 도소매업 회계감사\n- 소프트웨어 및 화장품제조업 상장사 회계감사\n- 제조업 및 유통업 IPO 지정감사",
      "[PA]\n- 자동차 상장사 K사 및 M사 회계자문\n- 외국계 B사 한공회 감리대응 회계자문",
      "[내부회계관리제도]\n- 자동차 상장사 K사 내부회계관리제도 구축 업무\n- 제약 상장사 K사 내부회계관리제도 구축 및 평가 업무",
      "[FAS]\n- 의료기기 O사 및 급식업 H사 인수 실사\n- 의료기기 O사 PMI\n- 프렌차이즈 M사 매각 실사\n- 스타트업 A사 투자 실사",
    ],
  },
  {
    slug: "jeong-gwang-hwa",
    name: "정광화",
    title: "회계사",
    tagline: "복잡한 회계 문제를 명확한 해답으로 풀어내는 전문가",
    email: "modu123@naver.com",
    description:
      "정광화 회계사는 2018년 삼정회계법인 감사본부에 입사하여 전력 인프라 및 제조업의 회계감사 및 회계자문용역을 수행하였으며, 삼도 회계법인에서 회계감사, 재무실사 및 비상장 주식 가치 평가 등의 업무를 수행하였습니다. 다년간의 업무 경험을 바탕으로 개별 기업에 특화된 전문 서비스를 제공합니다.",
    image: "/images/expert-jeong-gwang-hwa.png",
    imageWithBackground: "/images/expert-jeong-gwang-hwa-bg.png",
    education: ["- 동국대학교 졸업\n- 2018년 한국공인회계사 시험 합격"],
    career: ["- (전) 삼정KPMG 회계법인 감사본부\n- (전) 삼도회계법인\n- (현) 모두세무회계그룹 대표회계사"],
    workAreas: [
      "[Audit&PA]\n- 제조업, 제약바이오, 게임사 및 도소매업 회계감사\n- H증권사 등 연결 재무제표 작성 및 회계 이슈 대응\n- G사 상장 관련 자문 및 거래소 대응용역\n- K사 IFRS Conversion 및 수익인식기준 작성 등 IFRS 관련 용역",
      "[FAS]\n- S사 및 P사 등 투자자 측 재무실사\n- W사, H사 등 재무보고목적의 비상장주식 평가 용역\n- Y사 PPA(인수가격배분) 용역\n- 상호협동조합 부실채권 실사용역",
    ],
  },
]

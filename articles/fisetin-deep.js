(()=>{
const p=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='fisetin-evidence-guide');
if(!p)return;
Object.assign(p,{
  date:'2023-07-21',
  title:'Fisetin은 정말 노화세포를 제거할까? — 세놀리틱, SASP, 인간 임상시험의 현재',
  excerpt:'쥐에서는 강렬한 세놀리틱 신호가 나왔습니다. 그러나 인간에서는 아직 “노화세포 제거 → 건강수명 연장”이 증명되지 않았습니다. 2018년 동물연구부터 2026년 임상번역 리뷰와 진행 중인 시험까지 차근차근 읽습니다.',
  tags:['Fisetin','피세틴','Senolytic','세놀리틱','Cellular Senescence','SASP','Inflammaging','Frailty','항노화','근거 검토','Longevity Molecules'],
  html:`
<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-07-21 · <a href="https://myepic2.tistory.com/5" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a> · LONGEVITY JOURNAL 근거 전면 업데이트 2026-10-08</p>

<figure class="story-hero molecular-figure"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Fisetin.svg" alt="Fisetin의 화학구조" loading="eager"><figcaption>Fisetin(3,3′,4′,7-tetrahydroxyflavone)의 화학구조. 작은 식물성 플라보놀 하나가 ‘노화세포 제거제’ 후보로 주목받게 됐습니다. 이미지: Ayacop / Wikimedia Commons, Public Domain.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>Fisetin은 가장 흥미로운 천연 senolytic 후보 중 하나지만, 아직 검증된 인간 항노화제는 아닙니다.</b> 2018년 대표 연구에서는 늙은 생쥐에서 노화세포 부담과 조직 기능이 개선되고 남은 수명이 늘었습니다. 하지만 사람에게서 노화세포를 실제로 제거해 질병·노쇠·사망을 줄였다는 대규모 임상증거는 아직 없습니다. 2026년 최신 임상번역 리뷰는 34개의 등록 임상시험을 확인했지만 결과가 공개된 완료 시험은 소수였고, 연구자들도 안전성·약동학·적정 용량·효과 측정법을 먼저 확립해야 한다고 평가합니다.</p></div>

<h2>01. Fisetin은 무엇인가?</h2>
<p>Fisetin은 딸기, 사과, 감, 포도, 양파 등에 존재하는 <b>flavonol(플라보놀)</b>입니다. 식물에서는 색과 스트레스 방어에 관여하는 폴리페놀의 한 종류이고, 실험실에서는 항산화·항염·세포신호 조절 같은 다양한 작용 때문에 오래전부터 연구돼 왔습니다.</p>
<p>여기서 첫 번째 오해를 정리할 필요가 있습니다. 인터넷에서 자주 보이는 ‘딸기 1 g에 fisetin 160 μg’ 같은 수치는 한 분석에서 <b>동결건조 시료를 산 가수분해한 뒤 측정한 값</b>입니다. 그대로 ‘신선한 딸기 몇 개 = 임상시험 용량’으로 환산하면 부정확합니다. 음식 속 fisetin 섭취와 임상시험의 고용량 fisetin 투여는 전혀 다른 노출입니다.</p>

<figure class="story-photo"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Strawberry_%28154942957%29.jpeg" alt="붉은 딸기" loading="lazy"><figcaption>딸기는 fisetin이 비교적 많이 검출되는 식품으로 알려져 있습니다. 그러나 식품 속 미량 섭취와 세놀리틱 임상시험에서 사용하는 고용량은 같은 개념이 아닙니다. 사진: CC0 / Wikimedia Commons.</figcaption></figure>

<h2>02. ‘노화세포’는 그냥 오래된 세포가 아니다</h2>
<p><b>Cellular senescence(세포노화)</b>는 세포가 영구적 또는 장기간 분열을 멈춘 상태를 말합니다. DNA 손상, 텔로미어 단축, 산화 스트레스, 종양유전자 활성, 방사선·항암치료 같은 강한 스트레스가 원인이 될 수 있습니다.</p>
<p>세포노화 자체는 나쁜 현상만은 아닙니다. 손상된 세포가 무한히 증식하는 것을 막아 <b>암을 억제하고, 상처 치유와 발생 과정에도 기여</b>할 수 있습니다. 문제는 나이가 들며 제거되지 않은 노화세포가 일부 조직에 쌓일 때입니다.</p>

<figure class="story-photo"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Cellular_senescence.jpg" alt="세포노화의 원인과 결과를 설명하는 도식" loading="lazy"><figcaption>세포노화는 DNA 손상과 스트레스에 대한 방어반응이지만, 장기간 축적되면 염증성 신호와 조직 기능 저하에 연결될 수 있습니다. 이미지: Alshaebi F, Sciortino A / Wikimedia Commons, CC BY 4.0.</figcaption></figure>

<div class="pathway" aria-label="세포노화와 세놀리틱 작용 단순화">
  <div class="pathway-step"><b>세포 스트레스</b><span>DNA 손상 · ROS · 텔로미어 단축</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>노화세포</b><span>분열 정지 + 생존 신호 강화</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>SASP</b><span>IL-6 · IL-8 등 염증성 신호</span></div>
</div>
<p class="small-note">※ 실제 세포노화는 조직·세포 종류에 따라 매우 다르며, 하나의 표지자로 완벽하게 정의할 수 없습니다.</p>

<h2>03. SASP가 왜 항노화 연구에서 중요한가?</h2>
<p>일부 노화세포는 <b>SASP(senescence-associated secretory phenotype)</b>라고 불리는 분비 패턴을 만듭니다. 사이토카인, 케모카인, 성장인자, 단백질분해효소 등이 주변으로 분비되면서 면역세포를 부르고 조직 환경을 바꿀 수 있습니다.</p>
<p>이 과정은 짧게 나타날 때는 손상 부위를 청소하는 데 도움이 될 수 있지만, 노화세포가 오래 남으면 <b>만성 저등급 염증(inflammaging)</b>과 조직 기능 저하를 증폭할 가능성이 있습니다. 이 때문에 세놀리틱 연구의 핵심 가설은 단순합니다. ‘모든 노화세포를 없애자’가 아니라, <b>해롭게 축적된 노화세포의 일부를 선택적으로 제거하면 SASP와 만성 염증의 부담을 줄일 수 있지 않을까?</b> 입니다.</p>

<h2>04. Senolytic과 Senomorphic은 다르다</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>Senolytic</b><span>노화세포가 의존하는 생존 경로를 건드려 선택적으로 세포사멸을 유도하는 전략.</span></div>
  <div class="evidence-card"><b>Senomorphic</b><span>노화세포를 죽이지 않고 SASP 같은 해로운 분비·신호를 낮추려는 전략.</span></div>
  <div class="evidence-card"><b>Fisetin</b><span>실험조건과 세포 종류에 따라 senolytic·senomorphic 성격이 모두 논의되는 후보 물질.</span></div>
</div>
<p>노화세포는 정상세포보다 BCL-2 계열, PI3K/AKT, NF-κB 등 여러 생존·스트레스 경로에 더 의존할 수 있습니다. Fisetin은 이런 경로에 영향을 주어 일부 노화세포에서 apoptosis를 촉진하는 것으로 연구됐습니다. 하지만 <b>모든 종류의 노화세포에 똑같이 작동하는 것은 아닙니다.</b> 실제 실험에서도 특정 인간 내피세포에서는 강한 senolytic 작용을 보였지만 다른 세포에서는 효과가 약했습니다.</p>

<h2>05. 2018년, Fisetin이 항노화 커뮤니티의 스타가 된 연구</h2>
<p>Fisetin이 본격적으로 ‘세놀리틱’이라는 이름과 함께 알려진 계기는 2018년 Yousefzadeh 연구팀의 EBioMedicine 논문입니다. 연구진은 여러 천연물질을 비교한 뒤 fisetin을 강력한 후보로 선정했습니다.</p>
<p>늙은 생쥐에 fisetin을 투여했을 때 여러 조직에서 노화 관련 표지가 감소하고 조직 항상성이 개선됐습니다. 특히 생애 후반에 fisetin을 시작한 실험에서 <b>남은 수명과 일부 건강지표가 개선</b>됐습니다. 이 결과는 매우 인상적이었지만 여전히 동물실험입니다. 사람과 쥐는 대사, 약동학, 질병 구조가 다르므로 ‘쥐 수명 연장 = 사람 수명 연장’로 옮길 수 없습니다.</p>

<div class="takeaway"><strong>동물연구를 읽는 가장 중요한 규칙</strong><p>동물실험은 ‘가능성’을 보여주는 데 강하지만, <b>사람에서 안전하고 효과적인 용량·간격·기간을 결정해 주지는 않습니다.</b> Fisetin은 바로 이 번역 단계가 아직 진행 중인 대표적인 물질입니다.</p></div>

<h2>06. 왜 매일 먹는 대신 ‘짧고 강하게’ 먹는 연구가 많을까?</h2>
<p>세놀리틱 전략은 혈압약처럼 24시간 계속 작용해야 하는 치료와 다르게 생각될 수 있습니다. 목표 세포를 일정 부분 제거했다면 약물이 몸에 계속 남아 있을 필요가 없다는 <b>‘hit-and-run’</b> 가설이 있기 때문입니다.</p>
<p>그래서 Mayo Clinic을 비롯한 여러 인간 시험에서는 대략 <b>20 mg/kg/day를 2일 연속</b> 투여하고 일정 기간 쉬는 간헐적 방식을 시험하고 있습니다. 그러나 이 숫자는 ‘추천 복용법’이 아니라 <b>연구용 실험 프로토콜</b>입니다. 체중에 곱해 개인이 자가복용량을 만드는 것은 안전하지 않습니다.</p>
<p>실제로 AFFIRM 노쇠 연구는 70세 이상 여성에게 20 mg/kg/day를 2일간, 두 달에 걸쳐 반복하는 설계를 사용하고 있고, 2026년 시작된 Fisetin HIGH 연구도 20 mg/kg/day를 이틀 투여해 약동학·안전성·SASP·염증·노쇠 지표를 먼저 확인하고 있습니다.</p>

<h2>07. 가장 큰 현실적 문제: 흡수율이 좋지 않다</h2>
<p>Fisetin은 물에 잘 녹지 않고 경구 생체이용률이 낮으며 빠르게 대사됩니다. 이 사실은 ‘몇 mg을 먹었는가’만으로 조직 노출을 추정하기 어렵게 만듭니다.</p>
<p>2022년 건강한 성인을 대상으로 한 무작위 교차 약동학 연구에서는 특수 하이브리드 하이드로겔 제형이 일반 fisetin보다 혈중 노출을 크게 높였습니다. 이 연구가 보여준 핵심은 특정 제품이 우월하다는 결론이 아니라, <b>제형에 따라 같은 fisetin 용량도 실제 체내 노출이 크게 달라질 수 있다</b>는 점입니다.</p>
<p>2026년 최신 임상번역 리뷰와 체계적 리뷰도 낮은 수용성·낮은 경구 생체이용률·빠른 대사를 임상 적용의 핵심 장애물로 지적합니다. 그래서 리포솜·미셀·나노제형 같은 전달기술 연구가 이어지고 있습니다.</p>

<h2>08. 사람에게서 노화가 줄었다는 연구가 있나?</h2>
<p>2024년 50세 이상 건강한 성인 10명을 대상으로 한 작은 pilot study가 있습니다. 참가자들은 fisetin 500 mg/day를 한 달에 1주씩, 6개월 복용했습니다. DNA 메틸화 기반 TruAge 검사에서 <b>10명 중 4명은 생물학적 나이가 감소했고, 5명은 증가했으며, 1명은 변화가 없었습니다.</b></p>
<p>이 연구는 매우 작고 대조군이 없으며, 단일 생물학적 나이 검사에 의존했습니다. 따라서 ‘fisetin이 인간의 생물학적 나이를 낮췄다’는 증거로 사용하기 어렵습니다. 오히려 이 결과는 현재 인간 데이터가 얼마나 초기 단계인지 잘 보여줍니다.</p>

<h2>09. 75명 무릎 골관절염 시험 — 드디어 인간 RCT는 무엇을 보여줬나?</h2>
<p>NCT04210986은 40~80세 무릎 골관절염 환자 75명을 대상으로 한 무작위·위약 대조 1/2상 시험입니다. Fisetin 약 20 mg/kg/day를 이틀 연속 복용하고 28일 뒤 다시 이틀 투여했습니다.</p>
<p>등록 결과에서 주요 안전성 평가인 ‘한 번 이상의 치료 중 이상반응’을 경험한 사람은 fisetin군 34명 중 28명, 위약군 40명 중 33명이었습니다. 심각한 이상반응은 양쪽 모두 2명씩이었고 사망은 없었습니다. <b>즉 이 시험에서 뚜렷한 대규모 안전성 차이가 나타난 것은 아니지만, 이것이 장기 고용량 안전성을 확정한다는 뜻도 아닙니다.</b></p>
<p>CRP를 비롯한 염증·SASP·관절 관련 여러 지표도 측정됐지만, 이 시험 하나만으로 ‘노화세포 제거가 임상적으로 입증됐다’고 말할 수준은 아닙니다. 특히 골관절염 환자의 결과를 건강한 일반인의 항노화 효과로 그대로 바꾸어 해석하면 안 됩니다.</p>

<h2>10. COVID-19 연구에서는 기대가 꺾인 결과도 있었다</h2>
<p>Fisetin 세놀리틱 가설은 감염 시 과도한 염증에도 시험됐습니다. 요양시설 고령자를 대상으로 한 COVID-FIS 임상시험(NCT04537299)은 2025년 <b>futility — 유효성을 기대하기 어렵다는 판단</b>으로 중단됐습니다.</p>
<p>이 결과는 중요합니다. 세놀리틱이라는 생물학적 가설이 그럴듯하더라도 모든 질환과 상황에서 임상효과가 나타나는 것은 아니라는 실제 사례이기 때문입니다. LONGEVITY JOURNAL에서는 긍정 연구만 모으지 않고 이런 실패 신호도 함께 기록합니다.</p>

<h2>11. 2026년 현재, 인간 임상시험은 어디까지 왔나?</h2>
<p>2026년 발표된 임상번역 리뷰는 국제 임상시험 등록자료에서 <b>fisetin을 포함하는 34개 등록 시험</b>을 확인했고, 그 가운데 결과를 평가할 수 있는 완료시험은 아직 소수라고 정리했습니다. 연구 주제는 노쇠·혈관기능·골관절염·대사질환·암·신경면역질환 등으로 넓어졌지만 ‘건강한 사람의 수명 연장’을 증명한 시험은 없습니다.</p>
<p>특히 주목할 연구가 <b>Fisetin HIGH (NCT06431932)</b>입니다. 2026년 3월 시작됐고, 건강한 자원자와 여러 만성질환을 가진 고령 환자 총 60명을 대상으로 약동학, 안전성, SASP·염증·노화 바이오마커, 신체기능·인지기능을 평가합니다. 완료 예정은 2028년입니다. 이 시험이 중요한 이유는 ‘효능 홍보’보다 먼저 <b>사람 몸에서 fisetin이 얼마나 흡수되고 어떤 대사체로 바뀌며, 어떤 지표가 실제 senolysis를 보여주는지</b>를 확인하려 하기 때문입니다.</p>

<h2>12. Fisetin과 inflammaging — 연결은 매력적이지만 아직 중간 단계</h2>
<p>세포노화가 장수 연구에서 중요한 이유는 SASP를 통해 <b>IL-6, IL-8, 여러 염증·조직재형성 신호</b>를 만들 수 있기 때문입니다. 노화세포를 줄이면 inflammaging을 낮출 수 있다는 가설은 매우 매력적입니다.</p>
<p>하지만 인간에서는 아직 ‘fisetin → 노화세포 감소 → SASP 감소 → 만성 염증 감소 → 질병 감소 → 수명 증가’라는 전체 사슬이 증명되지 않았습니다. 현재는 이 연결고리 중 앞부분을 검증하는 단계입니다. 이 차이를 기억하면 과장된 항노화 광고와 실제 과학을 쉽게 구분할 수 있습니다.</p>

<div class="pathway" aria-label="Fisetin 항노화 가설의 근거 단계">
  <div class="pathway-step highlight"><b>Fisetin</b><span>세포 생존경로 조절</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>Senescent cell ↓</b><span>전임상 근거 강함 · 인간 검증 중</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>건강수명 ↑?</b><span>사람에서는 아직 미입증</span></div>
</div>

<h2>13. 안전성은 ‘천연물’이라는 말로 끝나지 않는다</h2>
<p>현재까지 단기 임상시험에서 fisetin은 비교적 잘 견디는 편으로 보입니다. 그러나 장기·반복 고용량의 안전성 데이터는 부족합니다. 또한 fisetin은 실험적으로 CYP2C9·CYP3A4 등 약물대사효소와 상호작용할 가능성이 제기돼, 실제 임상시험 프로토콜에서는 <b>warfarin을 포함한 여러 약물과의 상호작용</b>을 엄격하게 관리합니다.</p>
<p>세포노화는 암 억제·상처 치유 등 정상 생리에도 필요합니다. 따라서 ‘노화세포는 모두 나쁘니 많이 없앨수록 좋다’는 접근은 위험합니다. 어느 조직의 어떤 노화세포를 언제 얼마나 제거해야 이득이 되는지는 아직 연구 문제입니다.</p>

<h2>14. 음식으로 먹는 Fisetin과 보충제로 먹는 Fisetin은 같은가?</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>과일·채소</b><span>fisetin뿐 아니라 섬유질·비타민·다른 폴리페놀을 함께 섭취. 일반 식품 수준의 노출.</span></div>
  <div class="evidence-card"><b>일반 보충제</b><span>식품보다 훨씬 높은 단일성분 노출. 제품별 순도·제형·흡수율 차이가 큼.</span></div>
  <div class="evidence-card"><b>임상시험 고용량</b><span>체중당 용량과 엄격한 제외기준·의학적 모니터링 아래 사용. 자가복용 지침이 아님.</span></div>
</div>
<p>딸기를 많이 먹는 것이 세놀리틱 치료와 같지는 않습니다. 반대로 ‘식품에 원래 존재하는 성분이니 고용량 보충도 안전할 것’이라고 가정할 수도 없습니다. <b>용량이 바뀌면 약리학도 바뀝니다.</b></p>

<h2>15. LONGEVITY JOURNAL 근거 판정</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>세놀리틱 기전</b><span><strong>전임상 근거 강함.</strong> 특정 노화세포에서 apoptosis·SASP 관련 경로 변화가 반복 관찰.</span></div>
  <div class="evidence-card"><b>동물 건강수명</b><span><strong>흥미로운 근거.</strong> 늙은 생쥐에서 기능·병리·남은 수명 개선.</span></div>
  <div class="evidence-card"><b>인간 노화세포 제거</b><span><strong>초기 단계.</strong> 바이오마커와 질환별 시험이 진행 중이며 표준화된 senolysis 지표도 미확립.</span></div>
  <div class="evidence-card"><b>인간 만성염증</b><span><strong>가능성.</strong> 기전은 설득력 있지만 임상 효과 크기·대상군은 아직 불명확.</span></div>
  <div class="evidence-card"><b>생물학적 나이</b><span><strong>매우 초기.</strong> 10명 pilot에서 결과가 혼재했고 대조군 없음.</span></div>
  <div class="evidence-card"><b>수명 연장</b><span><strong>사람에서 입증 안 됨.</strong> 현재 ‘검증된 항노화제’로 부를 근거는 부족.</span></div>
</div>

<h2>16. 이 글에서 꼭 기억할 7가지</h2>
<ol>
<li><b>Fisetin은 ‘항산화제’보다 senolytic 후보라는 점이 더 흥미롭습니다.</b></li>
<li><b>노화세포는 무조건 나쁜 세포가 아닙니다.</b> 암 억제·상처 치유에도 역할이 있습니다.</li>
<li><b>쥐의 수명 연장은 인간 수명 연장의 증명이 아닙니다.</b></li>
<li><b>20 mg/kg/day 같은 수치는 임상시험 용량이지 일반인 권장량이 아닙니다.</b></li>
<li><b>낮은 생체이용률 때문에 제형에 따라 체내 노출이 크게 달라질 수 있습니다.</b></li>
<li><b>부정적 결과도 존재합니다.</b> COVID-FIS 시험은 futility로 중단됐습니다.</li>
<li><b>2026년 현재 가장 필요한 데이터는 장기 안전성, 약동학, 신뢰할 수 있는 senescence 바이오마커, 그리고 실제 기능·질병 결과입니다.</b></li>
</ol>

<div class="takeaway"><strong>LONGEVITY JOURNAL의 결론</strong><p>Fisetin은 현재 항노화 분야에서 <b>‘가설이 매우 흥미롭고 동물 근거도 인상적이지만, 인간 번역은 아직 진행 중인 물질’</b>입니다. 기대할 이유는 충분하지만, 그 기대와 증거를 구분해야 합니다. 앞으로 AFFIRM, 혈관기능 연구, Fisetin HIGH 같은 시험에서 <b>실제 노화세포·SASP 변화가 신체기능이나 질병 위험 감소로 이어지는지</b>가 확인될 때 비로소 Fisetin의 위치가 크게 바뀔 수 있습니다.</p></div>

<h2>근거자료 — 발표 시간순</h2>
<div class="timeline">
  <div class="paper"><time>2018</time><div><b>Yousefzadeh MJ, et al. EBioMedicine.</b><br>Fisetin을 강력한 천연 senolytic 후보로 제시한 대표 전임상 연구. 늙은 생쥐에서 노화세포 표지와 노화 관련 병리가 감소하고 생애 후반 투여에서 남은 수명·조직 항상성 개선이 관찰됨. 인간 수명효과를 증명한 연구는 아님.<br><a href="https://pubmed.ncbi.nlm.nih.gov/30279143/" target="_blank" rel="noopener noreferrer">PMID 30279143 ↗</a></div></div>

  <div class="paper"><time>2022</time><div><b>Krishnakumar IM, et al. Journal of Nutritional Science.</b><br>건강한 성인 15명의 무작위 이중맹검 교차 약동학 연구. 특수 하이브리드-하이드로겔 fisetin 제형과 일반 fisetin을 비교해 제형에 따라 혈중 fisetin·대사체 노출이 크게 달라질 수 있음을 보여줌.<br><a href="https://pubmed.ncbi.nlm.nih.gov/36304817/" target="_blank" rel="noopener noreferrer">PMID 36304817 · DOI 10.1017/jns.2022.72 ↗</a></div></div>

  <div class="paper"><time>2024</time><div><b>Lee E, Burns M. The Effects of Fisetin on Reducing Biological Aging: A Pilot Study.</b><br>50세 이상 건강한 성인 10명에게 500 mg/day를 월 1주, 6개월 투여. TruAge 기준 4명은 생물학적 나이 감소, 5명 증가, 1명 변화 없음. 무대조·극소규모 연구라 효능 결론은 불가.<br><a href="https://pubmed.ncbi.nlm.nih.gov/39269340/" target="_blank" rel="noopener noreferrer">PMID 39269340 ↗</a></div></div>

  <div class="paper"><time>2024</time><div><b>Rasmussen LJH, et al. Mechanisms of Ageing and Development.</b><br>Fisetin의 senotherapeutic 근거를 세포·동물·초기 인간시험까지 검토. 유망하지만 인간에서 안전성·약동학·효능·적정 용량·결과지표 확립이 필요하다고 결론.<br><a href="https://pubmed.ncbi.nlm.nih.gov/39384074/" target="_blank" rel="noopener noreferrer">PMID 39384074 ↗</a></div></div>

  <div class="paper"><time>2024</time><div><b>NCT04210986 · Knee Osteoarthritis Phase I/II.</b><br>75명 무작위 위약대조 시험. 약 20 mg/kg/day를 이틀 투여 후 한 달 뒤 반복. 등록결과에서 한 번 이상의 이상반응은 fisetin 28/34, placebo 33/40; 심각한 이상반응 2/34 vs 2/40, 사망 없음. 노화세포 제거 및 건강수명 확립시험은 아님.<br><a href="https://clinicaltrials.gov/study/NCT04210986" target="_blank" rel="noopener noreferrer">ClinicalTrials.gov NCT04210986 ↗</a></div></div>

  <div class="paper"><time>2024</time><div><b>STOP-Sepsis trial protocol · Trials.</b><br>65세 이상 패혈증 환자에서 fisetin이 노화 면역세포·임상 악화를 줄일 수 있는지 평가하는 다기관 2상 시험 설계. 결과 논문이 아니라 임상번역 단계의 프로토콜임.<br><a href="https://pubmed.ncbi.nlm.nih.gov/39434114/" target="_blank" rel="noopener noreferrer">PMID 39434114 · DOI 10.1186/s13063-024-08474-2 ↗</a></div></div>

  <div class="paper"><time>2025</time><div><b>COVID-FIS · NCT04537299.</b><br>요양시설 고령 COVID-19 환자에서 fisetin을 시험했으나 DSMB와 NIA 판단에 따라 futility로 종료. 생물학적 개연성이 모든 임상상황에서 효과로 이어지지 않는다는 중요한 반대 사례.<br><a href="https://clinicaltrials.gov/study/NCT04537299" target="_blank" rel="noopener noreferrer">ClinicalTrials.gov NCT04537299 ↗</a></div></div>

  <div class="paper"><time>2026</time><div><b>Fisetin HIGH · NCT06431932.</b><br>2026년 시작된 Phase I/IIa pilot. 건강한 자원자 20명과 고령 다질환자 40명에서 20 mg/kg/day 이틀 투여 후 약동학·안전성·염증·SASP·senescence·노쇠·인지 지표를 평가. 완료 예정 2028년.<br><a href="https://clinicaltrials.gov/study/NCT06431932" target="_blank" rel="noopener noreferrer">ClinicalTrials.gov NCT06431932 ↗</a></div></div>

  <div class="paper"><time>2026</time><div><b>Clinical Translation of Fisetin for Age-Related Diseases.</b><br>국제 등록자료에서 34개 fisetin 임상시험을 조사하고, 결과가 있는 완료시험 4개를 중심으로 인간 번역 근거를 평가. 전임상 가능성은 크지만 임상 검증·약동학·용량 최적화·표준화된 바이오마커가 여전히 부족하다고 결론.<br><a href="https://pubmed.ncbi.nlm.nih.gov/42796982/" target="_blank" rel="noopener noreferrer">PMID 42796982 ↗</a></div></div>
</div>

<p class="editor-note"><strong>최종 근거 검토:</strong> 2026-10-08 · Fisetin은 연구가 매우 빠르게 변하는 분야입니다. 새 RCT·임상결과가 공개되면 긍정 결과뿐 아니라 실패·무효 결과도 같은 기준으로 업데이트합니다. 이 글은 일반적인 과학정보이며 특정 용량의 자가복용을 권하는 내용이 아닙니다.</p>
`
});
})();
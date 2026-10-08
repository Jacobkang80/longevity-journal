(()=>{
const p=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='nmn-evidence-guide');
if(!p)return;
Object.assign(p,{
  date:'2023-07-21',
  title:'NMN은 정말 노화를 늦출까? — NAD⁺, 미토콘드리아, 인간 임상시험까지',
  excerpt:'NMN은 NAD⁺를 올리는 데는 꽤 성공적입니다. 하지만 “NAD⁺ 상승 → 실제 노화 지연” 사이에는 아직 큰 간격이 있습니다. 동물실험부터 2026년 메타분석까지 차근차근 확인합니다.',
  tags:['NMN','NAD+','Sirtuin','미토콘드리아','인슐린 감수성','근육','수면','항노화','근거 검토','Longevity Molecules'],
  html:`
<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-07-21 · <a href="https://myepic2.tistory.com/6" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a> · LONGEVITY JOURNAL 근거 전면 업데이트 2026-10-08</p>

<figure class="story-hero molecular-figure"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Nicotinamide_mononucleotide.svg" alt="NMN의 화학 구조" loading="eager"><figcaption>NMN(Nicotinamide Mononucleotide)의 화학구조. 이름은 거창하지만 핵심은 ‘니코틴아마이드 + 리보스 + 인산’으로 구성된 하나의 뉴클레오타이드입니다. 이미지: Edgar181 / Wikimedia Commons, Public Domain.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>NMN은 사람의 혈중 NAD⁺ 관련 대사체를 높이는 데는 비교적 일관되게 성공합니다.</b> 그러나 혈당·지질·체중·근육·수면·노화 속도처럼 우리가 실제로 원하는 결과는 훨씬 덜 일관적입니다. 2025년 메타분석에서는 NAD 관련 지표 상승은 확인됐지만 대부분의 임상 대사 지표는 유의하게 좋아지지 않았고, 2026년 메타분석에서도 단기 안전성은 대체로 양호했지만 광범위한 대사 개선은 확인되지 않았습니다. 따라서 현재 NMN의 위치는 <b>‘표적은 움직이지만 건강수명 연장은 아직 증명되지 않은 항노화 후보’</b>에 가깝습니다.</p></div>

<h2>01. 왜 하필 NAD⁺인가?</h2>
<p>NMN 이야기를 이해하려면 먼저 <b>NAD⁺(nicotinamide adenine dinucleotide)</b>를 알아야 합니다. NAD⁺는 우리 몸 거의 모든 세포에 존재하는 조효소입니다. 가장 기본적인 역할은 영양소에서 얻은 전자를 옮겨 미토콘드리아가 ATP를 만드는 데 참여하는 것입니다.</p>
<p>그런데 NAD⁺는 단순한 ‘에너지 보조제’가 아닙니다. 시르투인(sirtuins), PARP 같은 효소가 NAD⁺를 소비하면서 단백질의 상태를 조절하거나 DNA 손상 반응에 참여합니다. 그래서 연구자들은 NAD⁺를 <b>에너지 대사와 세포 유지보수를 연결하는 허브</b>처럼 바라봅니다.</p>

<figure class="story-photo molecular-figure"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/NAD%2B-from-xtal-2003-3D-balls.png" alt="NAD 플러스 분자의 3차원 모델" loading="lazy"><figcaption>NAD⁺의 3차원 구조. NMN은 이 더 큰 분자를 만드는 전구체 가운데 하나입니다. 이미지: Ben Mills / Wikimedia Commons, Public Domain.</figcaption></figure>

<div class="pathway" aria-label="NAD salvage pathway simplified">
  <div class="pathway-step"><b>비타민 B3 계열</b><span>NAM · NR 등</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>NMN</b><span>NAD⁺ 바로 전 단계</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>NAD⁺</b><span>에너지 · 시르투인 · DNA 반응</span></div>
</div>
<p class="small-note">※ 실제 NAD 대사는 여러 경로가 얽혀 있으며 위 도식은 이해를 위한 단순화입니다. 세포가 경구 NMN을 어떤 형태로 흡수하는지에 대해서도 아직 논쟁이 있습니다.</p>

<h2>02. 나이가 들면 NAD⁺는 정말 줄어들까?</h2>
<p>동물에서는 비교적 명확합니다. 여러 조직에서 노화와 함께 NAD⁺가 감소하고, NAD⁺를 만드는 효소의 활성 저하 또는 NAD⁺를 소비하는 효소의 증가가 관찰됩니다. 대표적으로 <b>CD38</b> 같은 NADase가 노화·염증 환경에서 증가할 수 있고, DNA 손상이 많아지면 <b>PARP</b> 계열 효소의 NAD⁺ 소비도 늘 수 있습니다.</p>
<p>사람에서는 그림이 더 복잡합니다. 혈액이나 특정 조직에서 나이에 따른 감소가 보고되지만 <b>모든 조직에서 같은 속도로 감소하는 것도 아니고, 개인차도 매우 큽니다.</b> 2024년 40~65세 80명의 데이터를 다시 분석한 연구에서도 NMN 복용 뒤 NAD 증가폭의 개인차가 상당히 컸습니다. ‘나이가 몇 살이면 NAD⁺가 몇 % 부족하다’처럼 단순한 공식은 아직 없습니다.</p>

<div class="evidence-grid">
  <div class="evidence-card"><b>에너지 대사</b><span>NAD⁺/NADH는 해당과정·TCA 회로·전자전달계의 산화환원 반응에 참여합니다.</span></div>
  <div class="evidence-card"><b>세포 유지</b><span>시르투인과 PARP는 NAD⁺를 사용합니다. 다만 ‘시르투인 활성 = 수명 연장’로 바로 연결하면 안 됩니다.</span></div>
  <div class="evidence-card"><b>노화와의 연결</b><span>전임상 근거는 강하지만, 인간의 조직별 NAD 변화와 실제 건강수명 사이의 인과관계는 아직 완성되지 않았습니다.</span></div>
</div>

<h2>03. NMN을 먹으면 그대로 세포 안으로 들어갈까?</h2>
<p>이 부분은 생각보다 중요한 미해결 문제입니다. ‘NMN을 먹으면 장에서 그대로 흡수되어 혈액을 타고 모든 조직에 들어간다’고 단순하게 설명하는 자료가 많지만, 실제 생체 내 과정은 더 복잡합니다. NMN이 장에서 일부 분해되어 NR이나 nicotinamide 형태로 흡수된 뒤 다시 NMN과 NAD⁺로 재합성될 가능성도 있고, 특정 수송체를 통한 직접 흡수 가능성도 연구돼 왔습니다.</p>
<p>결론적으로 <b>경구 NMN이 사람의 혈중 NAD 관련 대사체를 높인다는 현상 자체는 여러 임상시험에서 관찰</b>됐습니다. 다만 ‘먹은 NMN 분자가 그대로 특정 장기의 세포까지 도달했다’는 수준의 단순한 이야기는 아직 입증하기 어렵습니다.</p>

<figure class="story-photo"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Mitochondrion_structure_drawing.svg" alt="미토콘드리아 구조 그림" loading="lazy"><figcaption>미토콘드리아는 ATP 생산의 핵심 장소이고 NAD⁺/NADH는 이 에너지 흐름의 중심에 있습니다. 그러나 ‘미토콘드리아에 중요하다’는 사실만으로 NMN 보충이 곧바로 인간의 노화를 늦춘다고 결론 내릴 수는 없습니다. 이미지: Kelvinsong / Wikimedia Commons, CC0.</figcaption></figure>

<h2>04. 동물에서는 왜 NMN이 그렇게 놀라워 보였을까?</h2>
<p>NMN 열풍은 사람 임상시험보다 훨씬 먼저 동물실험에서 시작됐습니다. 노화·비만 동물에서 NMN을 투여했을 때 인슐린 감수성, 미토콘드리아 기능, 혈관 기능, 신체활동 등 여러 지표가 좋아졌다는 연구가 축적됐습니다. 일부 장기간 투여 연구에서는 나이에 따른 생리 기능 저하가 완화됐습니다.</p>
<p>하지만 동물 연구에서 꼭 기억할 점이 있습니다. <b>‘노화 관련 기능이 좋아졌다’와 ‘수명이 연장됐다’는 서로 다른 결과</b>입니다. 또한 실험쥐의 유전적 배경, 사료, NMN 용량, 투여 시점은 실제 사람의 생활환경과 크게 다릅니다. NMN 연구가 흥미로운 것은 맞지만, 동물에서의 화려한 결과를 사람에게 그대로 복사할 수는 없습니다.</p>

<h2>05. 2020년 — 사람에게 먹여도 되는가?</h2>
<p>초기 인간 연구의 질문은 효능보다 안전성이었습니다. 2020년 일본에서 건강한 남성 10명에게 NMN 100, 250, 500 mg을 각각 단회 투여한 시험에서는 심박수·혈압·산소포화도·체온 등에서 의미 있는 이상이 관찰되지 않았고, 혈액검사 변화도 정상 범위 안에 있었습니다.</p>
<p>이 연구는 ‘NMN이 안전하다’는 최종 결론이 아니라 <b>한 번 복용했을 때 뚜렷한 급성 독성 신호가 없었다</b>는 출발점입니다. 10명이라는 작은 표본과 단회투여 시험으로 장기 안전성을 판단할 수는 없습니다.</p>

<h2>06. 2021년 — 가장 유명한 인간 연구: 전당뇨 여성의 인슐린 감수성</h2>
<p>2021년 <i>Science</i>에 발표된 연구는 NMN 인간 임상시험 가운데 가장 많이 인용되는 논문 중 하나입니다. 과체중·비만이면서 전당뇨가 있는 폐경 후 여성 25명이 연구를 완료했고, 13명은 NMN 250 mg/일, 12명은 위약을 10주 복용했습니다.</p>
<p>결과는 흥미로웠습니다. NMN군에서는 고인슐린-정상혈당 클램프로 측정한 <b>골격근 인슐린 감수성이 약 25% 증가</b>했고, 근육의 AKT·mTOR 인슐린 신호도 개선됐습니다. 그런데 체중, 체지방, 간 지방, 공복혈당, 혈중 지질 같은 지표는 유의하게 바뀌지 않았습니다.</p>
<p>게다가 두 그룹의 시작 시점 간 지방량에 차이가 있었다는 비판이 <i>Science</i>에 별도 코멘트로 제기됐고, 연구진은 주요 결과인 근육 인슐린 감수성은 기저치가 동일했기 때문에 결론이 유지된다고 답변했습니다. 이 논쟁 자체가 중요한 교훈입니다. <b>작은 임상시험에서 나온 하나의 긍정 결과를 ‘NMN은 당뇨를 예방한다’로 확대하면 안 됩니다.</b></p>

<div class="takeaway"><strong>이 연구를 한 문장으로 읽는 법</strong><p>‘전당뇨가 있는 특정 폐경 후 여성 집단에서 250 mg/일을 10주 복용했을 때 근육의 인슐린 감수성이 좋아졌다.’ 여기까지가 데이터이고, ‘모든 사람이 NMN을 먹으면 혈당이 좋아진다’는 것은 데이터 밖의 주장입니다.</p></div>

<h2>07. 2022~2024년 — 근육·보행·수면: 작은 신호가 반복됐지만?</h2>
<p>2022년 건강한 고령 남성을 대상으로 한 무작위 이중맹검 시험에서는 NMN 250 mg/일이 혈중 NAD⁺와 관련 대사체를 높였습니다. 보행 속도와 왼손 악력에서 명목상 개선이 있었지만 체성분이나 주요 대사 지표에는 뚜렷한 변화가 없었습니다. 연구에 등록된 42명 중 12주를 끝까지 완료한 사람은 20명이어서 결과 해석에는 주의가 필요합니다.</p>
<p>같은 해 108명의 일본 고령자를 대상으로 한 연구는 복용 시간까지 나눠 보았습니다. 250 mg/일을 12주 복용했을 때 오후 NMN군에서 5회 의자 일어나기와 졸림 지표의 효과 크기가 가장 컸습니다. 그러나 일부 지표는 위약군에서도 시간에 따라 좋아졌고, 전체 수면의 질에서는 명확한 군간 차이가 없었습니다. 따라서 ‘NMN은 저녁에 먹어야 한다’는 규칙을 만들 정도의 근거는 아닙니다.</p>
<p>2024년 60명의 고령자를 대상으로 한 12주 RCT에서도 250 mg/일 NMN은 혈중 NAD 관련 지표를 높였습니다. 1차 평가변수인 stepping test에서는 위약과 차이가 없었고, 2차 평가 중 4 m 보행시간과 일부 수면 지표에서 개선 신호가 나왔습니다. 또다시 패턴은 비슷했습니다. <b>NAD는 잘 올라가지만 기능적 결과는 일부 2차 지표에서만 신호가 보인다</b>는 것입니다.</p>

<h2>08. 용량을 많이 먹을수록 더 좋은가?</h2>
<p>2023년 건강한 중년 80명을 대상으로 300, 600, 900 mg/일을 60일 동안 비교한 무작위시험에서는 용량에 따라 혈중 NAD가 증가했습니다. 연구에서는 6분 보행과 주관적 건강점수에도 개선 신호를 보고했습니다.</p>
<p>하지만 여기서 중요한 함정이 있습니다. <b>NAD 상승은 용량 반응을 보일 수 있어도 임상적 이득이 같은 비율로 증가한다는 뜻은 아닙니다.</b> 2024년 이 데이터를 사후 분석한 결과에서도 사람마다 NAD 증가폭이 매우 달랐습니다. 혈중 NAD 수치 자체가 아직 ‘높을수록 무조건 좋은’ 임상 목표치로 검증된 것도 아닙니다.</p>

<div class="evidence-grid">
  <div class="evidence-card"><b>250 mg/day</b><span>여러 고령자 RCT에서 흔히 사용. NAD 상승은 반복 관찰됐지만 기능 효과는 혼재.</span></div>
  <div class="evidence-card"><b>300–900 mg/day</b><span>중년 성인 용량시험에서 NAD 상승은 용량 의존적으로 관찰. 임상 이득의 용량-반응은 불확실.</span></div>
  <div class="evidence-card"><b>1,250–2,000 mg/day</b><span>단기 안전성 연구는 있으나 ‘더 높은 용량 = 더 큰 항노화 효과’ 근거는 없음.</span></div>
</div>

<h2>09. 2025년 메타분석 — 여러 연구를 합치자 기대가 줄어들었다</h2>
<p>개별 소규모 연구는 긍정 결과가 눈에 잘 띕니다. 그래서 메타분석이 중요합니다. 2025년 발표된 체계적 문헌고찰·메타분석은 12개 연구, 총 513명을 분석했습니다. 결과는 명확한 대비를 보여줍니다.</p>
<p><b>혈중 NAD 관련 지표는 유의하게 증가했습니다.</b> 반면 공복혈당, 중성지방, 총콜레스테롤, LDL·HDL 같은 대부분의 임상 대사 결과는 위약 대비 유의한 개선이 없었습니다. 연구의 질 평가에서는 12개 중 7개가 ‘일부 우려’, 5개가 ‘높은 비뚤림 위험’으로 평가됐습니다.</p>
<p>즉 현재 인간 데이터에서 가장 재현성이 높은 효과는 <b>‘NMN을 먹으면 NAD 관련 지표가 올라간다’</b>입니다. 우리가 진짜 원하는 <b>‘질병이 줄고, 기능이 오래 유지되고, 더 오래 산다’</b>는 단계까지는 아직 연결되지 않았습니다.</p>

<h2>10. 2026년 최신 종합근거 — 안전성은 안심할 만한가?</h2>
<p>2026년 15개 무작위시험을 종합한 메타분석에서는 NMN 또는 NMN 관련 경구 중재의 용량이 250~2,000 mg/일, 기간은 14일~24주였습니다. 전체 이상반응, 중대한 이상반응, 이상반응 때문에 중단한 비율, 간효소 ALT·AST에서 뚜렷한 위험 증가가 확인되지 않았습니다.</p>
<p>이 결과는 <b>수주~수개월의 단기 내약성은 대체로 양호하다</b>는 점을 지지합니다. 하지만 ‘수년간 매일 복용해도 안전하다’는 결론은 아닙니다. 현재 시험 기간은 장수 목적으로 사람들이 실제 복용하려는 기간과 비교하면 매우 짧습니다.</p>
<p>같은 2026년 혈압 메타분석에서는 일부 혈압 지표에서 작은 변화가 보고됐지만, 체중·BMI·공복혈당·HbA1c·지질 등 광범위한 대사 개선은 최신 종합근거에서도 확실하지 않습니다.</p>

<h2>11. 암과 NMN — 걱정해야 할까?</h2>
<p>이 주제는 과장도, 무시도 피해야 합니다. NAD⁺는 정상세포의 DNA 수선과 대사에 필요하지만, 빠르게 증식하는 암세포도 NAD 대사를 이용합니다. 그래서 NAD 대사는 암 연구에서도 치료 표적으로 연구됩니다.</p>
<p>그렇다고 현재 인간 데이터로 <b>‘NMN이 암을 유발한다’고 말할 근거는 없습니다.</b> 반대로 장기간 NMN을 복용해도 암 위험이 증가하지 않는다는 수준의 대규모·장기 임상자료도 없습니다. 암 병력이 있거나 치료 중인 사람에게 NMN을 일반 건강보조제처럼 권하기 어려운 이유는 ‘위험이 증명돼서’가 아니라 <b>장기 종양학적 안전성 데이터가 부족하기 때문</b>입니다.</p>

<h2>12. NMN vs NR — 무엇이 더 좋은가?</h2>
<p>NMN과 NR(nicotinamide riboside)은 모두 NAD⁺ 전구체입니다. NMN에는 NR보다 인산기가 하나 더 붙어 있습니다. 둘 다 사람에서 NAD 대사를 변화시킬 수 있지만, 서로 다른 연구를 간접 비교해 ‘NMN이 NR보다 몇 배 좋다’고 말할 근거는 부족합니다.</p>
<figure class="story-photo molecular-figure"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/NMN_vs_NR.jpg" alt="NMN과 NR의 분자 구조 비교" loading="lazy"><figcaption>NMN과 NR의 구조 비교. NMN은 NR에 인산기가 추가된 형태입니다. 그러나 구조가 더 ‘NAD에 가깝다’는 사실만으로 인간에서 더 우수하다고 결론 낼 수는 없습니다. 이미지: Brettjweiss / Wikimedia Commons.</figcaption></figure>

<h2>13. 혈중 NAD⁺를 측정하면 내 최적 용량을 알 수 있을까?</h2>
<p>흥미로운 아이디어지만 아직 임상 표준은 아닙니다. 2024년 사후분석에서는 NMN 복용 후 NAD 증가폭이 사람마다 크게 달랐고, 증가폭이 6분 보행거리·주관적 건강점수 변화와 연관됐습니다. 그러나 이는 탐색적 분석입니다.</p>
<p><b>혈액 NAD가 근육·간·뇌의 NAD 상태를 얼마나 잘 대표하는지, 어느 수치가 건강수명에 최적인지, 개인의 용량을 조절하면 실제 결과가 좋아지는지는 아직 모릅니다.</b> 따라서 ‘NAD 수치가 높을수록 젊다’는 식의 상업적 해석은 근거를 앞서갑니다.</p>

<h2>14. 공복? 아침? 저녁? — 복용 타이밍의 과학</h2>
<p>현재 인간 임상시험은 공복, 식전, 식후, 아침·오후 등 조건이 제각각입니다. 일부 연구에서 오후 복용군의 졸림·하지 기능 지표가 좋아졌지만 위약에서도 시간 효과가 있었고, 이 결과가 다른 연구에서 충분히 재현되지 않았습니다.</p>
<p>따라서 지금 단계에서 <b>‘공복에 먹어야 흡수가 최대화된다’ 또는 ‘아침 복용이 항노화에 가장 좋다’는 확립된 근거는 없습니다.</b> 장기 복용 연구에서 더 중요한 것은 복용 타이밍보다 동일한 제형·순도·용량으로 실제 임상 결과가 재현되는지입니다.</p>

<h2>15. LONGEVITY JOURNAL 근거 판정</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>혈중 NAD 관련 지표 ↑</b><span><strong>근거 비교적 강함.</strong> 여러 RCT와 메타분석에서 반복 확인.</span></div>
  <div class="evidence-card"><b>인슐린 감수성</b><span><strong>특정 집단에서 초기 신호.</strong> 전당뇨 폐경 후 여성 RCT는 긍정적이지만 일반화하기 어려움.</span></div>
  <div class="evidence-card"><b>근력·보행</b><span><strong>불균일.</strong> 일부 2차 평가변수에서 개선, 1차 결과는 종종 음성.</span></div>
  <div class="evidence-card"><b>수면·피로</b><span><strong>초기·탐색적.</strong> 일부 고령자 연구에서 신호, 재현 필요.</span></div>
  <div class="evidence-card"><b>대사 건강 전반</b><span><strong>현재 메타분석은 대체로 음성.</strong> 혈당·지질·체중의 일관된 개선 없음.</span></div>
  <div class="evidence-card"><b>노화·수명 연장</b><span><strong>인간에서 미입증.</strong> 장기 질병·장애·사망 결과 RCT가 없음.</span></div>
</div>

<div class="takeaway"><strong>그래서 NMN을 어떻게 바라봐야 할까?</strong><p>NMN은 ‘가짜 과학’도 아니고 ‘검증된 젊음의 약’도 아닙니다. <b>NAD 생물학이라는 탄탄한 기초과학 위에 서 있고, 사람에서 NAD를 실제로 올리지만, 그 변화가 얼마나 큰 건강수명 이득으로 이어지는지는 아직 모르는 물질</b>입니다. 지금 가장 중요한 연구 질문은 더 이상 “NAD가 올라가나?”가 아니라 “그 결과 5년·10년 뒤 질병과 기능 저하가 실제로 줄어드나?”입니다.</p></div>

<h2>16. 앞으로 어떤 연구가 나오면 생각이 바뀔까?</h2>
<ol>
<li><b>1년 이상 지속되는 대규모 독립 RCT</b> — 수십 명이 아니라 수백~수천 명 규모.</li>
<li><b>혈중 NAD가 아닌 임상 결과</b> — 근감소증, 당뇨 진행, 심혈관 사건, 노쇠, 인지저하 같은 결과.</li>
<li><b>조직별 NAD 측정</b> — 혈액 수치가 실제 근육·간·뇌와 어떻게 연결되는지 확인.</li>
<li><b>장기 안전성</b> — 간·신장뿐 아니라 암, 부정맥, 상호작용을 포함한 장기 추적.</li>
<li><b>제조사와 독립된 재현 연구</b> — 작은 긍정 연구를 다른 연구진이 같은 조건에서 반복할 수 있는지 확인.</li>
</ol>

<h2>근거자료 — 발표 시간순</h2>
<div class="timeline">
  <div class="paper"><time>2020</time><div><b>Irie J, et al. Endocrine Journal.</b><br>건강한 남성 10명에게 NMN 100·250·500 mg 단회 투여. 뚜렷한 급성 이상반응 없이 대사됨. 최초기 인간 안전성 자료 중 하나.<br><a href="https://pubmed.ncbi.nlm.nih.gov/31685720/" target="_blank" rel="noopener noreferrer">PMID 31685720 · DOI 10.1507/endocrj.EJ19-0313 ↗</a></div></div>
  <div class="paper"><time>2021</time><div><b>Yoshino M, et al. Science.</b><br>과체중·비만 전당뇨 폐경 후 여성 25명, 250 mg/일, 10주 RCT. 근육 인슐린 감수성 약 25% 증가. 체중·혈중 지질·간/지방조직 인슐린 감수성 등은 유의 변화 없음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/33888596/" target="_blank" rel="noopener noreferrer">PMID 33888596 · DOI 10.1126/science.abe9985 ↗</a></div></div>
  <div class="paper"><time>2021</time><div><b>Conlon N. Comment / Klein & Yoshino response, Science.</b><br>Yoshino 연구의 두 군 사이 기저 간 지방량 차이가 결과 해석에 영향을 줄 수 있다는 비판과 연구진의 반론이 발표됨. 소규모 RCT의 기저 불균형 문제를 보여주는 사례.<br><a href="https://pubmed.ncbi.nlm.nih.gov/34326206/" target="_blank" rel="noopener noreferrer">비판 PMID 34326206 ↗</a> · <a href="https://pubmed.ncbi.nlm.nih.gov/34326209/" target="_blank" rel="noopener noreferrer">연구진 답변 PMID 34326209 ↗</a></div></div>
  <div class="paper"><time>2022</time><div><b>Okabe K, et al. Frontiers in Nutrition.</b><br>건강한 성인 30명, 250 mg/일, 12주. NMN군에서 혈중 NAD⁺ 증가, 생리·검사상 뚜렷한 이상 신호 없음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/35479740/" target="_blank" rel="noopener noreferrer">PMID 35479740 ↗</a></div></div>
  <div class="paper"><time>2022</time><div><b>Igarashi M, et al. npj Aging.</b><br>건강한 고령 남성 RCT, 250 mg/일. 혈중 NAD⁺ 상승, 보행·일부 악력에서 명목상 개선. 체성분·대사지표는 뚜렷한 변화 없음. 12주 완료자는 20명으로 작음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/35927255/" target="_blank" rel="noopener noreferrer">PMID 35927255 · DOI 10.1038/s41514-022-00084-z ↗</a></div></div>
  <div class="paper"><time>2022</time><div><b>Kim M, et al. Nutrients.</b><br>65세 이상 108명, 250 mg/일, 아침·오후 복용을 나눈 12주 RCT. 오후 NMN군에서 5회 의자 일어나기와 졸림의 효과 크기가 가장 컸으나 일부 지표는 위약도 시간에 따라 개선.<br><a href="https://pubmed.ncbi.nlm.nih.gov/35215405/" target="_blank" rel="noopener noreferrer">PMID 35215405 · DOI 10.3390/nu14040755 ↗</a></div></div>
  <div class="paper"><time>2022</time><div><b>Yabe T, et al. Geriatrics & Gerontology International.</b><br>고령 당뇨병 환자 14명, 250 mg/일, 24주. 중대한 이상반응은 없었지만 악력·보행 속도에서 위약 대비 유의 차이 없음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/36443648/" target="_blank" rel="noopener noreferrer">PMID 36443648 ↗</a></div></div>
  <div class="paper"><time>2022</time><div><b>Fukamizu/Yamane et al. Clinical safety trial.</b><br>건강한 성인 31명, 1,250 mg/일, 4주 RCT. 임상검사에서 생리적 범위를 넘는 변화나 중대한 이상반응이 관찰되지 않음. 장기 고용량 안전성을 뜻하지는 않음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/36002548/" target="_blank" rel="noopener noreferrer">PMID 36002548 ↗</a></div></div>
  <div class="paper"><time>2023</time><div><b>Yi L, et al. GeroScience.</b><br>건강한 중년 80명, 위약·300·600·900 mg/일을 60일 비교. 혈중 NAD 농도가 용량 의존적으로 증가. 일부 6분 보행·SF-36 개선 신호를 보고했으나 대사효과는 제한적.<br><a href="https://pubmed.ncbi.nlm.nih.gov/36482258/" target="_blank" rel="noopener noreferrer">PMID 36482258 · DOI 10.1007/s11357-022-00705-1 ↗</a></div></div>
  <div class="paper"><time>2024</time><div><b>Morifuji M, et al. GeroScience.</b><br>고령자 60명, 250 mg/일, 12주 이중맹검 RCT. 혈중 NAD 증가. 1차 stepping test는 차이 없고 4 m 보행시간·일부 수면 지표 등 2차 결과에서 개선 신호.<br><a href="https://pubmed.ncbi.nlm.nih.gov/38789831/" target="_blank" rel="noopener noreferrer">PMID 38789831 · DOI 10.1007/s11357-024-01204-1 ↗</a></div></div>
  <div class="paper"><time>2024</time><div><b>Hodzic Kuerec A, et al. Mechanisms of Ageing and Development.</b><br>80명 용량시험의 사후분석. NMN 후 NAD 증가폭은 개인차가 매우 컸고, 증가폭과 6분 보행·SF-36 변화의 연관성을 탐색. 개인맞춤 용량 가능성을 제시했지만 검증된 임상 전략은 아님.<br><a href="https://pubmed.ncbi.nlm.nih.gov/38430946/" target="_blank" rel="noopener noreferrer">PMID 38430946 · DOI 10.1016/j.mad.2024.111917 ↗</a></div></div>
  <div class="paper"><time>2025</time><div><b>Zhang J, et al. Critical Reviews in Food Science and Nutrition.</b><br>12개 연구, 513명 메타분석. 혈중 NAD 관련 지표 상승은 유의했으나 공복혈당·중성지방·총콜레스테롤·LDL·HDL 등 대부분의 임상 대사 지표는 유의한 개선 없음. 포함 연구의 비뚤림 위험도 문제 지적.<br><a href="https://pubmed.ncbi.nlm.nih.gov/39116016/" target="_blank" rel="noopener noreferrer">PMID 39116016 · DOI 10.1080/10408398.2024.2387324 ↗</a></div></div>
  <div class="paper"><time>2025</time><div><b>Wang JP, et al. Current Pharmaceutical Biotechnology.</b><br>중·고령층 RCT를 모아 근육·간 관련 결과를 평가한 메타분석. 일부 기능지표 신호는 있으나 표본이 작고 연구 간 이질성이 커 확정적 항노화 결론에는 부족.<br><a href="https://pubmed.ncbi.nlm.nih.gov/39185644/" target="_blank" rel="noopener noreferrer">PMID 39185644 ↗</a></div></div>
  <div class="paper"><time>2026</time><div><b>Yang W, et al. Nutrients.</b><br>15개 무작위시험 체계적 문헌고찰·메타분석. 250–2,000 mg/일, 14일–24주. 단기 이상반응·간효소 위험 증가는 뚜렷하지 않았지만 체중·BMI·혈당·HbA1c·지질의 광범위한 개선도 확인되지 않음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/42514320/" target="_blank" rel="noopener noreferrer">PMID 42514320 · DOI 10.3390/nu18142251 ↗</a></div></div>
  <div class="paper"><time>2026</time><div><b>Zhang M, et al. Nutrients.</b><br>NMN과 혈압에 관한 RCT 메타분석. 일부 혈압 결과의 작은 변화 가능성을 평가했으나 장기 심혈관 사건 감소를 입증한 연구는 아님.<br><a href="https://pubmed.ncbi.nlm.nih.gov/41901064/" target="_blank" rel="noopener noreferrer">PMID 41901064 · DOI 10.3390/nu18060890 ↗</a></div></div>
  <div class="paper"><time>2026</time><div><b>Gallagher C, Emmanuel OO. Ageing Research Reviews.</b><br>NAD⁺ 증강 전략의 전임상·인간 연구를 PRISMA 방식으로 정리. 인간 연구는 늘었지만 수명·건강수명 같은 장기 임상결과에 대한 근거 공백을 강조.<br><a href="https://pubmed.ncbi.nlm.nih.gov/41655607/" target="_blank" rel="noopener noreferrer">PMID 41655607 · DOI 10.1016/j.arr.2026.103057 ↗</a></div></div>
</div>

<p class="editor-note"><strong>최종 근거 검토:</strong> 2026-10-08 · ‘NAD 상승’과 ‘노화 지연’을 구분해 해석했습니다. 새로운 장기 RCT·메타분석이 나오면 긍정/부정 결과를 모두 시간순으로 추가합니다. 이 글은 일반적인 과학 정보이며 개인의 치료나 복용 지시를 대신하지 않습니다.</p>
`
});
})();
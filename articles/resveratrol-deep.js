(()=>{
const p=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='resveratrol-evidence');
if(!p)return;
Object.assign(p,{
  date:'2023-08-04',
  title:'레스베라트롤은 정말 장수 유전자를 켤까? — SIRT1 신화, AMPK, 염증 그리고 인간 임상시험',
  excerpt:'적포도와 레드와인의 폴리페놀로 유명한 레스베라트롤. 고지방식 생쥐에서는 생존을 개선했지만 정상식 생쥐의 수명을 늘리지는 못했고, 인간 임상에서는 대사·염증·인지 효과가 조건에 따라 엇갈립니다.',
  tags:['Resveratrol','레스베라트롤','SIRT1','AMPK','PGC-1α','Inflammaging','CR mimetic','미토콘드리아','인지기능','당뇨','항노화','Longevity Molecules'],
  html:`
<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-08-04 · <a href="https://myepic2.tistory.com/24" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a> · LONGEVITY JOURNAL 근거 전면 업데이트 2026-10-08</p>

<figure class="story-hero molecular-figure"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Resveratrol.svg" alt="trans-resveratrol의 화학 구조" loading="eager"><figcaption>trans-Resveratrol의 화학구조. 작은 stilbenoid 한 분자가 한때 ‘칼로리 제한을 흉내 내는 장수 물질’의 상징처럼 떠올랐습니다. 이미지: Fvasconcellos / Wikimedia Commons, CC BY-SA.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>레스베라트롤은 인간 수명 연장이 입증된 물질이 아닙니다.</b> 2006년 고열량식을 먹인 생쥐에서는 생존과 대사 건강을 개선했지만, 2008년 정상식 생쥐에서는 여러 노화 지표가 좋아져도 수명이 늘지 않았습니다. 인간에서는 2011년 비만 남성 11명에게 150 mg/일을 30일 투여했을 때 AMPK·SIRT1·PGC-1α·미토콘드리아 관련 신호와 일부 대사 지표가 개선됐지만 표본이 매우 작았습니다. 이후 당뇨, 염증, 혈압, 인지 연구에서는 일부 긍정 신호와 상당한 비일관성이 공존합니다. 2026년 최신 umbrella review도 몇몇 대사지표의 개선은 인정하지만, 이를 항노화나 수명 연장으로 해석할 근거는 없습니다.</p></div>

<h2>01. 레스베라트롤은 무엇인가?</h2>
<p>레스베라트롤(resveratrol)은 식물이 곰팡이·자외선·손상 같은 스트레스를 받을 때 만들어내는 <b>phytoalexin</b> 계열의 stilbenoid입니다. 포도 껍질, 땅콩, 일부 베리류 등에 존재하며 특히 레드와인과 함께 널리 알려졌습니다.</p>
<p>화학적으로는 cis와 trans 형태가 있지만, 보충제와 연구에서는 보통 <b>trans-resveratrol</b>을 의미합니다. 빛과 열에 민감하고, 먹고 난 뒤 매우 빠르게 황산화·글루쿠론산화되어 대사되기 때문에 ‘몇 mg을 먹었는가’와 ‘조직에 얼마나 활성형으로 도달했는가’는 같은 질문이 아닙니다.</p>

<figure class="story-photo"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Red_and_green_grapes.jpg" alt="붉은 포도와 초록 포도" loading="lazy"><figcaption>레스베라트롤은 포도 껍질 등 식물성 식품에 존재하지만, 임상시험의 150–1000 mg 수준 보충량은 일상 식품 노출과 전혀 다른 규모입니다. 사진: Lisafern / Wikimedia Commons, CC0.</figcaption></figure>

<h2>02. ‘프렌치 패러독스’와 레드와인의 함정</h2>
<p>레스베라트롤이 유명해진 문화적 배경에는 이른바 <b>French paradox</b>가 있습니다. 포화지방 섭취가 적지 않은 프랑스 일부 지역에서 심혈관질환이 상대적으로 낮게 관찰된 현상을 레드와인으로 설명하려는 가설이 유행했고, 그 안의 후보 성분으로 레스베라트롤이 주목받았습니다.</p>
<p>하지만 현대적으로는 이 이야기를 매우 조심해서 읽어야 합니다. 식사 패턴, 사회경제적 요인, 측정 방식 등 수많은 교란요인이 있고, 레드와인 한두 잔에 들어 있는 레스베라트롤 양은 임상시험 용량보다 훨씬 적습니다. 따라서 <b>레스베라트롤을 얻기 위해 술을 마신다</b>는 논리는 성립하지 않습니다. 와인 연구와 고용량 순수 trans-resveratrol 보충제 연구는 구분해야 합니다.</p>

<h2>03. 왜 SIRT1과 함께 유명해졌나?</h2>
<p>2000년대 초 resveratrol은 칼로리 제한(calorie restriction)의 일부 효과를 흉내 내고 <b>SIRT1</b>을 활성화한다는 실험결과로 큰 관심을 받았습니다. SIRT1은 NAD⁺를 사용하는 deacetylase로 대사, 스트레스 반응, 미토콘드리아 조절과 연결됩니다.</p>
<p>문제는 ‘레스베라트롤이 SIRT1을 직접 켠다’는 초창기 설명이 이후 논쟁에 부딪혔다는 점입니다. 2009년과 2010년 연구들은 형광표지가 붙은 인공 기질에서는 SIRT1 활성처럼 보였지만, 자연 기질을 사용하면 resveratrol이 <b>SIRT1의 직접적 촉매활성을 증가시키지 않았다</b>고 보고했습니다.</p>
<p>현재는 보다 복잡한 그림이 받아들여집니다. resveratrol이 AMPK, NAD 대사, cAMP/PDE, 산화환원 상태 등 여러 경로를 건드려 <b>SIRT1 신호가 간접적으로 증가할 가능성</b>은 있지만, ‘레스베라트롤 = SIRT1 직결 스위치’라고 설명하는 것은 지나치게 단순합니다.</p>

<div class="pathway" aria-label="resveratrol metabolic signaling simplified">
  <div class="pathway-step"><b>Resveratrol</b><span>다중 표적 · 간접효과 가능</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>AMPK / NAD⁺ / SIRT1</b><span>에너지 감지·스트레스 반응</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>PGC-1α</b><span>미토콘드리아·대사 적응</span></div>
</div>
<p class="small-note">※ 이 도식은 인간에서 확정된 단일 경로를 의미하지 않습니다. resveratrol은 여러 표적과 간접 경로를 동시에 건드리는 pleiotropic compound로 보는 편이 더 정확합니다.</p>

<h2>04. 동물에서 왜 ‘장수 물질’이라는 별명을 얻었나?</h2>
<p>2006년 <i>Nature</i> 연구가 결정적이었습니다. 중년 생쥐에게 고열량식을 먹이면서 resveratrol을 투여했더니 인슐린 감수성, AMPK·PGC-1α 신호, 미토콘드리아 기능, 운동기능이 개선되고 <b>고열량식으로 인한 조기 사망이 줄었습니다.</b></p>
<p>이 결과만 보면 ‘수명 연장 물질’처럼 보입니다. 하지만 2008년 <i>Cell Metabolism</i> 연구에서는 정상식을 먹는 생쥐에서 혈관 탄성, 운동 조정, 염증, 골밀도 등 여러 노화 관련 지표가 좋아졌음에도 <b>전체 수명은 늘지 않았습니다.</b></p>
<div class="evidence-grid">
  <div class="evidence-card"><b>고열량식 생쥐</b><span>대사 건강과 생존 개선. 비정상적으로 나쁜 환경을 완화한 효과.</span></div>
  <div class="evidence-card"><b>정상식 생쥐</b><span>노화 지표 개선은 있었지만 수명 연장 없음.</span></div>
  <div class="evidence-card"><b>인간</b><span>수명 연장 RCT 없음. 대부분 몇 주~수개월의 biomarker 연구.</span></div>
</div>
<div class="takeaway"><strong>동물 수명 연구의 가장 중요한 해석</strong><p>레스베라트롤은 <b>대사 스트레스가 큰 상태를 정상 쪽으로 되돌리는 능력</b>이 더 잘 보일 수 있습니다. 이것은 이미 건강한 인간의 정상 노화를 늦추거나 수명을 늘린다는 주장과는 다릅니다.</p></div>

<h2>05. 사람에게 먹이면 정말 ‘칼로리 제한 같은 변화’가 나타날까?</h2>
<p>2011년 Timmers 연구는 resveratrol 인간 연구의 대표적인 논문입니다. 건강하지만 비만한 남성 11명이 placebo와 trans-resveratrol 150 mg/일을 각각 30일 복용하는 randomized crossover 설계였습니다.</p>
<p>resveratrol 기간에는 근육에서 <b>AMPK 활성, SIRT1·PGC-1α 단백질, 지방산 기반 미토콘드리아 호흡</b>이 증가했고, 간 지방·혈당·중성지방·ALT·일부 염증 표지와 혈압이 개선되는 방향을 보였습니다. 저자들은 이를 ‘calorie restriction-like effects’라고 표현했습니다.</p>
<p>하지만 표본은 단 <b>11명</b>이었습니다. 짧은 기간의 여러 secondary endpoint를 동시에 측정했고, 같은 결과가 더 큰 독립 연구에서 항상 재현된 것도 아닙니다. 이 논문은 인간에서 ‘기전 가능성’을 보여준 중요한 출발점이지, 항노화 효능을 확정한 논문은 아닙니다.</p>

<h2>06. 생체이용률이라는 큰 장벽</h2>
<p>레스베라트롤의 흥미로운 역설은 <b>흡수는 잘 되는데 활성형 혈중농도는 매우 낮다</b>는 것입니다. 2004년 방사성 표지 연구에서 경구 25 mg의 흡수율은 70% 이상이었지만, 혈장에서 변형되지 않은 free resveratrol은 거의 검출되지 않았습니다. 장과 간에서 매우 빠르게 sulfate와 glucuronide 형태로 바뀌기 때문입니다.</p>
<p>2011년 리뷰는 경구 흡수를 약 75%로 보면서도 전신의 자유형 bioavailability는 1%보다 훨씬 낮다고 정리했습니다. 2024년 임상 약동학 메타분석에서도 용량이 늘수록 free resveratrol 농도는 증가했지만, 연구 간 제형·측정 방식의 이질성이 매우 컸습니다.</p>
<figure class="story-photo molecular-figure"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Resveratrol_molecule_spacefill_from_xtal.png" alt="레스베라트롤 분자의 공간채움 모델" loading="lazy"><figcaption>레스베라트롤 분자의 3차원 모델. 경구 복용 뒤 이 원형 분자는 빠르게 sulfate·glucuronide 대사체로 전환됩니다. 이미지: Ben Mills / Wikimedia Commons, Public Domain.</figcaption></figure>

<h2>07. 당뇨·대사 건강: 가장 데이터가 많은 인간 영역</h2>
<p>레스베라트롤은 건강한 사람보다 <b>인슐린 저항성이나 제2형 당뇨 같은 대사 스트레스가 있는 집단</b>에서 더 일관된 신호가 나타나는 편입니다. 2022년 19개 연구, 1,151명의 T2DM 환자를 포함한 메타분석에서는 고용량 연구에서 공복혈당, 혈압 등의 개선이 보고됐습니다.</p>
<p>그러나 umbrella review의 그림은 훨씬 조심스럽습니다. 2021년 umbrella review는 T2DM·대사증후군·NAFLD에서 여러 이점이 보고됐지만, 대부분 효과 크기가 작고 근거 확실성이 낮거나 연구 수가 적어 <b>임상 관리를 위해 resveratrol을 권할 수준은 아니다</b>라고 결론냈습니다.</p>
<p>2026년 최신 umbrella review에서도 흥미로운 결과가 공존합니다. 한 분석은 허리둘레, T2DM 환자의 혈압, 과체중 성인의 총콜레스테롤 등에 비교적 높은 확실성의 개선을 보고했지만, T2DM의 혈당·HbA1c·인슐린·HOMA-IR·대부분의 지질지표를 묶은 또 다른 2026년 umbrella review는 <b>전반적인 유의한 이점을 확인하지 못했습니다.</b></p>
<p>결론적으로 ‘대사질환에 도움이 될 가능성’은 있지만 대상·용량·기간에 따라 결과가 크게 달라지고, 기존 약물·운동·체중관리보다 우선하는 치료가 아닙니다.</p>

<h2>08. 염증과 inflammaging: 여기서는 신호가 조금 더 일관적이다</h2>
<p>항노화 관점에서 resveratrol의 중요한 관심사는 <b>만성 저등급 염증(inflammaging)</b>입니다. NF-κB, 산화 스트레스, macrophage 신호 등에 영향을 줄 수 있다는 전임상 기전이 많고, 인간 메타분석에서도 일부 염증표지 감소가 반복됩니다.</p>
<p>2024년 19개 메타분석, 81개의 고유 RCT와 4,088명을 재분석한 umbrella meta-analysis에서는 resveratrol이 <b>CRP와 TNF-α를 낮추는 방향</b>을 보였지만 IL-6는 유의하게 낮아지지 않았습니다. BMI와 허리둘레도 소폭 감소했습니다.</p>
<p>2025년 T2DM 환자 6개 RCT, 533명 메타분석에서도 CRP와 산화스트레스 지표가 감소했지만 GRADE 근거 수준은 낮음~매우 낮음이었습니다.</p>
<div class="takeaway"><strong>항노화 관점의 해석</strong><p>CRP가 내려간다는 것은 의미 있는 생물학적 신호일 수 있지만, <b>CRP 감소 = 인간 노화속도 감소 = 수명 연장</b>은 아닙니다. resveratrol은 inflammaging 경로를 건드릴 가능성이 있지만, 노화 자체를 늦췄다고 결론내리려면 장애·질병·사망 같은 장기 임상결과가 필요합니다.</p></div>

<h2>09. 운동과 같이 먹으면 더 좋을까? 오히려 반대 결과도 있다</h2>
<p>2013년 매우 흥미로운 RCT가 있습니다. 65세 전후의 신체활동이 적은 남성 27명이 8주간 고강도 운동훈련을 하면서 250 mg/일 resveratrol 또는 placebo를 복용했습니다.</p>
<p>운동 자체는 두 군 모두에게 도움이 됐지만, <b>VO₂max 증가는 placebo군에서 resveratrol군보다 45% 더 컸고</b>, 평균동맥압 감소도 placebo군에서만 나타났습니다. 연구진은 resveratrol이 일부 운동 유도 심혈관 적응을 둔화했을 가능성을 제기했습니다.</p>
<p>이 결과는 ‘항산화제를 운동과 같이 먹으면 무조건 시너지’라는 생각을 경계하게 합니다. 운동은 ROS 같은 일시적 스트레스 신호를 이용해 적응을 일으키는데, 특정 항산화·신호조절 물질이 그 자극을 일부 약화시킬 가능성이 있기 때문입니다. 후속 연구들은 결과가 완전히 일치하지 않지만, <b>운동 적응을 높이기 위해 resveratrol을 복용한다</b>는 주장은 확립되지 않았습니다.</p>

<h2>10. 뇌와 기억력: 작은 긍정 연구와 실패한 재현 연구가 함께 있다</h2>
<p>2014년 50–75세의 과체중 고령자 46명을 대상으로 200 mg/일을 26주 투여한 RCT에서는 단어 기억 유지와 hippocampal functional connectivity가 개선되는 결과가 나왔습니다.</p>
<p>그러나 2018년 60–79세 60명을 대상으로 같은 200 mg/일을 26주 투여한 더 큰 RCT에서는 <b>주요 평가변수인 verbal memory 개선이 유의하지 않았습니다.</b> 2023년 고령자 인지기능 메타분석에서도 delayed memory, immediate memory, working memory, processing speed 모두 유의한 개선이 없었습니다.</p>
<p>따라서 resveratrol이 뇌혈류나 hippocampal 신호에 영향을 줄 가능성은 흥미롭지만, ‘기억력 영양제’ 또는 ‘치매 예방제’로 부를 근거는 아직 부족합니다.</p>

<h2>11. 안전성: 천연 폴리페놀이라고 고용량이 무해한 것은 아니다</h2>
<p>건강한 성인에서 수백 mg 수준의 단기 복용은 대체로 잘 견디는 편입니다. 하지만 0.5–5 g/일의 고용량 반복투여 연구에서는 용량이 커질수록 <b>설사·복통·메스꺼움 같은 위장 증상</b>이 늘었습니다. 1 g/일을 12주 복용한 과체중 폐경후 여성 pilot에서는 일부 참가자에게 심한 간효소 상승과 피부발진도 보고됐습니다.</p>
<p>또 resveratrol은 CYP 효소와 약물대사에 영향을 줄 가능성이 있어, 고용량에서 다른 약과의 상호작용을 완전히 무시할 수 없습니다. 특히 항응고·항혈소판제, 여러 처방약을 함께 사용하는 경우 ‘식품 성분이니 안전하다’는 전제는 위험합니다.</p>
<p>장기간 매일 복용했을 때의 안전성 데이터는 수십 년짜리 약물처럼 풍부하지 않습니다. 항노화 목적으로 복용한다면 단기 RCT의 ‘중대한 이상반응이 적었다’는 사실과 장기간 건강한 사람이 수년간 복용하는 안전성은 별개의 문제입니다.</p>

<h2>12. 레스베라트롤을 항노화 관점에서 어디에 놓아야 하나?</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>기전 연구</b><span><strong>강하고 풍부함.</strong> AMPK, SIRT1 signaling, PGC-1α, NF-κB, 산화환원 등 다양한 표적.</span></div>
  <div class="evidence-card"><b>동물 건강수명</b><span><strong>긍정 신호 있음.</strong> 특히 대사 스트레스 환경에서 강함.</span></div>
  <div class="evidence-card"><b>동물 정상 수명</b><span><strong>불일치.</strong> 정상식 생쥐의 수명 연장은 재현되지 않음.</span></div>
  <div class="evidence-card"><b>인간 대사</b><span><strong>조건부.</strong> T2DM·비만 등에서 일부 개선, 결과 이질성 큼.</span></div>
  <div class="evidence-card"><b>염증</b><span><strong>중간 신호.</strong> CRP·TNF-α 감소 경향, IL-6는 불일치.</span></div>
  <div class="evidence-card"><b>인간 수명</b><span><strong>입증 안 됨.</strong> 사망·건강수명을 평가한 장기 RCT 없음.</span></div>
</div>

<h2>13. 실생활에서 기억할 7가지</h2>
<ol>
<li><b>레드와인과 보충제는 다릅니다.</b> 와인으로 임상시험 수준의 resveratrol을 얻으려는 생각은 적절하지 않습니다.</li>
<li><b>SIRT1 직접활성제라는 표현은 과도합니다.</b> 인간과 세포에서 간접적인 SIRT1 signaling 증가 가능성이 더 현실적인 설명입니다.</li>
<li><b>대사질환이 있는 사람과 건강한 사람을 구분해야 합니다.</b> 효과는 대사 스트레스가 큰 집단에서 더 자주 보입니다.</li>
<li><b>mg 숫자만 보지 말아야 합니다.</b> 생체이용률과 제형 차이가 큽니다.</li>
<li><b>운동효과를 강화한다고 단정할 수 없습니다.</b> 일부 RCT에서는 운동 적응을 오히려 약화했습니다.</li>
<li><b>염증마커 개선은 수명연장의 증거가 아닙니다.</b> biomarker와 clinical outcome을 분리해서 봐야 합니다.</li>
<li><b>천연물도 고용량에서는 부작용과 약물상호작용이 생길 수 있습니다.</b></li>
</ol>

<div class="takeaway"><strong>LONGEVITY JOURNAL의 결론</strong><p>레스베라트롤은 geroscience 역사에서 매우 중요한 물질입니다. ‘칼로리 제한을 알약으로 흉내 낼 수 있을까?’라는 질문을 대중화했고, SIRT1·AMPK·미토콘드리아·염증 연구를 연결하는 촉매 역할을 했습니다. 그러나 <b>연구의 역사적 중요성과 실제 인간 항노화 효능은 같은 것이 아닙니다.</b> 현재 가장 정확한 평가는 ‘일부 대사·염증 지표를 개선할 가능성이 있는 다중표적 폴리페놀’이며, <b>검증된 수명연장제는 아니다</b>입니다.</p></div>

<h2>근거자료 — 발표 시간순</h2>
<div class="timeline">
  <div class="paper"><time>2004</time><div><b>Walle T, et al. Drug Metab Dispos.</b><br>건강한 성인 6명 방사성 표지 약동학 연구. 경구 흡수는 70% 이상이었지만 변형되지 않은 resveratrol의 혈중농도는 매우 낮아 빠른 sulfate·glucuronide 대사가 핵심 장벽임을 확인.<br><a href="https://pubmed.ncbi.nlm.nih.gov/15333514/" target="_blank" rel="noopener noreferrer">PMID 15333514 · DOI 10.1124/dmd.104.000885 ↗</a></div></div>
  <div class="paper"><time>2006</time><div><b>Baur JA, et al. Nature.</b><br>고열량식을 먹인 중년 생쥐에서 resveratrol이 인슐린 감수성·AMPK·PGC-1α·미토콘드리아 기능을 개선하고 조기사망을 줄임. 정상식 수명연장의 증거는 아님.<br><a href="https://pubmed.ncbi.nlm.nih.gov/17086191/" target="_blank" rel="noopener noreferrer">PMID 17086191 · DOI 10.1038/nature05354 ↗</a></div></div>
  <div class="paper"><time>2008</time><div><b>Pearson KJ, et al. Cell Metabolism.</b><br>정상식 생쥐에서 여러 노화 관련 기능과 염증 지표는 개선됐지만 전체 수명은 연장되지 않음. resveratrol의 ‘건강 개선’과 ‘수명 연장’이 다를 수 있음을 보여준 핵심 연구.<br><a href="https://pubmed.ncbi.nlm.nih.gov/18599363/" target="_blank" rel="noopener noreferrer">PMID 18599363 · DOI 10.1016/j.cmet.2008.06.011 ↗</a></div></div>
  <div class="paper"><time>2009</time><div><b>Beher D, et al. Chem Biol Drug Des.</b><br>자연기질 기반 assay에서 resveratrol이 SIRT1 효소를 직접 활성화하지 않는다고 보고. 초기 SIRT1 직접활성 가설에 중요한 반대 근거.<br><a href="https://pubmed.ncbi.nlm.nih.gov/19843076/" target="_blank" rel="noopener noreferrer">PMID 19843076 · DOI 10.1111/j.1747-0285.2009.00901.x ↗</a></div></div>
  <div class="paper"><time>2010</time><div><b>Pacholec M, et al. J Biol Chem.</b><br>native peptide와 full-length substrate에서 resveratrol과 여러 SIRT1 activator 후보가 SIRT1을 직접 활성화하지 않았음. 형광기질 기반 artifact 가능성을 제시.<br><a href="https://pubmed.ncbi.nlm.nih.gov/20061378/" target="_blank" rel="noopener noreferrer">PMID 20061378 · PMCID PMC2832984 ↗</a></div></div>
  <div class="paper"><time>2011</time><div><b>Timmers S, et al. Cell Metabolism.</b><br>비만 남성 11명, randomized crossover, trans-resveratrol 150 mg/일 30일. AMPK·SIRT1·PGC-1α·미토콘드리아 호흡과 일부 혈당·간지방·혈압 지표 개선. 매우 작은 표본이라는 한계.<br><a href="https://pubmed.ncbi.nlm.nih.gov/22055504/" target="_blank" rel="noopener noreferrer">PMID 22055504 · DOI 10.1016/j.cmet.2011.10.002 ↗</a></div></div>
  <div class="paper"><time>2013</time><div><b>Gliemann L, et al. J Physiol.</b><br>고령 남성 27명, 8주 운동 + 250 mg/일 resveratrol RCT. VO₂max 증가와 혈압 개선이 placebo+운동군보다 약화되어 운동 적응을 방해할 가능성 제시.<br><a href="https://pubmed.ncbi.nlm.nih.gov/23878368/" target="_blank" rel="noopener noreferrer">PMID 23878368 · DOI 10.1113/jphysiol.2013.258061 ↗</a></div></div>
  <div class="paper"><time>2014</time><div><b>Witte AV, et al. J Neurosci.</b><br>50–75세 과체중 성인 46명, 200 mg/일 26주. 기억 유지와 hippocampal functional connectivity 개선 신호. 소규모 초기 연구.<br><a href="https://pubmed.ncbi.nlm.nih.gov/24899709/" target="_blank" rel="noopener noreferrer">PMID 24899709 · DOI 10.1523/JNEUROSCI.0385-14.2014 ↗</a></div></div>
  <div class="paper"><time>2018</time><div><b>Huhn S, et al. NeuroImage.</b><br>60–79세 60명, 200 mg/일 26주. 주요 평가변수인 verbal memory는 유의하게 개선되지 않아 앞선 인지 연구의 긍정 신호를 명확히 재현하지 못함.<br><a href="https://pubmed.ncbi.nlm.nih.gov/29548848/" target="_blank" rel="noopener noreferrer">PMID 29548848 · DOI 10.1016/j.neuroimage.2018.03.023 ↗</a></div></div>
  <div class="paper"><time>2021</time><div><b>Umbrella review: T2DM, MetS, NAFLD.</b><br>다수 meta-analysis를 종합. 혈압·당대사·염증 등 일부 이점은 있었지만 대부분 효과가 작고 근거확실성이 낮아 임상관리용 보충을 지지하기 어렵다고 결론.<br><a href="https://pubmed.ncbi.nlm.nih.gov/34320173/" target="_blank" rel="noopener noreferrer">PMID 34320173 ↗</a></div></div>
  <div class="paper"><time>2023</time><div><b>Resveratrol and cognition in older adults meta-analysis.</b><br>6개 연구를 종합해 delayed·immediate·working memory와 processing speed에서 유의한 개선을 확인하지 못함.<br><a href="https://pubmed.ncbi.nlm.nih.gov/37522434/" target="_blank" rel="noopener noreferrer">PMID 37522434 · DOI 10.20960/nh.04479 ↗</a></div></div>
  <div class="paper"><time>2024</time><div><b>Umbrella meta-analysis: anthropometry & inflammation.</b><br>19개 meta-analysis, 81개 고유 RCT, 4,088명. BMI·허리둘레·CRP·TNF-α 감소 신호, IL-6는 유의한 변화 없음. 추가 고품질 연구 필요.<br><a href="https://pubmed.ncbi.nlm.nih.gov/38374352/" target="_blank" rel="noopener noreferrer">PMID 38374352 · DOI 10.1007/s00394-024-03335-9 ↗</a></div></div>
  <div class="paper"><time>2024</time><div><b>Resveratrol oral bioavailability meta-analysis.</b><br>건강한 성인의 25–5000 mg 경구 투여 데이터를 종합. 용량에 따라 free resveratrol 노출은 증가했지만 제형·측정법의 이질성이 큼.<br><a href="https://pubmed.ncbi.nlm.nih.gov/39557444/" target="_blank" rel="noopener noreferrer">PMID 39557444 ↗</a></div></div>
  <div class="paper"><time>2025</time><div><b>T2DM inflammation meta-analysis.</b><br>6개 RCT, 533명. CRP와 일부 산화스트레스 지표 감소가 보고됐지만 GRADE 근거수준은 낮음~매우 낮음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/39872318/" target="_blank" rel="noopener noreferrer">PMID 39872318 ↗</a></div></div>
  <div class="paper"><time>2026</time><div><b>Umbrella review of multiple health outcomes.</b><br>RCT meta-analysis들을 재평가. 허리둘레, T2DM 환자의 혈압, 과체중 성인의 총콜레스테롤 등 일부 결과에서 높은 확실성의 개선을 제시했지만 수명·노화속도 자체의 근거는 아님.<br><a href="https://pubmed.ncbi.nlm.nih.gov/41987155/" target="_blank" rel="noopener noreferrer">PMID 41987155 ↗</a></div></div>
  <div class="paper"><time>2026</time><div><b>T2DM glycemic & lipid umbrella review.</b><br>10개 meta-analysis를 평가했을 때 공복혈당·HbA1c·인슐린·HOMA-IR 및 대부분의 지질지표에서 전반적인 유의한 이점을 확인하지 못함. 높은 이질성 지적.<br><a href="https://pubmed.ncbi.nlm.nih.gov/42268476/" target="_blank" rel="noopener noreferrer">PMID 42268476 ↗</a></div></div>
</div>

<p class="editor-note"><strong>최종 근거 검토:</strong> 2026-10-08 · 이 글은 기존 My EPIC2 원문의 문제의식을 보존하되 동물 수명, SIRT1 논쟁, 인간 대사·염증·인지 RCT와 최신 umbrella review를 다시 검토해 전면 재작성했습니다. 새로운 대규모 RCT 또는 장기 건강수명 데이터가 나오면 결론과 타임라인을 함께 업데이트합니다. 이 글은 일반적인 과학 정보이며 개인의 치료·처방을 대신하지 않습니다.</p>
`
});
})();
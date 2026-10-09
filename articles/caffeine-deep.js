(()=>{
const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
if(posts.some(x=>x.slug==='caffeine-evidence'))return;
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
posts.push({
  slug:'caffeine-evidence',
  category:'health',
  date:'2023-08-06',
  title:'카페인은 피로를 없애는가, 잠깐 가리는가? — 각성, 운동, 수면, 심혈관과 장수의 근거',
  excerpt:'카페인은 아데노신 신호를 차단해 각성과 운동 수행을 높이지만, 수면·불안·혈압이라는 비용도 있습니다. 커피의 장수 연관성과 카페인 자체의 효과를 분리해 봅니다.',
  tags:['카페인','Caffeine','Coffee','Adenosine','CYP1A2','Sleep','Exercise performance','VO2','Anxiety','Blood pressure','Parkinson disease','Longevity Nutrition'],
  html:`
<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-08-06 · <a href="https://myepic2.tistory.com/30" target="_blank" rel="noopener noreferrer">피로를 줄이고 각성 효과를 주는 카페인의 효능 ↗</a> · LONGEVITY JOURNAL 근거 전면 업데이트 2026-10-09</p>

<figure class="story-hero"><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Coffee_cup_and_coffee_bean.jpg" alt="커피 한 잔과 커피 원두" loading="eager"><figcaption>커피와 카페인은 같은 말이 아닙니다. 커피에는 카페인 외에도 chlorogenic acids 등 수많은 성분이 들어 있고, 디카페인 커피에서도 일부 건강 연관성이 관찰됩니다. 사진: mcfoodie / Wikimedia Commons, CC0.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>카페인은 인간에서 효과가 분명한 각성제이자 운동 수행 보조제입니다.</b> 낮거나 중간 정도의 용량에서 졸림을 줄이고 주의력을 높이며, 특히 유산소 지구력과 여러 운동 수행을 개선할 수 있습니다. 하지만 효과가 강한 만큼 대가도 명확합니다. 수면시간과 깊은 수면을 줄일 수 있고, 불안과 혈압을 올릴 수 있으며, 매일 사용하면 내성과 금단이 생길 수 있습니다. 그리고 가장 중요한 구분은 <b>‘커피를 마시는 사람이 장기적으로 더 오래 산다는 관찰’과 ‘카페인이 수명을 늘린다’는 주장은 전혀 같은 증거가 아니라는 점</b>입니다.</p></div>

<h2>01. 카페인은 ‘에너지’를 만들어내지 않는다</h2>
<p>카페인을 마시면 피로가 사라진 것처럼 느껴집니다. 하지만 카페인이 ATP를 새로 만들어 몸에 에너지를 충전하는 것은 아닙니다. 주된 작용은 뇌에서 <b>adenosine receptor를 경쟁적으로 차단</b>하는 것입니다.</p>
<p>Adenosine은 깨어 있는 시간이 길어질수록 뇌에서 축적돼 신경 활동을 억제하고 졸림을 느끼게 하는 신호에 관여합니다. 카페인은 특히 A1과 A2A receptor의 작용을 막아 ‘피곤하다는 신호’를 약하게 만듭니다. 그 결과 각성·주의력·반응속도가 좋아질 수 있고, dopaminergic signaling에도 간접적으로 영향을 줍니다.</p>
<p>따라서 표현을 정확히 하면 <b>카페인은 피로의 원인을 치료하기보다 피로감을 일시적으로 덜 느끼게 하는 경우가 많습니다.</b> 수면부족 자체를 되돌리지는 못합니다.</p>

<figure class="story-photo molecular-figure"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Caffeine_structure.svg" alt="카페인의 화학 구조식" loading="lazy"><figcaption>Caffeine(1,3,7-trimethylxanthine)의 구조. 정상적인 섭취 범위에서 인간에게 가장 중요한 약리작용은 adenosine receptor 길항으로 설명됩니다. 이미지: Vaccinationist / Wikimedia Commons, Public Domain.</figcaption></figure>

<div class="pathway" aria-label="caffeine adenosine mechanism">
  <div class="pathway-step"><b>깨어 있는 시간 ↑</b><span>Adenosine 신호가 커짐</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>Caffeine</b><span>A1 · A2A receptor 차단</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>졸림 신호 ↓</b><span>각성 · 주의력 · 운동감각 변화</span></div>
</div>
<p class="small-note">※ 고용량에서 phosphodiesterase·calcium signaling 등 다른 기전도 논의되지만, 일반적인 사람의 섭취 농도에서는 adenosine receptor blockade가 가장 중요한 설명입니다.</p>

<h2>02. 사람마다 효과가 다른 이유 — CYP1A2와 ‘카페인 반감기’</h2>
<p>카페인은 대부분 간에서 <b>CYP1A2</b>를 통해 대사돼 paraxanthine 등으로 바뀝니다. 문제는 이 효소의 활성이 사람마다 크게 다르다는 것입니다. 유전적 차이뿐 아니라 흡연, 일부 약물, 경구피임약, 임신, 간기능 등이 카페인 제거 속도에 영향을 줄 수 있습니다.</p>
<p>그래서 같은 200 mg을 먹어도 어떤 사람은 몇 시간 뒤 거의 편안해지는 반면, 다른 사람은 밤까지 심장이 뛰거나 잠이 잘 오지 않을 수 있습니다. ‘카페인은 몇 시 이후 금지’라는 하나의 시각보다 <b>용량·취침시간·개인의 대사속도</b>를 함께 보는 편이 과학적입니다.</p>
<p>2022년 141개 출판물의 pharmacokinetic data를 통합한 분석도 caffeine clearance에 매우 큰 개인차가 있고, smoking·oral contraceptive·drug interaction·질환 등이 중요한 변수가 된다고 정리했습니다.</p>

<h2>03. 집중력과 기억력 — 가장 확실한 것은 ‘각성’이다</h2>
<p>카페인은 졸린 상황에서 alertness와 vigilance, reaction time을 개선하는 효과가 비교적 일관됩니다. 특히 수면부족 상황에서 단기적인 인지·신체 수행을 유지하는 데 도움이 될 수 있습니다.</p>
<p>그러나 ‘기억력이 좋아진다’는 표현은 조금 더 조심해야 합니다. 기억의 encoding, consolidation, retrieval은 서로 다른 과정이고 연구마다 카페인의 투여 시점과 과제가 다릅니다. 따라서 카페인을 광범위한 ‘두뇌 향상제’라고 부르기보다는 <b>졸림과 주의력 저하를 줄이는 stimulant</b>로 이해하는 편이 맞습니다.</p>

<h2>04. 운동 수행 — 카페인 근거가 가장 강한 영역</h2>
<p>2021년 International Society of Sports Nutrition(ISSN) position stand는 카페인의 운동효과를 폭넓게 검토했습니다. 가장 일관된 이득은 <b>aerobic endurance</b>에서 나타났고, muscular endurance, movement velocity, strength, sprint, jump 등에서도 작거나 중등도의 이득이 관찰됐습니다.</p>
<p>가장 전통적으로 근거가 많은 용량은 <b>3–6 mg/kg</b>이며, 일반적으로 운동 약 60분 전에 capsule 형태로 섭취하는 연구가 많습니다. 하지만 일부 사람은 더 낮은 용량에서도 효과가 있고, 9 mg/kg 같은 고용량은 부작용만 증가시키면서 추가 이득은 크지 않을 수 있습니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>근거 강함</b><span>유산소 지구력, 주의력, 피로감 감소.</span></div>
  <div class="evidence-card"><b>개인차 큼</b><span>근력·스프린트·반응, 불안, 심박감각, 수면 영향.</span></div>
  <div class="evidence-card"><b>More ≠ Better</b><span>고용량은 불안·위장증상·수면 방해 위험을 키울 수 있음.</span></div>
</div>

<h2>05. 지방 연소가 늘면 체지방도 자동으로 빠질까?</h2>
<p>원문에서 소개했던 2020년 메타분석은 운동 전 caffeine 2–7 mg/kg을 투여한 19개 crossover study를 분석했고, 공복 상태의 submaximal aerobic exercise에서 <b>fat oxidation rate가 증가</b>하는 신호를 확인했습니다. 2024년 fed-state exercise 메타분석에서도 비슷한 방향이 보고됐습니다.</p>
<p>하지만 여기에는 흔한 함정이 있습니다. <b>한 번의 운동에서 지방 산화율이 증가하는 것과 몇 달 뒤 체지방이 더 많이 감소하는 것은 다른 결과</b>입니다. 하루 전체 에너지 균형, 식욕, 수면, 운동량, 적응이 체중 변화에 함께 영향을 줍니다.</p>
<p>따라서 ‘카페인 = fat burner’라는 표현은 과장입니다. 카페인은 운동 중 substrate use를 바꿀 수 있지만, 이것만으로 장기 지방감량을 보장하지 않습니다.</p>

<h2>06. 수면 — 카페인의 가장 중요한 비용</h2>
<p>카페인을 건강 목적으로 사용할 때 가장 과소평가되는 것이 수면입니다. 2023년 systematic review·meta-analysis는 24개 연구를 종합해 caffeine이 평균적으로 <b>총 수면시간을 약 45분 줄이고, sleep efficiency를 약 7% 낮추며, 잠드는 시간을 늘리고 깊은 수면을 감소</b>시켰다고 보고했습니다.</p>
<p>이 분석에서는 약 107 mg의 coffee가 total sleep time을 줄이지 않게 하려면 취침 약 <b>8.8시간 전</b>, 약 217.5 mg의 pre-workout caffeine은 약 <b>13.2시간 전</b>까지 섭취해야 한다는 모델 기반 추정도 제시했습니다. 이것은 모든 사람에게 적용되는 절대 규칙은 아니지만, ‘오후 커피가 밤잠에 영향을 주지 않는다’고 느끼는 사람도 실제 sleep architecture는 달라질 수 있음을 보여줍니다.</p>
<div class="takeaway"><strong>LONGEVITY 관점에서 중요한 역설</strong><p>낮에 운동을 조금 더 잘하기 위해 카페인을 사용했는데 밤 수면이 반복적으로 손상된다면, 전체 건강효과는 오히려 불리해질 수 있습니다. <b>카페인의 운동 이득과 수면 비용을 따로 보지 말고 하루 전체 시스템으로 봐야 합니다.</b></p></div>

<h2>07. 불안 — 민감한 사람에게는 작은 용량도 크게 느껴진다</h2>
<p>카페인은 adenosine signaling을 차단하고 교감신경계 반응을 키울 수 있어 jitter, nervousness, 불안감을 유발할 수 있습니다. 2024년 건강한 사람을 대상으로 한 meta-analysis에서는 caffeine intake가 anxiety score를 높이는 방향이었고, 특히 <b>400 mg을 넘는 고용량에서 효과가 더 컸습니다.</b></p>
<p>다만 불안 반응은 개인차가 매우 큽니다. 평소 카페인 섭취량, ADORA2A/CYP1A2 관련 차이, 수면부족, 공복, 스트레스 상황 등이 체감에 영향을 줄 수 있습니다.</p>

<h2>08. 혈압과 심장 — ‘커피는 괜찮으니 카페인도 무조건 괜찮다’는 오류</h2>
<p>카페인 자체를 보충제로 투여한 RCT meta-analysis에서는 혈압이 작지만 유의하게 상승했습니다. 2023년 분석에서는 평균적으로 systolic BP 약 <b>+1.94 mmHg</b>, diastolic BP 약 <b>+1.66 mmHg</b>였습니다. 고혈압 환자에게 200–300 mg을 급성 투여한 과거 연구에서는 수 시간 동안 더 큰 일시적 상승도 관찰됐습니다.</p>
<p>반면 habitual coffee consumption과 장기 심혈관위험의 관계는 이보다 단순하지 않습니다. 커피에는 카페인 외 성분이 많고, 반복 섭취에 대한 tolerance도 생깁니다. 따라서 <b>순수 caffeine supplement의 급성 혈압효과</b>와 <b>커피를 마시는 사람의 장기 cohort 결과</b>를 섞어 해석하면 안 됩니다.</p>

<h2>09. 이뇨작용 — 커피를 마시면 탈수된다는 말은 과장이다</h2>
<p>카페인이 신장에서 일시적으로 urine output을 늘릴 수 있는 것은 맞습니다. 특히 카페인에 익숙하지 않은 사람이 한 번에 약 250–300 mg 이상의 큰 용량을 섭취했을 때 단기 이뇨효과가 더 잘 보입니다.</p>
<p>하지만 habitual users에서는 빠르게 tolerance가 생기고, 일반적인 coffee·tea serving 수준에서는 섭취한 음료 자체의 수분을 넘어서는 탈수가 일어난다는 근거가 부족합니다. 즉 <b>커피 한 잔을 마셨으니 같은 양의 물을 추가로 마셔야 한다</b>는 공식은 필요하지 않습니다.</p>

<h2>10. 혈당 — ‘커피는 당뇨에 좋다’와 ‘카페인은 혈당에 좋다’는 다른 말</h2>
<p>여러 관찰연구에서 habitual coffee consumption은 type 2 diabetes 위험이 낮은 것과 연관됩니다. 하지만 caffeine만 단독으로 급성 투여하면 그림이 반대가 될 수 있습니다.</p>
<p>2017년 7개 RCT meta-analysis에서는 acute caffeine intake가 건강한 사람의 <b>insulin sensitivity를 낮추는 방향</b>으로 나타났습니다. 즉 커피의 장기 역학결과를 caffeine 자체의 즉각적인 대사효과로 설명하기 어렵습니다.</p>
<p>이 차이는 커피 속 polyphenol, 습관화, 체중·생활습관, 연구설계 등의 영향을 포함할 수 있습니다. 그래서 ‘coffee association → caffeine supplement benefit’으로 바로 넘어가면 안 됩니다.</p>

<h2>11. Parkinson disease와 뇌 건강 — 흥미로운 관찰이지만 예방약은 아니다</h2>
<p>카페인과 신경퇴행성질환의 관계에서 가장 일관된 신호는 Parkinson disease입니다. 2020년 meta-analysis에서는 건강한 cohort에서 regular caffeine consumption이 추적기간 동안 PD 발생 위험이 낮은 것과 연관됐습니다.</p>
<p>그러나 이것은 대부분 observational evidence입니다. 이미 PD가 있는 사람에서 caffeine이 질병 진행을 늦추는지, 누구에게 어느 용량이 적절한지는 별개의 질문입니다. Alzheimer disease에서도 관찰 신호는 있지만 결과가 더 불균일합니다.</p>
<p>따라서 카페인을 <b>신경퇴행성질환 예방약</b>이라고 부를 근거는 없습니다.</p>

<h2>12. 커피와 장수 — 가장 많이 혼동되는 부분</h2>
<p>커피는 여러 대규모 cohort에서 all-cause mortality가 낮은 것과 연관돼 왔습니다. 2018년 UK Biobank 약 50만 명 분석에서도 coffee drinking과 낮은 mortality의 연관성이 관찰됐고, 2019년 21개 cohort·1,000만 명 이상을 모은 dose-response meta-analysis에서도 약 3 cups/day 부근에서 낮은 mortality association이 보고됐습니다.</p>
<p>하지만 중요한 반례가 있습니다. <b>decaffeinated coffee에서도 비슷한 inverse association</b>이 관찰됩니다. 이것은 커피의 장수 연관성을 caffeine 하나로 설명하기 어렵다는 뜻입니다. Chlorogenic acids 등 다른 성분, 식습관·사회경제적 요인, reverse causation 같은 confounding도 고려해야 합니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>Caffeine</b><span>각성·운동수행: 인간 RCT 근거 강함.</span></div>
  <div class="evidence-card"><b>Coffee</b><span>사망률·질환위험: 대규모 observational evidence가 많음.</span></div>
  <div class="evidence-card"><b>Longevity</b><span>카페인 자체가 인간 수명을 늘린다는 RCT는 없음.</span></div>
</div>

<h2>13. 공복 커피와 단식 — fasting을 ‘강화’한다고 말할 수 있을까?</h2>
<p>설탕·우유를 넣지 않은 black coffee는 열량이 매우 적기 때문에 <b>caloric fasting</b> 관점에서는 큰 에너지 공급원이 아닙니다. 그러나 caffeine은 catecholamine, 혈압, 지방산 이용, insulin sensitivity 등에 영향을 줄 수 있으므로 ‘아무 생리작용도 없는 물’과 동일하지 않습니다.</p>
<p>더 중요한 점은 <b>공복 caffeine이 human autophagy나 healthspan을 더 크게 만든다는 임상근거가 없다는 것</b>입니다. 공복 운동에서 fat oxidation이 증가한다는 데이터는 있지만, 그 결과를 autophagy 또는 longevity로 확장하면 증거의 단계를 건너뛰게 됩니다.</p>

<h2>14. 얼마나 먹어도 괜찮을까?</h2>
<p>미국 FDA는 대부분의 건강한 성인에서 <b>하루 400 mg</b> 정도를 일반적으로 부정적 효과와 연관되지 않는 수준으로 인용합니다. 하지만 이것은 ‘매일 400 mg을 먹어야 건강하다’는 권장량이 아니라 <b>안전성의 참고 상한</b>에 가깝습니다.</p>
<p>개인의 불면·불안·심계항진·위장증상·혈압 반응이 더 낮은 용량에서 나타난다면 그 사람의 실질적 상한은 훨씬 낮을 수 있습니다. 에너지드링크·pre-workout·커피를 함께 쓰면 하루 총량을 쉽게 놓칠 수 있습니다.</p>
<div class="takeaway"><strong>실전 원칙</strong><p><b>최소 유효용량을 찾는 것이 가장 합리적입니다.</b> 목적 없이 습관적으로 용량을 올리지 말고, 수면을 희생하지 않으며, 운동에 쓸 때도 ‘더 많이 = 더 좋은 수행’으로 생각하지 않는 편이 좋습니다.</p></div>

<h2>15. 내성과 금단 — ‘커피를 마셔야 정상 컨디션’이 되는 이유</h2>
<p>매일 caffeine을 사용하면 adenosine system이 적응하면서 일부 효과에 tolerance가 생길 수 있습니다. 갑자기 중단하면 headache, fatigue, drowsiness, 집중력 저하, irritability 같은 withdrawal symptom이 나타날 수 있습니다.</p>
<p>2004년 comprehensive review에서는 withdrawal이 보통 중단 후 <b>12–24시간</b>에 시작해 20–51시간 사이 가장 심하고, 대개 2–9일 지속될 수 있다고 정리했습니다. 100 mg/day 정도의 비교적 낮은 habitual intake에서도 금단이 보고됐습니다.</p>
<p>그래서 아침 커피를 마시고 ‘집중력이 엄청 좋아졌다’고 느끼는 효과의 일부는 순수한 enhancement가 아니라 <b>밤사이 생긴 mild withdrawal을 정상상태로 되돌리는 효과</b>일 수도 있습니다.</p>

<h2>16. LONGEVITY JOURNAL 판정</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>각성·주의력</b><span><b>근거 강함.</b> 특히 졸림·수면부족에서 효과가 분명함.</span></div>
  <div class="evidence-card"><b>운동 수행</b><span><b>근거 강함.</b> 유산소 지구력에서 가장 일관적.</span></div>
  <div class="evidence-card"><b>지방 산화</b><span><b>급성 효과 있음.</b> 장기 체지방 감소와는 별개.</span></div>
  <div class="evidence-card"><b>수면</b><span><b>부정적 효과 근거 강함.</b> 용량·시간·개인차 중요.</span></div>
  <div class="evidence-card"><b>장수</b><span><b>카페인 자체는 미확립.</b> Coffee cohort와 구분 필요.</span></div>
  <div class="evidence-card"><b>항노화</b><span><b>직접 증거 없음.</b> biomarker·동물기전을 수명으로 확대하면 안 됨.</span></div>
</div>
<p>카페인은 ‘좋은 물질’도 ‘나쁜 물질’도 아닙니다. <b>효과가 분명한 약리활성물질</b>입니다. 적절히 쓰면 각성·운동수행에 유용하지만, 수면을 망가뜨리면서까지 더 마시면 장기 건강 관점에서 본래 목적과 충돌할 수 있습니다.</p>
<p><b>카페인의 최적 사용은 최대 용량을 찾는 것이 아니라, 원하는 효과를 내면서 수면·불안·혈압에 비용을 만들지 않는 최소 용량과 시간을 찾는 것입니다.</b></p>

<h2>근거자료 — 발표 시간순</h2>
<div class="timeline">
${paper('1995','Fredholm BB. Adenosine, adenosine receptors and the actions of caffeine.','일반적인 인체 섭취 농도에서 caffeine의 핵심 작용을 adenosine A1/A2A receptor antagonism으로 설명한 고전적 리뷰.','https://pubmed.ncbi.nlm.nih.gov/7746802/')}
${paper('2004','Juliano LM, Griffiths RR. A critical review of caffeine withdrawal.','57개 실험연구와 9개 조사연구 검토. headache·fatigue·drowsiness·집중력 저하 등 withdrawal syndrome의 시간경과와 용량관계를 정리.','https://pubmed.ncbi.nlm.nih.gov/15448977/')}
${paper('2017','Shi X, et al. Acute caffeine ingestion reduces insulin sensitivity in healthy subjects.','7개 RCT meta-analysis. caffeine 단독 급성 섭취가 insulin sensitivity를 낮추는 방향. Coffee의 장기 역학 결과와 구분 필요.','https://pubmed.ncbi.nlm.nih.gov/28031026/')}
${paper('2018','Loftfield E, et al. JAMA Internal Medicine.','UK Biobank 약 50만 명. Coffee drinking과 낮은 all-cause mortality의 연관성을 관찰했으며 caffeine metabolism genotype으로 설명되지 않음. 관찰연구이므로 인과성은 확정 불가.','https://pubmed.ncbi.nlm.nih.gov/29971434/')}
${paper('2019','Kim Y, et al. Caffeinated and decaffeinated coffee and all-cause mortality.','21개 cohort, 1,000만 명 이상 dose-response meta-analysis. caffeinated와 decaf 모두 inverse association을 보여 coffee 효과를 caffeine 하나로 설명하기 어려움.','https://pubmed.ncbi.nlm.nih.gov/30786114/')}
${paper('2020','Collado-Mateo D, et al. Nutrients.','19개 crossover 연구 meta-analysis. 공복 후 submaximal exercise에서 acute caffeine이 fat oxidation rate를 증가. 장기 체지방 감소를 의미하지는 않음.','https://pubmed.ncbi.nlm.nih.gov/33255240/')}
${paper('2020','Hong CT, et al. Nutrients.','13개 연구 meta-analysis. 건강한 cohort에서 regular caffeine exposure와 낮은 Parkinson disease 발생위험의 연관성. 질병 진행 억제효과는 확정되지 않음.','https://pubmed.ncbi.nlm.nih.gov/32580456/')}
${paper('2021','Guest NS, et al. ISSN Position Stand.','Caffeine과 운동수행 종합 position stand. 유산소 지구력에서 가장 일관된 이득, 3–6 mg/kg 범위의 근거가 가장 풍부.','https://pubmed.ncbi.nlm.nih.gov/33388079/')}
${paper('2022','Grzegorzewski J, et al. Frontiers in Pharmacology.','141개 publication의 caffeine pharmacokinetic data 통합. CYP1A2, smoking, medications, oral contraceptives, disease 등에 따른 큰 개인차를 정리.','https://pubmed.ncbi.nlm.nih.gov/35280254/')}
${paper('2023','Gardiner C, et al. Sleep Medicine Reviews.','24개 연구 meta-analysis. caffeine이 총수면시간·sleep efficiency·deep sleep을 감소시키고 sleep latency를 증가.','https://pubmed.ncbi.nlm.nih.gov/36870101/')}
${paper('2023','Abbas-Hashemi SA, et al. Clinical Nutrition ESPEN.','성인 RCT meta-analysis. caffeine supplementation 후 systolic·diastolic BP가 작지만 유의하게 증가.','https://pubmed.ncbi.nlm.nih.gov/38057002/')}
${paper('2024','Liu C, et al. Frontiers in Psychology.','건강한 참가자 546명을 포함한 meta-analysis. caffeine이 anxiety를 증가시키는 방향이며 고용량에서 효과가 더 큼.','https://pubmed.ncbi.nlm.nih.gov/38362247/')}
${paper('2024','Ruiz-Moreno C, et al. Fed-state exercise fat oxidation meta-analysis.','식사 후 운동에서도 acute caffeine이 일부 조건에서 fat oxidation을 높였지만 훈련상태·습관·용량에 따라 차이가 큼.','https://pubmed.ncbi.nlm.nih.gov/38257100/')}
</div>
<p class="editor-note">최종 근거 검토: 2026-10-09 · 이 글은 caffeine과 coffee evidence를 의도적으로 분리합니다. Coffee의 관찰상 건강연관성을 caffeine 보충제의 인과적 효과로 해석하지 않습니다.</p>
`
});
})();

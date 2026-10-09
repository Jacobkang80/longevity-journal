(()=>{
const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
if(posts.some(x=>x.slug==='longevity-supplements-2026'))return;
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
posts.push({
  slug:'longevity-supplements-2026',
  category:'health',
  date:'2026-10-09',
  title:'항노화 영양제는 정말 의미가 있을까? — 2026년 Longevity Supplement Evidence Map',
  excerpt:'NMN·Fisetin·CA-AKG·Resveratrol·TMG·Omega-3·Anthocyanin·MCT·Creatine을 “효과 있음/없음”으로 자르지 않고, 기전→사람에서의 표적작동→기능개선→질병·수명으로 이어지는 근거의 사다리 위에 놓아봅니다.',
  tags:['항노화','Longevity','Supplements','NMN','NR','Fisetin','CA-AKG','Resveratrol','TMG','Betaine','Omega-3','Anthocyanin','MCT','Creatine','Vitamin D','Magnesium','Geroscience'],
  html:`
<p class="editor-note"><strong>LONGEVITY JOURNAL 핵심 글:</strong> 이 글은 “영양제는 의미가 있다/없다”를 판정하기 위한 글이 아닙니다. 2026년 현재 각 후보가 <b>어떤 생물학적 경로를 겨냥하고, 사람에서 실제로 무엇을 바꾸었으며, 어디까지가 아직 미완성인 연결고리인지</b>를 한눈에 보기 위한 근거 지도입니다. 근거 검토일 2026-10-09.</p>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>인간 수명 연장 RCT가 없다는 사실은 영양제가 무의미하다는 뜻이 아닙니다.</b> Geroscience의 실제 번역 과정은 대개 <b>기전 → 동물 healthspan/lifespan → 인간 target engagement → 기능·대사 개선 → 질병 감소 → 건강수명·수명</b> 순으로 진행됩니다. NMN은 NAD 대사를, Fisetin은 senescence를, CA-AKG는 대사·후성유전학을, TMG는 methylation/homocysteine을, Omega-3는 지질·염증·심혈관경로를 실제로 움직일 수 있습니다. 중요한 질문은 “작동하느냐”뿐 아니라 <b>얼마나, 누구에게, 어떤 endpoint에서, 장기적으로 이득이 남느냐</b>입니다.</p></div>

<h2>01. 왜 항노화 영양제는 ‘있다/없다’로 평가하기 어려운가?</h2>
<p>혈압약은 몇 년의 임상시험으로 심근경색·뇌졸중 감소를 볼 수 있습니다. 하지만 건강한 40~50대에게 어떤 영양제를 먹이고 실제 수명이 늘어나는지 확인하려면 수십 년이 걸릴 수 있습니다. 그래서 longevity 연구에서는 중간 단계의 증거가 중요합니다.</p>
<div class="pathway" aria-label="translation ladder">
  <div class="pathway-step"><b>Mechanism</b><span>NAD · senescence · mTOR · methylation</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>Target engagement</b><span>NAD↑ · Hcy↓ · ketone↑ · CRP↓</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>Function</b><span>근력 · 혈관 · 인슐린 · 인지</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>Hard outcomes</b><span>질병 · 장애 · 사망</span></div>
</div>
<p>이 사다리의 앞쪽 단계에 있는 물질을 “효과 없음”이라고 부르는 것도 부정확하고, 앞 단계 하나가 움직였다고 “수명 연장 입증”이라고 부르는 것도 부정확합니다. 저는 <b>각 물질이 현재 사다리의 어디까지 올라와 있는지</b>를 보는 것이 가장 생산적이라고 생각합니다.</p>

<h2>02. 2026년 Evidence Map — 순위가 아니라 ‘번역 단계’</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>HUMAN OUTCOME</b><span><b>Omega-3</b> · 특정 상황의 Vitamin D/미량영양소 교정. 사람의 임상 outcome 자료가 비교적 많음.</span></div>
  <div class="evidence-card"><b>FUNCTIONAL AGING</b><span><b>Creatine</b> · 근력/제지방량/기능. 특히 저항운동과 결합할 때 건강노화 근거가 강해지는 후보.</span></div>
  <div class="evidence-card"><b>TRANSLATIONAL</b><span><b>NMN/NR · Resveratrol · Anthocyanin · TMG</b>. 인간에서 표적 또는 일부 기능지표가 실제로 움직임.</span></div>
  <div class="evidence-card"><b>GEROSCIENCE FRONTIER</b><span><b>Fisetin · CA-AKG</b>. 노화생물학적 매력은 크고 인간 번역 임상은 아직 초기.</span></div>
  <div class="evidence-card"><b>METABOLIC TOOL</b><span><b>MCT</b>. 케톤을 올리는 효과는 분명하고 체중·인지 일부 신호가 있으나 자체가 ‘항노화제’인 것은 아님.</span></div>
  <div class="evidence-card"><b>FOUNDATION</b><span>영양제 위에는 언제나 운동·수면·금연·금주·대사건강·좋은 식사 패턴이 존재. 둘은 경쟁관계가 아니라 층(layer)의 관계.</span></div>
</div>
<p class="small-note">이 분류는 영구적인 등급표가 아닙니다. 새로운 RCT와 장기추적 결과가 나오면 위아래로 이동할 수 있는 2026년 시점의 지도입니다.</p>

<h2>03. NMN / NR — ‘NAD가 오른다’는 것은 이미 중요한 첫 단계다</h2>
<p>NAD⁺는 redox metabolism, mitochondrial function, DNA repair, Sirtuin activity와 연결되어 있고 나이에 따라 NAD metabolism이 변화한다는 점 때문에 가장 많이 연구되는 geroscience 축 중 하나입니다.</p>
<p>2026년 <i>Ageing Research Reviews</i> systematic review는 2010~2025년의 <b>113개 intervention study</b>를 검토했고, 그중 사람 연구가 33개, 28개는 randomized study였습니다. 인간에서는 NR/NMN이 <b>NAD 관련 대사체를 증가시키는 target engagement</b>는 비교적 반복적으로 확인됐습니다. 반면 인슐린 감수성·혈관·근육·기능적 outcome은 집단과 연구설계에 따라 달랐습니다.</p>
<div class="takeaway"><strong>현재 위치</strong><p><b>NMN = 효과 없음</b>이 아니라 <b>NAD biology에는 실제로 개입할 수 있고, 그것이 장기 건강수명으로 얼마나 번역되는지를 확인하는 단계</b>입니다. 이 차이는 매우 큽니다.</p></div>

<h2>04. Fisetin — 가장 매력적인 ‘senolytic hypothesis’ 중 하나</h2>
<p>세포노화(senescence)는 2023년 Hallmarks of Aging에서도 중요한 축입니다. Senescent cell이 축적되면 SASP를 통해 염증·조직기능 저하를 증폭시킬 수 있고, 동물에서는 노화세포를 줄이는 senolytic 접근이 건강수명 관련 표현형을 개선해 왔습니다.</p>
<p>Fisetin은 자연 flavonoid이면서 senolytic/senomorphic 후보로 주목받습니다. 2026년 임상번역 리뷰는 aging/frailty·대사질환·심혈관·신경퇴행 등과 관련해 <b>34개의 등록 임상시험</b>을 확인했고, 아직 결과가 공개된 완료시험은 소수라고 정리했습니다.</p>
<p>즉 Fisetin은 실패한 물질이 아니라 <b>사람에서 어떤 용량·주기·조직·biomarker를 봐야 하는지 정립하는 초기 translational phase</b>에 가깝습니다. 특히 senolytic 특성상 매일 복용보다 intermittent hit-and-run 전략이 더 타당할 가능성도 연구되고 있지만, 인간 최적 스케줄은 아직 확립되지 않았습니다.</p>

<h2>05. CA-AKG — TCA cycle을 넘어 후성유전학과 연결되는 대사물질</h2>
<p>α-ketoglutarate는 Krebs cycle의 대사중간체이면서 TET·JmjC 계열 dioxygenase에 필요한 cofactor입니다. 그래서 에너지대사뿐 아니라 DNA/histone demethylation과 세포상태 조절까지 이어집니다.</p>
<p>벌레와 생쥐에서는 수명·건강수명 신호가 보고됐고 Ca-AKG 형태가 longevity supplement로 알려졌습니다. 반면 사람에서 aging 자체를 endpoint로 한 현대적 대규모 RCT는 아직 매우 부족합니다. 2021년 리뷰도 이 점을 명확히 지적했습니다.</p>
<p>저는 CA-AKG를 <b>‘근거 없는 영양제’가 아니라, 전임상 노화생물학이 상당히 매력적이고 인간 번역을 기다리는 frontier candidate</b>로 보는 것이 적절하다고 생각합니다.</p>

<h2>06. Resveratrol — 인간 연구가 쌓이면서 ‘어디에 효과가 있는지’가 보이기 시작한다</h2>
<p>Resveratrol은 Sirtuin과 stress-response 연구로 유명하지만 실제 사람 연구도 이제 상당히 많습니다. 2026년 umbrella review는 <b>45개 systematic review, 68개 health outcome</b>을 통합했습니다.</p>
<p>그 결과 모든 outcome이 좋아진 것은 아니지만, 일부에서는 비교적 높은 certainty로 허리둘레, 특정 집단의 혈압, 총콜레스테롤 개선이 확인됐고, 중등도 근거로 glucose metabolism·endothelial health·working memory·hepatic steatosis·inflammation 등의 가능성이 제시됐습니다.</p>
<p>이제 Resveratrol의 질문은 “작동하는가?”보다 <b>어떤 대상·용량·기간에서 의미 있는 임상효과를 내는가?</b> 쪽으로 이동하고 있습니다.</p>

<h2>07. Omega-3 — ‘실험적 항노화 후보’보다 인간 임상자료가 훨씬 앞선 영양 개입</h2>
<p>Omega-3는 다른 후보들과 같은 바구니에 넣기 어렵습니다. EPA/DHA는 triglyceride를 낮추고 막·eicosanoid signaling을 바꾸며, cardiovascular endpoint를 본 대규모 RCT가 이미 존재합니다.</p>
<p>2025년 16개 RCT, <b>127,771명</b>을 분석한 meta-analysis에서는 purified EPA가 cardiovascular mortality를 낮추는 방향이 확인됐고(HR 0.79), EPA/DHA 혼합은 효과가 더 작았습니다. 이는 모든 일반인이 같은 제품을 먹으면 같은 이득을 얻는다는 뜻은 아니지만, <b>사람의 hard outcome까지 연구가 올라간 몇 안 되는 영양 개입</b>이라는 점은 중요합니다.</p>
<p>따라서 Omega-3의 가치는 단순 “항염증 보충제”를 넘어, 개인의 식사·TG·심혈관 위험·용량·제형에 따라 실제 임상적 의미가 달라지는 단계에 있습니다.</p>

<h2>08. Anthocyanin — 색소가 아니라 혈관·염증 경로에 작동하는 polyphenol family</h2>
<p>베리류의 보라색·적색을 만드는 anthocyanin은 polyphenol 중 인간 RCT가 비교적 풍부한 축입니다. 2024년 purified anthocyanin RCT meta-analysis에서는 CRP·TNF-α·IL-6가 감소하는 방향이 관찰됐고, 2025년 umbrella review 역시 inflammation·lipid·body composition 등 여러 영역의 긍정적 신호를 정리했습니다.</p>
<p>2025년 치매 위험군 RCT에서는 24주 anthocyanin 보충 후 CRP와 일부 inflammatory/cardiometabolic marker가 개선됐습니다. 중요한 것은 이것을 곧바로 “노화 억제”라고 부르는 것이 아니라, <b>inflammaging와 vascular aging에 연결되는 중간경로가 사람에서도 움직일 가능성</b>으로 보는 것입니다.</p>

<h2>09. TMG(Betaine) — methyl donor로서 실제 biochemical effect가 분명하다</h2>
<p>TMG는 BHMT 경로에서 homocysteine을 methionine으로 재메틸화하고 SAM cycle과 연결됩니다. 인간 RCT meta-analysis에서는 betaine이 homocysteine을 유의하게 낮추는 효과가 반복됩니다.</p>
<p>이것은 <b>실제 biochemical target engagement</b>입니다. 다만 높은 용량에서는 LDL/total cholesterol이 올라갈 수 있다는 분석도 있어 “homocysteine이 낮을수록 무조건 더 좋다”는 단순한 접근보다는 지질반응까지 함께 보는 편이 낫습니다.</p>
<p>NMN/NR과 TMG를 함께 사용하는 아이디어는 NAD salvage와 methyl demand를 연결하는 생화학적 논리에서 출발하지만, 건강한 일반인에서 routine co-supplementation이 건강수명을 늘린다는 장기 임상근거는 아직 만들어지는 중입니다.</p>

<h2>10. MCT Oil — 케톤을 올리는 ‘도구’로는 확실하지만 목적을 구분해야 한다</h2>
<p>MCT, 특히 C8/C10은 long-chain fat보다 빠르게 간으로 전달되어 ketogenesis를 촉진합니다. 따라서 <b>혈중 ketone을 올리는 효과 자체는 명확</b>합니다.</p>
<p>2024년 overweight/obesity meta-analysis에서는 LCT 대비 체중과 일부 대사지표에 작은 이점이 있었고, 2023년 Alzheimer-related cognitive impairment meta-analysis에서는 cognition에 긍정 신호가 보고됐습니다. 하지만 MCT를 먹는 것과 fasting physiology 전체가 동일한 것은 아닙니다.</p>
<div class="takeaway"><strong>구분할 것</strong><p><b>Ketone ↑</b>는 분명한 metabolic effect입니다. 그러나 <b>Ketosis = fasting = autophagy = anti-aging</b>으로 한 번에 연결하는 것은 별개의 질문입니다. MCT의 가치는 ‘대사 도구’라는 위치에서 가장 잘 보입니다.</p></div>

<h2>11. Creatine — 전통적 운동보충제가 ‘healthy aging supplement’로 다시 보이는 이유</h2>
<p>Creatine은 longevity 커뮤니티에서는 NMN보다 덜 화려해 보이지만, 중장년 건강수명에서 중요한 <b>근력·근육·기능</b>에 직접 연결됩니다. 2025년 older-adult meta-analysis에서는 운동과 creatine을 병행할 때 1RM 등 근기능 개선이 확인됐고, 여러 review에서 lean mass와 기능적 이득이 반복됩니다.</p>
<p>2026년 cognition systematic review에서는 자료가 아직 많지는 않지만 55세 이상 연구의 다수에서 memory·attention 등 인지와 긍정적 연관이 보고됐습니다. 수명 자체를 늘리는 보충제라는 의미가 아니라, <b>sarcopenia와 frailty를 줄이는 기능자산 관점에서 매우 실용적인 healthy-aging 후보</b>입니다.</p>

<h2>12. Vitamin D와 Magnesium — ‘geroprotector’보다 결핍 교정이 핵심</h2>
<p>Vitamin D와 magnesium은 결핍이 있는 사람에게 중요합니다. 다만 정상 수준인 모든 사람이 고용량으로 더 먹을수록 더 오래 산다는 의미는 아닙니다.</p>
<p>Vitamin D RCT meta-analysis에서는 all-cause mortality에 작은 감소 신호가 보고된 분석이 있지만 cardiovascular outcome은 일관되지 않았습니다. Magnesium은 식이섭취가 높은 사람에서 낮은 mortality와 연관되는 cohort 자료가 있지만 supplemental magnesium 자체의 mortality benefit은 명확하지 않습니다.</p>
<p>따라서 이 둘은 <b>결핍·섭취부족·의학적 필요를 교정하는 기반 영양소</b>라는 위치가 가장 합리적입니다.</p>

<h2>13. ‘아침 공복에 한꺼번에’보다 각 물질의 목적에 맞춰야 한다</h2>
<p>항노화 루틴의 가치와 <b>공복 복용</b>은 같은 질문이 아닙니다. 모든 영양제를 공복에 먹어야 longevity effect가 커진다는 인간 근거는 없습니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>지방과 함께</b><span>Omega-3처럼 지방흡수와 관련된 성분은 식사와 함께 섭취하는 편이 실용적일 수 있음.</span></div>
  <div class="evidence-card"><b>공복이 핵심 아님</b><span>NMN/NR의 항노화 효과가 아침 공복에서 특별히 우수하다고 확립된 임상근거는 없음.</span></div>
  <div class="evidence-card"><b>단식과 구분</b><span>MCT·올리브유는 칼로리가 있으므로 엄밀한 의미의 caloric fasting은 깨지만, 이것이 건강효과가 없다는 뜻은 아님.</span></div>
  <div class="evidence-card"><b>목적별 설계</b><span>흡수·위장관 내약성·운동·수면·혈액지표에 맞춰 시간을 나누는 편이 더 합리적.</span></div>
</div>

<h2>14. 제가 보는 가장 좋은 접근 — ‘Portfolio of probabilities’</h2>
<p>미래의 완벽한 인간 lifespan RCT만 기다리면 지금 사용할 수 있는 정보를 너무 적게 활용하게 됩니다. 반대로 전임상 논문 한 편만 보고 모든 후보를 고용량으로 쌓는 것도 좋은 전략이 아닙니다.</p>
<p>저는 다음 네 가지를 동시에 봅니다. <b>① biological plausibility, ② 인간 target engagement, ③ 안전성·상호작용, ④ 장기적으로 추적 가능한 실제 지표</b>입니다.</p>
<div class="pathway" aria-label="probability portfolio">
  <div class="pathway-step"><b>가능성</b><span>기전 + 동물 반복성</span></div><div class="pathway-arrow">+</div>
  <div class="pathway-step"><b>번역성</b><span>사람에서 표적이 움직이는가</span></div><div class="pathway-arrow">+</div>
  <div class="pathway-step"><b>안전성</b><span>장기 위해·상호작용</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>Expected value</b><span>개인에게 기대값이 양수인가</span></div>
</div>
<p>이 프레임에서는 NMN이나 CA-AKG를 먹는 행위가 “과학적으로 틀린 행동”이 아닙니다. 오히려 <b>현재 정보에서 기대값이 양수라고 판단해 선택적으로 사용하는 실험적 개입</b>이 될 수 있습니다. 다만 새로운 연구가 나오면 용량·빈도·우선순위를 수정할 준비가 되어 있어야 합니다.</p>

<h2>15. 영양제는 생활습관과 경쟁하지 않는다</h2>
<p>운동·수면·금연·금주·식사와 영양제는 둘 중 하나를 고르는 문제가 아닙니다. 가장 좋은 구조는 <b>기반 위에 실험적 layer를 올리는 것</b>입니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>BASE</b><span>수면 · 유산소/HIIT · 근력 · 체중/혈압/혈당 · 금연·금주.</span></div>
  <div class="evidence-card"><b>FOOD MATRIX</b><span>올리브유 · 생선 · 채소 · 콩 · 견과 · 베리 · 충분한 단백질.</span></div>
  <div class="evidence-card"><b>SUPPLEMENT LAYER</b><span>Omega-3 · Creatine · NMN/NR · polyphenols · TMG 등 목적별 선택.</span></div>
  <div class="evidence-card"><b>FRONTIER</b><span>Fisetin · CA-AKG · senolytics · rapalogs · partial reprogramming 등 계속 추적.</span></div>
</div>
<p><b>수면 5시간을 보충제로 상쇄하기는 어렵지만, 수면·운동·식사를 잘하면서 geroscience 후보를 추가하는 것은 전혀 모순되지 않습니다.</b></p>

<h2>16. LONGEVITY JOURNAL의 결론</h2>
<p>항노화 영양제 연구를 바라보는 가장 좋은 태도는 지나친 낙관도, 지나친 회의도 아니라고 생각합니다. 노화생물학은 이미 개입 가능한 여러 경로를 보여주었고, 사람에서도 그중 일부는 실제로 움직입니다.</p>
<p><b>NAD가 올라가고, homocysteine이 내려가고, ketone이 올라가고, 염증지표가 바뀌고, 근력이 늘어나는 현상은 ‘아무 일도 일어나지 않은 것’이 아닙니다.</b> 그것은 번역의 중간 단계입니다. 다음 질문은 그 변화가 실제 기능, 질병, 장애, 건강수명으로 얼마나 이어지느냐입니다.</p>
<div class="takeaway"><strong>마지막 한 문장</strong><p><b>“인간 수명 연장이 아직 증명되지 않았다”와 “효과가 없다”는 같은 문장이 아닙니다.</b> 2026년의 합리적인 longevity 전략은 근거가 강한 기반을 지키면서, 가능성이 높은 후보를 안전하게 선택하고, 앞으로 쌓이는 인간 데이터를 따라 계속 업데이트하는 것입니다.</p></div>

<h2>근거자료 — 시간순으로 읽는 핵심 연구와 리뷰</h2>
<div class="timeline">
${paper('2013','Cholewa JM, et al. Betaine supplementation decreases plasma homocysteine in healthy adults: meta-analysis.','5개 RCT. betaine이 plasma homocysteine을 평균 약 1.23 μmol/L 낮춤. TMG의 biochemical target engagement 근거. PMID 23997720.','https://pubmed.ncbi.nlm.nih.gov/23997720/')}
${paper('2015','Mumme K, Stonehouse W. Effects of MCTs on weight loss and body composition: meta-analysis.','13개 RCT, 749명. LCT 대비 체중·허리둘레·체지방의 작은 감소. PMID 25636220.','https://pubmed.ncbi.nlm.nih.gov/25636220/')}
${paper('2019','Avgerinos KI, et al. MCTs induce mild ketosis and may improve cognition in Alzheimer disease.','12개 기록, 422명. BHB 상승과 cognition의 일부 긍정 신호. PMID 31870908.','https://pubmed.ncbi.nlm.nih.gov/31870908/')}
${paper('2020','Fallah AA, et al. Dietary anthocyanins and systemic/vascular inflammation.','32개 RCT meta-analysis. CRP·IL-6·TNF-α·adhesion molecule 감소 신호. PMID 31669599.','https://pubmed.ncbi.nlm.nih.gov/31669599/')}
${paper('2021','Asadi A, et al. Betaine supplementation and cardiovascular markers: systematic review/meta-analysis.','낮은 용량에서는 homocysteine 감소가 가능하나 높은 용량에서 lipid 상승 가능성을 함께 고려. PMID 33764214.','https://pubmed.ncbi.nlm.nih.gov/33764214/')}
${paper('2021','Shahmirzadi AA, et al. Alpha-Ketoglutarate dietary supplementation to improve health in humans.','AKG의 대사·epigenetic·immune biology와 전임상 longevity 가능성, 인간 노화 임상근거의 부족을 정리. PMID 34952764.','https://pubmed.ncbi.nlm.nih.gov/34952764/')}
${paper('2023','Sun L, et al. MCT for Alzheimer-related cognitive impairment: systematic review/meta-analysis.','MCT가 ketone을 높이고 AD/MCI cognition에서 일부 긍정 신호를 보였으나 연구규모와 이질성의 한계가 존재. PMID 37248908.','https://pubmed.ncbi.nlm.nih.gov/37248908/')}
${paper('2024','Yao Y, et al. Purified anthocyanins and inflammatory mediators: systematic review/meta-analysis.','RCT 통합에서 CRP·TNF-α·IL-6 감소. inflammaging에 연결되는 인간 biomarker 자료. PMID 38272574.','https://pubmed.ncbi.nlm.nih.gov/38272574/')}
${paper('2024','Schafer MJ, et al. Fisetin as a senotherapeutic agent: evidence and perspectives.','Fisetin의 senolytic/senomorphic 전임상 근거와 phase I/II 인간번역의 과제를 정리. PMID 39384074.','https://pubmed.ncbi.nlm.nih.gov/39384074/')}
${paper('2024','Ma L, et al. MCTs and weight/metabolic health in overweight or obesity.','MCT enriched diet가 LCT 대비 체중감량에 작은 이점을 보인 meta-analysis. PMID 38936302.','https://pubmed.ncbi.nlm.nih.gov/38936302/')}
${paper('2025','Sheppard JP, et al. EPA vs EPA/DHA on cardiovascular mortality.','16개 RCT, 127,771명. purified EPA에서 CVD mortality 감소가 더 뚜렷했고 EPA/DHA 혼합은 효과가 작았음. PMID 40974959.','https://pubmed.ncbi.nlm.nih.gov/40974959/')}
${paper('2025','Sharifian G, et al. Creatine plus exercise in older adults: systematic review/meta-analysis.','20개 연구, 1,093명. 운동과 creatine 병행 시 1RM 등 일부 physical-function 지표 개선. PMID 41062952.','https://pubmed.ncbi.nlm.nih.gov/41062952/')}
${paper('2025','Effects of anthocyanins on human health: umbrella review.','염증·lipid·body composition 등 다양한 인간 outcome을 종합한 최신 umbrella review. PMID 40963364.','https://pubmed.ncbi.nlm.nih.gov/40963364/')}
${paper('2026','Gallagher C, Emmanuel OO. NAD+ supplementation for anti-aging and wellness. Ageing Res Rev.','113개 intervention study 중 사람 33개(28 RCT). NR/NMN의 NAD target engagement는 반복되지만 기능·임상 outcome은 heterogeneous. PMID 41655607.','https://pubmed.ncbi.nlm.nih.gov/41655607/')}
${paper('2026','Sun JN, et al. Resveratrol supplementation on multiple health outcomes: umbrella review.','45개 systematic review, 68 outcomes. 일부 혈압·허리둘레·콜레스테롤에서 높은 certainty, 여러 대사·혈관·염증 outcome에서 중등도 신호. PMID 41987155.','https://pubmed.ncbi.nlm.nih.gov/41987155/')}
${paper('2026','Marshall S, et al. Creatine and Cognition in Aging: systematic review.','55세 이상 연구 6개, 1,542명. 자료는 제한적이지만 memory·attention 등에서 긍정적 연관 신호. PMID 40971619.','https://pubmed.ncbi.nlm.nih.gov/40971619/')}
${paper('2026','Clinical Translation of Fisetin for Age-Related Diseases.','34개 등록 임상시험과 결과 공개된 완료시험을 검토. Fisetin은 human translation이 본격적으로 진행 중인 senotherapeutic 후보. PMID 42796982.','https://pubmed.ncbi.nlm.nih.gov/42796982/')}
</div>

<p class="editor-note"><strong>편집 원칙:</strong> 이 글의 Evidence Map은 처방이나 복용지시가 아니라 연구의 번역 단계를 설명하는 프레임입니다. 같은 성분도 용량·제형·질환·약물·신장/간 기능에 따라 위험과 기대효과가 달라질 수 있습니다. 앞으로 장기 RCT와 human healthspan 자료가 나오면 이 지도를 계속 갱신합니다.</p>
`});
})();
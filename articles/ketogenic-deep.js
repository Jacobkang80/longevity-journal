(()=>{
const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
if(posts.some(x=>x.slug==='ketogenic-diet-evidence'))return;
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
posts.push({
  slug:'ketogenic-diet-evidence',
  category:'health',
  date:'2023-07-29',
  title:'케토제닉 식단은 정말 노화를 늦출까? — 케톤, 체중, 혈당, LDL, 뇌 건강과 수명의 근거',
  excerpt:'케토제닉 식단은 케톤을 올리고 체중·혈당을 개선할 수 있지만, LDL·ApoB 상승과 장기 순응도라는 반대편도 있습니다. “케토시스 = 항노화”인지 인간 근거를 끝까지 따라갑니다.',
  tags:['케토제닉','Ketogenic diet','Keto','Ketosis','Beta-hydroxybutyrate','BHB','Low carbohydrate','LDL','ApoB','Type 2 diabetes','Alzheimer','Healthspan','Longevity Lifestyle'],
  html:`
<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-07-29 · <a href="https://myepic2.tistory.com/14" target="_blank" rel="noopener noreferrer">Ketogenic Diet 케토제닉 식단[저탄고지]이 건강에 미치는 영향 ↗</a> · LONGEVITY JOURNAL 근거 전면 업데이트 2026-10-09</p>

<figure class="story-hero"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Keto_meal.jpg" alt="달걀, 채소, 육류 등으로 구성된 저탄수화물 식사" loading="eager"><figcaption>‘케토제닉’은 탄수화물을 극단적으로 낮춰 영양성 케토시스를 만드는 식사 전략입니다. 무엇을 지방원으로 선택하는지에 따라 혈중지질과 식이의 질은 크게 달라질 수 있습니다. 사진: Ted Eytan / Wikimedia Commons, CC BY-SA 2.0.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>케토제닉 식단은 케톤 생성, 체중감량, 중성지방·혈당 개선에는 실제 인간근거가 있습니다.</b> 하지만 모든 사람에게 장기적으로 우월한 식단은 아닙니다. 2022년 Keto-Med RCT에서는 전당뇨·제2형 당뇨병 환자에서 ketogenic diet와 Mediterranean-plus diet의 HbA1c 차이가 없었고, ketogenic diet는 중성지방을 더 낮춘 대신 LDL을 더 높였습니다. 2026년 심혈관 메타분석에서도 평균적으로 LDL-C는 약 12 mg/dL 상승하고 중성지방은 약 16 mg/dL 감소하는 ‘trade-off’가 확인됐습니다. 쥐에서는 수명·건강수명 신호가 있었지만 <b>인간의 건강수명이나 수명 연장은 아직 증명되지 않았습니다.</b></p></div>

<h2>01. 케토제닉 식단은 ‘탄수화물을 조금 줄이는 식단’이 아니다</h2>
<p>저탄수화물 식단(low-carbohydrate diet)과 케토제닉 식단(ketogenic diet)은 겹치지만 같은 말은 아닙니다. 일반적으로 연구에서는 탄수화물을 하루 약 <b>50 g 이하</b> 또는 총열량의 약 10% 이하로 낮추고, 지방을 주된 에너지원으로 사용하면서 혈중 β-hydroxybutyrate(BHB)가 올라가는 상태를 ketogenic diet로 다룹니다.</p>
<p>반면 하루 80–130 g 정도 탄수화물을 먹는 low-carb 식단은 반드시 지속적인 영양성 케토시스를 만들지는 않습니다. 연구 논문을 읽을 때 ‘저탄수’와 ‘케토제닉’을 섞으면 효과가 과장될 수 있습니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>Low-carb</b><span>탄수화물을 줄이지만 반드시 ketone이 지속적으로 올라가지는 않음.</span></div>
  <div class="evidence-card"><b>Ketogenic diet</b><span>대개 ≤50 g/day 수준의 매우 낮은 탄수화물과 높은 지방으로 nutritional ketosis 유도.</span></div>
  <div class="evidence-card"><b>Therapeutic KD</b><span>난치성 간질 등에서 사용하는 의료적 식단은 지방:단백질+탄수화물 비율이 훨씬 엄격할 수 있음.</span></div>
</div>

<figure class="story-photo molecular-figure"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Ketogenic_diets_pie_MCT.svg" alt="일반식과 고전적 케토제닉 식단의 탄수화물 단백질 지방 비율 비교" loading="lazy"><figcaption>일반식·Atkins 유도기·고전적 ketogenic diet·MCT ketogenic diet의 에너지 구성을 비교한 도식입니다. 고전적 치료용 ketogenic diet는 일상적인 저탄수 식단보다 훨씬 높은 지방 비율을 사용합니다. Wikimedia Commons, Public Domain.</figcaption></figure>

<h2>02. 탄수화물을 줄이면 왜 케톤이 만들어질까?</h2>
<p>탄수화물 섭취가 크게 줄고 insulin 신호가 낮아지면 지방조직의 지방산이 더 많이 동원됩니다. 간은 이 지방산을 β-oxidation으로 처리하면서 acetyl-CoA를 만들고, 일부를 <b>acetoacetate와 β-hydroxybutyrate(BHB)</b> 같은 ketone body로 전환합니다.</p>
<div class="pathway" aria-label="ketogenic metabolism simplified">
  <div class="pathway-step"><b>탄수화물 ↓</b><span>Insulin ↓ · 지방산 동원 ↑</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>간 지방산 산화</b><span>Acetyl-CoA · ketogenesis</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>Ketone bodies ↑</b><span>BHB · acetoacetate → 뇌·근육의 연료</span></div>
</div>
<p>여기서 가장 중요한 점은 <b>ketone은 단순한 연료만이 아니라 신호분자</b>이기도 하다는 것입니다. BHB는 HDAC, 염증경로, 산화스트레스 관련 신호에 영향을 줄 수 있습니다. 이 기전 때문에 ketogenic diet는 항노화 분야에서 관심을 받았습니다.</p>

<h2>03. BHB와 inflammaging: 기전은 흥미롭지만 임상결과는 별개의 문제다</h2>
<p>2015년 <i>Nature Medicine</i> 연구는 BHB가 세포와 동물모델에서 <b>NLRP3 inflammasome</b> 활성과 IL-1β·IL-18 생성 경로를 억제할 수 있음을 보여주며 큰 관심을 받았습니다. NLRP3는 대사질환과 노화 관련 만성 염증에서 자주 연구되는 경로입니다.</p>
<p>그러나 이 결과를 “케토식을 하면 인간의 inflammaging이 억제되어 오래 산다”고 바로 연결하면 안 됩니다. 2025–2026년 후속 기전연구는 BHB의 NLRP3 억제가 pH·화학적 형태 등 조건에 따라 달라질 수 있다는 점도 보여줬습니다.</p>
<div class="takeaway"><strong>근거 사슬을 분리해서 보기</strong><p><b>BHB ↑ → 특정 염증경로 변화</b>는 가능한 기전입니다. 하지만 <b>염증 biomarker 변화 → 만성질환 감소 → 건강수명 증가 → 인간 수명 연장</b>의 전체 사슬은 아직 검증되지 않았습니다.</p></div>

<h2>04. 체중감량에는 실제로 도움이 되나?</h2>
<p>네. 특히 과체중·비만에서 단기간 체중감량은 반복적으로 관찰됩니다. 2025년 33개 RCT, 2,821명을 포함한 메타분석에서는 ketogenic/low-carbohydrate diet가 체중, BMI, 체지방률을 유의하게 낮췄습니다. 탄수화물을 50 g/day 이하로 제한한 연구에서 효과가 더 뚜렷했습니다.</p>
<p>다만 중요한 반문이 있습니다. <b>칼로리를 비슷하게 맞춰도 ketogenic diet가 특별히 더 많이 빠질까?</b> 2026년 에너지 처방을 비슷하게 맞춘 무작위시험만 분석한 메타분석에서는 ketogenic diet가 고탄수 비교식보다 평균 약 1.5 kg 더 줄었지만, 연구 수가 적고 대부분 단기간이어서 근거 확실성은 낮았습니다.</p>
<p>즉 ketogenic diet가 체중감량에 유용할 수는 있지만, 열역학을 무시하는 ‘대사 마법’으로 볼 근거는 없습니다. 식욕 감소, 단백질 섭취, 식품 선택 제한, glycogen·수분 변화와 실제 지방감량이 함께 작용합니다.</p>

<h2>05. 혈당과 제2형 당뇨병: 효과는 있지만 ‘지중해식보다 무조건 우월’하지는 않다</h2>
<p>탄수화물을 크게 줄이면 식후 혈당 변동과 insulin 요구량이 낮아질 수 있으므로, 전당뇨·제2형 당뇨병에서 ketogenic diet가 관심을 받는 것은 자연스럽습니다.</p>
<p>하지만 2022년 <b>Keto-Med randomized crossover trial</b>은 균형 잡힌 비교를 보여줍니다. 전당뇨 또는 T2DM 성인 40명이 well-formulated ketogenic diet와 Mediterranean-plus diet를 각각 12주 경험했습니다. 완성 자료가 있는 33명에서 <b>HbA1c는 두 식단 사이 유의한 차이가 없었습니다.</b></p>
<p>반면 ketogenic diet는 triglyceride를 더 많이 낮췄고(-16% vs -5%), LDL-C는 반대로 더 높였습니다(+10% vs -5%). 또한 Mediterranean-plus는 legumes·과일·통곡물을 포함해 식이섬유와 일부 미량영양소 섭취가 더 좋았습니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>혈당</b><span>탄수화물 제한 자체로 공복·식후 혈당과 HbA1c가 개선될 수 있음.</span></div>
  <div class="evidence-card"><b>중성지방</b><span>대체로 감소 방향. Keto-Med에서도 Mediterranean-plus보다 더 크게 감소.</span></div>
  <div class="evidence-card"><b>LDL/ApoB</b><span>일부 사람에서는 큰 폭으로 상승 가능. 장기 심혈관 위험을 무시하면 안 됨.</span></div>
</div>

<h2>06. LDL이 올라가도 중성지방이 내려가면 괜찮은가?</h2>
<p>케토제닉 식단 논쟁에서 가장 중요한 질문입니다. ketogenic diet는 흔히 triglyceride를 낮추고 HDL을 올리지만, 동시에 LDL-C와 ApoB가 상승하는 사람이 있습니다.</p>
<p>2021년 건강한 정상체중 여성의 randomized controlled feeding trial에서는 4주간 탄수화물 4%, 지방 77%의 ketogenic LCHF 식단을 먹었을 때 <b>17명 모두에서 LDL-C가 상승</b>했고, 평균 치료효과는 +1.82 mmol/L였습니다. ApoB-100도 증가했습니다.</p>
<p>2026년 심혈관 건강에 초점을 둔 24개 연구 메타분석에서는 ketogenic diet가 비교식보다 평균 <b>LDL-C 약 12.2 mg/dL 증가</b>, triglyceride 약 <b>16.1 mg/dL 감소</b>를 보였습니다. 혈당·HbA1c·체중·수축기혈압은 개선되는 방향이었습니다.</p>
<p>따라서 “TG/HDL 비율이 좋아졌으니 LDL·ApoB는 신경 쓰지 않아도 된다”는 결론은 근거를 넘어섭니다. 반대로 LDL이 조금 올랐다고 ketogenic diet의 모든 대사이득이 무의미한 것도 아닙니다. <b>둘 다 실제 변화이며 함께 평가해야 합니다.</b></p>

<h2>07. 지방의 ‘양’보다 ‘종류’가 중요하다</h2>
<p>같은 ketogenic diet라도 버터·가공육·코코넛오일 중심 식단과 EVOO·아보카도·견과·생선·씨앗 중심 식단은 영양학적으로 동일하지 않습니다.</p>
<p>특히 LDL/ApoB 반응이 큰 사람이라면 saturated fat 비율을 낮추고 monounsaturated·polyunsaturated fat을 늘리는 접근이 더 합리적입니다. 또한 잎채소·버섯·십자화과·견과·씨앗 등을 활용하면 매우 낮은 탄수화물 범위에서도 식이섬유를 어느 정도 확보할 수 있습니다.</p>
<div class="takeaway"><strong>‘Keto’라는 이름보다 식품의 질</strong><p>베이컨·버터만 늘린 식단과 <b>EVOO + 생선 + 견과 + 아보카도 + 저전분 채소 + 충분한 단백질</b>로 구성한 식단은 같은 탄수화물 수치라도 장기적인 지질·장내미생물·미량영양소 측면에서 다르게 작용할 수 있습니다.</p></div>

<h2>08. 지방간(MASLD)에는 도움이 될까?</h2>
<p>체중과 insulin resistance를 낮추면 간 지방도 줄어들 가능성이 있습니다. 실제로 low-carb/ketogenic intervention에서 간 지방·간효소 개선 신호가 보고됐습니다.</p>
<p>다만 2025년 24명의 MASLD 환자를 대상으로 한 8주 RCT에서는 ketogenic diet가 DASH 교육군보다 체중은 더 많이 줄였지만, 주요결과인 elastography 기반 <b>간 stiffness와 steatosis의 군간 차이는 유의하지 않았습니다.</b> 작은 표본·짧은 기간이어서 결론을 확정하기 어렵지만, “케토 = 지방간 치료”라고 단순화해서는 안 된다는 좋은 사례입니다.</p>

<h2>09. 뇌는 케톤을 좋아할까? — MCI와 Alzheimer 연구</h2>
<p>뇌의 glucose 이용능력이 떨어지는 MCI·Alzheimer disease에서 ketone이 대체연료가 될 수 있다는 가설은 오래 연구돼 왔습니다. MCT, ketone ester, ketogenic diet 등 서로 다른 방법으로 brain ketone availability를 높이는 시험들이 있습니다.</p>
<p>2026년 고령 MCI·Alzheimer 환자를 대상으로 한 systematic review/meta-analysis에서는 ketogenic-related intervention이 ketone을 확실히 올렸고, 일부 인지지표에서 개선 신호가 있었습니다. 동시에 total cholesterol과 LDL-C 상승도 관찰됐습니다.</p>
<p>따라서 현재 단계에서는 <b>“뇌 연료를 바꿀 수 있다”는 점은 설득력이 있지만 “치매를 예방하거나 진행을 확실히 늦춘다”는 결론은 아직 이릅니다.</b></p>

<h2>10. 쥐 수명 연구는 왜 유명해졌나?</h2>
<p>2017년 <i>Cell Metabolism</i>에는 ketogenic diet와 노화를 연결한 두 개의 유명한 생쥐 연구가 같은 시기에 발표됐습니다.</p>
<p>Roberts 연구에서는 성체 수컷 생쥐의 ketogenic diet가 중앙수명과 일부 건강지표를 개선했습니다. Newman 연구에서는 ketogenic diet 또는 주기적 ketogenic diet가 <b>중년기 사망을 줄이고 기억·운동 기능을 개선</b>했지만 최대수명은 늘리지 않았습니다.</p>
<p>이 결과는 geroscience 관점에서 매우 흥미롭지만, 동물의 사료 조성·에너지 균형·유전배경과 인간의 실제 식생활은 크게 다릅니다. 무엇보다 <b>사람에서 ketogenic diet가 수명을 연장했다는 임상시험은 없습니다.</b></p>

<h2>11. ‘생물학적 나이’가 줄었다는 연구는 어떻게 봐야 할까?</h2>
<p>2025년 multiple sclerosis 환자를 대상으로 한 기존 식이시험의 2차 분석에서는 6개월 modified ketogenic diet 후 metabolomic age가 낮아지는 신호가 보고됐습니다. 흥미로운 결과이지만 질환 특이적 소규모 연구이고, 사전에 설계된 인간 수명·건강수명 RCT가 아닙니다.</p>
<p><b>metabolomic age, epigenetic clock, inflammatory biomarker가 좋아지는 것과 실제 노화속도가 늦어져 장애·질병·사망이 감소하는 것은 다른 수준의 증거</b>입니다. 이 블로그에서는 이런 surrogate를 ‘항노화 증명’으로 표현하지 않습니다.</p>

<h2>12. 근육과 장기 케토: 단백질이 부족하면 안 된다</h2>
<p>체중을 줄이는 과정에서 지방만 빠지는 것이 이상적이지만 실제로는 lean mass도 일부 줄 수 있습니다. 특히 중년 이후에는 근육보존이 건강수명에 매우 중요합니다.</p>
<p>2026년 노화·sarcopenia 리뷰는 BHB와 ketogenic diet가 근육 대사에 도움이 될 가능성을 정리했지만, 사람의 장기간 근육보존 근거는 아직 제한적이라고 평가했습니다. 따라서 장기 ketogenic diet를 한다면 <b>충분한 단백질, 저항운동, 총에너지 부족의 과도함을 피하는 것</b>이 중요합니다.</p>

<h2>13. Nutritional ketosis와 ketoacidosis는 다르다</h2>
<p>건강한 사람의 nutritional ketosis에서는 BHB가 보통 약 0.5–3 mmol/L 범위로 올라가면서 혈당과 산-염기 균형이 대체로 유지됩니다. 반면 diabetic ketoacidosis(DKA)는 insulin 부족과 함께 ketone과 혈당이 병적으로 상승하고 산증이 생기는 응급상태입니다.</p>
<p>두 상태는 같은 것이 아닙니다. 하지만 <b>제1형 당뇨병, SGLT2 inhibitor 사용, 반복되는 구토·탈수, 임신, 특정 대사질환</b> 등에서는 안전성이 달라질 수 있으므로 극단적 탄수화물 제한을 독자적으로 시작할 문제가 아닙니다.</p>

<h2>14. 부작용과 순응도: ‘keto flu’보다 더 중요한 장기 문제</h2>
<p>초기에는 두통, 피로, 어지럼, 변비, 메스꺼움 같은 이른바 keto-induction 증상이 생길 수 있습니다. 탄수화물을 줄이면서 glycogen과 함께 수분·나트륨 배출이 늘어나는 것이 일부 증상에 관여합니다.</p>
<p>2026년 prospective intervention 36개를 분석한 systematic review에서는 참가자의 약 <b>43%</b>에서 적어도 하나의 adverse event가 기록됐고, 가장 흔한 범주는 위장관 증상이었습니다. constipation이 가장 흔한 개별 증상이었습니다. 엄격한 식단일수록 부작용 빈도·강도가 더 높았습니다.</p>
<p>장기간 ketogenic diet 연구에서는 kidney stone도 별도 고려사항입니다. 2021년 36개 연구·2,795명을 합친 분석에서 전체 kidney stone 발생률 추정치는 5.9%였습니다. 다만 이 데이터에는 간질 치료용의 엄격한 ketogenic diet와 성인 연구가 함께 포함돼 일반적인 생활식단에 그대로 적용할 수는 없습니다.</p>

<h2>15. 근거 등급 — 어디까지 말할 수 있을까?</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>Ketone 생성 · A</b><span>탄수화물을 충분히 낮추면 BHB가 상승한다는 점은 확실함.</span></div>
  <div class="evidence-card"><b>단기 체중감량 · B+</b><span>과체중·비만에서 효과가 반복됨. 장기 우월성은 덜 확실.</span></div>
  <div class="evidence-card"><b>혈당/TG · B</b><span>특히 insulin resistance·T2DM에서 개선 가능. 비교식과 조건에 따라 크기 달라짐.</span></div>
  <div class="evidence-card"><b>LDL/ApoB · 주의</b><span>평균 상승 및 일부 hyper-responder 존재. 개인 모니터링이 중요.</span></div>
  <div class="evidence-card"><b>인지기능 · C+</b><span>MCI/AD에서 유망한 신호가 있으나 연구 규모·기간 제한.</span></div>
  <div class="evidence-card"><b>인간 건강수명·수명 · 미확립</b><span>동물 데이터는 흥미롭지만 인간 hard outcome 근거 없음.</span></div>
</div>

<h2>16. LONGEVITY JOURNAL의 결론</h2>
<div class="takeaway"><strong>현재 가장 정확한 표현</strong><p><b>케토제닉 식단은 ‘항노화 식단’이라기보다 대사연료를 glucose 중심에서 fat/ketone 중심으로 강하게 이동시키는 치료·영양 전략입니다.</b> 체중, 혈당, 중성지방에는 유용할 수 있고 BHB의 geroscience 기전도 흥미롭습니다. 하지만 LDL/ApoB 상승, 식이섬유·미량영양소, 장기 순응도와 근육보존을 함께 보지 않으면 장기 건강을 오히려 단순화하게 됩니다.</p></div>
<p><b>Ketosis ≠ fasting ≠ autophagy ≠ anti-aging ≠ longevity.</b> 각각 연결될 가능성은 있지만 같은 뜻은 아닙니다. 인간 건강수명을 위해서는 특정 ketone 수치보다 체중·허리둘레·혈압·HbA1c·ApoB/LDL·근력·VO₂max·수면·식품의 질 같은 전체 그림이 더 중요합니다.</p>

<h2>근거자료 — 발표 시간순</h2>
<div class="timeline">
${paper('2015','Youm YH, et al. Nature Medicine.','BHB가 NLRP3 inflammasome 활성과 IL-1β/IL-18 경로를 억제할 수 있음을 세포·동물모델에서 제시. 기전 근거이지 인간 수명시험은 아님.','https://pubmed.ncbi.nlm.nih.gov/25686106/')}
${paper('2017','Roberts MN, et al. Cell Metabolism.','성체 수컷 생쥐 ketogenic diet에서 중앙수명·건강지표 개선. 인간 적용은 미확립.','https://pubmed.ncbi.nlm.nih.gov/28877457/')}
${paper('2017','Newman JC, et al. Cell Metabolism.','수컷 생쥐에서 midlife mortality 감소와 기억·운동기능 개선, maximum lifespan은 증가하지 않음.','https://pubmed.ncbi.nlm.nih.gov/28877458/')}
${paper('2021','Burén J, et al. Nutrients.','건강한 정상체중 여성 crossover feeding RCT. ketogenic LCHF가 모든 완료자에서 LDL-C를 올렸고 ApoB-100도 증가.','https://pubmed.ncbi.nlm.nih.gov/33801247/')}
${paper('2021','Acharya P, et al. Diseases.','36개 연구·2,795명 ketogenic diet 사용자에서 kidney stone 발생률을 종합. 전체 추정 약 5.9%.','https://pubmed.ncbi.nlm.nih.gov/34070285/')}
${paper('2022','Gardner CD, et al. Am J Clin Nutr — Keto-Med.','전당뇨/T2DM crossover RCT. HbA1c는 ketogenic과 Mediterranean-plus 사이 차이 없음. Keto는 TG↓, LDL↑.','https://pubmed.ncbi.nlm.nih.gov/35641199/')}
${paper('2023','Patikorn C, et al. BMC Medicine.','17개 meta-analysis, 68개 RCT umbrella review. 여러 대사·신경학적 결과에서 효과 신호가 있으나 다수 근거는 낮거나 중등도.','https://pubmed.ncbi.nlm.nih.gov/37231411/')}
${paper('2025','Leung LYL, et al. Clinical Nutrition.','33개 RCT·2,821명. overweight/obesity에서 ketogenic/low-carb가 체중·BMI·체지방률 개선. 이질성 큼.','https://pubmed.ncbi.nlm.nih.gov/39854812/')}
${paper('2025','MASLD randomized trial.','24명, 8주. ketogenic diet가 DASH 교육보다 체중은 더 감소했지만 liver stiffness·steatosis의 유의한 군간 차이는 없음.','https://pubmed.ncbi.nlm.nih.gov/39834906/')}
${paper('2025','Fasting-mimicking / ketogenic secondary aging analysis.','Multiple sclerosis 환자에서 modified ketogenic diet 후 metabolomic age 감소 신호. 질환 특이적 2차 분석이며 건강수명 증명 아님.','https://pubmed.ncbi.nlm.nih.gov/40970462/')}
${paper('2026','Schopf C, et al. BMC Nutrition.','36개 prospective studies의 adverse-event review. 위장관 증상, 특히 constipation이 흔했고 stricter diet에서 부담 증가.','https://pubmed.ncbi.nlm.nih.gov/41715236/')}
${paper('2026','Ketogenic diets and cardiovascular health.','24개 연구 메타분석. LDL-C 평균 +12.2 mg/dL, TG -16.1 mg/dL; 체중·혈당·HbA1c·SBP 개선 방향.','https://pubmed.ncbi.nlm.nih.gov/42414899/')}
${paper('2026','Energy-matched ketogenic weight-loss meta-analysis.','에너지 처방을 맞춘 RCT에서 약 1.5 kg 추가 감소 신호. 연구 수가 적고 근거 확실성 낮음.','https://pubmed.ncbi.nlm.nih.gov/42588148/')}
${paper('2026','Ketogenic strategies and cognitive impairment meta-analysis.','MCI/Alzheimer 고령자에서 ketone·일부 인지기능 개선 신호, 동시에 total cholesterol·LDL 상승.','https://pubmed.ncbi.nlm.nih.gov/42753449/')}
</div>
<p class="editor-note">최종 근거 검토: 2026-10-09 · 체중·혈당·지질과 같은 단기 대사효과와 인간 건강수명·수명은 구분해 해석했습니다. 약물치료 중이거나 당뇨·신장질환·임신 등 특별한 상황에서는 의료진과 상의 없이 극단적 탄수화물 제한을 시작하지 않는 것이 안전합니다.</p>
`
});
})();

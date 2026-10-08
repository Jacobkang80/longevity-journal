(()=>{
const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
if(posts.some(x=>x.slug==='intermittent-fasting-evidence'))return;
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
posts.push({
  slug:'intermittent-fasting-evidence',
  category:'health',
  date:'2023-07-29',
  title:'간헐적 단식은 정말 노화를 늦출까? — TRE, 24시간 단식, 장기 단식과 자가포식의 근거',
  excerpt:'단식은 체중·인슐린·케톤·식사시간을 동시에 바꾸는 강력한 생활개입입니다. 하지만 체중감량, 자가포식, 건강수명, 수명 연장은 서로 다른 질문입니다. 2018년 eTRF부터 2026년 네트워크 메타분석까지 정리합니다.',
  tags:['간헐적 단식','Intermittent fasting','Time-restricted eating','TRE','Autophagy','Ketosis','Insulin sensitivity','Circadian rhythm','Healthspan','Longevity Lifestyle'],
  html:`
<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-07-29 · <a href="https://myepic2.tistory.com/11" target="_blank" rel="noopener noreferrer">간헐적 단식이 건강에 미치는 영향 ↗</a> · 원문에는 35개 문단과 2장의 이미지가 있었습니다. LONGEVITY JOURNAL 근거 전면 업데이트 2026-10-09</p>

<figure class="story-hero"><img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Circadian_rhythm_labeled.jpg" alt="빛과 생체시계를 설명하는 NIH 일주기 리듬 도식" loading="eager"><figcaption>단식의 효과는 ‘몇 시간을 굶었는가’만으로 설명되지 않습니다. 식사시간은 빛·수면과 함께 말초 생체시계에 영향을 줄 수 있습니다. 이미지: National Institute of General Medical Sciences / NIH, Public Domain.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>간헐적 단식은 인간에서 체중과 일부 대사지표를 개선할 수 있지만, 검증된 수명연장법은 아닙니다.</b> 2025년 99개 무작위시험·6,582명을 분석한 네트워크 메타분석에서는 대부분의 간헐적 단식 전략이 자유식보다 체중을 줄였지만, 일반적인 지속적 칼로리 제한보다 뚜렷하게 우월한 것은 아니었습니다. 2026년 TRE 메타분석에서는 체중·허리둘레·공복혈당·인슐린·중성지방 등이 개선됐고, 대체로 <b>늦게 먹기보다 이른 시간대에 먹는 편</b>이 유리했습니다. 그러나 자가포식, 암 예방, 치매 예방, 인간 건강수명·수명 연장은 아직 직접 입증되지 않았습니다.</p></div>

<h2>01. ‘간헐적 단식’은 하나의 방법이 아니다</h2>
<p>간헐적 단식(intermittent fasting)은 식사하지 않는 시간을 의도적으로 늘리는 여러 전략을 묶어 부르는 말입니다. 같은 ‘단식’이라도 생리적 부담과 근거 수준은 크게 다릅니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>12–14시간 overnight fast</b><span>저녁 식사 후 다음날 아침까지. 가장 완만하고 일상에 적용하기 쉬운 형태.</span></div>
  <div class="evidence-card"><b>TRE 8–10시간</b><span>하루 식사시간을 일정 창(window) 안에 제한. 현재 인간 RCT가 가장 많은 형태.</span></div>
  <div class="evidence-card"><b>24시간·격일 단식</b><span>ADF 또는 whole-day fasting. 칼로리 적자가 더 커질 수 있고 순응도 부담도 증가.</span></div>
  <div class="evidence-card"><b>48시간 이상 장기 단식</b><span>케톤·체중 변화가 크지만 근손실·요산·전해질·재급식 관리가 중요. TRE와 같은 근거로 취급하면 안 됨.</span></div>
</div>

<h2>02. 단식을 하면 몸에서 실제로 무엇이 바뀌나?</h2>
<p>식사 후에는 인슐린이 올라가고 포도당과 지방이 저장되는 방향으로 대사가 움직입니다. 공복이 길어지면 간 glycogen 사용이 늘고, 이후 지방산 산화와 ketone production의 비중이 커집니다. 동시에 insulin/IGF-1, AMPK, mTOR 같은 영양감지 신호도 달라집니다.</p>
<div class="pathway" aria-label="fed fasting switch simplified">
  <div class="pathway-step"><b>식후</b><span>Insulin ↑ · 저장 · 합성</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>공복 연장</b><span>Glycogen ↓ · 지방산 산화 ↑</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>대사 전환</b><span>Ketone ↑ · AMPK/mTOR 신호 변화</span></div>
</div>
<p>이 ‘metabolic switch’ 때문에 단식은 항노화와 자주 연결됩니다. 하지만 <b>케톤이 올랐다는 사실, 인슐린이 낮아졌다는 사실, mTOR 신호가 변했다는 사실은 인간의 노화가 늦어졌다는 직접 증거가 아닙니다.</b></p>

<h2>03. 2018년 eTRF 연구: 체중이 안 빠져도 대사가 좋아질 수 있을까?</h2>
<p>간헐적 단식 연구에서 중요한 전환점 중 하나가 Sutton 등의 2018년 <i>Cell Metabolism</i> 연구입니다. 전당뇨가 있는 남성에게 <b>6시간 식사창, 오후 3시 이전 저녁 종료</b>의 early time-restricted feeding(eTRF)을 5주 시행했고, 체중이 줄지 않도록 섭취량을 맞췄습니다.</p>
<p>그 결과 insulin sensitivity, β-cell responsiveness, 혈압, oxidative stress, 식욕 일부가 개선됐습니다. 즉 TRE 효과의 일부는 단순히 ‘덜 먹어서 살이 빠진 효과’만으로 설명되지 않을 가능성을 보여줬습니다.</p>
<p>다만 표본이 매우 작고 남성 전당뇨 환자라는 제한이 있어, 모든 사람에게 동일한 효과가 있다고 볼 수는 없습니다.</p>

<h2>04. 2020년 TREAT trial: 16:8이면 자동으로 살이 빠질까?</h2>
<p>반대쪽 결과도 중요합니다. 2020년 <i>JAMA Internal Medicine</i> TREAT trial은 과체중·비만 성인에게 12:00–20:00 사이에만 먹는 <b>16:8 TRE</b>를 12주 적용했습니다.</p>
<p>TRE군은 체중이 줄기는 했지만 대조군과 비교한 차이는 크지 않았고, 대사 지표의 뚜렷한 추가 이점도 확인되지 않았습니다. 일부 분석에서는 appendicular lean mass 감소 신호가 관찰돼 ‘식사시간을 줄이면 자동으로 좋은 체중감량’이라는 생각에 제동을 걸었습니다.</p>
<div class="takeaway"><strong>여기서 배울 점</strong><p><b>식사창을 줄이는 것 자체보다 무엇을, 얼마나, 언제, 어떤 단백질·운동 조건에서 먹는지가 중요합니다.</b> 같은 8시간 TRE라도 아침 중심인지 야간 중심인지, 총섭취열량이 줄었는지, 저항운동을 하는지에 따라 결과가 달라질 수 있습니다.</p></div>

<h2>05. 2025년 BMJ 네트워크 메타분석: IF가 일반 칼로리 제한보다 더 좋은가?</h2>
<p>2025년 <i>BMJ</i> 네트워크 메타분석은 <b>99개 무작위 임상시험, 6,582명</b>을 종합했습니다. alternate-day fasting(ADF), TRE, whole-day fasting, 지속적 에너지 제한(CER)을 비교했습니다.</p>
<p>대부분의 간헐적 단식과 지속적 칼로리 제한은 자유식(ad libitum)보다 체중을 줄였습니다. 하지만 <b>지속적 칼로리 제한과 직접 비교했을 때 ADF만 평균 약 1.29 kg의 추가 체중감소</b>를 보였고, 그 차이도 임상적으로 매우 큰 효과는 아니었습니다.</p>
<p>즉 “단식이라서 특별한 지방감량 효과가 난다”기보다는, 많은 사람에게 <b>식사시간 제한이 총에너지 섭취를 줄이는 구조</b>로 작동하는 경우가 많다고 보는 편이 현실적입니다.</p>

<h2>06. 2025년 Nature Medicine: 식사시간만 바꾸면 내장지방이 더 빠질까?</h2>
<p>2025년 <i>Nature Medicine</i> RCT에서는 과체중·비만 성인 <b>197명</b>을 Mediterranean diet 교육만 받는 군과 early, late, self-selected 8시간 TRE군으로 나눠 12주 비교했습니다.</p>
<p>주요평가변수인 MRI 측정 visceral adipose tissue(VAT)는 세 TRE군 모두 usual care보다 유의하게 더 줄지 않았습니다. 심각한 이상반응은 없었고 순응도는 85–88%로 높았습니다.</p>
<p>이 연구는 “8시간 창만 만들면 내장지방이 특별히 더 빠진다”는 주장을 약화시킵니다. 동시에 TRE가 비교적 시행 가능한 전략이라는 점은 보여줬습니다.</p>

<h2>07. 2026년 최신 TRE 메타분석: ‘언제 먹느냐’가 중요해졌다</h2>
<p>2026년 발표된 41개 RCT, <b>2,287명</b> 네트워크 메타분석에서는 TRE가 일반 식사보다 체중, BMI, 체지방, 허리둘레, 수축기혈압, 공복혈당, 공복인슐린, 중성지방을 개선했습니다.</p>
<p>흥미로운 점은 eating window의 길이보다 <b>식사 시점</b>이 더 일관된 차이를 보였다는 것입니다. 전반적으로 early TRE가 late TRE보다 대사지표에서 유리했습니다. 이는 낮 동안 insulin sensitivity와 thermic response가 더 높고, 야간 식사가 circadian alignment를 흐릴 수 있다는 생리와도 맞습니다.</p>
<p>다만 ‘오후 3시 이후 절대 금식’ 같은 극단적인 규칙으로 해석할 필요는 없습니다. 실제 생활에서 지속 가능한 시간표가 장기 순응도에는 더 중요할 수 있습니다.</p>

<h2>08. 자가포식(autophagy): 가장 많이 과장되는 부분</h2>
<p>단식을 이야기할 때 가장 많이 등장하는 단어가 자가포식입니다. 자가포식은 손상 단백질과 세포소기관을 분해·재활용하는 필수 세포 과정이고, nutrient sensing과 연결돼 있습니다.</p>
<p>동물과 세포에서는 fasting·amino acid deprivation이 autophagy를 활성화한다는 데이터가 매우 풍부합니다. 하지만 사람에서 “몇 시간 단식하면 자가포식이 켜진다”는 식의 정밀한 시간표는 없습니다.</p>
<p>2018년 사람 골격근 생검 연구에서는 <b>36시간 fasting이 일부 autophagy 관련 단백질과 신호에 영향을 줬지만 변화는 modest했고 훈련 상태에 따라 달랐습니다.</b> 혈액 한두 개 biomarker로 전신 자가포식 flux를 정확히 측정하는 것도 어렵습니다.</p>
<div class="takeaway"><strong>중요한 구분</strong><p><b>24시간 = 자가포식 시작, 48시간 = 최대, 72시간 = 줄기세포 재생</b> 같은 인터넷 시간표는 인간 임상시험으로 확립된 규칙이 아닙니다. 자가포식은 on/off 스위치가 아니라 조직·영양상태·운동·수면·질환에 따라 달라지는 연속적인 과정입니다.</p></div>

<h2>09. 48시간·72시간 이상 단식은 ‘더 강한 TRE’가 아니다</h2>
<p>장기 단식은 TRE와 생리적 강도가 다릅니다. 5일 water-only fasting 연구에서는 체중, 허리둘레, 혈압, 인슐린, IGF-1 등이 내려가고 ketone이 크게 올랐지만, 41명 규모의 비교적 작은 단일군 연구였습니다.</p>
<p>2023년 장기 water fasting 인간시험 리뷰에서는 5–20일 단식에서 체중이 2–10% 줄었지만, 보고된 체중감량의 상당 부분이 lean mass였습니다. 혈압은 대체로 낮아졌지만 지질·혈당 효과는 일관되지 않았고, 일부 이점은 refeeding 뒤 사라졌습니다.</p>
<p>또한 장기 단식에서는 uric acid 상승, 어지럼증, 탈수, 저혈압, 전해질 이상, 약물과의 상호작용, 근육손실, 재급식 문제가 더 중요합니다. 따라서 <b>‘16:8이 좋으니 72시간은 세 배 좋다’는 선형적 사고는 맞지 않습니다.</b></p>

<h2>10. 근육과 단백질: 건강수명 관점에서 빠뜨리면 안 되는 축</h2>
<p>체중이 줄어드는 것보다 중요한 것은 <b>무엇이 줄었는가</b>입니다. 노화가 진행될수록 근육량과 근력 보존이 중요해지므로, 식사창을 너무 좁혀 단백질 섭취량이나 분배가 무너지면 장기 건강에는 불리할 수 있습니다.</p>
<p>최근 연구들은 TRE를 하더라도 충분한 단백질 섭취와 resistance training을 병행하면 lean mass 보존 가능성이 높아진다는 방향입니다. 따라서 체중감량이 목적이어도 체중계 숫자보다 허리둘레, 근력, 체성분, 운동수행능력을 함께 보는 편이 낫습니다.</p>

<h2>11. 염증과 inflammaging에는 어떤가?</h2>
<p>간헐적 단식은 체중감소, 내장지방 감소, 인슐린 개선을 통해 만성 저등급 염증을 낮출 가능성이 있습니다. 일부 메타분석에서 CRP, TNF-α 같은 지표가 감소하지만 결과는 연구군·체중변화·프로토콜에 따라 일관되지 않습니다.</p>
<p>여기서도 LONGEVITY JOURNAL의 원칙은 같습니다. <b>염증 marker 감소 ≠ 인간 노화속도 감소 ≠ 수명연장 증명</b>입니다. 단식이 inflammaging의 일부 경로에 영향을 줄 수 있다는 것과, 실제 건강수명을 늘렸다는 것은 별개의 단계입니다.</p>

<h2>12. 수명 연장 근거는 어디까지 왔나?</h2>
<p>효모·선충·초파리·생쥐 같은 모델생물에서는 fasting, dietary restriction, fasting-mimicking intervention이 수명과 건강수명에 영향을 주는 연구가 많습니다. 하지만 사람에게서 수십 년간 무작위배정해 사망률과 건강수명을 본 연구는 사실상 없습니다.</p>
<p>현재 인간에서 비교적 잘 입증된 것은 <b>체중, 허리둘레, insulin sensitivity, 일부 혈압·지질 지표</b>입니다. 그 다음 단계인 심근경색·뇌졸중·치매·암·사망률 감소는 훨씬 더 긴 연구가 필요합니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>체중감량</b><span>근거 강함 · 다수 RCT/메타분석</span></div>
  <div class="evidence-card"><b>인슐린·혈당</b><span>근거 중간 · 대상군과 시간대에 따라 차이</span></div>
  <div class="evidence-card"><b>염증 marker</b><span>근거 중간~낮음 · 결과 불균일</span></div>
  <div class="evidence-card"><b>자가포식 증가</b><span>기전 강함 · 인간 직접 측정은 제한적</span></div>
  <div class="evidence-card"><b>건강수명·수명 연장</b><span>인간 직접 근거 없음</span></div>
  <div class="evidence-card"><b>치매·암 예방</b><span>확립되지 않음</span></div>
</div>

<h2>13. 실생활에서는 어떤 방식이 가장 합리적인가?</h2>
<p>현재 근거만 놓고 보면 가장 현실적인 접근은 ‘오래 굶을수록 좋다’가 아니라 <b>야간 식사를 줄이고, 일정한 식사시간을 만들고, 총열량과 식품 질을 관리하는 것</b>입니다.</p>
<p>많은 사람에게 12–14시간 overnight fasting이나 8–10시간 TRE가 사회생활·운동·수면과 타협하기 쉽습니다. 가능하다면 식사창을 너무 늦게 밀기보다 낮 시간대에 두는 편이 생체리듬 측면에서 유리할 가능성이 있습니다.</p>
<p>반대로 당뇨약·인슐린을 사용하는 사람, 임신·수유 중인 사람, 저체중, 섭식장애 병력, 성장기 청소년, 신장질환·통풍 위험이 있는 사람의 장기 단식은 별도의 의학적 판단이 필요합니다.</p>

<h2>14. LONGEVITY JOURNAL 결론</h2>
<div class="takeaway"><strong>최종 판정</strong><p><b>간헐적 단식은 ‘마법의 항노화 스위치’라기보다 식사시간과 에너지 섭취를 구조화하는 강력한 행동 도구입니다.</b> 인간 근거가 가장 좋은 영역은 체중과 대사건강이며, early TRE가 late TRE보다 유리할 가능성이 커지고 있습니다. 그러나 자가포식, 줄기세포 재생, 암·치매 예방, 인간 수명연장 같은 주장은 현재 근거보다 앞서가 있습니다.</p><p><b>Fasting → ketone/insulin 변화 → autophagy·대사 개선 → 질병 감소 → healthspan/lifespan 증가</b>라는 전체 사슬은 아직 인간에서 완성되지 않았습니다.</p></div>

<h2>근거자료 · 발표연도순</h2>
<div class="timeline">
${paper('2018','Sutton EF et al. Early Time-Restricted Feeding Improves Insulin Sensitivity... · Cell Metabolism','전당뇨 남성, 5주 crossover controlled-feeding. 체중감소 없이 insulin sensitivity·β-cell function·혈압·oxidative stress 개선. 작은 표본의 proof-of-concept. PMID 29754952.','https://pubmed.ncbi.nlm.nih.gov/29754952/')}
${paper('2018','Møller AB et al. Training state and skeletal muscle autophagy in response to 36 h of fasting · Journal of Applied Physiology','사람 골격근 생검. 36시간 fasting은 일부 autophagy 관련 신호를 변화시켰지만 효과는 modest하고 훈련상태에 따라 달랐음. PMID 30161009.','https://pubmed.ncbi.nlm.nih.gov/30161009/')}
${paper('2020','Lowe DA et al. TREAT Randomized Clinical Trial · JAMA Internal Medicine','과체중·비만 성인의 16:8 TRE 12주. 대조군 대비 체중·대사 이점이 제한적이었고 lean mass 감소 신호가 제기됨. PMID 32986097.','https://pubmed.ncbi.nlm.nih.gov/32986097/')}
${paper('2021','Jiang Y et al. Five-day water-only fasting... · Clinical and Translational Medicine','정상체중 성인에서 5일 water-only fasting 전후 대사지표·ketone·IGF-1 등을 평가. 단일군·소규모라 수명 효과를 판단할 수 없음. PMID 34459130.','https://pubmed.ncbi.nlm.nih.gov/34459130/')}
${paper('2023','Efficacy and safety of prolonged water fasting: a narrative review of human trials','5–20일 fasting 인간 연구 검토. ketone·체중·혈압 변화는 크지만 lean mass 손실과 재급식·안전성 문제를 강조. PMID 37377031.','https://pubmed.ncbi.nlm.nih.gov/37377031/')}
${paper('2024','Early time-restricted eating meta-analysis · Diabetes & Metabolic Syndrome','13 RCT, 859명. early TRE가 체중·체지방·허리둘레·내장지방과 일부 염증지표를 개선. PMID 38335858.','https://pubmed.ncbi.nlm.nih.gov/38335858/')}
${paper('2024','Intermittent fasting in prediabetes/type 2 diabetes meta-analysis · Diabetes Obesity & Metabolism','14 연구, 1,101명. 체중·HbA1c·공복혈당·일부 지질 개선. 다른 지표는 유의하지 않음. PMID 38956175.','https://pubmed.ncbi.nlm.nih.gov/38956175/')}
${paper('2025','Dote-Montero M et al. Early, late and self-selected TRE · Nature Medicine','197명, 12주 RCT. Mediterranean-diet usual care에 8시간 TRE를 추가해도 주요평가변수인 visceral fat 추가 감소는 없었음. PMID 39775037.','https://pubmed.ncbi.nlm.nih.gov/39775037/')}
${paper('2025','Intermittent fasting strategies network meta-analysis · BMJ','99 RCT, 6,582명. IF와 지속적 칼로리 제한 모두 자유식보다 체중 감소. CER 대비 뚜렷한 추가 이점은 제한적. PMID 40533200.','https://pubmed.ncbi.nlm.nih.gov/40533200/')}
${paper('2026','Effects of timing and eating duration of TRE · systematic review and network meta-analysis','41 RCT, 2,287명. TRE가 여러 대사지표를 개선했고 early TRE가 late TRE보다 대체로 유리. PMID 41586347.','https://pubmed.ncbi.nlm.nih.gov/41586347/')}
${paper('2026','Wu X et al. Intermittent fasting patterns vs calorie restriction · Nutrition Reviews','여러 IF 패턴과 칼로리 제한 강도를 비교한 네트워크 메타분석. 체중·대사지표 효과는 전략별 차이가 있으나 장기 수명 효과는 평가하지 못함. PMID 40367516.','https://pubmed.ncbi.nlm.nih.gov/40367516/')}
</div>
<p class="editor-note"><strong>편집 원칙:</strong> 이 글은 체중·혈당 같은 surrogate endpoint와 실제 질병·건강수명·사망률을 구분합니다. 단식시간이 길다고 효과가 선형적으로 커진다고 가정하지 않습니다.</p>
`
});
})();
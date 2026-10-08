(()=>{
const p=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='hiit-evidence-guide');
if(!p)return;
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
Object.assign(p,{
  date:'2023-07-29',
  title:'HIIT는 최고의 항노화 운동일까? — VO₂max, 미토콘드리아, 염증, 건강수명의 근거',
  excerpt:'HIIT는 VO₂max를 끌어올리는 데 매우 강력하지만, “강도가 높을수록 무조건 더 오래 산다”는 증거는 없습니다. 5년 Generation 100부터 2026년 최신 리뷰까지 근거를 정리합니다.',
  tags:['HIIT','High-intensity interval training','VO2max','Cardiorespiratory fitness','Mitochondria','Inflammaging','Generation 100','Zone 2','Aging','Running','Longevity Exercise'],
  html:`
<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-07-29 · <a href="https://myepic2.tistory.com/17" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a> · LONGEVITY JOURNAL 근거 전면 업데이트 2026-10-09</p>

<figure class="story-hero"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Aerobics_class.jpg/960px-Aerobics_class.jpg" alt="고령자들이 단체 유산소 운동을 하는 모습" loading="eager"><figcaption>나이가 들어도 심폐체력은 훈련에 반응합니다. 중요한 것은 ‘젊을 때처럼 무조건 세게’가 아니라, 현재 체력에 맞게 강도를 정하고 회복을 확보하는 것입니다. 사진: Bill Branson / National Cancer Institute, Public Domain.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>HIIT는 인간 노화 연구에서 가장 실용적인 ‘고강도 자극’ 중 하나지만, 검증된 수명연장 처방은 아닙니다.</b> 60세 이상을 대상으로 한 2024년 메타분석에서는 HIIT가 비운동군보다 심폐체력(CRF), 수축기혈압, 체지방, 근력·근지구력, 균형을 개선했고 다른 운동과 비교해도 CRF에서는 작은 우위를 보였습니다. 그러나 다른 메타분석에서는 HIIT와 중강도 지속운동(MICT)의 차이가 대부분 크지 않았습니다. 1,567명을 5년 추적한 Generation 100에서도 HIIT군의 사망률이 가장 낮았지만 통계적으로 확정적인 ‘수명연장’ 효과로 보기는 어려웠습니다. 따라서 가장 정확한 결론은 <b>“HIIT는 VO₂max와 시간 효율 측면에서 매우 강력하지만, 지속 가능한 유산소운동·근력운동·회복을 대체하는 만능 항노화 운동은 아니다”</b>입니다.</p></div>

<h2>01. HIIT는 ‘죽을 만큼 뛰는 운동’이 아니다</h2>
<p>HIIT(high-intensity interval training)는 높은 강도의 운동 구간과 회복 구간을 반복하는 방식입니다. 이름 때문에 매번 전력질주를 떠올리기 쉽지만, 건강·노화 연구의 HIIT는 보통 <b>최대심박수 또는 peak heart rate의 약 85–95%</b>, 혹은 Borg RPE 6–20 척도에서 약 15–17 정도의 ‘매우 힘들지만 통제 가능한’ 강도를 사용합니다.</p>
<p><b>SIT(sprint interval training)</b>은 이보다 더 강한 ‘all-out’ 또는 near-all-out 스프린트를 쓰는 경우가 많습니다. HIIT와 SIT를 같은 것으로 생각하면 운동 강도와 안전성을 과대평가하기 쉽습니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>Zone 2 / MICT</b><span>오래 지속 가능한 중강도. 주간 유산소 볼륨과 회복 부담 관리에 강점.</span></div>
  <div class="evidence-card"><b>HIIT</b><span>보통 85–95% HRpeak 부근의 고강도 반복. VO₂max 자극을 짧은 시간에 크게 만들 수 있음.</span></div>
  <div class="evidence-card"><b>SIT</b><span>전력질주에 가까운 초고강도. 건강 목적 일반인에게 HIIT와 동일하게 권할 이유는 없음.</span></div>
</div>

<h2>02. 왜 VO₂max가 항노화 이야기의 중심에 있을까?</h2>
<p><b>VO₂max 또는 VO₂peak</b>는 운동 중 몸이 산소를 받아들여 운반하고 사용하는 최대 능력을 나타내는 지표입니다. 심장이 피를 내보내는 능력, 폐와 혈액의 산소 운반, 근육 모세혈관, 미토콘드리아의 산화능력이 모두 관여합니다.</p>
<p>VO₂max 자체가 ‘수명’은 아니지만, 낮은 심폐체력은 여러 코호트에서 높은 사망위험과 연관돼 왔습니다. 그렇다고 “VO₂max를 몇 mL/kg/min 올리면 수명이 몇 년 늘어난다”고 단순 환산할 수는 없습니다. <b>CRF는 매우 강력한 건강지표이지만 여전히 surrogate/functional marker</b>입니다.</p>

<figure class="story-photo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Finding_the_max_130305-A-UK001-003.jpg/960px-Finding_the_max_130305-A-UK001-003.jpg" alt="트레드밀에서 VO2 max 검사를 받는 사람" loading="lazy"><figcaption>VO₂max 검사는 호흡가스를 분석하며 운동 강도를 올려 최대 산소섭취 능력을 측정합니다. 사진: Cpl. William Smith / U.S. Army, Public Domain.</figcaption></figure>

<div class="pathway" aria-label="How HIIT can improve cardiorespiratory fitness">
  <div class="pathway-step"><b>고강도 반복</b><span>심박출량과 산소요구량 상승</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>적응 신호</b><span>혈관 · 미토콘드리아 · 산화효소</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>CRF 상승</b><span>VO₂max/peak · 운동능력 개선</span></div>
</div>
<p class="small-note">※ 실제 적응은 혈액량, 심실 기능, 말초 산소추출, 근육 효소와 미토콘드리아 등 여러 층에서 일어납니다.</p>

<h2>03. 2024년 메타분석: 60세 이상에서도 효과가 있는가?</h2>
<p>2024년 <i>Sports Medicine - Open</i> 메타분석은 60세 이상을 대상으로 한 <b>44개 RCT, 1,863명</b>을 분석했습니다. HIIT는 비운동군보다 resting heart rate, 수축기혈압, cardiorespiratory fitness, 체지방률, 근력, 근지구력, 균형을 유의하게 개선했습니다.</p>
<p>특히 CRF 효과크기는 <b>g=0.77</b>로 비교적 컸습니다. 다른 운동과 직접 비교했을 때도 CRF는 HIIT가 작은 우위(g=0.23)를 보였습니다. 하지만 BMI·허리둘레·이완기혈압 등에서는 모든 지표가 우월한 것은 아니었습니다.</p>

<h2>04. 그런데 “HIIT가 언제나 더 좋다”는 결론은 왜 안 나올까?</h2>
<p>같은 해 발표된 또 다른 메타분석은 60세 이상 <b>29개 시험, 1,227명</b>을 분석해 HIIT와 MICT를 비교했습니다. VO₂max, 체지방률, 혈당, 수축기·이완기혈압 등 대부분의 변화는 두 운동에서 모두 좋아졌고, 전체적으로 큰 차이는 없었습니다.</p>
<p>2024년 ‘intensity paradox’ 메타분석도 운동량(volume)을 고려하면 고강도가 중강도보다 VO₂peak를 확실히 더 올린다고 단정하기 어렵다고 결론 내렸습니다. 즉 <b>운동 강도만큼이나 총 운동량, 순응도, 현재 체력, 회복 가능성</b>이 중요합니다.</p>
<div class="takeaway"><strong>Zone 2 vs HIIT를 싸움으로 만들 필요가 없다</strong><p>현재 근거는 “둘 중 하나만 해야 한다”보다 <b>중강도 유산소로 큰 볼륨을 만들고, 회복 가능한 범위에서 HIIT로 상한을 자극하는 조합</b>에 더 잘 맞습니다. HIIT가 CRF 개선에서 작은 우위를 보이는 연구가 있지만, 지속성이 무너지면 이론적 우위는 의미가 없습니다.</p></div>

<h2>05. Generation 100: 5년 동안 실제로 해보면 오래 살까?</h2>
<p>HIIT와 장수의 관계를 이야기할 때 가장 중요한 장기 RCT 중 하나가 노르웨이의 <b>Generation 100</b>입니다. 70–77세 지역사회 거주자 1,567명을 세 그룹으로 무작위 배정해 5년 동안 추적했습니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>HIIT · n=400</b><span>주 2회. 10분 워밍업 후 4×4분, 약 85–95% HRpeak. 3분 active recovery.</span></div>
  <div class="evidence-card"><b>MICT · n=387</b><span>약 70% HRpeak에서 50분 지속운동, 주 2회.</span></div>
  <div class="evidence-card"><b>Control · n=780</b><span>국가 신체활동 권고를 따르도록 안내. 실제로는 꽤 활동적인 대조군.</span></div>
</div>
<p>5년 후 관찰된 사망률은 control 4.7%, MICT 5.9%, HIIT 3.0%였습니다. 숫자만 보면 HIIT가 매우 좋아 보입니다. 하지만 연구의 주된 비교에서 <b>MICT+HIIT를 합친 운동군은 control보다 전체 사망률을 유의하게 낮추지 못했습니다.</b> HIIT 단독은 control 및 MICT보다 낮은 사망률 ‘경향’을 보였지만 신뢰구간을 고려하면 확정적인 수명연장 효과라고 말할 수 없습니다.</p>
<p>또 control군도 운동을 많이 했고 일부는 고강도 운동까지 했습니다. 참여자들은 일반 노인집단보다 건강하고 활동적일 가능성이 높았습니다. 따라서 “주 2회 4×4를 하면 사망률이 절반이 된다”는 식의 해석은 과합니다.</p>

<h2>06. 4×4 노르웨이식 HIIT는 왜 자주 등장할까?</h2>
<p>Generation 100에서 사용한 대표적 프로토콜은 <b>10분 워밍업 → 4분 고강도 × 4회 → 각 고강도 사이 3분 active recovery</b>입니다. 고강도 구간 목표는 약 85–95% HRpeak 또는 Borg RPE 약 16이었습니다.</p>
<p>이 방식의 장점은 20–30초 전력질주보다 강도를 통제하기 쉽고, 충분한 시간 동안 높은 산소섭취 수준에 머물 수 있다는 점입니다. 그러나 이 프로토콜이 모든 사람에게 ‘최적’이라는 뜻은 아닙니다.</p>
<p>초보자, 부상 복귀자, 심혈관질환자가 처음부터 4×4를 해야 할 이유는 없습니다. 예를 들어 1–2분 고강도와 더 긴 회복으로 시작한 뒤 점진적으로 부하를 늘려도 심폐 자극을 만들 수 있습니다.</p>

<h2>07. 미토콘드리아에는 무슨 일이 생길까?</h2>
<p>고강도 운동은 근육 내 ATP 사용률을 크게 높이고 AMP/ADP, Ca²⁺, ROS 같은 신호를 빠르게 변화시킵니다. 이 과정은 AMPK, p38 MAPK, CaMK, PGC-1α 같은 경로와 연결돼 <b>미토콘드리아 생합성, 산화효소 활성, 지방산 산화능</b>의 적응을 유도할 수 있습니다.</p>
<p>하지만 여기에서도 “PGC-1α가 올라갔다 = 노화가 역전됐다”는 등식은 성립하지 않습니다. 미토콘드리아 적응은 운동의 중요한 기전이지만, 건강수명은 심혈관계·근골격계·대사·뇌·면역을 모두 포함하는 더 큰 결과입니다.</p>

<h2>08. 인슐린 감수성과 혈압</h2>
<p>HIIT는 근육의 glucose uptake, GLUT4 관련 적응, 미토콘드리아 기능과 체성분 변화를 통해 인슐린 감수성에 영향을 줄 수 있습니다. 다만 60세 이상 메타분석에서는 혈당 개선이 MICT와 비슷한 경우가 많았습니다.</p>
<p>혈압 역시 HIIT에서 좋아질 수 있지만 ‘고강도라서 더 많이 낮아진다’고 일관되게 말할 수는 없습니다. 2024년 44 RCT 분석에서는 수축기혈압 개선이 확인됐지만, MICT와의 직접 비교 우위는 작았습니다.</p>

<h2>09. inflammaging: 운동 직후 염증이 오르는데 왜 장기적으로는 좋아질까?</h2>
<p>고강도 운동 직후에는 IL-6 같은 신호가 일시적으로 증가할 수 있습니다. 이것은 만성 염증과 같은 의미가 아닙니다. 운동하는 근육에서 분비되는 myokine IL-6는 에너지 대사와 면역조절에 관여하며, 회복 과정에서 항염 신호가 이어질 수 있습니다.</p>
<p>2025년 older adults 대상 umbrella review는 여러 종류의 장기 운동이 <b>CRP와 TNF-α를 낮추는 방향</b>이고, IL-6도 일부 연구에서 감소한다고 정리했습니다. 다만 이 리뷰는 HIIT만을 분석한 것이 아니므로 “HIIT가 특별히 inflammaging을 치료한다”고 해석해서는 안 됩니다.</p>
<div class="takeaway"><strong>염증 지표를 읽는 법</strong><p><b>운동 후 일시적인 cytokine 상승 ≠ 만성 염증 악화</b>입니다. 반대로 CRP가 낮아졌다고 곧바로 노화가 늦어졌다고 말할 수도 없습니다. 운동의 항노화 가치는 염증뿐 아니라 심폐체력, 근육, 혈관, 대사, 기능적 독립성을 함께 봐야 합니다.</p></div>

<h2>10. 근력·근육에는 HIIT만으로 충분할까?</h2>
<p>아닙니다. HIIT가 하체 근육에 강한 자극을 줄 수 있고 일부 연구에서 근력·근지구력 개선이 보이지만, <b>근육량·최대근력·골밀도 유지에는 저항운동이 별도의 핵심 자극</b>입니다.</p>
<p>2026년 Generation 100의 sarcopenia secondary analysis까지 포함해 보면, 장기 유산소운동은 기능과 체력에 의미가 있지만 근육 노화 전체를 해결하는 단독 처방으로 보기는 어렵습니다. 건강수명 관점에서는 유산소 + HIIT + 근력운동의 역할을 나누는 편이 타당합니다.</p>

<h2>11. 뇌와 인지기능은?</h2>
<p>운동은 뇌혈류, 혈관건강, BDNF, 인슐린 신호, 수면과 기분에 영향을 줄 수 있어 뇌 건강과 연결됩니다. 그러나 HIIT가 MICT보다 인지기능이나 치매예방에서 명확하게 우월하다는 근거는 아직 약합니다.</p>
<p>2024년 older-adult meta-analysis에서는 일부 Stroop test 개선 신호가 있었지만, 2026년 systematic review는 cognitive·psychological·quality-of-life 결과가 <b>제한적이고 이질적</b>이라고 정리했습니다.</p>

<h2>12. 2026년 최신 리뷰의 결론은 의외로 차분하다</h2>
<p>2026년 5월까지 검색한 systematic review는 평균/중앙 연령 60세 이상 연구 25개 보고서, 약 2,818명을 검토했습니다. 가장 일관된 결과는 <b>VO₂peak와 운동내성 같은 심폐체력 개선</b>이었습니다.</p>
<p>반면 HIIT가 MICT보다 전반적으로 우월하다는 결론은 나오지 않았고, 비교 안전성이나 최적 프로토콜도 확정되지 않았습니다. 특히 연구 간 대상자, 강도, 인터벌 길이, 질환 상태가 너무 달랐고 adverse-event reporting도 일관되지 않았습니다.</p>
<p>2026년 건강한 고령자를 대상으로 한 별도 메타분석에서도 HIIT와 MICT는 모두 VO₂max를 개선했습니다. 즉 최신 근거가 말하는 메시지는 “HIIT만이 정답”이 아니라 <b>“HIIT는 강력한 선택지 중 하나”</b>에 가깝습니다.</p>

<h2>13. HIIT를 얼마나 자주 해야 할까?</h2>
<p>연구에서는 주 2–3회가 흔하지만, 개인에게 필요한 빈도는 운동경력과 전체 훈련량에 따라 달라집니다. 고강도 러닝을 이미 많이 하는 사람이 HIIT를 더 추가하면 이득보다 회복부담·부상위험이 커질 수 있습니다.</p>
<p>건강 목적 일반인에게는 <b>고강도 세션을 서로 붙여서 매일 반복하기보다 회복일을 확보</b>하는 것이 합리적입니다. 특히 러닝은 심폐뿐 아니라 아킬레스건·종아리·무릎·장경인대 같은 기계적 부하가 크므로, 같은 심박수의 자전거·로잉 HIIT와 부상위험이 동일하지 않습니다.</p>

<h2>14. 심박수와 RPE 중 무엇을 믿어야 할까?</h2>
<p>심박수는 유용하지만 완벽하지 않습니다. 더위, 카페인, 수면, 탈수, 약물, 측정기 오차에 영향을 받습니다. 또 짧은 interval에서는 심박수가 실제 대사부하보다 늦게 올라옵니다.</p>
<p>그래서 실전에서는 <b>심박수 + RPE + 호흡</b>을 함께 보는 편이 낫습니다. 4×4 같은 긴 interval에서는 후반부에 85–95% HRpeak 부근에 도달하는 것이 자연스럽고, RPE는 15–17 정도가 흔합니다. 시작부터 ‘최대심박수 숫자 맞추기’를 위해 무리할 필요는 없습니다.</p>

<h2>15. 안전성: 누가 먼저 평가가 필요할까?</h2>
<p>대부분의 건강한 성인에게 점진적으로 도입한 HIIT는 수행 가능하지만, 고강도 운동은 순간적으로 심박수와 혈압을 크게 올립니다. <b>운동 중 흉통, 실신·전실신, 설명되지 않는 심한 호흡곤란, 새로 생긴 심계항진</b>이 있거나 알려진 심혈관질환이 있다면 고강도 프로그램을 시작하기 전에 의료평가가 필요할 수 있습니다.</p>
<p>또 최근 2026 리뷰가 지적했듯 adverse-event reporting 자체가 연구마다 불완전합니다. 따라서 “연구에서 큰 사고가 많지 않았다 = 누구에게나 안전하다”로 해석하면 안 됩니다.</p>

<h2>16. LONGEVITY JOURNAL 근거 판정</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>VO₂max / CRF</b><span><strong>근거 강함.</strong> 비운동 대비 개선은 매우 일관됨. MICT 대비 우위는 작거나 연구에 따라 다름.</span></div>
  <div class="evidence-card"><b>혈압·대사·체지방</b><span><strong>중간.</strong> 개선 가능하지만 HIIT만의 특별한 우위는 제한적.</span></div>
  <div class="evidence-card"><b>기능·균형</b><span><strong>중간.</strong> older adults에서 긍정 신호. 운동하지 않는 것보다 명확히 유리.</span></div>
  <div class="evidence-card"><b>Inflammaging</b><span><strong>중간 이하.</strong> 장기 운동은 항염 방향이지만 HIIT 특이효과는 불확실.</span></div>
  <div class="evidence-card"><b>인지기능</b><span><strong>낮음~중간.</strong> 일부 신호는 있으나 이질적이며 HIIT 우월성 미확립.</span></div>
  <div class="evidence-card"><b>수명 연장</b><span><strong>미확립.</strong> Generation 100의 HIIT 사망률 신호는 흥미롭지만 확정적이지 않음.</span></div>
</div>

<h2>17. 실제로 적용한다면</h2>
<p>운동 경험이 있는 사람이라면 HIIT는 주간 프로그램의 <b>상한 자극</b>으로 사용할 가치가 큽니다. 하지만 긴 중강도 유산소, 근력운동, 충분한 수면과 회복이 이미 자리 잡은 상태에서 넣는 편이 좋습니다.</p>
<p>예를 들어 건강한 성인의 한 가지 예시는 10분 워밍업 후 3–4분 고강도 × 3–4회, 사이 2–3분 active recovery, 이후 쿨다운입니다. 처음에는 횟수를 줄이거나 1–2분 interval로 시작해도 됩니다. 이 예시는 <b>연구 프로토콜을 이해하기 위한 예</b>이지 개인 처방이 아닙니다.</p>

<div class="takeaway"><strong>LONGEVITY JOURNAL 결론</strong><p><b>HIIT의 진짜 장점은 ‘짧은 시간에 높은 심폐 자극을 주는 능력’입니다.</b> VO₂max와 기능적 체력을 높이는 근거는 강하지만, HIIT 자체가 인간 수명을 늘린다고 입증된 것은 아닙니다. 오래 사는 운동전략에서 더 중요한 것은 <b>지속 가능한 주간 운동량 + 심폐체력 + 근력 + 부상 없는 장기 순응도</b>입니다. HIIT는 그 시스템의 강력한 한 조각이지, 전체 시스템이 아닙니다.</p></div>

<h2>근거자료 · 논문 타임라인</h2>
<div class="timeline">
${paper('2020','Stensvold D et al. — Generation 100, BMJ','70–77세 1,567명을 5년 추적. HIIT 주 2회 4×4, MICT, 일반 권고군 비교. HIIT 사망률 3.0%, MICT 5.9%, control 4.7%였지만 주요 비교에서 확정적인 전체 사망률 감소는 입증되지 않음.','https://pubmed.ncbi.nlm.nih.gov/33028588/')}
${paper('2021','Martland R et al. — Interval vs continuous training in middle-aged/older adults','14개 연구, 429명. interval training이 MICT보다 VO₂max 증가에서 평균 약 1.10 mL/kg/min 우위.','https://pubmed.ncbi.nlm.nih.gov/33825615/')}
${paper('2022','Generation 100 cardiovascular risk follow-up','5년 운동강도 차이가 심혈관 위험인자와 체력에 미친 영향 분석. 고강도군에서 CRF 관련 일부 이점이 있었지만 임상사건 차이는 제한적.','https://pmc.ncbi.nlm.nih.gov/articles/PMC9156390/','PMC')}
${paper('2023','Functional movement meta-analysis','18개 연구. HIIT는 비운동군보다 기능적 움직임 개선, MICT 대비 유의한 우위는 없음.','https://pubmed.ncbi.nlm.nih.gov/36641767/')}
${paper('2024','Liang W et al. — Sports Medicine - Open','44 RCT, 1,863명. older adults에서 CRF, 수축기혈압, 체지방률, 근력·근지구력·균형 개선. 다른 운동 대비 CRF는 작은 우위.','https://pubmed.ncbi.nlm.nih.gov/39266933/')}
${paper('2024','Oliveira A et al. — Archives of Gerontology and Geriatrics','29 trials, 1,227명. HIIT와 MICT는 대부분의 건강지표에서 비슷한 개선. 일부 고품질 분석에서 CRF는 HIIT 우위.','https://pubmed.ncbi.nlm.nih.gov/38718488/')}
${paper('2024','The intensity paradox meta-analysis','23 RCT, 1,332명. 운동량을 고려하면 높은 강도가 중강도보다 VO₂peak를 확실히 더 개선한다는 근거는 약함.','https://pubmed.ncbi.nlm.nih.gov/38389140/')}
${paper('2025','Mathot E et al. — inflammageing umbrella review','60세 이상 장기 운동 리뷰들을 종합. CRP·TNF-α 감소가 비교적 일관되고 IL-6는 덜 일관됨. HIIT 특이효과가 아니라 장기 운동 전반의 결과.','https://pubmed.ncbi.nlm.nih.gov/40894417/')}
${paper('2025','Older-adult cardiometabolic HIIT meta-analysis','2024년 말까지의 RCT를 종합해 older adults의 cardiometabolic health와 quality of life를 검토.','https://pubmed.ncbi.nlm.nih.gov/40413509/')}
${paper('2026','Chu R et al. — HIIT vs MICT in healthy elderly','16개 연구, 1,434명. HIIT와 MICT 모두 심폐기능을 개선. 강도 우월성은 지표와 연구설계에 따라 달라짐.','https://pubmed.ncbi.nlm.nih.gov/41517714/')}
${paper('2026','Yuan J et al. — exercise-mode network meta-analysis','55세 이상 RCT들을 network meta-analysis로 비교해 HIIT·유산소·저항·복합운동의 심폐·대사 효과를 비교.','https://pubmed.ncbi.nlm.nih.gov/41678236/')}
${paper('2026','Moreira P et al. — J Clin Med systematic review','25개 보고서, 약 2,818명. HIIT/AIT는 CRF 개선에 가장 일관된 효과. 전반적 우월성·비교 안전성·최적 프로토콜은 확립되지 않음.','https://pubmed.ncbi.nlm.nih.gov/42739706/')}
</div>

<p class="editor-note"><strong>근거 해석 원칙:</strong> VO₂max 상승, CRP 감소, 미토콘드리아 적응은 중요한 중간지표지만 그 자체가 인간 수명연장의 직접 증명은 아닙니다. 건강수명은 실제 질병, 기능저하, 독립성, 사망 같은 장기 임상결과까지 연결되어야 합니다.</p>
  `
});
})();

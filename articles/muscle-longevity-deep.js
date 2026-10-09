(()=>{
const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
if(posts.some(x=>x.slug==='muscle-longevity-evidence'))return;
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
posts.push({
  slug:'muscle-longevity-evidence',
  category:'health',
  date:'2026-10-09',
  title:'근육은 장수의 저축계좌일까? — 근력, 근감소증, 단백질과 건강수명의 근거',
  excerpt:'장수에서 중요한 것은 큰 근육만이 아닙니다. 근력·파워·보행·대사 기능을 함께 지키는 것이 핵심입니다. 악력, 근감소증, 저항운동, 단백질, 크레아틴과 건강수명의 근거를 한 번에 정리합니다.',
  tags:['근육','근력','Muscle','Strength','Sarcopenia','Dynapenia','Grip strength','Resistance training','Protein','Leucine','Creatine','Frailty','Healthy aging','Longevity'],
  html:`
<p class="editor-note"><strong>LONGEVITY JOURNAL 핵심 글:</strong> 이 글은 근육을 단순한 외형이나 운동능력이 아니라 <b>대사·이동성·낙상 방지·독립생활·질병 위험을 지탱하는 장수 자산</b>으로 봅니다. 근거 검토일 2026-10-09.</p>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>장수를 위해서는 근육량보다 근력과 기능을 함께 지키는 것이 더 중요합니다.</b> 근육은 포도당을 처리하고, 움직임과 균형을 만들며, 넘어졌을 때 몸을 지탱하고, 질병·입원 후 회복할 예비능력을 제공합니다. 2015년 PURE 연구에서 악력이 5 kg 낮을 때 전체 사망위험은 약 16% 높았고, 2022년 메타분석에서는 근력운동을 하는 사람들의 전체 사망위험이 더 낮았습니다. 핵심 전략은 <b>주 2회 이상의 저항운동 + 충분한 단백질 + 회복 + 필요 시 creatine 같은 보조수단</b>입니다.</p></div>

<h2>01. 근육은 왜 ‘장수기관’이라고 부를 만한가?</h2>
<p>근육은 단순히 힘을 내는 조직이 아닙니다. 식후 포도당을 받아들이는 가장 큰 말초 조직 중 하나이고, 운동할 때 myokine을 분비하며, 뼈와 관절에 기계적 자극을 전달하고, 일어서기·걷기·계단 오르기·넘어질 때 버티기 같은 일상 기능을 수행합니다.</p>
<p>또 하나 중요한 점은 <b>예비능력(reserve)</b>입니다. 젊고 건강할 때는 근력이 조금 떨어져도 일상이 유지되지만, 고령·입원·감염·수술·장기 침상생활이 겹치면 근육과 근력의 여유가 작은 사람일수록 독립생활을 잃기 쉽습니다. 그래서 근육은 일종의 생리학적 저축계좌라고 볼 수 있습니다.</p>

<div class="pathway" aria-label="muscle longevity pathway">
  <div class="pathway-step"><b>Resistance training</b><span>기계적 장력 · 신경 적응 · 단백질합성</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>Strength reserve</b><span>근력 · 파워 · 근육량 · 균형</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>Healthspan</b><span>대사 · 이동성 · 낙상방지 · 독립생활</span></div>
</div>

<h2>02. 근육량, 근력, 파워는 같은 말이 아니다</h2>
<p>근육을 이야기할 때 가장 흔한 오해는 <b>“근육량이 많으면 무조건 건강하다”</b>는 것입니다. 근육량은 중요하지만 기능을 전부 설명하지는 못합니다. 실제 geriatric medicine에서는 근감소증을 평가할 때 근육량뿐 아니라 근력과 신체 수행능력을 함께 봅니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>Muscle mass</b><span>얼마나 많은 근육 조직을 가지고 있는가. DXA·BIA 등으로 추정.</span></div>
  <div class="evidence-card"><b>Strength</b><span>얼마나 큰 힘을 낼 수 있는가. 악력·1RM·chair stand 등으로 평가.</span></div>
  <div class="evidence-card"><b>Power</b><span>얼마나 빠르게 힘을 낼 수 있는가. 낙상 회피·계단·빠른 일어서기에 특히 중요.</span></div>
  <div class="evidence-card"><b>Performance</b><span>보행속도·SPPB·Timed Up and Go처럼 실제 움직임으로 나타나는 기능.</span></div>
</div>
<p>EWGSOP2는 바로 이 이유 때문에 <b>낮은 근력을 sarcopenia의 핵심 특성</b>으로 두고, 낮은 근육량/질로 진단을 확인하며, 신체 수행능력 저하가 동반되면 severe sarcopenia로 봅니다.</p>

<h2>03. 나이가 들면 무엇이 먼저 떨어질까? — ‘근육량 감소’보다 더 빠른 기능 저하</h2>
<p>노화와 함께 motor unit이 줄고, type II fiber가 위축되고, 신경계의 동원 효율이 떨어지며, 근육 사이 지방 침착과 미토콘드리아 기능 변화가 생깁니다. 동시에 식사 후 단백질과 운동에 대한 반응이 둔해지는 <b>anabolic resistance</b>가 나타날 수 있습니다.</p>
<p>그래서 같은 근육량을 가지고 있어도 젊을 때보다 힘과 파워가 더 떨어질 수 있습니다. 이를 dynapenia라고 부르기도 합니다. 장수 관점에서는 체성분 숫자 하나보다 <b>힘·보행·기능이 실제로 유지되는지</b>를 함께 보는 이유입니다.</p>

<h2>04. 악력은 왜 장수 연구에서 그렇게 자주 등장할까?</h2>
<p>악력은 손만 측정하지만 전신 근력과 기능 상태의 간단한 proxy로 사용할 수 있습니다. 2015년 <i>Lancet</i> PURE 연구는 17개국 <b>139,691명</b>을 분석했습니다. 악력이 5 kg 낮을 때 전체 사망 hazard는 <b>1.16</b>, 심혈관 사망 hazard는 <b>1.17</b>이었습니다.</p>
<p>흥미롭게도 이 연구에서 악력은 수축기 혈압보다 전체 사망과 심혈관 사망을 더 강하게 예측했습니다. 물론 이것이 “악력 운동만 하면 사망률이 내려간다”는 뜻은 아닙니다. 악력은 영양상태, 신경근 기능, 활동량, 만성질환, 전반적 회복력을 함께 반영하는 지표일 수 있습니다.</p>
<div class="takeaway"><strong>중요한 해석</strong><p><b>강한 악력은 장수의 원인이면서 동시에 건강한 몸의 결과일 가능성이 있습니다.</b> 따라서 숫자를 억지로 올리는 것보다 전신 저항운동으로 실제 기능과 근력을 키우는 것이 더 중요합니다.</p></div>

<h2>05. Sarcopenia — ‘마른 노인’만의 문제가 아니다</h2>
<p>Sarcopenia는 단순히 팔·다리가 가늘어지는 현상이 아니라 <b>근력과 근육량, 그리고 기능이 함께 무너지는 근육 질환</b>입니다. 비만한 사람에게도 근육이 약하고 지방이 많은 sarcopenic obesity가 생길 수 있습니다.</p>
<p>아시아인을 위한 AWGS 2019에서는 낮은 악력을 남성 <b>&lt;28 kg</b>, 여성 <b>&lt;18 kg</b>으로 보고, 보행속도 &lt;1.0 m/s, SPPB ≤9, 5회 chair stand ≥12초 중 하나가 낮은 신체수행 기준입니다. 종아리둘레는 남성 &lt;34 cm, 여성 &lt;33 cm가 간단한 선별 기준으로 사용될 수 있습니다.</p>
<p class="small-note">이 값은 진단·선별 기준이지 젊고 건강한 사람이 목표로 삼아야 할 ‘최적값’은 아닙니다. 정상범위 안에서도 더 높은 근력과 기능이 건강에 유리할 수 있습니다.</p>

<h2>06. 근력운동은 실제 사망위험과 연결될까?</h2>
<p>2022년 <i>British Journal of Sports Medicine</i> meta-analysis는 16개 prospective cohort를 분석했습니다. 근력강화 활동은 전체 사망, 심혈관질환, 전체 암, 당뇨 등의 위험이 <b>약 10~17% 낮은 것</b>과 연관됐습니다. 비선형 분석에서는 주당 약 30~60분 구간에서 가장 큰 위험 감소가 관찰됐습니다.</p>
<p>같은 해 또 다른 meta-analysis에서는 저항운동을 하지 않는 사람과 비교해 어떤 형태로든 저항운동을 한 사람의 전체 사망위험이 <b>약 15% 낮았고</b>, 주당 약 60분 부근에서 최대 27%의 위험 감소가 관찰됐습니다.</p>
<p>이 수치는 observational evidence이므로 “60분이 최적 용량”이라고 단정할 수는 없습니다. 하지만 적어도 <b>근력운동은 보디빌딩 취미가 아니라 장기 건강과 연결된 생활습관</b>이라는 점은 상당히 일관됩니다.</p>

<h2>07. 유산소와 근력운동은 경쟁하지 않는다</h2>
<p>장수 관점에서 “달리기냐 웨이트냐”를 고를 필요는 없습니다. 416,420명을 분석한 2022년 미국 cohort에서 유산소 활동은 뚜렷한 사망위험 감소와 연결됐고, 여기에 <b>근육강화운동을 1~2회/주 추가했을 때 추가적인 위험 감소</b>가 관찰됐습니다.</p>
<p>WHO도 성인에게 150~300분의 중강도 유산소 또는 75~150분의 고강도 유산소와 함께, <b>주 2일 이상 모든 주요 근육군을 사용하는 근력강화 활동</b>을 권고합니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>Cardiorespiratory fitness</b><span>심장·폐·혈관·미토콘드리아의 장기 자산.</span></div>
  <div class="evidence-card"><b>Muscular fitness</b><span>힘·파워·대사·뼈·낙상방지·독립생활의 장기 자산.</span></div>
  <div class="evidence-card"><b>Best combination</b><span>유산소 + 저항운동 + 일상 움직임. 서로 대체하기보다 보완.</span></div>
</div>

<h2>08. 근육을 만들기 위한 가장 중요한 원리 — Progressive Overload</h2>
<p>근육은 같은 자극에 계속 노출되면 적응합니다. 그래서 장기적으로는 무게, 반복수, 세트, 운동 범위, 기술 난이도 중 적어도 하나가 조금씩 증가해야 합니다. 이것이 progressive overload입니다.</p>
<p>실전에서는 반드시 매번 1RM에 가까운 무게를 들 필요는 없습니다. 중간 정도 무게로도 세트 말미에 충분히 힘든 수준까지 수행하면 근비대·근력 자극을 만들 수 있습니다. 초보자나 중년 이후에는 <b>부상 없이 계속할 수 있는 훈련이 가장 강한 프로그램</b>입니다.</p>

<h2>09. 장수를 위한 최소 저항운동 루틴은?</h2>
<p>WHO의 공중보건 기준은 주 2일 이상입니다. 장기 근력과 근육량 향상을 목표로 한다면 대부분의 사람에게 <b>주 2~3회 전신훈련</b>이 효율적입니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>Squat pattern</b><span>스쿼트 · 레그프레스 · sit-to-stand.</span></div>
  <div class="evidence-card"><b>Hinge</b><span>데드리프트 · RDL · hip hinge.</span></div>
  <div class="evidence-card"><b>Push</b><span>푸시업 · 벤치프레스 · 오버헤드프레스.</span></div>
  <div class="evidence-card"><b>Pull</b><span>로우 · 랫풀다운 · 풀업.</span></div>
  <div class="evidence-card"><b>Carry / grip</b><span>farmer carry · suitcase carry · 매달리기.</span></div>
  <div class="evidence-card"><b>Single-leg / balance</b><span>런지 · step-up · split squat.</span></div>
</div>
<p>시작은 각 패턴 1~3세트, 대략 5~15회 반복 범위에서 안전하게 하고, 마지막 몇 회가 어렵게 느껴지는 정도로 점진적으로 올리면 됩니다. 매 세트를 실패까지 밀어붙일 필요는 없습니다.</p>

<h2>10. 단백질 — 근육의 재료지만, 운동이 먼저 신호를 보낸다</h2>
<p>저항운동은 근육에 “적응하라”는 신호를 보내고 단백질은 그 적응에 필요한 재료를 제공합니다. 둘을 따로 떼어 생각하기보다 <b>운동 + 충분한 단백질</b> 조합이 핵심입니다.</p>
<p>PROT-AGE와 ESPEN expert group은 건강한 고령자에게 대체로 <b>1.0~1.2 g/kg/day</b>, 운동을 하거나 활동적인 경우 그 이상을 고려하도록 제안합니다. 질병·영양실조 상황에서는 더 높은 섭취가 필요할 수 있지만 신장질환 등에서는 개별화가 필요합니다.</p>
<p>건강한 성인의 resistance training meta-analysis에서는 총 단백질 섭취가 약 <b>1.6 g/kg/day</b>를 넘어가면 평균적인 제지방량 추가 이득이 더 커지지 않았습니다. 따라서 “많을수록 좋다”보다는 <b>충분한 범위를 꾸준히 확보하는 것</b>이 중요합니다.</p>

<h2>11. Leucine과 mTOR — 장수와 근육 사이의 긴장을 어떻게 볼까?</h2>
<p>Leucine은 mTORC1을 활성화하고 근육 단백질합성을 촉진하는 강한 신호입니다. 그래서 일부 longevity 논의에서는 leucine과 mTOR를 낮게 유지해야 한다는 주장이 나옵니다.</p>
<p>하지만 중년 이후에는 sarcopenia와 frailty 자체가 건강수명을 크게 위협합니다. 따라서 <b>mTOR를 하루 종일 최대한 낮게 유지하는 것보다 운동·공복 시기와 식사·회복 시기를 구분하는 리듬</b>이 더 합리적일 수 있습니다. 운동 후 필요한 mTOR 신호는 근육과 뼈를 유지하는 생리적 회복 신호입니다.</p>
<div class="takeaway"><strong>LONGEVITY 해석</strong><p><b>근육 합성을 위한 일시적 mTOR 활성화와 만성적인 영양과잉·성장신호는 같은 것이 아닙니다.</b> 장수 전략은 근육을 희생해 mTOR를 낮추는 것이 아니라, 대사적 유연성과 기능적 예비능력을 함께 보존하는 방향이 더 자연스럽습니다.</p></div>

<h2>12. 단백질은 한 번에 몰아먹는 것보다 분산이 유리할까?</h2>
<p>노화에서는 같은 단백질을 먹어도 muscle protein synthesis 반응이 둔해질 수 있습니다. 그래서 하루 총량뿐 아니라 각 끼니마다 충분한 양을 확보하는 전략이 연구됩니다.</p>
<p>최근 리뷰들은 고령자에서 한 끼 약 25~30 g 또는 체중 kg당 약 0.4 g 수준을 여러 끼에 분산하는 접근을 실용적 전략으로 제안합니다. 다만 개인의 체중·식사횟수·운동량에 따라 달라질 수 있으므로, 핵심은 정확한 숫자보다 <b>하루 총 단백질을 충분히 먹고 각 끼니가 너무 빈약하지 않게 하는 것</b>입니다.</p>

<h2>13. Creatine — ‘보디빌딩 보충제’보다 건강노화 도구에 가깝다</h2>
<p>Creatine은 phosphocreatine system을 통해 짧고 강한 근수축에서 ATP 재생을 돕습니다. 효과가 비교적 오래 연구된 스포츠 보충제이면서, 최근에는 고령자의 근력·기능을 위한 adjunct로도 많이 연구됩니다.</p>
<p>2025년 8개 RCT, 482명을 포함한 meta-analysis에서는 resistance training에 creatine을 더했을 때 하체 근력과 lean tissue mass가 소폭 더 증가했습니다. 2026년 11개 RCT를 이용한 three-level meta-analysis에서도 <b>근력 향상은 작지만 유의했고(g=0.31), 근육량·기능의 추가효과는 불확실</b>했습니다.</p>
<p>즉 creatine은 “노화 자체를 되돌리는 물질”이라기보다 <b>저항운동의 근력 적응을 조금 더 밀어줄 수 있는 실용적 보조수단</b>으로 보는 것이 현재 근거와 잘 맞습니다.</p>

<h2>14. 수면과 회복 — 근육은 운동할 때가 아니라 회복할 때 적응한다</h2>
<p>저항운동은 자극이고 적응은 그 이후에 일어납니다. 수면 부족, 지속적인 에너지 부족, 과도한 훈련량은 회복을 제한할 수 있습니다. 특히 고강도 유산소와 웨이트를 함께 하는 사람은 모든 운동을 매일 강하게 하는 것보다 <b>강한 날과 쉬운 날을 구분하고 충분한 수면을 확보하는 것</b>이 장기적으로 중요합니다.</p>
<p>Deep sleep을 직접 “근육 성장 시간”이라고 단순화할 수는 없지만, 정상적인 수면은 호르몬·자율신경·포도당 대사·운동 회복을 포함한 여러 경로를 통해 근육 건강을 지지합니다.</p>

<h2>15. 체중이 줄어도 근육을 지켜야 하는 이유</h2>
<p>체중감량에서 지방과 함께 제지방량도 줄 수 있습니다. 특히 중년 이후 빠른 감량·저단백 식사·운동 부족이 겹치면 체중 숫자는 좋아지지만 기능적 예비능력은 떨어질 수 있습니다.</p>
<p>그래서 longevity 관점의 체중조절은 <b>체중 최소화</b>가 아니라 <b>복부지방과 대사위험을 낮추면서 근력과 근육을 최대한 보존</b>하는 방향이어야 합니다. 저항운동과 충분한 단백질은 이때 핵심 안전장치입니다.</p>

<h2>16. 집에서 추적할 수 있는 네 가지 근육 지표</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>Grip strength</b><span>가능하면 동일 dynamometer·동일 자세로 장기 추세를 본다.</span></div>
  <div class="evidence-card"><b>5× Chair Stand</b><span>팔을 쓰지 않고 5회 일어서기 시간. 하체근력과 기능의 간단한 proxy.</span></div>
  <div class="evidence-card"><b>Training strength</b><span>스쿼트·레그프레스·로우·푸시 등에서 무게와 반복수의 장기 추세.</span></div>
  <div class="evidence-card"><b>Gait / stairs</b><span>빠른 걷기·계단·일상 움직임이 쉬운지. 숫자보다 실제 기능이 중요.</span></div>
</div>
<p>체성분계의 골격근량 숫자도 참고할 수 있지만 수분 상태에 영향을 받습니다. 장기 추세를 볼 때는 같은 조건에서 측정하고, <b>근력과 실제 수행능력을 함께 기록</b>하는 편이 더 유용합니다.</p>

<h2>17. 근육을 ‘항노화’라고 부를 수 있는 가장 강한 이유</h2>
<p>근육은 epigenetic clock을 몇 년 되돌렸다는 식의 화려한 endpoint가 없어도 의미가 분명합니다. 더 강한 근력과 기능은 <b>걷기, 계단, 낙상 회피, 대사건강, 운동능력, 질병 후 회복, 독립생활</b> 같은 실제 healthspan의 구성요소와 직접 연결됩니다.</p>
<p>그리고 저항운동은 단순 관찰연구만 있는 것이 아니라 무작위시험에서 근력·근육량·기능을 실제로 개선합니다. 따라서 현재 인간에서 사용할 수 있는 anti-aging intervention 중에서 <b>기전과 기능적 outcome이 동시에 강한 개입</b>에 속합니다.</p>

<h2>18. LONGEVITY JOURNAL의 실전 우선순위</h2>
<ol>
  <li><b>주 2~3회 저항운동</b>을 장기적으로 유지한다.</li>
  <li><b>하체·등·밀기·당기기·hinge·carry</b>처럼 큰 움직임을 우선한다.</li>
  <li><b>progressive overload</b>로 무게·반복·기술을 조금씩 발전시킨다.</li>
  <li><b>단백질 총량</b>을 충분히 확보하고 끼니마다 분산한다.</li>
  <li><b>유산소 운동</b>도 함께 유지해 심폐체력과 근육을 동시에 지킨다.</li>
  <li><b>수면과 회복</b>을 훈련의 일부로 본다.</li>
  <li>필요하다면 <b>creatine</b> 같은 근거가 비교적 좋은 보조수단을 고려한다.</li>
  <li>악력·chair stand·훈련기록으로 <b>기능의 장기 추세</b>를 확인한다.</li>
</ol>

<h2>19. 결론 — 오래 사는 것보다 오래 강하게 움직이는 것</h2>
<p>장수의 목표가 단순 생존기간이 아니라 건강수명이라면, 근육은 가장 직접적인 자산 중 하나입니다. 근육은 혈당과 대사를 돕고, 뼈와 관절을 지지하고, 넘어지지 않게 하고, 질병 후 다시 일어설 수 있는 여유를 만듭니다.</p>
<div class="takeaway"><strong>LONGEVITY JOURNAL의 결론</strong><p><b>근육량을 최대화하는 것이 목표가 아니라, 나이가 들어도 충분한 근력·파워·이동성을 유지하는 것이 목표입니다.</b> 장수의 관점에서 최고의 근육은 가장 큰 근육이 아니라 <b>오래 사용할 수 있는 강한 근육</b>입니다.</p></div>

<h2>근거자료 — 시간순으로 읽는 핵심 연구</h2>
<div class="timeline">
${paper('2013','Bauer J, et al. Evidence-based recommendations for optimal dietary protein intake in older people: PROT-AGE Study Group.','건강한 고령자에게 대체로 1.0~1.2 g/kg/day, 운동하거나 활동적인 경우 ≥1.2 g/kg/day를 제안. 질병·신장기능에 따라 개별화 필요. PMID 23867520.','https://pubmed.ncbi.nlm.nih.gov/23867520/')}
${paper('2014','Deutz NEP, et al. Protein intake and exercise for optimal muscle function with aging: ESPEN Expert Group.','운동과 충분한 단백질을 노화 관련 근기능 저하를 막는 핵심 조합으로 제시. PMID 24814383.','https://pubmed.ncbi.nlm.nih.gov/24814383/')}
${paper('2015','Leong DP, et al. Prognostic value of grip strength: findings from the PURE study. Lancet.','17개국 139,691명. 악력 5 kg 감소마다 전체 사망 HR 1.16, 심혈관 사망 HR 1.17. PMID 25982160.','https://pubmed.ncbi.nlm.nih.gov/25982160/')}
${paper('2018','Morton RW, et al. Protein supplementation and resistance training: systematic review, meta-analysis and meta-regression.','49개 연구, 1,863명. 단백질 보충은 resistance training 중 근력·제지방량 증가를 추가로 향상. 총 섭취 약 1.62 g/kg/day를 넘어 평균 추가 FFM 이득은 더 커지지 않음. PMID 28698222.','https://pubmed.ncbi.nlm.nih.gov/28698222/')}
${paper('2019','Cruz-Jentoft AJ, et al. Sarcopenia: revised European consensus on definition and diagnosis.','EWGSOP2는 낮은 근력을 sarcopenia의 핵심 특성으로 우선하고 근육량/질과 신체수행능력을 단계적으로 평가. PMID 30312372.','https://pubmed.ncbi.nlm.nih.gov/30312372/')}
${paper('2020','Chen LK, et al. Asian Working Group for Sarcopenia: 2019 Consensus Update.','아시아 기준: 악력 남성 <28 kg·여성 <18 kg, 보행속도 <1.0 m/s, chair stand ≥12초 등을 제시. PMID 32033882.','https://pubmed.ncbi.nlm.nih.gov/32033882/')}
${paper('2022','Momma H, et al. Muscle-strengthening activities and mortality / major NCDs. Br J Sports Med.','16개 prospective cohort meta-analysis. 근력강화 활동은 전체 사망·CVD·전체 암·당뇨 위험이 약 10~17% 낮은 것과 연관. PMID 35228201.','https://pubmed.ncbi.nlm.nih.gov/35228201/')}
${paper('2022','Shailendra P, et al. Resistance Training and Mortality Risk. Am J Prev Med.','10개 연구 meta-analysis. 어떤 저항운동이든 수행한 집단에서 전체 사망위험 15%, CVD 사망 19%, 암 사망 14% 낮은 연관. PMID 35599175.','https://pubmed.ncbi.nlm.nih.gov/35599175/')}
${paper('2022','Coleman CJ, et al. Dose-response association of aerobic and muscle-strengthening activity with mortality.','미국 성인 416,420명. 유산소와 함께 근력운동 1~2회/주에서 추가적인 사망위험 감소가 관찰. PMID 35953241.','https://pubmed.ncbi.nlm.nih.gov/35953241/')}
${paper('2024','Protein supplementation + resistance exercise in community-dwelling older adults with sarcopenia.','7 RCT + 1 quasi-experimental study, 총 854명. 조합군에서 근육량과 근력이 유의하게 증가. PMID 38374703.','https://pubmed.ncbi.nlm.nih.gov/38374703/')}
${paper('2025','Liu S, et al. Creatine supplementation during resistance training in older adults.','8 RCT, 482명. creatine + RT가 하체 근력과 lean tissue mass를 소폭 추가 개선. PMID 41388441.','https://pubmed.ncbi.nlm.nih.gov/41388441/')}
${paper('2026','Effects of resistance training combined with creatine supplementation in older adults: three-level meta-analysis.','11 RCT. creatine 추가 시 근력은 작지만 유의하게 개선(g=0.31), 근육량·기능의 추가효과는 불확실. PMID 42712402.','https://pubmed.ncbi.nlm.nih.gov/42712402/')}
</div>

<p class="editor-note"><strong>편집 원칙:</strong> 근육과 근력의 관찰연구에서 사망률 연관성이 크다고 해서 근력 자체가 모든 원인의 직접 원인이라고 단정하지 않습니다. 그러나 저항운동이 무작위시험에서 근력·근육량·기능을 실제로 개선하고, 장기 cohort에서 더 낮은 질병·사망위험과 반복적으로 연결된다는 점을 함께 볼 때 <b>근력 유지는 인간 건강수명 전략에서 우선순위가 높은 개입</b>으로 볼 근거가 충분합니다.</p>
`});
})();
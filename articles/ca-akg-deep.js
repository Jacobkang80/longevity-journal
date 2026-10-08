(()=>{
const p=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='ca-akg-evidence-guide');
if(!p)return;
Object.assign(p,{
  date:'2024-02-26',
  title:'CA-AKG는 정말 노화를 늦출까? — TCA 회로, 후성유전학, 염증 그리고 인간 임상시험',
  excerpt:'쥐에서는 건강수명과 염증 개선 신호가 강했지만, 독립적인 수명 재현시험은 실패했습니다. CA-AKG의 대사·후성유전·inflammaging 기전과 인간 근거를 끝까지 따라갑니다.',
  tags:['CA-AKG','Ca-AKG','Alpha-ketoglutarate','AKG','TCA cycle','TET','Epigenetics','mTOR','Inflammaging','Frailty','Biological age','항노화','Longevity Molecules'],
  html:`
<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2024-02-26 · <a href="https://myepic2.tistory.com/42" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a> · 원문 제목의 ‘CA-APK’ 표기는 화합물명에 맞춰 이 글에서는 <b>CA-AKG(Ca-AKG)</b>로 바로잡았습니다. · LONGEVITY JOURNAL 근거 전면 업데이트 2026-10-08</p>

<figure class="story-hero molecular-figure"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Calcium_alpha-ketoglutarate.svg" alt="칼슘 알파 케토글루타레이트의 화학구조" loading="eager"><figcaption>Calcium alpha-ketoglutarate(Ca-AKG)의 구조. 항노화 보충제로 판매되는 형태는 보통 자유형 α-ketoglutarate가 아니라 칼슘염입니다. 이미지: Innerstream / Wikimedia Commons, Public Domain.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>CA-AKG는 항노화 후보로서 기전은 매우 흥미롭지만, 인간 건강수명 효과는 아직 증명되지 않았습니다.</b> α-KG는 TCA 회로의 중심 대사체이면서 TET·JmjC 같은 후성유전 효소가 사용하는 보조기질이고, 동물에서는 mTOR·자가포식·염증·노쇠와 연결됩니다. 2020년 C57BL/6J 생쥐에서는 늦은 나이에 Ca-AKG를 시작해 여성 생쥐의 수명과 양쪽 성의 건강상태가 개선됐습니다. 하지만 미국 NIA Interventions Testing Program의 유전적으로 다양한 UM-HET3 생쥐에서는 18개월 시작과 7개월 시작 모두 <b>수명 연장이 재현되지 않았습니다.</b> 사람에서는 2021년 비대조 Rejuvant 연구가 DNA methylation age 감소를 보고했지만 제품에 비타민이 함께 들어 있었고 대조군이 없었습니다. 가장 중요한 무작위시험 ABLE의 효능 결과는 2026년 10월 현재 아직 공개되지 않았습니다.</p></div>

<h2>01. AKG는 ‘보충제 성분’이기 전에 우리 몸이 매일 만드는 대사체다</h2>
<p><b>α-Ketoglutarate(α-KG, 2-oxoglutarate)</b>는 미토콘드리아의 TCA cycle, 즉 시트르산 회로 한가운데 있는 대사체입니다. 이 회로는 탄수화물·지방·아미노산에서 얻은 탄소를 처리하면서 NADH와 FADH₂를 만들어 전자전달계로 넘기고, 결국 ATP 생산을 돕습니다.</p>
<p>α-KG는 isocitrate에서 만들어지고 다음 단계에서 succinyl-CoA로 전환됩니다. 동시에 glutamate·glutamine 대사와도 연결되어 있어 탄소대사와 질소대사를 이어주는 교차로 역할을 합니다. 그래서 AKG의 변화는 단순한 ‘에너지 한 칸’이 아니라 아미노산, 암모니아 처리, 산화환원, 세포신호까지 영향을 줄 수 있습니다.</p>

<figure class="story-photo molecular-figure"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Alpha-Ketoglutaric_acid_model_3d.png" alt="알파 케토글루타르산의 3차원 분자 모델" loading="lazy"><figcaption>α-Ketoglutarate의 3차원 분자 모델. 작은 TCA 회로 대사체가 세포의 에너지 상태와 유전자 발현을 동시에 연결할 수 있다는 점 때문에 geroscience에서 주목받습니다. 이미지: Wikimedia Commons.</figcaption></figure>

<div class="pathway" aria-label="AKG in the TCA cycle simplified">
  <div class="pathway-step"><b>Isocitrate</b><span>탄소 대사의 상류</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>α-KG</b><span>TCA + 아미노산 + 신호 허브</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>Succinyl-CoA</b><span>TCA 회로 계속 진행</span></div>
</div>
<p class="small-note">※ 실제 대사는 glutamate, glutamine, transamination, reductive carboxylation 등 여러 방향으로 오갈 수 있습니다. 위 도식은 핵심 위치를 보여주기 위한 단순화입니다.</p>

<h2>02. 왜 ‘Ca-AKG’인가? AKG와 Ca-AKG는 같은 말이 아니다</h2>
<p>논문과 보충제 광고에서는 AKG, α-KG, Ca-AKG가 섞여 쓰이지만 구분해야 합니다. <b>AKG</b>는 α-ketoglutarate 자체를 뜻하는 넓은 표현이고, <b>Ca-AKG</b>는 여기에 칼슘이 결합한 염 형태입니다. 2020년 유명 생쥐 수명 연구와 현재 ABLE 임상시험은 모두 Ca-AKG 형태를 사용했습니다.</p>
<p>또 <b>AAKG</b>는 arginine alpha-ketoglutarate로 운동보충제에서 쓰이는 전혀 다른 조합입니다. AAKG 연구 결과를 Ca-AKG의 항노화 근거로 가져오면 안 됩니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>α-KG / AKG</b><span>내인성 TCA 회로 대사체. 세포 기전 연구의 중심.</span></div>
  <div class="evidence-card"><b>Ca-AKG</b><span>칼슘염 형태. 2020 생쥐 연구와 ABLE 인간 RCT에서 사용.</span></div>
  <div class="evidence-card"><b>AAKG</b><span>Arginine + AKG. 운동·NO 계열 보충제. 항노화 Ca-AKG와 동일시하면 안 됨.</span></div>
</div>

<h2>03. 가장 흥미로운 기전 ①: 대사상태가 유전자 발현까지 연결된다</h2>
<p>AKG가 단순한 에너지 대사체를 넘어 주목받는 가장 큰 이유는 <b>2-oxoglutarate-dependent dioxygenase</b>라는 효소군의 필수 보조기질이기 때문입니다. 이 효소군에는 DNA 탈메틸화에 관여하는 <b>TET1–3</b>, 히스톤 탈메틸화에 관여하는 <b>JmjC/KDM</b> 효소들이 포함됩니다.</p>
<p>즉 세포가 가진 AKG, succinate, fumarate 등의 대사체 비율은 chromatin의 methylation 상태와 유전자 발현에 영향을 줄 수 있습니다. 이것이 <b>미토콘드리아 대사 → 후성유전학</b>이라는 연결입니다.</p>
<p>하지만 여기서 ‘AKG를 먹으면 젊은 DNA methylation 패턴으로 돌아간다’고 뛰어넘으면 안 됩니다. 세포 내 AKG 농도와 핵 안의 효소 반응, 조직별 흡수, 다른 대사체와의 비율이 모두 관여합니다. 사람에서 경구 Ca-AKG가 이런 경로를 어느 정도 바꾸는지는 아직 직접적인 데이터가 부족합니다.</p>

<h2>04. 가장 흥미로운 기전 ②: mTOR와 자가포식</h2>
<p>2014년 Nature 연구는 선충 <i>C. elegans</i>에서 α-KG가 <b>ATP synthase를 억제하고 TOR 신호를 낮추며 자가포식을 증가</b>시켜 수명을 연장한다고 보고했습니다. α-KG는 dietary restriction을 한 선충에서는 추가 수명 연장을 만들지 못해, 영양 제한과 일부 겹치는 경로가 있을 가능성이 제기됐습니다.</p>
<p>이 결과는 geroscience 관점에서 매력적입니다. mTOR는 영양이 풍부할 때 성장과 단백질 합성을 촉진하고, 낮아지면 세포 재활용·자가포식 쪽으로 균형이 이동하기 때문입니다. 그러나 이 기전은 주로 선충과 세포에서 나온 것으로, 사람이 Ca-AKG를 먹었을 때 같은 강도의 mTOR 억제가 일어난다는 증거는 없습니다.</p>

<div class="pathway" aria-label="Possible AKG longevity mechanism simplified">
  <div class="pathway-step"><b>AKG 상승</b><span>모델생물·세포 실험</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>ATP synthase / TOR</b><span>영양감지 신호 변화</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>Autophagy</b><span>세포 재활용 증가 가능성</span></div>
</div>

<h2>05. 가장 중요한 축: 만성 염증과 inflammaging</h2>
<p>CA-AKG가 항노화 후보로 흥미로운 또 하나의 이유는 <b>만성 저등급 염증</b>입니다. 2020년 생쥐 연구에서 Ca-AKG는 여러 전신 염증성 cytokine을 낮추고 특히 여성 생쥐에서 <b>IL-10</b> 증가와 연결됐습니다. IL-10은 과도한 염증 반응을 억제하는 대표적인 cytokine입니다.</p>
<p>2026년 최신 리뷰에서도 AKG는 macrophage polarization, NF-κB 신호, ROS, cytokine 생성과 연결되는 대사·면역 조절 물질로 정리됩니다. 하지만 이런 기전 자료 대부분은 세포와 동물에서 나온 것입니다. <b>사람에서 Ca-AKG가 CRP·IL-6를 장기적으로 낮추고 그 결과 질병이나 사망을 줄였다는 임상시험은 아직 없습니다.</b></p>
<div class="takeaway"><strong>항노화 해석의 핵심</strong><p>AKG는 inflammaging 경로에 영향을 줄 수 있다는 기전적 근거가 있지만, <b>염증 마커 변화 → 인간 노화 지연 → 건강수명 연장</b>의 세 단계를 모두 입증해야 진짜 geroprotector라고 부를 수 있습니다. 현재는 첫 단계와 동물 단계의 근거가 훨씬 강합니다.</p></div>

<h2>06. 2020년 생쥐 연구: 왜 그렇게 화제가 됐나?</h2>
<p>2020년 <i>Cell Metabolism</i> 연구는 18개월 된 C57BL/6J 생쥐에게 사료의 2%를 Ca-AKG로 제공했습니다. 노년기에 개입을 시작했다는 점이 특히 관심을 끌었습니다.</p>
<p>두 개의 독립된 cohort에서 여성 생쥐의 median lifespan은 <b>치료 시작 이후 기준으로 16.6%와 10.5%</b> 늘었고, 90번째 백분위 생존도 19.7%와 8% 늘었습니다. 남성에서는 median lifespan 수치가 9.6%와 12.8% 늘었지만 전체 생존 개선은 통계적으로 유의하지 않았습니다.</p>
<p>수명보다 더 눈에 띈 부분은 <b>frailty</b>였습니다. 털 상태, 보행, 척추 후만, 체중, 활동 등 31개 항목의 frailty index에서 Ca-AKG군이 더 건강한 상태를 유지했습니다. 연구진은 이를 ‘compression of morbidity’, 즉 아픈 기간을 줄이는 방향으로 해석했습니다.</p>
<p>하지만 이해상충도 알아둘 필요가 있습니다. 논문의 여러 저자는 Ca-AKG 기반 longevity 제품을 개발하는 회사와 지분·특허 관계가 있음을 공개했습니다. 연구 결과를 무효로 만드는 것은 아니지만 독립 재현의 중요성을 높이는 요소입니다.</p>

<h2>07. 그리고 독립 재현시험은 실패했다</h2>
<p>여기가 CA-AKG를 균형 있게 읽을 때 가장 중요한 부분입니다. 미국 National Institute on Aging의 <b>Interventions Testing Program(ITP)</b>은 서로 다른 세 연구기관에서 유전적으로 다양한 UM-HET3 생쥐를 사용해 수명효과를 검증하는 엄격한 프로그램입니다.</p>
<p>ITP는 먼저 AKG를 <b>18개월</b>부터 투여했지만 암수 어느 쪽에서도 수명 연장을 확인하지 못했습니다. ‘너무 늦게 시작했기 때문일 수 있다’는 가능성을 확인하기 위해 이후 <b>7개월</b>부터 다시 시작했지만 2026년 발표된 결과에서도 수명 연장은 재현되지 않았습니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>2020 C57BL/6J</b><span>여성에서 수명 연장, 양쪽 성에서 frailty 개선. 매우 긍정적.</span></div>
  <div class="evidence-card"><b>ITP · 18개월 시작</b><span>유전적으로 다양한 UM-HET3. 암수 모두 수명 연장 실패.</span></div>
  <div class="evidence-card"><b>ITP · 7개월 시작</b><span>더 일찍 투여해도 2026년 다시 수명 연장 실패.</span></div>
</div>
<p>따라서 ‘Ca-AKG는 생쥐 수명을 연장한다’고 일반화하는 표현은 이제 정확하지 않습니다. <b>특정 strain과 조건에서는 긍정적이었지만, 더 유전적으로 다양한 모델의 다기관 검증에서는 재현되지 않았다</b>고 써야 합니다.</p>

<h2>08. 인간에게서 가장 유명한 ‘8년 젊어졌다’ 연구는 무엇이 문제인가?</h2>
<p>2021년 <i>Aging</i>에 발표된 Rejuvant 연구는 42명이 평균 약 7개월 제품을 복용한 뒤 DNA methylation age가 평균 약 <b>8년 감소</b>했다고 보고해 큰 주목을 받았습니다.</p>
<p>하지만 이 연구는 무작위·위약대조시험이 아니라 <b>retrospective before-after 분석</b>입니다. 참가자 수가 작고, 자연적인 측정 변동과 regression to the mean을 충분히 통제하기 어렵습니다. 더 중요한 점은 사용 제품이 <b>Ca-AKG 단독이 아니라 성별에 따라 비타민 A·D 또는 A·D·B군 등이 포함된 복합제</b>였기 때문에 결과를 Ca-AKG 하나에 귀속할 수 없습니다.</p>
<p>또 연구자 일부는 해당 제품을 판매하는 회사와 관계가 있었습니다. 따라서 ‘CA-AKG가 사람의 생물학적 나이를 8년 되돌렸다’는 표현은 근거보다 훨씬 강한 주장입니다.</p>

<h2>09. 2026년 현실세계 데이터: 흥미롭지만 여전히 인과관계는 아니다</h2>
<p>2026년 <i>Aging Cell</i>에 발표된 건강 관심도가 매우 높은 코호트 분석에서는 delayed-release AKG+vitamin 제품 사용자가 평균적으로 약 <b>1.8년 낮은 Age Residual</b>과 연관돼 있었습니다. 반면 일반 AKG 사용자에서는 더 작은 차이가 있었지만 통계적으로 유의하지 않았습니다.</p>
<p>이 연구도 무작위시험이 아닙니다. 제품 사용자는 비사용자와 운동, 식사, 소득, 건강검진 빈도, 다른 보충제 사용 등에서 다를 수 있습니다. 연구진도 <b>healthy-user bias와 recruitment bias</b>를 주요 한계로 인정했습니다. 즉 새로운 힌트이지 치료효과의 증명은 아닙니다.</p>

<h2>10. 현재 가장 중요한 인간 시험: ABLE</h2>
<p><b>ABLE</b>은 CA-AKG 분야에서 가장 중요한 시험입니다. 싱가포르에서 40–60세의 비교적 건강한 성인 가운데 DNA methylation age가 실제 나이보다 높은 사람 120명을 모집해 <b>1 g/day sustained-release Ca-AKG</b>와 위약을 6개월 비교합니다. 이후 3개월 추적합니다.</p>
<p>1차 결과는 DNA methylation age 변화이고, 2차 결과로 염증·대사 혈액지표, 악력과 leg extension strength, arterial stiffness, skin autofluorescence, aerobic capacity 등을 봅니다. 즉 ‘시계 숫자’뿐 아니라 실제 신체 기능까지 같이 보려는 설계입니다.</p>
<p>2025년 발표된 논문은 120명 모집이 성공적으로 끝났다는 <b>recruitment feasibility</b> 결과일 뿐, Ca-AKG의 효과를 보고한 논문은 아닙니다. 2026년 10월 현재 공개된 peer-reviewed 효능 결과를 확인할 수 없습니다. 따라서 ABLE이 끝날 때까지 인간 항노화 효과에 대한 핵심 질문은 여전히 열려 있습니다.</p>

<h2>11. 2026년 중국의 작은 RCT도 완료됐지만 결과는 아직 공개되지 않았다</h2>
<p>NCT07114536은 중년·고령 성인 34명을 대상으로 Ca-AKG와 위약을 12주 비교한 무작위 이중맹검 시험으로, PhenoAge를 1차 지표로 등록했습니다. 레지스트리상 2025년 말 시험이 완료됐고 2026년 9월 상태가 갱신됐지만 <b>공식 결과 데이터는 아직 게시되지 않았습니다.</b></p>
<p>업계 홍보자료에는 telomerase·항산화·연골·collagen 관련 수치가 소개되지만, peer-reviewed 논문이나 등록 결과가 공개되기 전에는 LONGEVITY JOURNAL의 근거 판정에 포함하지 않습니다. 이 원칙은 앞으로 모든 보충제에 동일하게 적용합니다.</p>

<h2>12. 뼈 건강에 대한 인간 데이터는 항노화 연구보다 오래됐다</h2>
<p>Ca-AKG가 사람에게 완전히 처음 쓰이는 물질은 아닙니다. 2007년 골감소증이 있는 폐경 후 여성 76명의 6개월 이중맹검 시험에서는 calcium alone과 비교했을 때 Ca-AKG군에서 <b>CTX라는 골흡수 표지자가 더 감소</b>했습니다. lumbar spine BMD는 군내에서는 1.6% 증가했지만, 군간 차이는 통계적으로 유의하지 않았습니다.</p>
<p>이 연구는 Ca-AKG가 사람에서 생물학적 활성을 가질 수 있다는 단서는 주지만, 노화를 늦춘다는 연구는 아닙니다. ‘뼈 지표 변화’와 ‘건강수명 연장’을 구분해야 합니다.</p>

<h2>13. 후성유전 효과는 정말 기대할 만한가?</h2>
<p>AKG가 TET 효소의 필수 보조기질이라는 점은 확립된 생화학입니다. 2025년 인간 체세포 연구에서도 <b>AKG-TET axis</b>를 낮추면 염증성 SASP와 senescence가 강화되고, AKG bioavailability나 TET 기능을 높이면 세포 스트레스 회복성이 좋아지는 결과가 보고됐습니다.</p>
<p>하지만 이것도 <b>세포 수준</b>입니다. 보충제로 먹은 Ca-AKG가 특정 인간 조직의 TET 활성, methylation pattern, 세포노화를 원하는 방향으로 안정적으로 바꾸는지는 별도의 임상 질문입니다. 특히 cancer biology에서는 α-KG, succinate, fumarate, 2-HG 균형이 복잡하게 작용하므로 ‘demethylation = 무조건 젊어짐’이라고 해석하면 안 됩니다.</p>

<h2>14. 안전성과 용량: 아직 ‘최적 항노화 용량’은 없다</h2>
<p>ABLE은 1 g/day sustained-release Ca-AKG를 사용하고, 중국 시험은 2 g/day를 등록했습니다. 과거 bone 연구에서는 훨씬 높은 Ca-AKG 용량이 사용되기도 했습니다. 이 범위의 존재 자체가 <b>사람의 항노화 최적 용량이 아직 정해지지 않았다는 뜻</b>입니다.</p>
<p>Ca-AKG에는 칼슘도 포함되기 때문에 총 calcium 섭취량, 신장 기능, 신장결석 위험, 다른 calcium/vitamin D 보충제와의 중복을 고려해야 합니다. 또한 암·중증 대사질환·신장질환에서의 장기 사용 안전성은 건강한 중년을 대상으로 한 geroscience 시험과 별개 문제입니다.</p>
<div class="takeaway"><strong>복용량에 대한 현재 결론</strong><p><b>동물 수명 연구의 용량을 사람에게 환산하거나, ABLE의 1 g/day를 곧바로 일반인의 ‘권장 항노화 용량’으로 부르면 안 됩니다.</b> 현재 용량은 연구 프로토콜일 뿐이며 실제 임상 이득이 확인된 뒤에야 의미 있는 권고를 논의할 수 있습니다.</p></div>

<h2>15. LONGEVITY JOURNAL 근거 판정</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>TCA·대사 기전</b><span><strong>근거 강함.</strong> AKG의 정상 생리학적 역할은 확립돼 있음.</span></div>
  <div class="evidence-card"><b>후성유전 기전</b><span><strong>기전 강함.</strong> TET/JmjC의 co-substrate지만 경구 보충의 인간 조직 효과는 불확실.</span></div>
  <div class="evidence-card"><b>염증·SASP</b><span><strong>전임상 유망.</strong> 생쥐·세포에서 신호가 있지만 사람 임상결과 부족.</span></div>
  <div class="evidence-card"><b>생쥐 수명</b><span><strong>상충.</strong> 2020 C57BL/6J 긍정, ITP UM-HET3 두 번 재현 실패.</span></div>
  <div class="evidence-card"><b>인간 생물학적 나이</b><span><strong>매우 초기.</strong> 비대조·관찰연구 신호는 있으나 RCT 효능 결과 대기.</span></div>
  <div class="evidence-card"><b>인간 수명·건강수명</b><span><strong>입증 안 됨.</strong> 질병·장애·사망 감소 RCT 없음.</span></div>
</div>

<h2>16. 그래서 CA-AKG는 지금 어디쯤 와 있을까?</h2>
<p>CA-AKG는 NMN이나 Fisetin과 조금 다른 매력이 있습니다. 우리 몸에 원래 존재하고, TCA 회로·아미노산·후성유전·면역이라는 여러 노화 축에 실제로 걸쳐 있습니다. 2020년 생쥐 연구는 ‘수명을 늘리는 것보다 건강하게 지내는 기간을 늘린다’는 geroscience의 이상적인 그림을 보여줬습니다.</p>
<p>하지만 과학은 첫 번째 멋진 결과보다 <b>재현</b>을 더 중요하게 봅니다. 유전적으로 다양한 생쥐의 다기관 ITP에서 두 번 수명 연장이 실패했다는 사실은 무겁습니다. 인간에서도 지금까지 가장 화려한 결과는 대조군 없는 DNA methylation 연구였고, 결정적인 위약대조시험 결과는 아직 나오지 않았습니다.</p>
<div class="takeaway"><strong>LONGEVITY JOURNAL의 결론</strong><p><b>CA-AKG는 ‘기전이 풍부하고 인간 RCT가 실제로 진행 중인 유망 후보’이지만, 지금 시점에서 ‘검증된 항노화 보충제’라고 부르기에는 이릅니다.</b> 특히 2026년 ITP의 재현 실패 이후에는 ‘생쥐 수명 연장’조차 조건부 주장으로 바꿔야 합니다. 앞으로 ABLE의 DNA methylation age뿐 아니라 염증, 근력, 동맥경직, VO₂ 관련 결과가 함께 좋아지는지가 진짜 중요한 시험대입니다.</p></div>

<h2>근거자료 — 발표 시간순</h2>
<div class="timeline">
  <div class="paper"><time>2007</time><div><b>Radzki RP, et al. J Bone Miner Metab.</b><br>골감소증 폐경 후 여성 76명의 6개월 이중맹검 연구. Ca-AKG군에서 CTX 감소가 calcium-alone보다 컸지만 BMD의 군간 차이는 유의하지 않음. 항노화 연구가 아니라 인간 생물학적 활성에 대한 초기 자료.<br><a href="https://pubmed.ncbi.nlm.nih.gov/17896582/" target="_blank" rel="noopener noreferrer">PMID 17896582 ↗</a></div></div>
  <div class="paper"><time>2014</time><div><b>Chin RM, et al. Nature.</b><br>C. elegans에서 α-KG가 ATP synthase와 TOR 신호를 억제하고 autophagy를 증가시켜 수명을 연장. dietary restriction 경로와 일부 겹칠 가능성 제시.<br><a href="https://pubmed.ncbi.nlm.nih.gov/24828042/" target="_blank" rel="noopener noreferrer">PMID 24828042 · DOI 10.1038/nature13264 ↗</a></div></div>
  <div class="paper"><time>2014</time><div><b>Salminen A, et al. Ageing Research Reviews.</b><br>AKG가 TET와 JmjC 계열 DNA·histone demethylase의 필수 보조기질이라는 대사-후성유전 연결을 정리한 리뷰.<br><a href="https://pubmed.ncbi.nlm.nih.gov/24910305/" target="_blank" rel="noopener noreferrer">PMID 24910305 · DOI 10.1016/j.arr.2014.05.004 ↗</a></div></div>
  <div class="paper"><time>2020</time><div><b>Asadi Shahmirzadi A, et al. Cell Metabolism.</b><br>18개월 C57BL/6J 생쥐에 2% Ca-AKG 식이. 여성에서 유의한 수명 연장, 암수 모두 frailty 감소와 염증 개선. IL-10 증가와 chronic inflammation 억제 제안. 이해상충 공개됨.<br><a href="https://pubmed.ncbi.nlm.nih.gov/32877690/" target="_blank" rel="noopener noreferrer">PMID 32877690 · DOI 10.1016/j.cmet.2020.08.004 ↗</a></div></div>
  <div class="paper"><time>2021</time><div><b>Demidenko O, et al. Aging.</b><br>Rejuvant 복용자 42명의 retrospective before-after 분석. 약 7개월 후 DNA methylation age 평균 약 8년 감소 보고. 무작위 대조군이 없고 Ca-AKG+vitamin 복합제이며 회사 관련 이해상충이 있어 인과해석 제한.<br><a href="https://pubmed.ncbi.nlm.nih.gov/34847066/" target="_blank" rel="noopener noreferrer">PMID 34847066 · DOI 10.18632/aging.203736 ↗</a></div></div>
  <div class="paper"><time>2022</time><div><b>Sharma S, et al. Trends Endocrinol Metab.</b><br>인간 AKG 보충 연구를 정리한 리뷰. 모델생물 근거와 달리 인간 노화·노화질환을 개선했다는 현대 임상시험은 당시 부족하다고 평가.<br><a href="https://pubmed.ncbi.nlm.nih.gov/34952764/" target="_blank" rel="noopener noreferrer">PMID 34952764 · DOI 10.1016/j.tem.2021.11.003 ↗</a></div></div>
  <div class="paper"><time>2023</time><div><b>Sandalova E, et al. GeroScience — ABLE protocol.</b><br>40–60세 120명, 1 g/day sustained-release Ca-AKG vs placebo 6개월. 1차 결과는 DNA methylation age, 2차 결과는 염증·대사·근력·동맥경직·aerobic capacity 등.<br><a href="https://pubmed.ncbi.nlm.nih.gov/37217632/" target="_blank" rel="noopener noreferrer">PMID 37217632 · NCT05706389 ↗</a></div></div>
  <div class="paper"><time>2024</time><div><b>Interventions Testing Program · UM-HET3.</b><br>유전적으로 다양한 생쥐에 AKG를 18개월부터 투여했으나 암수 모두 수명 연장 없음. 2020년 단일 strain 연구의 재현성에 중요한 반대 근거.<br><a href="https://pubmed.ncbi.nlm.nih.gov/38753230/" target="_blank" rel="noopener noreferrer">PMID 38753230 ↗</a></div></div>
  <div class="paper"><time>2025</time><div><b>ABLE recruitment feasibility report.</b><br>467명 관심자 가운데 120명 등록 완료. 연구 모집 가능성을 보여준 논문이며 Ca-AKG의 효능 결과는 아직 보고하지 않음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/40819772/" target="_blank" rel="noopener noreferrer">PMID 40819772 ↗</a></div></div>
  <div class="paper"><time>2025</time><div><b>AKG–TET axis and cellular senescence.</b><br>인간 체세포에서 AKG/TET 활성을 낮추면 inflammatory SASP와 senescence가 강화되고, 반대로 AKG availability를 높이면 세포 스트레스 회복성이 개선된 전임상 연구.<br><a href="https://pubmed.ncbi.nlm.nih.gov/41497192/" target="_blank" rel="noopener noreferrer">PMID 41497192 · DOI 10.1016/j.isci.2025.114298 ↗</a></div></div>
  <div class="paper"><time>2026</time><div><b>Korstanje R, et al. GeroScience — NIA ITP.</b><br>AKG를 7개월부터 시작한 두 번째 UM-HET3 시험에서도 암수 모두 수명 연장 실패. 18개월 시작 실패와 함께 독립적인 재현 실패가 두 번 확인됨.<br><a href="https://pubmed.ncbi.nlm.nih.gov/41843349/" target="_blank" rel="noopener noreferrer">PMID 41843349 · DOI 10.1007/s11357-026-02201-2 ↗</a></div></div>
  <div class="paper"><time>2026</time><div><b>Pabis K, et al. Aging Cell.</b><br>건강 관심도가 높은 cohort의 observational analysis. delayed-release AKG+vitamin 사용이 약 1.8년 낮은 Age Residual과 연관됐지만 일반 AKG는 유의하지 않았고 healthy-user/recruitment bias 존재. 인과관계 증명 아님.<br><a href="https://pubmed.ncbi.nlm.nih.gov/42166733/" target="_blank" rel="noopener noreferrer">PMID 42166733 ↗</a></div></div>
  <div class="paper"><time>2026</time><div><b>Alpha-Ketoglutarate: A Metabolic Regulator of Cellular Homeostasis and Pathophysiology.</b><br>TCA, 후성유전, 면역, 염증, lifespan 기전을 폭넓게 검토한 최신 리뷰. 인간 임상근거 부족과 최적 용량·장기 안전성 미확립을 주요 한계로 지적.<br><a href="https://pubmed.ncbi.nlm.nih.gov/42072377/" target="_blank" rel="noopener noreferrer">PMID 42072377 ↗</a></div></div>
  <div class="paper"><time>2026</time><div><b>NCT07114536 — Ca-AKG aging RCT.</b><br>중년·고령 성인 34명의 12주 무작위 이중맹검 위약대조시험. PhenoAge를 1차 지표로 등록했고 시험은 완료됐지만 2026-10-08 현재 registry에 결과 미게시. 업계 홍보자료는 근거 판정에서 제외.<br><a href="https://clinicaltrials.gov/study/NCT07114536" target="_blank" rel="noopener noreferrer">ClinicalTrials.gov NCT07114536 ↗</a></div></div>
</div>

<p class="editor-note"><strong>최종 근거 검토:</strong> 2026-10-08 · 향후 ABLE의 1차 효능 결과와 NCT07114536의 공식 결과가 공개되면 DNA methylation age뿐 아니라 염증·근력·aerobic capacity·안전성까지 함께 업데이트합니다. 이 글은 일반 과학 정보이며 개인의 복용 처방을 대신하지 않습니다.</p>
`
});
})();
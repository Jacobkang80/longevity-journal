(()=>{
const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
if(posts.some(x=>x.slug==='mtor-ampk-sirtuin-nutrient-sensing'))return;
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
posts.push({
  slug:'mtor-ampk-sirtuin-nutrient-sensing',
  category:'health',
  date:'2026-10-10',
  title:'mTOR·AMPK·Sirtuin — 장수를 조절하는 세포의 영양 감지 시스템',
  excerpt:'먹을 때 성장하고, 공복과 운동 때 정비하는 이유는 무엇일까요? mTORC1, AMPK, Sirtuin, insulin/IGF-1, autophagy를 하나의 영양 감지 지도에 연결하고 단식·운동·단백질·rapamycin·metformin·NMN의 위치를 정리합니다.',
  tags:['영양 감지','Nutrient sensing','mTOR','mTORC1','AMPK','Sirtuin','SIRT1','NAD+','Autophagy','Insulin','IGF-1','Leucine','Protein','Fasting','Exercise','Rapamycin','Metformin','NMN','Geroscience','Longevity'],
  html:`
<p class="editor-note"><strong>LONGEVITY JOURNAL 핵심 글 ④:</strong> 근육 → VO₂max → 혈당·인슐린에 이어, 이번 글은 그 위에서 반복해서 등장했던 <b>mTOR·AMPK·Sirtuin·autophagy를 하나의 기준 지도</b>로 정리합니다. 근거 검토일 2026-10-10.</p>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>mTOR, AMPK, Sirtuin은 ‘장수 버튼’이 아니라 세포가 영양과 에너지 상태를 읽는 센서 네트워크입니다.</b> mTORC1은 아미노산·인슐린·성장신호가 충분할 때 단백질합성과 세포 성장을 촉진하고, AMPK는 에너지가 부족하거나 운동으로 ATP 소비가 늘 때 활성화되어 에너지 생산·지방산 산화·자가포식 쪽으로 대사를 돌립니다. Sirtuin은 NAD⁺를 필요로 하는 효소군으로 미토콘드리아, DNA 수선, 스트레스 반응과 연결됩니다. 장수의 목표는 <b>mTOR를 항상 끄거나 AMPK를 항상 켜는 것</b>이 아니라, 먹을 때 성장하고 운동·공복 때 정비하는 <b>대사적 유연성</b>을 유지하는 것입니다.</p></div>

<h2>01. 왜 ‘영양 감지’가 노화의 Hallmark인가?</h2>
<p>세포는 주변에 에너지와 영양소가 얼마나 있는지 계속 측정합니다. 포도당, 아미노산, 지방산, 인슐린·IGF-1 같은 호르몬, ATP와 AMP 비율, NAD⁺ 상태를 읽고 <b>성장할지, 저장할지, 에너지를 만들지, 손상된 구성요소를 정리할지</b>를 결정합니다.</p>
<p>2023년 <i>Cell</i>의 업데이트된 Hallmarks of Aging은 <b>deregulated nutrient-sensing</b>을 12개 노화 특징 중 하나로 유지했고, 동시에 <b>disabled macroautophagy</b>를 독립된 hallmark로 추가했습니다. 두 축은 서로 깊게 연결되어 있습니다. 영양이 풍부하면 성장 신호가 우세하고, 영양·에너지가 부족하면 세포는 재활용과 유지보수 쪽으로 이동합니다.</p>
<div class="pathway" aria-label="nutrient sensing overview">
  <div class="pathway-step"><b>영양 풍부</b><span>아미노산 · 인슐린 · IGF-1</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>mTORC1</b><span>성장 · 단백질합성 · 저장</span></div><div class="pathway-arrow">↔</div>
  <div class="pathway-step"><b>AMPK / Sirtuin</b><span>에너지 스트레스 · 적응 · 유지보수</span></div>
</div>
<p class="small-note">이 그림은 이해를 위한 단순화입니다. 실제 세포에서는 세 경로가 동시에 여러 조직에서 서로 다른 강도로 작동합니다.</p>

<h2>02. mTOR — ‘성장하라’는 신호의 중심</h2>
<p>mTOR(mechanistic target of rapamycin)는 세포의 성장·대사·단백질합성을 조절하는 핵심 kinase입니다. 중요한 점은 mTOR가 하나의 단일 스위치가 아니라 <b>mTORC1과 mTORC2라는 서로 다른 복합체</b>를 만든다는 것입니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>mTORC1</b><span>아미노산, 성장인자, 에너지 상태를 통합해 단백질·지질·뉴클레오타이드 합성을 촉진하고 autophagy를 억제.</span></div>
  <div class="evidence-card"><b>mTORC2</b><span>세포 생존, cytoskeleton, AKT 신호 등과 연결. 만성 rapamycin 노출에서 일부 조직의 mTORC2까지 영향을 받을 수 있음.</span></div>
  <div class="evidence-card"><b>중요한 포인트</b><span>노화 연구의 주요 표적은 대개 mTOR 전체가 아니라 특히 mTORC1의 과도하거나 지속적인 활성.</span></div>
</div>
<p>mTORC1은 나쁜 경로가 아닙니다. 근육을 만들고 상처를 회복하고 면역세포를 증식시키려면 필요합니다. 문제는 <b>성장 모드가 만성적으로 우세해지고 정비 모드로 전환되는 시간이 부족해지는 것</b>입니다.</p>

<h2>03. Leucine은 왜 근육 글과 장수 글에 동시에 등장할까?</h2>
<p>Leucine은 단백질을 구성하는 필수아미노산이면서 mTORC1에 영양 상태를 알리는 강력한 신호입니다. 2016년 <i>Science</i> 연구들은 <b>Sestrin2가 leucine sensor로 작동</b>하여 leucine 존재 여부를 mTORC1 신호에 연결한다는 구조적·기능적 근거를 제시했습니다.</p>
<p>이 때문에 leucine은 노년기 근육 단백질합성을 자극하는 데 유용한 반면, 장수 논의에서는 mTORC1 활성이라는 측면이 자주 언급됩니다. 여기서 흔히 생기는 오류가 <b>“mTOR가 노화에 관련되니 단백질을 적게 먹을수록 좋다”</b>는 결론입니다.</p>
<div class="takeaway"><strong>단백질 역설</strong><p>노년기에는 근감소증·frailty 자체가 매우 큰 건강위험입니다. 따라서 장수를 위해 만성적인 단백질 부족을 만들기보다 <b>충분한 단백질과 저항운동으로 근육을 지키면서, 하루 종일 계속 먹지 않고 공복·운동 시간을 확보하는 방식</b>이 더 현실적인 접근입니다. <a href="#post/muscle-longevity-evidence">근육과 장수 글에서 자세히 보기 →</a></p></div>

<h2>04. AMPK — ‘에너지가 부족하다’를 감지하는 센서</h2>
<p>AMPK(AMP-activated protein kinase)는 세포의 에너지 스트레스를 감지하는 대표적인 kinase입니다. 운동이나 에너지 부족으로 ATP 사용이 늘고 AMP/ADP 신호가 증가하면 AMPK가 활성화될 수 있습니다.</p>
<p>2024년 <i>Nature Reviews Endocrinology</i> 리뷰는 AMPK를 단순한 ‘에너지 부족 센서’를 넘어 <b>지방산 산화, 포도당 흡수, glycolysis, autophagy, 미토콘드리아 생성과 제거, 인슐린 감수성</b>을 조율하는 조직 보존 시스템으로 정리했습니다.</p>
<div class="pathway" aria-label="AMPK pathway">
  <div class="pathway-step"><b>운동 · 에너지 부족</b><span>ATP 사용 ↑ · AMP/ADP 신호 ↑</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>AMPK</b><span>에너지 생산 ↑ · 합성 부담 ↓</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>Adaptation</b><span>지방산 산화 · glucose uptake · autophagy · mitochondrial quality</span></div>
</div>

<h2>05. Sirtuin — NAD⁺로 세포 상태를 읽는 효소군</h2>
<p>Sirtuin은 흔히 ‘장수 유전자’라고 불리지만 정확히는 <b>NAD⁺를 필요로 하는 단백질 deacylase/ADP-ribosyltransferase 효소군</b>입니다. 사람에게는 SIRT1부터 SIRT7까지 7종이 있으며 핵, 세포질, 미토콘드리아 등 서로 다른 위치에서 작동합니다.</p>
<p>SIRT1은 FOXO, PGC-1α, NF-κB 등 여러 단백질의 acetylation 상태를 조절하며 스트레스 반응, 미토콘드리아 생합성, 염증, autophagy와 연결됩니다. SIRT3는 미토콘드리아 단백질 조절에 특히 중요합니다.</p>
<p>하지만 <b>Sirtuin 활성 = 인간 수명연장</b>은 아직 성립하지 않습니다. 2025년 Nature Metabolism 리뷰는 인간에서 연령에 따른 NAD⁺ 감소가 모든 조직에서 일관되게 확인된 것은 아니며, NR·NMN 같은 NAD⁺ precursor의 인간 임상효과도 제한적이고 조직별 차이가 크다고 정리했습니다.</p>

<h2>06. mTOR와 AMPK는 서로 반대편인가?</h2>
<p>교과서 그림에서는 mTOR와 AMPK가 반대 방향 화살표로 그려집니다. 실제로 에너지 스트레스 상황에서 AMPK는 TSC2와 Raptor 등을 통해 mTORC1 활성을 억제하고, ULK1을 통해 autophagy 개시를 촉진할 수 있습니다.</p>
<p>그러나 생체에서는 <b>시간과 조직이 중요합니다.</b> 예를 들어 운동 중에는 AMPK가 활성화되더라도 운동 후 단백질과 충분한 에너지가 공급되면 근육에서는 mTORC1을 통한 회복·단백질합성이 다시 필요합니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>운동 중</b><span>ATP 소비, AMPK·Ca²⁺·stress signaling, glucose uptake와 대사 적응.</span></div>
  <div class="evidence-card"><b>운동 후</b><span>저항운동 + 단백질에서 mTORC1·MPS가 올라가 근육 회복과 성장에 기여.</span></div>
  <div class="evidence-card"><b>장기 적응</b><span>미토콘드리아 기능, 근육, 인슐린 감수성, 심폐체력이 함께 개선될 수 있음.</span></div>
</div>
<p>그래서 장수를 위한 운동의 장점은 특정 경로 하나를 계속 누르는 데 있지 않고, <b>에너지 스트레스와 회복을 반복시켜 세포가 두 상태를 모두 제대로 사용할 수 있게 만드는 것</b>에 가깝습니다.</p>

<h2>07. Autophagy는 이 시스템의 ‘청소 버튼’일까?</h2>
<p>Autophagy는 손상된 단백질과 세포소기관을 lysosome으로 보내 분해하고 재활용하는 과정입니다. mTORC1이 강하게 활성화된 상태에서는 autophagy 개시가 억제되고, AMPK는 여러 경로를 통해 autophagy를 촉진할 수 있습니다.</p>
<p>다만 “공복 몇 시간이 지나면 autophagy가 켜진다”는 식으로 인간에게 정확한 시간을 부여하기는 어렵습니다. 조직마다 반응이 다르고, 인간에서 autophagic flux를 실시간으로 직접 측정하기도 쉽지 않습니다. 따라서 단식을 <b>자가포식 시간표</b>로 이해하기보다 에너지 섭취와 circadian rhythm을 조절하는 하나의 대사 개입으로 보는 것이 더 정확합니다.</p>
<p><a href="#post/intermittent-fasting-evidence">간헐적 단식과 자가포식의 인간 근거 자세히 보기 →</a></p>

<h2>08. 단식은 mTOR를 끄고 AMPK를 켜는가?</h2>
<p>공복 상태에서는 인슐린과 아미노산 유입이 감소하고 지방산·케톤 사용이 늘면서 성장 신호보다 에너지 동원 신호가 상대적으로 우세해집니다. 이 방향은 mTORC1 감소, AMPK·Sirtuin 관련 신호 증가와 연결될 수 있습니다.</p>
<p>하지만 인간에서 단식의 이점을 전부 mTOR·AMPK·Sirtuin 하나로 설명하면 과도한 단순화입니다. 체중감량, 총섭취열량, 식사시간, circadian alignment, 지방량 감소가 동시에 작용하기 때문입니다.</p>

<h2>09. 운동은 가장 현실적인 ‘영양 감지 훈련’이다</h2>
<p>운동은 이 세 경로를 가장 역동적으로 사용하게 만드는 생활개입입니다. 유산소·고강도 운동은 에너지 스트레스와 AMPK/PGC-1α 신호를 자극하고, 저항운동은 근육의 기계적 장력과 amino-acid signaling을 통해 mTORC1과 단백질합성을 유도합니다.</p>
<p>즉 운동은 <b>AMPK냐 mTOR냐를 선택하는 것이 아니라 둘을 시간적으로 사용</b>합니다. 이 점이 ‘항상 성장’도 ‘항상 결핍’도 아닌 장수의 대사 유연성과 잘 맞습니다.</p>

<h2>10. Rapamycin — mTOR와 수명의 연결을 가장 강하게 보여준 약</h2>
<p>mTOR가 장수 연구에서 가장 유명해진 이유 중 하나가 rapamycin입니다. 2009년 NIA Interventions Testing Program의 연구에서는 <b>생후 600일이 지난 유전적으로 다양한 생쥐에게 rapamycin을 시작했는데도</b> 암수 모두에서 수명이 연장됐습니다. 이후 여러 마우스 연구에서 결과가 반복됐습니다.</p>
<p>하지만 동물에서의 강력한 수명연장 근거와 인간의 임상 근거 사이에는 큰 간격이 있습니다. 2024년 <i>Lancet Healthy Longevity</i> 체계적 문헌고찰은 인간 연구 19편을 검토해 면역·심혈관·피부 관련 일부 지표 개선을 확인했지만, 근육·신경계 등에서는 일관된 효과가 없었고 일부 질환군에서 감염·지질 증가 같은 부작용도 보고했습니다.</p>
<div class="takeaway"><strong>현재 위치</strong><p><b>Rapamycin은 인간 장수약으로 승인된 약이 아닙니다.</b> 동물 geroscience에서는 가장 강력한 후보 중 하나지만, 건강한 사람이 수명연장을 목적으로 임의 복용할 단계의 근거는 아닙니다. 2025년의 별도 임상근거 리뷰도 건강한 성인에서 노화를 늦춘다는 결론은 아직 확립되지 않았다고 평가했습니다.</p></div>

<h2>11. Metformin — AMPK를 자극하면 장수약이 될까?</h2>
<p>Metformin은 mitochondrial complex I, cellular energy state, AMPK, mTOR, glucose production 등 여러 축에 영향을 주는 제2형 당뇨병 치료제입니다. 이 때문에 geroscience에서 calorie-restriction mimetic 후보로 큰 관심을 받았습니다.</p>
<p>하지만 <b>metformin = AMPK activator = 장수</b>라는 직선적인 설명은 정확하지 않습니다. 2025년 리뷰에서는 초기 관찰연구의 편향과 비당뇨인 임상시험 결과를 재검토하면서 metformin의 항노화 가능성에 대한 불확실성이 커지고 있다고 지적했습니다. 반대로 2026년 리뷰들은 여전히 AMPK·mTOR·autophagy 등 다중 경로를 통한 geroprotective 가능성을 논의하고 있습니다.</p>
<p>즉 metformin은 매우 중요한 연구대상이지만, <b>건강한 사람의 수명연장을 입증한 약은 아닙니다.</b></p>

<h2>12. NMN·NR·Resveratrol은 Sirtuin을 통해 젊게 만들까?</h2>
<p>NMN과 NR은 NAD⁺ precursor이고, Sirtuin은 NAD⁺를 필요로 하므로 이론적으로는 자연스럽게 연결됩니다. 실제 인간 연구에서도 NMN·NR 복용 후 혈중 NAD 관련 대사체가 증가하는 경우가 많습니다.</p>
<p>하지만 2025년 Nature Metabolism 리뷰와 2026년 systematic review는 <b>biochemical target engagement와 실제 healthspan 개선 사이의 간격</b>을 강조합니다. NAD⁺ 관련 지표는 움직여도 근육, 혈관, 대사, 기능적 결과는 연구마다 다르고 종종 유의한 변화가 없습니다.</p>
<p>Resveratrol 역시 ‘SIRT1 activator’라는 이미지가 강하지만, 2025년 11개 RCT 메타분석에서는 성인의 SIRT1 유전자·단백질 발현 또는 혈중 수준에 전체적으로 유의한 변화가 확인되지 않았습니다.</p>
<p><a href="#post/nmn-evidence-guide">NMN과 NAD⁺ 인간 임상근거 자세히 보기 →</a></p>

<h2>13. ‘장수 스위치’라는 표현이 위험한 이유</h2>
<p>mTOR를 OFF, AMPK와 Sirtuin을 ON으로 두면 오래 살 것처럼 느껴집니다. 하지만 사람의 생리학은 그렇게 단순하지 않습니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>mTOR가 너무 낮으면</b><span>근육 단백질합성·면역·상처 회복 같은 기능에 불리할 수 있음.</span></div>
  <div class="evidence-card"><b>AMPK가 항상 높으면</b><span>세포 성장과 합성을 억제하는 방향이 항상 모든 조직에서 유리한 것은 아님.</span></div>
  <div class="evidence-card"><b>Sirtuin도 7종</b><span>조직·질환·isoform에 따라 역할이 달라 단순히 ‘높을수록 좋다’고 할 수 없음.</span></div>
</div>
<p>장수에 필요한 것은 어느 하나의 pathway를 극단적으로 고정하는 것이 아니라 <b>상황에 따라 성장과 유지보수 사이를 오갈 수 있는 능력</b>입니다.</p>

<h2>14. 실전에서 이 네트워크를 어떻게 다룰까?</h2>
<ol>
  <li><b>저항운동으로 mTOR를 제대로 사용한다.</b> 성장 신호 자체를 두려워하지 말고 근육과 기능을 유지합니다.</li>
  <li><b>유산소·고강도 운동으로 AMPK와 미토콘드리아 적응을 자극한다.</b></li>
  <li><b>하루 종일 계속 먹는 패턴을 피한다.</b> 식사와 비식사 시간을 구분해 대사 전환의 여지를 둡니다.</li>
  <li><b>단백질은 부족하지 않게 먹는다.</b> 특히 노년기에는 근감소증 위험과 함께 판단해야 합니다.</li>
  <li><b>수면과 circadian rhythm을 지킨다.</b> 영양 감지는 식사만이 아니라 생체시계와도 연결됩니다.</li>
  <li><b>약물·보충제를 생활습관의 대체재로 보지 않는다.</b> Rapamycin, metformin, NMN은 서로 근거 수준이 크게 다릅니다.</li>
</ol>

<div class="pathway" aria-label="longevity metabolic flexibility">
  <div class="pathway-step"><b>식사 · 회복</b><span>Insulin · amino acids · mTORC1</span></div><div class="pathway-arrow">↔</div>
  <div class="pathway-step highlight"><b>Metabolic flexibility</b><span>성장 ↔ 정비를 상황에 맞게 전환</span></div><div class="pathway-arrow">↔</div>
  <div class="pathway-step"><b>운동 · 공복</b><span>AMPK · NAD⁺/Sirtuin · autophagy signaling</span></div>
</div>

<h2>Evidence Timeline — 영양 감지와 장수 연구의 흐름</h2>
<div class="timeline">
${paper('2009','Rapamycin fed late in life extends lifespan in genetically heterogeneous mice','생후 600일에 시작한 rapamycin도 암수 생쥐의 수명을 연장했습니다. mTOR 억제와 포유류 수명의 연결을 보여준 landmark 연구입니다.','https://pubmed.ncbi.nlm.nih.gov/19587680/')}
${paper('2016','Sestrin2 is a leucine sensor for the mTORC1 pathway','Leucine이 Sestrin2를 통해 mTORC1에 영양 상태를 전달한다는 분자적 기전을 보여주었습니다. 단백질 섭취와 성장신호를 연결하는 대표 연구입니다.','https://pubmed.ncbi.nlm.nih.gov/26449471/')}
${paper('2023','Hallmarks of aging: An expanding universe','Deregulated nutrient-sensing을 핵심 hallmark로 유지하고 disabled macroautophagy를 독립 hallmark로 추가했습니다.','https://pubmed.ncbi.nlm.nih.gov/36599349/')}
${paper('2024','AMPK as a mediator of tissue preservation: time for a shift in dogma?','AMPK를 지방산 산화, glucose uptake, autophagy, mitochondrial quality, insulin sensitivity를 조율하는 에너지 스트레스 센서로 정리한 리뷰입니다.','https://www.nature.com/articles/s41574-024-00992-y','Nature Reviews Endocrinology')}
${paper('2024','Targeting ageing with rapamycin and its derivatives in humans: a systematic review','19개 인간 연구를 검토해 일부 생리기능 개선 가능성과 동시에 제한된 임상근거 및 부작용 신호를 정리했습니다.','https://pubmed.ncbi.nlm.nih.gov/38310895/')}
${paper('2025','NAD+ precursor supplementation in human ageing: clinical evidence and challenges','NAD⁺ precursor는 biochemical target을 움직이지만 인간의 건강수명 관련 결과는 제한적이고 조직별 근거가 부족하다고 평가했습니다.','https://pubmed.ncbi.nlm.nih.gov/41083806/')}
${paper('2025','Impact of Resveratrol Supplementation on Human Sirtuin 1','11개 RCT 메타분석에서 resveratrol이 전체적으로 SIRT1 유전자·단백질 발현이나 혈중 수준을 유의하게 높이지 못했습니다.','https://pubmed.ncbi.nlm.nih.gov/40158656/')}
${paper('2026','NAD⁺ supplementation for anti-aging and wellness: systematic review','NR·NMN은 NAD 관련 대사체를 올리지만 기능·대사·혈관 등 healthspan 결과는 이질적이고 자주 null이었다고 정리했습니다.','https://pubmed.ncbi.nlm.nih.gov/41655607/')}
</div>

<h2>15. 결국 장수의 핵심은 ‘항상 결핍’도 ‘항상 성장’도 아니다</h2>
<p>젊음을 유지하기 위해 mTOR를 끄고 살아야 한다는 생각은 매력적으로 단순하지만 현실의 인간 생리와 맞지 않습니다. 근육을 만들고 면역반응을 하고 손상된 조직을 회복하려면 성장 신호가 필요합니다. 반대로 하루 종일 먹고 움직이지 않으면서 성장·저장 신호만 반복하는 것도 건강한 상태가 아닙니다.</p>
<p>제가 이 네트워크에서 가장 중요하게 보는 개념은 <b>대사적 유연성</b>입니다.</p>
<div class="takeaway"><strong>결론</strong><p><b>먹을 때는 성장하고, 운동할 때는 에너지를 쓰고, 공복에는 저장 에너지를 동원하고, 잠잘 때는 회복하는 몸.</b> mTOR·AMPK·Sirtuin은 이 리듬을 만드는 분자적 언어입니다. 현재 인간에게 가장 확실한 전략은 특정 pathway를 약으로 조작하는 것보다 <b>운동, 적절한 단백질, 과잉 섭취 방지, 규칙적인 식사시간, 수면</b>을 통해 이 네트워크가 자연스럽게 오가도록 만드는 것입니다.</p></div>

<p class="editor-note"><strong>다음 연결:</strong> 이 글이 세포의 ‘영양 감지 지도’라면, 다음 핵심 글에서는 실제로 노화 속도를 측정한다고 주장하는 <b>Epigenetic Clock · PhenoAge · GrimAge · DunedinPACE</b>가 무엇을 측정하는지 살펴봅니다.</p>
`
});
})();
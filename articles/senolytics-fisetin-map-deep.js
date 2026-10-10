(()=>{
const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
if(posts.some(x=>x.slug==='senolytics-fisetin-current-evidence'))return;
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
posts.push({
  slug:'senolytics-fisetin-current-evidence',
  category:'health',
  date:'2026-10-11',
  title:'노화세포를 제거하면 젊어질까? — Senolytics와 Fisetin의 현재',
  excerpt:'노화세포는 왜 쌓이고, SASP는 왜 문제가 되며, Fisetin·Dasatinib+Quercetin·Navitoclax·FOXO4-DRI는 어디까지 검증됐을까요? 동물 수명연장부터 2026년 인간 임상시험까지 세놀리틱의 현재 지도를 정리합니다.',
  tags:['Senolytics','세놀리틱','Cellular senescence','노화세포','SASP','Fisetin','Dasatinib','Quercetin','Navitoclax','ABT-263','FOXO4-DRI','Senomorphic','Inflammaging','Geroscience','Healthspan','Longevity'],
  html:`
<p class="editor-note"><strong>LONGEVITY JOURNAL 핵심 글 ⑧:</strong> Rapamycin·Metformin을 다룬 Geroscience 글에 이어, 이번 글은 노화의 또 다른 핵심 축인 <b>cellular senescence와 senolytics</b>를 한 장의 지도로 정리합니다. 기존 <a href="#post/fisetin-evidence-guide">Fisetin 심층 글</a>은 한 물질을 깊게 다루고, 이번 글은 Fisetin·D+Q·Navitoclax·FOXO4-DRI를 서로 비교합니다. 근거 검토일 2026-10-11.</p>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>노화세포 제거는 동물에서 매우 강력한 geroscience 전략이지만, 사람에게서 ‘젊어짐’이나 수명연장은 아직 증명되지 않았습니다.</b> 유전적으로 p16 양성 세포를 제거하거나 senolytic 약물을 사용한 생쥐 연구에서는 건강수명·조직기능·수명이 개선됐습니다. 인간에서는 Dasatinib+Quercetin(D+Q)이 소규모 연구에서 노화세포 표지자를 낮추고, 2026년 MASH 무작위 2상 시험에서 간섬유화와 질병활성 개선 신호를 보였습니다. 반면 <b>Fisetin의 인간 임상근거는 2026년 현재 제한적이고 일관되지 않으며</b>, Navitoclax는 혈소판 감소, FOXO4-DRI는 대부분 전임상 단계라는 한계가 있습니다. 따라서 현재 senolytics는 <b>유망한 치료 플랫폼이지 검증된 ‘항노화 복용법’은 아닙니다.</b></p></div>

<h2>01. 노화세포는 단순히 ‘늙은 세포’가 아니다</h2>
<p><b>Cellular senescence</b>는 세포가 심한 DNA 손상, 텔로미어 이상, 종양유전자 활성, 산화스트레스, 항암치료 같은 자극을 받은 뒤 장기간 증식을 멈추는 상태입니다. 이 반응은 원래 손상된 세포의 무제한 증식을 막는 <b>종양 억제 메커니즘</b>이며, 발생·상처 치유·조직 재형성에도 관여합니다.</p>
<p>따라서 노화세포 자체를 ‘독소’라고 부르는 것은 부정확합니다. 문제는 나이가 들면서 면역계가 일부 노화세포를 충분히 제거하지 못하고, 특정 조직에 <b>만성적으로 축적</b>될 때 생깁니다.</p>

<div class="pathway" aria-label="cellular senescence pathway">
  <div class="pathway-step"><b>Cell stress</b><span>DNA 손상 · 텔로미어 · 항암치료 · ROS</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>Senescence</b><span>증식 정지 + 생존 신호 강화</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>SASP</b><span>염증성 사이토카인 · 성장인자 · protease</span></div>
</div>

<h2>02. SASP — 왜 주변 세포까지 늙게 만들 수 있을까?</h2>
<p>일부 노화세포는 <b>SASP(senescence-associated secretory phenotype)</b>라 불리는 분비 프로그램을 활성화합니다. IL-6, IL-8을 포함한 사이토카인·케모카인, 성장인자, 단백질분해효소 등이 주변 미세환경을 바꿀 수 있습니다.</p>
<p>SASP는 짧게 작동할 때 면역세포를 불러 손상세포를 제거하고 상처 회복에 도움을 줄 수 있습니다. 그러나 장기간 지속되면 만성 염증, 섬유화, 줄기세포 기능 저하, 주변 세포의 2차 노화와 연결될 수 있습니다. 2023년 업데이트된 Hallmarks of Aging에서도 <b>cellular senescence</b>는 핵심 hallmark로 유지됐습니다.</p>

<h2>03. Senolytic과 Senomorphic은 무엇이 다른가?</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>Senolytic</b><span>노화세포가 의존하는 생존경로를 일시적으로 차단해 apoptosis를 유도. 목표는 세포 자체의 제거.</span></div>
  <div class="evidence-card"><b>Senomorphic</b><span>세포를 죽이지 않고 SASP·염증성 분비와 해로운 기능을 억제하는 전략.</span></div>
  <div class="evidence-card"><b>Immune clearance</b><span>노화세포의 표면표지를 이용해 면역계가 선택적으로 제거하도록 유도하는 차세대 전략.</span></div>
</div>
<p>Senolytic의 핵심 아이디어는 노화세포가 정상세포보다 BCL-2/BCL-XL, PI3K/AKT, p53/FOXO4 등 특정 <b>senescent-cell anti-apoptotic pathways(SCAPs)</b>에 더 의존한다는 점입니다. 이 ‘생존의 약점’을 잠깐 건드려 선택적으로 제거하려는 것입니다.</p>

<h2>04. 왜 생쥐 연구가 이렇게 강력했을까?</h2>
<p>2016년 <i>Nature</i> 연구는 자연적으로 쌓이는 p16<sup>Ink4a</sup> 양성 세포를 유전적으로 제거하면 두 유전적 배경의 생쥐에서 <b>중앙수명이 늘고 신장·심장·지방조직의 노화성 기능저하가 늦어질 수 있음</b>을 보여줬습니다.</p>
<p>중요한 점은 이것이 특정 영양제의 효과를 본 것이 아니라, <b>노화세포 자체가 일부 노화 표현형의 원인일 수 있다는 인과성</b>을 강하게 뒷받침했다는 것입니다. 이후 약물로 이 효과를 재현하려는 분야가 본격적으로 senolytics로 발전했습니다.</p>

${paper('2016','Naturally occurring p16Ink4a-positive cells shorten healthy lifespan','p16 양성 세포를 선택적으로 제거한 생쥐에서 건강수명과 중앙수명이 개선되어 노화세포의 인과적 역할을 강하게 지지했습니다.','https://pubmed.ncbi.nlm.nih.gov/26840489/')}

<h2>05. Fisetin — 가장 접근하기 쉽지만 인간근거는 아직 가장 조심해서 읽어야 한다</h2>
<p>Fisetin은 딸기·사과 등에 존재하는 flavonol이며, 2018년 연구에서 늙은 생쥐의 노화세포 표지와 조직기능을 개선하고 생애 후반 투여에서도 남은 수명을 늘려 큰 주목을 받았습니다.</p>
<p>하지만 <b>2026년 인간 임상번역 리뷰</b>가 확인한 34개 등록시험 중 결과를 해석할 수 있는 완료시험은 소수였고, 결과도 이질적이었습니다. 일부 염증·대사 지표가 좋아진 연구가 있는 반면 명확한 임상효과가 없었던 연구도 있어, 현재로서는 사람에서 senolytic 효능이 확립됐다고 보기 어렵습니다.</p>
<p>또한 요양시설 고령자를 대상으로 COVID-19 진행을 줄일 수 있는지 본 <b>COVID-FIS 2상 연구는 futility를 이유로 중단</b>됐습니다. 하나의 실패가 Fisetin 전체 가능성을 부정하는 것은 아니지만, 동물실험의 강한 결과가 인간에서 자동으로 재현되지 않는다는 중요한 사례입니다.</p>
<div class="takeaway"><strong>Fisetin을 읽는 기준</strong><p>현재 Fisetin은 <b>“천연물이라 안전한 검증된 항노화제”가 아니라, 전임상 근거는 강하지만 인간 임상효능이 아직 정립되지 않은 senotherapeutic 후보</b>입니다. 자세한 용량·약동학·개별 임상시험은 <a href="#post/fisetin-evidence-guide">Fisetin 심층 글</a>에서 별도로 다룹니다.</p></div>

${paper('2018','Fisetin is a senotherapeutic that extends health and lifespan','늙은 생쥐에서 senescence burden과 연령 관련 병리를 줄이고 건강수명·수명을 개선한 대표 전임상 연구입니다.','https://pubmed.ncbi.nlm.nih.gov/30279143/')}
${paper('2026','Clinical Translation of Fisetin for Age-Related Diseases','34개 등록 임상시험과 공개된 완료시험을 검토한 최신 리뷰. 인간 효능은 아직 제한적이고 이질적이라고 평가했습니다.','https://pubmed.ncbi.nlm.nih.gov/42796982/')}

<h2>06. Dasatinib + Quercetin — 인간에서 가장 많이 번역된 초기 senolytic 조합</h2>
<p>Dasatinib은 처방 항암제이고 Quercetin은 flavonoid입니다. 두 물질은 세포 유형에 따라 서로 다른 생존경로를 건드리기 때문에 조합으로 연구돼 왔습니다.</p>
<p>2019년 당뇨병성 신장질환 환자 9명을 대상으로 한 open-label pilot에서는 단 3일의 D+Q 투여 후 지방·피부 조직에서 p16, p21, SA-β-gal 등 여러 senescence 표지와 일부 SASP 인자가 감소했습니다. 표본은 작았지만 <b>약물 투여 뒤 사람의 조직에서 senescence burden이 실제로 움직일 수 있다는 초기 증거</b>였습니다.</p>
<p>이후 특발성 폐섬유증(IPF), 알츠하이머병 등에서 작은 안전성·타당성 시험이 이어졌지만, 장수효과를 보여준 연구는 아닙니다.</p>

${paper('2019','D+Q decreases senescent cells in humans','당뇨병성 신장질환 9명에서 지방·피부의 senescence 표지와 일부 SASP 지표가 감소한 초기 인간 pilot입니다.','https://pubmed.ncbi.nlm.nih.gov/31542391/')}

<h2>07. 2026년 MASH 2상 — senolytics가 처음으로 질병 조직의 임상결과를 움직였나?</h2>
<p>2026년 10월 <i>Nature Metabolism</i>에 발표된 proof-of-principle 무작위 이중맹검 2상 시험은 D+Q 분야에서 중요한 진전입니다. 섬유화가 있는 MASH 환자 31명이 D+Q 또는 위약을 받았습니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>Fibrosis improvement</b><span>D+Q 47% vs placebo 7% — MASH 악화 없이 ≥1 stage 섬유화 개선.</span></div>
  <div class="evidence-card"><b>MASH resolution</b><span>D+Q 53% vs placebo 7%.</span></div>
  <div class="evidence-card"><b>Adverse events</b><span>D+Q 82% vs placebo 43%. 보고된 이상반응은 모두 self-limiting.</span></div>
</div>
<p>Single-nucleus RNA sequencing에서도 senescence·fibrotic gene signature와 섬유화 관련 세포군 감소가 관찰됐습니다. 이것은 단순한 혈액 바이오마커보다 한 단계 강한 인간근거입니다.</p>
<div class="takeaway"><strong>그러나 ‘항노화 성공’은 아니다</strong><p>이 연구는 <b>31명의 MASH 환자</b>를 대상으로 한 작은 질병치료 시험입니다. 건강한 사람의 노화를 늦추거나 수명을 연장했다는 증거가 아닙니다. 향후 더 큰 독립적 임상시험에서 효과와 부작용이 재현돼야 합니다.</p></div>
${paper('2026','D+Q in fibrotic MASH: randomized phase 2 proof-of-principle','31명 무작위시험에서 섬유화 개선과 MASH resolution 신호가 나타난 최신 인간 senolytic 연구입니다.','https://pubmed.ncbi.nlm.nih.gov/42823536/')}

<h2>08. Navitoclax(ABT-263) — 강력하지만 혈소판이 Achilles heel</h2>
<p>Navitoclax는 BCL-2/BCL-XL 계열을 억제합니다. 2016년 연구에서 노화된 생쥐의 senescent hematopoietic stem cell과 muscle stem cell을 줄이고 기능을 회복시켜 매우 강력한 senolytic으로 주목받았습니다.</p>
<p>그러나 BCL-XL은 혈소판 생존에도 중요합니다. 그래서 navitoclax는 <b>dose-limiting thrombocytopenia, 즉 혈소판 감소</b>가 큰 문제입니다. 이 약은 ‘강한 senolytic이면 더 좋은 항노화제’라는 단순한 논리가 왜 위험한지를 보여줍니다.</p>
<p>최근에는 혈소판에서는 덜 작동하도록 BCL-XL을 표적 분해하는 PROTAC, 특정 조직으로 약물을 전달하는 나노입자 등 선택성을 높이는 기술이 연구되고 있습니다.</p>
${paper('2016','ABT263 rejuvenates aged hematopoietic stem cells in mice','Navitoclax가 늙은 생쥐에서 senescent HSC와 muscle stem cell을 제거하고 기능 회복을 보인 대표 연구입니다.','https://pubmed.ncbi.nlm.nih.gov/26657143/')}

<h2>09. FOXO4-DRI — 매력적인 정밀표적이지만 아직 사람에게는 멀다</h2>
<p>FOXO4-DRI는 노화세포에서 FOXO4와 p53의 결합을 방해해 p53을 핵 밖으로 이동시키고 apoptosis를 유도하도록 설계된 peptide입니다. 2017년 연구에서 조로증 및 자연 노화 생쥐의 체력·털·신장기능 회복이 보고됐고, 이후 생쥐의 Leydig cell·혈관·폐섬유화 모델에서도 연구됐습니다.</p>
<p>하지만 <b>2026년 현재 FOXO4-DRI의 핵심 효능근거는 전임상 연구</b>입니다. 인간의 안전성·약동학·유효성을 확립한 노화 임상시험이 없기 때문에 인터넷에서 ‘차세대 역노화 펩타이드’로 판매되는 주장과 과학적 근거는 구분해야 합니다.</p>
${paper('2017','FOXO4-DRI restores tissue homeostasis in aged mice','FOXO4-p53 상호작용을 표적으로 senescent cell apoptosis를 유도하고 노화 생쥐의 일부 기능을 회복한 대표 전임상 연구입니다.','https://pubmed.ncbi.nlm.nih.gov/28340339/')}

<h2>10. 가장 중요한 문제 — 어떤 세포를 ‘노화세포’라고 부를 것인가?</h2>
<p>현재 senolytic 분야에는 혈당의 HbA1c처럼 몸 전체의 senescent-cell burden을 정확히 한 숫자로 측정하는 표준검사가 없습니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>p16 / p21</b><span>자주 쓰이는 cell-cycle arrest 표지지만 모든 노화세포에 동일하게 올라가지는 않음.</span></div>
  <div class="evidence-card"><b>SA-β-gal</b><span>고전적 senescence marker지만 단독으로 특이적이지 않음.</span></div>
  <div class="evidence-card"><b>SASP</b><span>IL-6·IL-8 등은 염증과 겹치며 조직·원인에 따라 조성이 크게 달라짐.</span></div>
</div>
<p>이 때문에 한두 개 바이오마커가 감소했다고 곧바로 ‘노화세포가 제거됐다’거나 ‘몸이 젊어졌다’고 말할 수 없습니다. 앞으로의 임상시험은 조직 수준의 multi-marker, single-cell 분석, 기능적 결과를 함께 보는 방향으로 가고 있습니다.</p>

<h2>11. 노화세포를 많이 없앨수록 더 좋은 것도 아니다</h2>
<p>Senescence는 암 억제, 배아발생, 상처치유, 조직 재형성 같은 정상 기능에도 필요합니다. 또한 senescent cell은 하나의 세포종이 아니라 간·지방·혈관·면역계·연골 등에서 서로 다른 상태로 존재합니다.</p>
<p>따라서 이상적인 치료는 <b>모든 p16 양성 세포를 박멸</b>하는 것이 아니라, 특정 질환과 조직에서 해로운 SASP를 만드는 세포만 선택적으로 제거하거나 조절하는 것입니다.</p>
<p>이 점에서 미래의 senotherapy는 단순한 알약보다 <b>조직 선택적 senolytic, antibody-drug conjugate, PROTAC, 면역기반 제거, senomorphic</b>처럼 더 정밀한 방향으로 발전할 가능성이 큽니다.</p>

<h2>12. ‘Hit-and-run’ — 왜 senolytics는 간헐적 투여가 연구될까?</h2>
<p>Senolytic은 혈압약처럼 약효가 매일 유지돼야 한다는 논리와 다릅니다. 표적 세포를 제거하면 다시 쌓이는 데 시간이 걸릴 수 있으므로, 짧게 노출한 뒤 쉬는 <b>hit-and-run</b> 전략이 이론적으로 가능합니다.</p>
<p>이것이 D+Q와 Fisetin 연구에서 수일간의 간헐적 프로토콜이 많은 이유입니다. 그러나 <b>연구 프로토콜은 개인 복용법이 아닙니다.</b> 세놀리틱 효과가 나타나는 인간 조직 농도와 안전한 장기 간격은 물질마다 다르며 아직 표준화되지 않았습니다.</p>

<h2>13. 2026년 현재 Evidence Map</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>D+Q — 인간근거 ★★★</b><span>조직 senescence 감소 pilot + 여러 소규모 임상 + 2026 MASH 무작위 2상 신호. 단, 건강수명·수명연장 미입증.</span></div>
  <div class="evidence-card"><b>Fisetin — 인간근거 ★★</b><span>동물근거 강함. 인간 시험은 증가했지만 완료 결과가 적고 이질적. 항노화 효능 미확립.</span></div>
  <div class="evidence-card"><b>Navitoclax — 인간 노화근거 ★</b><span>강력한 전임상 senolytic. 혈소판 감소가 큰 제한점. 노화 목적 임상표준 아님.</span></div>
  <div class="evidence-card"><b>FOXO4-DRI — 인간근거 ☆</b><span>흥미로운 생쥐·세포 연구 중심. 인간 노화치료 근거는 아직 없음.</span></div>
</div>
<p class="small-note">별표는 LONGEVITY JOURNAL의 상대적 ‘인간 번역근거’ 요약이며 의약품 등급이나 치료 권고가 아닙니다.</p>

<h2>14. 개인이 Fisetin을 복용하면 ‘senolysis’를 확인할 수 있을까?</h2>
<p>현재 일반인이 혈액검사 하나로 “노화세포가 몇 % 제거됐다”를 확인하는 검증된 방법은 없습니다. 염증수치, epigenetic clock, 체력, 혈당 등이 변하더라도 그것이 fisetin의 senolysis 때문이라고 특정하기 어렵습니다.</p>
<p>특히 보충제 fisetin은 제품마다 흡수율과 제형이 다르고, 임상시험의 고용량 간헐투여는 일상적인 식품 섭취와 전혀 다른 노출입니다. <b>고용량 자가실험을 인간 임상근거가 확립된 치료처럼 해석해서는 안 됩니다.</b></p>

<h2>15. 앞으로 무엇이 증명돼야 ‘노화세포 제거가 사람을 젊게 한다’고 말할 수 있을까?</h2>
<ol>
  <li><b>표적 확인:</b> 치료 전후 실제 조직의 senescent-cell burden이 감소해야 합니다.</li>
  <li><b>기능 개선:</b> 근력·보행·장기기능·질병결과 등 환자에게 의미 있는 지표가 좋아져야 합니다.</li>
  <li><b>선택성:</b> 정상적인 상처치유·면역·조직재생에 필요한 세포는 최대한 보존해야 합니다.</li>
  <li><b>지속성:</b> 짧은 바이오마커 변화가 아니라 장기간의 건강수명 개선으로 이어져야 합니다.</li>
  <li><b>안전성:</b> 감염·출혈·혈소판 감소·간독성·암 위험 같은 장기 부작용이 허용 가능한 수준이어야 합니다.</li>
</ol>

<h2>Evidence Timeline</h2>
<div class="timeline">
${paper('2015','D+Q: first-generation senolytics','노화세포가 의존하는 생존경로를 분석해 dasatinib과 quercetin을 senolytic으로 제시했습니다.','https://pubmed.ncbi.nlm.nih.gov/25754370/')}
${paper('2016','Genetic clearance extends healthy lifespan in mice','자연적으로 쌓인 p16 양성 세포 제거가 생쥐 건강수명과 수명을 개선했습니다.','https://pubmed.ncbi.nlm.nih.gov/26840489/')}
${paper('2018','Fisetin extends health and lifespan in mice','Fisetin이 노화세포 표지를 줄이고 늙은 생쥐의 건강수명·수명을 개선했습니다.','https://pubmed.ncbi.nlm.nih.gov/30279143/')}
${paper('2019','D+Q reduces senescence markers in human tissue','당뇨병성 신장질환 환자의 지방·피부에서 senescence burden 감소를 보고했습니다.','https://pubmed.ncbi.nlm.nih.gov/31542391/')}
${paper('2023','D+Q randomized IPF feasibility trial','소규모 무작위시험에서 타당성과 이상반응을 평가했으나 효능을 확정할 규모는 아니었습니다.','https://pubmed.ncbi.nlm.nih.gov/36857968/')}
${paper('2024','Fisetin biological-age pilot','10명의 소규모 비대조 pilot에서 결과가 혼재해 epigenetic age reversal을 뒷받침하지 못했습니다.','https://pubmed.ncbi.nlm.nih.gov/39269340/')}
${paper('2026','Fisetin clinical translation review','34개 등록시험을 검토했지만 인간 임상효능은 여전히 제한적·이질적이라고 평가했습니다.','https://pubmed.ncbi.nlm.nih.gov/42796982/')}
${paper('2026','D+Q randomized phase 2 MASH trial','31명 proof-of-principle 시험에서 간섬유화 개선과 MASH resolution 신호가 나타났습니다.','https://pubmed.ncbi.nlm.nih.gov/42823536/')}
</div>

<div class="takeaway"><strong>LONGEVITY JOURNAL 결론</strong><p><b>Senolytics는 Geroscience에서 가장 설득력 있는 미래 전략 중 하나지만, 2026년 현재 ‘건강한 사람이 복용하면 젊어진다’고 말할 근거는 없습니다.</b> 동물에서는 노화세포 제거의 인과성과 건강수명 효과가 강하게 입증됐고, 인간에서는 이제 특정 질환에서 실제 조직과 임상결과를 움직이는 초기 신호가 나오기 시작했습니다. 앞으로의 승부는 <b>어떤 노화세포를, 어느 조직에서, 얼마나 선택적으로 제거할 수 있는가</b>에 달려 있습니다.</p></div>

<p class="small-note"><strong>의학적 주의:</strong> Dasatinib은 처방 항암제이며 Navitoclax는 혈액학적 독성이 큰 연구약물입니다. Fisetin·Quercetin 역시 고용량 연구 프로토콜을 일반적인 보충제 복용법으로 간주해서는 안 됩니다. 본 글은 연구근거 해설이며 개인 치료·복용 지침이 아닙니다.</p>
`
});
})();
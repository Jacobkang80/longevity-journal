(()=>{
const p=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='tmg-betaine-evidence');
if(!p)return;
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
Object.assign(p,{
  date:'2026-10-09',
  title:'TMG(베타인)은 메틸화를 돕고 노화도 늦출까? — 호모시스테인, SAM, LDL 그리고 NMN과의 관계',
  excerpt:'TMG는 호모시스테인을 낮추는 작용은 비교적 확실하지만, LDL·총콜레스테롤을 올릴 수 있습니다. 메틸화, 운동, NMN 병용, 항노화 주장을 인간 임상근거 중심으로 구분합니다.',
  tags:['TMG','Betaine','베타인','Trimethylglycine','Homocysteine','Methionine cycle','SAM','BHMT','Methyl donor','LDL','NMN','Longevity Molecules'],
  html:`
<p class="editor-note"><strong>LONGEVITY JOURNAL 근거 전면 업데이트 2026-10-09</strong> · TMG(trimethylglycine)는 betaine과 같은 분자를 가리키는 이름입니다. 다만 세정제 성분인 cocamidopropyl betaine과는 전혀 다른 물질입니다.</p>

<figure class="story-hero molecular-figure"><img src="https://upload.wikimedia.org/wikipedia/commons/2/27/Betain_-_Betaine.svg" alt="Betaine trimethylglycine의 화학구조" loading="eager"><figcaption>Betaine, 즉 trimethylglycine(TMG)의 구조. 질소에 세 개의 methyl group이 붙어 있어 ‘methyl donor’ 역할을 할 수 있습니다. 이미지: NEUROtiker / Wikimedia Commons, Public Domain.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>TMG의 가장 확실한 인간 효과는 homocysteine을 낮추는 것입니다.</b> 2013년 무작위시험 메타분석에서는 하루 4 g 이상을 6–24주 사용했을 때 혈장 homocysteine이 평균 약 1.23 μmol/L 낮아졌습니다. 그러나 2021년 메타분석에서는 동시에 total cholesterol이 약 14 mg/dL, LDL이 약 10 mg/dL 올라가는 신호가 확인됐습니다. 운동능력은 하체 최대근력에서 작은 이득이 보고됐지만 근거가 제한적이고, <b>‘methyl donor이므로 노화를 늦춘다’거나 ‘NMN과 반드시 같이 먹어야 한다’는 주장은 인간 임상시험으로 입증되지 않았습니다.</b></p></div>

<h2>01. TMG와 Betaine은 같은 것인가?</h2>
<p>네. 영양·생화학 문맥에서 <b>trimethylglycine(TMG)</b>와 <b>glycine betaine</b>은 같은 분자를 가리킵니다. 이름 그대로 glycine의 질소에 methyl group 세 개가 붙어 있습니다.</p>
<p>‘betaine’이라는 단어는 식물에서 발견되는 여러 zwitterion 계열 화합물을 넓게 부르는 데 쓰이기도 하지만, 보충제에서 TMG 또는 betaine이라고 적힌 경우 보통 trimethylglycine을 뜻합니다. 반대로 샴푸·클렌저에 들어가는 <b>cocamidopropyl betaine</b>은 계면활성제로, 영양보충제 TMG와 구조와 용도가 완전히 다릅니다.</p>

<figure class="story-photo"><img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Beets-Bundle.jpg" alt="잎이 붙은 비트 다발" loading="lazy"><figcaption>Betaine이라는 이름은 사탕무(beet, <i>Beta vulgaris</i>)에서 유래했습니다. 비트는 betaine이 풍부한 식품 가운데 하나지만, 식품 섭취와 고용량 보충제 연구는 같은 노출이 아닙니다. 사진: Evan-Amos / Wikimedia Commons, CC0.</figcaption></figure>

<h2>02. 왜 ‘메틸 공여체’라고 부를까?</h2>
<p>우리 몸에서 methyl group은 DNA·RNA·단백질·인지질·신경전달물질·creatine 합성 등 수많은 반응에 쓰입니다. 이때 대표적인 methyl donor가 <b>S-adenosylmethionine(SAM)</b>입니다.</p>
<p>TMG는 간과 신장에서 <b>betaine-homocysteine methyltransferase(BHMT)</b>에 methyl group을 제공합니다. BHMT는 homocysteine에 methyl group을 붙여 methionine으로 되돌립니다. methionine은 다시 SAM으로 전환될 수 있습니다.</p>
<div class="pathway" aria-label="Betaine methylation pathway simplified">
  <div class="pathway-step"><b>TMG · Betaine</b><span>methyl donor</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>BHMT</b><span>homocysteine → methionine</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>Methionine · SAM</b><span>다양한 methylation 반응</span></div>
</div>
<p class="small-note">※ 실제 one-carbon metabolism에는 folate, vitamin B12, B6, choline, methionine 등이 함께 얽혀 있습니다. TMG 하나만으로 ‘메틸화 상태’를 설명할 수 없습니다.</p>

<h2>03. Folate 경로와 TMG 경로는 서로 보완한다</h2>
<p>Homocysteine을 methionine으로 되돌리는 길은 하나가 아닙니다. 하나는 <b>folate + vitamin B12</b>를 이용하는 methionine synthase 경로이고, 다른 하나가 <b>betaine + BHMT</b> 경로입니다.</p>
<p>2025년 one-carbon metabolism 리뷰는 folate와 choline/betaine 경로가 서로 methyl group을 주고받으며 보완한다고 정리합니다. 특히 fasting homocysteine은 folate 상태의 영향을 크게 받는 반면, methionine load 뒤 homocysteine은 betaine 상태의 영향을 더 많이 받을 수 있습니다. 따라서 ‘homocysteine이 높으면 무조건 TMG 부족’이라고 해석하면 안 됩니다.</p>

<div class="evidence-grid">
  <div class="evidence-card"><b>Folate · B12 경로</b><span>전신적으로 중요한 remethylation 경로. fasting homocysteine과 강하게 연결.</span></div>
  <div class="evidence-card"><b>Betaine · BHMT</b><span>주로 간·신장에서 작동. homocysteine을 methionine으로 되돌리는 별도 경로.</span></div>
  <div class="evidence-card"><b>핵심</b><span>두 경로는 경쟁 관계가 아니라 상호 보완적이며 영양 상태에 따라 기여도가 달라짐.</span></div>
</div>

<h2>04. Homocysteine을 실제로 얼마나 낮추나?</h2>
<p>TMG에서 인간근거가 가장 분명한 부분입니다. 2004년 34명의 건강한 성인을 대상으로 한 용량시험에서 하루 <b>1 g, 3 g, 6 g</b>을 각각 1주씩 사용했을 때 3 g과 6 g에서 plasma homocysteine이 각각 약 10%, 14% 감소했습니다. 1 g에서는 유의하지 않았습니다.</p>
<p>2006년 randomized double-blind crossover 연구에서는 건강한 10명이 공복에 1, 3, 6 g을 단회 복용했습니다. 3 g과 6 g은 2시간 이내 homocysteine을 낮췄고, 6 g 효과는 24시간 관찰기간 동안 유지됐습니다.</p>
<p>2013년 5개 placebo-controlled RCT를 종합한 메타분석에서는 최소 <b>4 g/day를 6–24주</b> 사용했을 때 plasma homocysteine이 평균 <b>1.23 μmol/L</b> 감소했습니다.</p>

<div class="takeaway"><strong>여기서 중요한 구분</strong><p><b>Homocysteine이 낮아지는 것과 심근경색·뇌졸중이 줄어드는 것은 같은 증거가 아닙니다.</b> Homocysteine은 위험표지자이지만, 특정 영양소로 수치를 낮췄다고 해서 심혈관 사건이 자동으로 감소하는 것은 아닙니다. TMG는 biomarker를 움직이는 것은 잘 보여줬지만, 건강한 일반인의 장기 임상사건을 줄였다는 대규모 RCT 근거는 없습니다.</p></div>

<h2>05. 가장 중요한 반대편 근거: LDL과 총콜레스테롤</h2>
<p>TMG의 장점만 보면 homocysteine을 낮추는 ‘심혈관 보조제’처럼 들릴 수 있습니다. 그러나 혈중지질을 같이 보면 그림이 복잡해집니다.</p>
<p>2021년 systematic review·meta-analysis에서는 betaine 보충 후 homocysteine은 평균 약 <b>1.30 μmol/L 감소</b>했지만, total cholesterol은 약 <b>14.12 mg/dL 증가</b>, LDL은 약 <b>10.26 mg/dL 증가</b>했습니다. methionine과 dimethylglycine도 증가했습니다.</p>
<p>별도의 2021년 메타분석 역시 betaine이 total cholesterol을 중등도로 올릴 수 있다고 결론냈습니다. 이런 변화가 실제 심혈관 사건에 어떤 순효과를 만드는지는 아직 불확실합니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>좋은 방향</b><span>Homocysteine 감소는 여러 RCT에서 반복됨.</span></div>
  <div class="evidence-card"><b>주의 신호</b><span>일부 메타분석에서 LDL·total cholesterol 상승.</span></div>
  <div class="evidence-card"><b>모르는 것</b><span>장기적으로 심근경색·뇌졸중·사망을 실제로 줄이는지 여부.</span></div>
</div>

<h2>06. ‘메틸화가 늘면 젊어진다’는 설명은 너무 단순하다</h2>
<p>후성유전학에서 DNA methylation은 노화와 밀접하게 연구됩니다. 그렇다고 methyl donor를 많이 공급해 전체 methylation을 높이면 젊어진다는 뜻은 아닙니다.</p>
<p>DNA methylation은 유전자 위치·세포 종류·조직·나이에 따라 어떤 부위는 올라가고 어떤 부위는 내려갑니다. 2023년 methyl-donor micronutrient systematic review·meta-analysis도 folate, choline, betaine, B vitamins, methionine 보충이 DNA methylation에 영향을 줄 수 있지만, 사람에서 일관된 ‘젊은 methylation 패턴’으로 이동한다는 결론은 내리지 못했습니다.</p>
<p>즉 <b>TMG → methyl donor 증가 → SAM 증가 가능성</b>까지는 생화학적으로 맞지만, <b>TMG → epigenetic age 감소 → 건강수명 연장</b>은 아직 건너뛴 단계가 많습니다.</p>

<h2>07. 왜 NMN·NR과 TMG를 같이 먹는 이야기가 나왔을까?</h2>
<p>이 주장은 NAD 대사와 methyl metabolism이 만나는 지점에서 시작합니다. NAD를 사용하는 반응에서 생성되는 <b>nicotinamide(NAM)</b>는 재활용되거나, <b>nicotinamide N-methyltransferase(NNMT)</b>에 의해 methylated nicotinamide로 전환될 수 있습니다. NNMT 반응은 methyl donor인 SAM을 사용합니다.</p>
<p>그래서 온라인에서는 ‘NMN이나 NR을 많이 먹으면 nicotinamide 처리에 SAM이 많이 소모될 수 있으니 TMG를 같이 먹어 methyl donor를 보충해야 한다’는 논리가 자주 등장합니다. 이론적으로 설명 가능한 부분은 있지만, <b>건강한 사람이 NMN·NR을 복용할 때 TMG를 같이 먹으면 안전성이나 임상효과가 더 좋아진다는 대규모 인간 RCT는 없습니다.</b></p>
<p>2025년 NAD precursor 인간 임상근거 리뷰도 NAD precursor 보충의 임상효과가 제한적이고 조직별 대사를 더 이해해야 한다고 평가합니다. 현재 근거만으로 TMG를 ‘NMN의 필수 동반제’라고 부르기는 어렵습니다.</p>

<div class="takeaway"><strong>NMN + TMG에 대한 LONGEVITY JOURNAL 판정</strong><p><b>생화학적 가설은 있음 · routine co-supplementation의 인간 임상근거는 없음.</b> methylation balance는 folate·B12·B6·choline·methionine·신장기능·식사 전체와 연결되므로 단일 보충제로 단순화하지 않는 편이 정확합니다.</p></div>

<h2>08. 운동능력과 근육에는 도움이 될까?</h2>
<p>Betaine은 세포의 삼투압을 조절하는 <b>osmolyte</b>이기도 하고 methyl metabolism을 통해 creatine·단백질 대사와 연결되기 때문에 스포츠영양 분야에서도 연구돼 왔습니다.</p>
<p>2024년 17개 연구, 317명을 포함한 systematic review·meta-analysis에서는 최소 7일간의 chronic betaine supplementation이 최대근력에 작은 긍정 효과를 보였고, 특히 하체근력에서 신호가 있었습니다. 반면 상체근력, sprint power, muscular endurance에는 일관된 효과가 없었습니다.</p>
<p>2025년 endurance systematic review는 단 5개 연구만 포함했고 모두 bias risk가 높았습니다. 따라서 ‘TMG는 운동 퍼포먼스를 확실히 올린다’고 말하기에는 아직 데이터가 부족합니다.</p>

<h2>09. 항염·미토콘드리아·노화 연구는 어디까지 왔나?</h2>
<p>2024년의 betaine and aging narrative review는 동물·세포 연구에서 mitochondrial function, oxidative stress, inflammation, muscle anabolic signaling 등 여러 노화 관련 경로가 개선될 수 있다고 정리했습니다. 사람에서 homocysteine과 일부 운동지표 데이터가 있기는 하지만, <b>frailty, dementia, cardiovascular events, cancer, mortality 같은 hard endpoint를 장기간 낮춘다는 근거는 없습니다.</b></p>
<p>따라서 TMG는 ‘geroprotector’라기보다 현재로서는 <b>one-carbon metabolism을 조절하는 영양 대사체</b>라고 보는 편이 정확합니다.</p>

<h2>10. 음식으로 먹는 Betaine과 보충제는 같을까?</h2>
<p>Betaine은 비트, 시금치, 통곡물, 밀기울, 일부 해산물 등 여러 식품에 존재합니다. 음식에서는 choline, folate, B vitamins, fiber 등 다른 영양소와 함께 섭취됩니다.</p>
<p>반면 임상시험에서 homocysteine을 뚜렷하게 낮춘 용량은 흔히 <b>3–6 g/day</b> 수준이었고, 이는 일반적인 식사에서 한 번에 얻는 양보다 훨씬 큽니다. ‘비트를 먹는 효과’와 ‘고용량 TMG 분말 보충 효과’를 같은 것으로 생각하면 안 됩니다.</p>

<h2>11. 안전성과 실전에서 보는 포인트</h2>
<p>연구에서 betaine은 대체로 잘 견디지만, 고용량에서 위장 불편, 메스꺼움, 설사 같은 문제가 나타날 수 있습니다. homocystinuria 치료에 사용되는 의약품 수준의 고용량은 의료진 관리가 전제됩니다.</p>
<p>일반인이 장기간 사용할 때는 단순히 homocysteine만 볼 것이 아니라 <b>LDL·total cholesterol 변화</b>도 함께 보는 것이 합리적입니다. 특히 처음부터 LDL이 높은 사람이라면 ‘homocysteine 감소’만 보고 순이익을 판단하기 어렵습니다.</p>

<div class="takeaway"><strong>현재 근거를 한 문장으로</strong><p><b>TMG는 homocysteine을 낮추는 데는 효과적인 methyl donor이지만, LDL 상승 가능성이 있고 인간의 노화·수명 연장 효과는 아직 증명되지 않았습니다.</b></p></div>

<h2>12. LONGEVITY JOURNAL 근거 등급</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>Homocysteine 감소</b><span><strong>강함</strong><br>여러 RCT와 메타분석에서 반복.</span></div>
  <div class="evidence-card"><b>근력·운동 퍼포먼스</b><span><strong>제한적</strong><br>하체 최대근력에 작은 신호, 연구 수와 규모가 작음.</span></div>
  <div class="evidence-card"><b>항노화·수명</b><span><strong>미확립</strong><br>인간 건강수명·사망률 개선 RCT 없음.</span></div>
</div>

<h2>근거자료 — 발표 시간순</h2>
<div class="timeline">
${paper('2004','Olthof MR, et al. Br J Nutr.','건강한 성인 34명. 1·3·6 g/day를 순차 사용. 3 g과 6 g에서 plasma homocysteine이 각각 약 10%, 14% 감소.','https://pubmed.ncbi.nlm.nih.gov/15522136/')}
${paper('2006','Schwab U, et al. J Nutr.','건강한 10명 randomized double-blind crossover. 단회 3·6 g에서 2시간 내 homocysteine 감소, dose-response 확인.','https://pubmed.ncbi.nlm.nih.gov/16365055/')}
${paper('2013','Betaine supplementation decreases plasma homocysteine in healthy adults: meta-analysis.','5개 RCT, 최소 4 g/day, 6–24주. homocysteine 평균 1.23 μmol/L 감소.','https://pubmed.ncbi.nlm.nih.gov/23997720/')}
${paper('2017','Pissios P. Nicotinamide N-Methyltransferase: More Than a Vitamin B3 Clearance Enzyme.','NNMT가 nicotinamide methylation에 SAM을 사용하며 NAD 대사와 methyl donor metabolism이 연결되는 기전을 정리. NMN+TMG 병용 임상효과를 입증한 논문은 아님.','https://pubmed.ncbi.nlm.nih.gov/28291578/')}
${paper('2021','Effects of betaine supplementation on cardiovascular markers: systematic review and meta-analysis.','Homocysteine −1.30 μmol/L와 함께 total cholesterol +14.12 mg/dL, LDL +10.26 mg/dL 신호.','https://pubmed.ncbi.nlm.nih.gov/33764214/')}
${paper('2023','Impact of Methyl-Donor Micronutrient Supplementation on DNA Methylation Patterns.','사람·동물·세포 자료를 종합. methyl donor가 DNA methylation에 영향을 줄 수 있지만 일관된 항노화 방향은 확립되지 않음.','https://pubmed.ncbi.nlm.nih.gov/37935134/')}
${paper('2024','Zawieja E, et al. Effects of chronic betaine supplementation on exercise performance.','17개 연구, 317명. 최대근력·하체근력에 작은 개선 신호, 다른 퍼포먼스 지표는 불일치.','https://pubmed.ncbi.nlm.nih.gov/39514262/')}
${paper('2024','Betaine and aging: narrative review.','Methylation, homocysteine, 미토콘드리아, 염증, 근육 등 노화 관련 기전을 정리했지만 인간 건강수명 근거는 제한적.','https://pubmed.ncbi.nlm.nih.gov/39647584/')}
${paper('2025','The Shuttling of Methyl Groups Between Folate and Choline Pathways.','Folate·choline·betaine 경로의 상호보완성과 BHMT의 기여를 정리.','https://pubmed.ncbi.nlm.nih.gov/40806080/')}
${paper('2025','NAD+ precursor supplementation in human ageing: clinical evidence and challenges.','NAD precursor의 인간 임상효과가 아직 제한적임을 정리. TMG routine 병용의 임상적 필요성은 확립되지 않음.','https://pubmed.ncbi.nlm.nih.gov/41083806/')}
</div>

<p class="editor-note"><strong>최종 근거 검토: 2026-10-09.</strong> 이 글의 핵심 원칙은 ‘biomarker 변화 ≠ 건강수명 연장’입니다. Homocysteine 감소는 비교적 확실하지만, LDL 상승 신호와 장기 임상결과의 부재를 함께 봐야 합니다.</p>`
});
})();

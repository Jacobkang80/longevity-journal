(()=>{
const p=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='anthocyanin-evidence');
if(!p)return;
Object.assign(p,{
  date:'2024-03-10',
  title:'안토시아닌은 정말 혈관과 뇌를 젊게 할까? — 베리류, 염증, 장내미생물, 인지기능의 근거',
  excerpt:'보라·파랑·빨강을 만드는 식물 색소 안토시아닌. 혈관내피 기능에는 비교적 일관된 신호가 있지만, 염증·인지기능·장내미생물 효과는 대상군과 제형에 따라 달라집니다.',
  tags:['Anthocyanin','안토시아닌','Cyanidin','Delphinidin','Flavonoid','Endothelial function','FMD','Inflammaging','Gut microbiome','Cognition','항노화','Longevity Molecules'],
  html:`
<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2024-03-10 · <a href="https://myepic2.tistory.com/44" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a> · LONGEVITY JOURNAL 근거 전면 업데이트 2026-10-08</p>

<figure class="story-hero"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Black_currant_fruit.jpg" alt="검은색에 가까운 보라빛 블랙커런트 열매" loading="eager"><figcaption>블랙커런트, 블루베리, 블랙베리, 자색고구마, 적양배추처럼 진한 보라·파랑·빨강을 띠는 식품에는 다양한 안토시아닌이 들어 있습니다. 사진: Paolo Neo / Wikimedia Commons, Public Domain·CC0.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>안토시아닌은 사람의 혈관내피 기능을 개선한다는 근거가 비교적 탄탄한 식이 폴리페놀입니다.</b> 2026년 건강한 사람을 중심으로 65개 RCT를 종합한 메타분석에서는 급성·만성 섭취 모두에서 flow-mediated dilation(FMD)이 개선됐습니다. 다만 혈압·LDL·공복혈당 같은 지표는 전체적으로 일관되게 좋아지지 않았습니다. 염증은 일부 메타분석에서 CRP·IL-6·TNF-α 감소가 관찰됐지만, 대사질환자만 모은 다른 분석에서는 유의하지 않았습니다. 인지기능도 작은 개선 신호가 있지만, 2026년 24주 다기관 RCT에서는 기억력·혈관·염증 결과 모두 위약 대비 유의한 차이가 없었습니다. 따라서 현재 가장 정확한 표현은 <b>‘혈관 기능에는 꽤 유망하고, 항염·뇌·장내미생물 효과는 개인차와 대상군 의존성이 큰 식이 생리활성물질’</b>입니다.</p></div>

<h2>01. 안토시아닌은 무엇인가?</h2>
<p>안토시아닌(anthocyanins)은 플라보노이드 계열의 수용성 색소입니다. 식물이 만들어내는 빨강·보라·파랑의 상당 부분을 담당하고, 사람에게는 음식으로 들어오는 <b>polyphenol</b>의 한 종류입니다.</p>
<p>안토시아닌은 하나의 분자가 아닙니다. 기본 골격인 <b>anthocyanidin</b>에 당이 결합한 형태가 안토시아닌이고, 대표적인 anthocyanidin에는 cyanidin, delphinidin, malvidin, pelargonidin, peonidin, petunidin 등이 있습니다. 어떤 식품에 어떤 구조가 많은지에 따라 흡수·대사와 생리작용이 달라질 수 있습니다.</p>

<figure class="story-photo molecular-figure"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Cyanidin-3-glucosid.svg" alt="Cyanidin-3-glucoside의 화학구조" loading="lazy"><figcaption>Cyanidin-3-glucoside는 흔히 연구되는 대표적인 안토시아닌 중 하나입니다. 이미지: NEUROtiker / Wikimedia Commons, Public Domain.</figcaption></figure>

<div class="evidence-grid">
  <div class="evidence-card"><b>Cyanidin</b><span>블랙베리·블루베리·적양배추 등 여러 식품에 존재. 2026 메타분석에서 chronic FMD 개선 신호.</span></div>
  <div class="evidence-card"><b>Delphinidin</b><span>블랙커런트·빌베리 등에 풍부. 급성·만성 FMD, 일부 혈관·대사 지표 개선 신호.</span></div>
  <div class="evidence-card"><b>Malvidin</b><span>포도·블루베리 계열에 흔함. 음식 전체의 polyphenol matrix와 함께 섭취되는 경우가 많음.</span></div>
</div>

<h2>02. ‘항산화제’라는 한 단어로 설명하면 놓치는 것이 많다</h2>
<p>안토시아닌은 오랫동안 ‘항산화제’로 소개됐습니다. 시험관 안에서는 활성산소를 직접 제거할 수 있기 때문입니다. 하지만 사람이 베리를 먹었을 때 혈액 속에 부모 안토시아닌(parent anthocyanin)이 높은 농도로 오래 남아 직접 ROS를 청소하는 그림은 실제 생체 내 상황과 다릅니다.</p>
<p>안토시아닌은 장과 간에서 빠르게 대사되고, 상당량은 대장까지 내려가 장내미생물에 의해 <b>protocatechuic acid, gallic acid, syringic acid</b> 같은 더 작은 phenolic metabolite로 바뀝니다. 이 대사체들이 원래 분자보다 더 높은 농도로 순환하면서 NF-κB, Nrf2, NO signaling 등 다양한 경로에 영향을 줄 가능성이 있습니다.</p>
<div class="pathway" aria-label="Anthocyanin metabolism simplified">
  <div class="pathway-step"><b>베리·자색 식품</b><span>다양한 anthocyanin</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>장·장내미생물</b><span>흡수 + phenolic metabolite 생성</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>혈관·면역·뇌</b><span>NO · NF-κB · Nrf2 등 신호 조절</span></div>
</div>
<p class="small-note">※ ‘항산화력이 높다 = 사람에게서 질병 예방 효과가 크다’는 등식은 성립하지 않습니다. 인체에서는 대사체와 신호전달 효과가 더 중요할 수 있습니다.</p>

<h2>03. 가장 설득력 있는 영역: 혈관내피 기능</h2>
<p>안토시아닌 연구에서 가장 반복적으로 관찰되는 결과 중 하나가 <b>flow-mediated dilation(FMD)</b>입니다. FMD는 상완동맥이 혈류 증가에 반응해 얼마나 잘 확장되는지 보는 검사로, 혈관내피의 nitric oxide(NO) 기능과 관련된 대표적인 surrogate marker입니다.</p>
<p>2011년 고콜레스테롤혈증 환자 연구에서는 정제 안토시아닌 <b>320 mg/day를 12주</b> 투여했을 때 FMD가 개선됐고, 혈중 cGMP 증가가 동반됐습니다. 연구진은 NO-cGMP 경로가 중요한 기전일 가능성을 제시했습니다.</p>
<p>2017년 24개 RCT 메타분석에서는 anthocyanin-rich 식품 또는 추출물이 급성과 만성 섭취 모두에서 FMD를 개선했습니다. 다만 연구 간 이질성이 높았습니다.</p>
<p>그리고 2026년에는 건강한 참가자를 중심으로 65개 RCT를 모은 더 큰 메타분석이 나왔습니다. 만성 섭취에서 FMD는 평균 약 <b>1.41%p</b>, 급성 섭취에서는 약 <b>1.50%p</b> 개선됐고, GRADE 평가는 급성 FMD는 strong, 만성 FMD는 moderate 수준이었습니다. 반면 혈압·LDL·혈당·HOMA-IR은 전체적으로 유의한 변화가 없었습니다. 즉 ‘혈관 반응성’은 꽤 일관되지만, 모든 심혈관 위험인자가 함께 좋아지는 것은 아닙니다.</p>

<figure class="story-photo"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Clean_Blueberries.jpg" alt="푸른색 블루베리" loading="lazy"><figcaption>블루베리는 대표적인 안토시아닌 공급원입니다. 그러나 임상시험은 생과일, 동결건조 분말, 주스, 정제 안토시아닌 등 서로 다른 제형을 사용하므로 결과를 같은 용량으로 단순 비교하면 안 됩니다. 사진: Gustamons / Wikimedia Commons, CC0.</figcaption></figure>

<h2>04. 심혈관질환 예방과 수명으로 바로 연결할 수 있을까?</h2>
<p>여기서는 RCT와 관찰연구를 분리해야 합니다. 2026년 메타분석에서 장기 코호트 연구들을 합쳤을 때, 식이 안토시아닌 섭취가 가장 높은 사람들은 가장 낮은 사람보다 CVD 발생이 26%, 심근경색이 18%, 제2형 당뇨병이 11%, CVD 사망이 9%, 고혈압 발생이 8% 낮게 관찰됐습니다.</p>
<p>하지만 이것은 <b>관찰연구</b>입니다. 안토시아닌이 많은 식품을 자주 먹는 사람은 채소·과일 섭취, 운동, 체중, 흡연, 사회경제적 요인 등 다른 생활습관도 다를 수 있습니다. 반면 RCT는 FMD 같은 중간지표를 개선할 수 있음을 보여주지만 아직 심근경색·사망을 직접 줄이는 대규모 장기 RCT는 없습니다.</p>
<div class="takeaway"><strong>LONGEVITY 관점에서 읽는 법</strong><p>안토시아닌은 <b>혈관내피 기능 → 죽상경화 위험 → 장기 심혈관 사건</b>이라는 연결고리의 앞부분에는 비교적 좋은 인간 데이터가 있습니다. 하지만 마지막 단계인 ‘실제 수명 연장’은 아직 직접 입증되지 않았습니다.</p></div>

<h2>05. 만성 염증과 inflammaging: 긍정적인 결과와 반대 결과가 동시에 있다</h2>
<p>항노화에서 중요한 질문은 안토시아닌이 <b>만성 저등급 염증</b>을 줄일 수 있느냐입니다. 2024년 정제 안토시아닌 RCT들을 모은 dose-response 메타분석에서는 CRP, TNF-α, IL-6가 모두 유의하게 낮아졌습니다. 특히 기저 CRP가 높은 사람, 위험군·질환군, 84일 이상 개입, 320 mg/day 이상 하위군에서 CRP 감소가 더 뚜렷했습니다.</p>
<p>하지만 2025년 대사질환 환자만 모은 11개 RCT 메타분석에서는 IL-1β, TNF-α, IL-6 모두 전체 분석에서 유의한 감소가 없었습니다. 연구 간 이질성도 매우 컸습니다. 일부 고혈압 하위군에서는 감소 신호가 있었지만 전체적으로는 임상적으로 큰 효과라고 보기 어려웠습니다.</p>
<p>두 결과는 서로 모순처럼 보이지만 사실 <b>제형·대상·기저 염증 정도·용량·기간</b>이 다르면 결과가 달라질 수 있다는 것을 보여줍니다. 따라서 ‘안토시아닌 = 확실한 항염제’라고 부르기보다 <b>일부 조건에서 염증 지표를 낮출 가능성이 있는 식이 폴리페놀</b>이라고 표현하는 것이 맞습니다.</p>

<h2>06. 뇌 건강: ‘색소가 뇌까지 간다’보다 혈관과 대사체가 더 중요할 수 있다</h2>
<p>안토시아닌과 인지기능을 연결하는 기전은 몇 가지입니다. 첫째, FMD와 뇌혈류 같은 <b>혈관 기능</b>이 좋아지면 뇌에 산소와 영양 공급이 유리할 수 있습니다. 둘째, 일부 대사체가 혈액뇌장벽을 통과할 가능성이 있습니다. 셋째, 염증과 산화스트레스 관련 신호를 조절할 수 있습니다.</p>
<p>2022년 중·고령의 인지적으로 건강한 성인을 대상으로 한 13개 연구 메타분석에서는 <b>processing speed</b>가 유의하게 개선됐지만 기억·주의·실행기능·정신운동 수행은 유의하지 않았습니다. 즉 영역별로 결과가 달랐습니다.</p>
<p>2025년 발표된 더 넓은 systematic review/meta-analysis는 30개 RCT를 검토했고, 14개 연구 733명을 정량 분석했습니다. 단기기억·언어학습·작업기억·실행기능 등에서 개선 신호가 보고됐지만 연구 설계가 다양하고 표본이 작아 확정적이지 않았습니다.</p>
<p>그리고 가장 중요하게, <b>2026년 24주 다기관 3군 RCT</b>에서는 60–85세 기억력 저하를 호소한 성인 110명을 고안토시아닌 식단, 블랙커런트 유래 250 mg/day 보충제, placebo로 나눴습니다. 94명이 완료했지만 청각 episodic memory를 포함한 1차·2차 인지결과, 혈압, 염증지표, 지질, 혈관·미세혈관 기능에서 <b>treatment × time 유의한 효과가 없었습니다.</b></p>
<p>이 연구는 ‘안토시아닌이 뇌에 아무 효과가 없다’는 뜻은 아닙니다. 연구진은 참가자들이 전반적으로 건강하고 인지 저하가 심하지 않아 효과가 작았을 가능성을 제기했습니다. 하지만 건강한 고령자에게 250 mg/day를 먹이면 기억력이 확실히 좋아진다고 말할 근거도 없다는 뜻입니다.</p>

<h2>07. 장내미생물: 가장 재미있지만 가장 개인차가 큰 분야</h2>
<p>안토시아닌은 부모 화합물 자체의 흡수율이 낮기 때문에 상당량이 대장으로 갑니다. 그래서 최근 연구에서는 ‘안토시아닌 → 장내미생물 → phenolic metabolite → 전신 효과’라는 축이 중요하게 다뤄집니다.</p>
<p>2023년 8개 인간 임상시험, 252명을 종합한 메타분석에서는 Firmicutes, Proteobacteria, Actinobacteria의 상대적 비율은 유의하게 변하지 않았고 Bacteroidetes만 일부 분석에서 증가했습니다. 연구 수가 적고 결과가 일관되지 않아 ‘안토시아닌이 장내미생물을 좋게 바꾼다’고 단정하기에는 부족했습니다.</p>
<p>2025년 99명의 인지저하 위험 고령자를 24주 추적한 이중맹검 RCT에서는 전체 alpha diversity는 변하지 않았지만 beta diversity에서 작은 변화가 있었고, 반응은 <b>baseline enterotype, BMI, 연령</b>에 따라 달랐습니다. 특히 같은 보충제를 먹어도 시작할 때의 microbiome 상태에 따라 다른 균들이 움직였습니다. 인지기능은 개선되지 않았고 microbiome 변화가 인지결과를 매개하지도 않았습니다.</p>
<p>이 결과는 매우 흥미롭습니다. 식이 폴리페놀의 효과가 ‘모든 사람에게 같은 평균 효과’라기보다 <b>개인의 장내미생물 상태에 따라 달라질 수 있다</b>는 personalized nutrition의 가능성을 보여주기 때문입니다.</p>

<h2>08. 음식과 보충제는 같은가?</h2>
<p>아닙니다. 블루베리나 블랙커런트를 먹으면 안토시아닌뿐 아니라 식이섬유, 비타민 C, 다른 flavonoid, 유기산, 당, 미네랄을 같이 먹게 됩니다. 반면 정제 안토시아닌 캡슐은 특정 glycoside 조합을 일정량 투여할 수 있어 기전을 보기 좋지만 실제 식사와는 다릅니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>식품</b><span>베리·적양배추·자색고구마·검은콩 껍질 등. 다양한 polyphenol과 식이섬유가 함께 들어옴.</span></div>
  <div class="evidence-card"><b>추출물</b><span>블랙커런트·빌베리·블루베리 추출물. 제조법에 따라 anthocyanin profile이 다름.</span></div>
  <div class="evidence-card"><b>정제 안토시아닌</b><span>임상시험에서 80–320 mg/day 이상 등 다양한 용량 사용. 장기 최적용량은 확립되지 않음.</span></div>
</div>
<p>2026년 건강한 사람 메타분석에서는 <b>50 mg/day 이상</b>의 식이적으로 달성 가능한 범위에서도 일부 FMD 개선이 관찰됐습니다. 그렇다고 50 mg/day가 ‘항노화 최소용량’이라는 뜻은 아닙니다. 연구별 제형과 식품 matrix가 다르고 수명 관련 endpoint가 아니기 때문입니다.</p>

<h2>09. 많이 먹을수록 더 좋은가?</h2>
<p>현재 근거로는 그렇다고 말할 수 없습니다. 일부 염증 메타분석에서는 320 mg/day 이상에서 효과가 더 뚜렷했지만, 다른 대사질환 메타분석에서는 고용량이라고 일관된 항염 효과가 나타나지 않았습니다. 또 장기 고용량 정제 안토시아닌의 안전성과 임상적 우월성이 음식 섭취보다 충분히 검증된 것도 아닙니다.</p>
<p>식품 형태의 베리류와 자색 채소는 일반 식단의 일부로 안전성이 높지만, 고용량 추출물은 특정 약물과의 상호작용이나 소화기 증상, 제품 품질 문제 등을 고려해야 합니다. 특히 보충제의 ‘항노화’ 표기는 임상적인 수명 연장 효과를 의미하지 않습니다.</p>

<h2>10. LONGEVITY JOURNAL 근거 판정</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>혈관내피/FMD</b><span><strong>근거 중등도~강함.</strong> 급성·만성 RCT에서 반복 개선.</span></div>
  <div class="evidence-card"><b>지질·혈압·혈당</b><span><strong>혼재.</strong> 일부 환자군에서는 이득이 있지만 건강인 전체 분석에서는 일관되지 않음.</span></div>
  <div class="evidence-card"><b>만성 염증</b><span><strong>가능성 있으나 불균일.</strong> CRP·IL-6·TNF-α 감소 메타분석과 null 메타분석이 공존.</span></div>
  <div class="evidence-card"><b>인지기능</b><span><strong>작은 신호.</strong> processing speed·일부 기억 영역에서 개선 가능성, 2026 대규모 24주 RCT는 null.</span></div>
  <div class="evidence-card"><b>장내미생물</b><span><strong>초기 단계.</strong> 개인의 enterotype·BMI·연령에 따라 반응이 다를 가능성.</span></div>
  <div class="evidence-card"><b>수명 연장</b><span><strong>입증 안 됨.</strong> 장기 코호트 연관성은 있지만 인간 수명 연장 RCT는 없음.</span></div>
</div>

<h2>11. 실생활에서 기억할 6가지</h2>
<ol>
<li><b>‘보라색’ 자체가 효능은 아닙니다.</b> 식품마다 cyanidin·delphinidin·malvidin 등의 조성이 다릅니다.</li>
<li><b>혈관 기능 근거가 가장 안정적입니다.</b> 특히 FMD 개선은 여러 RCT와 2026 메타분석에서 반복됩니다.</li>
<li><b>항염 효과는 대상군에 따라 다릅니다.</b> 기저 염증이 높은 사람에서 효과가 더 클 가능성이 있습니다.</li>
<li><b>뇌 건강은 기대와 현실을 구분해야 합니다.</b> 작은 인지 개선 메타분석이 있지만 2026 24주 RCT는 음성이었습니다.</li>
<li><b>장내미생물이 개인차를 설명할 수 있습니다.</b> 같은 보충제를 먹어도 baseline microbiome에 따라 반응이 달라질 수 있습니다.</li>
<li><b>항노화 식품으로는 합리적이지만 ‘수명 연장제’는 아닙니다.</b> 베리·자색 채소를 다양한 식물성 식단의 일부로 보는 것이 현재 근거와 가장 잘 맞습니다.</li>
</ol>

<div class="takeaway"><strong>LONGEVITY JOURNAL의 결론</strong><p>안토시아닌은 ‘항산화 색소’라는 오래된 설명보다 훨씬 흥미로운 물질입니다. <b>혈관내피 NO 신호, 염증, 장내미생물 대사, 뇌혈류</b>를 연결하는 여러 인간 데이터가 쌓여 있고, 그중 혈관내피 기능 근거가 가장 안정적입니다. 하지만 염증·인지기능·microbiome 효과는 개인차가 크고, 인간 수명 연장 효과는 아직 입증되지 않았습니다. 현재 가장 합리적인 해석은 <b>짙은 색의 식물성 식품을 자주 먹는 건강한 식사 패턴을 지지하는 하나의 생물학적 근거</b>이지, 고용량 캡슐 하나로 노화를 역전시키는 물질은 아니라는 것입니다.</p></div>

<h2>근거자료 — 발표 시간순</h2>
<div class="timeline">
  <div class="paper"><time>2011</time><div><b>Zhu Y, et al. Clinical Chemistry.</b><br>고콜레스테롤혈증 환자에서 320 mg/day 정제 안토시아닌 12주. FMD와 cGMP 개선, NO-cGMP 경로 관여 가능성 제시.<br><a href="https://pubmed.ncbi.nlm.nih.gov/21926181/" target="_blank" rel="noopener noreferrer">PMID 21926181 · DOI 10.1373/clinchem.2011.167361 ↗</a></div></div>
  <div class="paper"><time>2017</time><div><b>Fairlie-Jones L, et al. Nutrients.</b><br>24개 RCT 메타분석. anthocyanin-rich 식품·추출물이 급성·만성 FMD를 개선. 연구 간 이질성은 큼.<br><a href="https://pubmed.ncbi.nlm.nih.gov/28825651/" target="_blank" rel="noopener noreferrer">PMID 28825651 · DOI 10.3390/nu9080908 ↗</a></div></div>
  <div class="paper"><time>2022</time><div><b>Sandoval-Ramírez BA, et al. Nutrition Reviews.</b><br>umbrella review. 관찰연구에서는 고혈압·T2DM 위험 감소 연관, RCT 메타분석에서는 지질·혈당·내피기능 개선 신호. 혈압 효과는 일관되지 않음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/34725704/" target="_blank" rel="noopener noreferrer">PMID 34725704 · DOI 10.1093/nutrit/nuab086 ↗</a></div></div>
  <div class="paper"><time>2022</time><div><b>Anthocyanin-rich supplementation and cognition meta-analysis.</b><br>중·고령 건강인 13개 연구. processing speed는 개선됐지만 memory·attention·executive function은 유의하지 않음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/35960187/" target="_blank" rel="noopener noreferrer">PMID 35960187 ↗</a></div></div>
  <div class="paper"><time>2023</time><div><b>Shu C, et al. Nutrition Research.</b><br>8개 인간 임상시험 252명 장내미생물 메타분석. Firmicutes·Proteobacteria·Actinobacteria 변화는 유의하지 않았고 Bacteroidetes만 일부 분석에서 증가. 임상자료 부족.<br><a href="https://pubmed.ncbi.nlm.nih.gov/37336096/" target="_blank" rel="noopener noreferrer">PMID 37336096 · DOI 10.1016/j.nutres.2023.04.002 ↗</a></div></div>
  <div class="paper"><time>2024</time><div><b>Hariri M, et al. Phytotherapy Research.</b><br>정제 안토시아닌 RCT dose-response 메타분석. CRP, TNF-α, IL-6 감소. 기저 염증·용량·기간에 따라 효과 차이.<br><a href="https://pubmed.ncbi.nlm.nih.gov/38272574/" target="_blank" rel="noopener noreferrer">PMID 38272574 · DOI 10.1002/ptr.8124 ↗</a></div></div>
  <div class="paper"><time>2024</time><div><b>Ellis LR, et al. Molecular Nutrition & Food Research.</b><br>인지기능과 혈관기능을 동시에 본 RCT systematic review. 혈관과 뇌 기능의 연결 가능성을 지지하지만 연구 설계의 다양성과 작은 표본이 한계.<br><a href="https://pubmed.ncbi.nlm.nih.gov/38961529/" target="_blank" rel="noopener noreferrer">PMID 38961529 · DOI 10.1002/mnfr.202300502 ↗</a></div></div>
  <div class="paper"><time>2025</time><div><b>Babaee Kiadehi F, et al. Current Therapeutic Research.</b><br>대사질환자 11개 RCT. IL-1β·TNF-α·IL-6는 전체적으로 유의한 감소 없음. 높은 이질성과 일부 고혈압 하위군 신호.<br><a href="https://pubmed.ncbi.nlm.nih.gov/40034375/" target="_blank" rel="noopener noreferrer">PMID 40034375 · DOI 10.1016/j.curtheres.2024.100772 ↗</a></div></div>
  <div class="paper"><time>2025</time><div><b>Seyoum Y, et al. Gut Microbes.</b><br>60–80세 인지저하 위험군 99명, 24주 이중맹검 RCT. 전체 alpha diversity 변화 없음, enterotype·BMI·연령에 따른 미생물 반응 차이. 인지기능 개선 없음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/41163367/" target="_blank" rel="noopener noreferrer">PMID 41163367 · DOI 10.1080/19490976.2025.2570862 ↗</a></div></div>
  <div class="paper"><time>2025</time><div><b>Anthocyanins and cognition systematic review/meta-analysis.</b><br>30개 RCT 검토, 14개 연구 733명 정량분석. 여러 인지영역에서 작은 개선 신호가 있었지만 연구 이질성과 표본 크기 제한.<br><a href="https://pubmed.ncbi.nlm.nih.gov/39875765/" target="_blank" rel="noopener noreferrer">PMID 39875765 · DOI 10.1007/s13668-024-00595-z ↗</a></div></div>
  <div class="paper"><time>2026</time><div><b>do Rosario V, et al. Food & Function.</b><br>60–85세 110명, 고안토시아닌 식단 vs 블랙커런트 250 mg/day vs placebo, 24주. primary·secondary cognition, 혈압, 염증, 지질, 혈관기능에서 treatment × time 유의효과 없음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/41879044/" target="_blank" rel="noopener noreferrer">PMID 41879044 · DOI 10.1039/d5fo05366h ↗</a></div></div>
  <div class="paper"><time>2026</time><div><b>Avendano EE, et al. American Journal of Clinical Nutrition.</b><br>18개 코호트와 65개 RCT를 통합한 최신 대규모 분석. 건강인에서 acute FMD +1.50%p, chronic FMD +1.41%p. 장기 코호트에서는 높은 섭취와 낮은 CVD·MI·T2DM 위험 연관. 혈압·lipid·glucose는 전체 RCT에서 일관된 개선 없음.<br><a href="https://pubmed.ncbi.nlm.nih.gov/42547104/" target="_blank" rel="noopener noreferrer">PMID 42547104 · DOI 10.1016/j.ajcnut.2026.101304 ↗</a></div></div>
</div>

<p class="editor-note"><strong>최종 근거 검토:</strong> 2026-10-08 · 인체 RCT, systematic review, meta-analysis를 우선해 정리했습니다. 식품 섭취와 정제 보충제를 분리해서 해석하며, 관찰연구의 위험 감소 수치는 인과효과로 표현하지 않습니다. 이 글은 일반적인 과학 정보이며 개인의 치료·처방을 대신하지 않습니다.</p>
`
});
})();
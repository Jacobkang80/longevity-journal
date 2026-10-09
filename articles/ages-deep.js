(()=>{
const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
if(posts.some(x=>x.slug==='ages-evidence'))return;
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
posts.push({
  slug:'ages-evidence',
  category:'health',
  date:'2024-02-26',
  title:'당독소(AGEs)는 정말 노화를 촉진할까? — 당화, RAGE, 피부·혈관·신장과 식단의 근거',
  excerpt:'AGEs는 하나의 독소가 아니라 다양한 당화산물의 집합입니다. 내인성 형성, 조리로 생기는 dietary AGE, RAGE·염증, 피부·혈관·신장, 그리고 “AGE detox” 주장을 인간 근거로 구분합니다.',
  tags:['AGEs','Advanced glycation end products','Glycation','당독소','RAGE','Methylglyoxal','CML','CEL','MG-H1','Glucosepane','Skin autofluorescence','Inflammaging','Diabetes','CKD','Longevity Nutrition'],
  html:`
<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2024-02-26 · <a href="https://myepic2.tistory.com/43" target="_blank" rel="noopener noreferrer">당독소(AGEs)의 위험성과 독소 제거 방법 ↗</a> · 원문 34개 문단·4장 이미지. LONGEVITY JOURNAL 근거 전면 업데이트 2026-10-09</p>

<figure class="story-hero"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Steak_auf_Grill.jpg" alt="그릴 위에서 고기를 굽는 모습" loading="eager"><figcaption>높은 온도의 건열 조리는 일부 식품의 dietary AGE 형성을 크게 늘릴 수 있습니다. 그러나 ‘구운 고기 한 번 = 노화 촉진’처럼 단순화할 수는 없습니다. 사진: Jon Sullivan / Public Domain.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>AGEs(advanced glycation end products)는 단일한 ‘독소’가 아니라, 당화·산화 과정에서 생기는 다양한 화합물의 집합입니다.</b> 고혈당·산화스트레스·신장기능 저하는 체내 AGE 축적을 늘릴 수 있고, 일부 AGEs는 단백질을 교차결합시키거나 RAGE를 통한 염증 신호에 관여합니다. 높은 온도의 굽기·튀기기보다 삶기·찌기 같은 습열 조리가 dietary AGE를 낮추는 것은 비교적 일관됩니다. 다만 <b>AGE를 낮추면 인간의 노화가 늦어지고 수명이 늘어난다는 직접 증거는 없습니다.</b> ‘땀으로 AGE를 빼낸다’, ‘16시간 단식이 AGE를 청소한다’ 같은 해독 주장은 현재 인간 근거로 확립되지 않았습니다.</p></div>

<h2>01. ‘당독소’라는 이름부터 조심해야 한다</h2>
<p>AGEs는 한국어로 흔히 ‘당독소’라고 불립니다. 기억하기 쉬운 표현이지만 과학적으로는 오해를 만들 수 있습니다. AGEs는 하나의 독성물질이 아니라 <b>서로 구조와 작용이 다른 수많은 advanced glycation end products의 묶음</b>입니다.</p>
<p>대표적인 예로 Nε-carboxymethyllysine(CML), Nε-carboxyethyllysine(CEL), methylglyoxal-derived hydroimidazolone(MG-H1), pentosidine, glucosepane 등이 있습니다. 어떤 것은 RAGE와 신호를 만들고, 어떤 것은 collagen 같은 장수명 단백질을 교차결합시키며, 어떤 것은 주로 노출을 추적하는 biomarker로 이용됩니다.</p>
<p>따라서 ‘AGE가 높다’는 말은 실제로 <b>어떤 AGE를 어떤 조직에서 어떤 방법으로 측정했는가</b>를 확인해야 의미가 분명해집니다.</p>

<figure class="story-photo molecular-figure"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/N%286%29-carboxymethyllysine.svg" alt="CML N6 carboxymethyllysine의 구조" loading="lazy"><figcaption>Nε-carboxymethyllysine(CML)의 구조. CML은 자주 측정되는 AGE 표지자 중 하나지만, CML 하나가 모든 AGE burden을 대표하지는 않습니다. 이미지: Fvasconcellos / Wikimedia Commons, Public Domain.</figcaption></figure>

<h2>02. AGEs는 어떻게 만들어질까? — ‘설탕이 단백질에 붙는다’보다 복잡하다</h2>
<p>고전적인 glycation은 효소가 관여하지 않는 비효소적 반응입니다. 환원당의 carbonyl group이 단백질의 lysine·arginine 같은 amino group과 반응해 불안정한 Schiff base를 만들고, 이후 Amadori product를 거쳐 산화·탈수·분해 과정을 통해 여러 AGE로 발전할 수 있습니다.</p>
<p>또 하나의 중요한 경로가 <b>methylglyoxal(MGO)</b> 같은 반응성이 높은 dicarbonyl입니다. MGO는 정상적인 glycolysis 과정에서도 소량 생기지만 고혈당·산화스트레스·대사 이상에서 부담이 커질 수 있습니다. 우리 몸에는 glyoxalase system이 있어 MGO 같은 전구체를 처리합니다.</p>
<div class="pathway" aria-label="glycation pathway simplified">
  <div class="pathway-step"><b>Reducing sugar · MGO</b><span>carbonyl stress</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>비효소적 당화</b><span>Schiff base · Amadori · oxidation</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>AGEs</b><span>CML · CEL · MG-H1 · glucosepane 등</span></div>
</div>
<p class="small-note">※ HbA1c도 비효소적 당화의 결과를 이용한 지표이지만, ‘AGE 전체’를 직접 측정하는 검사는 아닙니다.</p>

<h2>03. 체내에서 생기는 AGE와 음식으로 들어오는 AGE는 구분해야 한다</h2>
<p><b>내인성 AGE</b>는 우리 몸 안에서 생깁니다. 정상적인 노화에서도 장수명 단백질에 서서히 축적될 수 있고, 특히 만성 고혈당과 산화스트레스가 큰 상황에서는 형성이 빨라질 수 있습니다.</p>
<p><b>외인성 또는 dietary AGE(dAGE)</b>는 조리·가공 과정의 Maillard reaction에서 만들어져 음식으로 섭취됩니다. 다만 음식 속 AGE가 모두 같은 비율로 흡수되어 그대로 조직에 쌓이는 것은 아닙니다. 화합물마다 소화·흡수·장내미생물 처리·신장 배설이 다릅니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>내인성 형성</b><span>고혈당·산화스트레스·carbonyl stress가 중요한 변수. 당뇨와 CKD에서 부담이 커질 수 있음.</span></div>
  <div class="evidence-card"><b>Dietary AGE</b><span>식품 종류뿐 아니라 온도·시간·수분·산도에 크게 좌우됨.</span></div>
  <div class="evidence-card"><b>핵심</b><span>혈중·조직 AGE burden은 음식 하나가 아니라 대사상태와 제거능력까지 합친 결과.</span></div>
</div>

<h2>04. RAGE: AGE가 염증과 연결되는 대표적인 통로</h2>
<p>RAGE(receptor for advanced glycation end products)는 이름 때문에 ‘AGE 전용 수용체’처럼 보이지만 실제로는 여러 ligand를 인식하는 <b>multi-ligand pattern-recognition receptor</b>입니다. 일부 AGEs 외에도 S100 proteins, HMGB1 등 다양한 신호와 상호작용합니다.</p>
<p>RAGE 활성화는 ROS, NF-κB, 염증성 cytokine 같은 경로와 연결될 수 있고, 만성질환과 inflammaging 연구에서 중요한 후보 기전으로 다뤄집니다. 2026년 <i>Ageing Research Reviews</i> 리뷰도 RAGE를 축적되는 생체 손상과 inflammaging을 연결하는 후보 축으로 정리했습니다.</p>
<p>하지만 여기서도 <b>RAGE 경로가 존재한다 = 식이 AGE를 줄이면 인간 노화가 역전된다</b>는 뜻은 아닙니다. 세포·동물 기전과 인간 건강수명 결과 사이에는 아직 큰 증거 간격이 있습니다.</p>

<h2>05. RAGE만이 전부는 아니다 — 단백질의 ‘교차결합’</h2>
<p>AGE의 또 다른 중요한 작용은 receptor와 무관한 구조적 변화입니다. collagen·elastin처럼 교체 속도가 느린 extracellular matrix 단백질에 glycation cross-link가 쌓이면 조직의 물리적 성질이 바뀔 수 있습니다.</p>
<p>혈관벽에서는 탄성이 떨어지고 stiffness가 증가할 가능성이 있고, 피부에서는 collagen의 유연성과 분해 특성이 변할 수 있습니다. 피부 노화 연구에서 glycation이 주목받는 이유입니다.</p>
<p>다만 ‘피부 AGE가 줄면 줄기세포가 되살아난다’ 같은 강한 표현은 현재 근거를 넘어섭니다. 피부 노화는 자외선, 흡연, 유전, 호르몬, 산화스트레스, 세포노화, extracellular matrix remodeling 등 여러 요인의 결과입니다.</p>

<h2>06. 신장은 AGE의 표적이면서 동시에 제거기관이다</h2>
<p>AGE를 ‘해독’이라는 단어로 설명하려면 먼저 신장을 봐야 합니다. 손상된 glycated protein이 분해되면 작은 glycation free adduct가 생길 수 있고, 이들은 정상적으로 소변으로 배설됩니다. 신장기능이 떨어지면 이 제거가 감소하고, 동시에 uremic oxidative stress로 AGE 형성도 증가할 수 있습니다.</p>
<p>실제로 renal failure 연구에서는 renal clearance가 떨어질수록 혈중 glycation free adduct가 크게 축적됐습니다. 그래서 CKD에서 AGE burden이 높은 것은 단순히 ‘나쁜 음식을 많이 먹어서’가 아니라 <b>생성 증가 + 제거 감소</b>가 동시에 작동할 수 있기 때문입니다.</p>
<div class="takeaway"><strong>‘AGE detox’의 현실</strong><p>우리 몸에는 이미 glyoxalase, proteolysis, 간·신장 대사와 배설 같은 처리체계가 있습니다. 현재 인간 연구에서 <b>반신욕·사우나·땀을 많이 내는 것으로 조직 AGE가 의미 있게 제거된다는 근거는 확립돼 있지 않습니다.</b></p></div>

<h2>07. Skin Autofluorescence: 팔에 빛을 비추면 AGE를 알 수 있을까?</h2>
<p>일부 AGEs는 형광 특성을 가지고 있어 피부 자가형광(skin autofluorescence, SAF)으로 장기간 축적된 glycation burden을 비침습적으로 추정할 수 있습니다. 당뇨·CKD·심혈관질환 연구에서 많이 사용됩니다.</p>
<p>2026년 24개 prospective study, 12,361명을 종합한 메타분석에서는 높은 SAF가 전체 사망, 심혈관 사망, 심혈관 사건, 뇌졸중의 높은 위험과 연관됐고, 특히 ESRD/CKD에서 연관성이 강했습니다.</p>
<p>하지만 SAF는 <b>예후 biomarker</b>입니다. 형광을 띠지 않는 AGE도 있고 피부색·조직 특성·기기와 측정조건의 영향을 받을 수 있습니다. 따라서 ‘SAF가 높으니 AGE가 직접 사망을 일으켰다’는 인과 결론으로 바꾸면 안 됩니다.</p>

<h2>08. 음식의 AGE는 무엇이 결정할까? — 온도보다 ‘건열 + 시간’의 조합</h2>
<p>2004년 250개 식품을 분석한 연구와 2010년 확장 데이터베이스 연구는 food AGE 분야에서 널리 인용됩니다. 두 연구 모두 <b>고온의 건열 조리</b>가 AGE marker인 CML을 크게 높일 수 있음을 보여줬습니다.</p>
<p>같은 식품에서도 grilling, broiling, frying, roasting 같은 조리가 boiling, steaming, stewing보다 AGE 형성을 늘리는 경향이 있었습니다. 낮은 온도, 짧은 조리시간, 많은 수분, 레몬·식초 같은 산성 조건은 형성을 줄일 수 있습니다.</p>
<p>다만 이 오래된 food AGE table의 숫자를 절대적인 ‘독성 점수’로 사용하면 곤란합니다. 초기 데이터베이스는 특정 CML antibody 기반 ELISA 측정에 크게 의존했고, 실제 음식에는 CML 외에도 수많은 AGE와 Maillard product가 존재합니다.</p>

<div class="evidence-grid">
  <div class="evidence-card"><b>AGE ↑ 경향</b><span>굽기 · 튀기기 · broiling · roasting · 장시간 고온 건열.</span></div>
  <div class="evidence-card"><b>AGE ↓ 경향</b><span>삶기 · 찌기 · stewing · 낮은 온도 · 짧은 시간 · 수분.</span></div>
  <div class="evidence-card"><b>산성 조건</b><span>레몬·식초 등을 이용한 marinade가 일부 Maillard/AGE 형성을 줄일 수 있음.</span></div>
</div>

<h2>09. 2025년에는 ‘같은 재료, 다른 조리법’으로 직접 비교했다</h2>
<p>조리 연구의 큰 약점은 ‘저AGE 식단이 원래 더 건강한 재료였던 것 아닌가?’라는 혼란입니다. 2025년 <i>Cell Reports Medicine</i>의 exploratory randomized crossover trial은 이 문제를 줄이기 위해 <b>같은 재료를 사용하고 조리방법만 바꾼 식단</b>을 건강한 성인 20명에게 비교했습니다.</p>
<p>삶기·찌기 중심의 low-AGE cooking은 serum AGE를 낮추고 lipid profile을 개선하는 방향을 보였습니다. 반대로 grilling·baking 중심 high-AGE cooking에서는 serum AGE가 높아졌습니다. 흥미롭게도 high-AGE 조건에서 fecal butyrate가 증가해, 조리법의 생물학적 효과가 하나의 축으로만 설명되지 않는다는 점도 보여줬습니다.</p>
<p>표본이 20명인 pilot study이므로 이 결과를 심혈관질환 예방이나 수명연장까지 확대할 수는 없습니다. 그래도 <b>재료 자체와 별개로 조리법이 사람의 AGE 지표를 움직일 수 있다</b>는 직접적인 인간 근거라는 점에서 의미가 있습니다.</p>

<h2>10. 저AGE 식단 임상시험: 대사지표는 좋아지지만 ‘만능’은 아니다</h2>
<p>2016년 건강한 과체중 성인 20명을 대상으로 한 double-blind randomized crossover trial에서는 열량과 macronutrient를 맞춘 high-AGE와 low-AGE 식단을 각각 2주 섭취했습니다. low-AGE 조건에서 clamp로 측정한 insulin sensitivity가 개선됐습니다.</p>
<p>같은 해 metabolic syndrome을 가진 비만 성인을 대상으로 한 1년 randomized trial에서는 low-AGE군에서 HOMA-IR, AGE, oxidative stress, inflammation이 개선되는 방향이 관찰됐습니다. 반면 일반 AGE 식단군에서는 여러 지표가 악화됐습니다.</p>
<p>2017년 17개 RCT, 560명을 묶은 메타분석에서는 low-AGE diet가 insulin resistance, total cholesterol, LDL 및 일부 염증·산화스트레스 지표를 낮췄습니다. 그러나 <b>체중, 공복혈당, HbA1c, HDL, 혈압은 유의한 차이가 없었습니다.</b></p>
<div class="takeaway"><strong>Biomarker와 임상결과를 구분하자</strong><p>순환 AGE와 염증표지자가 내려가는 것은 흥미롭지만, 그것만으로 심근경색·치매·장애·사망이 줄었다고 말할 수 없습니다. 현재 low-AGE 식단의 인간 근거는 주로 <b>단기·중기 biomarker 및 대사지표</b> 수준입니다.</p></div>

<h2>11. 2024년 당뇨 RCT 리뷰는 오히려 ‘엇갈리는 결과’를 잘 보여준다</h2>
<p>당뇨병 환자만 대상으로 한 2024년 systematic review에는 7개 randomized controlled trial이 포함됐습니다. low-dAGE 식단은 측정한 모든 연구에서 circulating AGE를 낮췄고(3/3), oxidative stress(3/3)와 inflammatory markers(4/4)도 비교적 일관되게 개선됐습니다.</p>
<p>하지만 glucose 개선은 6개 중 1개 연구에 그쳤고, HbA1c는 6개 모두, HOMA는 3개 모두 일관된 개선이 없었습니다. lipid profile도 4개 중 1개 연구에서만 개선됐습니다.</p>
<p>이 결과는 AGE 연구에서 자주 나타나는 패턴을 보여줍니다. <b>AGE exposure/biomarker를 움직이는 것과 임상적으로 중요한 대사결과를 개선하는 것은 별개의 단계</b>입니다.</p>

<h2>12. ‘AGE 높은 식품표’를 그대로 따라 먹어도 될까?</h2>
<p>여기서 식단이 이상해지는 함정이 있습니다. 오래된 AGE table에는 지방·단백질이 많은 음식이 높은 값으로 기록되면서 치즈·견과류·일부 오일 같은 식품도 높은 dAGE 수치를 보일 수 있습니다. 그러나 음식의 건강효과는 AGE 하나로 결정되지 않습니다.</p>
<p>예를 들어 견과류와 extra virgin olive oil은 전체 심혈관 식사패턴에서 유리한 근거가 풍부합니다. 커피도 roasting 과정에서 Maillard product가 생기지만 관찰연구에서는 적당한 커피 섭취가 오히려 여러 건강결과와 역상관을 보입니다.</p>
<p>따라서 <b>AGE 수치표만 보고 견과류·올리브유·커피 같은 식품을 제거하는 것은 근거의 우선순위를 뒤집는 행동</b>입니다. 식품 단위의 장기 건강결과와 전체 식사패턴을 더 높은 우선순위로 봐야 합니다.</p>

<h2>13. 정제 탄수화물과 AGE의 관계 — ‘설탕을 먹으면 바로 AGE가 된다’는 오해</h2>
<p>고혈당이 오래 지속되면 내인성 glycation이 증가할 수 있으므로 혈당 관리가 중요한 것은 맞습니다. 그러나 건강한 사람이 밥이나 과일 한 번 먹은 뒤 혈당이 오르는 정상 생리를 곧바로 ‘AGE 생성 독성사건’으로 표현하는 것은 과합니다.</p>
<p>특히 dietary AGE와 endogenous AGE를 섞으면 혼란이 커집니다. 어떤 고지방·고단백 식품은 당 함량이 낮아도 고온 건열 조리로 dAGE가 높을 수 있고, 반대로 수분이 많은 탄수화물 식품은 조리 AGE가 낮을 수 있습니다.</p>
<p>LONGEVITY 관점에서 더 중요한 것은 <b>만성적인 고혈당·인슐린저항성·비만·흡연·신장기능 저하 같은 AGE 형성 환경을 줄이는 것</b>입니다.</p>

<h2>14. ‘땀을 빼면 AGE가 빠진다’는 주장은 근거가 있는가?</h2>
<p>원문에서는 반신욕이나 땀 배출을 AGE 제거 전략으로 소개했습니다. 하지만 현재까지 사람에서 사우나·반신욕·발한이 조직의 AGE burden을 의미 있게 제거한다는 확립된 임상근거는 없습니다.</p>
<p>사우나 자체는 혈압·혈관반응·웰빙 등 다른 건강 연구가 있고 운동도 건강에 매우 유익합니다. 문제는 <b>그 이익을 ‘AGE가 땀으로 빠져서 생긴다’고 설명하는 것</b>입니다. 입증된 기전이 아닌 설명을 붙일 필요는 없습니다.</p>

<h2>15. 단식과 HIIT는 AGE를 ‘청소’하는가?</h2>
<p>간헐적 단식과 운동은 체중·혈당·인슐린 감수성·산화스트레스에 영향을 줄 수 있으므로 장기적으로 내인성 glycation 환경을 개선할 가능성은 있습니다. 하지만 <b>16시간 단식이 시작되면 조직 AGE가 직접 분해된다</b>거나 <b>HIIT 80–90% 심박이 AGE를 배출한다</b>는 식의 인간 근거는 없습니다.</p>
<p>특히 collagen에 이미 형성된 안정적인 cross-link는 혈중 포도당처럼 몇 시간 사이에 사라지는 물질이 아닙니다. 그래서 생활습관의 목표는 ‘해독 버튼’을 누르는 것이 아니라 <b>AGE 형성을 촉진하는 대사환경과 노출을 장기간 낮추는 것</b>에 가깝습니다.</p>

<h2>16. Resveratrol·Curcumin 같은 항당화 보충제는?</h2>
<p>Resveratrol, curcumin, polyphenol, carnosine 등 여러 물질이 carbonyl trapping, antioxidant, RAGE signaling 억제 같은 항당화 기전으로 연구돼 왔습니다. 세포·동물 연구에서는 흥미로운 결과가 많습니다.</p>
<p>하지만 건강한 사람이 특정 보충제를 먹어서 tissue AGE가 의미 있게 줄고 그 결과 건강수명이나 수명이 연장됐다는 대규모 인간 RCT는 없습니다. ‘antiglycation activity’라는 시험관 결과와 ‘노화 방지 보충제’라는 임상 주장을 분리해야 합니다.</p>

<h2>17. 그럼 실제로 무엇을 하면 좋을까?</h2>
<ol>
<li><b>혈당 관리가 필요한 사람은 혈당 자체를 우선 관리합니다.</b> 당뇨·전당뇨에서 장기간 고혈당을 줄이는 것은 endogenous glycation을 줄이는 가장 직접적인 전략입니다.</li>
<li><b>굽고 튀기는 음식만 반복하지 않습니다.</b> 같은 재료라도 삶기·찌기·stewing 같은 습열 조리를 자주 섞습니다.</li>
<li><b>과도한 탄화·태움은 피합니다.</b> AGE뿐 아니라 고온 조리에서 생길 수 있는 여러 반응산물을 동시에 줄이는 실용적인 원칙입니다.</li>
<li><b>흡연을 피합니다.</b> 담배연기는 glycation·oxidative/carbonyl stress와 관련된 외인성 노출원입니다.</li>
<li><b>‘AGE 낮은 음식표’보다 전체 식단의 질을 우선합니다.</b> 채소·콩·통곡물·생선·견과·EVOO 같은 근거가 풍부한 식품을 단순 AGE 숫자 때문에 제외하지 않습니다.</li>
<li><b>운동·수면·체중 관리를 병행합니다.</b> 이것들은 ‘AGE 해독법’이라기보다 대사건강을 개선하는 독립적으로 근거가 강한 생활습관입니다.</li>
</ol>

<h2>18. 근거를 한 장으로 정리하면</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>기전 · 질환연관</b><span><strong>강함</strong> — 당화, cross-linking, RAGE, 당뇨·CKD에서 AGE 축적은 잘 확립.</span></div>
  <div class="evidence-card"><b>조리법 → AGE 지표</b><span><strong>중등도</strong> — 건열 vs 습열 차이가 음식 분석과 소규모 인간 crossover에서 재현.</span></div>
  <div class="evidence-card"><b>Low-AGE diet → 대사지표</b><span><strong>가능성</strong> — insulin resistance·일부 염증/산화 지표 개선, 결과는 불균일.</span></div>
  <div class="evidence-card"><b>SAF → 예후</b><span><strong>관찰근거 강함</strong> — 특히 CKD/당뇨에서 사건·사망 위험과 연관. 인과는 아님.</span></div>
  <div class="evidence-card"><b>땀·사우나 AGE 제거</b><span><strong>미입증</strong> — 인간에서 직접 AGE clearance를 보여준 근거 없음.</span></div>
  <div class="evidence-card"><b>AGE 감소 → 수명 연장</b><span><strong>미입증</strong> — 인간 lifespan/healthspan RCT 없음.</span></div>
</div>

<h2>19. LONGEVITY JOURNAL의 결론</h2>
<div class="takeaway"><strong>결론</strong><p><b>AGEs는 실제 생물학적 현상이고 당뇨·신장·혈관·피부 노화 연구에서 중요한 축입니다. 그러나 ‘몸속 독소를 씻어내면 젊어진다’는 해독 서사는 과학보다 단순합니다.</b> 현실적으로는 만성 고혈당과 흡연을 피하고, 전체 식단의 질을 높이며, 동일한 재료라도 굽기·튀기기만 반복하지 않고 삶기·찌기를 섞는 전략이 합리적입니다. <br><br><b>AGE burden/SAF ↑ ≠ 노화의 단일 원인 증명<br>Dietary AGE ↓ ≠ 인간 수명 연장 증명<br>Fasting·HIIT·sweating ≠ 입증된 AGE detox</b></p></div>

<h2>20. 근거자료 — 발표 시간순</h2>
<div class="timeline">
${paper('2004','Goldberg T, et al. J Am Diet Assoc.','250개 식품의 CML을 분석. 고온·건열 조리에서 AGE marker가 높았고 삶기에서는 낮은 경향. 초기 ELISA 기반 food AGE database라는 측정 한계가 있음.','https://pubmed.ncbi.nlm.nih.gov/15281050/')}
${paper('2006','Thornalley PJ, et al. Semin Dial.','Glycation free adduct는 정상적으로 소변으로 배설되며 신부전에서 크게 축적될 수 있음을 정리. 신장의 AGE clearance 역할을 보여주는 근거.','https://pubmed.ncbi.nlm.nih.gov/16825015/')}
${paper('2010','Uribarri J, et al. J Am Diet Assoc.','확장 food AGE database. 건열·고온·장시간 조리가 AGE를 높였고 습열·저온·짧은 시간·산성 조건이 형성을 낮춤.','https://pubmed.ncbi.nlm.nih.gov/20497781/')}
${paper('2016','de Courten B, et al. Am J Clin Nutr.','과체중 건강인 20명의 double-blind randomized crossover. 열량·macronutrient를 맞춘 low-AGE diet에서 clamp-measured insulin sensitivity 개선.','https://pubmed.ncbi.nlm.nih.gov/27030534/')}
${paper('2016','Vlassara H, et al. Diabetologia.','비만 metabolic syndrome 대상 1년 RCT. low-AGE군에서 HOMA-IR, AGE, oxidative stress·inflammation 개선. 탈락과 식이개입 특성 등 제한 존재.','https://pubmed.ncbi.nlm.nih.gov/27468708/')}
${paper('2017','Baye E, et al. Scientific Reports.','17개 RCT·560명 메타분석. insulin resistance·total cholesterol·LDL 및 일부 염증/산화 지표 개선. 체중·공복혈당·HbA1c·혈압은 유의차 없음.','https://pubmed.ncbi.nlm.nih.gov/28536448/')}
${paper('2022','Murtaza N, et al. Nutrients.','AGEs와 CKD를 다룬 리뷰. 신장을 AGE clearance의 주요 기관으로 설명하며 생성·제거·dietary exposure를 함께 검토.','https://pubmed.ncbi.nlm.nih.gov/35807857/')}
${paper('2024','Wang L, et al. Experimental Dermatology.','AGE formation·RAGE·cross-linking과 피부 노화의 관계 및 항당화 전략을 검토한 리뷰. 인간 임상확증과 전임상 근거를 구분할 필요.','https://pubmed.ncbi.nlm.nih.gov/38563644/')}
${paper('2024','Advanced Glycation End Products and Health: A Systematic Review.','내인성·외인성 AGE의 생성, 질환연관, 검출법을 폭넓게 정리. AGEs가 이질적인 화합물군임을 강조.','https://pubmed.ncbi.nlm.nih.gov/38705931/')}
${paper('2024','Dietary Restriction of AGEs in Patients with Diabetes.','당뇨 RCT 7개 systematic review. circulating AGE·oxidative stress·inflammation은 개선됐지만 HbA1c·HOMA·lipid는 일관된 개선이 없었음.','https://pubmed.ncbi.nlm.nih.gov/39518960/')}
${paper('2025','Lu X, et al. Crit Rev Food Sci Nutr.','13개 parallel + 4개 crossover 연구 메타분석. high-dAGE diet가 fasting glucose·insulin·HOMA-IR 증가와 연관. 이질성과 식단 평가법의 차이를 고려해야 함.','https://pubmed.ncbi.nlm.nih.gov/39320860/')}
${paper('2025','Wellens J, et al. Cell Reports Medicine.','건강한 성인 20명의 randomized crossover pilot. 동일 재료에서 삶기·찌기 vs 굽기·baking을 비교해 조리법 자체가 serum AGE와 lipid profile을 바꿀 수 있음을 관찰.','https://pubmed.ncbi.nlm.nih.gov/40280130/')}
${paper('2025','Ma Y, et al. Nutrients.','신장이 AGE 대사·배설의 핵심 기관이면서 AGE 손상의 표적이라는 최신 리뷰. 당뇨·CKD에서 AGE-RAGE, oxidative stress, inflammation을 정리.','https://pubmed.ncbi.nlm.nih.gov/40077627/')}
${paper('2026','Guvatova ZG, et al. Ageing Research Reviews.','RAGE를 여러 ligand를 인식하는 염증 센서로 보고 garb-aging과 inflammaging 사이의 후보 연결축을 정리한 기전 리뷰.','https://pubmed.ncbi.nlm.nih.gov/41101736/')}
${paper('2026','Li ACW, et al. Eur J Med Res.','24개 prospective study·12,361명 SAF meta-analysis. 높은 SAF가 사망·심혈관 사건·뇌졸중 위험과 연관, 특히 CKD/ESRD에서 강함. 예후 연관이지 인과 증명은 아님.','https://pubmed.ncbi.nlm.nih.gov/41588485/')}
</div>
<p class="editor-note">최종 근거 검토: 2026-10-09 · 이 글은 식단·조리법과 AGE biology의 근거를 설명하기 위한 자료이며, 당뇨·신장질환의 치료를 대체하지 않습니다.</p>
`});
})();

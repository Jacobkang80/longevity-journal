(()=>{
const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
if(posts.some(x=>x.slug==='refined-carbohydrate-evidence'))return;
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
posts.push({
  slug:'refined-carbohydrate-evidence',
  category:'health',
  date:'2023-07-29',
  title:'정제 탄수화물은 왜 줄여야 할까? — 혈당, 인슐린, 지방간, 심혈관과 노화의 근거',
  excerpt:'설탕·당음료와 정제 곡물은 같은 “탄수화물”이지만 위험의 크기와 근거 수준은 다릅니다. 혈당·GI/GL·지방간·AGEs·장내미생물·사망률 근거를 구분해 봅니다.',
  tags:['정제 탄수화물','Refined carbohydrate','Added sugar','Free sugar','Refined grains','White rice','Glycemic index','Glycemic load','Insulin resistance','NAFLD','AGEs','Whole grains','Longevity Nutrition'],
  html:`
<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-07-29 · <a href="https://myepic2.tistory.com/16" target="_blank" rel="noopener noreferrer">정제 탄수화물의 섭취를 줄여야 하는 이유 ↗</a> · 원문에는 5개 문단과 2장의 이미지, 여러 참고문헌이 있었습니다. LONGEVITY JOURNAL 근거 전면 업데이트 2026-10-09</p>

<figure class="story-hero"><img src="https://upload.wikimedia.org/wikipedia/commons/1/12/A_Bowl_of_Sugar.jpg" alt="그릇에 담긴 흰 설탕" loading="eager"><figcaption>‘정제 탄수화물’이라는 말은 백설탕 하나를 뜻하지 않습니다. 첨가당·당음료, 흰 밀가루 제품, 일부 정제 곡물은 구조와 대사효과가 다르므로 한 묶음으로 과장하면 안 됩니다. 사진: Sparkveela / Wikimedia Commons, CC0.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>탄수화물 자체가 문제라기보다 ‘형태와 질’이 핵심입니다.</b> 사람 근거가 가장 일관된 위험 신호는 설탕이 든 음료와 높은 glycemic index/load 식사입니다. 통곡물·콩·채소·통과일처럼 섬유질이 풍부한 탄수화물은 오히려 심혈관·대사 건강과 유리하게 연결됩니다. 반면 ‘정제 곡물 전체가 독성’이라는 주장에는 근거가 일관되지 않습니다. 특히 흰쌀밥은 제2형 당뇨 위험과는 연관 신호가 있지만 심혈관질환·사망률과의 관계는 훨씬 덜 명확합니다. 따라서 실전 목표는 <b>탄수화물 제로가 아니라 첨가당·당음료·저섬유 정제식품을 줄이고, 통곡물·콩·채소·통과일로 교체하는 것</b>입니다.</p></div>

<h2>01. 먼저 용어부터: 설탕, 정제 곡물, ‘탄수화물’은 같은 말이 아니다</h2>
<p>원문에서는 ‘정제 탄수화물’과 ‘정제당’이 거의 같은 의미로 섞여 있었습니다. 하지만 과학적으로는 구분해야 합니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>첨가당·free sugars</b><span>설탕, 시럽, 꿀, 과일주스에 존재하는 자유당 등. 음료 형태에서는 특히 빠르게 흡수되고 포만감이 약함.</span></div>
  <div class="evidence-card"><b>정제 곡물</b><span>도정·제분 과정에서 겨와 배아가 제거된 곡물. 흰쌀, 흰밀가루 등이 대표적. 식품마다 섬유·입자구조·조리법이 다름.</span></div>
  <div class="evidence-card"><b>통곡물·고섬유 탄수화물</b><span>통곡물, 콩, 채소, 통과일. 탄수화물이어도 대사효과와 장내 발효가 전혀 다를 수 있음.</span></div>
</div>
<p>즉 ‘탄수화물 = 설탕 = 나쁜 음식’이라는 등식은 틀립니다. <b>같은 탄수화물 50 g이라도 액상 설탕, 흰빵, 현미, 렌틸콩, 사과는 소화속도·섬유질·포만감·미량영양소·장내미생물 반응이 크게 다릅니다.</b></p>

<h2>02. 혈당이 빨리 오르면 무엇이 문제일까?</h2>
<p>식후 혈당이 오르면 췌장은 인슐린을 분비해 포도당을 세포로 이동시키고 간·근육의 glycogen 저장을 돕습니다. 인슐린 자체는 ‘독성 호르몬’이 아니라 생존에 필수적인 조절 호르몬입니다.</p>
<p>문제는 장기간에 걸쳐 <b>과잉 에너지 섭취, 비만, 낮은 신체활동, 수면 부족, 유전적 소인</b>과 함께 고혈당·고인슐린 상태가 반복되면서 insulin resistance가 진행되는 상황입니다. 따라서 식후 인슐린 상승을 하나의 독성 사건처럼 설명하는 것은 과도합니다.</p>
<div class="pathway" aria-label="refined carbohydrate pathway simplified">
  <div class="pathway-step"><b>저섬유·고GI 식품</b><span>빠른 소화 · 포도당 유입</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>식후 혈당·인슐린</b><span>반복되는 높은 glycemic exposure</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>장기 위험</b><span>비만·T2D·CVD 위험과 연관</span></div>
</div>
<p class="small-note">※ 중간 단계가 존재한다고 해서 한 끼의 혈당 상승이 곧바로 당뇨나 혈관손상을 만든다는 뜻은 아닙니다. 장기 노출과 전체 식사 패턴이 중요합니다.</p>

<h2>03. GI와 GL: 혈당 반응을 숫자로 볼 수 있을까?</h2>
<p><b>Glycemic index(GI)</b>는 같은 양의 탄수화물을 먹었을 때 혈당이 얼마나 빠르게 오르는지를 나타내고, <b>glycemic load(GL)</b>는 GI에 실제 섭취한 탄수화물 양까지 반영합니다.</p>
<p>2021년 PURE 연구는 5개 대륙 137,851명을 평균 9.5년 추적했습니다. 높은 GI 식사는 기존 심혈관질환 유무와 관계없이 주요 심혈관 사건·사망 위험 증가와 연관됐습니다. 2024년에는 10만 명 이상 규모의 여러 ‘mega cohort’를 모은 메타분석에서도 높은 GI/GL이 제2형 당뇨, 심혈관질환, 일부 암, 전체 사망 위험과 관련된다는 결과가 제시됐습니다.</p>
<p>하지만 GI는 음식 하나만의 고정 숫자가 아닙니다. 쌀 품종, 조리·냉각, 지방·단백질·섬유질을 함께 먹는지, 개인의 insulin sensitivity 등에 따라 실제 혈당반응은 달라집니다.</p>

<h2>04. 가장 근거가 강한 대상: 설탕이 든 음료</h2>
<p>정제 탄수화물 중에서도 <b>sugar-sweetened beverage(SSB)</b>는 위험 근거가 비교적 일관적입니다. 액상 칼로리는 씹는 음식보다 포만감 보상이 약하고, 큰 양의 free sugar를 짧은 시간에 섭취하기 쉽습니다.</p>
<p>2021년 34개 전향 코호트를 종합한 dose-response meta-analysis에서는 SSB가 하루 한 serving 늘 때 제2형 당뇨 위험은 약 27%, 심혈관질환 위험은 약 9% 높게 연관됐습니다. 관찰연구이므로 ‘음료 하나가 그만큼 직접 원인’이라고 단정할 수는 없지만, 여러 연구에서 방향이 반복됩니다.</p>
<p>2023년 72개 연구 메타분석에서도 SSB 섭취는 제2형 당뇨, 고혈압, 관상동맥질환, 뇌졸중, 사망 위험과 양의 연관을 보였습니다.</p>
<div class="takeaway"><strong>실전 우선순위</strong><p>정제 탄수화물을 줄이고 싶다면 가장 먼저 줄일 대상은 밥 한 공기보다 <b>탄산음료, 가당 커피·차, 에너지음료, 설탕이 많이 든 디저트 음료</b>입니다. ‘탄수화물 총량’을 무작정 낮추는 것보다 근거와 효과가 분명한 우선순위입니다.</p></div>

<h2>05. WHO는 설탕을 얼마나 줄이라고 하나?</h2>
<p>WHO는 성인과 어린이 모두 <b>free sugars를 총 에너지의 10% 미만</b>으로 줄이고, 가능하다면 <b>5% 미만</b>으로 더 낮출 것을 제안합니다. 2,000 kcal 식단이라면 10%는 약 50 g, 5%는 약 25 g의 free sugar에 해당합니다.</p>
<p>여기서 free sugar는 제조·조리 과정에서 넣은 설탕뿐 아니라 꿀·시럽·과일주스의 당도 포함합니다. 반면 통과일과 채소 내부에 자연적으로 들어 있는 intrinsic sugar는 이 권고의 대상이 아닙니다.</p>
<p>원문에서 인용했던 ‘첨가당 하루 5 g 이하’ 같은 수치는 일반 성인을 위한 국제 표준 권고로 보기 어렵습니다. <b>근거 기반 기준은 WHO의 10% 미만, 가능하면 5% 미만</b>이라는 표현이 더 정확합니다.</p>

<h2>06. 과당과 지방간: ‘설탕은 곧바로 지방이 된다’는 말은 얼마나 맞나?</h2>
<p>간은 과잉 탄수화물, 특히 fructose를 지방산으로 전환하는 <b>de novo lipogenesis(DNL)</b> 능력이 있습니다. 하지만 평소 식사에서 모든 설탕이 즉시 체지방으로 바뀌는 단순한 과정은 아닙니다.</p>
<p>2015년 입원 통제시험에서 건강한 남성 8명에게 체중을 유지하도록 열량을 맞춘 채 에너지의 25%를 fructose로 제공했을 때, 복합탄수화물 식단보다 DNL과 간지방이 증가했습니다. 표본은 매우 작지만 ‘칼로리 과잉이 없더라도 매우 높은 fructose 노출이 간 지방대사에 영향을 줄 수 있다’는 기전 근거입니다.</p>
<p>2021년 94명의 건강한 남성을 대상으로 한 무작위시험에서도 7주간 fructose 또는 sucrose 음료를 하루 80 g 섭취했을 때 간 DNL이 대조군보다 약 2배 수준으로 증가했습니다. 같은 양의 glucose 음료에서는 같은 변화가 보이지 않았습니다.</p>
<p>이 결과를 ‘과일의 fructose도 위험하다’고 확대하면 안 됩니다. 연구의 노출은 <b>음료 형태의 비교적 높은 자유당</b>이었고, 통과일에는 섬유·수분·씹기·낮은 에너지밀도가 함께 존재합니다.</p>

<h2>07. 흰쌀밥은 설탕과 같은가?</h2>
<p>아닙니다. 흰쌀은 정제 곡물이지만 설탕음료와 동일한 식품으로 취급하면 안 됩니다. 특히 한국·일본·중국처럼 쌀이 주식인 식문화에서는 총섭취량, 반찬 구성, 활동량이 중요합니다.</p>
<p>2022년 150만 명 이상을 포함한 prospective cohort meta-analysis에서는 흰쌀 섭취가 높은 집단의 제2형 당뇨 위험이 낮은 집단보다 약 18% 높았고, 하루 150 g 증가당 위험이 약 6% 높아지는 선형 관계가 관찰됐습니다. 반면 심혈관질환·심혈관사망·암과는 뚜렷한 연관이 확인되지 않았습니다.</p>
<p>2021년 PURE 연구에서는 정제 곡물을 하루 350 g 이상 매우 많이 먹는 집단에서 사망·주요 심혈관 사건 위험이 높았지만, <b>white rice 자체는 결과와 유의한 연관이 없었습니다.</b> 즉 ‘흰쌀 = 독’이라는 결론은 자료를 과도하게 단순화한 것입니다.</p>

<h2>08. 그런데 왜 ‘정제 곡물은 심장에 나쁘다’는 결론이 항상 나오지 않을까?</h2>
<p>중요한 반대 근거가 있습니다. 2024년 발표된 17개 전향 코호트, 87만 명 이상 메타분석에서는 정제 곡물 섭취가 심혈관질환·뇌졸중·심부전과 유의하게 연관되지 않았습니다.</p>
<p>2023년 162만 명 규모의 whole-grain/refined-grain dose-response meta-analysis에서도 통곡물은 CVD와 전체 사망을 낮추는 방향이 비교적 일관됐지만, <b>정제 곡물 자체의 심혈관 위험 근거는 낮은 질이고 일관성이 부족</b>했습니다.</p>
<p>이 모순은 ‘정제 곡물’이라는 범주가 너무 넓기 때문일 수 있습니다. 흰쌀·흰빵·파스타·케이크·쿠키는 섬유, 지방, 설탕, sodium, 열량밀도가 다릅니다. 또한 정제 곡물을 무엇으로 <b>대체</b>하느냐에 따라 결과가 달라집니다.</p>
<div class="takeaway"><strong>중요한 수정</strong><p><b>“정제 곡물은 무조건 심혈관질환을 일으킨다”는 표현은 현재 근거보다 강합니다.</b> 더 확실한 방향은 통곡물·식이섬유 섭취가 유리하고, SSB·고GI/GL 식사가 불리하다는 것입니다.</p></div>

<h2>09. 통곡물의 장점은 ‘혈당이 천천히 오른다’만이 아니다</h2>
<p>통곡물은 bran과 germ을 유지해 식이섬유, 미네랄, phytochemical이 더 많습니다. 입자 구조가 유지될수록 소화속도도 달라질 수 있습니다.</p>
<figure class="story-photo"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Whole_grain_bread.jpg" alt="통곡물 빵" loading="lazy"><figcaption>통곡물의 장점은 탄수화물이 적어서가 아니라 섬유질과 식품 구조가 더 많이 남아 있다는 점입니다. 사진: stu_spivack / Wikimedia Commons, CC BY-SA 2.0.</figcaption></figure>
<p>2017년 체중을 유지한 제공식 RCT에서 통곡물 식단은 정제곡물 식단보다 stool weight와 frequency를 늘리고, 일부 short-chain fatty acids와 장내미생물 지표를 유리한 방향으로 변화시켰습니다.</p>
<p>2023년 무작위 crossover trial에서도 통곡물 식단은 정제곡물 식단보다 fecal butyrate와 caproate를 증가시켰습니다. 다만 microbiome 변화가 곧바로 임상질환 감소로 이어졌다는 뜻은 아닙니다.</p>
<p>2019년 <i>Lancet</i>의 대규모 systematic review/meta-analysis는 높은 식이섬유와 통곡물 섭취가 관상동맥질환, 제2형 당뇨, 대장암, 전체 사망 감소와 일관되게 관련됨을 보여줬습니다. 이 연구는 ‘탄수화물을 줄이는 것’보다 <b>탄수화물의 질을 높이는 것</b>이 중요한 이유를 잘 보여줍니다.</p>

<h2>10. 원문에 있던 AGE 이야기: ‘ACE’가 아니라 AGE다</h2>
<p>원문에는 ‘최종 당산화물, 영문 약자 ACE’라고 적혀 있었는데 정확한 용어는 <b>advanced glycation end-products, AGEs</b>입니다. 단백질·지질이 당과 비효소적으로 반응해 형성되는 여러 화합물의 총칭입니다.</p>
<p>AGEs는 두 경로로 생각할 수 있습니다. 하나는 <b>몸 안에서</b> 고혈당·산화스트레스가 오래 지속될 때 형성되는 endogenous AGEs이고, 다른 하나는 고온 조리·가공 과정에서 음식에 형성되는 dietary AGEs입니다.</p>
<p>당뇨병에서 만성 고혈당과 AGEs 축적이 미세·대혈관 합병증과 연관된다는 근거는 상당히 강합니다. 반면 건강한 사람이 특정 정제 탄수화물을 먹는 즉시 ‘단백질이 독성물질로 둘러싸여 면역을 소진시킨다’는 식의 설명은 지나치게 단순합니다.</p>
<p>2025년 dietary AGE meta-analysis에서는 high-AGE 식단이 공복혈당·인슐린·HOMA-IR을 불리하게 움직이는 신호가 있었지만 연구 간 이질성이 큽니다. 별도의 당뇨 환자 RCT systematic review에서는 low-AGE 식단이 염증·산화스트레스 지표에는 비교적 일관된 이점을 보였으나 HbA1c·HOMA-IR 개선은 일관되지 않았습니다.</p>

<h2>11. ‘혈당 스파이크 = 염증 = 노화’라는 연결은 어디까지 맞나?</h2>
<p>급격한 식후 고혈당은 산화스트레스와 혈관내피 기능에 영향을 줄 수 있고, 만성 고혈당은 당뇨 합병증의 핵심입니다. 그러나 건강한 사람에서 한두 번의 glucose excursion을 곧바로 ‘노화 가속’으로 등치하면 안 됩니다.</p>
<p>노화 관점에서 더 중요한 것은 장기간의 체지방 증가, insulin resistance, 당뇨병, 이상지질혈증, 고혈압, 흡연, 낮은 운동량처럼 <b>질병 위험을 누적시키는 상태</b>입니다.</p>
<p>따라서 정제 탄수화물을 줄이는 이유를 설명할 때도 ‘염증을 없애 젊어진다’보다 <b>체중·혈당·중성지방·식이섬유·전체 식단의 질을 개선해 노화 관련 질환 위험을 낮출 가능성이 있다</b>고 표현하는 것이 더 정확합니다.</p>

<h2>12. 2025년 mortality umbrella review가 보여준 우선순위</h2>
<p>2025년 여러 food group meta-analysis를 다시 모은 umbrella review에서는 <b>통곡물, 과일, 채소, 견과류, 생선</b>의 높은 섭취가 낮은 사망률과 연결됐고, <b>sugar-sweetened beverages</b>는 높은 사망률과 연결됐습니다.</p>
<p>흥미롭게도 <b>refined grains 자체는 전체 사망과 명확한 연관이 없었습니다.</b> 이 결과는 블로그의 메시지를 더 정교하게 만듭니다. ‘정제 탄수화물이라는 한 단어를 악마화’하기보다, 위험 근거가 가장 강한 SSB·첨가당·고GI/GL 식품을 우선 줄이고, 통곡물·식이섬유를 늘리는 전략이 더 합리적입니다.</p>

<h2>13. 실제 식사에서는 무엇을 바꾸는 게 가장 효율적일까?</h2>
<ol>
<li><b>당음료부터 줄입니다.</b> 탄산음료, 달달한 커피, 과일주스, 스포츠·에너지음료는 가장 근거가 강한 우선순위입니다.</li>
<li><b>디저트의 빈도를 줄입니다.</b> 쿠키·케이크·도넛은 정제밀가루뿐 아니라 설탕·지방·에너지밀도가 함께 높습니다.</li>
<li><b>주식 전체를 없애기보다 일부를 통곡물·콩으로 교체합니다.</b> 현미, 귀리, 보리, 콩류 등을 섞는 방식이 현실적입니다.</li>
<li><b>탄수화물을 단독으로 먹지 않습니다.</b> 단백질·채소·불포화지방과 함께 먹으면 식사 구조와 포만감이 달라집니다.</li>
<li><b>운동을 같이 봅니다.</b> 같은 탄수화물 섭취라도 근육량과 활동량, 운동 직후인지 여부에 따라 glucose disposal은 달라집니다.</li>
</ol>
<p>당뇨병·전당뇨·고중성지방혈증이 있는 사람은 동일한 음식에도 혈당반응이 더 클 수 있으므로 개인화가 중요합니다.</p>

<h2>14. LONGEVITY JOURNAL의 근거 판정</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>SSB·free sugar 과다</b><span><strong>근거 강함.</strong> 체중·T2D·CVD 위험과 일관된 연관. 국제 가이드라인도 제한 권고.</span></div>
  <div class="evidence-card"><b>High GI / GL</b><span><strong>근거 중등도.</strong> 대규모 코호트에서 T2D·CVD·사망 위험과 연결.</span></div>
  <div class="evidence-card"><b>Refined grains 전체</b><span><strong>근거 혼재.</strong> 매우 높은 섭취는 불리한 연구가 있지만 메타분석에서 CVD 연관은 일관되지 않음.</span></div>
  <div class="evidence-card"><b>Whole grains / fiber</b><span><strong>근거 강함.</strong> 통곡물·섬유질 높은 식사는 여러 만성질환 및 사망 위험 감소와 연결.</span></div>
  <div class="evidence-card"><b>AGEs</b><span><strong>기전·질환 근거 있음.</strong> 하지만 ‘설탕 한 번 먹으면 독성 AGE가 생겨 노화한다’는 식의 설명은 과장.</span></div>
  <div class="evidence-card"><b>인간 수명 연장</b><span><strong>직접 증거 없음.</strong> 정제 탄수화물 제한 자체가 인간 수명을 연장한다는 RCT는 없음.</span></div>
</div>

<div class="takeaway"><strong>LONGEVITY JOURNAL 결론</strong><p><b>정제 탄수화물을 줄여야 하는 이유는 ‘탄수화물이 독이기 때문’이 아닙니다.</b> 가장 확실한 이유는 첨가당·당음료·고GI 식품을 많이 먹는 식사 패턴이 비만, 제2형 당뇨, 고중성지방혈증과 심혈관 위험을 높이는 방향으로 작동하기 때문입니다. 반대로 통곡물·콩·채소·통과일처럼 섬유질과 식품 구조가 살아 있는 탄수화물은 건강한 식사의 핵심이 될 수 있습니다. <b>탄수화물의 양보다 먼저 질을 봐야 합니다.</b></p></div>

<h2>근거자료 — 발표 시간순</h2>
<div class="timeline">
${paper('2015','Schwarz JM, et al. J Clin Endocrinol Metab.','건강한 남성 8명, 체중유지 조건의 고과당 식단. 복합탄수화물 대비 DNL과 간지방 증가. 표본이 매우 작은 기전시험.','https://pubmed.ncbi.nlm.nih.gov/25825943/')}
${paper('2017','Vanegas SM, et al. Am J Clin Nutr.','건강한 성인 제공식 RCT. 통곡물 대 정제곡물 비교에서 배변·SCFA 및 일부 장내미생물 지표 변화.','https://pubmed.ncbi.nlm.nih.gov/28179226/')}
${paper('2019','Reynolds A, et al. Lancet.','Carbohydrate quality systematic reviews/meta-analyses. 높은 식이섬유·통곡물 섭취가 여러 NCD와 사망 감소에 일관되게 연결.','https://pubmed.ncbi.nlm.nih.gov/30638909/')}
${paper('2021','Swaminathan S, et al. BMJ · PURE.','21개국 137,130명 분석. 정제곡물 ≥350 g/day에서 사망·주요 CVD 증가 연관, white rice 자체는 유의 연관 없음.','https://pubmed.ncbi.nlm.nih.gov/33536317/')}
${paper('2021','Jenkins DJA, et al. N Engl J Med.','137,851명, median 9.5년. 높은 dietary GI/GL과 심혈관질환·사망 위험의 연관을 평가.','https://pubmed.ncbi.nlm.nih.gov/33626252/')}
${paper('2021','Geidl-Flueck B, et al. J Hepatol.','94명 RCT. fructose·sucrose 음료 7주 후 hepatic de novo lipogenesis 증가, glucose군에서는 같은 변화 없음.','https://pubmed.ncbi.nlm.nih.gov/33684506/')}
${paper('2021','Meng Y, et al. Nutrients.','34개 전향 코호트 dose-response meta-analysis. SSB 증가와 T2D·CVD 위험 증가의 일관된 연관.','https://pubmed.ncbi.nlm.nih.gov/34444794/')}
${paper('2022','White rice dose-response meta-analysis.','28개 prospective cohort, 약 153만 명. 높은 white rice 섭취와 T2D 위험 증가, CVD·암과는 뚜렷한 연관 없음.','https://pubmed.ncbi.nlm.nih.gov/35852223/')}
${paper('2023','Hu H, et al. Am J Clin Nutr.','24개 논문·162만 명. 통곡물은 CVD·사망 감소와 연결, refined grain 근거는 낮은 질이고 혼재.','https://pubmed.ncbi.nlm.nih.gov/36789934/')}
${paper('2023','Whole-grain vs refined-grain crossover trial.','50명, 각 8주. 통곡물 식단에서 fecal butyrate·caproate 증가. 장내 발효 변화의 인간 RCT 근거.','https://pubmed.ncbi.nlm.nih.gov/37324737/')}
${paper('2024','Jenkins DJA, et al. Lancet Diabetes Endocrinol.','10만 명 이상 규모 mega cohort meta-analysis. GI/GL과 T2D·CVD·암·전체사망의 연관 평가.','https://pubmed.ncbi.nlm.nih.gov/38272606/')}
${paper('2024','Gaesser GA. Trends Cardiovasc Med.','17개 prospective cohort, 87만 명 이상. refined grain 자체와 CVD·stroke·heart failure의 유의한 연관을 확인하지 못함.','https://pubmed.ncbi.nlm.nih.gov/36075506/')}
${paper('2025','Lu X, et al. Crit Rev Food Sci Nutr.','고AGE 식사와 T2D biomarker meta-analysis. 공복혈당·인슐린·HOMA-IR 불리한 방향, 이질성 존재.','https://pubmed.ncbi.nlm.nih.gov/39320860/')}
${paper('2025','Umbrella review of food groups and all-cause mortality.','41개 meta-analysis. 통곡물·과일·채소 등은 낮은 사망률, SSB는 높은 사망률과 연결; refined grains는 명확한 연관 없음.','https://pubmed.ncbi.nlm.nih.gov/39956388/')}
</div>
<p class="editor-note"><strong>근거 검토:</strong> 2026-10-09 · 관찰연구의 연관성과 무작위시험의 인과효과를 구분했습니다. 특히 refined grains 전체를 하나의 독성 범주로 묶지 않고, SSB/free sugar·GI/GL·통곡물 대체 근거를 별도로 평가했습니다.</p>
`
});
})();

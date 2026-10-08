(()=>{
const p=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='aspirin-evidence');
if(!p)return;
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
Object.assign(p,{
  date:'2026-10-09',
  title:'아스피린은 건강수명을 늘릴까? — 혈소판, 심근경색·뇌졸중 예방, 암과 출혈의 균형',
  excerpt:'아스피린은 이미 심혈관질환이 있는 사람에게는 중요한 약이지만, 건강한 사람이 오래 살기 위해 미리 복용하는 문제는 전혀 다릅니다. ASPREE·ARRIVE·ASCEND와 2026년 장기추적까지 근거를 분리해 봅니다.',
  tags:['Aspirin','아스피린','Platelet','COX-1','Thromboxane','Primary prevention','Secondary prevention','Bleeding','ASPREE','ASCEND','ARRIVE','Colorectal cancer','Healthspan','Clinical Prevention & Safety'],
  html:`
<p class="editor-note"><strong>LONGEVITY JOURNAL 신규 근거 리뷰</strong> · 아스피린은 건강보조제가 아니라 <b>의약품</b>입니다. 아래 내용은 예방의학 근거를 설명하기 위한 것이며, 복용 시작·중단·용량 변경은 개인의 심혈관 위험과 출혈 위험을 함께 평가해 결정해야 합니다. · 최종 근거 검토 2026-10-09</p>

<figure class="story-hero molecular-figure"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Aspirin-skeletal_benzene-circle.svg/1280px-Aspirin-skeletal_benzene-circle.svg.png" alt="아스피린 acetylsalicylic acid의 화학구조" loading="eager"><figcaption>아스피린(acetylsalicylic acid)의 구조. 작은 분자 하나가 혈소판 COX-1을 비가역적으로 acetylation해 혈전 생성 경로를 바꿉니다. 이미지: Benjah-bmm27 계열 / Wikimedia Commons, Public Domain.</figcaption></figure>

<div class="takeaway"><strong>30초 핵심 요약</strong><p><b>아스피린은 ‘항노화제’가 아닙니다.</b> 심근경색·관상동맥질환·일부 허혈성 뇌졸중을 이미 경험한 사람의 <b>2차 예방</b>에서는 여전히 매우 중요한 항혈소판제입니다. 그러나 심혈관질환이 없는 건강한 사람의 <b>1차 예방</b>에서는 이야기가 달라집니다. ARRIVE에서는 주요 심혈관 사건을 유의하게 줄이지 못하면서 위장관 출혈이 늘었고, ASCEND에서는 당뇨병 환자의 심혈관 사건을 줄였지만 이득이 주요 출혈 증가로 거의 상쇄됐습니다. ASPREE에서는 건강한 고령자 19,114명에서 장애 없는 생존을 늘리지 못했고 주요 출혈을 늘렸습니다. 2025년 장기 추적에서도 심혈관 이득은 거의 없었고 출혈 위험 신호는 남았습니다. 따라서 현재 근거는 <b>“누구나 저용량 아스피린을 먹으면 오래 산다”와 정반대</b>에 가깝습니다.</p></div>

<h2>01. 아스피린은 왜 심근경색을 막을 수 있을까?</h2>
<p>동맥경화반이 파열되면 혈소판이 손상된 혈관벽에 달라붙고 서로 응집해 혈전을 만듭니다. 이 과정에서 혈소판은 <b>thromboxane A₂(TXA₂)</b>를 만들어 주변 혈소판을 더 활성화하고 혈관을 수축시키는 방향으로 작용합니다.</p>
<p>아스피린은 혈소판의 <b>cyclooxygenase-1(COX-1)</b>을 비가역적으로 acetylation합니다. 그러면 arachidonic acid에서 TXA₂로 이어지는 경로가 차단되고, 혈소판 응집 능력이 낮아집니다. 성숙 혈소판은 핵이 없어 새 COX-1을 충분히 합성하지 못하므로, 한 번 억제된 효과는 해당 혈소판의 남은 생애 동안 지속됩니다. 매일 저용량을 사용하는 이유는 매일 새 혈소판이 생성되기 때문입니다.</p>

<figure class="story-photo"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Platelet_Aggregation_(NIH_BioArt_928_-_801447).png" alt="혈소판이 fibrin 그물에 의해 응집된 모습을 표현한 NIH BioArt 이미지" loading="lazy"><figcaption>혈소판(흰색)이 fibrin 그물에 잡혀 응집되는 모습. 아스피린의 핵심 작용은 혈액을 ‘묽게 만드는 것’이라기보다 혈소판 활성과 응집을 낮추는 것입니다. 이미지: NIAID/NIH BioArt, Public Domain.</figcaption></figure>

<div class="pathway" aria-label="아스피린의 항혈소판 작용 단순화">
  <div class="pathway-step"><b>Arachidonic acid</b><span>혈소판 막에서 유래</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step highlight"><b>COX-1</b><span>아스피린이 비가역적으로 억제</span></div><div class="pathway-arrow">→</div>
  <div class="pathway-step"><b>TXA₂ ↓</b><span>혈소판 활성·응집 감소</span></div>
</div>
<p class="small-note">※ 저용량 아스피린의 심혈관 효과는 주로 항혈소판 작용으로 설명됩니다. 통증·해열·항염 효과에 필요한 용량과 예방 목적으로 쓰는 저용량은 같은 개념이 아닙니다.</p>

<h2>02. 가장 먼저 구분해야 할 것: 1차 예방과 2차 예방</h2>
<p>아스피린 논쟁의 대부분은 이 두 상황을 섞어서 생깁니다.</p>
<div class="evidence-grid">
  <div class="evidence-card"><b>1차 예방</b><span>심근경색·관상동맥질환·허혈성 뇌졸중을 아직 겪지 않은 사람이 첫 사건을 막기 위해 복용하는 경우.</span></div>
  <div class="evidence-card"><b>2차 예방</b><span>이미 심근경색, 만성 관상동맥질환, 일부 비심인성 허혈성 뇌졸중/TIA 등을 경험한 사람이 재발을 막는 경우.</span></div>
  <div class="evidence-card"><b>핵심 차이</b><span>2차 예방은 원래 혈전 위험이 높아 이득의 절대크기가 큽니다. 1차 예방은 이득이 작아 출혈 위험이 상대적으로 더 중요해집니다.</span></div>
</div>
<p>2009년 Antithrombotic Trialists' Collaboration 메타분석은 이 차이를 숫자로 잘 보여줍니다. 1차 예방에서는 심각한 혈관 사건이 연간 0.57%에서 0.51%로 작게 줄었지만 주요 위장관·두개외 출혈은 0.07%에서 0.10%로 늘었습니다. 반면 2차 예방에서는 심각한 혈관 사건이 연간 8.2%에서 6.7%로 줄어 <b>절대적 이득 자체가 훨씬 컸습니다.</b></p>

<div class="takeaway"><strong>블로그에서 가장 중요한 문장</strong><p><b>“아스피린이 심혈관질환에 효과가 있다”와 “건강한 사람이 예방 목적으로 먹어야 한다”는 전혀 다른 주장입니다.</b> 이미 질환이 있는 사람에게 유용하다는 사실을 건강한 사람에게 그대로 옮기면 안 됩니다.</p></div>

<h2>03. 과거에는 왜 건강한 사람에게도 아스피린을 많이 권했을까?</h2>
<p>1989년 Physicians' Health Study는 건강한 남성 의사 22,071명에서 325 mg을 격일 복용했을 때 심근경색 위험이 약 44% 낮았다고 보고했습니다. 이 결과는 아스피린 1차 예방의 상징적인 근거가 됐습니다.</p>
<p>그러나 당시와 지금의 심혈관 예방 환경은 크게 다릅니다. 현대에는 statin, 고혈압 치료, 금연, 당뇨 관리, 재관류치료 등이 훨씬 널리 사용됩니다. 따라서 심혈관 사건 자체의 기저위험이 낮아졌고, 아스피린이 추가로 예방할 수 있는 사건의 절대 숫자도 작아졌습니다. 출혈 위험은 사라지지 않았기 때문에 <b>benefit–harm balance</b>가 과거와 달라졌습니다.</p>

<h2>04. 2018년 ARRIVE: ‘중등도 위험’에서 큰 이득을 찾지 못했다</h2>
<p>ARRIVE는 명백한 심혈관질환이 없는 12,546명을 대상으로 aspirin 100 mg/day와 placebo를 약 5년 비교했습니다. 원래는 중등도 심혈관 위험군을 대상으로 설계됐지만 실제 사건률은 예상보다 낮아 현대적인 저위험군에 가까웠습니다.</p>
<p>주요 심혈관 사건은 aspirin군 <b>4.29%</b>, placebo군 <b>4.48%</b>로 유의한 차이가 없었습니다(HR 0.96). 반면 위장관 출혈은 0.97% 대 0.46%로 aspirin군이 약 두 배 높았습니다. 대부분 경증이었지만 방향은 분명했습니다.</p>

<h2>05. ASCEND: 당뇨병에서는 이득과 출혈이 거의 맞바뀌었다</h2>
<p>당뇨병은 심혈관 위험을 높이기 때문에 “이 정도 고위험군이라면 1차 예방에서도 아스피린의 순이익이 크지 않을까?”라는 질문이 중요했습니다. ASCEND는 심혈관질환이 없는 당뇨병 환자 <b>15,480명</b>을 평균 7.4년 추적했습니다.</p>
<p>serious vascular event는 aspirin군 <b>8.5%</b>, placebo군 <b>9.6%</b>였습니다. 즉 1,000명을 치료하면 대략 <b>11건의 심각한 혈관 사건을 막는 효과</b>가 있었습니다. 그런데 major bleeding은 4.1% 대 3.2%로, 약 <b>1,000명당 9건의 주요 출혈이 추가</b>됐습니다. 연구진도 절대적 심혈관 이득이 출혈 위험으로 상당 부분 상쇄됐다고 결론냈습니다.</p>

<h2>06. ASPREE: ‘건강수명’ 관점에서 가장 중요한 시험</h2>
<p>LONGEVITY JOURNAL 관점에서는 ASPREE가 특히 중요합니다. 이 시험의 1차 평가변수는 단순한 콜레스테롤이나 혈압이 아니라 <b>death + dementia + persistent physical disability</b>를 묶은 ‘disability-free survival’이었습니다. 사실상 건강한 고령자가 독립적으로 살아가는 기간을 연장할 수 있는지를 물은 것입니다.</p>
<p>심혈관질환·치매·신체장애가 없는 고령자 <b>19,114명</b>에게 aspirin 100 mg/day 또는 placebo를 투여했고 중앙값 4.7년 추적했습니다. 결과는 aspirin군 21.5 events/1,000 person-years, placebo군 21.2로 차이가 없었습니다(HR 1.01).</p>
<p>반면 주요 출혈은 aspirin군 <b>8.6/1,000 person-years</b>, placebo군 <b>6.2/1,000 person-years</b>로 유의하게 높았습니다(HR 1.38). 심혈관질환 발생도 10.7 대 11.3/1,000 person-years로 유의한 감소가 없었습니다.</p>
<div class="takeaway"><strong>항노화 관점에서 ASPREE가 주는 답</strong><p>건강한 고령자에서 저용량 아스피린은 <b>‘장애 없이 살아가는 기간’을 늘리지 못했습니다.</b> 즉 현재까지 아스피린을 일반적인 healthspan 약으로 볼 근거는 없습니다.</p></div>

<h2>07. 2025년 장기 추적: 시간이 지나면 뒤늦게 심혈관 이득이 나타났을까?</h2>
<p>ASPREE 참가자를 시험 종료 뒤에도 추적한 2025년 European Heart Journal 분석은 이 질문에 답했습니다. 전체 중앙 추적기간은 약 <b>8.3년</b>이 됐지만, 원래 aspirin 배정군의 장기 MACE 효과는 거의 0에 가까웠습니다.</p>
<p>반면 전체 시험+추적기간을 합치면 major haemorrhage는 aspirin 배정군에서 여전히 더 많았습니다(HR <b>1.24</b>). upper GI bleeding도 HR 1.43이었습니다. 짧은 시험에서만 출혈이 늘고 장기적으로 큰 이득이 나타나는 모습은 확인되지 않았습니다.</p>

<h2>08. 뇌졸중 예방이라면 어떨까?</h2>
<p>혈전을 줄이니 허혈성 뇌졸중을 예방할 것처럼 보이지만, 건강한 고령자에서는 출혈성 사건과 균형을 같이 봐야 합니다. ASPREE의 2023년 2차 분석에서 aspirin은 ischemic stroke를 유의하게 줄이지 못했습니다(HR 0.89). 반면 intracranial bleeding은 1.1% 대 0.8%로 aspirin군이 높았습니다(HR 1.38).</p>
<p>특히 낙상 위험이 높은 고령자에서는 머리 외상 후 출혈 위험이 임상적으로 중요할 수 있습니다. 하지만 이것은 <b>과거 허혈성 뇌졸중이나 TIA가 있는 환자의 2차 예방</b>과는 다른 이야기입니다. AHA/ASA 가이드라인은 비심인성 허혈성 뇌졸중/TIA의 재발 예방에서 aspirin을 포함한 항혈소판제를 여전히 중요한 선택지로 권고합니다.</p>

<h2>09. 대장암 예방 효과는 정말 있는가?</h2>
<p>아스피린이 장기적으로 대장암을 줄일 수 있다는 이야기는 오래전부터 나왔습니다. 2010년 여러 무작위시험의 20년 추적자료를 합친 분석에서는 aspirin 배정이 colon cancer incidence와 mortality를 낮추는 방향을 보였습니다. 특히 효과가 나타나기까지 수년 이상의 latency가 있다는 해석이 나왔습니다.</p>
<p>그러나 이 자료에는 오래된 시험, 더 높은 용량, 2차 예방 환자 등이 섞여 있었고 현대적인 저용량 1차 예방 상황에 그대로 적용하기 어렵습니다. 2022년 USPSTF는 최신 근거를 다시 검토한 뒤 <b>저용량 아스피린이 대장암 발생 또는 사망을 줄인다는 근거가 불충분하다</b>고 결론을 바꿨습니다.</p>

<figure class="story-photo"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Acylpyrin.jpg" alt="흰색 아스피린 정제 사진" loading="lazy"><figcaption>아스피린은 오래되고 값싼 약이지만 ‘오래 사용됐다’는 사실이 건강한 사람의 장기 예방 효과를 자동으로 보장하지는 않습니다. 사진: Marcus33 / Wikimedia Commons, Public Domain.</figcaption></figure>

<h2>10. 2026년 ASPREE 암 장기추적은 무엇을 보여줬나?</h2>
<p>2026년 JAMA Oncology에 발표된 ASPREE-XT 장기추적은 평균 70대 중반에 시작한 고령자를 약 8.6년 중앙 추적했습니다. 이전 aspirin 배정은 <b>전체 암 발생을 줄이지 않았고</b>(HR 0.98), colorectal cancer도 줄이지 않았습니다(HR 1.01).</p>
<p>전체 추적기간을 합친 분석에서 cancer-related mortality는 aspirin군이 더 높았습니다(HR 1.15). 다만 중요한 해석이 하나 있습니다. 시험이 끝난 뒤 관찰기간만 따로 보면 과거 aspirin 배정에 따른 암 사망 차이는 더 이상 나타나지 않았습니다. 따라서 이 결과를 “아스피린이 암을 만든다”라고 단순화해서는 안 됩니다. 연구 자체도 <b>고령자에서 암 예방용으로 aspirin을 시작할 근거가 없다는 방향</b>으로 읽는 것이 적절합니다.</p>

<h2>11. ‘항염증제니까 inflammaging에도 좋지 않을까?’</h2>
<p>이 질문은 아주 자연스럽습니다. Aspirin은 고용량에서 prostaglandin 합성을 억제하고, COX-2 acetylation을 통해 일부 pro-resolving lipid mediator 경로에도 영향을 줄 수 있습니다. 시험관·전임상 수준에서는 NF-κB, 염증성 signaling, 암 미세환경 같은 여러 경로가 논의돼 왔습니다.</p>
<p>하지만 저용량 1차 예방의 핵심 작용은 <b>platelet COX-1/TXA₂ 억제</b>입니다. 그리고 가장 중요한 인간 결과시험인 ASPREE에서 건강수명과 유사한 disability-free survival이 개선되지 않았습니다.</p>
<div class="takeaway"><strong>Inflammaging 해석</strong><p><b>항염 기전이 존재한다 ≠ 인간의 노화가 느려진다.</b> 아스피린은 염증 생물학과 연결되지만, 건강한 사람이 inflammaging을 낮추기 위해 장기 복용하면 순수하게 이득이라는 임상근거는 없습니다.</p></div>

<h2>12. 왜 나이가 들수록 출혈 문제가 커질까?</h2>
<p>아스피린은 혈소판의 정상적인 지혈 기능도 약하게 만듭니다. 따라서 위장관 점막 손상이나 작은 혈관 파열이 발생했을 때 출혈이 더 커질 수 있습니다. 나이가 들수록 위장관 출혈·두개내 출혈의 기본 위험이 올라가기 때문에, 같은 상대위험 증가라도 절대적인 피해가 커질 수 있습니다.</p>
<p>위궤양·출혈 병력, 항응고제나 다른 항혈소판제, 일부 NSAID, corticosteroid 등은 출혈 위험을 높일 수 있습니다. 이런 요인 때문에 ‘심혈관 위험도’만 계산해서는 부족하고 <b>출혈 위험을 동시에 평가</b>해야 합니다.</p>

<h2>13. 현재 가이드라인은 어떻게 말하는가?</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>미국 USPSTF · 2022</b><span>40–59세이고 10년 CVD 위험 ≥10%인 사람은 시작 여부를 개별 판단. 순이익은 작음. 60세 이상은 1차 예방 목적으로 새로 시작하지 말 것을 권고.</span></div>
  <div class="evidence-card"><b>ACC/AHA · 1차 예방</b><span>40–70세의 일부 고위험·저출혈위험 성인에서만 고려 가능. 고령자 또는 출혈위험이 높은 사람에게 routine 사용은 권장하지 않음.</span></div>
  <div class="evidence-card"><b>2차 예방</b><span>만성 관상동맥질환 등에서는 금기가 없고 경구항응고제 적응증이 없다면 저용량 aspirin이 여전히 중요한 표준 치료 중 하나.</span></div>
</div>
<p>2023 AHA/ACC chronic coronary disease guideline은 경구항응고제 적응증이 없는 만성 관상동맥질환 환자에서 low-dose aspirin 81 mg(75–100 mg)을 죽상경화성 사건 감소 목적으로 권고합니다. 즉 <b>1차 예방에서 보수적이 된 것과 2차 예방에서의 중요성은 동시에 참</b>입니다.</p>

<h2>14. LONGEVITY JOURNAL 근거 판정</h2>
<div class="evidence-grid">
  <div class="evidence-card"><b>2차 심혈관 예방</b><span><strong>근거 강함.</strong> 이미 죽상경화성 혈관질환이 있는 적절한 환자에서 중요한 치료.</span></div>
  <div class="evidence-card"><b>1차 심혈관 예방</b><span><strong>선별적.</strong> 일부 고위험·저출혈위험 성인에서만 작은 순이익 가능.</span></div>
  <div class="evidence-card"><b>건강한 고령자의 healthspan</b><span><strong>부정적.</strong> ASPREE에서 disability-free survival 개선 없음.</span></div>
  <div class="evidence-card"><b>대장암 예방</b><span><strong>불확실.</strong> 오래된 장기 추적 신호는 있지만 현대 저용량 1차 예방 근거는 충분하지 않음.</span></div>
  <div class="evidence-card"><b>Inflammaging</b><span><strong>기전적 가능성.</strong> 임상적으로 노화를 늦춘다는 증거 없음.</span></div>
  <div class="evidence-card"><b>수명 연장</b><span><strong>입증 안 됨.</strong> 건강한 사람이 장기 복용해 오래 산다는 RCT 근거 없음.</span></div>
</div>

<h2>15. 실생활에서 기억할 7가지</h2>
<ol>
<li><b>아스피린은 영양제가 아니라 약입니다.</b> ‘하루 한 알 건강보험’처럼 생각하면 안 됩니다.</li>
<li><b>1차 예방과 2차 예방을 절대로 섞지 않습니다.</b> 이미 심근경색·관상동맥질환·일부 허혈성 뇌졸중이 있는 사람은 완전히 다른 위험-편익 구조를 가집니다.</li>
<li><b>젊고 건강하다고 출혈 위험이 0은 아닙니다.</b> 1차 예방 이득이 작은 사람에서는 작은 출혈 위험 증가도 중요합니다.</li>
<li><b>나이가 많다고 ‘혈전이 걱정되니 더 필요하다’고 단순화하면 안 됩니다.</b> 나이는 심혈관 위험과 출혈 위험을 모두 올립니다.</li>
<li><b>대장암 예방을 이유로 임의로 시작하지 않습니다.</b> 최신 권고는 그 목적의 근거를 충분하다고 보지 않습니다.</li>
<li><b>복용 중인 처방 aspirin을 스스로 중단하지 않습니다.</b> 특히 stent, 심근경색, 관상동맥질환, 뇌졸중 병력이 있다면 중단 자체가 위험할 수 있습니다.</li>
<li><b>건강수명의 기본축은 여전히 혈압·LDL·금연·운동·식사·체중·당뇨 관리입니다.</b> 아스피린은 이 기본을 대신하는 항노화 shortcut이 아닙니다.</li>
</ol>

<div class="takeaway"><strong>LONGEVITY JOURNAL의 결론</strong><p>아스피린은 현대 의학에서 매우 중요한 약이지만, <b>중요한 약 = 건강한 사람이 미리 먹을수록 좋은 약</b>은 아닙니다. 이미 혈관질환이 있는 사람에게는 재발 위험을 줄이는 강력한 2차 예방 도구입니다. 반대로 건강한 사람, 특히 고령자가 ‘심근경색·암·노화까지 한 번에 예방하겠다’는 목적으로 시작하면 심혈관 이득이 작거나 없고 출혈 위험이 커질 수 있습니다. 장수 관점에서의 핵심은 <b>아스피린 자체가 아니라 개인의 절대 심혈관 위험과 절대 출혈 위험의 차이</b>입니다.</p></div>

<h2>근거자료 — 발표 시간순</h2>
<div class="timeline">
${paper('1989','Physicians’ Health Study · NEJM.','건강한 남성 의사 22,071명. Aspirin 325 mg 격일 복용에서 myocardial infarction 위험 약 44% 감소. 당시 1차 예방 aspirin 확산의 핵심 근거였으나 현대 statin·혈압치료 이전 시대 연구.','https://pubmed.ncbi.nlm.nih.gov/2664509/')}
${paper('1997','Aspirin and platelets · review.','Aspirin이 platelet COX-1을 비가역적으로 acetylation해 thromboxane 생성을 억제한다는 항혈소판 기전을 정리.','https://pubmed.ncbi.nlm.nih.gov/9263351/')}
${paper('2005','Ridker PM, et al. Women’s Health Study · NEJM.','건강한 여성에서 저용량 aspirin의 1차 예방 효과가 남성 대상 초기 연구와 동일하지 않음을 보여, 성별·기저위험에 따른 차이에 대한 논의를 확대.','https://pubmed.ncbi.nlm.nih.gov/15753114/')}
${paper('2009','Antithrombotic Trialists’ Collaboration · Lancet.','1차 예방 95,000명과 2차 예방 17,000명의 개별 참가자 데이터 메타분석. 1차 예방의 절대 이득은 작고 major bleeding 증가와 균형이 문제였던 반면, 2차 예방의 절대 이득은 훨씬 큼.','https://pubmed.ncbi.nlm.nih.gov/19482214/')}
${paper('2010','Rothwell PM, et al. Lancet.','여러 aspirin RCT의 약 20년 추적에서 colon cancer incidence와 mortality 감소 신호. 다만 오래된 시험·용량·2차 예방 대상이 섞여 현대 저용량 1차 예방에 대한 직접성은 제한됨.','https://pubmed.ncbi.nlm.nih.gov/20970847/')}
${paper('2018','Gaziano JM, et al. ARRIVE · Lancet.','12,546명. Aspirin 100 mg/day vs placebo 약 5년. 주요 심혈관 endpoint 4.29% vs 4.48%로 유의차 없음; GI bleeding 0.97% vs 0.46%로 증가.','https://pubmed.ncbi.nlm.nih.gov/30158069/')}
${paper('2018','ASCEND Study Collaborative Group · NEJM.','심혈관질환 없는 당뇨병 환자 15,480명. Serious vascular event 8.5% vs 9.6%로 감소했지만 major bleeding 4.1% vs 3.2%로 증가해 절대 이득이 상당 부분 상쇄.','https://pubmed.ncbi.nlm.nih.gov/30146931/')}
${paper('2018','McNeil JJ, et al. ASPREE disability-free survival · NEJM.','건강한 고령자 19,114명. Aspirin 100 mg/day는 death+dementia+persistent physical disability 복합평가변수를 개선하지 못했고 주요 출혈을 증가시킴.','https://pubmed.ncbi.nlm.nih.gov/30221596/')}
${paper('2018','McNeil JJ, et al. ASPREE cardiovascular events & bleeding · NEJM.','CVD 10.7 vs 11.3 events/1,000 person-years로 유의한 감소 없음; major hemorrhage 8.6 vs 6.2로 증가(HR 1.38).','https://pubmed.ncbi.nlm.nih.gov/30221597/')}
${paper('2021','McNeil JJ, et al. JNCI.','ASPREE 암 분석. 시험기간 aspirin은 전체 암 발생을 줄이지 않았고 고령자에서 late-stage cancer 및 cancer mortality 신호가 우려를 제기. 이후 장기추적이 필요해짐.','https://pubmed.ncbi.nlm.nih.gov/32778876/')}
${paper('2022','USPSTF Final Recommendation.','40–59세이면서 10년 CVD 위험 ≥10%인 성인은 aspirin 시작을 개별 결정하며 순이익은 작다고 평가. 60세 이상은 1차 예방 목적으로 새로 시작하지 말 것을 권고. CRC 예방 근거는 불충분.','https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/aspirin-to-prevent-cardiovascular-disease-preventive-medication','USPSTF')}
${paper('2022','Guirguis-Blake JM, et al. JAMA evidence review.','현대 low-dose aspirin 1차 예방 근거를 재평가. CVD 사건의 작은 감소와 major bleeding 증가를 함께 확인하고 colorectal cancer 이득의 불확실성을 강조.','https://pubmed.ncbi.nlm.nih.gov/35471507/')}
${paper('2023','ASPREE stroke secondary analysis · JAMA Network Open.','건강한 고령자 19,114명에서 ischemic stroke는 유의하게 줄지 않았고 intracranial bleeding은 증가(HR 1.38).','https://pubmed.ncbi.nlm.nih.gov/37494038/')}
${paper('2023','AHA/ACC Chronic Coronary Disease Guideline.','이미 chronic coronary disease가 있고 oral anticoagulant 적응증이 없는 환자에서는 low-dose aspirin 75–100 mg이 atherosclerotic event 감소를 위한 표준 치료 중 하나로 권고.','https://www.acc.org/guidelines/hubs/chronic-coronary-disease','ACC/AHA')}
${paper('2025','ASPREE extended follow-up · European Heart Journal.','전체 중앙 추적 약 8.3년. 장기 MACE 효과는 거의 0에 가까웠고, major haemorrhage는 aspirin 배정군에서 계속 더 높음(HR 1.24).','https://pubmed.ncbi.nlm.nih.gov/40796244/')}
${paper('2025','Li DK, et al. J Thromb Haemost.','ASPREE 2차 분석에서 clinically significant extracranial bleeding 이후 기능장애 부담을 평가. 출혈을 단순한 단기 부작용이 아닌 건강수명 손실과 연결해 보는 근거.','https://pubmed.ncbi.nlm.nih.gov/39986609/')}
${paper('2026','Orchard SG, et al. JAMA Oncology · ASPREE-XT.','19,114명 장기추적, 중앙 8.6년. Overall cancer incidence HR 0.98, colorectal cancer HR 1.01로 예방효과 없음. Cancer-related mortality HR 1.15였지만 시험 종료 후 legacy effect는 지속되지 않음.','https://pubmed.ncbi.nlm.nih.gov/41609798/')}
</div>

<p class="editor-note"><strong>최종 근거 검토:</strong> 2026-10-09 · 이 페이지의 결론은 ‘아스피린을 먹지 말라’가 아니라 <b>예방 단계와 개인 위험에 따라 약의 순이익이 완전히 달라진다</b>는 것입니다. 이미 aspirin을 처방받아 복용 중이라면 이 글만 보고 임의로 중단하지 마십시오.</p>
`
});
})();
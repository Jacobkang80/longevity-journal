(()=>{
const p=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='olive-oil-evidence');
if(!p || p.html.includes('id="inflammaging-evoo"')) return;
p.tags=[...new Set([...(p.tags||[]),'염증','만성염증','Inflammaging','CRP','NF-κB'])];
p.excerpt='지중해식 식단의 상징인 올리브유. 심혈관·대사·인지 건강뿐 아니라 만성 저등급 염증과 inflammaging의 관점에서 실제 임상시험과 장기 연구를 읽어봅니다.';

const section=`
<section id="inflammaging-evoo">
<h2>항노화의 핵심 연결고리: 만성 염증과 ‘Inflammaging’</h2>
<p>노화 연구에서 자주 등장하는 단어가 <b>inflammaging</b>입니다. 급성 염증은 감염이나 상처를 처리하기 위한 정상적인 방어 반응이지만, 나이가 들면서 뚜렷한 감염이 없어도 낮은 수준의 전신 염증 신호가 오래 지속되는 현상이 관찰됩니다. 이를 만성 저등급 염증, 또는 inflammaging이라고 부릅니다. 면역노화와 함께 심혈관질환, 제2형 당뇨병, 신경퇴행성 질환 같은 노화 관련 질환의 위험과 연결되는 중요한 생물학적 축으로 연구되고 있습니다.</p>
<p>여기서 조심해야 할 점이 있습니다. <b>염증 수치가 낮아지는 것과 사람의 노화 속도가 느려지는 것은 같은 결론이 아닙니다.</b> CRP, IL-6, TNF-α 같은 염증 표지자가 개선되었다고 해서 곧바로 수명이 늘었다고 말할 수는 없습니다. 다만 만성 염증이 여러 노화 관련 질환의 공통 경로와 연결되어 있기 때문에, EVOO가 염증 신호에 어떤 영향을 주는지는 장수 연구에서 충분히 가치 있는 질문입니다.</p>

<div class="evidence-grid">
  <div class="evidence-card"><b>급성 염증</b><span>감염·손상에 대응하는 일시적 방어 반응. 생존에 필수적입니다.</span></div>
  <div class="evidence-card"><b>만성 저등급 염증</b><span>낮은 강도의 염증 신호가 장기간 지속되는 상태. 대사·혈관 건강과 연관됩니다.</span></div>
  <div class="evidence-card"><b>Inflammaging</b><span>노화와 함께 증가하는 만성 전신 염증 현상. 항노화 연구의 중요한 표적 중 하나입니다.</span></div>
</div>

<h2>EVOO는 실제로 염증을 낮출까?</h2>
<p>가장 흥미로운 단서는 <b>올리브유의 폴리페놀</b>에서 나옵니다. 2014년 대사증후군 환자 49명을 대상으로 한 무작위 교차시험에서는 폴리페놀 함량이 높은 버진 올리브유 식사를 했을 때, 폴리페놀이 낮거나 중간인 오일에 비해 식후 혈중 LPS 상승과 <b>NF-κB 활성</b>, IL-6·IL-1β 등 일부 염증 관련 유전자 반응이 억제됐습니다. NF-κB는 여러 염증성 유전자의 스위치 역할을 하는 전사인자이기 때문에 기전적으로도 흥미로운 결과입니다.</p>
<p>2015년 30개 무작위시험, 3,106명을 종합한 메타분석에서는 올리브유 중재가 대조군보다 <b>CRP를 평균 0.64 mg/L, IL-6를 평균 0.29 정도 낮추는 방향</b>을 보였습니다. 하지만 연구마다 사용한 올리브유의 종류, 섭취량, 참가자의 건강 상태가 달랐다는 점을 함께 봐야 합니다.</p>
<p>반대로 모든 분석이 같은 결론을 내린 것은 아닙니다. 2024년 33개 RCT, 2,020명을 종합한 메타분석에서는 EVOO가 인슐린과 HOMA-IR에는 유리한 변화를 보였지만 <b>CRP, IL-6, TNF-α에서는 전체적으로 유의한 감소가 확인되지 않았습니다.</b> 이것은 ‘EVOO는 확실한 항염제’라는 단순한 결론을 경계하게 만드는 중요한 반대 근거입니다.</p>
<p>가장 최근의 2026년 체계적 문헌고찰·메타분석은 23개 RCT, 1,138명을 평가했습니다. 고폴리페놀 EVOO는 저폴리페놀 올리브유와 비교했을 때 산화 LDL을 줄였고, <b>CRP는 평균 약 0.99 mg/L 낮았습니다.</b> 다만 연구 간 이질성이 컸고, 평가된 근거의 확실성도 지표에 따라 <b>중간에서 매우 낮음</b> 수준이었습니다. 따라서 현재의 가장 정확한 표현은 ‘항염 효과가 유망하며 일부 임상 지표에서 반복 관찰되지만, 효과 크기와 대상군은 아직 확정되지 않았다’입니다.</p>

<div class="takeaway"><strong>항노화 관점에서의 해석</strong><p>EVOO가 노화를 직접 늦춘다는 임상시험은 없습니다. 그러나 <b>폴리페놀 → 산화 스트레스·NF-κB 신호 → CRP·IL-6 같은 염증 지표</b>로 이어지는 경로에 영향을 줄 가능성이 있고, 심혈관 위험 감소라는 비교적 강한 임상 근거와 방향이 맞아떨어진다는 점에서 inflammaging 연구와 연결해 볼 가치가 있습니다. 즉 ‘장수 오일’이라기보다 <b>노화 관련 위험 경로를 조금 더 유리하게 만드는 식품</b>으로 보는 편이 정확합니다.</p></div>

<h2>그렇다면 아침 공복에 먹어야 더 항염 효과가 좋을까?</h2>
<p>현재까지의 인체 근거로는 <b>아침 공복 섭취가 식사와 함께 먹는 것보다 염증을 더 낮춘다는 근거는 없습니다.</b> 오히려 식후 염증 반응을 조사한 임상시험들은 올리브유를 식사의 일부로 제공해 폴리페놀 함량에 따른 차이를 관찰했습니다. 따라서 핵심은 ‘공복’이라는 타이밍보다 <b>꾸준한 섭취, EVOO의 폴리페놀 함량, 그리고 버터·동물성 지방 등과 무엇을 대체하느냐</b>에 더 가깝습니다.</p>
<p>공복에 한 숟갈 먹는 방식이 개인적으로 편하고 위장 불편이 없다면 식품 섭취 방법의 하나가 될 수는 있습니다. 그러나 공복 섭취 자체를 특별한 항염 또는 항노화 프로토콜로 설명할 근거는 아직 부족합니다.</p>
</section>
`;

const anchor='<div class="takeaway"><strong>그래서, 어떻게 이해하면 좋을까?</strong>';
if(p.html.includes(anchor)) p.html=p.html.replace(anchor,section+'\n'+anchor);

const t2015='<div class="paper"><time>2015</time>';
const timelineAdd=`<div class="paper"><time>2014</time><div><b>Camargo A, et al. Food Chemistry.</b><br>대사증후군 환자 49명의 무작위 교차시험. 고폴리페놀 버진 올리브유 식사에서 식후 LPS, NF-κB 활성 및 IL-6·IL-1β 등 일부 염증 반응이 더 낮게 관찰됨.<br><a href="https://pubmed.ncbi.nlm.nih.gov/24874372/" target="_blank" rel="noopener noreferrer">PMID 24874372 · DOI 10.1016/j.foodchem.2014.04.047 ↗</a></div></div>\n  <div class="paper"><time>2015</time>`;
if(p.html.includes(t2015)) p.html=p.html.replace(t2015,timelineAdd);

const t2022='<div class="paper"><time>2022</time><div><b>Guasch-Ferré M, et al. JACC.</b>';
const add2021=`<div class="paper"><time>2021</time><div><b>OLIVAUS trial — George ES, et al. European Journal of Nutrition.</b><br>성인 50명의 이중맹검 무작위 교차시험. 고폴리페놀 EVOO 60 mL/일과 저폴리페놀 오일을 3주씩 비교. 전체 집단의 치료군 간 차이는 뚜렷하지 않았지만, 기존 염증이 높은 하위집단에서 고폴리페놀 오일 섭취 후 hs-CRP 감소가 관찰됨.<br><a href="https://pubmed.ncbi.nlm.nih.gov/34716791/" target="_blank" rel="noopener noreferrer">PMID 34716791 ↗</a></div></div>\n  <div class="paper"><time>2022</time><div><b>Guasch-Ferré M, et al. JACC.</b>`;
if(p.html.includes(t2022)) p.html=p.html.replace(t2022,add2021);

const t2024='<div class="paper"><time>2024</time><div><b>Tessier AJ, et al. JAMA Network Open.</b>';
const add2024=`<div class="paper"><time>2024</time><div><b>Morvaridzadeh M, et al. Journal of Nutrition.</b><br>33개 RCT, 2,020명을 종합한 메타분석. EVOO는 인슐린·HOMA-IR 개선과 연관됐지만 CRP, IL-6, TNF-α 등 주요 염증 지표는 전체적으로 유의한 감소가 확인되지 않음. 항염 효과의 불확실성을 보여주는 중요한 반대 근거.<br><a href="https://pubmed.ncbi.nlm.nih.gov/37977313/" target="_blank" rel="noopener noreferrer">PMID 37977313 · DOI 10.1016/j.tjnut.2023.10.028 ↗</a></div></div>\n  <div class="paper"><time>2024</time><div><b>Li X, et al. Ageing Research Reviews.</b><br>면역노화와 inflammaging의 기전 및 노화 관련 질환과의 연결을 정리한 종설. 올리브유 자체의 임상시험은 아니지만, 만성 저등급 염증이 항노화 연구에서 중요한 이유를 설명하는 배경 근거.<br><a href="https://pubmed.ncbi.nlm.nih.gov/39395575/" target="_blank" rel="noopener noreferrer">PMID 39395575 · DOI 10.1016/j.arr.2024.102540 ↗</a></div></div>\n  <div class="paper"><time>2024</time><div><b>Tessier AJ, et al. JAMA Network Open.</b>`;
if(p.html.includes(t2024)) p.html=p.html.replace(t2024,add2024);

p.html=p.html.replace('EVOO의 염증·산화 스트레스 지표에 관한 23개 RCT(1,138명) 메타분석. 여러 지표에서 변화가 보고됐지만 근거 확실성은 중간에서 매우 낮음.','EVOO의 염증·산화 스트레스 지표에 관한 23개 RCT(1,138명) 메타분석. 저폴리페놀 올리브유와 비교해 CRP가 약 0.99 mg/L 낮고 산화 LDL도 감소했지만, 연구 간 이질성이 크고 근거 확실성은 중간에서 매우 낮음.');
})();
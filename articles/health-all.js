(()=>{
const posts=window.JOURNAL_POSTS||(window.JOURNAL_POSTS=[]);
const upsert=(slug,data)=>{let p=posts.find(x=>x.slug===slug);if(!p){p={slug,category:'health'};posts.push(p)}Object.assign(p,data)};
const paper=(year,title,body,url,label='PubMed')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;

upsert('nmn-evidence-guide',{
 date:'2023-07-21',
 title:'NMN은 정말 노화를 늦출까? — NAD⁺를 올리는 것과 오래 사는 것은 다르다',
 excerpt:'NMN은 혈중 NAD 관련 대사체를 올리는 데는 비교적 일관적입니다. 그러나 대사 건강·근력·수명으로 이어지는지는 아직 별개의 질문입니다.',
 tags:['NMN','NAD+','Sirtuin','대사','항노화','Longevity Molecules'],
 html:`<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-07-21 · <a href="https://myepic2.tistory.com/6" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a> · 근거 전면 업데이트 2026-10-08</p>
<div class="takeaway"><strong>30초 핵심 요약</strong><p>NMN은 NAD⁺의 전구체입니다. 사람 임상시험에서 <b>혈중 NAD 관련 대사체를 높이는 효과</b>는 반복해서 관찰됐습니다. 하지만 혈당·지질·체중·근력 같은 임상적으로 중요한 결과는 대체로 작거나 일관되지 않습니다. 현재까지 사람에서 ‘노화를 늦춘다’거나 ‘수명을 연장한다’는 증거는 없습니다.</p></div>
<h2>NAD⁺는 왜 노화 연구의 스타가 됐을까?</h2><p>NAD⁺는 에너지 대사에 필요한 조효소이면서, 시르투인·PARP 같은 효소가 사용하는 기질입니다. 동물에서는 나이가 들며 여러 조직의 NAD 대사가 달라지고, NAD 전구체를 보충했을 때 대사·미토콘드리아·DNA 손상 반응이 개선되는 실험이 쌓였습니다. 그래서 NMN은 ‘NAD⁺를 보충하면 노화의 여러 고리를 한 번에 건드릴 수 있지 않을까?’라는 가설의 중심에 섰습니다.</p>
<div class="evidence-grid"><div class="evidence-card"><b>확실한 것</b><span>단기간 NMN 복용은 혈중 NAD 관련 대사체를 높일 수 있습니다.</span></div><div class="evidence-card"><b>가능성</b><span>특정 집단에서 인슐린 감수성·보행·수면 등의 작은 개선 신호가 있습니다.</span></div><div class="evidence-card"><b>아직 모르는 것</b><span>장기 안전성, 질병 예방, 실제 건강수명·수명 연장.</span></div></div>
<h2>가장 흥미로운 인체 연구: 전당뇨 여성</h2><p>2021년 Science에 실린 소규모 무작위시험에서는 과체중·비만이면서 전당뇨가 있는 폐경 후 여성에게 NMN을 10주 투여했을 때 근육 인슐린 감수성이 개선됐습니다. 다만 참가자 수가 작았고, 두 군의 기저 간 지방량 차이를 둘러싼 논쟁도 있었습니다. 즉 ‘흥미로운 신호’이지 모든 사람에게 적용할 확정 결론은 아닙니다.</p>
<h2>노년층의 근력·보행은?</h2><p>2022년 고령 남성 시험에서는 250 mg/일 NMN이 혈중 NAD를 높였고 보행 속도·일부 악력 지표가 명목상 개선됐지만 체성분 변화는 없었습니다. 다른 고령 당뇨 환자 소규모 시험에서는 악력과 보행 속도에서 위약과 차이가 없었습니다. 연구마다 대상과 결과가 달라 ‘근력 영양제’로 부르기는 이릅니다.</p>
<h2>메타분석이 보여주는 냉정한 그림</h2><p>2025년 12개 연구 513명을 종합한 메타분석에서는 혈중 NAD 관련 지표 증가는 확인됐지만 공복혈당·중성지방·콜레스테롤 같은 대사 결과의 개선은 뚜렷하지 않았습니다. 2026년 15개 시험을 검토한 안전성 메타분석에서는 250–2000 mg/일, 최대 24주 범위에서 단기 내약성은 대체로 양호했지만 광범위한 대사 이득은 확인되지 않았습니다.</p>
<div class="takeaway"><strong>LONGEVITY JOURNAL의 판정</strong><p><b>NAD를 올리는 것과 노화를 늦추는 것은 다른 단계의 주장입니다.</b> NMN은 ‘생물학적으로 그럴듯하고 사람에서 표적(NAD)을 움직이는 물질’이지만, 아직 질병·장애·사망 같은 임상 결과로 연결되는 증거가 부족합니다.</p></div>
<h2>근거자료 — 발표 시간순</h2><div class="timeline">${paper('2021','Yoshino M, et al. Science.','전당뇨 폐경 후 여성의 10주 RCT. 근육 인슐린 감수성 개선 신호.','https://pubmed.ncbi.nlm.nih.gov/33888596/')} ${paper('2022','Igarashi M, et al. npj Aging.','고령 남성, 250 mg/일. 혈중 NAD 증가와 일부 신체기능 신호, 체성분 변화 없음.','https://pubmed.ncbi.nlm.nih.gov/35927255/')} ${paper('2022','Yi L, et al. GeroScience.','건강한 중년 80명, 300·600·900 mg/일 60일. 혈중 NAD 증가, HOMA-IR은 위약 대비 차이 없음.','https://pubmed.ncbi.nlm.nih.gov/36482258/')} ${paper('2024','NMN walking/sleep RCT.','고령자 60명, 250 mg/일 12주. 1차 운동결과는 차이 없었고 보행시간·NAD 등 2차 결과에서 일부 신호.','https://pubmed.ncbi.nlm.nih.gov/38789831/')} ${paper('2025','Zhang J, et al. Crit Rev Food Sci Nutr.','12개 연구 513명 메타분석. NAD 지표는 증가했지만 주요 혈당·지질 개선은 제한적.','https://pubmed.ncbi.nlm.nih.gov/39116016/')} ${paper('2026','Safety and Metabolism-Related Outcomes of NMN.','15개 RCT 검토. 단기 안전성은 대체로 양호, 광범위한 대사 이득은 확인되지 않음.','https://pubmed.ncbi.nlm.nih.gov/42514320/')}</div><p class="editor-note">최종 근거 검토: 2026-10-08 · 장기 복용과 실제 건강수명 효과는 아직 미확립입니다.</p>`
});

upsert('fisetin-evidence-guide',{
 date:'2023-07-21',
 title:'Fisetin은 정말 ‘좀비 세포’를 제거할까? — 세놀리틱 열풍과 인간 데이터의 거리',
 excerpt:'쥐에서는 노화세포 감소와 건강수명 연장 신호가 강렬했습니다. 하지만 인간 항노화 효능은 아직 임상시험 결과를 기다리는 단계입니다.',
 tags:['Fisetin','피세틴','Senolytic','세놀리틱','세포노화','Inflammaging'],
 html:`<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-07-21 · <a href="https://myepic2.tistory.com/5" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a></p>
<figure class="story-photo"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/More_strawberries.jpg" alt="딸기" loading="lazy"><figcaption>Fisetin은 딸기 등 여러 식물에 존재하는 플라보놀입니다. 음식 속 미량 섭취와 세놀리틱 연구에서 사용하는 고용량 보충은 같은 개념이 아닙니다. 사진: USDA/Wikimedia Commons.</figcaption></figure>
<div class="takeaway"><strong>30초 핵심 요약</strong><p>Fisetin은 노화세포를 선택적으로 제거하는 <b>senolytic 후보</b>로 유명합니다. 2018년 연구에서 늙은 쥐의 노화 관련 병리와 수명이 개선됐지만, 인간에서 같은 효과가 입증된 것은 아닙니다. 현재 가장 중요한 인간 연구들은 임상시험 ‘진행 단계’이며, 건강한 사람이 간헐적으로 고용량 복용하면 젊어진다는 주장은 아직 근거가 부족합니다.</p></div>
<h2>노화세포는 왜 문제일까?</h2><p>손상된 세포가 분열을 멈추는 세포노화는 암 억제에 필요한 방어 기전입니다. 문제는 나이가 들며 이런 세포가 축적되고 SASP라 불리는 염증성 신호를 분비해 주변 조직에 영향을 줄 수 있다는 점입니다. ‘세놀리틱’은 이 노화세포를 선택적으로 제거하려는 전략입니다.</p>
<h2>2018년, Fisetin이 유명해진 이유</h2><p>Yousefzadeh 연구팀은 여러 플라보노이드를 비교했고 Fisetin을 강력한 후보로 제시했습니다. 늙은 생쥐에 간헐적으로 투여했을 때 노화세포 표지와 병리가 감소하고 중앙·최대 수명이 늘었습니다. 인간 지방조직 절편에서도 일부 노화세포 감소 신호가 관찰됐지만, 이것은 살아있는 사람의 임상효과를 증명한 것이 아닙니다.</p>
<h2>왜 ‘간헐 고용량’ 이야기가 나왔나?</h2><p>세놀리틱은 매일 억제하는 약보다 노화세포를 한 번 제거한 뒤 쉬는 ‘hit-and-run’ 전략이 이론적으로 가능합니다. 그래서 인터넷에는 며칠간 고용량 Fisetin을 먹는 프로토콜이 퍼졌습니다. 하지만 용량·흡수율·간격·장기 안전성이 사람에서 확립되지 않았고, 동물 용량을 단순 환산하는 것은 위험합니다.</p>
<h2>인간 임상시험은 어디까지 왔을까?</h2><p>2024년에는 65세 이상 패혈증 환자에서 Fisetin이 노화 면역세포와 장기기능 악화를 줄이는지 평가하는 다기관 2상 시험 프로토콜이 발표됐습니다. 중요한 점은 이것이 ‘결과 논문’이 아니라 ‘시험 설계’라는 사실입니다. 건강수명·노쇠·노화 피부 등 여러 연구가 진행 중이지만, 현재 인간 항노화 효과를 확정할 완성된 대규모 RCT는 부족합니다.</p>
<div class="takeaway"><strong>근거 판정</strong><p><b>동물 근거: 흥미롭고 강함 · 인간 기전: 초기 · 인간 건강수명: 미확립.</b> Fisetin은 ‘유망한 세놀리틱 후보’라고 부를 수는 있지만 ‘검증된 항노화제’라고 부르기는 아직 이릅니다.</p></div>
<h2>근거자료 — 발표 시간순</h2><div class="timeline">${paper('2018','Yousefzadeh MJ, et al. EBioMedicine.','세포·쥐·인간 지방조직 절편 연구. 늙은 쥐에서 노화세포 지표·병리 감소 및 수명 연장.','https://pubmed.ncbi.nlm.nih.gov/30279143/')} ${paper('2024','Takaya K, et al. Biogerontology.','Fisetin의 피부 노화세포 제거 가능성을 검토한 연구. 피부 회춘의 인간 임상효과는 아직 불명확.','https://pubmed.ncbi.nlm.nih.gov/37736858/')} ${paper('2024','STOP-Sepsis phase 2 protocol.','65세 이상 패혈증 환자 220명을 계획한 무작위 이중맹검 시험. 효능을 평가 중이며 결과 확정 논문은 아님.','https://pubmed.ncbi.nlm.nih.gov/39434114/')}</div><p class="editor-note">최종 근거 검토: 2026-10-08 · 임상시험 결과가 나오면 사람 근거 섹션을 우선 업데이트합니다.</p>`
});

upsert('ca-akg-evidence-guide',{
 date:'2024-02-26',
 title:'CA-AKG는 노화를 압축할 수 있을까? — 미토콘드리아·후성유전학·염증의 교차점',
 excerpt:'쥐에서는 노쇠 감소와 수명 연장 신호가 나왔습니다. 사람에서는 생물학적 나이 관찰자료가 있지만, 결정적 RCT 결과는 아직 기다리는 중입니다.',
 tags:['CA-AKG','AKG','alpha-ketoglutarate','TCA cycle','생물학적 나이','Inflammaging'],
 html:`<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2024-02-26 · <a href="https://myepic2.tistory.com/42" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a></p><div class="takeaway"><strong>30초 핵심 요약</strong><p>α-ketoglutarate(AKG)는 TCA 회로의 중심 대사물질이면서 DNA·히스톤 탈메틸화 효소의 보조기질입니다. 2020년 늙은 쥐에서 calcium-AKG가 노쇠를 줄이고 수명을 연장한 결과가 큰 관심을 받았습니다. 사람에서는 상업용 CA-AKG 복합제를 사용한 비무작위 연구에서 DNA 메틸화 나이가 낮아졌다는 보고가 있었지만, 대조군이 없는 연구라 인과성을 말할 수 없습니다.</p></div>
<h2>왜 대사물질이 후성유전학까지 건드릴까?</h2><p>AKG는 세포 에너지 대사의 중간체이면서 TET·JmjC 계열 효소에 필요한 보조기질입니다. 즉 미토콘드리아의 대사 상태가 유전자 발현 조절과 연결되는 접점입니다. 동물에서는 mTOR·염증·후성유전 변화와 연관된 노화 효과가 연구됐습니다.</p>
<h2>2020년 쥐 연구가 강렬했던 이유</h2><p>18개월령 생쥐에 CaAKG를 투여했을 때 암컷에서 중앙수명 증가, 양성 모두에서 노쇠와 염증성 사이토카인 감소가 관찰됐습니다. 연구진은 IL-10 증가와 만성 염증 억제를 가능한 경로로 제시했습니다. 그러나 동물 사료에 넣은 CaAKG 결과를 인간 보충제로 바로 옮길 수는 없습니다.</p>
<h2>‘생물학적 나이 8년 감소’라는 헤드라인의 함정</h2><p>2021년 Rejuvant 연구는 CA-AKG와 비타민 복합제를 평균 7개월 사용한 42명에서 DNA 메틸화 기반 나이가 평균 약 8년 낮아졌다고 보고했습니다. 하지만 무작위·위약 대조가 아니었고 제품에 AKG 외 성분도 포함됐으며, 연구와 제품 관련 이해관계도 있었습니다. 매우 흥미롭지만 ‘8년 젊어졌다’고 해석할 근거는 아닙니다.</p>
<h2>결정적 시험은 아직 진행형</h2><p>2025년 공개된 ABLE 연구는 생물학적 나이가 실제 나이보다 높은 40–60세 성인 120명을 모집해 지속방출 CA-AKG 1 g/일을 6개월 투여하는 이중맹검 RCT입니다. 공개 논문은 모집 가능성을 다룬 것이며 효능 결과는 아직 아닙니다. 따라서 현재 CA-AKG의 인간 항노화 근거는 ‘기전과 동물은 강하지만 임상은 미완성’으로 보는 편이 정확합니다.</p>
<div class="takeaway"><strong>근거 판정</strong><p><b>동물: 강한 초기 신호 · 인간 관찰: 흥미로움 · 인간 RCT: 결과 대기.</b> CA-AKG는 앞으로 결과가 바뀔 가능성이 큰 주제입니다.</p></div><h2>근거자료 — 발표 시간순</h2><div class="timeline">${paper('2020','Asadi Shahmirzadi A, et al. Cell Metabolism.','늙은 생쥐에서 CaAKG가 노쇠와 염증을 낮추고 건강수명·수명 지표를 개선.','https://pubmed.ncbi.nlm.nih.gov/32877690/')} ${paper('2021','Demidenko O, et al. Aging.','CA-AKG 복합제 사용자 42명의 비무작위 전후 연구. DNA 메틸화 나이 감소 보고, 대조군 부재.','https://pubmed.ncbi.nlm.nih.gov/34847066/')} ${paper('2022','AKG dietary supplementation review.','인간 노화·노화질환에 대한 최신 임상 근거가 아직 부족하다고 평가.','https://pubmed.ncbi.nlm.nih.gov/34952764/')} ${paper('2025','ABLE trial recruitment paper.','40–60세 120명, 지속방출 CA-AKG 1 g/일 6개월 RCT의 모집·설계 보고. 효능 결과는 별도 대기.','https://pubmed.ncbi.nlm.nih.gov/40819772/')} ${paper('2026','AKG cellular homeostasis review.','미토콘드리아·후성유전·면역·염증 경로를 정리하면서 인간 장기 임상 근거 부족을 강조.','https://pubmed.ncbi.nlm.nih.gov/42072377/')}</div><p class="editor-note">최종 근거 검토: 2026-10-08.</p>`
});

upsert('resveratrol-evidence',{
 date:'2023-08-04',
 title:'레스베라트롤은 ‘적포도주의 장수 성분’일까? — 시르투인 신화와 인체 연구',
 excerpt:'작은 임상시험은 대사 개선을 보여줬고 다른 시험은 아무 효과도 보이지 않았습니다. 항염 신호는 있지만 인간 수명 연장은 입증되지 않았습니다.',
 tags:['Resveratrol','레스베라트롤','SIRT1','폴리페놀','염증','대사'],
 html:`<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-08-04 · <a href="https://myepic2.tistory.com/24" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a></p><div class="takeaway"><strong>30초 핵심 요약</strong><p>레스베라트롤은 포도 껍질 등에 존재하는 폴리페놀입니다. 동물·세포 연구에서 AMPK·SIRT1·미토콘드리아와 연결되며 ‘칼로리 제한 모방체’로 유명해졌습니다. 사람에서는 일부 대사·염증 지표가 좋아진 메타분석이 있지만 시험 간 결과가 엇갈리고, <b>건강한 사람의 수명 연장을 보여준 임상시험은 없습니다.</b></p></div>
<h2>프렌치 패러독스에서 시르투인까지</h2><p>레스베라트롤은 적포도주 이야기로 대중화됐지만, 보충제 연구의 용량은 와인으로 현실적으로 얻기 어려울 정도로 높은 경우가 많습니다. 따라서 ‘와인을 마시면 레스베라트롤로 장수한다’는 단순한 이야기는 성립하지 않습니다.</p>
<h2>2011년: 사람에서도 칼로리 제한 같은 변화?</h2><p>비만 남성 11명을 대상으로 150 mg/일을 30일 투여한 교차시험에서는 혈압·간지방·혈당·중성지방·염증 지표가 일부 개선됐고 근육 AMPK·SIRT1 관련 변화도 관찰됐습니다. 매우 흥미로웠지만 표본이 11명뿐이었습니다.</p>
<h2>2013년: 바로 나온 반대 결과</h2><p>비만 남성 24명에게 고용량 레스베라트롤을 4주 투여한 다른 RCT에서는 인슐린 감수성, 혈압, 체지방, 염증·대사 지표에 유의한 효과가 없었습니다. 이 두 연구는 ‘작은 생리학적 시험 하나로 결론을 내리면 안 되는 이유’를 잘 보여줍니다.</p>
<h2>메타분석에서는 무엇이 남았나?</h2><p>2024년 19개 메타분석, 81개 고유 RCT·4,088명을 다시 종합한 umbrella meta-analysis에서는 CRP와 TNF-α가 낮아지고 BMI·허리둘레가 소폭 개선되는 신호가 나왔지만 IL-6와 체중은 일관되지 않았습니다. 2025년 SIRT1 메타분석은 레스베라트롤이 사람의 SIRT1 지표를 높일 가능성을 분석했지만, 이것 역시 ‘수명 연장’과는 다른 대리지표입니다.</p>
<div class="takeaway"><strong>항노화 관점</strong><p>레스베라트롤의 가장 좋은 설명은 <b>‘기전은 매력적이고 일부 대사·항염 효과가 있으나, 인간 장수제로 입증되지는 않은 폴리페놀’</b>입니다.</p></div><h2>근거자료 — 발표 시간순</h2><div class="timeline">${paper('2011','Timmers S, et al. Cell Metabolism.','비만 남성 11명 교차시험, 150 mg/일 30일. 대사·미토콘드리아 관련 여러 개선 신호.','https://pubmed.ncbi.nlm.nih.gov/22055504/')} ${paper('2013','Poulsen MM, et al. Diabetes.','비만 남성 24명 RCT. 고용량 4주 후 인슐린 감수성·혈압·염증 등 유의한 효과 없음.','https://pubmed.ncbi.nlm.nih.gov/23193181/')} ${paper('2021','T2DM systematic review/meta-analysis.','17개 RCT·871명. 당뇨 환자에서 일부 혈당·혈압·지질 지표 개선 신호.','https://pubmed.ncbi.nlm.nih.gov/34666902/')} ${paper('2024','Umbrella meta-analysis of inflammation.','81개 고유 RCT·4,088명. CRP·TNF-α 감소 신호, IL-6는 유의하지 않음.','https://pubmed.ncbi.nlm.nih.gov/38374352/')} ${paper('2025','Mansouri F, et al. SIRT1 meta-analysis.','사람 RCT의 SIRT1 변화를 종합. 기전 표지자 개선 가능성과 근거 확실성을 평가.','https://pubmed.ncbi.nlm.nih.gov/40158656/')}</div><p class="editor-note">최종 근거 검토: 2026-10-08.</p>`
});

upsert('anthocyanin-evidence',{
 date:'2024-03-10',
 title:'안토시아닌: 보라색 음식은 정말 혈관과 뇌를 젊게 할까?',
 excerpt:'베리류의 색소인 안토시아닌은 지질·내피기능·일부 염증과 인지 지표에서 유망하지만, 효과는 제품·용량·대상에 따라 크게 달라집니다.',
 tags:['Anthocyanin','안토시아닌','베리','폴리페놀','염증','인지','혈관'],
 html:`<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2024-03-10 · <a href="https://myepic2.tistory.com/44" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a></p><figure class="story-photo"><img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Strawberries.jpg" alt="붉은 딸기" loading="lazy"><figcaption>안토시아닌은 붉은색·보라색·푸른색을 만드는 식물 색소군입니다. 실제 식품에는 안토시아닌 외에도 다양한 폴리페놀과 영양소가 함께 있습니다. 사진: USDA/Wikimedia Commons.</figcaption></figure><div class="takeaway"><strong>30초 핵심 요약</strong><p>안토시아닌은 ‘항산화제’라는 한 단어로 설명하기보다 <b>혈관·지질·당대사·염증 신호에 영향을 줄 수 있는 식이 폴리페놀</b>로 보는 편이 정확합니다. 메타분석에서는 LDL·중성지방·내피기능과 일부 염증지표 개선이 보고됐지만, 혈압·인지 효과는 연구마다 차이가 큽니다.</p></div>
<h2>색이 곧 약은 아니다</h2><p>블루베리·블랙커런트·아로니아·포도·딸기 등에는 서로 다른 안토시아닌이 들어 있습니다. ‘베리 연구’와 ‘정제 안토시아닌 캡슐 연구’는 성분이 다르기 때문에 결과를 한데 섞으면 안 됩니다.</p>
<h2>혈관과 대사: 비교적 일관된 영역</h2><p>2022년 umbrella review는 관찰연구와 임상시험 메타분석을 종합해 안토시아닌이 지질, 당대사, 내피기능에 유리한 방향을 보인다고 정리했습니다. 반면 혈압은 일관된 개선이 없었습니다. 즉 ‘혈관에 좋다’는 말을 혈압 한 숫자로만 판단하면 안 됩니다.</p>
<h2>염증: 긍정 연구와 반대 연구가 동시에 존재</h2><p>2020년 32개 RCT 메타분석은 CRP·IL-6·TNF-α 감소를 보고했고, 2024년 정제 안토시아닌 메타분석도 비슷한 방향을 보였습니다. 그러나 2025년 GRADE 평가 메타분석에서는 IL-1β·TNF-α·IL-6 전체 효과가 유의하지 않았고 이질성이 매우 컸습니다. 따라서 항염 효과는 ‘가능하지만 확정적이지 않다’가 적절합니다.</p>
<h2>뇌 건강: 작은 신호, 큰 기대는 금물</h2><p>2025년 30개 RCT를 체계적으로 검토한 연구에서는 일부 기억·학습·집행기능에서 개선 신호가 관찰됐지만, 메타분석 가능한 연구는 14개·733명 수준이었습니다. 2026년 치매 위험군 99명을 대상으로 한 24주 RCT에서는 320 mg/일 안토시아닌의 심혈관·염증 바이오마커 효과를 추가 분석했습니다. 아직 치매 예방을 입증한 수준은 아닙니다.</p>
<div class="takeaway"><strong>LONGEVITY JOURNAL의 판정</strong><p><b>‘베리류를 식단에 포함하는 것’은 합리적이지만, 고용량 안토시아닌 보충제를 항노화제로 부르기에는 근거가 부족합니다.</b></p></div><h2>근거자료 — 발표 시간순</h2><div class="timeline">${paper('2018','Anthocyanin lipid/inflammation meta-analysis.','17개 RCT. 중성지방·LDL 감소, HDL 증가 신호. 염증 결과는 지표별 차이.','https://pubmed.ncbi.nlm.nih.gov/29850238/')} ${paper('2020','Fallah AA, et al. Food Chem Toxicol.','32개 RCT 메타분석. CRP·IL-6·TNF-α 등 일부 염증·혈관 접착분자 감소.','https://pubmed.ncbi.nlm.nih.gov/31669599/')} ${paper('2022','Health benefits of anthocyanins umbrella review.','RCT·관찰연구 메타분석을 종합해 지질·당대사·내피기능 개선 신호, 혈압은 일관되지 않음.','https://pubmed.ncbi.nlm.nih.gov/34725704/')} ${paper('2025','Lorzadeh E, et al. cognition meta-analysis.','30개 RCT 체계적 검토, 14개·733명 메타분석. 일부 인지영역 개선 신호.','https://pubmed.ncbi.nlm.nih.gov/39875765/')} ${paper('2026','Anthocyanins in People at Risk for Dementia.','60–80세 위험군 99명, 320 mg/일 24주 RCT의 심혈관·염증 바이오마커 2차 분석.','https://pubmed.ncbi.nlm.nih.gov/40314845/')}</div><p class="editor-note">최종 근거 검토: 2026-10-08.</p>`
});

upsert('mct-oil-evidence',{
 date:'2023-07-29',
 title:'MCT Oil: 투명한 기름 한 스푼이 뇌의 연료를 바꿀 수 있을까?',
 excerpt:'MCT 오일은 무색에 가깝고 향이 거의 없는 정제 오일입니다. 케톤 생성은 확실하지만, 체중·인지·항노화 효과는 그보다 훨씬 복잡합니다.',
 tags:['MCT Oil','중쇄지방','Ketone','케톤','인지','대사'],
 html:`<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-07-29 · <a href="https://myepic2.tistory.com/15" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a></p><div class="takeaway"><strong>30초 핵심 요약</strong><p>정제 MCT 오일은 일반적으로 <b>투명하고 거의 무색·무취</b>입니다. C8·C10 중쇄지방은 긴 사슬 지방보다 빠르게 간으로 이동해 케톤 생성을 쉽게 높입니다. ‘케톤을 올린다’는 효과는 비교적 확실하지만, 이것이 곧 체지방 감소·치매 치료·수명 연장을 의미하지는 않습니다.</p></div>
<div class="evidence-grid"><div class="evidence-card"><b>C8</b><span>caprylic acid. 케톤 생성력이 상대적으로 강한 편.</span></div><div class="evidence-card"><b>C10</b><span>capric acid. 역시 MCT에 포함되며 C8과 대사 속도·효과가 다름.</span></div><div class="evidence-card"><b>코코넛오일 ≠ MCT오일</b><span>코코넛오일은 다양한 지방산 혼합물. 정제 MCT 오일과 동일하지 않습니다.</span></div></div>
<h2>왜 뇌 연구에서 MCT가 등장했을까?</h2><p>알츠하이머병에서는 뇌의 포도당 이용이 떨어질 수 있지만 케톤은 대체 연료로 사용할 수 있습니다. 그래서 MCT로 혈중 케톤을 올리면 일부 뇌세포의 에너지 부족을 우회할 수 있다는 가설이 생겼습니다.</p>
<h2>인지기능: ‘가능성 있음’과 ‘치료제’ 사이</h2><p>2019년 메타분석은 422명 규모 연구들을 종합해 MCT가 케톤을 높이고 일부 인지척도에서 작은 개선을 보인다고 보고했습니다. 2023년 MCI·알츠하이머 환자 대상 메타분석도 전반적 인지에서 개선 신호를 보였지만 기억·언어·주의 영역은 일관되지 않았습니다. 2024년 체계적 문헌고찰은 프로토콜 이질성·편향·이해관계 문제를 지적하며 증거를 낮게 평가했습니다.</p>
<h2>2025년 12개월 RCT</h2><p>중국의 MCI 환자 280명에게 MCT, DHA, MCT+DHA, 위약을 12개월 투여한 연구에서는 MCT군을 포함한 중재군에서 일부 인지 점수와 케톤·미토콘드리아 관련 지표가 개선됐습니다. 하지만 한 연구만으로 장기 치매 예방이나 치료를 확정할 수는 없습니다.</p>
<h2>항노화 효과는?</h2><p>MCT가 케톤을 올린다는 사실과 ‘노화를 늦춘다’는 주장은 큰 거리가 있습니다. 현재 인간에서 건강수명·사망률·생물학적 나이를 개선한다는 강한 근거는 없습니다. 체중 감량도 총칼로리·식사대체 여부에 따라 달라집니다.</p>
<h2>실사용에서 가장 흔한 문제</h2><p>한 번에 많은 양을 먹으면 복통·설사·메스꺼움이 흔합니다. 공복에 먹는 것이 특별한 항노화 이점을 준다는 근거도 없습니다.</p>
<div class="takeaway"><strong>근거 판정</strong><p><b>케톤 생성: 강함 · 일부 MCI 인지효과: 가능성 · 체중감량: 조건부 · 항노화/수명: 미확립.</b></p></div><h2>근거자료 — 발표 시간순</h2><div class="timeline">${paper('2019','Avgerinos KI, et al. MCT cognition meta-analysis.','MCI/알츠하이머 연구 422명. 케톤 증가와 일부 인지지표 개선 신호.','https://pubmed.ncbi.nlm.nih.gov/31870908/')} ${paper('2023','MCT for AD-related cognitive impairment meta-analysis.','10개 연구. 전반적 인지에서 개선 신호, 개별 기억·언어·주의는 불명확.','https://pubmed.ncbi.nlm.nih.gov/37248908/')} ${paper('2024','MCTs for dementia-related diseases systematic review.','21개 연구. 케톤·뇌대사 증가는 분명하지만 인지효과는 부분적이고 연구 질 한계 큼.','https://pubmed.ncbi.nlm.nih.gov/38715705/')} ${paper('2025','MCT+DHA randomized trial in MCI.','MCI 280명, 12개월. MCT·DHA·병용군에서 일부 인지·대사지표 개선.','https://pubmed.ncbi.nlm.nih.gov/40044083/')}</div><p class="editor-note">최종 근거 검토: 2026-10-08. MCT 오일 이미지는 코코넛오일처럼 불투명하게 표현하지 않습니다.</p>`
});

upsert('aspirin-evidence',{
 date:'2026-10-08',
 title:'아스피린을 매일 먹으면 오래 살까? — ‘예방약’이라는 오래된 믿음의 재평가',
 excerpt:'심근경색을 막을 수 있지만 출혈을 늘릴 수도 있습니다. 특히 건강한 고령자의 일차예방에서는 이익보다 손해가 커질 수 있습니다.',
 tags:['Aspirin','아스피린','심혈관','출혈','일차예방','Clinical Prevention'],
 html:`<div class="takeaway"><strong>30초 핵심 요약</strong><p>아스피린은 영양제가 아니라 <b>항혈소판 의약품</b>입니다. 이미 심근경색·뇌경색 등 심혈관질환이 있는 사람의 이차예방에서는 매우 중요한 약이지만, 질환이 없는 사람이 ‘장수 목적’으로 시작하는 문제는 완전히 다릅니다. 특히 고령자의 일차예방에서는 주요 출혈 위험 때문에 일상적 복용이 권장되지 않습니다.</p></div>
<h2>왜 한때 ‘건강한 사람도 먹는 약’이 됐을까?</h2><p>혈소판의 COX-1을 비가역적으로 억제해 혈전 형성을 줄이기 때문에 심근경색·허혈성 뇌졸중 예방 효과가 있습니다. 동시에 위장관·두개내 출혈 위험도 높입니다. 따라서 핵심은 ‘효과가 있느냐’가 아니라 <b>누구에게 이익이 출혈 위험보다 큰가</b>입니다.</p>
<h2>2018년 ASPREE: 건강한 고령자에게 던진 충격</h2><p>70세 이상 건강한 노인을 중심으로 한 ASPREE에서 저용량 아스피린은 장애 없는 생존을 늘리지 못했습니다. 오히려 주요 출혈이 증가했고 전체 사망률에서도 예상치 못한 불리한 신호가 보고됐습니다. 이후 ‘나이 들면 예방으로 아스피린’이라는 관행은 크게 수정됐습니다.</p>
<h2>일차예방 메타분석의 결론</h2><p>2021년 21개 무작위시험, 17만 명 이상을 종합한 분석에서는 심혈관 사건 감소와 출혈 증가가 동시에 나타났고 전체 사망 이득은 뚜렷하지 않았습니다. 연령이 높을수록 출혈 부담이 더 중요해집니다.</p>
<h2>암 예방은?</h2><p>과거 장기 추적 연구에서 대장암 감소 가능성이 주목받았지만, 이를 근거로 건강한 사람이 임의 복용을 시작하기에는 불확실성이 큽니다. 최신 예방 권고는 심혈관·출혈 위험을 우선해 판단하며, 암 예방만을 위한 시작을 일반화하지 않습니다.</p>
<div class="takeaway"><strong>LONGEVITY JOURNAL의 판정</strong><p><b>아스피린은 항노화 보충제가 아닙니다.</b> 이미 심혈관질환이 있는 환자의 처방은 임의로 중단해서도 안 되고, 질환이 없는 사람이 장수 목적으로 시작해서도 안 됩니다. 개인 위험도에 따라 의료진이 판단할 약입니다.</p></div><h2>근거자료 — 발표 시간순</h2><div class="timeline">${paper('2018','McNeil JJ, et al. ASPREE · NEJM.','건강한 고령자에서 저용량 아스피린이 장애 없는 생존을 연장하지 못함.','https://pubmed.ncbi.nlm.nih.gov/30221596/')} ${paper('2021','Primary prevention meta-analysis.','21개 RCT·173,810명. 허혈성 사건 감소와 주요 출혈 증가가 공존, 전체 사망 이득은 뚜렷하지 않음.','https://pubmed.ncbi.nlm.nih.gov/34638150/')} <div class="paper"><time>2022</time><div><b>U.S. Preventive Services Task Force.</b><br>일차예방 아스피린 시작은 연령·심혈관 위험·출혈 위험을 함께 고려하도록 권고. 고령자에서 새로 시작하는 이익이 제한적.<br><a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/aspirin-to-prevent-cardiovascular-disease-preventive-medication" target="_blank" rel="noopener noreferrer">USPSTF recommendation ↗</a></div></div></div><p class="editor-note">의약품 정보입니다. 현재 복용 중인 처방 아스피린은 본 글만 보고 중단하거나 용량을 바꾸면 안 됩니다.</p>`
});

upsert('tmg-betaine-evidence',{
 date:'2026-10-08',
 title:'TMG(베타인): 메틸화를 돕는다고 노화도 늦출까?',
 excerpt:'TMG는 호모시스테인을 낮추는 효과가 확실하지만, 동시에 LDL·총콜레스테롤이 올라갈 수 있습니다. ‘메틸화 = 항노화’는 지나친 단순화입니다.',
 tags:['TMG','Betaine','베타인','호모시스테인','메틸화','NAD'],
 html:`<div class="takeaway"><strong>30초 핵심 요약</strong><p>TMG(trimethylglycine)는 베타인이라고도 하며, BHMT 경로에서 호모시스테인에 메틸기를 전달해 메티오닌으로 재생하는 데 관여합니다. 고용량 보충은 호모시스테인을 낮추지만, 메타분석에서는 <b>총콜레스테롤과 LDL이 오르는 신호</b>도 보고됐습니다. NMN·NR과 함께 먹으면 ‘메틸기를 보충한다’는 논리는 생화학적으로 그럴듯하지만, 건강한 사람의 노화 억제 효과는 입증되지 않았습니다.</p></div>
<h2>메틸화는 무엇이고 왜 TMG가 등장할까?</h2><p>메틸기 전달은 DNA·단백질·신경전달물질 합성 등 수많은 반응에 필요합니다. TMG는 간·신장에서 homocysteine을 methionine으로 되돌리는 대체 경로에 메틸기를 제공합니다. 그래서 혈중 호모시스테인을 낮추는 용도로 오래 연구됐습니다.</p>
<h2>효과가 가장 확실한 지표: 호모시스테인</h2><p>2006년 인간 약동학 시험에서 1·3·6 g 용량에 따라 혈중 베타인이 상승했고 호모시스테인에 급성 변화가 관찰됐습니다. 2013년 5개 RCT 메타분석에서는 4 g/일 이상을 6주 이상 사용했을 때 호모시스테인이 평균 약 1.23 μmol/L 낮아졌습니다.</p>
<h2>그런데 심혈관 건강에 무조건 좋을까?</h2><p>2021년 메타분석에서는 호모시스테인은 감소했지만 총콜레스테롤은 약 14 mg/dL, LDL은 약 10 mg/dL 증가했습니다. 즉 하나의 위험표지자를 낮추는 동시에 다른 지표를 악화시킬 수 있습니다. 생화학 경로 하나만 보고 ‘심혈관에 좋다’고 결론 내리면 안 되는 이유입니다.</p>
<h2>NMN과 함께 먹어야 할까?</h2><p>NAD 대사가 증가하면 니코틴아마이드의 메틸화·배설 경로가 관여하기 때문에 TMG를 같이 복용해야 한다는 주장이 온라인에서 흔합니다. 그러나 일반적인 NMN 용량에서 TMG 병용이 장기 임상 결과나 안전성을 개선한다는 대규모 RCT 근거는 없습니다.</p>
<div class="takeaway"><strong>근거 판정</strong><p><b>호모시스테인 감소: 비교적 확실 · 심혈관 이득: 불확실 · LDL 상승: 주의 신호 · 항노화: 미확립.</b></p></div><h2>근거자료 — 발표 시간순</h2><div class="timeline">${paper('2006','Schwab U, et al. J Nutr.','건강한 성인에서 1·3·6 g TMG의 약동학과 호모시스테인 급성 반응.','https://pubmed.ncbi.nlm.nih.gov/16365055/')} ${paper('2013','Betaine supplementation meta-analysis.','5개 RCT. ≥4 g/일, 6주 이상에서 호모시스테인 평균 1.23 μmol/L 감소.','https://pubmed.ncbi.nlm.nih.gov/23997720/')} ${paper('2021','CVD markers systematic review/meta-analysis.','호모시스테인 감소와 함께 총콜레스테롤·LDL 증가가 관찰됨.','https://pubmed.ncbi.nlm.nih.gov/33764214/')}</div><p class="editor-note">최종 근거 검토: 2026-10-08. 보충제의 ‘메틸화 지원’이라는 표현과 실제 임상적 이득을 구분합니다.</p>`
});

upsert('hiit-evidence-guide',{
 date:'2023-07-29',
 title:'HIIT는 최고의 항노화 운동일까? — VO₂max, 심장, 염증 그리고 오래 움직이는 능력',
 excerpt:'HIIT는 짧은 시간에 VO₂max를 크게 끌어올리는 효율적인 방법입니다. 다만 사망률·염증·부상까지 보면 ‘무조건 세게’가 답은 아닙니다.',
 tags:['HIIT','고강도 인터벌','VO2max','운동','Inflammaging','Exercise Science'],
 html:`<p class="editor-note"><strong>아카이브:</strong> My EPIC2 원문 2023-07-29 · <a href="https://myepic2.tistory.com/17" target="_blank" rel="noopener noreferrer">원문 보기 ↗</a></p><div class="takeaway"><strong>30초 핵심 요약</strong><p>HIIT는 짧은 고강도 구간과 회복 구간을 반복하는 운동입니다. 특히 <b>VO₂max/VO₂peak</b> 개선 효과가 크고 시간 효율성이 뛰어납니다. 노년층 메타분석에서도 심폐체력·혈압·체지방·근기능 개선이 확인됩니다. 그러나 ‘HIIT만 하면 더 오래 산다’는 직접 증거는 없으며, 운동 수준·부상 위험·심혈관 상태에 맞춘 강도 조절이 중요합니다.</p></div>
<h2>왜 VO₂max가 항노화 이야기의 중심에 있을까?</h2><p>VO₂max는 심장·폐·혈관·근육이 산소를 전달하고 사용하는 통합 능력입니다. 낮은 심폐체력은 사망위험과 강하게 연관되기 때문에 건강수명의 핵심 지표로 여겨집니다. HIIT의 가장 확실한 장점은 이 지표를 효율적으로 개선한다는 점입니다.</p>
<h2>노년층에서도 효과가 있을까?</h2><p>2024년 44개 RCT·1,863명을 종합한 메타분석에서는 HIIT가 비운동군에 비해 심폐체력, 안정시 심박수, 수축기혈압, 체지방률, 근력·근지구력·균형을 개선했습니다. 다른 운동과 비교해도 심폐체력에서 작은 추가 이점이 있었습니다.</p>
<h2>5년 동안 하면 더 오래 살까?</h2><p>노르웨이 Generation 100 연구는 70–77세 1,567명을 HIIT, 중강도 지속운동, 일반 신체활동 권고군으로 나눠 5년 추적했습니다. 전체적으로 운동 두 군을 합쳤을 때 사망률이 대조군보다 유의하게 낮지는 않았습니다. HIIT군은 낮은 사망률 ‘경향’을 보였지만 신뢰구간이 넓어 확정적이지 않았습니다.</p>
<h2>염증과 inflammaging</h2><p>운동은 단발성 세션 직후 IL-6 같은 신호가 일시적으로 오를 수 있지만 장기적으로는 만성 저등급 염증을 낮추는 적응을 유도할 수 있습니다. 2025년 umbrella review는 다양한 장기 운동이 노년층의 CRP·TNF-α를 낮추는 경향을 보였다고 정리했습니다. HIIT만의 독점적 효과라기보다 ‘지속적인 운동’ 자체가 중요한 것으로 보입니다.</p>
<h2>실전 원칙: HIIT는 ‘최대 노력’과 동의어가 아니다</h2><p>초보자가 매번 전력질주할 필요는 없습니다. 연구의 HIIT는 흔히 85–95% HRmax 또는 높은 자각강도의 구간을 사용합니다. 워밍업·회복·점진적 증가가 필수이며, 심혈관질환이나 운동 중 흉통·실신 병력이 있다면 의료 평가가 우선입니다.</p>
<div class="evidence-grid"><div class="evidence-card"><b>가장 확실</b><span>VO₂max·심폐체력 향상</span></div><div class="evidence-card"><b>좋은 신호</b><span>혈압·체지방·일부 대사·염증 지표</span></div><div class="evidence-card"><b>아직 미확립</b><span>HIIT 자체의 수명 연장 효과, 하나의 최적 프로토콜</span></div></div>
<div class="takeaway"><strong>LONGEVITY JOURNAL의 결론</strong><p>항노화 운동의 핵심은 ‘HIIT라는 브랜드’가 아니라 <b>심폐체력을 높이고, 근육을 유지하며, 장기간 지속할 수 있는 운동 조합</b>입니다. HIIT는 그중 매우 강력하고 시간 효율적인 도구입니다.</p></div><h2>근거자료 — 발표 시간순</h2><div class="timeline">${paper('2020','Stensvold D, et al. Generation 100 · BMJ.','70–77세 1,567명 5년 RCT. HIIT군에서 낮은 사망률 경향은 있었지만 전체 운동군의 사망률 우월성은 확정되지 않음.','https://pubmed.ncbi.nlm.nih.gov/33028588/')} ${paper('2022','Exercise modes and inflammation in elderly meta-analysis.','31개 연구. HIIT 포함 여러 운동형태가 IL-6·TNF-α·CRP 감소와 연관.','https://pubmed.ncbi.nlm.nih.gov/36012088/')} ${paper('2024','Liang W, et al. Sports Med Open.','44개 RCT·1,863명. HIIT가 노년층 심폐체력·혈압·체지방·근기능·균형 개선.','https://pubmed.ncbi.nlm.nih.gov/39266933/')} ${paper('2024','HIIT vs MICT in older adults meta-analysis.','29개 시험·1,227명. 다수 지표는 비슷했고 고품질 시험에서는 HIIT의 심폐체력 이점이 더 큼.','https://pubmed.ncbi.nlm.nih.gov/38718488/')} ${paper('2025','Exercise and inflammaging umbrella review.','노년층 장기 운동이 CRP·TNF-α를 낮추고 IL-6도 일부 개선. HIIT만의 효과로 한정되지는 않음.','https://pubmed.ncbi.nlm.nih.gov/40894417/')} ${paper('2026','HIIT in older adults systematic review.','약 2,818명 규모. 심폐체력 개선은 가장 일관적이나 최적 프로토콜·안전성 우월성은 미확립.','https://pubmed.ncbi.nlm.nih.gov/42739706/')}</div><p class="editor-note">최종 근거 검토: 2026-10-08. 운동 처방은 개인의 심혈관 상태와 훈련 경험에 맞춰야 합니다.</p>`
});
})();
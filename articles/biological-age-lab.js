(()=>{
const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
if(posts.some(x=>x.slug==='biological-age-lab'))return;
const paper=(year,title,body,url,label='Source')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
posts.push({
  slug:'biological-age-lab',
  category:'health',
  date:'2026-10-11',
  title:'Biological Age Lab — 건강검진 + Garmin으로 나의 건강수명 프로필 계산하기',
  excerpt:'일반 종합건진 결과와 Garmin VO₂max만으로 혈압·혈당·지질·복부비만·신장·심폐체력을 평가합니다. ApoB는 선택사항이며 없으면 non-HDL-C를 자동 계산하고, CRP가 있을 때만 Levine PhenoAge 정밀 계산을 제공합니다.',
  tags:['Biological Age Lab','생체나이 계산','건강검진','Garmin','VO2max','PhenoAge','non-HDL-C','ApoB','HbA1c','공복혈당','eGFR','혈압','허리둘레','Healthspan','Biomarker','Longevity'],
  html:`
<style>
#bioage-lab{--ba-ink:#20312c;--ba-muted:#65736c;--ba-accent:#26735d;--ba-soft:#eef4ef;--ba-line:#d9ded6;--ba-card:#fffefa;margin:28px 0 0}
#bioage-lab *{box-sizing:border-box}#bioage-lab .ba-hero{padding:28px;border:1px solid var(--ba-line);border-radius:18px;background:linear-gradient(145deg,#f8fbf7,#edf5ef)}
#bioage-lab .ba-kicker{font-size:12px;letter-spacing:1.7px;font-weight:800;color:var(--ba-accent)}#bioage-lab .ba-hero h2{font:700 34px/1.25 Georgia,serif;margin:8px 0 12px}
#bioage-lab .ba-note{color:var(--ba-muted);font-size:14px;line-height:1.75}#bioage-lab .ba-privacy{display:inline-block;margin-top:10px;padding:7px 11px;border-radius:999px;background:white;border:1px solid var(--ba-line);font-size:12px;color:var(--ba-muted)}
#bioage-lab .ba-panel{margin-top:22px;padding:24px;border:1px solid var(--ba-line);border-radius:16px;background:var(--ba-card)}#bioage-lab .ba-panel h3{margin:0 0 8px;font-size:22px}#bioage-lab .ba-panel>p{color:var(--ba-muted);margin:0 0 18px}
#bioage-lab .ba-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 16px}#bioage-lab .ba-grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}
#bioage-lab label{display:block;font-size:12px;font-weight:750;color:var(--ba-muted);margin-bottom:5px}#bioage-lab input,#bioage-lab select{width:100%;padding:11px 12px;border:1px solid var(--ba-line);border-radius:10px;background:white;color:var(--ba-ink);font:inherit}
#bioage-lab .ba-field small{display:block;margin-top:4px;color:#7b8781;font-size:11px}#bioage-lab .ba-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:17px}
#bioage-lab button{border:0;border-radius:999px;padding:11px 17px;font-weight:800;cursor:pointer;background:var(--ba-ink);color:white}#bioage-lab button.ba-secondary{background:white;color:var(--ba-ink);border:1px solid var(--ba-line)}
#bioage-lab .ba-results{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:18px}#bioage-lab .ba-result{padding:17px;border-radius:14px;background:var(--ba-soft);min-height:105px}#bioage-lab .ba-result b{display:block;font-size:11px;letter-spacing:.7px;color:var(--ba-muted);margin-bottom:7px}#bioage-lab .ba-result strong{font:700 27px Georgia,serif}#bioage-lab .ba-result span{display:block;font-size:12px;color:var(--ba-muted);margin-top:4px}
#bioage-lab .ba-scoreline{margin-top:14px;padding:15px;border:1px solid var(--ba-line);border-radius:12px}#bioage-lab .ba-scorehead{display:flex;justify-content:space-between;gap:12px;align-items:center}#bioage-lab .ba-track{height:9px;border-radius:999px;background:#e5ebe6;overflow:hidden;margin-top:9px}#bioage-lab .ba-fill{height:100%;width:0;background:var(--ba-accent);transition:width .25s ease}
#bioage-lab .ba-priority{margin:14px 0 0;padding-left:19px}#bioage-lab .ba-priority li{margin:7px 0;color:var(--ba-muted)}#bioage-lab .ba-warning{margin-top:16px;padding:14px;border-left:3px solid var(--ba-accent);background:#f6f8f5;color:var(--ba-muted);font-size:13px;line-height:1.65}
#bioage-lab .ba-compare{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:15px}#bioage-lab .ba-comparebox{padding:16px;border:1px solid var(--ba-line);border-radius:14px}#bioage-lab .ba-comparebox strong{font:700 30px Georgia,serif}
#bioage-lab .ba-dna{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}#bioage-lab .ba-dna>div{padding:15px;border-radius:12px;background:#f6f8f5;border:1px solid var(--ba-line)}
#bioage-lab .ba-pill{display:inline-block;border:1px solid var(--ba-line);border-radius:999px;padding:5px 9px;font-size:11px;color:var(--ba-muted);margin:3px 5px 3px 0;background:white}
@media(max-width:720px){#bioage-lab .ba-grid,#bioage-lab .ba-grid.three,#bioage-lab .ba-results,#bioage-lab .ba-compare,#bioage-lab .ba-dna{grid-template-columns:1fr}#bioage-lab .ba-hero{padding:21px}#bioage-lab .ba-hero h2{font-size:29px}}
</style>
<div id="bioage-lab">
  <div class="ba-hero">
    <div class="ba-kicker">LONGEVITY JOURNAL · BIOLOGICAL AGE LAB</div>
    <h2>건강검진표와 Garmin만 있으면 시작할 수 있습니다.</h2>
    <p class="ba-note"><b>LEVEL 1</b>은 일반 종합건진 + Garmin Instinct/Forerunner 등의 VO₂max로 건강수명 위험 프로필을 계산합니다. <b>ApoB는 선택</b>이며 없으면 총콜레스테롤과 HDL에서 <b>non-HDL-C를 자동 계산</b>합니다. <b>LEVEL 2</b>는 CRP를 포함한 상세 혈액검사가 있을 때만 논문 기반 Levine PhenoAge를 계산합니다.</p>
    <span class="ba-privacy">🔒 모든 입력값은 현재 브라우저 안에서만 계산되며 서버로 전송하거나 저장하지 않습니다.</span>
  </div>

  <div class="ba-panel">
    <h3>LEVEL 1. 건강검진 + Garmin Healthspan Profile</h3>
    <p>검진 결과지에서 찾기 쉬운 항목을 우선 사용합니다. 빈칸은 가능한 범위에서 자동으로 제외해 재가중하며, <b>숫자를 억지로 ‘생체나이 몇 세’로 변환하지 않고</b> 어떤 영역이 강하고 약한지를 보여줍니다.</p>
    <div style="margin-bottom:14px"><span class="ba-pill">필수에 가까움: 나이·성별·키·허리·혈압</span><span class="ba-pill">일반검진: 혈당·지질·Creatinine</span><span class="ba-pill">Garmin: VO₂max·안정시 심박수</span><span class="ba-pill">선택검사: ApoB</span></div>
    <div class="ba-grid three">
      <div class="ba-field"><label>연대기 나이</label><input id="ba-age" type="number" min="20" max="100" placeholder="예: 46"></div>
      <div class="ba-field"><label>성별</label><select id="ba-sex"><option value="male">남성</option><option value="female">여성</option></select></div>
      <div class="ba-field"><label>키 (cm)</label><input id="ba-height" type="number" min="120" max="220" placeholder="예: 170"></div>
      <div class="ba-field"><label>허리둘레 (cm)</label><input id="ba-waist" type="number" min="45" max="180" step="0.1" placeholder="예: 80"></div>
      <div class="ba-field"><label>수축기 / 이완기 혈압</label><div style="display:grid;grid-template-columns:1fr 1fr;gap:7px"><input id="ba-sbp" type="number" min="70" max="240" placeholder="SBP"><input id="ba-dbp" type="number" min="40" max="150" placeholder="DBP"></div></div>
      <div class="ba-field"><label>공복혈당 (mg/dL)</label><input id="ba-fpg" type="number" min="40" max="400" step="1" placeholder="예: 92"><small>HbA1c가 있으면 HbA1c를 우선 사용</small></div>
      <div class="ba-field"><label>HbA1c (%) · 선택</label><input id="ba-a1c" type="number" min="3.5" max="15" step="0.1" placeholder="예: 5.4"></div>
      <div class="ba-field"><label>총콜레스테롤 (mg/dL)</label><input id="ba-tc" type="number" min="60" max="500" step="1" placeholder="예: 185"></div>
      <div class="ba-field"><label>HDL-C (mg/dL)</label><input id="ba-hdl" type="number" min="10" max="150" step="1" placeholder="예: 60"><small>총콜레스테롤 − HDL = non-HDL-C 자동 계산</small></div>
      <div class="ba-field"><label>LDL-C (mg/dL)</label><input id="ba-ldl" type="number" min="20" max="400" step="1" placeholder="예: 105"><small>non-HDL 계산이 안 될 때 대안으로 사용</small></div>
      <div class="ba-field"><label>중성지방 TG (mg/dL)</label><input id="ba-tg" type="number" min="20" max="1500" step="1" placeholder="예: 90"></div>
      <div class="ba-field"><label>ApoB (mg/dL) · 선택</label><input id="ba-apob" type="number" min="30" max="250" step="0.1" placeholder="없으면 비워두세요"><small>입력 시 non-HDL-C보다 우선 사용</small></div>
      <div class="ba-field"><label>Creatinine (mg/dL)</label><input id="ba-creatinine-basic" type="number" min="0.2" max="10" step="0.01" placeholder="예: 0.9"><small>2021 CKD-EPI eGFR 계산</small></div>
      <div class="ba-field"><label>Garmin VO₂max (mL/kg/min)</label><input id="ba-vo2" type="number" min="8" max="90" step="0.1" placeholder="예: 45"><small>Garmin 추정치. FRIEND 실측 기준과 비교하므로 절대값보다 추세도 중요</small></div>
      <div class="ba-field"><label>Garmin 안정시 심박수 (bpm) · 선택</label><input id="ba-rhr" type="number" min="30" max="130" step="1" placeholder="예: 55"><small>약물·질환·훈련상태의 영향을 받을 수 있음</small></div>
      <div class="ba-field"><label>현재 흡연</label><select id="ba-smoke"><option value="no">아니오</option><option value="yes">예</option></select></div>
    </div>
    <div class="ba-actions"><button id="ba-profile-btn">내 Healthspan Profile 보기</button><button class="ba-secondary" id="ba-example-btn">일반검진 예시값</button><button class="ba-secondary" id="ba-reset-btn">초기화</button></div>
    <div class="ba-results" id="ba-profile-results" hidden>
      <div class="ba-result"><b>HEALTHSPAN INDEX</b><strong id="ba-score">—</strong><span id="ba-score-label">교육용 종합점수 / 100</span></div>
      <div class="ba-result"><b>지질 지표</b><strong id="ba-lipid">—</strong><span id="ba-lipid-note">ApoB → non-HDL → LDL 순서</span></div>
      <div class="ba-result"><b>Garmin VO₂max 위치</b><strong id="ba-vo2pct">—</strong><span id="ba-vo2note">FRIEND reference</span></div>
      <div class="ba-result"><b>eGFR</b><strong id="ba-egfr">—</strong><span>2021 CKD-EPI creatinine equation</span></div>
    </div>
    <div id="ba-domains" hidden></div>
    <ol class="ba-priority" id="ba-priorities"></ol>
    <div class="ba-warning"><b>Healthspan Index는 생체나이가 아닙니다.</b> 여러 검증된 위험요인을 한 화면에서 비교하기 위한 LONGEVITY JOURNAL의 교육용 index입니다. 반면 아래 PhenoAge는 발표된 논문 공식을 그대로 사용합니다.</div>
  </div>

  <div class="ba-panel">
    <h3>LEVEL 2. Advanced PhenoAge — CRP가 있을 때만 정밀 계산</h3>
    <p>Levine Phenotypic Age는 연대기 나이와 <b>9개 임상 혈액지표</b>를 이용해 사망위험에 대응하는 등가 나이를 계산합니다. CRP는 다른 지표로 바꿔 넣을 수 없으므로, <b>CRP 또는 hs-CRP가 없다면 이 모드는 건너뛰세요.</b></p>
    <div class="ba-actions"><button class="ba-secondary" id="ba-import-basic">기본검진의 나이·Creatinine·공복혈당 가져오기</button></div>
    <div class="ba-grid three" style="margin-top:15px">
      <div class="ba-field"><label>Albumin (g/dL)</label><input id="ba-albumin" type="number" step="0.1" placeholder="예: 4.5"></div>
      <div class="ba-field"><label>Creatinine (mg/dL)</label><input id="ba-creatinine" type="number" step="0.01" placeholder="예: 0.9"></div>
      <div class="ba-field"><label>Glucose (mg/dL)</label><input id="ba-glucose" type="number" step="1" placeholder="예: 90"></div>
      <div class="ba-field"><label>CRP / hs-CRP (mg/L)</label><input id="ba-crp" type="number" step="0.01" min="0.01" placeholder="정밀모드 필수"><small>PhenoAge 공식 때문에 대체 불가</small></div>
      <div class="ba-field"><label>Lymphocytes (%)</label><input id="ba-lymph" type="number" step="0.1" placeholder="예: 30"></div>
      <div class="ba-field"><label>MCV (fL)</label><input id="ba-mcv" type="number" step="0.1" placeholder="예: 90"></div>
      <div class="ba-field"><label>RDW (%)</label><input id="ba-rdw" type="number" step="0.1" placeholder="예: 13.0"></div>
      <div class="ba-field"><label>ALP (U/L)</label><input id="ba-alp" type="number" step="1" placeholder="예: 70"></div>
      <div class="ba-field"><label>WBC (10³/µL)</label><input id="ba-wbc" type="number" step="0.1" placeholder="예: 6.0"></div>
    </div>
    <div class="ba-actions"><button id="ba-pheno-btn">PhenoAge 계산하기</button><button class="ba-secondary" id="ba-pheno-example">정밀검사 예시값</button></div>
    <div class="ba-results" id="ba-pheno-results" hidden>
      <div class="ba-result"><b>PHENOTYPIC AGE</b><strong id="ba-pheno-age">—</strong><span>Levine 2018</span></div>
      <div class="ba-result"><b>AGE DELTA</b><strong id="ba-pheno-delta">—</strong><span>연대기 나이 대비</span></div>
      <div class="ba-result"><b>INTERPRETATION</b><strong id="ba-pheno-label" style="font-size:19px">—</strong><span>절대값보다 반복측정 추세</span></div>
      <div class="ba-result"><b>CRP STATUS</b><strong id="ba-crp-label" style="font-size:19px">입력됨</strong><span>공식의 필수 변수</span></div>
    </div>
    <div class="ba-warning"><b>해석 주의:</b> PhenoAge는 미국 NHANES 자료에서 개발된 위험모델입니다. 한국인의 ‘진짜 세포 나이’를 직접 재는 검사가 아니며, 감염·급성염증·탈수 등 일시적 상황도 결과를 움직일 수 있습니다.</div>
  </div>

  <div class="ba-panel">
    <h3>What-if Simulator — 목표값을 넣으면 위험 프로필은 얼마나 달라질까?</h3>
    <p>현재 입력에서 실제 사용된 지질지표(ApoB, non-HDL-C 또는 LDL-C)와 혈당지표(HbA1c 또는 공복혈당)를 자동으로 가져옵니다. 변화는 <b>Healthspan Index</b>로만 비교하며 ‘몇 년 수명이 늘어난다’고 환산하지 않습니다.</p>
    <div class="ba-grid three">
      <div class="ba-field"><label>목표 허리둘레 (cm)</label><input id="ba-g-waist" type="number" step="0.1"></div>
      <div class="ba-field"><label>목표 SBP / DBP</label><div style="display:grid;grid-template-columns:1fr 1fr;gap:7px"><input id="ba-g-sbp" type="number"><input id="ba-g-dbp" type="number"></div></div>
      <div class="ba-field"><label id="ba-g-lipid-label">목표 지질 지표</label><input id="ba-g-lipid" type="number" step="0.1"><small id="ba-g-lipid-note">현재 프로필 계산 후 자동 지정</small></div>
      <div class="ba-field"><label id="ba-g-gly-label">목표 혈당 지표</label><input id="ba-g-gly" type="number" step="0.1"><small id="ba-g-gly-note">현재 프로필 계산 후 자동 지정</small></div>
      <div class="ba-field"><label>목표 Garmin VO₂max</label><input id="ba-g-vo2" type="number" step="0.1"></div>
      <div class="ba-field"><label>목표 안정시 심박수</label><input id="ba-g-rhr" type="number" step="1"></div>
      <div class="ba-field"><label>목표 흡연 상태</label><select id="ba-g-smoke"><option value="no">비흡연</option><option value="yes">흡연</option></select></div>
    </div>
    <div class="ba-actions"><button class="ba-secondary" id="ba-copy-goal">현재값 → 목표값 복사</button><button id="ba-sim-btn">목표 프로필 비교</button></div>
    <div class="ba-compare" id="ba-sim-results" hidden>
      <div class="ba-comparebox"><b>현재 Healthspan Index</b><br><strong id="ba-current-score">—</strong><div class="ba-track"><div class="ba-fill" id="ba-current-fill"></div></div></div>
      <div class="ba-comparebox"><b>목표 시뮬레이션</b><br><strong id="ba-goal-score">—</strong><div class="ba-track"><div class="ba-fill" id="ba-goal-fill"></div></div><p class="ba-note" id="ba-improve"></p></div>
    </div>
  </div>

  <div class="ba-panel">
    <h3>왜 GrimAge·DunedinPACE는 자가 입력으로 계산하지 않나?</h3>
    <div class="ba-dna">
      <div><b>GrimAge / Epigenetic clocks</b><p class="ba-note">DNA methylation CpG 데이터를 실제로 측정해야 합니다. 일반 건강검진 숫자로 같은 결과를 복원할 수 없습니다.</p></div>
      <div><b>DunedinPACE</b><p class="ba-note">혈액 DNA methylation으로 노화의 ‘속도’를 추정하는 별도 모델입니다. 설문이나 Garmin 데이터로 계산한 숫자와 동일시하면 안 됩니다.</p></div>
    </div>
  </div>

  <h2>이 계산기의 과학적 근거</h2>
  ${paper('2018','Levine et al. — Phenotypic Age / PhenoAge','임상 PhenoAge는 연령과 albumin·creatinine·glucose·CRP·lymphocyte%·MCV·RDW·ALP·WBC를 사용합니다.','https://pubmed.ncbi.nlm.nih.gov/29676998/','PubMed')}
  ${paper('2019','Phenotypic Age validation in NHANES IV','PhenoAge가 독립 NHANES 표본에서 이환·사망 위험을 구분하는지 검증했습니다.','https://pubmed.ncbi.nlm.nih.gov/30596641/','PubMed')}
  ${paper('2021','CKD-EPI creatinine equation without race','Creatinine·연령·성별로 eGFR을 계산하는 2021 CKD-EPI 공식입니다.','https://www.kidney.org/ckd-epi-creatinine-equation-2021','National Kidney Foundation')}
  ${paper('2015','FRIEND Registry — VO₂max reference standards','성별·연령대별 직접 측정 VO₂max percentile 기준을 제시합니다. Garmin 값은 추정치이므로 동일한 검사와 같다고 보지는 않습니다.','https://pmc.ncbi.nlm.nih.gov/articles/PMC4919021/','PMC')}
  ${paper('2025','ACC/AHA High Blood Pressure Guideline','혈압 관리와 위험도 기반 치료, 생활습관 개입을 강조합니다.','https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know','AHA')}
  ${paper('2026','ACC/AHA Dyslipidemia Guideline','LDL-C·non-HDL-C를 기본 위험관리 지표로 사용하면서 상황에 따라 ApoB와 Lp(a)를 활용합니다.','https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know','AHA')}
  ${paper('2022','DunedinPACE','DNA methylation을 이용해 노화의 속도를 추정하는 별도의 epigenetic biomarker입니다.','https://pubmed.ncbi.nlm.nih.gov/35029144/','PubMed')}

  <div class="takeaway"><strong>LONGEVITY JOURNAL 원칙</strong><p><b>일반검진에서 얻을 수 없는 값을 억지로 요구하지 않고, 측정되지 않은 값을 가짜 숫자로 대체하지 않습니다.</b> ApoB가 없으면 non-HDL-C를 사용하고, HbA1c가 없으면 공복혈당을 사용합니다. CRP가 없으면 PhenoAge는 계산하지 않습니다. Garmin VO₂max는 Garmin 추정값임을 표시하면서 건강수명 체력 지표로 활용합니다.</p></div>
  <p class="small-note">※ 연구·교육용 도구이며 질병 진단, 치료 또는 약물·보충제 처방을 위한 의료기기가 아닙니다. 비정상 수치가 있거나 치료 중이라면 의료진의 판단을 우선하세요.</p>
</div>
`
});

const FRIEND={male:{'20-29':[29,32.1,40.1,48,55.2,61.8,66.3],'30-39':[27.2,30.2,35.9,42.4,49.2,56.5,59.8],'40-49':[24.2,26.8,31.9,37.8,45,52.1,55.6],'50-59':[20.9,22.8,27.1,32.6,39.7,45.6,50.7],'60-69':[17.4,19.8,23.7,28.2,34.5,40.3,43],'70-79':[16.3,17.1,20.4,24.4,30.4,36.6,39.7]},female:{'20-29':[21.7,23.9,30.5,37.6,44.7,51.3,56],'30-39':[19,20.9,25.3,30.2,36.1,41.4,45.8],'40-49':[17,18.8,22.1,26.7,32.4,38.4,41.7],'50-59':[16,17.3,19.9,23.4,27.6,32,35.9],'60-69':[13.4,14.6,17.2,20,23.8,27,29.4],'70-79':[13.1,13.6,15.6,18.3,20.8,23.1,24.1]}};
const PCTS=[5,10,25,50,75,90,95];
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
const ageBand=a=>a<30?'20-29':a<40?'30-39':a<50?'40-49':a<60?'50-59':a<70?'60-69':'70-79';
const vo2Percentile=(age,sex,x)=>{if(!Number.isFinite(age)||!Number.isFinite(x))return null;const t=FRIEND[sex][ageBand(clamp(age,20,79))];if(x<=t[0])return clamp(5*x/t[0],1,5);if(x>=t[6])return clamp(95+5*(x-t[6])/Math.max(5,t[6]*.2),95,99);for(let i=0;i<t.length-1;i++)if(x>=t[i]&&x<t[i+1])return PCTS[i]+(PCTS[i+1]-PCTS[i])*(x-t[i])/(t[i+1]-t[i]);return null;};
const egfr2021=(age,sex,scr)=>{if(!Number.isFinite(age)||!Number.isFinite(scr)||scr<=0)return null;const female=sex==='female',k=female?.7:.9,a=female?-.241:-.302,r=scr/k;return 142*Math.pow(Math.min(r,1),a)*Math.pow(Math.max(r,1),-1.2)*Math.pow(.9938,age)*(female?1.012:1);};
const bpScore=(s,d)=>!Number.isFinite(s)||!Number.isFinite(d)?null:(s>180||d>120)?8:(s>=140||d>=90)?35:(s>=130||d>=80)?62:s>=120?84:100;
const waistScore=(w,h)=>!Number.isFinite(w)||!Number.isFinite(h)||h<=0?null:(w/h)<=.45?100:(w/h)<.50?90:(w/h)<.55?65:(w/h)<.60?40:20;
const a1cScore=x=>!Number.isFinite(x)?null:x<5.4?100:x<5.7?90:x<6.1?65:x<6.5?45:20;
const fpgScore=x=>!Number.isFinite(x)?null:x<90?100:x<100?90:x<110?70:x<126?45:20;
const apoScore=x=>!Number.isFinite(x)?null:x<70?100:x<80?92:x<90?84:x<100?70:x<120?50:x<130?35:20;
const nonHdlScore=x=>!Number.isFinite(x)?null:x<100?100:x<130?85:x<160?60:x<190?35:20;
const ldlScore=x=>!Number.isFinite(x)?null:x<100?90:x<130?78:x<160?58:x<190?35:20;
const tgScore=x=>!Number.isFinite(x)?null:x<100?100:x<150?90:x<200?70:x<500?40:10;
const rhrScore=x=>!Number.isFinite(x)?null:x<=55?100:x<=65?92:x<=75?78:x<=85?60:x<=95?42:25;
const kidneyScore=x=>!Number.isFinite(x)?null:x>=90?100:x>=60?85:x>=45?58:x>=30?38:15;
const smokeScore=x=>x==='yes'?0:100;
const lipidInfo=p=>{let type='',label='',value=null,base=null;if(Number.isFinite(p.apob)){type='apob';label='ApoB';value=p.apob;base=apoScore(value);}else if(Number.isFinite(p.tc)&&Number.isFinite(p.hdl)&&p.tc>=p.hdl){type='nonhdl';label='non-HDL-C';value=p.tc-p.hdl;base=nonHdlScore(value);}else if(Number.isFinite(p.ldl)){type='ldl';label='LDL-C';value=p.ldl;base=ldlScore(value);}if(base==null)return {type:'',label:'입력 필요',value:null,score:null};const ts=tgScore(p.tg);return {type,label,value,score:ts==null?base:.85*base+.15*ts};};
const glyInfo=p=>Number.isFinite(p.a1c)?{type:'a1c',label:'HbA1c',value:p.a1c,score:a1cScore(p.a1c)}:Number.isFinite(p.fpg)?{type:'fpg',label:'공복혈당',value:p.fpg,score:fpgScore(p.fpg)}:{type:'',label:'입력 필요',value:null,score:null};
const scoreProfile=p=>{const li=lipidInfo(p),gi=glyInfo(p),eg=egfr2021(p.age,p.sex,p.creatinine),vp=vo2Percentile(p.age,p.sex,p.vo2);const parts=[{name:'혈압',score:bpScore(p.sbp,p.dbp),weight:17,tip:'가정혈압을 같은 조건에서 반복 측정하고 평균을 보세요.'},{name:`지질 · ${li.label}`,score:li.score,weight:17,tip:'ApoB가 없으면 non-HDL-C를 사용합니다. LDL-C·TG와 함께 추세를 보세요.'},{name:`혈당 · ${gi.label}`,score:gi.score,weight:15,tip:'HbA1c가 있으면 우선 사용하고, 없으면 공복혈당으로 평가합니다.'},{name:'허리/키 비율',score:waistScore(p.waist,p.height),weight:12,tip:'복부지방은 대사건강의 큰 레버입니다.'},{name:'Garmin VO₂max',score:vp==null?null:clamp(vp,5,100),weight:20,tip:'Garmin 추정값은 절대값보다 동일 기기에서의 장기 추세도 중요합니다.'},{name:'신장 eGFR',score:kidneyScore(eg),weight:9,tip:'eGFR 60–89만으로 CKD를 진단하지 않습니다. 소변 albumin과 반복검사를 함께 봅니다.'},{name:'안정시 심박수',score:rhrScore(p.rhr),weight:5,tip:'훈련·수면·약물·질환의 영향을 받으므로 추세 중심으로 보세요.'},{name:'흡연',score:smokeScore(p.smoke),weight:5,tip:'흡연 중이라면 금연이 가장 큰 건강수명 레버 중 하나입니다.'}];const valid=parts.filter(x=>x.score!=null),w=valid.reduce((a,b)=>a+b.weight,0);return {score:w?valid.reduce((a,b)=>a+b.score*b.weight,0)/w:null,parts,lipid:li,gly:gi,egfr:eg,vo2pct:vp};};
const phenoAge=v=>{const albumin=v.albumin*10,creat=v.creatinine*88.4,glucose=v.glucose/18.016,crp=v.crp/10;if(crp<=0)throw new Error('CRP는 0보다 큰 값을 입력하세요.');const xb=-19.90667-.03359355*albumin+.009506491*creat+.1953192*glucose+.09536762*Math.log(crp)-.01199984*v.lymph+.02676401*v.mcv+.3306156*v.rdw+.001868778*v.alp+.05542406*v.wbc+.08035356*v.age;const m=1-Math.exp((-1.51714*Math.exp(xb))/.007692696),safe=clamp(m,1e-12,1-1e-12);return Math.log(-.0055305*Math.log(1-safe))/.090165+141.50225;};
const n=id=>{const e=document.getElementById(id),x=e?parseFloat(e.value):NaN;return Number.isFinite(x)?x:NaN};
const val=id=>document.getElementById(id)?.value||'';const set=(id,x)=>{const e=document.getElementById(id);if(e)e.value=x};
const currentProfile=()=>({age:n('ba-age'),sex:val('ba-sex'),height:n('ba-height'),waist:n('ba-waist'),sbp:n('ba-sbp'),dbp:n('ba-dbp'),fpg:n('ba-fpg'),a1c:n('ba-a1c'),tc:n('ba-tc'),hdl:n('ba-hdl'),ldl:n('ba-ldl'),tg:n('ba-tg'),apob:n('ba-apob'),creatinine:n('ba-creatinine-basic'),vo2:n('ba-vo2'),rhr:n('ba-rhr'),smoke:val('ba-smoke')});
const profileLabel=s=>s>=90?'매우 좋은 위험 프로필':s>=80?'좋은 위험 프로필':s>=65?'보완 여지가 있음':s>=50?'우선 관리 영역 존재':'적극적 관리가 필요한 프로필';
const bandLabel=s=>s==null?'입력 필요':s>=90?'좋은 범위':s>=70?'보완 여지':s>=50?'우선 관리':'높은 우선순위';
const syncGoalLabels=p=>{const o=scoreProfile(p),l=document.getElementById('ba-g-lipid-label'),ln=document.getElementById('ba-g-lipid-note'),g=document.getElementById('ba-g-gly-label'),gn=document.getElementById('ba-g-gly-note');if(l)l.textContent=`목표 ${o.lipid.label}`;if(ln)ln.textContent=o.lipid.type?`현재 사용값 ${o.lipid.value?.toFixed(o.lipid.type==='apob'?1:0)}`:'지질값을 먼저 입력';if(g)g.textContent=`목표 ${o.gly.label}`;if(gn)gn.textContent=o.gly.type?`현재 사용값 ${o.gly.value}`:'혈당값을 먼저 입력';};
const renderProfile=()=>{const p=currentProfile();if(!Number.isFinite(p.age)||!Number.isFinite(p.height)){alert('연대기 나이와 키를 먼저 입력해주세요.');return;}const o=scoreProfile(p);if(o.score==null){alert('평가할 지표를 입력해주세요.');return;}document.getElementById('ba-profile-results').hidden=false;document.getElementById('ba-score').textContent=Math.round(o.score);document.getElementById('ba-score-label').textContent=profileLabel(o.score);document.getElementById('ba-lipid').textContent=o.lipid.value==null?'—':`${Math.round(o.lipid.value)} mg/dL`;document.getElementById('ba-lipid-note').textContent=o.lipid.value==null?'ApoB → non-HDL → LDL 순서':`${o.lipid.label} 사용${o.lipid.type==='nonhdl'?' · 자동 계산':''}`;document.getElementById('ba-vo2pct').textContent=o.vo2pct==null?'—':`${Math.round(o.vo2pct)}%ile`;document.getElementById('ba-vo2note').textContent=o.vo2pct==null?'Garmin VO₂max 입력 필요':`${ageBand(clamp(p.age,20,79))}세 · ${p.sex==='male'?'남성':'여성'} FRIEND 실측 기준`;document.getElementById('ba-egfr').textContent=o.egfr==null?'—':Math.round(o.egfr);const domains=document.getElementById('ba-domains');domains.hidden=false;domains.innerHTML='';o.parts.forEach(x=>{const d=document.createElement('div');d.className='ba-scoreline';d.innerHTML=`<div class="ba-scorehead"><b>${x.name}</b><span>${x.score==null?'입력 필요':Math.round(x.score)+' / 100 · '+bandLabel(x.score)}</span></div><div class="ba-track"><div class="ba-fill" style="width:${x.score==null?0:clamp(x.score,0,100)}%"></div></div>`;domains.appendChild(d)});const pr=document.getElementById('ba-priorities');pr.innerHTML='';o.parts.filter(x=>x.score!=null).sort((a,b)=>a.score-b.score).slice(0,3).forEach(x=>{const li=document.createElement('li');li.innerHTML=`<b>${x.name}</b> — ${x.tip}`;pr.appendChild(li)});syncGoalLabels(p);};
const copyGoal=()=>{const p=currentProfile(),o=scoreProfile(p);set('ba-g-waist',Number.isFinite(p.waist)?p.waist:'');set('ba-g-sbp',Number.isFinite(p.sbp)?p.sbp:'');set('ba-g-dbp',Number.isFinite(p.dbp)?p.dbp:'');set('ba-g-lipid',o.lipid.value==null?'':o.lipid.value);set('ba-g-gly',o.gly.value==null?'':o.gly.value);set('ba-g-vo2',Number.isFinite(p.vo2)?p.vo2:'');set('ba-g-rhr',Number.isFinite(p.rhr)?p.rhr:'');set('ba-g-smoke',p.smoke);syncGoalLabels(p);};
const goalProfile=()=>{const p=currentProfile(),o=scoreProfile(p),g={...p,waist:n('ba-g-waist'),sbp:n('ba-g-sbp'),dbp:n('ba-g-dbp'),vo2:n('ba-g-vo2'),rhr:n('ba-g-rhr'),smoke:val('ba-g-smoke')},lv=n('ba-g-lipid'),gv=n('ba-g-gly');if(o.lipid.type==='apob')g.apob=lv;else if(o.lipid.type==='nonhdl'&&Number.isFinite(lv)&&Number.isFinite(p.hdl)){g.apob=NaN;g.tc=lv+p.hdl;g.hdl=p.hdl;}else if(o.lipid.type==='ldl'){g.apob=NaN;g.tc=NaN;g.hdl=NaN;g.ldl=lv;}if(o.gly.type==='a1c'){g.a1c=gv;}else if(o.gly.type==='fpg'){g.a1c=NaN;g.fpg=gv;}return g;};
const renderSim=()=>{const c=scoreProfile(currentProfile()),g=scoreProfile(goalProfile());if(c.score==null||g.score==null){alert('현재값과 목표값을 먼저 입력해주세요.');return;}document.getElementById('ba-sim-results').hidden=false;const cs=Math.round(c.score),gs=Math.round(g.score);document.getElementById('ba-current-score').textContent=cs;document.getElementById('ba-goal-score').textContent=gs;document.getElementById('ba-current-fill').style.width=clamp(cs,0,100)+'%';document.getElementById('ba-goal-fill').style.width=clamp(gs,0,100)+'%';document.getElementById('ba-improve').textContent=`교육용 index 변화: ${gs-cs>=0?'+':''}${gs-cs}점. 실제 수명연장 연수나 치료효과를 뜻하지 않습니다.`;};
const importBasic=()=>{set('ba-creatinine',val('ba-creatinine-basic'));set('ba-glucose',val('ba-fpg'));};
const renderPheno=()=>{const age=n('ba-age');if(!Number.isFinite(age)){alert('LEVEL 1의 연대기 나이를 먼저 입력해주세요.');return;}if(!Number.isFinite(n('ba-crp'))){alert('PhenoAge 정밀 계산에는 CRP 또는 hs-CRP가 반드시 필요합니다. CRP가 없다면 LEVEL 1만 사용하세요.');return;}const obj={age,albumin:n('ba-albumin'),creatinine:n('ba-creatinine'),glucose:n('ba-glucose'),crp:n('ba-crp'),lymph:n('ba-lymph'),mcv:n('ba-mcv'),rdw:n('ba-rdw'),alp:n('ba-alp'),wbc:n('ba-wbc')};if(Object.values(obj).some(x=>!Number.isFinite(x))){alert('PhenoAge 계산에는 9개 혈액검사 값을 모두 입력해야 합니다.');return;}try{const pa=phenoAge(obj),d=pa-age;document.getElementById('ba-pheno-results').hidden=false;document.getElementById('ba-pheno-age').textContent=`${pa.toFixed(1)}세`;document.getElementById('ba-pheno-delta').textContent=`${d>=0?'+':''}${d.toFixed(1)}년`;document.getElementById('ba-pheno-label').textContent=d<=-5?'위험 프로필이 더 젊음':d<5?'연령대와 비슷함':'위험 프로필이 더 늙음';document.getElementById('ba-crp-label').textContent=`${obj.crp} mg/L`;}catch(e){alert(e.message||'계산할 수 없습니다.');}};
const loadExample=()=>{set('ba-age',46);set('ba-sex','male');set('ba-height',170);set('ba-waist',80);set('ba-sbp',122);set('ba-dbp',76);set('ba-fpg',92);set('ba-a1c',5.4);set('ba-tc',185);set('ba-hdl',60);set('ba-ldl',105);set('ba-tg',90);set('ba-apob','');set('ba-creatinine-basic',.9);set('ba-vo2',45);set('ba-rhr',55);set('ba-smoke','no');copyGoal();};
const loadPhenoExample=()=>{set('ba-age',45);set('ba-albumin',4.5);set('ba-creatinine',.9);set('ba-glucose',90);set('ba-crp',1);set('ba-lymph',30);set('ba-mcv',90);set('ba-rdw',13);set('ba-alp',70);set('ba-wbc',6);};
const resetAll=()=>{document.querySelectorAll('#bioage-lab input').forEach(e=>e.value='');set('ba-sex','male');set('ba-smoke','no');set('ba-g-smoke','no');['ba-profile-results','ba-domains','ba-pheno-results','ba-sim-results'].forEach(id=>{const e=document.getElementById(id);if(e)e.hidden=true});const pr=document.getElementById('ba-priorities');if(pr)pr.innerHTML='';};
const init=()=>{const root=document.getElementById('bioage-lab');if(!root||root.dataset.ready)return;root.dataset.ready='1';document.getElementById('ba-profile-btn')?.addEventListener('click',renderProfile);document.getElementById('ba-example-btn')?.addEventListener('click',loadExample);document.getElementById('ba-reset-btn')?.addEventListener('click',resetAll);document.getElementById('ba-import-basic')?.addEventListener('click',importBasic);document.getElementById('ba-pheno-btn')?.addEventListener('click',renderPheno);document.getElementById('ba-pheno-example')?.addEventListener('click',loadPhenoExample);document.getElementById('ba-copy-goal')?.addEventListener('click',copyGoal);document.getElementById('ba-sim-btn')?.addEventListener('click',renderSim);};
window.BioAgeLab={init,phenoAge,scoreProfile,vo2Percentile,egfr2021,lipidInfo,glyInfo};
const observer=new MutationObserver(()=>init());observer.observe(document.documentElement,{childList:true,subtree:true});setTimeout(init,0);
})();
(()=>{
const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
if(posts.some(x=>x.slug==='biological-age-lab'))return;
const paper=(year,title,body,url,label='Source')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
posts.push({
  slug:'biological-age-lab',
  category:'health',
  date:'2026-10-11',
  title:'Biological Age Lab — 나의 생체나이와 건강수명 지표를 직접 계산해보기',
  excerpt:'논문 검증된 Levine PhenoAge와 혈압·ApoB·HbA1c·허리/키 비율·VO₂max를 한 화면에서 확인하는 인터랙티브 건강수명 시뮬레이터입니다. 생체나이와 생활개선 목표를 직접 비교해볼 수 있습니다.',
  tags:['Biological Age Lab','생체나이 계산','PhenoAge','Phenotypic Age','ApoB','HbA1c','VO2max','혈압','허리둘레','Healthspan','Biomarker','Aging biomarker','Longevity'],
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
#bioage-lab .ba-results{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px}#bioage-lab .ba-result{padding:17px;border-radius:14px;background:var(--ba-soft);min-height:105px}#bioage-lab .ba-result b{display:block;font-size:11px;letter-spacing:.7px;color:var(--ba-muted);margin-bottom:7px}#bioage-lab .ba-result strong{font:700 28px Georgia,serif}#bioage-lab .ba-result span{display:block;font-size:12px;color:var(--ba-muted);margin-top:4px}
#bioage-lab .ba-scoreline{margin-top:14px;padding:15px;border:1px solid var(--ba-line);border-radius:12px}#bioage-lab .ba-scorehead{display:flex;justify-content:space-between;gap:12px;align-items:center}#bioage-lab .ba-track{height:9px;border-radius:999px;background:#e5ebe6;overflow:hidden;margin-top:9px}#bioage-lab .ba-fill{height:100%;width:0;background:var(--ba-accent);transition:width .25s ease}
#bioage-lab .ba-priority{margin:14px 0 0;padding-left:19px}#bioage-lab .ba-priority li{margin:7px 0;color:var(--ba-muted)}#bioage-lab .ba-warning{margin-top:16px;padding:14px;border-left:3px solid var(--ba-accent);background:#f6f8f5;color:var(--ba-muted);font-size:13px;line-height:1.65}
#bioage-lab .ba-compare{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:15px}#bioage-lab .ba-comparebox{padding:16px;border:1px solid var(--ba-line);border-radius:14px}#bioage-lab .ba-comparebox strong{font:700 30px Georgia,serif}
#bioage-lab .ba-dna{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}#bioage-lab .ba-dna>div{padding:15px;border-radius:12px;background:#f6f8f5;border:1px solid var(--ba-line)}
@media(max-width:720px){#bioage-lab .ba-grid,#bioage-lab .ba-grid.three,#bioage-lab .ba-results,#bioage-lab .ba-compare,#bioage-lab .ba-dna{grid-template-columns:1fr}#bioage-lab .ba-hero{padding:21px}#bioage-lab .ba-hero h2{font-size:29px}}
</style>
<div id="bioage-lab">
  <div class="ba-hero">
    <div class="ba-kicker">LONGEVITY JOURNAL · INTERACTIVE LAB</div>
    <h2>내 몸은 몇 살처럼 보일까?</h2>
    <p class="ba-note">이 도구는 <b>논문 검증된 PhenoAge</b>와 건강수명에 중요한 여러 지표를 구분해 보여줍니다. PhenoAge만 ‘나이(년)’로 계산하며, 나머지는 심혈관·대사·체력 상태를 이해하기 위한 교육용 대시보드입니다.</p>
    <span class="ba-privacy">🔒 입력값은 이 브라우저 안에서만 계산되며 서버로 전송하거나 저장하지 않습니다.</span>
  </div>

  <div class="ba-panel">
    <h3>1. Healthspan Dashboard — 지금 어디가 가장 큰 레버인가?</h3>
    <p>혈압·ApoB·HbA1c·복부비만·VO₂max·흡연을 한 번에 비교합니다. 아래 종합점수는 LONGEVITY JOURNAL의 <b>교육용 index</b>이며 검증된 생체나이 공식이 아닙니다.</p>
    <div class="ba-grid three">
      <div class="ba-field"><label>연대기 나이</label><input id="ba-age" type="number" min="20" max="100" placeholder="예: 46"><small>PhenoAge와 VO₂max 연령대 비교에 사용</small></div>
      <div class="ba-field"><label>성별</label><select id="ba-sex"><option value="male">남성</option><option value="female">여성</option></select><small>VO₂max 기준표에 사용</small></div>
      <div class="ba-field"><label>키 (cm)</label><input id="ba-height" type="number" min="120" max="220" placeholder="예: 170"><small>허리/키 비율 계산</small></div>
      <div class="ba-field"><label>허리둘레 현재 (cm)</label><input id="ba-waist" type="number" min="45" max="180" step="0.1" placeholder="예: 78"></div>
      <div class="ba-field"><label>수축기 / 이완기 혈압</label><div style="display:grid;grid-template-columns:1fr 1fr;gap:7px"><input id="ba-sbp" type="number" min="70" max="240" placeholder="SBP"><input id="ba-dbp" type="number" min="40" max="150" placeholder="DBP"></div></div>
      <div class="ba-field"><label>ApoB (mg/dL)</label><input id="ba-apob" type="number" min="30" max="250" step="0.1" placeholder="예: 85"><small>보편적 단일 치료목표가 아닌 위험 방향성 지표</small></div>
      <div class="ba-field"><label>HbA1c (%)</label><input id="ba-a1c" type="number" min="3.5" max="15" step="0.1" placeholder="예: 5.4"></div>
      <div class="ba-field"><label>VO₂max (mL/kg/min)</label><input id="ba-vo2" type="number" min="8" max="90" step="0.1" placeholder="예: 45"><small>FRIEND treadmill CPX 기준과 비교</small></div>
      <div class="ba-field"><label>현재 흡연</label><select id="ba-smoke"><option value="no">아니오</option><option value="yes">예</option></select></div>
    </div>
    <div class="ba-actions"><button id="ba-profile-btn">내 건강수명 프로필 보기</button><button class="ba-secondary" id="ba-example-btn">예시값 불러오기</button><button class="ba-secondary" id="ba-reset-btn">초기화</button></div>
    <div class="ba-results" id="ba-profile-results" hidden>
      <div class="ba-result"><b>HEALTHSPAN INDEX</b><strong id="ba-score">—</strong><span>교육용 종합점수 / 100</span></div>
      <div class="ba-result"><b>VO₂max 위치</b><strong id="ba-vo2pct">—</strong><span id="ba-vo2note">FRIEND reference</span></div>
      <div class="ba-result"><b>허리 / 키</b><strong id="ba-whtr">—</strong><span>복부지방의 간단한 proxy</span></div>
    </div>
    <div id="ba-domains" hidden></div>
    <ol class="ba-priority" id="ba-priorities"></ol>
  </div>

  <div class="ba-panel">
    <h3>2. PhenoAge — 논문 공식으로 계산하는 ‘사망위험 등가 나이’</h3>
    <p>Levine의 Phenotypic Age는 연대기 나이와 <b>9개 임상 혈액지표</b>를 이용해 10년 사망위험과 연결된 ‘등가 나이’를 계산합니다. 세포가 실제로 몇 살인지 직접 재는 검사는 아닙니다.</p>
    <div class="ba-grid three">
      <div class="ba-field"><label>Albumin (g/dL)</label><input id="ba-albumin" type="number" step="0.1" placeholder="예: 4.5"></div>
      <div class="ba-field"><label>Creatinine (mg/dL)</label><input id="ba-creatinine" type="number" step="0.01" placeholder="예: 0.9"></div>
      <div class="ba-field"><label>Glucose (mg/dL)</label><input id="ba-glucose" type="number" step="1" placeholder="예: 90"></div>
      <div class="ba-field"><label>hs-CRP / CRP (mg/L)</label><input id="ba-crp" type="number" step="0.01" min="0.01" placeholder="예: 1.0"></div>
      <div class="ba-field"><label>Lymphocytes (%)</label><input id="ba-lymph" type="number" step="0.1" placeholder="예: 30"></div>
      <div class="ba-field"><label>MCV (fL)</label><input id="ba-mcv" type="number" step="0.1" placeholder="예: 90"></div>
      <div class="ba-field"><label>RDW (%)</label><input id="ba-rdw" type="number" step="0.1" placeholder="예: 13.0"></div>
      <div class="ba-field"><label>Alkaline phosphatase, ALP (U/L)</label><input id="ba-alp" type="number" step="1" placeholder="예: 70"></div>
      <div class="ba-field"><label>WBC (10³/µL)</label><input id="ba-wbc" type="number" step="0.1" placeholder="예: 6.0"></div>
    </div>
    <div class="ba-actions"><button id="ba-pheno-btn">PhenoAge 계산하기</button><button class="ba-secondary" id="ba-pheno-example">혈액검사 예시값</button></div>
    <div class="ba-results" id="ba-pheno-results" hidden>
      <div class="ba-result"><b>PHENOTYPIC AGE</b><strong id="ba-pheno-age">—</strong><span>Levine 2018</span></div>
      <div class="ba-result"><b>AGE DELTA</b><strong id="ba-pheno-delta">—</strong><span>연대기 나이 대비</span></div>
      <div class="ba-result"><b>INTERPRETATION</b><strong id="ba-pheno-label" style="font-size:20px">—</strong><span>추세·반복측정 중심으로 해석</span></div>
    </div>
    <div class="ba-warning"><b>중요:</b> PhenoAge는 미국 NHANES 자료에서 개발된 위험모델입니다. 특히 한국인을 포함한 개인에게 절대적인 ‘진짜 나이’로 해석하면 안 됩니다. 감염이나 염증, 탈수, 일시적인 혈액검사 변화도 결과를 움직일 수 있으므로 한 번의 숫자보다 동일 조건의 반복 측정과 실제 임상지표를 함께 보세요.</div>
  </div>

  <div class="ba-panel">
    <h3>3. What-if Simulator — 내가 정한 목표값으로 무엇이 달라질까?</h3>
    <p>현재값을 복사한 뒤 원하는 목표값을 직접 바꿔보세요. 이 기능은 ‘몇 년 젊어진다’를 임의로 만들지 않고, <b>건강수명 위험 프로필이 어느 방향으로 움직이는지</b>만 보여줍니다.</p>
    <div class="ba-grid three">
      <div class="ba-field"><label>목표 허리둘레 (cm)</label><input id="ba-g-waist" type="number" step="0.1"></div>
      <div class="ba-field"><label>목표 SBP / DBP</label><div style="display:grid;grid-template-columns:1fr 1fr;gap:7px"><input id="ba-g-sbp" type="number"><input id="ba-g-dbp" type="number"></div></div>
      <div class="ba-field"><label>목표 ApoB (mg/dL)</label><input id="ba-g-apob" type="number" step="0.1"></div>
      <div class="ba-field"><label>목표 HbA1c (%)</label><input id="ba-g-a1c" type="number" step="0.1"></div>
      <div class="ba-field"><label>목표 VO₂max</label><input id="ba-g-vo2" type="number" step="0.1"></div>
      <div class="ba-field"><label>목표 흡연 상태</label><select id="ba-g-smoke"><option value="no">비흡연</option><option value="yes">흡연</option></select></div>
    </div>
    <div class="ba-actions"><button class="ba-secondary" id="ba-copy-goal">현재값 → 목표값 복사</button><button id="ba-sim-btn">목표 프로필 비교</button></div>
    <div class="ba-compare" id="ba-sim-results" hidden>
      <div class="ba-comparebox"><b>현재 Healthspan Index</b><br><strong id="ba-current-score">—</strong><div class="ba-track"><div class="ba-fill" id="ba-current-fill"></div></div></div>
      <div class="ba-comparebox"><b>목표 시뮬레이션</b><br><strong id="ba-goal-score">—</strong><div class="ba-track"><div class="ba-fill" id="ba-goal-fill"></div></div><p class="ba-note" id="ba-improve"></p></div>
    </div>
  </div>

  <div class="ba-panel">
    <h3>4. 왜 GrimAge·DunedinPACE는 여기서 ‘가짜 계산’하지 않나?</h3>
    <div class="ba-dna">
      <div><b>GrimAge / Epigenetic clocks</b><p class="ba-note">DNA methylation CpG 데이터를 실제로 측정해야 합니다. 일반 혈액검사·운동·식습관만으로 같은 값을 복원할 수 없습니다.</p></div>
      <div><b>DunedinPACE</b><p class="ba-note">혈액 DNA methylation에서 노화의 ‘속도’를 추정하는 별도 모델입니다. 생활습관 설문으로 계산하는 숫자와는 다릅니다.</p></div>
    </div>
  </div>

  <h2>이 계산기의 과학적 근거</h2>
  ${paper('2018','Levine et al. — An epigenetic biomarker of aging for lifespan and healthspan','PhenoAge의 임상 Phenotypic Age를 기반으로 후성유전 clock을 만든 대표 연구. 임상 PhenoAge는 연령과 9개 혈액지표를 사용합니다.','https://pubmed.ncbi.nlm.nih.gov/29676998/','PubMed')}
  ${paper('2019','Liu et al. — Phenotypic Age validation in NHANES IV','PhenoAge가 독립 NHANES 표본에서 이환·사망 위험을 구분하는지 검증했습니다.','https://pubmed.ncbi.nlm.nih.gov/30596641/','PubMed')}
  ${paper('2021','Kwon & Belsky — BioAge toolkit','PhenoAge·KDM biological age 등을 재현 가능한 코드로 정리한 GeroScience toolkit입니다.','https://github.com/dayoonkwon/BioAge','GitHub')}
  ${paper('2018','Mandsager et al. — Cardiorespiratory fitness and long-term mortality','높은 cardiorespiratory fitness가 장기 사망위험 감소와 강하게 연관됨을 보여준 대규모 연구입니다.','https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2707428','JAMA Network Open')}
  ${paper('2015','FRIEND Registry — VO₂max reference standards','성별·연령대별 직접 측정 VO₂max percentile 기준을 제시합니다.','https://pmc.ncbi.nlm.nih.gov/articles/PMC4919021/','PMC')}
  ${paper('2025','ACC/AHA High Blood Pressure Guideline','혈압 <130/80 mmHg를 일반적 치료 목표로 제시하며 위험도 기반 관리와 생활습관 개입을 강조합니다.','https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know','AHA')}
  ${paper('2026','ACC/AHA Dyslipidemia Guideline','ApoB와 Lp(a)를 포함한 atherogenic lipoprotein 위험 평가를 업데이트했습니다.','https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know','AHA')}
  ${paper('2022','DunedinPACE','DNA methylation을 이용해 노화의 속도를 추정하는 별도의 epigenetic biomarker입니다.','https://pubmed.ncbi.nlm.nih.gov/35029144/','PubMed')}

  <div class="takeaway"><strong>이 사이트의 원칙</strong><p><b>측정할 수 없는 것은 ‘나이’로 꾸며내지 않습니다.</b> PhenoAge는 검증된 공식 그대로 계산하고, VO₂max·혈압·ApoB·HbA1c·허리둘레는 각각의 근거를 유지한 채 건강수명 대시보드로 보여줍니다. 목표는 숫자 경쟁이 아니라 <b>어떤 지표를 개선하면 내 위험 프로필이 실제로 좋아지는지 깨닫고 행동하게 만드는 것</b>입니다.</p></div>
  <p class="small-note">※ 연구·교육용 도구이며 질병 진단, 치료 또는 약물·보충제 처방을 위한 의료기기가 아닙니다. 비정상 수치가 있거나 치료 중이라면 의료진의 판단을 우선하세요.</p>
</div>
`
});

const FRIEND={
  male:{
    '20-29':[29.0,32.1,40.1,48.0,55.2,61.8,66.3],
    '30-39':[27.2,30.2,35.9,42.4,49.2,56.5,59.8],
    '40-49':[24.2,26.8,31.9,37.8,45.0,52.1,55.6],
    '50-59':[20.9,22.8,27.1,32.6,39.7,45.6,50.7],
    '60-69':[17.4,19.8,23.7,28.2,34.5,40.3,43.0],
    '70-79':[16.3,17.1,20.4,24.4,30.4,36.6,39.7]
  },
  female:{
    '20-29':[21.7,23.9,30.5,37.6,44.7,51.3,56.0],
    '30-39':[19.0,20.9,25.3,30.2,36.1,41.4,45.8],
    '40-49':[17.0,18.8,22.1,26.7,32.4,38.4,41.7],
    '50-59':[16.0,17.3,19.9,23.4,27.6,32.0,35.9],
    '60-69':[13.4,14.6,17.2,20.0,23.8,27.0,29.4],
    '70-79':[13.1,13.6,15.6,18.3,20.8,23.1,24.1]
  }
};
const PCTS=[5,10,25,50,75,90,95];
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
const ageBand=a=>a<30?'20-29':a<40?'30-39':a<50?'40-49':a<60?'50-59':a<70?'60-69':'70-79';
const vo2Percentile=(age,sex,v)=>{
  if(!Number.isFinite(age)||!Number.isFinite(v))return null;
  const t=FRIEND[sex][ageBand(clamp(age,20,79))];
  if(v<=t[0])return clamp(5*(v/t[0]),1,5);
  if(v>=t[6])return clamp(95+5*((v-t[6])/Math.max(5,t[6]*.2)),95,99);
  for(let i=0;i<t.length-1;i++)if(v>=t[i]&&v<t[i+1])return PCTS[i]+(PCTS[i+1]-PCTS[i])*(v-t[i])/(t[i+1]-t[i]);
  return null;
};
const bpScore=(s,d)=>{
  if(!Number.isFinite(s)||!Number.isFinite(d))return null;
  if(s>180||d>120)return 8;
  if(s>=140||d>=90)return 35;
  if(s>=130||d>=80)return 62;
  if(s>=120)return 84;
  return 100;
};
const a1cScore=x=>!Number.isFinite(x)?null:x<5.4?100:x<5.7?90:x<6.1?65:x<6.5?45:20;
const waistScore=(w,h)=>{
  if(!Number.isFinite(w)||!Number.isFinite(h)||h<=0)return null;
  const r=w/h;return r<=.45?100:r<.50?90:r<.55?65:r<.60?40:20;
};
const apoScore=x=>!Number.isFinite(x)?null:x<70?100:x<80?92:x<90?84:x<100?70:x<120?50:x<130?35:20;
const smokeScore=x=>x==='yes'?0:100;
const scoreProfile=p=>{
  const parts=[
    {name:'혈압',score:bpScore(p.sbp,p.dbp),weight:20,tip:'정확한 가정혈압을 반복 측정해 관리하세요.'},
    {name:'ApoB',score:apoScore(p.apob),weight:20,tip:'LDL-C·non-HDL-C·중성지방과 함께 atherogenic particle burden을 점검하세요.'},
    {name:'HbA1c',score:a1cScore(p.a1c),weight:15,tip:'혈당·체중·식사·수면·운동을 함께 보세요.'},
    {name:'허리/키 비율',score:waistScore(p.waist,p.height),weight:15,tip:'복부지방 감소는 대사건강의 큰 레버가 될 수 있습니다.'},
    {name:'VO₂max',score:(()=>{const v=vo2Percentile(p.age,p.sex,p.vo2);return v==null?null:clamp(v,5,100)})(),weight:20,tip:'Zone 2와 적절한 고강도 훈련으로 심폐체력을 꾸준히 올리세요.'},
    {name:'흡연',score:smokeScore(p.smoke),weight:10,tip:'흡연 중이라면 금연이 가장 큰 건강수명 레버 중 하나입니다.'}
  ];
  const valid=parts.filter(x=>x.score!=null);
  if(!valid.length)return {score:null,parts};
  const w=valid.reduce((a,b)=>a+b.weight,0);
  const score=valid.reduce((a,b)=>a+b.score*b.weight,0)/w;
  return {score,parts};
};
const phenoAge=v=>{
  const albumin=v.albumin*10;
  const creat=v.creatinine*88.4;
  const glucose=v.glucose/18.016;
  const crp=v.crp/10;
  if(crp<=0)throw new Error('CRP는 0보다 큰 값을 입력하세요.');
  const xb=-19.90667-0.03359355*albumin+0.009506491*creat+0.1953192*glucose+0.09536762*Math.log(crp)-0.01199984*v.lymph+0.02676401*v.mcv+0.3306156*v.rdw+0.001868778*v.alp+0.05542406*v.wbc+0.08035356*v.age;
  const m=1-Math.exp((-1.51714*Math.exp(xb))/0.007692696);
  const safe=clamp(m,1e-12,1-1e-12);
  return (Math.log(-0.0055305*Math.log(1-safe))/0.090165)+141.50225;
};
const n=id=>{const e=document.getElementById(id);if(!e)return NaN;const x=parseFloat(e.value);return Number.isFinite(x)?x:NaN};
const v=id=>document.getElementById(id)?.value||'';
const set=(id,val)=>{const e=document.getElementById(id);if(e)e.value=val};
const currentProfile=()=>({age:n('ba-age'),sex:v('ba-sex'),height:n('ba-height'),waist:n('ba-waist'),sbp:n('ba-sbp'),dbp:n('ba-dbp'),apob:n('ba-apob'),a1c:n('ba-a1c'),vo2:n('ba-vo2'),smoke:v('ba-smoke')});
const goalProfile=()=>({age:n('ba-age'),sex:v('ba-sex'),height:n('ba-height'),waist:n('ba-g-waist'),sbp:n('ba-g-sbp'),dbp:n('ba-g-dbp'),apob:n('ba-g-apob'),a1c:n('ba-g-a1c'),vo2:n('ba-g-vo2'),smoke:v('ba-g-smoke')});
const bandLabel=(name,score)=>score==null?'입력 필요':score>=90?'좋은 범위':score>=70?'보완 여지':score>=50?'우선 관리':'높은 우선순위';
const renderProfile=()=>{
  const p=currentProfile();
  if(!Number.isFinite(p.age)||!Number.isFinite(p.height)){alert('연대기 나이와 키를 먼저 입력해주세요.');return;}
  const out=scoreProfile(p);if(out.score==null){alert('평가할 지표를 한 개 이상 입력해주세요.');return;}
  document.getElementById('ba-profile-results').hidden=false;
  document.getElementById('ba-score').textContent=Math.round(out.score);
  const pct=vo2Percentile(p.age,p.sex,p.vo2);
  document.getElementById('ba-vo2pct').textContent=pct==null?'—':`${Math.round(pct)}%ile`;
  document.getElementById('ba-vo2note').textContent=pct==null?'VO₂max 입력 필요':`${ageBand(clamp(p.age,20,79))}세 · ${p.sex==='male'?'남성':'여성'} FRIEND`;
  const whtr=Number.isFinite(p.waist)&&p.height>0?p.waist/p.height:null;
  document.getElementById('ba-whtr').textContent=whtr==null?'—':whtr.toFixed(2);
  const domains=document.getElementById('ba-domains');domains.hidden=false;domains.innerHTML='';
  out.parts.forEach(x=>{const d=document.createElement('div');d.className='ba-scoreline';const sc=x.score==null?0:Math.round(x.score);d.innerHTML=`<div class="ba-scorehead"><b>${x.name}</b><span>${x.score==null?'입력 필요':sc+' / 100 · '+bandLabel(x.name,x.score)}</span></div><div class="ba-track"><div class="ba-fill" style="width:${x.score==null?0:clamp(x.score,0,100)}%"></div></div>`;domains.appendChild(d)});
  const pr=document.getElementById('ba-priorities');pr.innerHTML='';
  out.parts.filter(x=>x.score!=null).sort((a,b)=>a.score-b.score).slice(0,3).forEach(x=>{const li=document.createElement('li');li.innerHTML=`<b>${x.name}</b> — ${x.tip}`;pr.appendChild(li)});
};
const renderPheno=()=>{
  const age=n('ba-age');if(!Number.isFinite(age)){alert('상단의 연대기 나이를 먼저 입력해주세요.');return;}
  const obj={age,albumin:n('ba-albumin'),creatinine:n('ba-creatinine'),glucose:n('ba-glucose'),crp:n('ba-crp'),lymph:n('ba-lymph'),mcv:n('ba-mcv'),rdw:n('ba-rdw'),alp:n('ba-alp'),wbc:n('ba-wbc')};
  if(Object.values(obj).some(x=>!Number.isFinite(x))){alert('PhenoAge 계산에는 9개 혈액검사 값을 모두 입력해야 합니다.');return;}
  try{const pa=phenoAge(obj),delta=pa-age;document.getElementById('ba-pheno-results').hidden=false;document.getElementById('ba-pheno-age').textContent=`${pa.toFixed(1)}세`;document.getElementById('ba-pheno-delta').textContent=`${delta>=0?'+':''}${delta.toFixed(1)}년`;document.getElementById('ba-pheno-label').textContent=delta<=-5?'위험 프로필이 더 젊음':delta<5?'연령대와 비슷함':'위험 프로필이 더 늙음';}catch(e){alert(e.message||'계산할 수 없습니다.');}
};
const copyGoal=()=>{['waist','sbp','dbp','apob','a1c','vo2'].forEach(k=>set('ba-g-'+k,v('ba-'+k)));set('ba-g-smoke',v('ba-smoke'));};
const renderSim=()=>{
  const c=scoreProfile(currentProfile()),g=scoreProfile(goalProfile());if(c.score==null||g.score==null){alert('현재값과 목표값을 먼저 입력해주세요.');return;}
  document.getElementById('ba-sim-results').hidden=false;const cs=Math.round(c.score),gs=Math.round(g.score);document.getElementById('ba-current-score').textContent=cs;document.getElementById('ba-goal-score').textContent=gs;document.getElementById('ba-current-fill').style.width=clamp(cs,0,100)+'%';document.getElementById('ba-goal-fill').style.width=clamp(gs,0,100)+'%';const diff=gs-cs;document.getElementById('ba-improve').textContent=`교육용 index 변화: ${diff>=0?'+':''}${diff.toFixed(0)}점. 실제 질병위험 감소량이나 수명연장 연수를 뜻하지 않습니다.`;
};
const loadExample=()=>{set('ba-age',45);set('ba-sex','male');set('ba-height',170);set('ba-waist',80);set('ba-sbp',124);set('ba-dbp',78);set('ba-apob',88);set('ba-a1c',5.4);set('ba-vo2',42);set('ba-smoke','no');copyGoal();};
const loadPhenoExample=()=>{set('ba-age',45);set('ba-albumin',4.5);set('ba-creatinine',0.9);set('ba-glucose',90);set('ba-crp',1);set('ba-lymph',30);set('ba-mcv',90);set('ba-rdw',13);set('ba-alp',70);set('ba-wbc',6);};
const resetAll=()=>{document.querySelectorAll('#bioage-lab input').forEach(e=>e.value='');set('ba-sex','male');set('ba-smoke','no');set('ba-g-smoke','no');['ba-profile-results','ba-domains','ba-pheno-results','ba-sim-results'].forEach(id=>{const e=document.getElementById(id);if(e)e.hidden=true});const pr=document.getElementById('ba-priorities');if(pr)pr.innerHTML='';};
const init=()=>{const root=document.getElementById('bioage-lab');if(!root||root.dataset.ready)return;root.dataset.ready='1';document.getElementById('ba-profile-btn')?.addEventListener('click',renderProfile);document.getElementById('ba-example-btn')?.addEventListener('click',loadExample);document.getElementById('ba-reset-btn')?.addEventListener('click',resetAll);document.getElementById('ba-pheno-btn')?.addEventListener('click',renderPheno);document.getElementById('ba-pheno-example')?.addEventListener('click',loadPhenoExample);document.getElementById('ba-copy-goal')?.addEventListener('click',copyGoal);document.getElementById('ba-sim-btn')?.addEventListener('click',renderSim);};
window.BioAgeLab={init,phenoAge,scoreProfile,vo2Percentile};
const observer=new MutationObserver(()=>init());observer.observe(document.documentElement,{childList:true,subtree:true});setTimeout(init,0);
})();
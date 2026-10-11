(()=>{
const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
if(posts.some(x=>x.slug==='biological-age-lab'))return;
const paper=(year,title,body,url,label='Source')=>`<div class="paper"><time>${year}</time><div><b>${title}</b><br>${body}<br><a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div></div>`;
posts.push({
  slug:'biological-age-lab',
  category:'health',
  date:'2026-10-11',
  title:'Biological Age Lab — 건강검진으로 추정 생체나이를 계산해보기',
  excerpt:'한국 국민건강보험 건강검진 코호트에서 개발·검증된 생체나이 공식을 이용해 일반검진 수치로 추정 생체나이를 계산합니다. Garmin VO₂max는 별도의 Fitness Age로, CRP가 있으면 Levine PhenoAge도 함께 확인할 수 있습니다.',
  tags:['Biological Age Lab','생체나이 계산','한국인 생체나이','건강검진','Garmin','VO2max','Fitness Age','PhenoAge','NHIS','eGFR','혈압','허리둘레','공복혈당','Longevity'],
  html:`
<style>
#bioage-lab{--ink:#20312c;--muted:#65736c;--accent:#26735d;--soft:#eef4ef;--line:#d9ded6;--card:#fffefa;margin:28px 0 0}
#bioage-lab *{box-sizing:border-box}#bioage-lab .hero2{padding:28px;border:1px solid var(--line);border-radius:18px;background:linear-gradient(145deg,#f8fbf7,#edf5ef)}
#bioage-lab .kicker{font-size:12px;letter-spacing:1.7px;font-weight:800;color:var(--accent)}#bioage-lab .hero2 h2{font:700 34px/1.25 Georgia,serif;margin:8px 0 12px}
#bioage-lab .note{color:var(--muted);font-size:14px;line-height:1.75}#bioage-lab .privacy{display:inline-block;margin-top:10px;padding:7px 11px;border-radius:999px;background:white;border:1px solid var(--line);font-size:12px;color:var(--muted)}
#bioage-lab .panel{margin-top:22px;padding:24px;border:1px solid var(--line);border-radius:16px;background:var(--card)}#bioage-lab .panel h3{margin:0 0 8px;font-size:22px}#bioage-lab .panel>p{color:var(--muted);margin:0 0 18px}
#bioage-lab .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 16px}#bioage-lab .grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}
#bioage-lab label{display:block;font-size:12px;font-weight:750;color:var(--muted);margin-bottom:5px}#bioage-lab input,#bioage-lab select{width:100%;padding:11px 12px;border:1px solid var(--line);border-radius:10px;background:white;color:var(--ink);font:inherit}
#bioage-lab .field small{display:block;margin-top:4px;color:#7b8781;font-size:11px}#bioage-lab .actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:17px}
#bioage-lab button{border:0;border-radius:999px;padding:11px 17px;font-weight:800;cursor:pointer;background:var(--ink);color:white}#bioage-lab button.secondary{background:white;color:var(--ink);border:1px solid var(--line)}
#bioage-lab .results{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:18px}#bioage-lab .result{padding:17px;border-radius:14px;background:var(--soft);min-height:112px}#bioage-lab .result b{display:block;font-size:11px;letter-spacing:.7px;color:var(--muted);margin-bottom:7px}#bioage-lab .result strong{font:700 28px Georgia,serif}#bioage-lab .result span{display:block;font-size:12px;color:var(--muted);margin-top:4px;line-height:1.5}
#bioage-lab .age-main{padding:22px;border-radius:16px;background:#20312c;color:white;margin-top:18px;display:grid;grid-template-columns:1.1fr .9fr;gap:18px;align-items:center}#bioage-lab .age-main strong{font:700 54px Georgia,serif}#bioage-lab .age-main .delta{font:700 28px Georgia,serif}#bioage-lab .age-main p{margin:5px 0;color:#dce6e0}
#bioage-lab .compare{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:15px}#bioage-lab .comparebox{padding:16px;border:1px solid var(--line);border-radius:14px}#bioage-lab .comparebox strong{font:700 32px Georgia,serif}
#bioage-lab .warning{margin-top:16px;padding:14px;border-left:3px solid var(--accent);background:#f6f8f5;color:var(--muted);font-size:13px;line-height:1.65}
#bioage-lab .sex-only[hidden]{display:none!important}#bioage-lab .mini{font-size:12px;color:var(--muted)}
@media(max-width:720px){#bioage-lab .grid,#bioage-lab .grid.three,#bioage-lab .results,#bioage-lab .compare,#bioage-lab .age-main{grid-template-columns:1fr}#bioage-lab .hero2{padding:21px}#bioage-lab .hero2 h2{font-size:29px}#bioage-lab .age-main strong{font-size:46px}}
</style>
<div id="bioage-lab">
  <div class="hero2">
    <div class="kicker">LONGEVITY JOURNAL · BIOLOGICAL AGE SIMULATOR</div>
    <h2>내 몸은 실제 나이보다 젊을까, 늙을까?</h2>
    <p class="note">첫 번째 결과는 <b>한국 국민건강보험 건강검진 데이터를 이용해 개발·검증된 생체나이 공식</b>으로 계산합니다. 별도의 CRP·ApoB 없이 일반 건강검진 수치만으로 ‘몇 살 수준인지’를 추정합니다. Garmin VO₂max는 검증식에 억지로 섞지 않고 별도의 Fitness Age로 보여줍니다.</p>
    <span class="privacy">🔒 모든 입력값은 현재 브라우저에서만 계산되며 서버로 전송하거나 저장하지 않습니다.</span>
  </div>

  <div class="panel">
    <h3>LEVEL 1. 한국인 건강검진 기반 추정 생체나이</h3>
    <p>2018년 NHIS 건강검진 코호트에서 개발된 성별별 corrected biological age 공식을 사용합니다. <b>남녀에 필요한 입력항목이 조금 다릅니다.</b></p>
    <div class="grid three">
      <div class="field"><label>연대기 나이 (세)</label><input id="ba-age" type="number" min="20" max="100" placeholder="예: 46"></div>
      <div class="field"><label>성별</label><select id="ba-sex"><option value="male">남성</option><option value="female">여성</option></select></div>
      <div class="field"><label>키 (cm)</label><input id="ba-height" type="number" min="120" max="220" step="0.1" placeholder="예: 170"></div>
      <div class="field"><label>허리둘레 (cm)</label><input id="ba-waist" type="number" min="45" max="180" step="0.1" placeholder="예: 80"></div>
      <div class="field"><label>수축기 혈압 SBP (mmHg)</label><input id="ba-sbp" type="number" min="70" max="240" placeholder="예: 120"></div>
      <div class="field"><label>공복혈당 FBS (mg/dL)</label><input id="ba-fbs" type="number" min="45" max="400" step="1" placeholder="예: 90"></div>
      <div class="field"><label>Creatinine (mg/dL)</label><input id="ba-creatinine" type="number" min="0.2" max="10" step="0.01" placeholder="예: 0.9"><small>eGFR는 CKD-EPI 2021로 자동 계산</small></div>
      <div class="field"><label>AST (U/L)</label><input id="ba-ast" type="number" min="5" max="500" step="1" placeholder="예: 22"></div>
      <div class="field sex-only" data-sex="male"><label>Hemoglobin (g/dL)</label><input id="ba-hgb" type="number" min="5" max="22" step="0.1" placeholder="예: 15.0"></div>
      <div class="field sex-only" data-sex="female" hidden><label>총콜레스테롤 (mg/dL)</label><input id="ba-tc" type="number" min="80" max="500" step="1" placeholder="예: 190"></div>
      <div class="field sex-only" data-sex="female" hidden><label>중성지방 TG (mg/dL)</label><input id="ba-tg" type="number" min="20" max="1000" step="1" placeholder="예: 90"></div>
      <div class="field sex-only" data-sex="female" hidden><label>HDL-C (mg/dL)</label><input id="ba-hdl" type="number" min="10" max="150" step="1" placeholder="예: 60"></div>
      <div class="field sex-only" data-sex="female" hidden><label>γ-GTP / GGT (U/L)</label><input id="ba-ggt" type="number" min="3" max="1000" step="1" placeholder="예: 18"></div>
      <div class="field"><label>Garmin 추정 VO₂max</label><input id="ba-vo2" type="number" min="8" max="90" step="0.1" placeholder="예: 48"><small>생체나이 공식과 별도로 Fitness Age 계산</small></div>
    </div>
    <div class="actions"><button id="ba-calc">추정 생체나이 계산</button><button class="secondary" id="ba-example">예시값</button><button class="secondary" id="ba-reset">초기화</button></div>

    <div class="age-main" id="ba-main-result" hidden>
      <div><div class="kicker" style="color:#a7d7c3">ESTIMATED BIOLOGICAL AGE</div><strong id="ba-est-age">—</strong><p>한국 NHIS 건강검진 기반 모델</p></div>
      <div><div class="delta" id="ba-delta">—</div><p id="ba-interpret">—</p><p class="mini" id="ba-model-note" style="color:#c6d5ce"></p></div>
    </div>
    <div class="results" id="ba-results" hidden>
      <div class="result"><b>CHRONOLOGICAL AGE</b><strong id="ba-chron">—</strong><span>실제 나이</span></div>
      <div class="result"><b>GARMIN FITNESS AGE</b><strong id="ba-fit-age">—</strong><span>FRIEND VO₂max 중앙값 기반의 대략적 체력연령</span></div>
      <div class="result"><b>eGFR</b><strong id="ba-egfr">—</strong><span>CKD-EPI 2021 · mL/min/1.73m²</span></div>
      <div class="result"><b>MODEL RANGE</b><strong id="ba-range">—</strong><span>단일 측정의 불확실성을 고려한 참고 범위</span></div>
    </div>
    <div class="warning"><b>해석:</b> 이 값은 세포의 실제 나이를 직접 측정하는 검사가 아니라 <b>건강검진 지표가 한국인 집단에서 어느 연령의 패턴과 비슷한지</b> 추정한 것입니다. 2018년 검증 연구에서 BA−실제나이가 1년 증가할 때 전체 사망위험이 약 1.6% 증가했고, 고혈압·당뇨·심장질환·뇌졸중·암 발생과도 유의한 연관성이 있었습니다. 하지만 개인의 미래수명을 직접 예측하는 숫자는 아닙니다.</div>
  </div>

  <div class="panel">
    <h3>What-if Simulator — 목표 수치가 되면 모델상 몇 살로 움직일까?</h3>
    <p>현재값을 복사한 뒤 바꾸고 싶은 수치를 입력하면 <b>같은 NHIS 생체나이 공식</b>으로 목표 생체나이를 다시 계산합니다. 이는 ‘치료하면 실제로 정확히 몇 년 젊어진다’는 인과 효과가 아니라 <b>수학적 시뮬레이션</b>입니다.</p>
    <div class="grid three">
      <div class="field"><label>목표 허리둘레 (cm)</label><input id="ba-g-waist" type="number" step="0.1"></div>
      <div class="field"><label>목표 SBP (mmHg)</label><input id="ba-g-sbp" type="number"></div>
      <div class="field"><label>목표 공복혈당 (mg/dL)</label><input id="ba-g-fbs" type="number"></div>
      <div class="field"><label>목표 Creatinine (mg/dL)</label><input id="ba-g-creatinine" type="number" step="0.01"></div>
      <div class="field"><label>목표 AST (U/L)</label><input id="ba-g-ast" type="number"></div>
      <div class="field sex-only" data-sex="male"><label>목표 Hemoglobin (g/dL)</label><input id="ba-g-hgb" type="number" step="0.1"></div>
      <div class="field sex-only" data-sex="female" hidden><label>목표 총콜레스테롤</label><input id="ba-g-tc" type="number"></div>
      <div class="field sex-only" data-sex="female" hidden><label>목표 TG</label><input id="ba-g-tg" type="number"></div>
      <div class="field sex-only" data-sex="female" hidden><label>목표 HDL-C</label><input id="ba-g-hdl" type="number"></div>
      <div class="field sex-only" data-sex="female" hidden><label>목표 γ-GTP</label><input id="ba-g-ggt" type="number"></div>
    </div>
    <div class="actions"><button class="secondary" id="ba-copy-goal">현재값 → 목표값 복사</button><button id="ba-sim">목표 생체나이 시뮬레이션</button></div>
    <div class="compare" id="ba-sim-result" hidden>
      <div class="comparebox"><b>현재 추정 생체나이</b><br><strong id="ba-current-age">—</strong></div>
      <div class="comparebox"><b>목표 수치 적용 시</b><br><strong id="ba-goal-age">—</strong><p class="note" id="ba-goal-diff"></p></div>
    </div>
  </div>

  <div class="panel">
    <h3>LEVEL 2. CRP가 있다면 PhenoAge도 교차확인</h3>
    <p>PhenoAge는 미국 NHANES에서 개발된 별도 mortality-linked biological age입니다. <b>CRP가 없다면 이 부분은 건너뛰어도 됩니다.</b></p>
    <div class="grid three">
      <div class="field"><label>Albumin (g/dL)</label><input id="ba-albumin" type="number" step="0.1"></div>
      <div class="field"><label>CRP / hs-CRP (mg/L)</label><input id="ba-crp" type="number" step="0.01" min="0.01"></div>
      <div class="field"><label>Lymphocytes (%)</label><input id="ba-lymph" type="number" step="0.1"></div>
      <div class="field"><label>MCV (fL)</label><input id="ba-mcv" type="number" step="0.1"></div>
      <div class="field"><label>RDW (%)</label><input id="ba-rdw" type="number" step="0.1"></div>
      <div class="field"><label>ALP (U/L)</label><input id="ba-alp" type="number" step="1"></div>
      <div class="field"><label>WBC (10³/µL)</label><input id="ba-wbc" type="number" step="0.1"></div>
    </div>
    <div class="actions"><button id="ba-pheno">PhenoAge 계산</button><button class="secondary" id="ba-pheno-example">예시값</button></div>
    <div class="results" id="ba-pheno-result" hidden>
      <div class="result"><b>PHENOAGE</b><strong id="ba-pheno-age">—</strong><span>Levine 2018</span></div>
      <div class="result"><b>AGE DELTA</b><strong id="ba-pheno-delta">—</strong><span>실제 나이 대비</span></div>
      <div class="result"><b>NHIS BA</b><strong id="ba-pheno-nhis">—</strong><span>LEVEL 1 결과와 비교</span></div>
      <div class="result"><b>INTERPRETATION</b><strong id="ba-pheno-label" style="font-size:19px">—</strong><span>두 모델의 방향성을 함께 확인</span></div>
    </div>
  </div>

  <h2>이 계산기가 사용하는 근거</h2>
  ${paper('2018','Kang et al. — Biological age as a health index for mortality and major age-related disease incidence in Koreans','NHIS 건강검진 자료 484,724명으로 생체나이 모델을 개발하고 별도 대규모 코호트에서 사망과 주요 노화관련 질환 발생과의 연관성을 검증했습니다.','https://pubmed.ncbi.nlm.nih.gov/29593385/','PubMed')}
  ${paper('2009','Park et al. — Biological age equation in Korean men','한국 남성 건강검진 자료에서 VO₂max를 포함한 11개 임상·기능 지표로 생체나이 공식을 개발한 선행 연구입니다. 현재 간편모드에는 일상적으로 얻기 어려운 FEV₁·청력·ESR 등이 필요해 직접 사용하지 않습니다.','https://pubmed.ncbi.nlm.nih.gov/18597867/','PubMed')}
  ${paper('2018','Levine et al. — Phenotypic Age','연령과 9개 임상 혈액지표를 이용해 mortality-linked Phenotypic Age를 구축한 대표 연구입니다.','https://pubmed.ncbi.nlm.nih.gov/29676998/','PubMed')}
  ${paper('2021','CKD-EPI creatinine equation','Creatinine·나이·성별로 eGFR을 계산하는 2021 race-free CKD-EPI 식입니다.','https://www.kidney.org/ckd-epi-creatinine-equation-2021','NKF')}
  ${paper('2016','FRIEND Registry VO₂max reference standards','성별·연령대별 직접 측정 VO₂max 기준을 제시한 대규모 CPX reference 자료입니다. Garmin 값은 직접 CPX가 아니므로 Fitness Age는 참고치로만 사용합니다.','https://pubmed.ncbi.nlm.nih.gov/26455884/','PubMed')}

  <div class="takeaway"><strong>LONGEVITY JOURNAL 원칙</strong><p><b>첫 화면에서 사용자가 보고 싶은 것은 점수가 아니라 ‘내 몸이 몇 살 수준인가’입니다.</b> 그래서 검증된 한국인 건강검진 기반 생체나이를 주 결과로 표시하고, Garmin VO₂max는 Fitness Age, CRP가 있을 때는 PhenoAge를 별도로 보여줍니다. 서로 다른 모델을 임의로 평균내 하나의 가짜 정밀 숫자로 만들지는 않습니다.</p></div>
  <p class="small-note">※ 연구·교육용 시뮬레이터이며 의료기기가 아닙니다. 특히 목표값 시뮬레이션은 수학적 모델 반응이지 특정 치료·운동·보충제가 실제로 그만큼의 ‘나이 감소’를 만든다는 뜻이 아닙니다.</p>
</div>
`
});

const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
const n=id=>{const e=document.getElementById(id);if(!e)return NaN;const x=parseFloat(e.value);return Number.isFinite(x)?x:NaN};
const v=id=>document.getElementById(id)?.value||'';
const set=(id,val)=>{const e=document.getElementById(id);if(e)e.value=val};
const egfr2021=(age,sex,cr)=>{
  if(!Number.isFinite(age)||!Number.isFinite(cr)||cr<=0)return NaN;
  const female=sex==='female',k=female?.7:.9,a=female?-.241:-.302,r=cr/k;
  return 142*Math.pow(Math.min(r,1),a)*Math.pow(Math.max(r,1),-1.2)*Math.pow(.9938,age)*(female?1.012:1);
};
const nhisBA=p=>{
  const eg=egfr2021(p.age,p.sex,p.creatinine);
  if(p.sex==='male')return -127.6-.19*p.height+.88*p.waist+.46*p.sbp+.40*p.fbs+.57*p.hgb-.17*eg+.62*p.ast+.65*p.age;
  return -.01-.45*p.height+.49*p.waist+.24*p.sbp+.22*p.fbs+.07*p.tc+.07*p.tg-.18*p.hdl-.07*eg+.44*p.ast+.20*p.ggt+.36*p.age;
};
const FRIEND_MED={male:[[25,48.0],[35,42.4],[45,37.8],[55,32.6],[65,28.2],[75,24.4]],female:[[25,37.6],[35,30.2],[45,26.7],[55,23.4],[65,20.0],[75,18.3]]};
const fitnessAge=(sex,vo2)=>{
  if(!Number.isFinite(vo2))return null;const a=FRIEND_MED[sex];
  if(vo2>=a[0][1])return 20;
  if(vo2<=a[a.length-1][1])return 80;
  for(let i=0;i<a.length-1;i++){
    const [age1,v1]=a[i],[age2,v2]=a[i+1];
    if(vo2<=v1&&vo2>=v2)return age1+(age2-age1)*(v1-vo2)/(v1-v2);
  }
  return null;
};
const phenoAge=p=>{
  const albumin=p.albumin*10,creat=p.creatinine*88.4,glucose=p.fbs/18.016,crp=p.crp/10;
  if(crp<=0)throw new Error('CRP는 0보다 큰 값을 입력하세요.');
  const xb=-19.90667-.03359355*albumin+.009506491*creat+.1953192*glucose+.09536762*Math.log(crp)-.01199984*p.lymph+.02676401*p.mcv+.3306156*p.rdw+.001868778*p.alp+.05542406*p.wbc+.08035356*p.age;
  const m=1-Math.exp((-1.51714*Math.exp(xb))/.007692696),safe=clamp(m,1e-12,1-1e-12);
  return (Math.log(-.0055305*Math.log(1-safe))/.090165)+141.50225;
};
const current=()=>({
  age:n('ba-age'),sex:v('ba-sex'),height:n('ba-height'),waist:n('ba-waist'),sbp:n('ba-sbp'),fbs:n('ba-fbs'),creatinine:n('ba-creatinine'),ast:n('ba-ast'),hgb:n('ba-hgb'),tc:n('ba-tc'),tg:n('ba-tg'),hdl:n('ba-hdl'),ggt:n('ba-ggt'),vo2:n('ba-vo2')
});
const goal=()=>{const p=current();return {...p,waist:n('ba-g-waist'),sbp:n('ba-g-sbp'),fbs:n('ba-g-fbs'),creatinine:n('ba-g-creatinine'),ast:n('ba-g-ast'),hgb:n('ba-g-hgb'),tc:n('ba-g-tc'),tg:n('ba-g-tg'),hdl:n('ba-g-hdl'),ggt:n('ba-g-ggt')};};
const requiredOk=p=>{
  const common=[p.age,p.height,p.waist,p.sbp,p.fbs,p.creatinine,p.ast];if(common.some(x=>!Number.isFinite(x)))return false;
  return p.sex==='male'?Number.isFinite(p.hgb):[p.tc,p.tg,p.hdl,p.ggt].every(Number.isFinite);
};
const interpretDelta=d=>d<=-5?'실제 나이보다 뚜렷하게 젊은 프로필':d<=-2?'실제 나이보다 젊은 프로필':d<2?'실제 나이와 비슷한 프로필':d<5?'실제 나이보다 다소 높은 프로필':'실제 나이보다 높은 노화 프로필';
let lastBA=null;
const render=()=>{
  const p=current();if(!requiredOk(p)){alert(p.sex==='male'?'나이·키·허리·SBP·공복혈당·Creatinine·AST·Hemoglobin을 입력해주세요.':'나이·키·허리·SBP·공복혈당·Creatinine·AST·총콜레스테롤·TG·HDL·γ-GTP를 입력해주세요.');return;}
  const ba=nhisBA(p),delta=ba-p.age,eg=egfr2021(p.age,p.sex,p.creatinine),fa=fitnessAge(p.sex,p.vo2);lastBA=ba;
  document.getElementById('ba-main-result').hidden=false;document.getElementById('ba-results').hidden=false;
  document.getElementById('ba-est-age').textContent=`${ba.toFixed(1)}세`;document.getElementById('ba-delta').textContent=`${delta>=0?'+':''}${delta.toFixed(1)}년`;
  document.getElementById('ba-interpret').textContent=interpretDelta(delta);document.getElementById('ba-model-note').textContent='NHIS corrected biological age · 단일 측정값 기반 추정';
  document.getElementById('ba-chron').textContent=`${p.age.toFixed(0)}세`;document.getElementById('ba-fit-age').textContent=fa==null?'—':fa<=20?'≤20세':fa>=80?'≥80세':`${fa.toFixed(0)}세`;
  document.getElementById('ba-egfr').textContent=eg.toFixed(0);document.getElementById('ba-range').textContent=`${(ba-3).toFixed(1)}–${(ba+3).toFixed(1)}세`;
};
const toggleSex=()=>{const s=v('ba-sex');document.querySelectorAll('#bioage-lab .sex-only').forEach(el=>el.hidden=el.dataset.sex!==s);};
const copyGoal=()=>{['waist','sbp','fbs','creatinine','ast','hgb','tc','tg','hdl','ggt'].forEach(k=>set('ba-g-'+k,v('ba-'+k)));};
const renderSim=()=>{
  const c=current(),g=goal();if(!requiredOk(c)||!requiredOk(g)){alert('현재값을 먼저 계산하고 목표값을 채워주세요.');return;}
  const ca=nhisBA(c),ga=nhisBA(g),diff=ga-ca;document.getElementById('ba-sim-result').hidden=false;document.getElementById('ba-current-age').textContent=`${ca.toFixed(1)}세`;document.getElementById('ba-goal-age').textContent=`${ga.toFixed(1)}세`;document.getElementById('ba-goal-diff').textContent=`모델상 변화 ${diff>=0?'+':''}${diff.toFixed(1)}년. 이는 인과적 치료효과가 아니라 입력값 변화에 대한 수학적 시뮬레이션입니다.`;
};
const renderPheno=()=>{
  const p=current();if(!requiredOk(p)){alert('LEVEL 1 기본값을 먼저 입력해주세요.');return;}
  const q={...p,albumin:n('ba-albumin'),crp:n('ba-crp'),lymph:n('ba-lymph'),mcv:n('ba-mcv'),rdw:n('ba-rdw'),alp:n('ba-alp'),wbc:n('ba-wbc')};
  if([q.albumin,q.crp,q.lymph,q.mcv,q.rdw,q.alp,q.wbc].some(x=>!Number.isFinite(x))){alert('PhenoAge에는 Albumin, CRP, Lymphocyte %, MCV, RDW, ALP, WBC가 추가로 필요합니다.');return;}
  try{const pa=phenoAge(q),d=pa-p.age,nb=nhisBA(p);document.getElementById('ba-pheno-result').hidden=false;document.getElementById('ba-pheno-age').textContent=`${pa.toFixed(1)}세`;document.getElementById('ba-pheno-delta').textContent=`${d>=0?'+':''}${d.toFixed(1)}년`;document.getElementById('ba-pheno-nhis').textContent=`${nb.toFixed(1)}세`;document.getElementById('ba-pheno-label').textContent=(Math.sign(d)===Math.sign(nb-p.age)||Math.abs(d)<2||Math.abs(nb-p.age)<2)?'두 모델 방향 대체로 일치':'두 모델이 다른 신호';}catch(e){alert(e.message||'계산할 수 없습니다.');}
};
const example=()=>{set('ba-age',46);set('ba-sex','male');toggleSex();set('ba-height',170);set('ba-waist',80);set('ba-sbp',120);set('ba-fbs',90);set('ba-creatinine',.9);set('ba-ast',22);set('ba-hgb',15);set('ba-vo2',48);copyGoal();};
const phenoExample=()=>{if(!Number.isFinite(n('ba-age')))example();set('ba-albumin',4.5);set('ba-crp',1);set('ba-lymph',30);set('ba-mcv',90);set('ba-rdw',13);set('ba-alp',70);set('ba-wbc',6);};
const reset=()=>{document.querySelectorAll('#bioage-lab input').forEach(e=>e.value='');set('ba-sex','male');toggleSex();['ba-main-result','ba-results','ba-sim-result','ba-pheno-result'].forEach(id=>{const e=document.getElementById(id);if(e)e.hidden=true});lastBA=null;};
const init=()=>{const root=document.getElementById('bioage-lab');if(!root||root.dataset.ready)return;root.dataset.ready='1';toggleSex();document.getElementById('ba-sex')?.addEventListener('change',toggleSex);document.getElementById('ba-calc')?.addEventListener('click',render);document.getElementById('ba-example')?.addEventListener('click',example);document.getElementById('ba-reset')?.addEventListener('click',reset);document.getElementById('ba-copy-goal')?.addEventListener('click',copyGoal);document.getElementById('ba-sim')?.addEventListener('click',renderSim);document.getElementById('ba-pheno')?.addEventListener('click',renderPheno);document.getElementById('ba-pheno-example')?.addEventListener('click',phenoExample);};
window.BioAgeLab={init,nhisBA,phenoAge,egfr2021,fitnessAge};
const observer=new MutationObserver(()=>init());observer.observe(document.documentElement,{childList:true,subtree:true});setTimeout(init,0);
})();
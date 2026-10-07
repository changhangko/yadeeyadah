import {drawingPalette as C} from './drawing-palette.js';
const phases=[
 [['Trace streets','Add parcel boundaries','Combine urban inputs'],['提取街道网络','叠加地块边界','整理城市输入']],
 [['Start from footprints','Extrude building mass','Resolve the scenario'],['从地块与占地开始','生成建筑体量','形成城市方案']],
 [['Generate alternatives','Vary the planning inputs','Compare alternatives'],['生成多个候选方案','调整规划输入','比较候选方案']],
 [['Pair inputs with analysis','Build training examples','Fit the model structure'],['配对输入与分析结果','组织训练样本','训练模型结构']],
 [['Provide a new scenario','Pass inputs through the model','Return estimated indicators'],['输入新方案','将输入传入模型','返回估算指标']],
 [['Read the indicators','Return feedback to the inputs','Adjust and test again'],['查看分析指标','将反馈返回输入端','调整后再次测试']]
];
const root=document.getElementById('todaiProject');
if(root){
 const workspace=root.querySelector('.td-workspace'),svg=workspace.querySelector('svg');
 const player=document.createElement('div');player.className='td-flow-player';
 svg.replaceWith(player);player.append(svg);
 const caption=document.createElement('p');caption.className='td-flow-live';caption.setAttribute('aria-live','polite');
 const replay=document.createElement('button');replay.type='button';replay.className='td-flow-replay';
 player.append(caption,replay);
 let stage=0,frame=0,lastPhase=-1,lastProgress=1;
 const zh=()=>document.documentElement.lang.startsWith('zh');
 const pt=(cx,cy,x,y,z=0)=>[cx+(x-y)*.8,cy+(x+y)*.36-z];
 const points=ps=>ps.map(p=>p.map(n=>n.toFixed(2)).join(',')).join(' ');
 const polygon=(ps,fill)=>`<polygon points="${points(ps)}" fill="${fill}" stroke="${C.ink}" stroke-width=".8"/>`;
 const plane=(cx,cy,x,y,w,h,fill)=>polygon([pt(cx,cy,x,y),pt(cx,cy,x+w,y),pt(cx,cy,x+w,y+h),pt(cx,cy,x,y+h)],fill);
 const text=(s,x,y,size=14)=>`<text x="${x}" y="${y}" fill="${C.ink}" font-size="${(size/Math.min(1,(svg.clientWidth||720)/720)).toFixed(2)}">${s}</text>`;
 const path=(d,color=C.slate,extra='')=>`<path d="${d}" fill="none" stroke="${color}" stroke-width="2" ${extra}/>`;
 const arrow=(x,y,X,Y,p=1)=>path(`M${x} ${y}L${X} ${Y}`,C.terracotta,`pathLength="1" stroke-dasharray="1" stroke-dashoffset="${1-Math.min(1,p)}"`)+(p>.9?path(`M${X-7} ${Y-5}L${X} ${Y}L${X-7} ${Y+5}`,C.terracotta):'');
 function mass(cx,cy,x,y,h){
  const a=pt(cx,cy,x,y,h),b=pt(cx,cy,x+28,y,h),c=pt(cx,cy,x+28,y+28,h),d=pt(cx,cy,x,y+28,h);
  return polygon([pt(cx,cy,x+28,y),pt(cx,cy,x+28,y+28),c,b],C.ochreShade)+polygon([pt(cx,cy,x,y+28),pt(cx,cy,x+28,y+28),c,d],C.ochreLight)+polygon([a,b,c,d],C.ochre);
 }
 function scene(cx,cy,heights,progress=1){
  let s=plane(cx,cy,-65,-65,130,130,C.context)+plane(cx,cy,-54,39,108,14,C.sageLight);
  [[-46,-46],[-4,-46],[-46,-4],[-4,-4]].forEach(([x,y],i)=>{s+=mass(cx,cy,x,y,heights[i]*progress);});return s;
 }
 function tree(cx,cy,p){
  const nodes=[[cx,cy],[cx-40,cy+45],[cx+40,cy+45],[cx-65,cy+95],[cx-15,cy+95],[cx+15,cy+95],[cx+65,cy+95]];
  const links=[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]];
  return links.map(([a,b],i)=>{const A=nodes[a],B=nodes[b];return path(`M${A[0]} ${A[1]}L${B[0]} ${B[1]}`,C.slate,`opacity="${Math.max(.12,Math.min(1,p*3-i*.16))}"`);}).join('')+nodes.map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="5" fill="${i?C.sage:C.terracotta}" stroke="${C.ink}" stroke-width=".7"/>`).join('');
 }
 function render(p){
  lastProgress=p;
  const phase=Math.min(2,Math.floor(p*3));
  const sentence=phases[stage][zh()?1:0][phase];
  if(lastPhase!==phase||caption.textContent!==sentence){caption.textContent=sentence;lastPhase=phase;}
  replay.textContent=zh()?'重新播放这一阶段':'REPLAY THIS STAGE';
  svg.setAttribute('viewBox','0 0 720 350');
  svg.setAttribute('aria-label',sentence);
  let s=text(zh()?['01 / 城市输入','02 / 参数化生成','03 / 候选方案比较','04 / 模型训练','05 / 估算指标','06 / 调整与再测试'][stage]:['01 / URBAN INPUTS','02 / GENERATE GEOMETRY','03 / COMPARE ALTERNATIVES','04 / TRAIN THE MODEL','05 / ESTIMATE INDICATORS','06 / ADJUST + RETEST'][stage],28,33,17);
  if(stage===0){
   s+=plane(350,190,-80,-80,160,160,C.context);
   for(let y=0;y<3;y++)for(let x=0;x<3;x++){const a=Math.max(.08,Math.min(1,p*2-(x+y)*.09));s+=`<g opacity="${a}">${plane(350,190,-64+x*44,-64+y*44,32,32,C.ochreLight)}</g>`;}
   s+=path('M311.6 154L430 207.28M276.4 169.84L394.8 223.12M388.4 154L270 207.28M423.6 169.84L305.2 223.12',C.slate,`pathLength="1" stroke-dasharray="1" stroke-dashoffset="${1-p}"`);
   s+=text(zh()?'街道 + 地籍 + 规划限制':'STREETS + CADASTRE + CONSTRAINTS',28,304);
  }else if(stage===1){
   s+=scene(350,215,[46,64,32,54],Math.min(1,p*1.5));
   s+=text(zh()?'相同占地，通过规则生成体量':'FOOTPRINTS → RULES → BUILDING MASS',28,304);
  }else if(stage===2){
   s+=scene(195,206,[30+26*p,54-20*p,30,48]);s+=scene(525,206,[50,30+26*p,45-16*p,35]);
   s+=text('A',185,279,17)+text('B',515,279,17);
   s+=arrow(325,165,395,165,p);
   s+=text(zh()?'改变输入，比较不同方案的分析结果':'VARY INPUTS / COMPARE ANALYTICAL OUTCOMES',28,318);
  }else if(stage===3){
   s+=text(zh()?'训练样本':'TRAINING EXAMPLES',35,83)+text('H2O / XGBOOST',463,83);
   s+=`<rect x="35" y="105" width="265" height="160" fill="${C.context}" stroke="${C.line}"/>`;
   s+=text(zh()?'输入':'INPUT',55,130)+text(zh()?'分析结果':'ANALYSIS',180,130);
   for(let i=0;i<4;i++){const a=Math.max(.08,Math.min(1,p*3-i*.3));s+=`<g opacity="${a}">${path(`M45 ${146+i*28}H290`,C.line)}${text('X'+(i+1),65,166+i*28)}${text('Y'+(i+1),195,166+i*28)}</g>`;}
   s+=arrow(321,182,420,182,p)+tree(540,117,Math.max(0,(p-.25)/.75));
   s+=text(zh()?'样本配对与模型结构示意，不执行训练':'SCHEMATIC PAIRS + MODEL / NO TRAINING EXECUTION',28,318,13);
  }else if(stage===4){
   s+=scene(135,192,[30,42,24,36]);
   s+=text(zh()?'新方案':'NEW SCENARIO',52,273);
   s+=arrow(249,175,278,175,p)+tree(365,112,p)+arrow(450,175,485,175,Math.max(0,(p-.35)/.65));
   s+=`<g opacity="${Math.max(.1,p)}"><rect x="508" y="128" width="182" height="86" fill="${C.sageLight}" stroke="${C.ink}"/>${text(zh()?'估算指标':'ESTIMATED',525,159)}${text(zh()?'返回界面比较':'INDICATORS',525,187)}</g>`;
   s+=text(zh()?'预测流程示意，不运行原始 XGBoost 模型':'PREDICTION FLOW / ORIGINAL MODEL NOT EXECUTED',28,318,13);
  }else{
   const adjusted=Math.max(0,(p-.55)/.45);
   s+=scene(170,188,[32+adjusted*22,48-adjusted*14,28,42]);
   s+=arrow(290,151,443,151,Math.min(1,p*2));
   s+=`<rect x="464" y="117" width="213" height="90" fill="${C.sageLight}" stroke="${C.ink}"/>`;
   s+=text(zh()?'查看指标':'READ INDICATORS',480,148)+text(zh()?'调整输入':'ADJUST INPUTS',480,179);
   s+=path('M570 217V274H170V246',C.terracotta,`pathLength="1" stroke-dasharray="1" stroke-dashoffset="${1-Math.max(0,(p-.25)/.75)}"`);
   if(p>.9)s+=path('M164 253L170 246L176 253',C.terracotta);
   s+=text(zh()?'反馈返回输入，体量随下一轮调整':'FEEDBACK → INPUT CHANGE → NEXT SCENARIO',28,318,13);
  }
  svg.innerHTML=s;
 }
 function play(i,instant=false){
  cancelAnimationFrame(frame);stage=i;lastPhase=-1;workspace.dataset.stage=String(i);
  root.querySelectorAll('[data-td-step]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.tdStep)===i)));
  root.querySelectorAll('[data-td-panel]').forEach(p=>p.hidden=Number(p.dataset.tdPanel)!==i);
  if(instant||window.matchMedia('(prefers-reduced-motion: reduce)').matches){render(1);return;}
  const start=performance.now();
  const tick=now=>{const t=Math.min(1,(now-start)/2800);render(t);if(t<1&&!document.hidden)frame=requestAnimationFrame(tick);};
  render(0);frame=requestAnimationFrame(tick);
 }
 root.querySelectorAll('[data-td-step]').forEach(b=>b.addEventListener('click',()=>play(Number(b.dataset.tdStep))));
 replay.addEventListener('click',()=>play(stage));
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);render(1);}});
 new MutationObserver(()=>play(stage,true)).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 new ResizeObserver(()=>render(lastProgress)).observe(player);
 play(0,true);
}

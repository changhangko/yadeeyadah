import {applyProjectEvidence} from './portfolio-evidence.js';
import { drawEditorialDiagram, refineFacadeDiagrams } from './diagrams.js';
const UI = {"en":{"roleLine":"CREATIVE TECHNOLOGIST / COMPUTATIONAL DESIGNER","about":"[ PROFILE ]","themeLight":"[ LIGHT ]","themeDark":"[ DARK ]","index":"[ INDEX ]","lang":"[ EN / 中文 ]","footerLeft":"ACGT / SELECTED WORK","footerRight":"MUTATION → DECODE","close":"[ ESC / CLOSE ]","labels":{"role":"Role","tools":"Tools","output":"Output","year":"Year"},"story":{"question":"01 / Question","built":"02 / Built","judgement":"03 / Judgement"},"taste":"Taste / Decision Log","next":"NEXT PROJECT","indexTitle":"PROJECT INDEX","indexIntro":"Five bodies of work: SPACE / SYSTEM / CODE / OBSERVATION / RESEARCH. Each category gathers related projects and studies into one coherent practice area.","aboutTitle":"PROFILE / PRACTICE","aboutLead":"Creative Technologist and Computational Designer with five years of professional experience across computational design, generative workflows, 3D modelling, internal tools, web development and AI-assisted prototyping.","aboutText":"I currently work at Bates Smart in Melbourne, where my role has grown from project-based computational design into toolmaking, interface thinking and digital workflows. I use Rhino, Grasshopper and Python to automate repeated design and modelling tasks; build internal tools such as Rhino Tabs; develop browser-based spatial tools using HTML, CSS, JavaScript and Mapbox; and use Claude Code, Codex and ChatGPT for rapid prototyping and iterative interface development. Alongside technical work, I have contributed to competitive bids and client-facing design presentations. My current interests sit around AI-native interaction, visual judgement, multimodal interfaces, creative technology and product experience.","aboutBlocks":[["Current","Computational Designer<br>Bates Smart / Melbourne<br>2021 — Present"],["Practice","Computational Design · Creative Technology · Internal Tools · Web / Spatial Interaction · AI-assisted Prototyping"],["Selected Work","Rhino Tabs · Melbourne City Model / Insight Web · Parametric + automation workflows · Competitive residential / mixed-use bids"],["Client + Collaboration","Client Presentation · Design Pitch · Developer-facing communication · Cross-disciplinary collaboration"],["Education","UNSW — Bachelor of Computational Design<br>Graduated with Distinction · Dean’s Merit List"],["Research","TODAI — Machine-learning-powered planning tool for Transit-Oriented Development<br>Published at CAADRIA"],["Tools","Rhino · Grasshopper · Python · JavaScript · HTML/CSS · Mapbox · Revit · GitHub · Claude Code · Codex · ChatGPT"],["Languages","Mandarin Chinese — Native<br>English — Full Professional Proficiency"],["Contact","<a class=\"contact-link\" href=\"mailto:zhanghangge@gmail.com\">zhanghangge@gmail.com</a><br>Melbourne / Beijing"]],"galleryTitle":"Selected Frames","profileEyebrow":"01 / PROFILE","profileMetaLeft":"SELF / IDENTITY","profileMetaRight":"ACGT → DECODE","conceptEyebrow":"02 / DESIGN CONCEPT","conceptTitle":"GENOME / MUTATION / DECODE","conceptText1":"This portfolio draws from the conceptual language of science fiction films such as Blade Runner, Ex Machina and Gattaca. Rather than borrowing their aesthetics directly, I am interested in the questions they share: how identity is encoded, how machines interpret humans, how systems classify individuals, and where judgement sits between data and intuition.","conceptText2":"The Genome interface translates these ideas into a navigational system. Projects appear as mutations within a field of ACGT sequences, and interaction becomes a process of decoding. The website is therefore not only a container for work, but a small speculative system about perception, identity and machine-readable judgement.","practiceEyebrow":"03 / EXPERIENCE + CAPABILITIES"},"zh":{"roleLine":"创意技术 / 计算设计","about":"[ 个人简介 ]","themeLight":"[ 浅色 ]","themeDark":"[ 深色 ]","index":"[ 项目目录 ]","lang":"[ 中文 / EN ]","footerLeft":"ACGT / 作品索引","footerRight":"变异 → 解码","close":"[ ESC / 关闭 ]","labels":{"role":"角色","tools":"工具","output":"产出","year":"年份"},"story":{"question":"01 / 问题","built":"02 / 构建","judgement":"03 / 判断"},"taste":"审美判断 / 决策记录","next":"下一个项目","indexTitle":"项目索引","indexIntro":"五个实践方向：空间 / 系统 / 代码 / 观察 / 研究.每个大类内部再整合相关项目与研究，而不是把所有项目平铺在同一级.","aboutTitle":"个人简介","aboutLead":"拥有 5 年专业经验的 Creative Technologist / Computational Designer，工作横跨计算设计、生成式设计、3D 建模、内部数字工具、网页开发与 AI-assisted prototyping.","aboutText":"目前就职于墨尔本 Bates Smart.工作从项目中的计算设计逐渐延伸到工具开发、界面思考与数字工作流：使用 Rhino、Grasshopper 与 Python 把重复的设计、建模和数据处理转化为可复用工具；设计 Rhino Tabs 等内部工具；结合 HTML / CSS / JavaScript / Mapbox 开发浏览器中的空间与城市数据界面；同时长期使用 Claude Code、Codex 与 ChatGPT 进行快速原型、测试和多轮界面迭代.除了技术工作，我也参与竞争性投标、客户汇报与跨专业沟通.现在希望进一步探索 AI-native interaction、视觉判断、多模态界面、Creative Technology 与产品体验.","aboutBlocks":[["当前","Computational Designer<br>Bates Smart / Melbourne<br>2021 — 至今"],["实践方向","计算设计 · Creative Technology · 内部工具 · Web / Spatial Interaction · AI-assisted Prototyping"],["代表工作","Rhino Tabs · Melbourne City Model / Insight Web · 参数化与自动化工作流 · 住宅及综合开发竞争性投标"],["客户与协作","客户汇报 · Design Pitch · 开发商沟通 · 跨专业协作"],["教育","UNSW — Bachelor of Computational Design<br>Distinction 毕业 · Dean’s Merit List"],["研究","TODAI — 基于机器学习的 TOD 规划工具<br>发表于 CAADRIA 国际会议"],["工具","Rhino · Grasshopper · Python · JavaScript · HTML/CSS · Mapbox · Revit · GitHub · Claude Code · Codex · ChatGPT"],["语言","普通话 — 母语<br>英语 — Full Professional Proficiency"],["联系","<a class=\"contact-link\" href=\"mailto:zhanghangge@gmail.com\">zhanghangge@gmail.com</a><br>墨尔本 / 北京"]],"galleryTitle":"摄影选帧","profileEyebrow":"01 / 关于我","profileMetaLeft":"自我 / 身份","profileMetaRight":"ACGT → 解码","conceptEyebrow":"02 / 设计概念","conceptTitle":"基因 / 变异 / 解码","conceptText1":"这个作品集的设计受到《银翼杀手》《机械姬》《Gattaca》等科幻电影在概念层面的影响.与其直接借用它们的视觉风格，我更关注这些作品共同讨论的问题：身份如何被编码，机器如何理解人，系统如何分类个体，以及判断如何存在于数据与直觉之间.","conceptText2":"Genome 界面把这些概念转化成一套导航系统.项目以“变异”的形式散布在 ACGT 序列中，用户通过交互逐渐完成“解码”.因此，这个网站不仅是作品的容器，也像一个关于感知、身份与机器可读判断的小型推演系统.","practiceEyebrow":"03 / 经历 + 能力"}};

let PROJECTS=[];
let PHOTO_DATA=null;
let IMAGE_LAYOUT={};
let TEXT_OVERRIDES={};
let SERVER_PROJECTS=[];
let SERVER_PHOTO_DATA=null;
let SERVER_IMAGE_LAYOUT={};
let SERVER_TEXT_OVERRIDES={};
const L="ACGT", genome=document.getElementById("genome");
const LANG_STORAGE_KEY='garry_portfolio_lang_v2';
const THEME_STORAGE_KEY='garry_portfolio_theme_v1';
const savedTheme=localStorage.getItem(THEME_STORAGE_KEY);
if(savedTheme==='dark')document.body.classList.remove('light');
else document.body.classList.add('light');
let zones=[], currentProject=0, lang=localStorage.getItem(LANG_STORAGE_KEY)||'zh';
let editMode=false, editSnapshot=null, dirty=false;
let armedMutation=null;
let transitionRunning=false;
let interactionHintTimer=null;
let interactionHintShown=false;
let mutationInteracted=false;

const q=id=>document.getElementById(id);

const isCoarsePointer=window.matchMedia?.('(pointer: coarse)').matches;

/* ---------- Reader text size ---------- */
const TEXT_SCALE_DEFAULT=1.2;
const TEXT_SCALE_MIN=.9;
const TEXT_SCALE_MAX=1.5;
let textScale=Number.parseFloat(localStorage.getItem('garry_portfolio_text_scale'));
if(!Number.isFinite(textScale))textScale=TEXT_SCALE_DEFAULT;
textScale=Math.min(TEXT_SCALE_MAX,Math.max(TEXT_SCALE_MIN,textScale));

function applyTextScale(){
  textScale=Math.round(textScale*10)/10;
  document.documentElement.style.setProperty('--content-scale',String(textScale));
  const rootStyle=document.documentElement.style;
  rootStyle.setProperty('--content-9',`${(9*textScale).toFixed(1)}px`);
  rootStyle.setProperty('--content-10',`${(10*textScale).toFixed(1)}px`);
  rootStyle.setProperty('--content-12',`${(12*textScale).toFixed(1)}px`);
  rootStyle.setProperty('--content-14',`${(14*textScale).toFixed(1)}px`);
  rootStyle.setProperty('--content-18',`${(18*textScale).toFixed(1)}px`);
  document.querySelectorAll('[data-text-delta]').forEach(btn=>{
    const delta=Number.parseFloat(btn.dataset.textDelta)||0;
    btn.disabled=(delta<0&&textScale<=TEXT_SCALE_MIN+.001)||(delta>0&&textScale>=TEXT_SCALE_MAX-.001);
  });
  localStorage.setItem('garry_portfolio_text_scale',String(textScale));
}

function bindTextScaleControls(){
  document.querySelectorAll('[data-text-delta]').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.stopPropagation();
      const delta=Number.parseFloat(btn.dataset.textDelta)||0;
      textScale=Math.min(TEXT_SCALE_MAX,Math.max(TEXT_SCALE_MIN,textScale+delta));
      applyTextScale();
    });
  });
  applyTextScale();
}


async function loadData(){
  const [projectsRes, photoRes, layoutRes, textRes] = await Promise.all([
    fetch('/data/projects.json'),
    fetch('/data/photography.json'),
    fetch('/data/image-layout.json').catch(()=>null),
    fetch('/data/text-overrides.json').catch(()=>null)
  ]);
  if(!projectsRes.ok || !photoRes.ok) throw new Error('Portfolio data failed to load.');
  PROJECTS = await projectsRes.json();
  PHOTO_DATA = await photoRes.json();
  IMAGE_LAYOUT = layoutRes?.ok ? await layoutRes.json() : {};
  TEXT_OVERRIDES = textRes?.ok ? await textRes.json() : {};
  SERVER_PROJECTS = deepClone(PROJECTS);
  SERVER_PHOTO_DATA = deepClone(PHOTO_DATA);
  SERVER_IMAGE_LAYOUT = deepClone(IMAGE_LAYOUT);
  SERVER_TEXT_OVERRIDES = deepClone(TEXT_OVERRIDES);
}
function deepClone(value){return JSON.parse(JSON.stringify(value));}
function t(){return UI[lang]}
function seq(n){let s="";for(let i=0;i<n;i++)s+=L[Math.random()*4|0];return s}
function proj(i){return PROJECTS[i][lang]}
function cells(s,mutationAt=-1,p=-1){return [...s].map((ch,i)=>`<span class="cell ${i===mutationAt?"mutation":""}" ${i===mutationAt?`data-p="${p}" tabindex="0" role="button" aria-label="Decode project ${PROJECTS[p]?.[lang]?.title||""}"`:""}>${ch}</span>`).join("")}
function mutationRows(count,total){
  const top=2;
  const bottom=Math.max(top,count-3);
  const available=[];
  for(let r=top;r<=bottom;r++) available.push(r);
  total=Math.min(total,available.length);
  if(total<=1) return [available[Math.floor(available.length/2)]||top];
  const selected=[];
  for(let i=0;i<total;i++){
    const index=Math.round(i*(available.length-1)/(total-1));
    const row=available[index];
    if(!selected.includes(row)) selected.push(row);
  }
  return selected;
}

function interactionHintCopy(){
  const dark=!document.body.classList.contains('light');
  if(lang==='zh'){
    return {
      title:'MUTATION / PROJECT ENTRY',
      brief:dark?'点击白色基因突变进入项目':'点击黑色基因突变进入项目',
      meta:'高亮碱基 = 项目入口',
      tail:'CLICK / TAP TO OPEN'
    };
  }
  return {
    title:'MUTATION / PROJECT ENTRY',
    brief:dark?'CLICK A WHITE MUTATION TO ENTER A PROJECT':'CLICK A BLACK MUTATION TO ENTER A PROJECT',
    meta:'HIGHLIGHTED BASE = PROJECT ENTRY',
    tail:'CLICK / TAP TO OPEN'
  };
}

function hintNoise(length){
  let out='';
  for(let i=0;i<length;i++)out+='ACGT'[Math.random()*4|0];
  return out;
}

function seedInteractionHint(){
  [
    ['interactionHintTitle',24],
    ['interactionHintBrief',44],
    ['interactionHintMeta',36],
    ['interactionHintTail',22]
  ].forEach(([id,n])=>{
    const el=q(id);
    if(el)el.textContent=hintNoise(n);
  });
}

function decodeInteractionHint(){
  const copy=interactionHintCopy();
  flipLine(q('interactionHintTitle'),copy.title,0);
  flipLine(q('interactionHintBrief'),copy.brief,3);
  flipLine(q('interactionHintMeta'),copy.meta,6);
  flipLine(q('interactionHintTail'),copy.tail,9);
}

function flickInteractionHintLanguage(){
  const hint=q('interactionHint');
  if(!hint||!hint.classList.contains('visible'))return;
  const copy=interactionHintCopy();

  /* Language changes stay in-place and mechanically re-decode, airport-board style. */
  flipLine(q('interactionHintTitle'),copy.title,0);
  flipLine(q('interactionHintBrief'),copy.brief,4);
  flipLine(q('interactionHintMeta'),copy.meta,7);
  flipLine(q('interactionHintTail'),copy.tail,10);
}

function showInteractionHint(){
  if(interactionHintShown||mutationInteracted||transitionRunning||document.querySelector('.overlay.visible'))return;
  const hint=q('interactionHint');
  if(!hint)return;

  seedInteractionHint();
  hint.classList.remove('out');
  hint.classList.add('visible');
  hint.setAttribute('aria-hidden','false');
  interactionHintShown=true;

  /* Let the viewer register the ACGT block first, then decode it like a project popup. */
  setTimeout(()=>{
    if(hint.classList.contains('visible'))decodeInteractionHint();
  },240);
}

function hideInteractionHint(){
  clearTimeout(interactionHintTimer);
  const hint=q('interactionHint');
  if(!hint||!hint.classList.contains('visible'))return;
  hint.classList.add('out');
  hint.setAttribute('aria-hidden','true');
  setTimeout(()=>hint.classList.remove('visible','out'),240);
}

function registerMutationInteraction(){
  mutationInteracted=true;
  hideInteractionHint();
}

function scheduleInteractionHint(){
  clearTimeout(interactionHintTimer);
  if(interactionHintShown||mutationInteracted)return;
  interactionHintTimer=setTimeout(showInteractionHint,5000);
}

function build(){
  genome.innerHTML="";zones=[];armedMutation=null;
  const mobile=innerWidth<700,rowH=mobile?31:34;
  const count=Math.max(12,Math.floor((innerHeight-(mobile?142:136))/rowH));
  const chars=Math.ceil(innerWidth/(mobile?13:15))+45;

  // More discoverable mutations without adding more projects.
  const copies=mobile?2:3;
  const desiredMutations=PROJECTS.length*copies;
  const totalMutations=Math.min(desiredMutations,Math.max(PROJECTS.length,count-4));
  const positions=mutationRows(count,totalMutations);
  const mutationMap=new Map();
  positions.forEach((row,index)=>mutationMap.set(row,index%PROJECTS.length));

  for(let r=0;r<count;r++){
    const row=document.createElement("div");row.className="row";
    const s=seq(chars);let mut=-1,p=-1;
    if(mutationMap.has(r)){
      p=mutationMap.get(r);
      mut=12+(r*11)%Math.max(18,chars-28);
      row.classList.add("zone");row.dataset.p=p;
    }
    const track=document.createElement("div");track.className="track";track.innerHTML=cells(s,mut,p)+cells(s,-1,-1);row.appendChild(track);
    if(p>=0){
      const d=document.createElement("div");d.className="decode";d.dataset.p=p;d.setAttribute("role","button");d.tabIndex=0;
      d.innerHTML=`<div class="line title"></div><div class="line brief"></div><div class="line meta"></div><div class="line year"></div>`;
      row.appendChild(d);zones.push(row);
    }
    genome.appendChild(row);
  }
  bind();
  scheduleInteractionHint();
}

function flipLine(el,target,delay=0){
  const chars="ACGT";let step=0,max=8;
  const timer=setInterval(()=>{
    step++;let out="";
    for(let i=0;i<target.length;i++){
      if(target[i]===" "){out+=" ";continue}
      const settle=Math.floor((i/Math.max(1,target.length))*4)+3;
      out+=step>=settle?target[i]:chars[Math.random()*4|0];
    }
    el.textContent=out;
    if(step>=max){el.textContent=target;clearInterval(timer)}
  },72+delay*2);
}

function activate(row){
  zones.forEach(z=>{if(z!==row&&!z.classList.contains('armed'))z.classList.remove("active")});
  row.classList.add("active");
  const p=proj(+row.dataset.p),d=row.querySelector('.decode');
  flipLine(d.querySelector('.title'),`${p.title}`);
  flipLine(d.querySelector('.brief'),p.brief,4);
  flipLine(d.querySelector('.meta'),p.meta,7);
  flipLine(d.querySelector('.year'),p.year,10);
}

function bind(){
  document.querySelectorAll('.mutation').forEach(m=>{
    const row=m.closest('.zone');
    m.addEventListener('mouseenter',()=>{registerMutationInteraction();if(!armedMutation)activate(row)});
    m.addEventListener('focus',()=>{registerMutationInteraction();if(!armedMutation)activate(row)});
    m.addEventListener('click',e=>{
      e.stopPropagation();
      registerMutationInteraction();
      if(transitionRunning)return;
      if(armedMutation===row){
        const projectIndex=+row.dataset.p;
        armedMutation=null;
        zones.forEach(z=>z.classList.remove('armed'));
        transitionToProject(projectIndex);
        return;
      }
      armedMutation=row;
      zones.forEach(z=>{
        z.classList.remove('armed');
        if(z!==row)z.classList.remove('active');
      });
      row.classList.add('armed');
      activate(row);
    });
    m.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();m.click()}
    });
  });

  zones.forEach(row=>{
    row.addEventListener('mouseleave',()=>{
      if(armedMutation!==row)row.classList.remove('active');
    });
    const d=row.querySelector('.decode');
    d.addEventListener('mouseenter',()=>{registerMutationInteraction();row.classList.add('active')});
    d.addEventListener('click',e=>{e.stopPropagation();registerMutationInteraction();transitionToProject(+row.dataset.p)});
    d.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();transitionToProject(+row.dataset.p)}
    });
  });
}

const projectEl=q('project'),indexPanel=q('indexPanel'),aboutPanel=q('aboutPanel');
const pid=q('pid'),pt=q('pt'),pd=q('pd'),pbrief=q('pbrief');
const prole=q('prole'),ptools=q('ptools'),poutput=q('poutput'),pyear=q('pyear');
const pquestion=q('pquestion'),pbuilt=q('pbuilt'),pjudgement=q('pjudgement'),pmedia=q('pmedia'),ptaste=q('ptaste'),nextProjectName=q('nextProjectName');
const photoWallWrap=q('photoWallWrap'),photoWall=q('photoWall'),architectureProject=q('architectureProject'),embeddedProject=q('embeddedProject'),studioLibraryFrame=q('studioLibraryFrame'),systemAnimationProject=q('systemAnimationProject'),methodAnimationProject=q('methodAnimationProject'),methodAnimationGrid=q('methodAnimationGrid'),parametricProject=q('parametricProject'),todaiProject=q('todaiProject');
const editorBar=q('editorBar'),editProjectBtn=q('editProject'),pmetaEdit=q('pmetaEdit'),editorIndicator=q('editorIndicator');

/* Private editor gate. This is a local deterrent, not secure authentication. */
const EDITOR_PASSWORD='685536';
const editParams=new URLSearchParams(window.location.search);
let editorUnlocked=false;

function showEditorLogin(){
  const modal=q('editorLogin');
  const input=q('editorPasswordInput');
  const error=q('editorLoginError');
  if(!modal||!input)return;
  error.textContent='';
  input.value='';
  modal.classList.add('visible');
  modal.setAttribute('aria-hidden','false');
  requestAnimationFrame(()=>input.focus());
}
function hideEditorLogin(){
  const modal=q('editorLogin');
  if(!modal)return;
  modal.classList.remove('visible');
  modal.setAttribute('aria-hidden','true');
}
function submitEditorLogin(){
  const input=q('editorPasswordInput');
  const error=q('editorLoginError');
  if(!input)return;
  if(input.value===EDITOR_PASSWORD){
    editorUnlocked=true;
    editProjectBtn.style.display='inline-flex';
    if(editorIndicator)editorIndicator.style.display='inline-flex';
    hideEditorLogin();
    if(projectEl.classList.contains('visible')&&!editMode)enterEditMode();
  }else{
    error.textContent=lang==='zh'?'密码错误':'INCORRECT PASSWORD';
    input.select();
  }
}


function hidePanels(){if(editMode)exitEditMode(false);[projectEl,indexPanel,aboutPanel].forEach(el=>{el.classList.remove('visible');el.setAttribute('aria-hidden','true')});document.body.style.overflow='hidden';}
function showPanel(el){if(editMode)exitEditMode(false);[projectEl,indexPanel,aboutPanel].forEach(panel=>{panel.classList.remove('visible');panel.setAttribute('aria-hidden','true')});el.classList.add('visible');el.setAttribute('aria-hidden','false');el.scrollTop=0;}

function rootPath(path){return path?.startsWith('/')?path:`/${path||''}`;}

const localMediaPreviews=new Map();
const localPhotoPreviews=new Map();
const editedFileBlobs=new Map();
let pendingImageTarget=null;
let selectedImageTarget=null;
let layoutDirty=false;
let gridLayoutMode=true;
let gridSnap=true;
let selectedLayoutElement=null;
let layoutPointerState=null;



function stableLayoutKey(el){
 if(!el)return '';
 if(el.dataset.layoutKey)return el.dataset.layoutKey;
 if(el.id)return `id:${el.id}`;
 return el.dataset.layoutEdit||'';
}
function genericLayoutValue(key){
 const d=IMAGE_LAYOUT[key]||{};
 return {x:Number(d.x)||0,y:Number(d.y)||0,width:Number(d.width)||100};
}
function applyGenericLayout(el){
 const key=stableLayoutKey(el);if(!key)return;
 const d=genericLayoutValue(key);

 // Use the independent CSS `translate` property instead of overwriting `transform`.
 // Some portfolio sections already rely on transforms for centering / image positioning
 // (e.g. .architecture-case uses translateX(-50%)).
 if(d.x||d.y)el.style.translate=`${d.x}px ${d.y}px`;
 else el.style.removeProperty('translate');

 if(d.width!==100){el.style.width=`${d.width}%`;el.style.maxWidth='none'}
 else if(!el.matches('[data-edit-image]')){el.style.removeProperty('width');el.style.removeProperty('max-width')}
}
function applyAllGenericLayouts(root=document){root.querySelectorAll?.('[data-layout-edit]').forEach(applyGenericLayout)}
function layoutGridUnitX(){return q('layoutGridOverlay')?.getBoundingClientRect().width/12||80}
function snapLayoutDelta(v,axis='y'){
 if(!gridSnap)return v;
 const unit=axis==='x'?layoutGridUnitX()/2:8;
 return Math.round(v/unit)*unit;
}
function updateLayoutRecord(el,patch){
 const key=stableLayoutKey(el);if(!key)return;
 IMAGE_LAYOUT[key]={...(IMAGE_LAYOUT[key]||{}),...genericLayoutValue(key),...patch};
 applyGenericLayout(el);markLayoutDirty();refreshLayoutSelectionToolbar();
}
function refreshLayoutSelectionToolbar(){
 const bar=q('layoutSelectionToolbar');
 if(!bar||!selectedLayoutElement){bar?.classList.remove('visible');return}
 const d=genericLayoutValue(stableLayoutKey(selectedLayoutElement));
 q('layoutSelectionName').textContent=selectedLayoutElement.id||selectedLayoutElement.dataset.layoutKey||selectedLayoutElement.tagName;
 q('layoutSelectionMetrics').textContent=`X ${Math.round(d.x)} / Y ${Math.round(d.y)} / W ${Math.round(d.width)}%`;
 bar.classList.add('visible');bar.setAttribute('aria-hidden','false');
}
function selectLayoutElement(el){
 projectEl.querySelectorAll('.layout-selected').forEach(x=>x.classList.remove('layout-selected'));
 selectedLayoutElement=el;el?.classList.add('layout-selected');refreshLayoutSelectionToolbar();
}
function resetSelectedLayout(){
 if(!selectedLayoutElement)return;
 const key=stableLayoutKey(selectedLayoutElement);if(key)delete IMAGE_LAYOUT[key];
 selectedLayoutElement.style.removeProperty('translate');
 if(!selectedLayoutElement.matches('[data-edit-image]')){
   selectedLayoutElement.style.removeProperty('width');
   selectedLayoutElement.style.removeProperty('max-width')
 }
 markLayoutDirty();refreshLayoutSelectionToolbar();
}
function setGridLayoutMode(on){
 gridLayoutMode=!!on;projectEl.classList.toggle('grid-layout-active',gridLayoutMode);
 q('gridModeToggle').textContent=gridLayoutMode?'[ GRID / ON ]':'[ GRID / OFF ]';
 if(!gridLayoutMode){
   projectEl.querySelectorAll('.layout-selected').forEach(x=>x.classList.remove('layout-selected'));
   selectedLayoutElement=null;q('layoutSelectionToolbar')?.classList.remove('visible')
 }
}
function setGridSnap(on){
 gridSnap=!!on;q('gridSnapToggle').textContent=gridSnap?'[ SNAP / ON ]':'[ SNAP / OFF ]'
}
function bindLayoutEditableElements(){
 if(!editMode)return;
 ['pbrief','pt','pd','prole','ptools','poutput','pyear','pquestion','pbuilt','pjudgement','pmedia','ptaste','photoWallWrap','architectureProject','embeddedProject'].forEach(id=>{
   const el=q(id);if(el){el.dataset.layoutEdit=`id:${id}`;if(!el.dataset.layoutKey)el.dataset.layoutKey=`id:${id}`}
 });
 projectEl.querySelectorAll('.arch-intro,.arch-hero,.arch-chapter-head,.arch-evidence-grid,.arch-metric-row,.arch-wide,.arch-selected-head,.arch-subproject-copy,.arch-subproject-media,.arch-osk-grid,.arch-credit,.studio-case-intro,.studio-section-head,.studio-before-card,.studio-intervention-copy,.studio-principles,.embedded-project-shell,.media,.taste-item,.photo-item').forEach((el,i)=>{
   if(!el.dataset.layoutEdit){
     const section=PROJECTS[currentProject]?.id||'project';
     const cls=(el.className||el.tagName).toString().replace(/\s+/g,'.');
     el.dataset.layoutEdit=`${section}:${cls}:${i}`;el.dataset.layoutKey=el.dataset.layoutEdit
   }
 });
 projectEl.querySelectorAll('[data-edit-image]').forEach(el=>{el.dataset.layoutEdit=el.dataset.layoutKey||el.dataset.imagePath||'image'});
 applyAllGenericLayouts(projectEl);
 projectEl.querySelectorAll('[data-layout-edit]').forEach(el=>{
   el.onpointerdown=e=>{
     if(!editMode||!gridLayoutMode||e.button!==0)return;
     e.stopPropagation();selectLayoutElement(el);
     const r=el.getBoundingClientRect(),d=genericLayoutValue(stableLayoutKey(el));
     const isResize=e.clientX>r.right-20&&e.clientY>r.bottom-20;
     layoutPointerState={el,mode:isResize?'resize':'move',startX:e.clientX,startY:e.clientY,startDX:d.x,startDY:d.y,startWidth:d.width,startRect:r};
     try{el.setPointerCapture(e.pointerId)}catch(_){}
     e.preventDefault()
   };
   el.onpointermove=e=>{
     const s=layoutPointerState;if(!s||s.el!==el||!gridLayoutMode)return;
     if(s.mode==='move'){
       updateLayoutRecord(el,{x:snapLayoutDelta(s.startDX+e.clientX-s.startX,'x'),y:snapLayoutDelta(s.startDY+e.clientY-s.startY,'y')})
     }else{
       const parentW=el.parentElement?.getBoundingClientRect().width||s.startRect.width;
       let pct=s.startWidth+(e.clientX-s.startX)/parentW*100;
       if(gridSnap)pct=Math.round(pct/(100/12))*(100/12);
       updateLayoutRecord(el,{width:Number(Math.max(16.667,Math.min(100,pct)).toFixed(3))})
     }
   };
   el.onpointerup=el.onpointercancel=e=>{
     if(layoutPointerState?.el===el){try{el.releasePointerCapture(e.pointerId)}catch(_){}layoutPointerState=null}
   }
 })
}
function nudgeSelected(dx,dy){
 if(!selectedLayoutElement)return;
 const d=genericLayoutValue(stableLayoutKey(selectedLayoutElement));
 updateLayoutRecord(selectedLayoutElement,{x:d.x+dx*(gridSnap?layoutGridUnitX()/2:4),y:d.y+dy*(gridSnap?8:4)})
}

function imageLayoutKey(el){
  return el?.dataset?.layoutKey || el?.dataset?.imagePath || '';
}
function getImageLayout(key){
  return IMAGE_LAYOUT[key] || {width:100};
}
function applyImageLayoutToElement(el){
  if(!el)return;
  const key=imageLayoutKey(el);if(!key)return;
  const width=Math.max(30,Math.min(100,Number(getImageLayout(key).width)||100));
  if(el.classList.contains('media-image'))el.style.setProperty('--image-size',String(width));
  else el.style.width=`${width}%`;
  applyGenericLayout(el);
}
function applyAllImageLayouts(root=document){
  root.querySelectorAll?.('[data-edit-image][data-layout-key]').forEach(applyImageLayoutToElement);
}
function markLayoutDirty(){
  layoutDirty=true;
  q('saveImageLayoutJson')?.classList.add('editor-dirty');
}
function setImageLayoutWidth(el,width){
  const key=imageLayoutKey(el);if(!key)return;
  width=Math.max(30,Math.min(100,Math.round(Number(width)/5)*5));
  IMAGE_LAYOUT[key]={...(IMAGE_LAYOUT[key]||{}),width};
  applyImageLayoutToElement(el);
  markLayoutDirty();
  if(q('imageSizeValue'))q('imageSizeValue').textContent=`${width}%`;
}
function imageDisplayDiagnostics(el){
  if(!el)return '';
  const nw=el.naturalWidth||0,nh=el.naturalHeight||0;
  const rect=el.getBoundingClientRect();
  const dpr=window.devicePixelRatio||1;
  const needed=Math.round(rect.width*dpr);
  const ratio=nw&&needed?nw/needed:1;
  if(!nw)return '';
  const quality=ratio>=1?'SOURCE OK':ratio>=.7?'SLIGHT UPSCALE':'LOW-RES / UPSCALED';
  return `${nw}×${nh} · ${quality}`;
}
function refreshSelectedImagePanel(){
  const panel=q('imageLayoutPanel'),el=selectedImageTarget?.element;
  if(!panel||!el)return;
  const key=imageLayoutKey(el);
  const width=Math.max(30,Math.min(100,Number(getImageLayout(key).width)||100));
  q('imageLayoutName').textContent=pathFilename(el.dataset.imagePath||key||'IMAGE');
  q('imageSizeRange').value=String(width);
  q('imageSizeValue').textContent=`${width}%`;
  q('imageResolutionInfo').textContent=imageDisplayDiagnostics(el);
  q('imageSizeLabel').textContent=lang==='zh'?'尺寸':'SIZE';
  q('imageSizeReset').textContent=lang==='zh'?'[ 重置 ]':'[ RESET ]';
  q('replaceSelectedImage').textContent=lang==='zh'?'[ 替换图片 ]':'[ REPLACE IMAGE ]';
  panel.classList.add('visible');panel.setAttribute('aria-hidden','false');
}
function selectEditableImage(el){
  projectEl.querySelectorAll('.image-selected').forEach(x=>x.classList.remove('image-selected'));
  el.classList.add('image-selected');
  selectedImageTarget={
    type:el.dataset.editImage,
    element:el,
    mediaIndex:el.dataset.mediaImage!=null?+el.dataset.mediaImage:null,
    photoIndex:el.dataset.photoImage!=null?+el.dataset.photoImage:null,
    path:el.dataset.imagePath||'',
    layoutKey:imageLayoutKey(el)
  };
  refreshSelectedImagePanel();
}
function clearSelectedImage(){
  projectEl.querySelectorAll('.image-selected').forEach(x=>x.classList.remove('image-selected'));
  selectedImageTarget=null;
  const panel=q('imageLayoutPanel');
  panel?.classList.remove('visible');panel?.setAttribute('aria-hidden','true');
}

function mediaPreviewKey(projectId,index){return `${projectId}:${index}`;}
function mediaPreviewUrl(projectId,index,path){
  return localMediaPreviews.get(mediaPreviewKey(projectId,index)) || rootPath(path);
}
function photoPreviewUrl(index,fallback){return localPhotoPreviews.get(index)||fallback;}
function photoPreviewSrcset(index,item){
  const preview=localPhotoPreviews.get(index);
  if(preview)return `${preview} 2048w`;
  return `${rootPath(item.srcset.small)} 640w, ${rootPath(item.srcset.medium)} 1400w, ${rootPath(item.srcset.large)} 2048w`;
}
function imageEditorToast(message){
  const el=q('imageEditToast');if(!el)return;
  el.textContent=message;el.classList.add('visible');
  clearTimeout(imageEditorToast._t);
  imageEditorToast._t=setTimeout(()=>el.classList.remove('visible'),2600);
}
function pathFilename(path){return (path||'replacement.webp').split('/').pop().split('?')[0]||'replacement.webp';}
function pathExt(path){const name=pathFilename(path);const dot=name.lastIndexOf('.');return dot>=0?name.slice(dot+1).toLowerCase():'webp';}
function extMime(ext){return ext==='png'?'image/png':(ext==='jpg'||ext==='jpeg')?'image/jpeg':'image/webp';}

async function fileToCanvasBlob(file,targetPath,maxDimension=4096){
  const bitmap=await createImageBitmap(file);
  const longest=Math.max(bitmap.width,bitmap.height);
  const scale=Math.min(1,maxDimension/longest);
  const width=Math.max(1,Math.round(bitmap.width*scale));
  const height=Math.max(1,Math.round(bitmap.height*scale));
  const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
  const ctx=canvas.getContext('2d',{alpha:true});
  ctx.imageSmoothingEnabled=true;
  ctx.imageSmoothingQuality='high';
  ctx.drawImage(bitmap,0,0,width,height);
  bitmap.close?.();
  const ext=pathExt(targetPath),mime=extMime(ext);
  const quality=(mime==='image/jpeg'||mime==='image/webp')?0.98:undefined;
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,mime,quality));
  if(!blob)throw new Error('Image conversion failed');
  return {blob,width,height};
}
function downloadBlobAs(blob,filename){
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=filename;
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1200);
}
function ensureStaticImageBadges(){
  projectEl.querySelectorAll('figure img[data-edit-image="static"]').forEach(img=>{
    const figure=img.closest('figure');if(!figure||figure.querySelector('.editor-image-action'))return;
    const badge=document.createElement('span');badge.className='editor-image-action';
    badge.textContent=lang==='zh'?'点击替换图片':'CLICK TO REPLACE';figure.appendChild(badge);
  });
}
function bindProjectImageEditors(){
  if(!editMode)return;
  ensureStaticImageBadges();
  projectEl.querySelectorAll('[data-edit-image]').forEach(el=>{
    applyImageLayoutToElement(el);
    el.onclick=(e)=>{
      e.preventDefault();e.stopPropagation();
      selectEditableImage(el);
    };
  });
}
async function handlePickedPortfolioImage(file){
  if(!file||!pendingImageTarget)return;
  const target=pendingImageTarget;pendingImageTarget=null;
  try{
    if(target.type==='media'){
      const base=PROJECTS[currentProject];
      const index=target.mediaIndex;
      base.mediaImages ||= [];
      while(base.mediaImages.length<=index)base.mediaImages.push(null);
      const safeTitle=(base.en?.title||`project-${base.id}`).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
      const targetPath=`/assets/projects/${safeTitle}-${base.id}-media-${String(index+1).padStart(2,'0')}.webp`;
      const {blob}=await fileToCanvasBlob(file,targetPath,4096);
      const preview=URL.createObjectURL(blob);
      const key=mediaPreviewKey(base.id,index);
      const old=localMediaPreviews.get(key);if(old?.startsWith('blob:'))URL.revokeObjectURL(old);
      localMediaPreviews.set(key,preview);
      base.mediaImages[index]=targetPath;
      editedFileBlobs.set(targetPath.replace(/^\//,''),blob);
      touch();openProject(currentProject);
      requestAnimationFrame(()=>{const el=projectEl.querySelector(`[data-layout-key="project:${base.id}:media:${index}"]`);if(el)selectEditableImage(el);});
      imageEditorToast(lang==='zh'?`图片已替换 · 会自动包含在最终网站 ZIP 中`:`Image replaced · it will be included in the final site ZIP`);
      return;
    }

    if(target.type==='photo'){
      const item=PHOTO_DATA.photos[target.photoIndex];
      const targetPath=item.src?.startsWith('/')?item.src:`/${item.src}`;
      const {blob,width,height}=await fileToCanvasBlob(file,targetPath,4096);
      const preview=URL.createObjectURL(blob);
      const old=localPhotoPreviews.get(target.photoIndex);if(old?.startsWith('blob:'))URL.revokeObjectURL(old);
      localPhotoPreviews.set(target.photoIndex,preview);
      item.width=width;item.height=height;
      item.src=targetPath;
      item.srcset={small:targetPath,medium:targetPath,large:targetPath};
      editedFileBlobs.set(targetPath.replace(/^\//,''),blob);
      touch();renderPhotoWall();bindProjectImageEditors();
      requestAnimationFrame(()=>{const el=projectEl.querySelector(`[data-layout-key="photo:${target.photoIndex}"]`);if(el)selectEditableImage(el);});
      imageEditorToast(lang==='zh'?`照片已替换 · 会自动包含在最终网站 ZIP 中`:`Photo replaced · it will be included in the final site ZIP`);
      return;
    }

    if(target.type==='static'){
      const targetPath=target.path;
      const {blob}=await fileToCanvasBlob(file,targetPath,4096);
      const preview=URL.createObjectURL(blob);
      target.element.removeAttribute('srcset');
      target.element.src=preview;
      editedFileBlobs.set(targetPath.replace(/^\//,''),blob);
      imageEditorToast(lang==='zh'?`图片已替换 · 会自动覆盖最终 ZIP 内的原文件`:`Image replaced · it will overwrite the original file inside the final ZIP`);
    }
  }catch(err){
    console.error(err);
    imageEditorToast(lang==='zh'?'图片处理失败，请换一张图片再试':'Image replacement failed — try another image');
  }
}

function renderPhotoWall(){
  if(!PHOTO_DATA?.photos?.length){photoWallWrap.classList.remove('visible');photoWall.innerHTML='';return;}
  photoWallWrap.classList.add('visible');
  q('photoNote').textContent=PHOTO_DATA.note?.[lang]||'';
  q('galleryTitle').textContent=t().galleryTitle;
  photoWall.innerHTML=PHOTO_DATA.photos.map((item,idx)=>`<figure class="photo-item" data-photo-index="${idx}">
    <img data-edit-image="photo" data-photo-image="${idx}" data-image-path="${escapeAttr(item.src)}" data-layout-key="photo:${idx}" src="${photoPreviewUrl(idx,rootPath(item.src))}" srcset="${photoPreviewSrcset(idx,item)}" sizes="(max-width:700px) 100vw, (max-width:900px) 50vw, 33vw" loading="${idx<2?'eager':'lazy'}" decoding="async" width="${item.width}" height="${item.height}" alt="${escapeAttr(item.caption?.[lang]||'')}">
    <figcaption class="photo-cap"><span><b>${item.id}</b></span><span class="photo-caption-editor" data-editable="true" data-photo-caption="${idx}">${escapeHtml(item.caption?.[lang]||'')}</span><span class="photo-caption-view">${item.visibleMeta?escapeHtml(item.caption?.[lang]||''):''}</span></figcaption>
    <span class="editor-image-action">${lang==='zh'?'点击替换图片':'CLICK TO REPLACE'}</span>
  </figure>`).join('');
  if(editMode){makeEditable();bindPhotoEditors();}
}

function generateTransitionGenome(){
  const el=q('transitionGenome');
  if(!el)return;
  const charsNeeded=Math.ceil(window.innerWidth/8);
  const rowsNeeded=Math.ceil(window.innerHeight/25)+4;
  let output='';
  for(let r=0;r<rowsNeeded;r++) output+=seq(charsNeeded)+'\n';
  el.textContent=output;
}

function transitionFlip(el,target,delay=0){
  if(!el)return;
  const chars='ACGT';let step=0;const max=11;
  el.textContent='';
  setTimeout(()=>{
    const timer=setInterval(()=>{
      step++;let out='';
      for(let i=0;i<target.length;i++){
        if(target[i]===' '){out+=' ';continue}
        const settle=Math.floor((i/Math.max(1,target.length))*6)+4;
        out+=step>=settle?target[i]:chars[Math.random()*4|0];
      }
      el.textContent=out;
      if(step>=max){el.textContent=target;clearInterval(timer)}
    },58);
  },delay);
}

function transitionToProject(i){
  if(transitionRunning)return;
  const overlay=q('projectTransition');
  if(!overlay||window.matchMedia('(prefers-reduced-motion: reduce)').matches){openProject(i);return;}
  transitionRunning=true;
  const p=proj(i),base=PROJECTS[i];
  generateTransitionGenome();
  overlay.classList.remove('exit','decoding','fill');
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden','false');
  q('transitionId').textContent='';q('transitionTitle').textContent='';q('transitionBrief').textContent='';q('transitionMeta').textContent='';q('transitionYear').textContent='';

  requestAnimationFrame(()=>requestAnimationFrame(()=>overlay.classList.add('fill')));
  setTimeout(()=>{
    overlay.classList.add('decoding');
    transitionFlip(q('transitionId'),`MUTATION`,0);
    transitionFlip(q('transitionTitle'),p.title,70);
    transitionFlip(q('transitionBrief'),p.brief,140);
    transitionFlip(q('transitionMeta'),p.meta,210);
    transitionFlip(q('transitionYear'),p.year,280);
  },420);
  setTimeout(()=>{
    openProject(i);
    projectEl.scrollTop=0;
  },1450);
  setTimeout(()=>overlay.classList.add('exit'),1660);
  setTimeout(()=>{
    overlay.classList.remove('active','fill','decoding','exit');
    overlay.setAttribute('aria-hidden','true');
    transitionRunning=false;
  },1980);
}


/* ---------- SYSTEM narrative animation ---------- */
let systemAnimationFrame=0;
const diagramMotion={system:{static:false,elapsed:3200},method:{static:false,elapsed:3200}};
const diagramDuration=3200;
let systemAnimationStart=performance.now();
function systemAnimationPalette(){
 const light=document.body.classList.contains('light');
 return {bg:light?'#f5f5f3':'#050505',fg:light?'#111111':'#f2f2f2',soft:light?'#9a9a96':'#777777',line:light?'#cfcfca':'#303030'};
}
function easeSystem(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}
function lerpSystem(a,b,t){return a+(b-a)*t}
function hashSystem(n){const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function fitSystemCanvas(canvas){
 const rect=canvas.getBoundingClientRect(),dpr=Math.min(2,window.devicePixelRatio||1);
 const cw=Math.max(1,Math.round(rect.width*dpr)),ch=Math.max(1,Math.round(rect.height*dpr));
 if(canvas.width!==cw||canvas.height!==ch){canvas.width=cw;canvas.height=ch}
 const ctx=canvas.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);return {ctx,w:rect.width,h:rect.height};
}
function systemPointSeed(i,w,h){return{x:22+hashSystem(i*3+1)*(w-44),y:24+hashSystem(i*3+2)*(h-48),r:1.1+hashSystem(i*3+3)*1.7}}
function drawSystemDot(ctx,x,y,r,color,a=1){ctx.globalAlpha=a;ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1}
function drawSystemLine(ctx,x1,y1,x2,y2,color,a=.3){ctx.globalAlpha=a;ctx.strokeStyle=color;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.globalAlpha=1}
function drawSystemLabel(ctx,text,x,y,p){ctx.fillStyle=p.soft;ctx.font='9px "Courier New", monospace';ctx.textBaseline='middle';ctx.fillText(text,x,y)}
function drawSystemPanel(canvas,stage,time){
 const stages=['scatter','cluster','align','reveal'];
 drawEditorialDiagram(canvas,'system',stages.indexOf(stage),easeSystem(Math.min(1,time/3000)),PHOTO_DATA,lang);
}
function renderSystemAnimations(now=performance.now()){
 systemAnimationFrame=0;if(!systemAnimationProject||systemAnimationProject.hidden)return;
 diagramMotion.system.elapsed=diagramMotion.system.static||window.matchMedia('(prefers-reduced-motion: reduce)').matches?diagramDuration:Math.min(diagramDuration,now-systemAnimationStart);
 systemAnimationProject.querySelectorAll('.system-animation-card').forEach(card=>{const canvas=card.querySelector('canvas');if(canvas)drawSystemPanel(canvas,card.dataset.systemStage,diagramMotion.system.elapsed)});
 if(!diagramMotion.system.static&&diagramMotion.system.elapsed<diagramDuration&&!document.hidden)systemAnimationFrame=requestAnimationFrame(renderSystemAnimations);
}
function restartSystemAnimations(){cancelAnimationFrame(systemAnimationFrame);systemAnimationStart=performance.now();systemAnimationFrame=requestAnimationFrame(renderSystemAnimations);}
function applySystemAnimationLanguage(){
 if(!systemAnimationProject)return;
 systemAnimationProject.querySelectorAll('[data-en][data-zh]').forEach(el=>{el.textContent=lang==='zh'?el.dataset.zh:el.dataset.en});
 systemAnimationProject.querySelectorAll('.system-animation-card').forEach(card=>{
  const canvas=card.querySelector('canvas');canvas.removeAttribute('aria-hidden');canvas.setAttribute('role','img');canvas.setAttribute('aria-label',card.querySelector('.system-animation-caption').textContent);
 });
}


/* ---------- Shared category animation grammar ---------- */
let methodAnimationFrame=0;
let methodAnimationStart=performance.now();
let activeMethodCategory='';

const METHOD_ANIMATION_COPY={
  space:{
    en:{
      kicker:'SPACE / SPATIAL SYNTHESIS',
      title:'One site. Four spatial decisions.',
      intro:'The same site and viewpoint make four design moves comparable: establish an envelope, open passages, adjust heights, then define public space. These drawings explain the design logic rather than measured project geometry.',
      cards:[
        ['01 / ENVELOPE','SITE + SUN + ACCESS','Establish a maximum envelope within the site boundary.'],
        ['02 / CARVE','PASSAGE + DAYLIGHT','Split the envelope to bring routes and daylight into the site.'],
        ['03 / HEIGHT','PROPORTION + ORIENTATION','Keep the footprints comparable while testing different heights.'],
        ['04 / PUBLIC REALM','BUILDING + OPEN SPACE','Resolve building mass and open space as one arrangement.']
      ]
    },
    zh:{
      kicker:'空间 / 空间综合',
      title:'从一个最大体量开始，一步步打开场地。',
      intro:'四张图使用同一个场地和视角：先确定最大可建体量，再切开体量引入日照与通行，随后调整高度，最后把公共空间和建筑体量一起确定下来。',
      cards:[
        ['01 / 最大体量','场地 + 日照 + 流线','先根据场地边界确定最大可建体量，同时标出主要日照方向和通行方向。'],
        ['02 / 打开场地','切分 + 通行','把完整体量切成几组建筑，让日照和步行路线进入场地内部。'],
        ['03 / 调整高度','日照 + 高度','保持建筑位置不变，根据日照条件调整各体量高度，减少彼此遮挡。'],
        ['04 / 最终方案','建筑 + 公共空间','保留前一步的体量关系，再明确公共空间的位置，形成最终的建筑与开放空间布局。']
      ]
    }
  },
  code:{
    en:{
      kicker:'CODE / COMPUTATIONAL LOGIC',
      title:'Inputs become relationships, rules and tools.',
      intro:'Computation is shown as a legible chain rather than a black box: parameters enter, relationships connect, rules organise behaviour, and an interface or reusable tool emerges.',
      cards:[
        ['01 / INPUT','PARAMETERS + EVENTS','Geometry, values, user actions and design intent enter as separate inputs.'],
        ['02 / CONNECT','DEPENDENCIES','Inputs become connected through explicit relationships and dependencies.'],
        ['03 / RULES','LOGIC + ITERATION','Rules organise the network into a repeatable computational workflow.'],
        ['04 / OUTPUT','TOOL + INTERFACE','The logic resolves into something reusable: a script, workflow, interface or prototype.']
      ]
    },
    zh:{
      kicker:'代码 / 计算逻辑',
      title:'把输入整理成规则，再做成可以重复使用的工具。',
      intro:'我会把计算过程拆开来看：输入是什么、它们怎么互相影响、哪些步骤可以写成规则，最后再把这些规则做成脚本、工作流或界面。',
      cards:[
        ['01 / 输入','参数 + 事件','先确定需要处理的几何、数值、用户操作和设计要求。'],
        ['02 / 连接','依赖关系','再确定这些输入之间怎么互相影响。'],
        ['03 / 规则','逻辑 + 迭代','把重复出现的处理方式写成可以反复运行的规则。'],
        ['04 / 输出','工具 + 界面','最后把它做成可以继续使用的脚本、工作流、界面或交互原型。']
      ]
    }
  },
  observation:{
    en:{
      kicker:'OBSERVATION / VISUAL EDITING',
      title:'Fragments become an authored sequence.',
      intro:'Photography uses the same organising logic more quietly: many fragments are observed, fewer are selected, the selection is sequenced, and a visual trace remains.',
      cards:[
        ['01 / FRAGMENTS','ATTENTION','Many ordinary moments coexist without hierarchy.'],
        ['02 / SELECT','KEEP / REMOVE','Some frames remain while technically clean but redundant ones disappear.'],
        ['03 / SEQUENCE','RHYTHM + ASSOCIATION','Selected frames are arranged by visual association rather than chronology.'],
        ['04 / TRACE','MEMORY + READING','The sequence leaves a reading that no single image could carry alone.']
      ]
    },
    zh:{
      kicker:'观察 / 视觉编辑',
      title:'从很多照片里做选择，再把它们排成有节奏的序列。',
      intro:'拍摄之后，我会重新看这些照片：哪些值得留下，哪些在重复表达同一件事，以及照片放在什么顺序里更合适。',
      cards:[
        ['01 / 碎片','注意力','拍摄时先记录很多普通的瞬间，不急着判断哪一张最好。'],
        ['02 / 选择','保留 / 去除','选片时留下真正有意思的画面，删掉虽然完整但内容重复的照片。'],
        ['03 / 序列','节奏 + 联想','再根据画面之间的颜色、距离、动作和感觉重新排序，不一定按时间排列。'],
        ['04 / 痕迹','记忆 + 阅读','最后让几张照片放在一起，表达单张照片说不完整的东西。']
      ]
    }
  },
  research:{
    en:{
      kicker:'RESEARCH / DECISION SUPPORT',
      title:'Data becomes a field for comparison.',
      intro:'Research turns raw observations into evidence: data is collected, patterns become visible, a model structures the relationships, and alternatives can be compared before a planning decision is made.',
      cards:[
        ['01 / DATA','OBSERVATIONS + VARIABLES','Planning variables begin as many individual observations.'],
        ['02 / PATTERN','RELATION + SIGNAL','Patterns emerge as the observations are compared and grouped.'],
        ['03 / MODEL','LEARNED RELATIONSHIPS','A model encodes the relationships so alternative conditions can be tested.'],
        ['04 / DECISION','COMPARE + JUDGE','Outputs remain alternatives to compare — not a single automatic answer.']
      ]
    },
    zh:{
      kicker:'研究 / 决策支持',
      title:'让数据帮助我们比较方案，做出判断。',
      intro:'先收集规划数据，再用模型找出其中的规律。这样在做决定之前，就能把不同方案放在一起比较。',
      cards:[
        ['01 / 数据','观察 + 变量','先把规划里需要考虑的数据和变量收集起来。'],
        ['02 / 模式','关系 + 信号','把数据放在一起比较和分组，看看有没有反复出现的规律。'],
        ['03 / 模型','学习到的关系','让模型学习这些变量之间的关系，再用不同条件反复测试。'],
        ['04 / 决策','比较 + 判断','模型给出的是几个可以比较的结果，最后的决定仍然由人来做。']
      ]
    }
  }
};

function buildMethodAnimation(category){
 setupDiagramToolbar(methodAnimationProject,'method',category);
  activeMethodCategory=category;
  const copy=METHOD_ANIMATION_COPY[category]?.[lang]||METHOD_ANIMATION_COPY[category]?.en;
  if(!copy||!methodAnimationProject)return;
  q('methodAnimationKicker').textContent=copy.kicker;
  q('methodAnimationTitle').textContent=copy.title;
  q('methodAnimationIntro').textContent=copy.intro;
  methodAnimationGrid.innerHTML=copy.cards.map((c,i)=>`
    <article class="system-animation-card" data-method-stage="${i}">
      <div class="system-animation-meta"><span>${escapeHtml(c[0])}</span><span>${escapeHtml(c[1])}</span></div>
      <canvas class="system-animation-canvas" role="img" aria-label="${escapeAttr(c[0]+': '+c[2])}"></canvas>
      <div class="system-animation-caption">${escapeHtml(c[2])}</div>
    </article>`).join('');
}
function drawMethodPanel(canvas,category,stage,time){
 drawEditorialDiagram(canvas,category,stage,easeSystem(Math.min(1,time/3000)),PHOTO_DATA,lang);
}
function initStudioComponentDemos(){
  document.querySelectorAll('.studio-mini-filter').forEach(demo=>{
    const input=demo.querySelector('input'),output=demo.querySelector('output'),buttons=[...demo.querySelectorAll('button')];
    const update=()=>{const q=(input?.value||'').trim();if(output)output.textContent=(q?Math.max(2,12-q.length*2):12)+' RESULTS'};
    input?.addEventListener('input',update);
    buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');if(output)output.textContent=btn.textContent==='ALL'?'12 RESULTS':'4 RESULTS'}));
  });
  document.querySelectorAll('.studio-component-demo').forEach(card=>{
    const swatch=card.querySelector('.studio-mini-swatch'),detail=card.querySelector('.studio-mini-detail'),close=detail?.querySelector('button');
    swatch?.addEventListener('click',()=>{detail?.classList.add('open');detail?.setAttribute('aria-hidden','false')});
    close?.addEventListener('click',()=>{detail?.classList.remove('open');detail?.setAttribute('aria-hidden','true')});
  });
}
initStudioComponentDemos();

function renderMethodAnimations(now=performance.now()){
  methodAnimationFrame=0;if(!methodAnimationProject||methodAnimationProject.hidden||!activeMethodCategory)return;
  diagramMotion.method.elapsed=diagramMotion.method.static||window.matchMedia('(prefers-reduced-motion: reduce)').matches?diagramDuration:Math.min(diagramDuration,now-methodAnimationStart);
  methodAnimationProject.querySelectorAll('.system-animation-card').forEach(card=>{
    const canvas=card.querySelector('canvas');
    if(canvas)drawMethodPanel(canvas,activeMethodCategory,+card.dataset.methodStage,diagramMotion.method.elapsed);
  });
  if(!diagramMotion.method.static&&diagramMotion.method.elapsed<diagramDuration&&!document.hidden)methodAnimationFrame=requestAnimationFrame(renderMethodAnimations);
}
function restartMethodAnimations(){
  cancelAnimationFrame(methodAnimationFrame);methodAnimationStart=performance.now();methodAnimationFrame=requestAnimationFrame(renderMethodAnimations);
}

function openProject(i){
  currentProject=i;const p=proj(i),base=PROJECTS[i];
  applyProjectEvidence(base.categoryKey,lang);
  pid.textContent=`MUTATION`;pbrief.textContent=p.title;pt.textContent=p.brief;pd.textContent=p.desc;
  prole.textContent=p.role;ptools.textContent=p.tools;poutput.textContent=p.output;pyear.textContent=p.year;
  pquestion.textContent=p.question;pbuilt.textContent=p.built;pjudgement.textContent=p.judgement;
  const mediaImages=base.mediaImages||[];
  pmedia.innerHTML=p.media.map((m,j)=>{
    const imagePath=mediaImages[j]||'';
    const preview=mediaPreviewUrl(base.id,j,imagePath);
    return `<div class="media ${imagePath?'has-image':''}" data-media-index="${j}">
      <button class="editor-remove remove-media" data-remove-media="${j}">[ × ]</button>
      ${imagePath?`<img class="media-image" data-edit-image="media" data-media-image="${j}" data-image-path="${escapeAttr(imagePath)}" data-layout-key="project:${base.id}:media:${j}" src="${escapeAttr(preview)}" alt="">`:''}
      <div class="media-image-empty" data-edit-image="media" data-media-image="${j}" data-layout-key="project:${base.id}:media:${j}">+ ADD IMAGE</div>
      <span class="media-index"><b>${String(j+1).padStart(2,'0')}</b></span>
      <span class="media-text" data-editable="true" data-media="${j}">${escapeHtml(m)}</span>
      <span class="editor-image-action">${lang==='zh'?'点击替换图片':'CLICK TO REPLACE'}</span>
    </div>`;
  }).join('');
  ptaste.innerHTML=p.taste.map((item,j)=>`<div class="taste-item" data-taste-index="${j}"><button class="editor-remove remove-taste" data-remove-taste="${j}">[ × ]</button><span class="taste-key" data-editable="true" data-taste-key="${j}">${escapeHtml(item[0])}</span><p data-editable="true" data-taste-text="${j}">${escapeHtml(item[1])}</p></div>`).join('');
  if(base.categoryKey==='observation')renderPhotoWall();else{photoWallWrap.classList.remove('visible');photoWall.innerHTML='';}
  projectEl.classList.toggle('research-project',base.categoryKey==='research');
  const hasArchitecture=base.categoryKey==='space';
  const hasSystemAnimation=base.categoryKey==='system';
  const hasMethodAnimation=['space','code','observation'].includes(base.categoryKey);
  const hasEmbeddedLibrary=base.categoryKey==='system';
  if(architectureProject){architectureProject.hidden=!hasArchitecture;}
  if(methodAnimationProject){methodAnimationProject.hidden=!hasMethodAnimation;}
  if(parametricProject){parametricProject.hidden=base.categoryKey!=='code';}
  if(todaiProject){todaiProject.hidden=base.categoryKey!=='research';}
  if(systemAnimationProject){systemAnimationProject.hidden=!hasSystemAnimation;}
  if(embeddedProject){embeddedProject.hidden=!hasEmbeddedLibrary;}
  pmedia.style.display=(hasArchitecture||hasSystemAnimation||hasMethodAnimation)?'none':'';
  if(hasSystemAnimation){applySystemAnimationLanguage();restartSystemAnimations();}else{cancelAnimationFrame(systemAnimationFrame);}
  if(hasMethodAnimation){buildMethodAnimation(base.categoryKey);restartMethodAnimations();}else{cancelAnimationFrame(methodAnimationFrame);}
  if(hasEmbeddedLibrary&&studioLibraryFrame){
    // Reload the demo when the case study is reopened so its blue home screen is always the entry state.
    const src=studioLibraryFrame.getAttribute('src');
    studioLibraryFrame.setAttribute('src',src);
  }
  const next=proj((i+1)%PROJECTS.length),nextBase=PROJECTS[(i+1)%PROJECTS.length];nextProjectName.textContent=`${next.title}`;
  if(!projectEl.classList.contains('visible'))showPanel(projectEl);
  updateEditorForProject();
  applyAllImageLayouts(projectEl);
  applyAllGenericLayouts(projectEl);
  applyTextOverrides(projectEl);
  if(editorUnlocked&&!editMode)enterEditMode();
  else if(editMode)makeEditable();
}

function buildIndex(){const list=q('indexList');list.innerHTML=PROJECTS.map((p,i)=>{const d=p[lang];return `<button class="index-row" data-project="${i}"><span class="index-title"><span class="index-title-main">${escapeHtml(d.title)}</span><span class="index-title-sub">${escapeHtml(d.brief)}</span></span><span class="index-meta">${escapeHtml(d.meta)}</span><span class="index-year">${escapeHtml(d.year)}</span></button>`}).join('');list.querySelectorAll('.index-row').forEach(btn=>btn.addEventListener('click',()=>transitionToProject(+btn.dataset.project)));}
function renderAbout(){
  const copy=t();
  q('aboutHero').textContent=copy.aboutTitle;
  q('aboutLead').textContent=copy.aboutLead;
  q('aboutText').textContent=copy.aboutText;
  q('aboutEyebrow').textContent=copy.profileEyebrow;
  q('profileMetaLeft').textContent=copy.profileMetaLeft;
  q('profileMetaRight').textContent=copy.profileMetaRight;
  q('conceptEyebrow').textContent=copy.conceptEyebrow;
  q('conceptTitle').textContent=copy.conceptTitle;
  q('conceptText1').textContent=copy.conceptText1;
  q('conceptText2').textContent=copy.conceptText2;
  q('practiceEyebrow').textContent=copy.practiceEyebrow;
  q('aboutAside').innerHTML=copy.aboutBlocks.map(block=>`<div class="about-block"><h2>${block[0]}</h2><p>${block[1]}</p></div>`).join('');
}


function applyStudioCaseCopy(){
  q('instagramCopyStatus').textContent='';
  document.querySelectorAll('.studio-i18n, .arch-i18n, #todaiProject [data-en][data-zh], #parametricProject [data-en][data-zh], .diagram-toolbar [data-en][data-zh], .observation-social [data-en][data-zh]').forEach(el=>{
    const value=lang==='zh'?el.dataset.zh:el.dataset.en;
    if(value)el.textContent=value;
  });
}

function applyUI(){
  const copy=t();document.documentElement.lang=lang==='en'?'en':'zh-CN';
  const themeLabel=document.body.classList.contains('light')?copy.themeDark:copy.themeLight;
  q('brandRole').textContent=UI.en.roleLine;
  q('about').textContent=copy.about;
  q('theme').textContent=themeLabel;
  q('index').textContent=copy.index;
  q('langToggle').textContent=copy.lang;
  q('projectLangToggle').textContent=copy.lang;
  q('projectAbout').textContent=copy.about;
  q('projectTheme').textContent=themeLabel;
  q('projectIndex').textContent=copy.index;
  q('footerLeft').textContent=copy.footerLeft;q('footerRight').textContent=copy.footerRight;q('close').textContent=copy.close;q('indexClose').textContent=copy.close;q('aboutClose').textContent=copy.close;
  q('labelRole').textContent=copy.labels.role;q('labelTools').textContent=copy.labels.tools;q('labelOutput').textContent=copy.labels.output;q('labelYear').textContent=copy.labels.year;q('storyQuestion').textContent=copy.story.question;q('storyBuilt').textContent=copy.story.built;q('storyJudgement').textContent=copy.story.judgement;q('tasteHeading').textContent=copy.taste;q('nextLabel').textContent=copy.next;q('indexTitle').textContent=copy.indexTitle;q('indexIntro').textContent=copy.indexIntro;q('aboutTitle').textContent=copy.aboutTitle;
  renderAbout();applyStudioCaseCopy();applySystemAnimationLanguage();if(methodAnimationProject&&!methodAnimationProject.hidden&&PROJECTS[currentProject])buildMethodAnimation(PROJECTS[currentProject].categoryKey);buildIndex();build();applyAllImageLayouts(document);
  if(projectEl.classList.contains('visible'))openProject(currentProject);
  updateEditorLabels();
}


function setupDiagramToolbar(section,type,category='system'){
 if(!section)return;
 let toolbar=section.querySelector('.diagram-toolbar');
 if(!toolbar){
  toolbar=document.createElement('div');toolbar.className='diagram-toolbar';
  toolbar.innerHTML='<p data-en="EXPLANATORY STUDIES / NOT MEASURED RESULTS" data-zh="流程与设计示意 / 非实测结果">流程与设计示意 / 非实测结果</p><div><button type="button" class="diagram-static" aria-pressed="false"><span data-en="STATIC VIEW" data-zh="静止视图">静止视图</span></button><button type="button" class="diagram-replay"><span data-en="REPLAY" data-zh="重新播放">重新播放</span></button></div>';
  const key=document.createElement('ul');key.className='diagram-key';
  key.innerHTML='<li><i></i><span data-en="MASS / INPUT" data-zh="体量 / 输入">体量 / 输入</span></li><li><i class="key-clay"></i><span data-en="ROUTE / CHANGE" data-zh="路径 / 变化">路径 / 变化</span></li><li><i class="key-sage"></i><span data-en="OPEN SPACE / SELECTION" data-zh="开放空间 / 选择">开放空间 / 选择</span></li><li><i class="key-slate"></i><span data-en="CONNECTION / DATA" data-zh="连接 / 数据">连接 / 数据</span></li>';
  toolbar.append(key);
  section.querySelector('.system-animation-grid').before(toolbar);
  toolbar.querySelector('.diagram-static').addEventListener('click',()=>{
   diagramMotion[type].static=!diagramMotion[type].static;
   toolbar.querySelector('.diagram-static').setAttribute('aria-pressed',String(diagramMotion[type].static));
   type==='system'?restartSystemAnimations():restartMethodAnimations();
  });
  toolbar.querySelector('.diagram-replay').addEventListener('click',()=>{
   diagramMotion[type].static=false;toolbar.querySelector('.diagram-static').setAttribute('aria-pressed','false');
   type==='system'?restartSystemAnimations():restartMethodAnimations();
  });
 }
 const keyLabels={
  space:[['','BUILDING MASS','建筑体量'],['key-clay','GROUND ROUTE','地面路径'],['key-sage','OPEN SPACE','开放空间']],
  system:[['key-slate','CITY / PLACE','城市 / 地点'],['','MATERIAL / SURFACE','材质 / 表面'],['key-clay','FAÇADE / DETAIL','立面 / 细节'],['key-sage','COLOUR / PALETTE','颜色 / 色板']],
  code:[['','INPUT / OUTPUT','输入 / 输出'],['key-clay','PARAMETER CHANGE','参数变化'],['key-sage','PROCESS / CHECK','处理 / 检查'],['key-slate','DEPENDENCY','依赖关系']],
  observation:[['key-sage','SELECTED FRAME','保留的画面']]
 };
 const key=toolbar.querySelector('.diagram-key');
 if(key)key.innerHTML=(keyLabels[category]||keyLabels.system).map(([cl,en,zh])=>`<li><i class="${cl}"></i><span data-en="${en}" data-zh="${zh}">${zh}</span></li>`).join('');
 toolbar.querySelectorAll('[data-en][data-zh]').forEach(el=>el.textContent=lang==='zh'?el.dataset.zh:el.dataset.en);
}
setupDiagramToolbar(systemAnimationProject,'system');
refineFacadeDiagrams(parametricProject);
const diagramObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){
   if(entry.target===systemAnimationProject&&!systemAnimationProject.hidden)restartSystemAnimations();
   if(entry.target===methodAnimationProject&&!methodAnimationProject.hidden)restartMethodAnimations();
  }else{
   if(entry.target===systemAnimationProject)cancelAnimationFrame(systemAnimationFrame);
   if(entry.target===methodAnimationProject)cancelAnimationFrame(methodAnimationFrame);
  }
 });
},{threshold:.08});
[systemAnimationProject,methodAnimationProject].filter(Boolean).forEach(section=>diagramObserver.observe(section));
projectEl.addEventListener('diagram-image-ready',()=>{
 if(activeMethodCategory==='observation'&&!methodAnimationProject.hidden){cancelAnimationFrame(methodAnimationFrame);renderMethodAnimations(performance.now());}
});
let diagramResizeTimer;
window.addEventListener('resize',()=>{clearTimeout(diagramResizeTimer);diagramResizeTimer=setTimeout(()=>{
 if(!systemAnimationProject.hidden)renderSystemAnimations(systemAnimationStart+diagramDuration);
 if(!methodAnimationProject.hidden)renderMethodAnimations(methodAnimationStart+diagramDuration);
},180);});
document.addEventListener('visibilitychange',()=>{
 if(document.hidden){cancelAnimationFrame(methodAnimationFrame);cancelAnimationFrame(systemAnimationFrame);}
 else {if(!methodAnimationProject.hidden)renderMethodAnimations(methodAnimationStart+diagramDuration);if(!systemAnimationProject.hidden)renderSystemAnimations(systemAnimationStart+diagramDuration);}
});
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',()=>{
 if(!methodAnimationProject.hidden)restartMethodAnimations();
 if(!systemAnimationProject.hidden)restartSystemAnimations();
});

/* ---------- Editor ---------- */

/* ---------- v20 / all project text editable ---------- */
function textEditKey(el,index=0){
  if(el.dataset.editKey)return el.dataset.editKey;
  const category=PROJECTS[currentProject]?.categoryKey||'project';
  const idPart=el.id?`id:${el.id}`:'';
  const i18nPart=el.classList.contains('arch-i18n')?'arch-i18n':
                 el.classList.contains('studio-i18n')?'studio-i18n':
                 el.classList.contains('system-animation-kicker')?'animation-kicker':
                 el.classList.contains('system-animation-caption')?'animation-caption':
                 el.classList.contains('system-animation-meta')?'animation-meta':'text';
  const key=`${category}:${lang}:${idPart||i18nPart}:${index}`;
  el.dataset.editKey=key;
  return key;
}

function isExistingStructuredEditor(el){
  return !!(
    el.dataset.scalarField ||
    el.dataset.media != null ||
    el.dataset.tasteKey != null ||
    el.dataset.tasteText != null ||
    el.dataset.photoCaption != null ||
    el.id==='pmetaEdit'
  );
}

function isEditableTextLeaf(el){
  if(!el || !(el instanceof HTMLElement))return false;
  if(el.closest('.editor-bar,.image-layout-panel,.layout-selection-toolbar,.phead'))return false;
  if(el.matches('button,a,input,textarea,select,canvas,script,style,img,iframe'))return false;
  if(el.closest('button,a'))return false;
  if(el.hasAttribute('data-edit-image'))return false;
  const childElements=[...el.children].filter(c=>c.tagName!=='BR');
  if(childElements.length>0)return false;
  return (el.innerText||'').trim().length>0;
}

function applyTextOverrides(root=projectEl){
  if(!root)return;
  const candidates=[...root.querySelectorAll('[data-edit-key]')];
  candidates.forEach(el=>{
    const value=TEXT_OVERRIDES[el.dataset.editKey];
    if(typeof value==='string' && !isExistingStructuredEditor(el))el.innerText=value;
  });
}

function bindAllProjectTextEditors(){
  if(!editMode)return;

  const leaves=[...projectEl.querySelectorAll('.pbody *')].filter(isEditableTextLeaf);
  leaves.forEach((el,i)=>{
    if(isExistingStructuredEditor(el))return;

    const key=textEditKey(el,i);

    // Restore a previously saved custom edit after any render/reopen.
    if(typeof TEXT_OVERRIDES[key]==='string' && document.activeElement!==el){
      el.innerText=TEXT_OVERRIDES[key];
    }

    el.contentEditable='true';
    el.spellcheck=true;
    el.dataset.editable='true';
    el.dataset.freeTextEditable='true';

    el.oninput=()=>{
      TEXT_OVERRIDES[key]=cleanText(el);
      touch();
    };
  });
}

function disableAllProjectTextEditors(){
  projectEl.querySelectorAll('[data-free-text-editable]').forEach(el=>{
    el.contentEditable='false';
    el.removeAttribute('data-free-text-editable');
    if(!isExistingStructuredEditor(el))el.removeAttribute('data-editable');
    el.oninput=null;
  });
}

const scalarBindings=[
  [pt,'title'],[pbrief,'brief'],[pd,'desc'],[prole,'role'],[ptools,'tools'],[poutput,'output'],[pyear,'year'],[pquestion,'question'],[pbuilt,'built'],[pjudgement,'judgement']
];

function enterEditMode(){
  if(editMode)return;
  editMode=true;editSnapshot={projects:deepClone(PROJECTS),photos:deepClone(PHOTO_DATA),imageLayout:deepClone(IMAGE_LAYOUT),textOverrides:deepClone(TEXT_OVERRIDES)};dirty=false;layoutDirty=false;
  projectEl.classList.add('editing');editorBar.classList.add('visible');editorBar.setAttribute('aria-hidden','false');
  editProjectBtn.textContent='[ EDITING ]';
  updateEditorForProject();makeEditable();showToast(lang==='en'?'Edit mode on':'编辑模式已开启');
}
function exitEditMode(cancel=false){
  if(!editMode)return;
  if(cancel && editSnapshot){PROJECTS=deepClone(editSnapshot.projects);PHOTO_DATA=deepClone(editSnapshot.photos);IMAGE_LAYOUT=deepClone(editSnapshot.imageLayout||{});TEXT_OVERRIDES=deepClone(editSnapshot.textOverrides||{});buildIndex();build();}
  editMode=false;editSnapshot=null;dirty=false;layoutDirty=false;clearSelectedImage();setGridLayoutMode(false);selectedLayoutElement=null;
  projectEl.classList.remove('editing');editorBar.classList.remove('visible');editorBar.setAttribute('aria-hidden','true');
  editProjectBtn.textContent='[ EDIT ]';
  scalarBindings.forEach(([el])=>{el.contentEditable='false';el.removeAttribute('data-editable');});
  pmetaEdit.contentEditable='false';
  disableAllProjectTextEditors();
  if(projectEl.classList.contains('visible'))openProject(currentProject);
}
function updateEditorLabels(){
  q('editorStatus').textContent=lang==='en'?'EDIT MODE / EN':'编辑模式 / 中文';
  q('editorHint').textContent=lang==='en'
    ?'CLICK TEXT TO EDIT · CLICK ANY PROJECT IMAGE TO REPLACE · REPLACEMENT FILE DOWNLOADS WITH THE CORRECT NAME'
    :'点击文字直接编辑 · 点击任意项目图片即可替换 · 替换图片会以正确文件名自动下载';
}
function updateEditorForProject(){
  if(!PROJECTS[currentProject])return;
  pmetaEdit.textContent=proj(currentProject).meta||'';
  q('savePhotosJson').classList.toggle('visible',PROJECTS[currentProject].categoryKey==='observation');
  updateEditorLabels();
  markDirtyState();
}
function makeEditable(){
  if(!editMode)return;
  scalarBindings.forEach(([el,field])=>{
    el.contentEditable='true';el.spellcheck=true;el.dataset.editable='true';el.dataset.scalarField=field;
    el.oninput=()=>{PROJECTS[currentProject][lang][field]=cleanText(el);touch();};
  });
  pmetaEdit.contentEditable='true';pmetaEdit.spellcheck=false;pmetaEdit.dataset.editable='true';
  pmetaEdit.oninput=()=>{PROJECTS[currentProject][lang].meta=cleanText(pmetaEdit);touch();};
  pmedia.querySelectorAll('[data-media]').forEach(el=>{el.contentEditable='true';el.spellcheck=true;el.oninput=()=>{PROJECTS[currentProject][lang].media[+el.dataset.media]=cleanText(el);touch();};});
  pmedia.querySelectorAll('[data-remove-media]').forEach(btn=>btn.onclick=()=>{
    const index=+btn.dataset.removeMedia;
    PROJECTS[currentProject].en.media.splice(index,1);
    PROJECTS[currentProject].zh.media.splice(index,1);
    PROJECTS[currentProject].mediaImages?.splice(index,1);
    touch();openProject(currentProject);
  });
  ptaste.querySelectorAll('[data-taste-key]').forEach(el=>{el.contentEditable='true';el.spellcheck=true;el.oninput=()=>{PROJECTS[currentProject][lang].taste[+el.dataset.tasteKey][0]=cleanText(el);touch();};});
  ptaste.querySelectorAll('[data-taste-text]').forEach(el=>{el.contentEditable='true';el.spellcheck=true;el.oninput=()=>{PROJECTS[currentProject][lang].taste[+el.dataset.tasteText][1]=cleanText(el);touch();};});
  ptaste.querySelectorAll('[data-remove-taste]').forEach(btn=>btn.onclick=()=>{PROJECTS[currentProject][lang].taste.splice(+btn.dataset.removeTaste,1);touch();openProject(currentProject);});
  if(PROJECTS[currentProject].categoryKey==='observation'){
    q('photoNote').contentEditable='true';q('photoNote').dataset.editable='true';q('photoNote').spellcheck=true;
    q('photoNote').oninput=()=>{PHOTO_DATA.note[lang]=cleanText(q('photoNote'));touch();};
    bindPhotoEditors();
  }
  bindProjectImageEditors();
  bindLayoutEditableElements();
  bindAllProjectTextEditors();
  setGridLayoutMode(!isCoarsePointer);
  setGridSnap(true);
}
function bindPhotoEditors(){
  if(!editMode)return;
  photoWall.querySelectorAll('[data-photo-caption]').forEach(el=>{
    el.contentEditable='true';el.spellcheck=true;
    el.oninput=()=>{const i=+el.dataset.photoCaption;PHOTO_DATA.photos[i].caption[lang]=cleanText(el);touch();};
  });
}
function cleanText(el){return el.innerText.replace(/\u00a0/g,' ').replace(/\n{3,}/g,'\n\n').trim();}
function touch(){dirty=true;markDirtyState();}
function markDirtyState(){q('editorStatus').classList.toggle('editor-dirty',dirty);}
function addMedia(){
  if(!editMode)return;
  const base=PROJECTS[currentProject];
  base.en.media.push('NEW MEDIA / DESCRIPTION');
  base.zh.media.push('新媒体 / 描述');
  base.mediaImages ||= [];
  base.mediaImages.push(null);
  touch();openProject(currentProject);
  requestAnimationFrame(()=>{
    const items=pmedia.querySelectorAll('[data-media]');
    items[items.length-1]?.focus();
  });
}
function addTaste(){if(!editMode)return;PROJECTS[currentProject][lang].taste.push([lang==='en'?'DECISION':'判断',lang==='en'?'Describe the judgement here.':'在这里描述你的判断.']);touch();openProject(currentProject);requestAnimationFrame(()=>{const items=ptaste.querySelectorAll('[data-taste-text]');items[items.length-1]?.focus();});}
function downloadJson(filename,data){const blob=new Blob([JSON.stringify(data,null,2)+'\n'],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);showToast(`${filename} ${lang==='en'?'downloaded':'已下载'}`);}
function saveProjectsJson(){downloadJson('projects.json',PROJECTS);dirty=false;markDirtyState();}
function savePhotosJson(){downloadJson('photography.json',PHOTO_DATA);dirty=false;markDirtyState();}
function saveImageLayoutJson(){downloadJson('image-layout.json',IMAGE_LAYOUT);layoutDirty=false;q('saveImageLayoutJson')?.classList.remove('editor-dirty');}
function saveTextOverridesJson(){downloadJson('text-overrides.json',TEXT_OVERRIDES);}

function siteZipFilename(){
  const d=new Date();
  const pad=n=>String(n).padStart(2,'0');
  return `changhangko-edit-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}.zip`;
}

async function downloadEditedSiteZip(){
  const btn=q('downloadSiteZip');
  const original=btn.textContent;
  try{
    if(!window.JSZip)throw new Error('ZIP library did not load.');
    btn.disabled=true;
    btn.textContent=lang==='zh'?'[ 正在打包网站… ]':'[ BUILDING SITE ZIP… ]';

    const manifestRes=await fetch('/data/site-manifest.json',{cache:'no-store'});
    if(!manifestRes.ok)throw new Error('Could not load site manifest.');
    const manifest=await manifestRes.json();

    const zip=new window.JSZip();
    const dynamicPaths=new Set([
      'data/projects.json',
      'data/photography.json',
      'data/image-layout.json',
      'data/text-overrides.json',
      'data/site-manifest.json'
    ]);

    let done=0;
    for(const path of manifest.files){
      if(dynamicPaths.has(path))continue;
      if(editedFileBlobs.has(path)){
        zip.file(path,editedFileBlobs.get(path));
      }else{
        const res=await fetch('/'+path,{cache:'no-store'});
        if(!res.ok)throw new Error(`Could not collect ${path} (${res.status})`);
        zip.file(path,await res.blob());
      }
      done++;
      if(done%8===0){
        btn.textContent=lang==='zh'?`[ 收集文件 ${done}/${manifest.files.length} ]`:`[ COLLECTING ${done}/${manifest.files.length} ]`;
      }
    }

    // Current in-browser edits always replace the server JSON files.
    zip.file('data/projects.json',JSON.stringify(PROJECTS,null,2)+'\n');
    zip.file('data/photography.json',JSON.stringify(PHOTO_DATA,null,2)+'\n');
    zip.file('data/image-layout.json',JSON.stringify(IMAGE_LAYOUT,null,2)+'\n');
    zip.file('data/text-overrides.json',JSON.stringify(TEXT_OVERRIDES,null,2)+'\n');
    zip.file('data/site-manifest.json',JSON.stringify(manifest,null,2)+'\n');

    // Deployment config is not necessarily served as a public asset by Vercel,
    // so include it directly instead of trying to fetch /vercel.json.
    zip.file('vercel.json',JSON.stringify({
      cleanUrls:false,
      trailingSlash:false
    },null,2)+'\n');

    // Include every image replaced during this edit session, including newly created project image paths.
    for(const [path,blob] of editedFileBlobs){
      zip.file(path,blob);
    }

    btn.textContent=lang==='zh'?'[ 正在压缩… ]':'[ COMPRESSING… ]';
    const blob=await zip.generateAsync({
      type:'blob',
      compression:'DEFLATE',
      compressionOptions:{level:6}
    });
    downloadBlobAs(blob,siteZipFilename());

    dirty=false;
    layoutDirty=false;
    markDirtyState();
    q('saveImageLayoutJson')?.classList.remove('editor-dirty');
    imageEditorToast(lang==='zh'
      ?'完整网站 ZIP 已下载 · 可直接解压部署 / 上传 GitHub'
      :'Complete site ZIP downloaded · ready to deploy or upload to GitHub');
  }catch(err){
    console.error(err);
    imageEditorToast(lang==='zh'
      ?`网站 ZIP 导出失败：${err.message}`
      :`Site ZIP export failed: ${err.message}`);
  }finally{
    btn.disabled=false;
    btn.textContent=original;
  }
}

function showToast(message){let el=q('editorToast');if(!el){el=document.createElement('div');el.id='editorToast';el.className='editor-toast';document.body.appendChild(el);}el.textContent=message;el.classList.add('visible');clearTimeout(showToast._t);showToast._t=setTimeout(()=>el.classList.remove('visible'),1600);}
function escapeHtml(value=''){return String(value).replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));}
function escapeAttr(value=''){return escapeHtml(value).replace(/`/g,'&#96;');}


/* ---------- About / Genome Portrait ---------- */
let profileDecodeInitialised=false;
let profileAnimationFrame=null;
function initProfileDecode(){
  const canvas=q('profileGenome'), box=q('profileDecode');
  if(!canvas||!box||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const ctx=canvas.getContext('2d');
  const DNA='ACGT';
  const CELL_X=15,CELL_Y=17;
  let cols=0,rows=0,chars=[],thresholds=[];
  let pointerX=-999,pointerY=-999;
  let reveal=0;
  let lastMutation=0;

  function resize(){
    const rect=box.getBoundingClientRect();
    if(rect.width<2||rect.height<2)return;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);
    canvas.style.width=rect.width+'px';canvas.style.height=rect.height+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    cols=Math.ceil(rect.width/CELL_X);rows=Math.ceil(rect.height/CELL_Y);
    chars=Array.from({length:rows},()=>Array.from({length:cols},()=>DNA[Math.random()*4|0]));
    thresholds=Array.from({length:rows},()=>Array.from({length:cols},()=>Math.random()));
  }

  function restart(){reveal=0;resize();}

  function draw(ts=0){
    const rect=box.getBoundingClientRect();
    if(rect.width>1&&rect.height>1){
      ctx.clearRect(0,0,rect.width,rect.height);
      ctx.font='10px Courier New';ctx.textAlign='center';ctx.textBaseline='middle';
      reveal+=(1-reveal)*0.018;
      const mutate=ts-lastMutation>110;
      if(mutate)lastMutation=ts;
      for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
        const px=x*CELL_X+CELL_X/2,py=y*CELL_Y+CELL_Y/2;
        const dx=px-pointerX,dy=py-pointerY,d=Math.sqrt(dx*dx+dy*dy);
        let visibility=thresholds[y][x]>reveal?1:0;
        if(d<88){visibility=Math.max(visibility,1-d/88);if(mutate&&Math.random()<.16)chars[y][x]=DNA[Math.random()*4|0];}
        if(visibility>.03){ctx.fillStyle=`rgba(244,244,239,${Math.min(.82,visibility*.74)})`;ctx.fillText(chars[y][x],px,py);}
      }
    }
    profileAnimationFrame=requestAnimationFrame(draw);
  }

  function point(clientX,clientY){const r=box.getBoundingClientRect();pointerX=clientX-r.left;pointerY=clientY-r.top;}
  box.addEventListener('pointermove',e=>point(e.clientX,e.clientY));
  box.addEventListener('pointerleave',()=>{pointerX=-999;pointerY=-999;});
  box.addEventListener('pointerdown',e=>point(e.clientX,e.clientY));
  window.addEventListener('resize',resize);
  box._restartProfileDecode=restart;
  restart();draw();profileDecodeInitialised=true;
}
function restartProfileDecode(){
  if(!profileDecodeInitialised)initProfileDecode();
  const box=q('profileDecode');
  if(box?._restartProfileDecode)requestAnimationFrame(()=>box._restartProfileDecode());
}

function togglePortfolioTheme(){
  document.body.classList.toggle('light');
  localStorage.setItem(THEME_STORAGE_KEY,document.body.classList.contains('light')?'light':'dark');
  applyUI();
}
function togglePortfolioLanguage(){
  lang=lang==='en'?'zh':'en';
  localStorage.setItem(LANG_STORAGE_KEY,lang);
  const hintWasVisible=interactionHintShown&&q('interactionHint')?.classList.contains('visible');
  applyUI();
  if(hintWasVisible)requestAnimationFrame(()=>flickInteractionHintLanguage());
}
function openPortfolioIndex(){showPanel(indexPanel);}
function openPortfolioAbout(){showPanel(aboutPanel);requestAnimationFrame(restartProfileDecode);}

function bindGlobal(){
  bindTextScaleControls();
  q('editorLoginSubmit')?.addEventListener('click',submitEditorLogin);
  q('editorLoginCancel')?.addEventListener('click',()=>{
    hideEditorLogin();
    const url=new URL(window.location.href);
    url.searchParams.delete('edit');
    history.replaceState({},'',url.pathname+url.search+url.hash);
  });
  q('editorPasswordInput')?.addEventListener('keydown',e=>{
    if(e.key==='Enter'){e.preventDefault();submitEditorLogin();}
    if(e.key==='Escape'){e.preventDefault();hideEditorLogin();}
  });
  q('portfolioImagePicker').addEventListener('change',e=>handlePickedPortfolioImage(e.target.files?.[0]));
  q('imageSizeRange').addEventListener('input',e=>{if(selectedImageTarget?.element)setImageLayoutWidth(selectedImageTarget.element,e.target.value);});
  q('imageSizeReset').addEventListener('click',()=>{if(selectedImageTarget?.element)setImageLayoutWidth(selectedImageTarget.element,100);});
  q('replaceSelectedImage').addEventListener('click',()=>{
    if(!selectedImageTarget)return;
    pendingImageTarget={...selectedImageTarget};
    const picker=q('portfolioImagePicker');picker.value='';picker.click();
  });
  q('saveImageLayoutJson').addEventListener('click',saveImageLayoutJson);
  q('downloadSiteZip').addEventListener('click',downloadEditedSiteZip);
  q('gridModeToggle').addEventListener('click',()=>setGridLayoutMode(!gridLayoutMode));
  q('gridSnapToggle').addEventListener('click',()=>setGridSnap(!gridSnap));
  q('resetSelectedLayout').addEventListener('click',resetSelectedLayout);
  q('layoutNudgeLeft').addEventListener('click',()=>nudgeSelected(-1,0));
  q('layoutNudgeRight').addEventListener('click',()=>nudgeSelected(1,0));
  q('layoutNudgeUp').addEventListener('click',()=>nudgeSelected(0,-1));
  q('layoutNudgeDown').addEventListener('click',()=>nudgeSelected(0,1));
  q('close').addEventListener('click',hidePanels);
  document.querySelectorAll('.panelClose').forEach(btn=>btn.addEventListener('click',hidePanels));
  q('nextProject').addEventListener('click',()=>transitionToProject((currentProject+1)%PROJECTS.length));
  q('copyInstagramAccount').addEventListener('click',async()=>{
    const account=q('instagramAccount'),status=q('instagramCopyStatus');
    try{
      await navigator.clipboard.writeText(account.value);
      status.textContent=lang==='zh'?'账号已复制':'ACCOUNT COPIED';
    }catch{
      account.focus();account.select();
      status.textContent=lang==='zh'?'请长按复制账号':'SELECT AND COPY THE ACCOUNT';
    }
  });

  q('theme').addEventListener('click',togglePortfolioTheme);
  q('projectTheme').addEventListener('click',togglePortfolioTheme);

  q('index').addEventListener('click',openPortfolioIndex);
  q('projectIndex').addEventListener('click',openPortfolioIndex);

  q('about').addEventListener('click',openPortfolioAbout);
  q('projectAbout').addEventListener('click',openPortfolioAbout);

  q('langToggle').addEventListener('click',togglePortfolioLanguage);
  q('projectLangToggle').addEventListener('click',togglePortfolioLanguage);
  editProjectBtn.addEventListener('click',()=>editMode?exitEditMode(false):enterEditMode());
  q('cancelEdit').addEventListener('click',()=>exitEditMode(true));q('addMedia').addEventListener('click',addMedia);q('addTaste').addEventListener('click',addTaste);q('saveProjectsJson').addEventListener('click',saveProjectsJson);q('savePhotosJson').addEventListener('click',savePhotosJson);
  addEventListener('keydown',e=>{if(e.key==='Escape'){if(editMode){exitEditMode(false);}else{hidePanels();}}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='s'&&editMode){e.preventDefault();saveProjectsJson();}});
  let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(build,150)});
}

try{
  await loadData();
  bindGlobal();
  applyUI();
  const linkedCategory=editParams.get('project');
  if(['space','system','code','observation','research'].includes(linkedCategory)){
    const linkedIndex=PROJECTS.findIndex(p=>p.categoryKey===linkedCategory);
    if(linkedIndex>=0){
      openProject(linkedIndex);
      const targetId=window.location.hash.slice(1);
      if(['todaiPlayground','aiReviewProject'].includes(targetId))requestAnimationFrame(()=>{
        const target=document.getElementById(targetId);
        if(target&&!target.hidden)target.scrollIntoView({block:'start'});
      });
    }
  }
  if(editParams.get('edit')==='1')showEditorLogin();
}catch(err){
  console.error(err);
  document.body.innerHTML='<pre style="padding:24px;color:white;background:#050505">Portfolio data failed to load. Serve this folder over HTTP (for example Vercel or a local development server).</pre>';
}

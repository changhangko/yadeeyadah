const UI = {"en":{"roleLine":"CREATIVE TECHNOLOGIST / COMPUTATIONAL DESIGNER","about":"[ ABOUT ]","themeLight":"[ LIGHT ]","themeDark":"[ DARK ]","index":"[ INDEX ]","lang":"[ EN / 中文 ]","footerLeft":"ACGT / SELECTED WORK","footerRight":"MUTATION → DECODE","close":"[ ESC / CLOSE ]","labels":{"role":"Role","tools":"Tools","output":"Output","year":"Year"},"story":{"question":"01 / Question","built":"02 / Built","judgement":"03 / Judgement"},"taste":"Taste / Decision Log","next":"NEXT MUTATION","indexTitle":"PROJECT INDEX","indexIntro":"A selection of projects and studies positioned between computational design, interface thinking, AI-assisted prototyping and visual judgement. The Genome interface remains the primary navigation: each mutation is a project entry point.","aboutTitle":"ABOUT / PRACTICE","aboutLead":"I work at the intersection of design, tools and judgement — building systems, interfaces and visual work that translate complexity into something legible, usable and felt.","aboutText":"My background is in computational design, but my practice increasingly sits between creative technology, AI-native prototyping, product thinking and visual editing. I am interested in how tools shape attention, and how taste can be articulated through what is kept, removed and refined.","aboutBlocks":[["Current","Computational Designer<br>Bates Smart / Melbourne"],["Working with","Claude Code · Codex · ChatGPT · HTML/CSS/JS · Python · Rhino · Grasshopper · Mapbox · Revit"],["Interested in","AI-native interaction · model evaluation · multimodal interfaces · visual systems · generative tools · creative technology"],["Contact","<a class=\"contact-link\" href=\"mailto:zhanghangge@gmail.com\">zhanghangge@gmail.com</a><br>Beijing / Melbourne"]],"galleryTitle":"Selected Frames","profileEyebrow":"01 / PROFILE","profileMetaLeft":"SELF / IDENTITY","profileMetaRight":"ACGT → DECODE","conceptEyebrow":"02 / DESIGN CONCEPT","conceptTitle":"GENOME / MUTATION / DECODE","conceptText1":"This portfolio draws from the conceptual language of science fiction films such as Blade Runner, Ex Machina and Gattaca. Rather than borrowing their aesthetics directly, I am interested in the questions they share: how identity is encoded, how machines interpret humans, how systems classify individuals, and where judgement sits between data and intuition.","conceptText2":"The Genome interface translates these ideas into a navigational system. Projects appear as mutations within a field of ACGT sequences, and interaction becomes a process of decoding. The website is therefore not only a container for work, but a small speculative system about perception, identity and machine-readable judgement.","practiceEyebrow":"03 / CURRENT PRACTICE"},"zh":{"roleLine":"创意技术 / 计算设计","about":"[ 关于 ]","themeLight":"[ 浅色 ]","themeDark":"[ 深色 ]","index":"[ 索引 ]","lang":"[ 中文 / EN ]","footerLeft":"ACGT / 作品索引","footerRight":"变异 → 解码","close":"[ ESC / 关闭 ]","labels":{"role":"角色","tools":"工具","output":"产出","year":"年份"},"story":{"question":"01 / 问题","built":"02 / 构建","judgement":"03 / 判断"},"taste":"审美判断 / 决策记录","next":"下一个变异","indexTitle":"项目索引","indexIntro":"这些项目与研究分布在计算设计、界面思维、AI 辅助原型与视觉判断之间。Genome 仍然是主要导航方式：每一个 mutation 都是一个项目入口。","aboutTitle":"关于 / 实践","aboutLead":"我的工作位于设计、工具与判断的交叉处——通过系统、界面与视觉表达，把复杂性转化成可理解、可使用、可感知的体验。","aboutText":"我的背景来自计算设计，但现在的实践越来越多地处在创意技术、AI 原型、产品思维与视觉编辑之间。我关心工具如何塑造注意力，也关心“审美”如何通过保留、删除与打磨被明确表达出来。","aboutBlocks":[["当前","Computational Designer<br>Bates Smart / 墨尔本"],["使用中","Claude Code · Codex · ChatGPT · HTML/CSS/JS · Python · Rhino · Grasshopper · Mapbox · Revit"],["关注方向","AI 原生交互 · 模型评估 · 多模态界面 · 视觉系统 · 生成工具 · 创意技术"],["联系","<a class=\"contact-link\" href=\"mailto:zhanghangge@gmail.com\">zhanghangge@gmail.com</a><br>北京 / 墨尔本"]],"galleryTitle":"摄影选帧","profileEyebrow":"01 / 关于我","profileMetaLeft":"自我 / 身份","profileMetaRight":"ACGT → 解码","conceptEyebrow":"02 / 设计概念","conceptTitle":"基因 / 变异 / 解码","conceptText1":"这个作品集的设计受到《银翼杀手》《机械姬》《Gattaca》等科幻电影在概念层面的影响。与其直接借用它们的视觉风格，我更关注这些作品共同讨论的问题：身份如何被编码，机器如何理解人，系统如何分类个体，以及判断如何存在于数据与直觉之间。","conceptText2":"Genome 界面把这些概念转化成一套导航系统。项目以“变异”的形式散布在 ACGT 序列中，用户通过交互逐渐完成“解码”。因此，这个网站不仅是作品的容器，也像一个关于感知、身份与机器可读判断的小型推演系统。","practiceEyebrow":"03 / 当前实践"}};

let PROJECTS=[];
let PHOTO_DATA=null;
let SERVER_PROJECTS=[];
let SERVER_PHOTO_DATA=null;
const L="ACGT", genome=document.getElementById("genome");
let zones=[], currentProject=0, lang=localStorage.getItem('garry_portfolio_lang')||'en';
let editMode=false, editSnapshot=null, dirty=false;
let armedMutation=null;
let transitionRunning=false;
let interactionHintTimer=null;
let interactionHintShown=false;
let mutationInteracted=false;

const q=id=>document.getElementById(id);

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
  document.querySelectorAll('.text-size-value').forEach(el=>{
    el.textContent=`${Math.round(textScale*100)}%`;
  });
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
  const [projectsRes, photoRes] = await Promise.all([fetch('/data/projects.json'), fetch('/data/photography.json')]);
  if(!projectsRes.ok || !photoRes.ok) throw new Error('Portfolio data failed to load.');
  PROJECTS = await projectsRes.json();
  PHOTO_DATA = await photoRes.json();
  SERVER_PROJECTS = deepClone(PROJECTS);
  SERVER_PHOTO_DATA = deepClone(PHOTO_DATA);
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
  flipLine(d.querySelector('.title'),`${PROJECTS[+row.dataset.p].id} / ${p.title}`);
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
const photoWallWrap=q('photoWallWrap'),photoWall=q('photoWall'),architectureProject=q('architectureProject'),embeddedProject=q('embeddedProject'),studioLibraryFrame=q('studioLibraryFrame');
const editorBar=q('editorBar'),editProjectBtn=q('editProject'),pmetaEdit=q('pmetaEdit'),editorIndicator=q('editorIndicator');

/* Private editor gate. This is a local deterrent, not secure authentication. */
const EDITOR_PASSWORD='685536';
const editParams=new URLSearchParams(window.location.search);
let editorUnlocked=false;
if(editParams.get('edit')==='1'){
  const password=prompt('Editor password');
  if(password===EDITOR_PASSWORD){
    editorUnlocked=true;
    editProjectBtn.style.display='inline-flex';
    if(editorIndicator)editorIndicator.style.display='inline-flex';
  }else if(password!==null){
    alert('Incorrect password');
  }
}


function hidePanels(){if(editMode)exitEditMode(false);[projectEl,indexPanel,aboutPanel].forEach(el=>{el.classList.remove('visible');el.setAttribute('aria-hidden','true')});document.body.style.overflow='hidden';}
function showPanel(el){if(editMode)exitEditMode(false);[projectEl,indexPanel,aboutPanel].forEach(panel=>{panel.classList.remove('visible');panel.setAttribute('aria-hidden','true')});el.classList.add('visible');el.setAttribute('aria-hidden','false');el.scrollTop=0;}

function rootPath(path){return path?.startsWith('/')?path:`/${path||''}`;}
function renderPhotoWall(){
  if(!PHOTO_DATA?.photos?.length){photoWallWrap.classList.remove('visible');photoWall.innerHTML='';return;}
  photoWallWrap.classList.add('visible');
  q('photoNote').textContent=PHOTO_DATA.note?.[lang]||'';
  q('galleryTitle').textContent=t().galleryTitle;
  photoWall.innerHTML=PHOTO_DATA.photos.map((item,idx)=>`<figure class="photo-item" data-photo-index="${idx}">
    <img src="${rootPath(item.src)}" srcset="${rootPath(item.srcset.small)} 640w, ${rootPath(item.srcset.medium)} 1400w, ${rootPath(item.srcset.large)} 2048w" sizes="(max-width:700px) 100vw, (max-width:900px) 50vw, 33vw" loading="${idx<2?'eager':'lazy'}" decoding="async" width="${item.width}" height="${item.height}" alt="${escapeAttr(item.caption?.[lang]||'')}">
    <figcaption class="photo-cap"><span><b>${item.id}</b></span><span class="photo-caption-editor" data-editable="true" data-photo-caption="${idx}">${escapeHtml(item.caption?.[lang]||'')}</span><span class="photo-caption-view">${item.visibleMeta?escapeHtml(item.caption?.[lang]||''):''}</span></figcaption>
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
  const chars='ACGT';let step=0;const max=8;
  el.textContent='';
  setTimeout(()=>{
    const timer=setInterval(()=>{
      step++;let out='';
      for(let i=0;i<target.length;i++){
        if(target[i]===' '){out+=' ';continue}
        const settle=Math.floor((i/Math.max(1,target.length))*4)+3;
        out+=step>=settle?target[i]:chars[Math.random()*4|0];
      }
      el.textContent=out;
      if(step>=max){el.textContent=target;clearInterval(timer)}
    },42);
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
    transitionFlip(q('transitionId'),`MUTATION ${base.id}`,0);
    transitionFlip(q('transitionTitle'),p.title,35);
    transitionFlip(q('transitionBrief'),p.brief,70);
    transitionFlip(q('transitionMeta'),p.meta,105);
    transitionFlip(q('transitionYear'),p.year,140);
  },260);
  setTimeout(()=>{
    openProject(i);
    projectEl.scrollTop=0;
  },760);
  setTimeout(()=>overlay.classList.add('exit'),900);
  setTimeout(()=>{
    overlay.classList.remove('active','fill','decoding','exit');
    overlay.setAttribute('aria-hidden','true');
    transitionRunning=false;
  },1110);
}

function openProject(i){
  currentProject=i;const p=proj(i),base=PROJECTS[i];
  pid.textContent=`MUTATION ${base.id}`;pt.textContent=p.title;pd.textContent=p.desc;pbrief.textContent=p.brief;
  prole.textContent=p.role;ptools.textContent=p.tools;poutput.textContent=p.output;pyear.textContent=p.year;
  pquestion.textContent=p.question;pbuilt.textContent=p.built;pjudgement.textContent=p.judgement;
  pmedia.innerHTML=p.media.map((m,j)=>`<div class="media" data-media-index="${j}"><button class="editor-remove remove-media" data-remove-media="${j}">[ × ]</button><span><b>${String(j+1).padStart(2,'0')}</b></span><span class="media-text" data-editable="true" data-media="${j}">${escapeHtml(m)}</span></div>`).join('');
  ptaste.innerHTML=p.taste.map((item,j)=>`<div class="taste-item" data-taste-index="${j}"><button class="editor-remove remove-taste" data-remove-taste="${j}">[ × ]</button><span class="taste-key" data-editable="true" data-taste-key="${j}">${escapeHtml(item[0])}</span><p data-editable="true" data-taste-text="${j}">${escapeHtml(item[1])}</p></div>`).join('');
  if(base.id==='06')renderPhotoWall();else{photoWallWrap.classList.remove('visible');photoWall.innerHTML='';}
  const hasArchitecture=base.id==='05';
  const hasEmbeddedLibrary=base.id==='07';
  if(architectureProject){architectureProject.hidden=!hasArchitecture;}
  if(embeddedProject){embeddedProject.hidden=!hasEmbeddedLibrary;}
  pmedia.style.display=(hasArchitecture||hasEmbeddedLibrary)?'none':'';
  if(hasEmbeddedLibrary&&studioLibraryFrame){
    // Reload the demo when the case study is reopened so its blue home screen is always the entry state.
    const src=studioLibraryFrame.getAttribute('src');
    studioLibraryFrame.setAttribute('src',src);
  }
  const next=proj((i+1)%PROJECTS.length),nextBase=PROJECTS[(i+1)%PROJECTS.length];nextProjectName.textContent=`${nextBase.id} / ${next.title}`;
  if(!projectEl.classList.contains('visible'))showPanel(projectEl);
  updateEditorForProject();
  if(editorUnlocked&&!editMode)enterEditMode();
  else if(editMode)makeEditable();
}

function buildIndex(){const list=q('indexList');list.innerHTML=PROJECTS.map((p,i)=>{const d=p[lang];return `<button class="index-row" data-project="${i}"><span class="index-no">${p.id}</span><span class="index-title">${escapeHtml(d.title)}</span><span class="index-meta">${escapeHtml(d.meta)}</span><span class="index-year">${escapeHtml(d.year)}</span></button>`}).join('');list.querySelectorAll('.index-row').forEach(btn=>btn.addEventListener('click',()=>transitionToProject(+btn.dataset.project)));}
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
  document.querySelectorAll('.studio-i18n, .arch-i18n').forEach(el=>{
    const value=lang==='zh'?el.dataset.zh:el.dataset.en;
    if(value)el.textContent=value;
  });
}

function applyUI(){
  const copy=t();document.documentElement.lang=lang==='en'?'en':'zh-CN';
  q('brandRole').textContent=copy.roleLine;q('about').textContent=copy.about;q('theme').textContent=document.body.classList.contains('light')?copy.themeDark:copy.themeLight;q('index').textContent=copy.index;q('langToggle').textContent=copy.lang;q('footerLeft').textContent=copy.footerLeft;q('footerRight').textContent=copy.footerRight;q('close').textContent=copy.close;q('indexClose').textContent=copy.close;q('aboutClose').textContent=copy.close;
  q('labelRole').textContent=copy.labels.role;q('labelTools').textContent=copy.labels.tools;q('labelOutput').textContent=copy.labels.output;q('labelYear').textContent=copy.labels.year;q('storyQuestion').textContent=copy.story.question;q('storyBuilt').textContent=copy.story.built;q('storyJudgement').textContent=copy.story.judgement;q('tasteHeading').textContent=copy.taste;q('nextLabel').textContent=copy.next;q('indexTitle').textContent=copy.indexTitle;q('indexIntro').textContent=copy.indexIntro;q('aboutTitle').textContent=copy.aboutTitle;
  renderAbout();applyStudioCaseCopy();buildIndex();build();
  if(projectEl.classList.contains('visible'))openProject(currentProject);
  updateEditorLabels();
}

/* ---------- Editor ---------- */
const scalarBindings=[
  [pt,'title'],[pbrief,'brief'],[pd,'desc'],[prole,'role'],[ptools,'tools'],[poutput,'output'],[pyear,'year'],[pquestion,'question'],[pbuilt,'built'],[pjudgement,'judgement']
];

function enterEditMode(){
  if(editMode)return;
  editMode=true;editSnapshot={projects:deepClone(PROJECTS),photos:deepClone(PHOTO_DATA)};dirty=false;
  projectEl.classList.add('editing');editorBar.classList.add('visible');editorBar.setAttribute('aria-hidden','false');
  editProjectBtn.textContent='[ EDITING ]';
  updateEditorForProject();makeEditable();showToast(lang==='en'?'Edit mode on':'编辑模式已开启');
}
function exitEditMode(cancel=false){
  if(!editMode)return;
  if(cancel && editSnapshot){PROJECTS=deepClone(editSnapshot.projects);PHOTO_DATA=deepClone(editSnapshot.photos);buildIndex();build();}
  editMode=false;editSnapshot=null;dirty=false;
  projectEl.classList.remove('editing');editorBar.classList.remove('visible');editorBar.setAttribute('aria-hidden','true');
  editProjectBtn.textContent='[ EDIT ]';
  scalarBindings.forEach(([el])=>{el.contentEditable='false';el.removeAttribute('data-editable');});
  pmetaEdit.contentEditable='false';
  if(projectEl.classList.contains('visible'))openProject(currentProject);
}
function updateEditorLabels(){
  q('editorStatus').textContent=lang==='en'?'EDIT MODE / EN':'编辑模式 / 中文';
  q('editorHint').textContent=lang==='en'?'CLICK TEXT TO EDIT · CHANGES ARE LOCAL UNTIL EXPORTED':'点击文字直接编辑 · 导出 JSON 前只保存在当前页面';
}
function updateEditorForProject(){
  if(!PROJECTS[currentProject])return;
  pmetaEdit.textContent=proj(currentProject).meta||'';
  q('savePhotosJson').classList.toggle('visible',PROJECTS[currentProject].id==='06');
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
  pmedia.querySelectorAll('[data-remove-media]').forEach(btn=>btn.onclick=()=>{PROJECTS[currentProject][lang].media.splice(+btn.dataset.removeMedia,1);touch();openProject(currentProject);});
  ptaste.querySelectorAll('[data-taste-key]').forEach(el=>{el.contentEditable='true';el.spellcheck=true;el.oninput=()=>{PROJECTS[currentProject][lang].taste[+el.dataset.tasteKey][0]=cleanText(el);touch();};});
  ptaste.querySelectorAll('[data-taste-text]').forEach(el=>{el.contentEditable='true';el.spellcheck=true;el.oninput=()=>{PROJECTS[currentProject][lang].taste[+el.dataset.tasteText][1]=cleanText(el);touch();};});
  ptaste.querySelectorAll('[data-remove-taste]').forEach(btn=>btn.onclick=()=>{PROJECTS[currentProject][lang].taste.splice(+btn.dataset.removeTaste,1);touch();openProject(currentProject);});
  if(PROJECTS[currentProject].id==='06'){
    q('photoNote').contentEditable='true';q('photoNote').dataset.editable='true';q('photoNote').spellcheck=true;
    q('photoNote').oninput=()=>{PHOTO_DATA.note[lang]=cleanText(q('photoNote'));touch();};
    bindPhotoEditors();
  }
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
function addMedia(){if(!editMode)return;PROJECTS[currentProject][lang].media.push(lang==='en'?'NEW MEDIA / DESCRIPTION':'新媒体 / 描述');touch();openProject(currentProject);requestAnimationFrame(()=>{const items=pmedia.querySelectorAll('[data-media]');items[items.length-1]?.focus();});}
function addTaste(){if(!editMode)return;PROJECTS[currentProject][lang].taste.push([lang==='en'?'DECISION':'判断',lang==='en'?'Describe the judgement here.':'在这里描述你的判断。']);touch();openProject(currentProject);requestAnimationFrame(()=>{const items=ptaste.querySelectorAll('[data-taste-text]');items[items.length-1]?.focus();});}
function downloadJson(filename,data){const blob=new Blob([JSON.stringify(data,null,2)+'\n'],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);showToast(`${filename} ${lang==='en'?'downloaded':'已下载'}`);}
function saveProjectsJson(){downloadJson('projects.json',PROJECTS);dirty=false;markDirtyState();}
function savePhotosJson(){downloadJson('photography.json',PHOTO_DATA);dirty=false;markDirtyState();}
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

function bindGlobal(){
  bindTextScaleControls();
  q('close').addEventListener('click',hidePanels);document.querySelectorAll('.panelClose').forEach(btn=>btn.addEventListener('click',hidePanels));q('nextProject').addEventListener('click',()=>transitionToProject((currentProject+1)%PROJECTS.length));q('theme').addEventListener('click',e=>{document.body.classList.toggle('light');e.currentTarget.textContent=document.body.classList.contains('light')?t().themeDark:t().themeLight;});q('index').addEventListener('click',()=>showPanel(indexPanel));q('about').addEventListener('click',()=>{showPanel(aboutPanel);requestAnimationFrame(restartProfileDecode);});
  q('langToggle').addEventListener('click',()=>{lang=lang==='en'?'zh':'en';localStorage.setItem('garry_portfolio_lang',lang);applyUI();});
  editProjectBtn.addEventListener('click',()=>editMode?exitEditMode(false):enterEditMode());
  q('cancelEdit').addEventListener('click',()=>exitEditMode(true));q('addMedia').addEventListener('click',addMedia);q('addTaste').addEventListener('click',addTaste);q('saveProjectsJson').addEventListener('click',saveProjectsJson);q('savePhotosJson').addEventListener('click',savePhotosJson);
  addEventListener('keydown',e=>{if(e.key==='Escape'){if(editMode){exitEditMode(false);}else{hidePanels();}}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='s'&&editMode){e.preventDefault();saveProjectsJson();}});
  let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(build,150)});
}

try{await loadData();bindGlobal();applyUI();}catch(err){console.error(err);document.body.innerHTML='<pre style="padding:24px;color:white;background:#050505">Portfolio data failed to load. Serve this folder over HTTP (for example Vercel or a local development server).</pre>';}

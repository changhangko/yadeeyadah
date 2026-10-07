import {drawingPalette as D} from './drawing-palette.js';
/* Portfolio-specific diagrams. Geometry is explanatory, never measured project data. */
const images = new Map();
const clamp = n => Math.max(0, Math.min(1, n));
export function drawEditorialDiagram(canvas, category, stage, progress, photos, language) {
  const bounds = canvas.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const width = Math.round(bounds.width * dpr), height = Math.round(bounds.height * dpr);
  if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
  const c = canvas.getContext('2d');
  c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, bounds.width, bounds.height);
  const W = 480, H = 340, scale = Math.min(bounds.width / W, bounds.height / H);
  c.translate((bounds.width - W * scale) / 2, (bounds.height - H * scale) / 2); c.scale(scale, scale);
  const p = {fg:D.ink,soft:D.secondary,line:D.line,bg:D.paper};
  c.fillStyle=D.paper;c.fillRect(0,0,W,H);
  const t = clamp(progress), zh = language === 'zh';
  function line(x,y,X,Y,opacity=1,dash=[]) { c.save();c.globalAlpha=opacity;c.strokeStyle=p.line;c.lineWidth=1;c.setLineDash(dash);c.beginPath();c.moveTo(x,y);c.lineTo(X,Y);c.stroke();c.restore(); }
  function path(points,fill=null,opacity=1) { c.save();c.globalAlpha=opacity;c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(fill){c.fillStyle=fill;c.fill();}c.strokeStyle=p.fg;c.lineWidth=.75;c.stroke();c.restore(); }
  function rect(x,y,w,h,fill=null,opacity=1) { c.save();c.globalAlpha=opacity;if(fill){c.fillStyle=fill;c.fillRect(x,y,w,h);}c.strokeStyle=p.line;c.lineWidth=1;c.strokeRect(x,y,w,h);c.restore(); }
  function text(value,x,y,size=12,color=p.soft,align='left') { c.fillStyle=color;c.font=`${size}px "Courier New",monospace`;c.textAlign=align;c.textBaseline='middle';c.fillText(value,x,y);c.textAlign='left'; }
  function dot(x,y,r=3,fill=D.terracotta) { c.fillStyle=fill;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill(); }
  function arrow(x,y,X,Y,opacity=1) { line(x,y,X,Y,opacity);const a=Math.atan2(Y-y,X-x);line(X,Y,X-6*Math.cos(a-.5),Y-6*Math.sin(a-.5),opacity);line(X,Y,X-6*Math.cos(a+.5),Y-6*Math.sin(a+.5),opacity); }
  function cable(x,y,X,Y,opacity=1) { c.save();c.strokeStyle=D.slate;c.globalAlpha=opacity;c.lineWidth=1.2;c.beginPath();c.moveTo(x,y);c.bezierCurveTo((x+X)/2,y,(x+X)/2,Y,X,Y);c.stroke();c.restore(); }
  function label(value,x,y,X,Y) { dot(x,y,2);line(x,y,X,Y);text(value,X+5,Y,11,p.fg); }
  const foot = (left,right) => { line(24,309,456,309);text(left,24,325,10);text(right,456,325,10,p.soft,'right'); };
  if (category === 'space') {
    const iso=(x,y,z=0)=>[240+(x-y)*94,224+(x+y)*39-z*97];
    const plane=(x,y,w,h,z,fill,alpha=1)=>path([iso(x,y,z),iso(x+w,y,z),iso(x+w,y+h,z),iso(x,y+h,z)],fill,alpha);
    function volume(x,y,w,h,z,context=false){
      const a=iso(x,y,0),b=iso(x+w,y,0),e=iso(x+w,y+h,0),d=iso(x,y+h,0);
      const A=iso(x,y,z),B=iso(x+w,y,z),E=iso(x+w,y+h,z),F=iso(x,y+h,z);
      path([d,e,E,F],context?D.context:D.ochreLight);
      path([b,e,E,B],context?D.contextSide:D.ochreShade);
      path([A,B,E,F],context?D.paper:D.ochre);
      if(!context)for(let level=.13;level<z;level+=.13){
        line(...iso(x,y+h,level),...iso(x+w,y+h,level),.45);
        line(...iso(x+w,y,level),...iso(x+w,y+h,level),.45);
      }
    }
    // Muted urban context remains the same in each study.
    [[-1.05,-1.2,.6,.32,.24],[.25,-1.2,.6,.32,.3],[-1.15,.35,.23,.5,.24],[.98,-.6,.25,.65,.28]].forEach(v=>volume(...v,true));
    plane(-.94,-.74,1.88,1.48,0,D.context);
    plane(-.88,-.68,1.76,1.36,.012,D.terracottaLight,.55);
    for(const x of [-.88,.88])line(...iso(x,-.68,0),...iso(x,.68,0),.6,[2,3]);
    if(stage===0)volume(-.72,-.5,1.25,1,.18+.46*t);
    else{
      const footprints=[[-.72,-.5],[-.07,-.5],[-.72,.12],[-.07,.12]];
      // Sequentially open the passage, then vary the height on identical footprints.
      footprints.forEach(([x,y],i)=>volume(x,y,.5,.36,stage===1?.64:.64+([.42,.82,.3,.62][i]-.64)*t));
    }
    if(stage>=1){
      plane(-.8,-.04,1.6,.13,.018,D.terracotta,.25+.6*t);
      arrow(...iso(-.93,.025,.025),...iso(.89,.025,.025));
      text('WALKING CONNECTION',28,281,11,D.terracotta);
    }
    if(stage===3){
      plane(.5,-.45,.35,.96,.02,D.sageLight);
      for(const [x,y] of [[.64,-.28],[.67,.02],[.65,.32],[-.58,.59],[-.25,.59]]){
        const a=iso(x,y,.03);
        c.fillStyle=D.sageLight;c.strokeStyle=D.sage;c.lineWidth=.65;c.beginPath();c.arc(a[0],a[1]-5,7,0,Math.PI*2);c.fill();c.stroke();
        line(a[0],a[1]-1,a[0],a[1]+4,.8);
      }
      label('OPEN SPACE',...iso(.68,.32,.03),355,266);
      // Roof plate lifted along real projection guides, as an exploded layer study.
      const lift=.16*t,x=-.07,y=-.5,z=.82+lift;
      [iso(x,y,.82),iso(x+.5,y,.82),iso(x+.5,y+.36,.82)].forEach(a=>line(a[0],a[1],a[0],a[1]-lift*97,.6,[2,3]));
      plane(x,y,.5,.36,z,D.terracotta);
    }
    dot(408,50,6,D.ochre);arrow(398,68,366,92);
    text('SUN DIRECTION',347,29,10);
    text(['01 / ENVELOPE','02 / OPEN THE BLOCK','03 / VARY HEIGHT','04 / GROUND + ROOF'][stage],25,26,11,p.fg);
    label(stage===3?'ROOF LAYER':stage===0?'BUILDING ENVELOPE':'RESIDENTIAL MASS',...iso(-.5,-.45,.68),30,65);
    foot('CONTEXT / MASS / ROUTE','SCHEMATIC / NOT TO SCALE');
  } else if (category === 'system') {
    const names=['CITY MODEL','MATERIAL','FAÇADE','COLOUR','GUIDE','RESOURCE','MODEL','REFERENCE'];
    if(stage===0){names.forEach((name,i)=>{const x=35+(i%3)*142+(i%2)*10,y=47+Math.floor(i/3)*82;rect(x,y,116,56,[D.slateLight,D.ochreLight,D.terracottaLight,D.sageLight][i%4]);text(String(i+1).padStart(2,'0'),x+9,y+12,9);text(name,x+9,y+34,11,p.fg);if(i<5)cable(x+116,y+28,35+((i+1)%3)*142,47+Math.floor((i+1)/3)*82+28,.2);});}
    else if(stage===1){['PLACE','SURFACE','DETAIL','PALETTE'].forEach((name,i)=>{const x=32+(i%2)*225,y=49+Math.floor(i/2)*123;rect(x,y,190,94,[D.slateLight,D.ochreLight,D.terracottaLight,D.sageLight][i],.3);text(name,x+12,y+18,12,p.fg);[[0,6],[1,5],[2,4],[3,7]][i].forEach((index,j)=>{rect(x+12,y+37+j*23,165,19,p.bg,.3+.7*t);text(names[index],x+21,y+47+j*23,10);});});}
    else if(stage===2){rect(142,31,196,39,p.bg);text(zh?'从任务开始':'START FROM A TASK',240,51,12,p.fg,'center');line(240,70,240,111);line(74,111,406,111);['CITY','MATERIAL','FAÇADE','COLOUR'].forEach((name,i)=>{const x=24+i*113;line(x+50,111,x+50,139);rect(x,139,100,57,[D.slateLight,D.ochreLight,D.terracottaLight,D.sageLight][i]);text(name,x+50,162,11,p.fg,'center');text('FIND → INSPECT',x+50,182,8,p.soft,'center');line(x+50,196,x+50,238,.7);dot(x+50,239,3);});text(zh?'任务 → 分类 → 资源':'TASK → CATEGORY → RESOURCE',240,277,12,p.fg,'center');}
    else{rect(28,57,204,188,p.bg);rect(248,57,204,188,p.bg);text('CITY DATA',39,76,11,p.fg);text('STUDIO LIBRARY',259,76,11,p.fg);line(28,91,232,91);line(248,91,452,91);for(let i=0;i<20;i++){const x=43+(i%5)*35,y=108+Math.floor(i/5)*29;path([[x,y],[x+15,y-7],[x+25,y+5],[x+10,y+12]],[D.ochreLight,D.ochre,D.context][i%3],.25+.65*t);}['CITY','MATERIAL','FAÇADE','COLOUR'].forEach((name,i)=>{const x=260+(i%2)*90,y=110+Math.floor(i/2)*57;rect(x,y,78,47,p.bg);text(name,x+8,y+23,10,p.fg);});text('SPATIAL BROWSING',40,228,9);text('TASK-LED BROWSING',260,228,9);}
    foot('CITY DATA + STUDIO LIBRARY','INFORMATION ARCHITECTURE');
  } else if(category === 'code') {
    function node(name,x,y,w=103){rect(x,y,w,45,['CHECK','INTERPOLATE'].includes(name)?D.sageLight:name==='OUTPUT'?D.terracottaLight:D.ochreLight);text(name,x+w/2,y+22,11,p.fg,'center');dot(x,y+22,3,p.soft);dot(x+w,y+22,3,p.fg);}
    if(stage===0){['GEOMETRY','LEVELS','VECTORS'].forEach((name,i)=>{const y=54+i*70;text(name,36,y,12,p.fg);line(36,y+25,311,y+25);const x=90+i*61+Math.sin(t*2)*15;rect(x,y+20,9,10,D.terracotta);text(['CURVE','HEIGHT','DIRECTION'][i],333,y+25,10);});}
    else if(stage===1){node('GEOMETRY',26,42,108);node('LEVELS',26,129,108);node('VECTORS',26,216,108);node('INTERPOLATE',201,87,111);node('DIVIDE',351,129,100);cable(134,64,201,109,.3+.7*t);cable(134,151,201,109,.3+.7*t);cable(134,238,201,109,.3+.7*t);cable(312,109,351,151,.3+.7*t);}
    else if(stage===2){node('GENERATE',32,101,114);node('CHECK',184,101,106);node('OUTPUT',330,101,116);arrow(146,123,184,123);arrow(290,123,330,123);line(237,146,237,217);line(237,217,89,217);arrow(89,217,89,146);text('ADJUST / REPEAT',120,241,11,p.fg);text('PARAMETERS REMAIN VISIBLE',34,64,11);}
    else {rect(35,56,410,204,p.bg);text('RHINO / REUSABLE WORKFLOW',48,76,11,p.fg);line(35,91,445,91);['MODEL','DETAIL','EXPORT'].forEach((v,i)=>{rect(47+i*93,102,84,23,i===0?D.ochreLight:p.bg);text(v,89+i*93,114,10,p.fg,'center');});for(let k=0;k<6;k++){c.strokeStyle=p.fg;c.beginPath();c.moveTo(74,152+k*13);c.bezierCurveTo(176,127+k*12,267,203+k*4,401,143+k*13);c.stroke();}text('GEOMETRY / TOOL / INTERFACE',49,243,10);}
    foot('PARAMETERS → DEPENDENCIES','WORKFLOW SCHEMATIC');
  } else if(category === 'observation') {
    const sample=(photos?.photos||[]).slice(0,8);
    function photo(index,x,y,w,h,alpha=1){const info=sample[index%sample.length];c.save();c.globalAlpha=alpha;rect(x,y,w,h,p.bg);if(info){const src=info.srcset?.small||info.src;let img=images.get(src);if(!img){img=new Image();img.addEventListener('load',()=>canvas.dispatchEvent(new Event('diagram-image-ready',{bubbles:true})),{once:true});img.src='/'+src.replace(/^\//,'');images.set(src,img);}if(img.complete&&img.naturalWidth){const s=Math.max(w/img.naturalWidth,h/img.naturalHeight),sw=w/s,sh=h/s;c.drawImage(img,(img.naturalWidth-sw)/2,(img.naturalHeight-sh)/2,sw,sh,x,y,w,h);}else{text(info.id,x+8,y+h/2,10);}}c.restore();}
    const keep=[0,2,4,7];
    if(stage<2){sample.forEach((info,i)=>{const x=27+(i%4)*112,y=51+Math.floor(i/4)*119;const selected=keep.includes(i);photo(i,x,y,96,77,stage===1&&!selected?1-.85*t:1);text(info.id,x,y+90,9);if(stage===1&&selected){c.save();c.strokeStyle=D.sage;c.lineWidth=2;c.strokeRect(x-4,y-4,104,85);c.restore();text('KEEP',x+61,y+90,9,p.fg);}});}
    else if(stage===2){keep.forEach((index,i)=>{const x=27+i*112,y=91+(i%2)*25;photo(index,x,y,96,115);text('0'+(i+1),x,y+133,10,p.fg);if(i<3)arrow(x+98,y+57,x+109,y+57,.6);});text(zh?'对比画面之间的关系':'COMPARE ADJACENT FRAMES',27,48,12,p.fg);}
    else {photo(0,27,47,244,222);photo(4,290,47,162,100);photo(7,290,166,162,103);text('01 / ESTABLISH',39,283,10);text('02–03 / COUNTERPOINT',290,283,10);}
    foot('IMAGES FROM YOUR PORTFOLIO',zh?'选片过程示意':'ILLUSTRATIVE EDIT');
  }
}

export function refineFacadeDiagrams(root) {
 if(!root||root.dataset.diagramRefined)return;
 root.dataset.diagramRefined='true';
 // One ruled surface sampled in seven ways; explanatory reconstruction only.
 const q=(u,v)=>[28+u*140,43+Math.sin(u*Math.PI*1.6)*17+v*72];
 const pts=ps=>ps.map(p=>p.map(n=>n.toFixed(2)).join(',')).join(' ');
 const curve=v=>Array.from({length:25},(_,i)=>q(i/24,v));
 const polyline=(points,cl)=>`<polyline class="${cl}" points="${pts(points)}"/>`;
 const panel=(u,v,du=.125,dv=.2,cl='facade-panel')=>`<polygon class="${cl}" points="${pts([q(u,v),q(u+du,v),q(u+du,v+dv),q(u,v+dv)])}"/>`;
 root.querySelectorAll('.parametric-process-card').forEach((card,stage)=>{
  const holder=card.querySelector('.parametric-process-diagram');
  holder.className='parametric-process-diagram facade-drawing';
  const button=document.createElement('button');button.type='button';button.className='facade-diagram-button';button.setAttribute('aria-pressed','false');button.setAttribute('aria-label',`Inspect facade process stage ${stage+1}`);
  let surface='',marks='';
  if(stage===0)surface=`<polygon class="facade-surface" points="${pts([...curve(0),...curve(1).reverse()])}"/>`;
  if(stage===1)for(let i=0;i<=5;i++)marks+=`<path class="facade-guide" d="M14 ${39+i*16}H187"/>`;
  if(stage===2)surface+=polyline(curve(1),'facade-base');
  if(stage>=1&&stage!==2)for(let i=0;i<=5;i++)surface+=polyline(curve(i/5),'facade-curve');
  if(stage===3)for(const u of [0,.25,.5,.75,1]){
   const [x,y]=q(u,.4);marks+=`<circle class="facade-anchor" cx="${x}" cy="${y}" r="2.3"/><path class="facade-vector" d="M${x} ${y}l6 -20m-6 20m6 -20l-4 4m4-4 1 6"/>`;
  }
  if(stage===4){for(const u of [0,.25,.5,.75,1]){const [x,y]=q(u,.6);marks+=`<circle class="facade-anchor" cx="${x}" cy="${y}" r="2"/>`;}surface+=polyline(curve(.6),'facade-base');}
  if(stage>=5)for(let i=0;i<=8;i++)surface+=polyline([q(i/8,0),q(i/8,1)],'facade-seam');
  if(stage===6)for(let j=0;j<5;j++)for(let i=0;i<8;i++)surface+=panel(i/8,j/5,.125,.2,(i+j)%4===0?'facade-panel facade-panel-selected':'facade-panel');
  button.innerHTML=`<svg viewBox="0 0 200 160" aria-hidden="true"><path class="facade-ground" d="M16 125L165 137L186 121L38 110Z"/><g class="facade-curves">${surface}</g><g class="facade-marks">${marks}</g><path class="facade-guide" d="M28 27V132M168 27V132"/><text x="12" y="153">0${stage+1} / ${['REFERENCE','LEVELS','CURVES','VECTORS','INTERPOLATE','DIVIDE','PANELS'][stage]}</text></svg>`;
  button.addEventListener('click',()=>{root.querySelectorAll('.facade-diagram-button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));holder.classList.remove('facade-replay');requestAnimationFrame(()=>requestAnimationFrame(()=>holder.classList.add('facade-replay')));});
  holder.replaceChildren(button);
 });
}

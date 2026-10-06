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
  const light = document.body.classList.contains('light');
  const p = { fg:light?'#111111':'#f2f2f2', soft:light?'#656560':'#b0b0aa', line:light?'#bdbdb7':'#555550', bg:light?'#f5f5f3':'#050505' };
  const t = clamp(progress), zh = language === 'zh';
  function line(x,y,X,Y,opacity=1,dash=[]) { c.save();c.globalAlpha=opacity;c.strokeStyle=p.line;c.lineWidth=1;c.setLineDash(dash);c.beginPath();c.moveTo(x,y);c.lineTo(X,Y);c.stroke();c.restore(); }
  function path(points,fill=null,opacity=1) { c.save();c.globalAlpha=opacity;c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(fill){c.fillStyle=fill;c.fill();}c.strokeStyle=p.fg;c.lineWidth=1;c.stroke();c.restore(); }
  function rect(x,y,w,h,fill=null,opacity=1) { c.save();c.globalAlpha=opacity;if(fill){c.fillStyle=fill;c.fillRect(x,y,w,h);}c.strokeStyle=p.line;c.lineWidth=1;c.strokeRect(x,y,w,h);c.restore(); }
  function text(value,x,y,size=12,color=p.soft,align='left') { c.fillStyle=color;c.font=`${size}px "Courier New",monospace`;c.textAlign=align;c.textBaseline='middle';c.fillText(value,x,y);c.textAlign='left'; }
  function dot(x,y,r=3,fill=p.fg) { c.fillStyle=fill;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill(); }
  function arrow(x,y,X,Y,opacity=1) { line(x,y,X,Y,opacity);const a=Math.atan2(Y-y,X-x);line(X,Y,X-6*Math.cos(a-.5),Y-6*Math.sin(a-.5),opacity);line(X,Y,X-6*Math.cos(a+.5),Y-6*Math.sin(a+.5),opacity); }
  function cable(x,y,X,Y,opacity=1) { c.save();c.strokeStyle=p.fg;c.globalAlpha=opacity;c.lineWidth=1;c.beginPath();c.moveTo(x,y);c.bezierCurveTo((x+X)/2,y,(x+X)/2,Y,X,Y);c.stroke();c.restore(); }
  function label(value,x,y,X,Y) { dot(x,y,2);line(x,y,X,Y);text(value,X+5,Y,11,p.fg); }
  const foot = (left,right) => { line(24,309,456,309);text(left,24,325,10);text(right,456,325,10,p.soft,'right'); };
  if (category === 'space') {
    const iso=(x,y,z)=>[240+(x-y)*108,205+(x+y)*43-z*100];
    const site=[iso(-1,-.8,0),iso(1,-.8,0),iso(1,.8,0),iso(-1,.8,0)];
    path(site,null,.45);
    for(let n=-.8;n<=.8;n+=.2){const a=iso(-1,n,0),b=iso(1,n,0);line(...a,...b,.3);}
    const box=(x,y,sx,sy,h)=>{
      const a=iso(x,y,0),b=iso(x+sx,y,0),d=iso(x,y+sy,0),e=iso(x+sx,y+sy,0);
      const A=iso(x,y,h),B=iso(x+sx,y,h),D=iso(x,y+sy,h),E=iso(x+sx,y+sy,h);
      // Schematic projected shade, not a solar simulation.
      path([e,[e[0]-28*h,e[1]+25*h],[d[0]-28*h,d[1]+25*h],d],p.line,.15);
      path([d,e,E,D],p.bg);path([b,e,E,B],p.bg);path([A,B,E,D],p.bg);
      for(let z=.12;z<h;z+=.12){line(...iso(x,y+sy,z),...iso(x+sx,y+sy,z),.55);line(...iso(x+sx,y,z),...iso(x+sx,y+sy,z),.55);}
      line(...a,...A,.3,[3,4]);
    };
    if(stage===0)box(-.72,-.5,1.25,1,.64);
    else { const b=[[-.72,-.5],[-.07,-.5],[-.72,.12],[-.07,.12]];b.forEach(([x,y],i)=>box(x,y,.5,.36,stage===1?.64:.64+([.42,.82,.3,.62][i]-.64)*t)); }
    if(stage>=1){arrow(...iso(-.95,.015,.01),...iso(.9,.015,.01),.8);text('PASSAGE',57,274,11,p.fg);}
    if(stage===3){path([iso(.5,-.45,.01),iso(.9,-.45,.01),iso(.9,.5,.01),iso(.5,.5,.01)],p.line,.5);[[-.6,.7],[-.15,.7],[.64,.0],[.76,.3]].forEach(([x,y])=>dot(...iso(x,y,.01),3,p.soft));label('PUBLIC REALM',...iso(.74,.3,0),337,253);}
    const sun=[402,60];dot(...sun,6,p.bg);c.strokeStyle=p.fg;c.beginPath();c.arc(...sun,6,0,Math.PI*2);c.stroke();
    for(let a=0;a<Math.PI*2;a+=Math.PI/4)line(sun[0]+Math.cos(a)*11,sun[1]+Math.sin(a)*11,sun[0]+Math.cos(a)*17,sun[1]+Math.sin(a)*17,.8);
    arrow(388,80,346,111);text('SUN',407,91,10);
    label(['ENVELOPE','CARVE','HEIGHT','OPEN SPACE'][stage],stage===0?240:265,stage===0?99:103,65,61);
    foot('SAME SITE / SAME VIEW','SCHEMATIC / NOT TO SCALE');
  } else if (category === 'system') {
    const names=['CITY MODEL','MATERIAL','FAÇADE','COLOUR','GUIDE','RESOURCE','MODEL','REFERENCE'];
    if(stage===0){names.forEach((name,i)=>{const x=35+(i%3)*142+(i%2)*10,y=47+Math.floor(i/3)*82;rect(x,y,116,56,p.bg);text(String(i+1).padStart(2,'0'),x+9,y+12,9);text(name,x+9,y+34,11,p.fg);if(i<5)cable(x+116,y+28,35+((i+1)%3)*142,47+Math.floor((i+1)/3)*82+28,.2);});}
    else if(stage===1){['PLACE','SURFACE','DETAIL','PALETTE'].forEach((name,i)=>{const x=32+(i%2)*225,y=49+Math.floor(i/2)*123;rect(x,y,190,94);text(name,x+12,y+18,12,p.fg);[[0,6],[1,5],[2,4],[3,7]][i].forEach((index,j)=>{rect(x+12,y+37+j*23,165,19,p.bg,.3+.7*t);text(names[index],x+21,y+47+j*23,10);});});}
    else if(stage===2){rect(142,31,196,39,p.bg);text(zh?'从任务开始':'START FROM A TASK',240,51,12,p.fg,'center');line(240,70,240,111);line(74,111,406,111);['CITY','MATERIAL','FAÇADE','COLOUR'].forEach((name,i)=>{const x=24+i*113;line(x+50,111,x+50,139);rect(x,139,100,57,p.bg);text(name,x+50,162,11,p.fg,'center');text('FIND → INSPECT',x+50,182,8,p.soft,'center');line(x+50,196,x+50,238,.7);dot(x+50,239,3);});text(zh?'任务 → 分类 → 资源':'TASK → CATEGORY → RESOURCE',240,277,12,p.fg,'center');}
    else{rect(28,57,204,188,p.bg);rect(248,57,204,188,p.bg);text('CITY DATA',39,76,11,p.fg);text('STUDIO LIBRARY',259,76,11,p.fg);line(28,91,232,91);line(248,91,452,91);for(let i=0;i<20;i++){const x=43+(i%5)*35,y=108+Math.floor(i/5)*29;path([[x,y],[x+15,y-7],[x+25,y+5],[x+10,y+12]],p.line,.25+.65*t);}['CITY','MATERIAL','FAÇADE','COLOUR'].forEach((name,i)=>{const x=260+(i%2)*90,y=110+Math.floor(i/2)*57;rect(x,y,78,47,p.bg);text(name,x+8,y+23,10,p.fg);});text('SPATIAL BROWSING',40,228,9);text('TASK-LED BROWSING',260,228,9);}
    foot('CITY DATA + STUDIO LIBRARY','INFORMATION ARCHITECTURE');
  } else if(category === 'code') {
    function node(name,x,y,w=103){rect(x,y,w,45,p.bg);text(name,x+w/2,y+22,11,p.fg,'center');dot(x,y+22,3,p.soft);dot(x+w,y+22,3,p.fg);}
    if(stage===0){['GEOMETRY','LEVELS','VECTORS'].forEach((name,i)=>{const y=54+i*70;text(name,36,y,12,p.fg);line(36,y+25,311,y+25);const x=90+i*61+Math.sin(t*2)*15;rect(x,y+20,9,10,p.fg);text(['CURVE','HEIGHT','DIRECTION'][i],333,y+25,10);});}
    else if(stage===1){node('GEOMETRY',26,42,108);node('LEVELS',26,129,108);node('VECTORS',26,216,108);node('INTERPOLATE',201,87,111);node('DIVIDE',351,129,100);cable(134,64,201,109,.3+.7*t);cable(134,151,201,109,.3+.7*t);cable(134,238,201,109,.3+.7*t);cable(312,109,351,151,.3+.7*t);}
    else if(stage===2){node('GENERATE',32,101,114);node('CHECK',184,101,106);node('OUTPUT',330,101,116);arrow(146,123,184,123);arrow(290,123,330,123);line(237,146,237,217);line(237,217,89,217);arrow(89,217,89,146);text('ADJUST / REPEAT',120,241,11,p.fg);text('PARAMETERS REMAIN VISIBLE',34,64,11);}
    else {rect(35,56,410,204,p.bg);text('RHINO / REUSABLE WORKFLOW',48,76,11,p.fg);line(35,91,445,91);['MODEL','DETAIL','EXPORT'].forEach((v,i)=>{rect(47+i*93,102,84,23,i===0?p.fg:p.bg);text(v,89+i*93,114,10,i===0?p.bg:p.soft,'center');});for(let k=0;k<6;k++){c.strokeStyle=p.fg;c.beginPath();c.moveTo(74,152+k*13);c.bezierCurveTo(176,127+k*12,267,203+k*4,401,143+k*13);c.stroke();}text('GEOMETRY / TOOL / INTERFACE',49,243,10);}
    foot('PARAMETERS → DEPENDENCIES','WORKFLOW SCHEMATIC');
  } else if(category === 'observation') {
    const sample=(photos?.photos||[]).slice(0,8);
    function photo(index,x,y,w,h,alpha=1){const info=sample[index%sample.length];c.save();c.globalAlpha=alpha;rect(x,y,w,h,p.bg);if(info){const src=info.srcset?.small||info.src;let img=images.get(src);if(!img){img=new Image();img.addEventListener('load',()=>canvas.dispatchEvent(new Event('diagram-image-ready',{bubbles:true})),{once:true});img.src='/'+src.replace(/^\//,'');images.set(src,img);}if(img.complete&&img.naturalWidth){const s=Math.max(w/img.naturalWidth,h/img.naturalHeight),sw=w/s,sh=h/s;c.drawImage(img,(img.naturalWidth-sw)/2,(img.naturalHeight-sh)/2,sw,sh,x,y,w,h);}else{text(info.id,x+8,y+h/2,10);}}c.restore();}
    const keep=[0,2,4,7];
    if(stage<2){sample.forEach((info,i)=>{const x=27+(i%4)*112,y=51+Math.floor(i/4)*119;const selected=keep.includes(i);photo(i,x,y,96,77,stage===1&&!selected?1-.85*t:1);text(info.id,x,y+90,9);if(stage===1&&selected){line(x-4,y-4,x+100,y-4);line(x-4,y-4,x-4,y+81);text('KEEP',x+61,y+90,9,p.fg);}});}
    else if(stage===2){keep.forEach((index,i)=>{const x=27+i*112,y=91+(i%2)*25;photo(index,x,y,96,115);text('0'+(i+1),x,y+133,10,p.fg);if(i<3)arrow(x+98,y+57,x+109,y+57,.6);});text(zh?'对比画面之间的关系':'COMPARE ADJACENT FRAMES',27,48,12,p.fg);}
    else {photo(0,27,47,244,222);photo(4,290,47,162,100);photo(7,290,166,162,103);text('01 / ESTABLISH',39,283,10);text('02–03 / COUNTERPOINT',290,283,10);}
    foot('IMAGES FROM YOUR PORTFOLIO',zh?'选片过程示意':'ILLUSTRATIVE EDIT');
  }
}

export function refineFacadeDiagrams(root) {
  if(!root || root.dataset.diagramRefined) return;
  root.dataset.diagramRefined='true';
  const curves=Array.from({length:5},(_,i)=>`<path d="M24 ${45+i*19} C68 ${18+i*19} 116 ${92+i*9} 178 ${42+i*19}"/>`).join('');
  root.querySelectorAll('.parametric-process-card').forEach((card,stage)=>{
    const holder=card.querySelector('.parametric-process-diagram');
    holder.className='parametric-process-diagram facade-drawing';
    const button=document.createElement('button');button.type='button';button.className='facade-diagram-button';button.setAttribute('aria-pressed','false');
    button.setAttribute('aria-label',`Inspect facade process stage ${stage+1}`);
    let marks='';
    if(stage===1)marks=Array.from({length:5},(_,i)=>`<path class="facade-guide" d="M12 ${39+i*20}H189"/>`).join('');
    if(stage===3)marks='<circle cx="24" cy="45" r="3"/><circle cx="93" cy="54" r="3"/><circle cx="178" cy="42" r="3"/><path class="facade-guide" d="M93 54L108 24M108 24L101 28M108 24L107 32"/>';
    if(stage>=5)marks=Array.from({length:7},(_,i)=>{const x=27+i*24;return `<path d="M${x} 35 Q${x-8} 79 ${x} 128"/>`;}).join('');
    const drawing=stage===0?'<path d="M24 45 C68 18 116 92 178 42L178 118 C116 142 68 94 24 121Z"/>':stage===2?'<path d="M24 83 C68 56 116 110 178 80"/>':curves;
    button.innerHTML=`<svg viewBox="0 0 200 160" aria-hidden="true"><g class="facade-curves">${drawing}</g><g class="facade-marks">${marks}</g><path class="facade-guide" d="M12 140H189"/><text x="12" y="153">0${stage+1} / ${['REFERENCE','LEVELS','CURVES','VECTORS','INTERPOLATE','DIVIDE','PANELS'][stage]}</text></svg>`;
    button.addEventListener('click',()=>{root.querySelectorAll('.facade-diagram-button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));holder.classList.remove('facade-replay');requestAnimationFrame(()=>requestAnimationFrame(()=>holder.classList.add('facade-replay')));});
    holder.replaceChildren(button);
  });
}

import {drawingPalette as D} from './drawing-palette.js';
import {nodes,edges,homes,station,defaults,metrics,bestLocation} from './todai-model.js';
const root=document.getElementById('todaiPlayground');
if(root){
 let state={...defaults},baseline={...defaults},searched=false,saved=false,expanded=false;
 const zh=()=>document.documentElement.lang.startsWith('zh');
 const copy={
  title:['Move one amenity. Compare the urban scenario.','移动一个设施，比较城市方案。'],
  intro:['Select a street junction for the amenity and change residential storeys. The paths and floor area are calculated in your browser; the drawings update together.','选择一个路口放置日常设施，再调整住宅层数。浏览器会实际计算路径和建筑面积，并同步更新图解。'],
  explode:['Separate roof layers','展开屋顶层'],closeLayers:['Assemble roof layers','合拢屋顶层'],
  location:['Amenity junction','设施所在路口'],height:['Residential storeys','住宅层数'],
  search:['Find the shortest average walk','寻找平均步行距离最短的位置'],
  save:['Save current as baseline','保存当前方案作为基准'],reset:['Reset both scenarios','重置两个方案'],
  plan:['01 / NETWORK PLAN · METRES','01 / 街道网络平面 · 单位：米'],
  mass:['02 / RESIDENTIAL MASSING','02 / 住宅体量'],
  station:['■ Station','■ 车站'],home:['H1–H4 Residential entrances','H1–H4 住宅入口'],amenity:['● Amenity','● 日常设施'],
  path:['Solid line / shortest walk','实线 / 最短步行路径'],
  indicator:['INDICATOR','指标'],base:['BASELINE','基准'],current:['CURRENT','当前'],delta:['CHANGE','变化'],
  mean:['Mean home → amenity walk','住宅至设施平均步行距离'],
  time:['Mean walking time','平均步行时间'],area:['Residential gross floor area','住宅总建筑面积'],
  stationMetric:['Station → amenity walk','车站至设施步行距离'],
  method:['Model assumptions + calculation','模型假设与计算方式'],
  note:['Interactive reconstruction / schematic dataset. This is not the original TODAI model, a Five Dock survey, or an XGBoost prediction.','交互重建 / 示意数据。此处并非 TODAI 原始模型、Five Dock 实测场地或 XGBoost 预测。'],
  assumptions:['The network has 20 junctions and 100 m street segments. Three north–south connections are absent, creating a detour. The four residential entrances sit directly on the network. Each schematic building has a 30 × 40 m footprint, with 3 m per storey. Floor area = 4 × 1,200 m² × storeys; it excludes the amenity and station. Walking time assumes 80 m/min.','网络包含 20 个路口，每段街道长 100 米。中部缺少三段南北连接，需要绕行。四个住宅入口直接接入网络。每栋示意住宅占地 30 × 40 米，层高假设为 3 米。住宅总建筑面积 = 4 × 1,200 平方米 × 层数，不含设施和车站。步行时间按 80 米/分钟计算。'],
  algorithm:['Dijkstra shortest paths are recalculated on every change. The location search tests all 20 junctions and minimises the unweighted mean walk from the four homes. Height changes floor area only; this demo does not infer population, planning compliance or research accuracy.','每次修改都会重新运行 Dijkstra 最短路径计算。位置搜索遍历全部 20 个路口，以四处住宅的等权平均步行距离最小为目标。层数仅改变建筑面积，本演示不推算人口、规划合规性或研究准确率。'],
  status:['Baseline saved. Adjust the next scenario to compare.','已保存基准。继续调整即可比较下一方案。'],
  best:['All 20 junctions evaluated. A minimum-distance location is selected.','已计算全部 20 个路口，选中平均步行距离最小的位置。'],
  ready:['Click a numbered junction, or use the selector.','点击图中的编号路口，或使用下拉菜单。']
 };
 const t=k=>copy[k][zh()?1:0];
 root.innerHTML=`<span class="tod-section-no">05 / LIVE STUDY</span><h3 data-tp="title"></h3><p class="tp-intro" data-tp="intro"></p><p class="td-disclaimer" data-tp="note"></p>
 <div class="tp-workbench"><div class="tp-controls">
 <label><span data-tp="location"></span><select id="tp-location"></select></label>
 <label for="tp-height"><span data-tp="height"></span> <output id="tp-height-value">6</output><input id="tp-height" type="range" min="2" max="16" step="1" value="6"></label>
 <button type="button" id="tp-explode" aria-pressed="false" data-tp="explode"></button><button type="button" id="tp-search" data-tp="search"></button><button type="button" id="tp-save" data-tp="save"></button><button type="button" id="tp-reset" data-tp="reset"></button>
 </div><div><div class="tp-drawings">
 <figure><figcaption data-tp="plan"></figcaption><svg id="tp-plan" viewBox="0 0 500 390" role="group"></svg></figure>
 <figure><figcaption data-tp="mass"></figcaption><svg id="tp-mass" viewBox="0 0 500 390" role="img"></svg></figure>
 </div><p class="tp-legend"><span data-tp="station"></span><span data-tp="home"></span><span data-tp="amenity"></span><span data-tp="path"></span></p></div></div>
 <table class="tp-comparison"><thead><tr><th scope="col" data-tp="indicator"></th><th scope="col" data-tp="base"></th><th scope="col" data-tp="current"></th><th scope="col" data-tp="delta"></th></tr></thead><tbody></tbody></table>
 <p class="tp-status" aria-live="polite" aria-atomic="true"></p>
 <details class="tp-method"><summary data-tp="method"></summary><p data-tp="assumptions"></p><p data-tp="algorithm"></p></details>`;
 const select=root.querySelector('#tp-location'),slider=root.querySelector('#tp-height');
 const plan=root.querySelector('#tp-plan'),mass=root.querySelector('#tp-mass');
 const point=id=>[nodes[id].x+50,nodes[id].y+40];
 const line=(a,b,cl)=>`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" class="${cl}"/>`;
 function drawPlan(m){
  const focusId=document.activeElement?.getAttribute('data-node');
  plan.setAttribute('aria-label',zh()?'示意街道网络：选择路口移动设施':'Schematic street network: select a junction to move the amenity');
  let s=edges.map(([a,b])=>line(point(a),point(b),'tp-road')+line(point(a),point(b),'tp-centreline')).join('');
  for(let y=0;y<3;y++)for(let x=0;x<4;x++)s+=`<rect x="${x*100+68}" y="${y*100+58}" width="64" height="64" class="tp-parcel"/>`;
  for(const r of m.routes)s+=`<polyline points="${r.path.map(id=>point(id).join(',')).join(' ')}" class="tp-route"/>`;
  homes.forEach((id,i)=>{const [x,y]=point(id);s+=`<rect x="${x+14}" y="${y-22}" width="30" height="40" class="tp-building"/><text x="${x+18}" y="${y+6}">H${i+1}</text>`;});
  const [sx,sy]=point(station);s+=`<rect x="${sx-6}" y="${sy-6}" width="12" height="12" fill="${D.slate}"/><text x="${sx-25}" y="${sy+24}">STATION</text>`;
  for(const n of nodes){const [x,y]=point(n.id);s+=`<g class="tp-node" role="button" tabindex="0" data-node="${n.id}" aria-pressed="${n.id===state.amenity}" aria-label="${zh()?'设施位置：路口':'Amenity location: junction'} ${String(n.id+1).padStart(2,'0')}"><circle cx="${x}" cy="${y}" r="${n.id===state.amenity?10:5}"/><circle cx="${x}" cy="${y}" r="20" fill="transparent" stroke="none" style="fill:transparent;stroke:none"/><text x="${x+12}" y="${y-8}">${String(n.id+1).padStart(2,'0')}</text></g>`;}
  s+=`<path d="M50 365h100m-100 -4v8m100 -8v8" fill="none" stroke="currentColor"/><text x="50" y="382">0</text><text x="125" y="382">100 m</text><path d="M485 70V40l-4 8m4-8 4 8" fill="none" stroke="currentColor"/><text x="482" y="30">N</text>`;
  plan.innerHTML=s;
  if(focusId!==null&&focusId!==undefined)plan.querySelector(`[data-node="${focusId}"]`)?.focus();
 }
 function drawMass(){
  // The same 100 m network, parallel projection; height in metres.
  const iso=(x,y,z=0)=>[210+(x-y)*.55,65+(x+y)*.29-z*1.6];
  const poly=(ps,cl)=>`<polygon points="${ps.map(p=>p.join(',')).join(' ')}" class="${cl}"/>`;
  let s=poly([iso(-25,-35),iso(430,-35),iso(430,340),iso(-25,340)],'tp-ground');
  s+=edges.map(([a,b])=>line(iso(nodes[a].x,nodes[a].y),iso(nodes[b].x,nodes[b].y),'tp-centreline')).join('');
  for(const [x,y] of [[60,55],[260,55],[60,250],[260,250]])s+=poly([iso(x,y),iso(x+50,y),iso(x+50,y+35),iso(x,y+35)],'tp-landscape');
  homes.forEach((id,i)=>{
   const n=nodes[id],x=n.x+14,y=n.y-22,z=state.storeys*3;
   const a=iso(x,y),b=iso(x+30,y),c=iso(x+30,y+40),d=iso(x,y+40),A=iso(x,y,z),B=iso(x+30,y,z),C=iso(x+30,y+40,z),D=iso(x,y+40,z);
   s+=poly([b,c,C,B],'tp-building tp-side')+poly([c,d,D,C],'tp-building tp-side')+poly([A,B,C,D],'tp-building');
   if(expanded){
    const lift=18;const roof=[A,B,C,D].map(([X,Y])=>[X,Y-lift]);
    s+=poly(roof,'tp-roof tp-building');
    for(const p of [A,B,C,D])s+=line(p,[p[0],p[1]-lift],'tp-centreline');
   }
   for(let level=1;level<state.storeys;level++)s+=line(iso(x+30,y,level*3),iso(x+30,y+40,level*3),'tp-floor')+line(iso(x+30,y+40,level*3),iso(x,y+40,level*3),'tp-floor');
   s+=`<text x="${C[0]+8}" y="${C[1]-4}">H${i+1}</text>`;
  });
  const n=nodes[state.amenity],a=iso(n.x,n.y);
  s+=`<circle cx="${a[0]}" cy="${a[1]}" r="5" class="tp-amenity"/><text x="${a[0]+10}" y="${a[1]+4}">A</text><text x="25" y="357">${state.storeys} × 3 m = ${state.storeys*3} m</text><text x="25" y="375">4 × (30 × 40 m)</text>`;
  mass.innerHTML=s;mass.setAttribute('aria-label',zh()?`四栋住宅体量，${state.storeys} 层，每栋占地 1200 平方米。`:`Four residential buildings, ${state.storeys} storeys, 1,200 square metres footprint each.`);
 }
 const format=(v,unit)=>`${v.toLocaleString(zh()?'zh-CN':'en',{maximumFractionDigits:unit==='min'?2:0})} ${unit==='min'?(zh()?'分钟':'min'):unit}`;
 function render(){
  root.querySelectorAll('[data-tp]').forEach(el=>el.textContent=t(el.dataset.tp));
  select.innerHTML=nodes.map(n=>`<option value="${n.id}"${n.id===state.amenity?' selected':''}>${zh()?'路口':'Junction'} ${String(n.id+1).padStart(2,'0')}</option>`).join('');
  const explode=root.querySelector('#tp-explode');
  explode.textContent=t(expanded?'closeLayers':'explode');explode.setAttribute('aria-pressed',String(expanded));
  slider.value=state.storeys;root.querySelector('#tp-height-value').textContent=state.storeys;
  const m=metrics(state),b=metrics(baseline);
  drawPlan(m);drawMass();
  root.querySelector('tbody').innerHTML=[['mean','mean','m'],['time','time','min'],['stationMetric','stationDistance','m'],['area','floorArea','m²']].map(([label,key,unit])=>{
   const delta=m[key]-b[key];return `<tr><th scope="row">${t(label)}</th><td>${format(b[key],unit)}</td><td>${format(m[key],unit)}</td><td>${delta>0?'+':delta<0?'−':''}${format(Math.abs(delta),unit)}</td></tr>`;
  }).join('');
  root.querySelector('.tp-status').textContent=t(searched?'best':saved?'status':'ready');
 }
 function move(id){state.amenity=id;searched=false;saved=false;render();}
 select.addEventListener('change',()=>move(Number(select.value)));
 slider.addEventListener('input',()=>{state.storeys=Number(slider.value);searched=false;saved=false;render();});
 plan.addEventListener('click',e=>{const n=e.target.closest('[data-node]');if(n)move(Number(n.dataset.node));});
 plan.addEventListener('keydown',e=>{const n=e.target.closest('[data-node]');if(n&&(e.key==='Enter'||e.key===' ')){e.preventDefault();move(Number(n.dataset.node));}});
 root.querySelector('#tp-explode').addEventListener('click',()=>{expanded=!expanded;render();});
 root.querySelector('#tp-search').addEventListener('click',()=>{state.amenity=bestLocation().id;searched=true;saved=false;render();});
 root.querySelector('#tp-save').addEventListener('click',()=>{baseline={...state};saved=true;searched=false;render();});
 root.querySelector('#tp-reset').addEventListener('click',()=>{state={...defaults};baseline={...defaults};searched=false;saved=false;expanded=false;render();});
 new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 render();
}

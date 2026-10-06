// Schematic metric network: metres, not a surveyed Five Dock dataset.
export const nodes = Array.from({length:20},(_,id)=>({id,x:(id%5)*100,y:Math.floor(id/5)*100}));
export const edges = [];
for(const n of nodes){
 if(n.id%5<4) edges.push([n.id,n.id+1,100]);
 if(n.id<15 && !([6,7,8].includes(n.id))) edges.push([n.id,n.id+5,100]);
}
export const homes=[6,8,16,18];
export const station=10;
export const defaults={amenity:4,storeys:6};
export function shortestPath(from,to,links=edges){
 const distance=new Map([[from,0]]),previous=new Map(),visited=new Set();
 while(true){
  let current=null,best=Infinity;
  for(const [id,d] of distance)if(!visited.has(id)&&d<best){current=id;best=d;}
  if(current===null)return {distance:Infinity,path:[]};
  if(current===to){const path=[to];while(path[0]!==from)path.unshift(previous.get(path[0]));return {distance:best,path};}
  visited.add(current);
  for(const [a,b,w] of links){
   const next=a===current?b:b===current?a:null;
   if(next!==null&&best+w<(distance.get(next)??Infinity)){distance.set(next,best+w);previous.set(next,current);}
  }
 }
}
export function metrics({amenity,storeys}){
 const routes=homes.map(id=>shortestPath(id,amenity));
 const mean=routes.reduce((sum,r)=>sum+r.distance,0)/homes.length;
 return {mean,time:mean/80,stationDistance:shortestPath(station,amenity).distance,floorArea:homes.length*30*40*storeys,routes};
}
export function bestLocation(){
 return nodes.map(n=>({id:n.id,mean:metrics({...defaults,amenity:n.id}).mean})).sort((a,b)=>a.mean-b.mean||a.id-b.id)[0];
}

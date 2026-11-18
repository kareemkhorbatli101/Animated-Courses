/* Measure a unit with exactly the definitions tools/jrn_check.js uses, so a
   target band can be set from the baseline instead of guessed. */
const fs=require('fs'),path=require('path');
const D=process.argv[2], NS=process.argv[3]||'BNK';
const pages={}; let gloss={}, meta={};
global.window=global;
const NSOBJ={page:(id,d)=>{pages[id]=d;},unitMap:()=>{},glossary:g=>{gloss=g;},
  unitMeta:{}};
global[NS]=NSOBJ; global.window[NS]=NSOBJ;
const files=fs.readdirSync(D).filter(f=>/^s\d\d.*\.js$/.test(f)).sort();
for(const f of ['meta.js','glossary.js'].concat(files)){
  const p=path.join(D,f); if(!fs.existsSync(p))continue;
  try{(new Function(fs.readFileSync(p,'utf8')))();}catch(e){console.log('skip',f,e.message);}
}
meta=NSOBJ.unitMeta[Object.keys(NSOBJ.unitMeta)[0]]||{};
let cards=0,vis=0,gaps=0,tfng=0,dq=0,prod=0,types={},lines=[],extras=0,dm=0;
const ranges=new Set();
Object.values(pages).forEach(p=>(p.cards||[]).forEach((c,i)=>{
  cards++; types[c.type]=(types[c.type]||0)+1;
  if(c.visual){vis++;}
  if(c.type==='cloze') gaps+=new Set([...(c.text||'').matchAll(/\[\[(\d+)\]\]/g)].map(m=>m[1])).size;
  if(c.type==='quizset') tfng+=(c.items||[]).length;
  if(c.type==='discuss') dq+=(c.questions||[]).length;
  if(c.type==='writer'||c.type==='report') prod++;
  if(c.type==='dragmatch'){dm++; extras+=(c.chips||[]).filter(x=>/\(extra\)/.test(x.label)).length;}
  if(c.type==='writer'){
    const pr=(c.paras&&c.paras[0]&&c.paras[0].purpose)||''; const m=pr.match(/(\d+)\D+(\d+)/);
    if(m) ranges.add(m[1]+'-'+m[2]);
  }
  if(c.playable) (c.playable||[]).forEach(l=>lines.push(l.split(/\s+/).length));
}));
lines.sort((a,b)=>a-b);
console.log(`\n== ${D} ==`);
console.log(`screens ${Object.keys(pages).length} | cards ${cards} | visuals ${vis} | gaps ${gaps} | T/F/NG ${tfng} | discussQ ${dq} | productive ${prod}`);
console.log('types:',Object.entries(types).sort((a,b)=>b[1]-a[1]).map(([k,v])=>k+' '+v).join(', '));
console.log(`dragmatch cards ${dm}, marked (extra) chips ${extras}`);
console.log(`script lines ${lines.length}: min ${lines[0]} max ${lines[lines.length-1]} median ${lines[Math.floor(lines.length/2)]} | all: ${lines.join(',')}`);
console.log('writer ranges:',[...ranges].join(' / '));
console.log('glossary terms',Object.keys(gloss).length,'| canDoOperator',(meta.canDoOperator||meta.canDo||[]).length,'| canDoPractitioner',(meta.canDoPractitioner||[]).length);

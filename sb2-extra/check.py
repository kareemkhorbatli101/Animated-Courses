#!/usr/bin/env python3
"""Checks every lesson file: no stray CJK, required fields, 15 exercises, keys sane."""
import io, os, re, sys, json, subprocess
HERE = os.path.dirname(os.path.abspath(__file__))
D = os.path.join(HERE, 'assets', 'data')
BAD = re.compile(u'[　-ヿ㐀-鿿＀-￯]')
problems = []
files = sorted(f for f in os.listdir(D) if f.endswith('.js'))
for f in files:
    s = io.open(os.path.join(D, f), encoding='utf-8').read()
    for m in BAD.finditer(s):
        a = max(0, m.start()-30)
        problems.append('%s: stray character %r near ...%s...' % (f, m.group(0), s[a:m.end()+20]))
    for field in ('id:', 'unit:', 'kind:', 'title:', 'strap:', 'tags:', 'pre:', 'comp:', 'words:', 'post:'):
        if field not in s:
            problems.append('%s: missing %s' % (f, field))
    if '"reading"' in s and 'paras:' not in s: problems.append('%s: reading with no paras' % f)
    if '"listening"' in s and ('turns:' not in s or 'setting:' not in s):
        problems.append('%s: listening with no turns/setting' % f)

node = subprocess.run(['node', '-e', '''
const fs=require('fs'); let L=[]; global.AHL={lesson:o=>L.push(o)};
fs.readdirSync(process.argv[1]).filter(f=>f.endsWith('.js')).forEach(f=>
  new Function(fs.readFileSync(process.argv[1]+'/'+f,'utf8'))());
const out=[];
const TYPES=new Set(['mcq','multi','tf','gap','match','order','short','write','note']);
L.forEach(l=>{
  let n=0;
  ['pre','comp','words','post'].forEach(k=>(l[k]||[]).forEach((x,i)=>{
    if(!TYPES.has(x.t)) out.push(l.id+' '+k+'['+i+'] unknown type '+x.t);
    if(x.t!=='note') n++;
    if(x.t==='mcq'&&(!x.opts||x.a==null||x.a>=x.opts.length)) out.push(l.id+' '+k+'['+i+'] bad mcq');
    if(x.t==='multi'&&(!x.a||!x.a.length)) out.push(l.id+' '+k+'['+i+'] bad multi');
    if(x.t==='gap'&&(!x.gaps||!x.gaps.length)) out.push(l.id+' '+k+'['+i+'] bad gap');
    if(x.t==='gap'&&x.gaps.some(g=>!g.a||!g.a.length)) out.push(l.id+' '+k+'['+i+'] gap with no answer');
    if(x.t==='match'&&(!x.pairs||x.pairs.length<3)) out.push(l.id+' '+k+'['+i+'] bad match');
    if(x.t==='order'&&(!x.items||x.items.length<3)) out.push(l.id+' '+k+'['+i+'] bad order');
    if((x.t==='short'||x.t==='write')&&!x.model) out.push(l.id+' '+k+'['+i+'] no model answer');
  }));
  if(n!==15) out.push(l.id+' has '+n+' exercises (want 15)');
  const ids=L.filter(o=>o.id===l.id); if(ids.length>1) out.push('duplicate id '+l.id);
});
const byUnit={}; L.forEach(l=>{byUnit[l.unit]=(byUnit[l.unit]||0)+1;});
console.log(JSON.stringify({n:L.length, byUnit, problems:out}));
''', D], capture_output=True, text=True)
if node.returncode:
    print(node.stderr); sys.exit(1)
r = json.loads(node.stdout)
problems += r['problems']
print('%d lesson files · %d lessons registered' % (len(files), r['n']))
print('per unit: ' + '  '.join('u%s=%d' % (k, v) for k, v in sorted(r['byUnit'].items(), key=lambda t: int(t[0]))))
for p in problems:
    print('  - ' + p)
print('\n%d problem(s)' % len(problems))
sys.exit(1 if problems else 0)

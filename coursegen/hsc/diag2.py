import sys, os, re, collections, importlib.util as iu
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
code = sys.argv[1]
Us = []
d = os.path.join(HERE, 'units', code)
for f in sorted(os.listdir(d)):
    if re.match(r'u\d\d\.py$', f):
        sp = iu.spec_from_file_location(code+f, os.path.join(d, f))
        m = iu.module_from_spec(sp); sp.loader.exec_module(m); Us.append(m.U)
stems = collections.Counter(); owner = collections.defaultdict(list)
for U in Us:
    for n in ('c_c','v_a','g_a','t_a'):
        for s,a in U[n]:
            k=re.sub(r'_+','_',s.strip().lower()); stems[k]+=1; owner[k].append((U['num'],n))
    for n in ('listen','vocab','gram'):
        for s,a in U['rev'][n]:
            k=re.sub(r'_+','_',s.strip().lower()); stems[k]+=1; owner[k].append((U['num'],'rev.'+n))
for k,c in stems.items():
    if c>2: print('STEM', c, owner[k], '|', k[:55])
prose=[]
for U in Us:
    prose += U['read']+U['ext']+U['t_body']+U['case']['brief']+U['lang']['setting']+[U['case']['outcome']]
    prose += [l for _,l in U['d1']['lines']]+[l for _,l in U['d2']['lines']]
    prose += [l for n,r,l in U['case']['voices']]
c=collections.Counter(re.split(r'(?<=[.!?])\s+',' '.join(prose)))
for s,n in c.items():
    if n>1 and len(s.split())>8: print('DUP', n, '|', s[:95])
STOP=set('the a an and or of to in on for is are be it its what that this with as at by from not no does do you your they them their one two three four when where which who why how can will would should must'.split())
for U in Us:
    kw={w.strip('.,:;"\'()') for w in U['ai'].lower().split()}
    kw={w for w in kw if w and w not in STOP and len(w)>3}
    for nm,z in (('ext',' '.join(U['ext']).lower()),('skill',' '.join(U['t_body']).lower()),
                 ('nar',(' '.join(U['read'])+' '+' '.join(U['case']['brief'])).lower())):
        if not any(k[:6] in z for k in kw): print('THIN', U['num'], nm, sorted(kw))
LONG = {'A2':26,'B1':34,'B2':44}
lvl = {'A21':'A2','A22':'A2','B11':'B1','B12':'B1','B21':'B2','B22':'B2'}[code]
for U in Us:
    txt = ' '.join(U['read']+U['ext']+U['t_body']+U['case']['brief'])
    for s in re.split(r'(?<=[.!?])\s+', txt):
        if len(s.split()) > LONG[lvl]: print('LONG', U['num'], len(s.split()), s[:70])

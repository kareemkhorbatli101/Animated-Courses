# -*- coding: utf-8 -*-
"""Check candidate vocabulary against everything already taught.
   python3 free.py B11 "term one" "term two" ...   (or one comma-separated arg)"""
import sys, os, re, json, importlib
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import series
code = sys.argv[1]
cands = []
for a in sys.argv[2:]:
    cands += [x.strip() for x in a.split(',') if x.strip()]
used = {}
led = os.path.join(HERE, 'out', 'vocab_ledger.json')
if os.path.exists(led):
    for t, c in json.load(open(led)).get('terms', {}).items():
        used[t.lower()] = c
import importlib.util as _iu
for bk in series.ORDER:
    d = os.path.join(HERE, 'units', bk)
    if not os.path.isdir(d):
        continue
    for fn in sorted(os.listdir(d)):
        if not re.match(r'u\d\d\.py$', fn):
            continue
        sys.path.insert(0, d)
        sp = _iu.spec_from_file_location(bk + fn[:-3], os.path.join(d, fn))
        mod = _iu.module_from_spec(sp)
        sp.loader.exec_module(mod)
        sys.path.remove(d)
        for t, g in mod.U['vocab']:
            used[t.lower()] = '%s/%s' % (bk, fn[:-3])
def _b(x):
    return re.sub(r'^(a|an|the) ', '', x.lower())
used = {_b(k): v for k, v in used.items()}
taken = [(c, used[_b(c)]) for c in cands if _b(c) in used]
free = [c for c in cands if _b(c) not in used]
print('TAKEN : %s' % (taken if taken else 'none'))
print('FREE  : %d of %d' % (len(free), len(cands)))

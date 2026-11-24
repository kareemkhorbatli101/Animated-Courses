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
d = os.path.join(HERE, 'units', code)
if os.path.isdir(d):
    sys.path.insert(0, d)
    for f in sorted(os.listdir(d)):
        if re.match(r'u\d\d\.py$', f):
            for t, g in importlib.import_module(f[:-3]).U['vocab']:
                used[t.lower()] = f[:-3]
taken = [(c, used[c.lower()]) for c in cands if c.lower() in used]
free = [c for c in cands if c.lower() not in used]
print('TAKEN : %s' % (taken if taken else 'none'))
print('FREE  : %d of %d' % (len(free), len(cands)))

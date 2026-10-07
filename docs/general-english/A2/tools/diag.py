#!/usr/bin/env python3
"""Full untruncated detail for one unit: diag.py <book> <unitnum> [E02 E04 ...]"""
import json, os, re, sys
from collections import Counter
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE, os.path.join(HERE, 'checks')]
import runner as R, model as M, lexis as L
import checks.family_e as E

book, num = sys.argv[1], int(sys.argv[2])
want = set(sys.argv[3:]) or {'E02','E04','E05','E06','E09','E14','E15','E22','E25','E26'}
ctx = R.load_ctx(book)
units, ctx._keys = R.discover(book)
u = [x for x in units if x.num == num][0]
ctx.for_unit(u)
ex = E._exempt(u, ctx)

if 'E02' in want:
    off = sorted({t.lower() for t in E._running(u)
                  if t.lower() not in ex and L.is_b1plus(t) and not E.CONTR.match(t.lower())})
    print(f'E02 ({len(off)}):', off)
if 'E04' in want:
    bad = [s for s in u.sentences if len(s.split()) > 25]
    print(f'E04 ({len(bad)}):')
    for s in bad: print(f'   {len(s.split())}w  {s}')
if 'E05' in want:
    SUB = r'\b(because|although|though|while|when|if|that|which|who|since|before|after|so that|unless)\b'
    bad = [s for s in u.sentences if len(re.findall(SUB, s, re.I)) > 2]
    print(f'E05 ({len(bad)}):')
    for s in bad: print(f'   {re.findall(SUB, s, re.I)}  {s}')
if 'E06' in want:
    for un, pats in (ctx.grammar.get('markers') or {}).items():
        if int(un) <= u.num: continue
        for pat in pats:
            hits = [m.group(0) for s in u.sentences for m in re.finditer(pat, s, re.I)]
            if hits: print(f'E06 U{un} {pat[:70]} -> {hits}')
if 'E09' in want:
    idx = next((i for i, l in enumerate(u.lines) if l.startswith('## Part 10')), len(u.lines))
    toks = Counter(t.lower() for t in L.tokens(' '.join(u.lines[:idx])))
    for w in ctx.lexis['units'][u.num]['words']:
        print(f'E09 {w}: {toks[w.lower()]}')
if 'E15' in want:
    for i, l in enumerate(u.lines, 1):
        if "'" in l or '"' in l: print(f'E15 {i}: {l}')
if 'E25' in want:
    body = ' '.join(u.sentences)
    for pat in E.E25_PATS:
        for m in re.finditer(pat, body, re.I):
            if m.group(1).lower() in E.E25_ADJ: continue
            if E.E25_CLEFT.search(body[:m.start()]): continue
            print(f'E25 [{m.group(0)}] ... {body[max(0,m.start()-70):m.end()+40]}')
if 'E26' in want:
    fut = {}
    for un, rec in ctx.lexis['units'].items():
        if int(un) > u.num:
            for w in rec.get('words', []): fut[str(w).lower()] = un
    seen = Counter(t.lower() for t in E._running(u))
    for w, un in sorted(fut.items()):
        if seen[w]: print(f'E26 {w} (U{un}) x{seen[w]}')

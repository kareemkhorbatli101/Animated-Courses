# -*- coding: utf-8 -*-
"""Per-unit check while drafting: python3 check.py A22 u01 [u02 ...]"""
import sys, os, re, json, importlib, collections
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
code = sys.argv[1]
sys.path.insert(0, os.path.join(HERE, 'units', code))
import build, render as R, art, series
B = series.BOOKS[code]
R.set_accent(B['level']); art.set_accent(B['level'])
led = json.load(open(os.path.join(HERE, 'out', 'vocab_ledger.json'))) if \
      os.path.exists(os.path.join(HERE, 'out', 'vocab_ledger.json')) else {'terms': {}}
seen = {t: c for t, c in led.get('terms', {}).items() if c != code}
local = {}
for other in sorted(os.listdir(os.path.join(HERE, 'units', code))):
    m = re.match(r'(u\d\d)\.py$', other)
    if m and m.group(1) not in sys.argv[2:]:
        for t, g in importlib.import_module(m.group(1)).U['vocab']:
            local[t] = m.group(1)
bad = 0
for name in sys.argv[2:]:
    U = importlib.import_module(name).U
    ctx = build.Ctx(os.path.join(HERE, 'media', code))
    xml, k = build.build_unit(U, ctx, B['level'], code)
    words = len(re.sub(r'<[^>]+>', '', xml).split())
    ts = [t for t, g in U['vocab']]
    dup = [t for t, c in collections.Counter(ts).items() if c > 1]
    clash = sorted({t for t in ts if t in seen or t in local})
    pr = ' '.join(U['read'] + U['ext'] + U['t_body'] + U['case']['brief'] +
                  U['lab']['task'] +
                  [l for _, l in U['d1']['lines']] + [l for _, l in U['d2']['lines']])
    sents = [s for s in re.split(r'(?<=[.!?])\s+', pr) if len(s.split()) > 2]
    msl = sum(len(s.split()) for s in sents) / float(len(sents))
    lo, hi = series.BANDS[B['level']]
    blanks = []
    for g in ('c_c', 'v_a', 'g_a', 't_a'):
        blanks += [s[:20] for s, a in U[g] if not a]
    for g in ('c_a', 'e_a', 't_b'):
        blanks += [s[:20] for s, a in U[g] if not a]
    for dn in ('d1', 'd2'):
        for kk in ('a', 'b'):
            blanks += [s[:20] for s, a in U[dn][kk] if not a]
    for kk in ('analysis', 'outcome_q'):
        blanks += [s[:20] for s, a in U['case'][kk] if not a]
    blanks += [s[:20] for s, a in U['lab']['diagnosis'] if not a]
    for kk in ('listen', 'vocab', 'gram'):
        blanks += [s[:20] for s, a in U['rev'][kk] if not a]
    flags = []
    if len(ts) != 20: flags.append('vocab %d' % len(ts))
    if U.get('ai') != series.AI_LADDER[code][U['num'] - 1]: flags.append('AI point off ladder')
    if U.get('gram') != series.GRAMMAR[code][U['num'] - 1]: flags.append('grammar off ladder')
    fset = {a for q, a in U['lab']['diagnosis']}
    if not fset <= series.FAULT_OK[code]: flags.append('fault off ladder %s' % sorted(fset - series.FAULT_OK[code]))
    if dup: flags.append('dup %s' % dup)
    if clash: flags.append('CLASH %s' % clash)
    if blanks: flags.append('BLANK %s' % blanks[:4])
    if len(ctx.images) != 14: flags.append('figs %d' % len(ctx.images))
    if len(k) != 25: flags.append('key %d' % len(k))
    if not (lo - 2.0 <= msl <= hi + 2.0): flags.append('MSL %.1f far outside %.1f-%.1f' % (msl, lo, hi))
    wlo, whi = series.WORDS[B['level']]
    if not (wlo - 250 <= words <= whi + 250): flags.append('words %d (band %d-%d)' % (words, wlo, whi))
    print('%s %s  words %4d  figs %2d  key %2d  msl %5.2f   %s'
          % (code, name, words, len(ctx.images), len(k), msl,
             'OK' if not flags else ' | '.join(flags)))
    if flags: bad += 1
    for t in ts: local[t] = name
sys.exit(1 if bad else 0)

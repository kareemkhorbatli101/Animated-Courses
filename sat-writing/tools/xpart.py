#!/usr/bin/env python3
"""Pre-check one part of a chapter before the whole chapter is written.

    python3 tools/xpart.py w_C01 HIS

Runs every diagnostic xemit would run, plus the part's key plan, on a part dict
that the module exposes by its domain code. Lets a part be written and corrected
without the other four existing yet.
"""
import importlib
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xemit                                                            # noqa: E402

m = importlib.import_module(sys.argv[1])
ch = m.CHAPTER
want = sys.argv[2:] or [p['domain'] for p in m.PARTS] if hasattr(m, 'PARTS') else sys.argv[2:]
total = 0
for dom in want:
    part = getattr(m, dom)
    rows, msgs = [], []
    for pos, x in enumerate(part['xs'], 1):
        if x.get('pos') and x['pos'] != pos:
            msgs.append('FIX   C%02d %s item %d declares pos %d' % (ch, dom, pos, x['pos']))
        lvl = xemit.SPEC['level_by_pos'][pos]
        row = {
            'id': 'C%02d-%s-E%02d' % (ch, dom, pos), 'chapter': ch, 'pos': pos,
            'level': lvl, 'difficulty': xemit.SPEC['diff_by_pos'][pos],
            'options': [xemit._b(o) for o in x['opts']], 'key': x['key'],
            'rule': x['rule'], 'rule_span': xemit._b(x['rule_span']),
            'faults': {L: {'move': v[0] if not isinstance(v, dict) else v['move'],
                           'span': xemit._b(v[1] if not isinstance(v, dict) else v['span'])}
                       for L, v in x['faults'].items()},
            'ctx': x.get('ctx') or {}, 'why': xemit._b(x['why']),
            'trap': xemit._b(x['trap']),
            'stem': xemit._b(xemit.stem_for(ch, x)),
        }
        if ch in xemit.CARRIER_CHAPTERS:
            row['carrier'] = xemit._b(x['carrier'])
        elif ch == 14:
            row['notes'] = [xemit._b(t) for t in x['notes']]
            row['goal'] = x['goal_text']
        else:
            row['table'] = {'title': x['table']['title'], 'cols': x['table']['cols'],
                            'rows': x['table']['rows']}
            row['claim'] = x['claim']
        rows.append(row)
        msgs += xemit._diagnose(row, xemit.CH[ch], ch)
    pn = xemit.partno(ch, dom)
    plan = xemit.keyplan(pn)
    got = [r['key'] for r in rows]
    if got != plan[:len(got)]:
        msgs.append('KEYS  part %d (C%02d %s): planned %s, got %s'
                    % (pn, ch, dom, ''.join(plan[:len(got)]), ''.join(got)))
    if len(rows) != 10:
        msgs.append('FIX   C%02d %s holds %d exercises, wants 10' % (ch, dom, len(rows)))
    n = len(part.get('note_ar', '').split())
    lo, hi = xemit.AR['note_words']
    if not lo <= n <= hi:
        msgs.append('FIX   C%02d %s note %d words, want %d to %d' % (ch, dom, n, lo, hi))
    if xemit.AR['domain_names'][dom] not in part.get('note_ar', ''):
        msgs.append('FIX   C%02d %s note does not name its domain' % (ch, dom))
    rules = sorted(set(r['rule'] for r in rows))
    moves = sorted(set(f['move'] for r in rows for f in r['faults'].values()))
    for s in msgs:
        print(s)
    print('C%02d %s  %d exercises, %d problems  rules %s  moves %s'
          % (ch, dom, len(rows), len(msgs), ','.join(rules), ','.join(moves)))
    total += len(msgs)
print('TOTAL %d problems' % total)
sys.exit(1 if total else 0)

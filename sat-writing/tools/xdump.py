#!/usr/bin/env python3
"""Print exercises for reading. Usage: python3 tools/xdump.py C01 [HIS [3 4 5]]"""
import os
import sys

import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
d = yaml.safe_load(open(os.path.join(ROOT, 'data', 'exercises', sys.argv[1] + '.yaml')))
doms = [sys.argv[2]] if len(sys.argv) > 2 else None
poss = [int(a) for a in sys.argv[3:]] or None
print('C%02d %s  home %s' % (d['chapter'], d['title'], d['home']))
for p in d['parts']:
    if doms and p['domain'] not in doms:
        continue
    print('\n--- %s  part %d' % (p['domain'], p['partno']))
    print('    AR: %s' % p['note_ar'])
    for x in p['exercises']:
        if poss and x['pos'] not in poss:
            continue
        print('\n  %s  n=%d  pos=%d  L%d %s  %s  [%s]'
              % (x['id'], x['n'], x['pos'], x['level'], x['difficulty'],
                 x['rule'], x['strand']))
        if 'carrier' in x:
            print('    %s' % x['carrier'])
        elif 'notes' in x:
            print('    GOAL %s' % x['goal'])
            for t in x['notes']:
                print('      - %s' % t)
        else:
            t = x['table']
            print('    TABLE %s' % t['title'])
            print('      %s' % ' | '.join(t['cols']))
            for r in t['rows']:
                print('      %s' % ' | '.join(r))
            print('    CLAIM %s' % x['claim'])
        for i, o in enumerate(x['options']):
            L = 'ABCD'[i]
            f = x['faults'].get(L)
            mark = '*' if L == x['key'] else ' '
            tail = ('   <%s: %s>' % (f['move'], f['span'])) if f else '   <KEY: %s>' % x['rule_span']
            print('    %s%s) %s%s' % (mark, L, o, tail))
        print('    why:  %s' % x['why'])
        print('    trap: %s' % x['trap'])

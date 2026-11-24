# -*- coding: utf-8 -*-
"""Emit the sixty-row alignment table: AI capability x grammar point x fault."""
import os, sys, importlib, collections
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import series
o, miss = [], 0
o.append('# ' + series.TITLE + ' — the sixty-row alignment')
o.append('')
o.append('Every unit is one AI capability, one grammar point and the precision faults its')
o.append('Brief Lab diagnoses. The three are chosen so that each explains the others.')
o.append('')
tally = collections.Counter()
for code in series.ORDER:
    B = series.BOOKS[code]
    d = os.path.join(HERE, 'units', code)
    o.append('## %s · %s · %s' % (B['book'], B['bandge'], B['sub']))
    o.append('')
    o.append('| # | Unit | AI capability | Grammar | Faults in the Lab |')
    o.append('|---|---|---|---|---|')
    sys.path.insert(0, d)
    for i in range(1, 11):
        name = 'u%02d' % i
        for m in list(sys.modules):
            if m == name:
                del sys.modules[m]
        try:
            U = importlib.import_module(name).U
            fl = sorted({a for q, a in U['lab']['diagnosis']})
            for f in fl:
                tally[f] += 1
        except Exception:
            U, fl, miss = None, ['—'], miss + 1
        o.append('| %d | %s | %s | %s | %s |'
                 % (i, B['units'][i - 1], series.AI_LADDER[code][i - 1],
                    series.GRAMMAR[code][i - 1], ', '.join(fl)))
    sys.path.remove(d)
    o.append('')
o.append('## Fault ladder — labs in which each fault is diagnosed')
o.append('')
o.append('| Fault | Labs | Repaired with |')
o.append('|---|---|---|')
for f in series.FAULTS:
    o.append('| %s | %d | %s |' % (f, tally[f], series.FAULT_GRAMMAR[f]))
o.append('')
dest = os.path.join(HERE, 'out', 'ALIGNMENT.md')
open(dest, 'w', encoding='utf-8').write('\n'.join(o))
print('%s  (%d units not yet written)' % (dest, miss))

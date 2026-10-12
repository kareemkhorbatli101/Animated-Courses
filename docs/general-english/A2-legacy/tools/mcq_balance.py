#!/usr/bin/env python3
"""Report the MCQ answer-letter distribution, per unit and book-wide.

Checks C10, C11 and C12 police this; this tool shows where the imbalance is so
it can be corrected deliberately rather than by shuffling at random.
"""
import os, re, sys
from collections import Counter
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE, os.path.join(HERE, 'checks')]
import model as M, runner as R  # noqa: E402


def letters(u, key):
    out = []
    for s in u.subs:
        if not M.mcqs(s):
            continue
        k = key.section(s.heading) if key else None
        for n, v in sorted((k.items if k else {}).items()):
            if n == 0:
                continue
            m = re.match(r'\*\*([A-D])\)\*\*', v)
            if m:
                out.append((s.heading, n, m.group(1)))
    return out


def main(book='a21'):
    units, keys = R.discover(book)
    allc = Counter()
    for u in sorted(units, key=lambda x: x.num):
        ls = letters(u, keys.get(u.num))
        c = Counter(x[2] for x in ls)
        allc.update(c)
        seq = ''.join(x[2] for x in ls)
        print(f'u{u.num:02d}  {dict(sorted(c.items()))}  {seq}')
    n = sum(allc.values())
    exp = n / 4
    chi2 = sum((allc.get(k, 0) - exp) ** 2 / exp for k in 'ABCD')
    print(f'\nbook  {dict(sorted(allc.items()))}  n={n}  '
          f'chi2={chi2:.2f} (limit 7.815)  ideal={exp:.1f} each')


if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else 'a21')

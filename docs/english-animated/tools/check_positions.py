#!/usr/bin/env python3
"""Measure where the correct answers actually sit, across every book.

The shuffle is only worth anything if a learner cannot do better than chance
by guessing a position.  This reads each key's stored answer TEXT, finds where
that option currently sits in the chapter, and reports the distribution.
"""
import collections
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from answer_key import load, read_abcd, read_mcq, read_numbered, sections  # noqa: E402

BOOKS = ['a21', 'a22', 'b11', 'b12', 'b13']


def main():
    mcq = collections.Counter()
    abcd = collections.Counter()
    clinic_right = collections.Counter()
    runs, prev, run = collections.Counter(), None, 0
    total = 0

    for book in BOOKS:
        for n in range(1, 11):
            ch = Path(f'chapters/{book}-unit{n:02d}.md')
            data = load(book, f'{n:02d}')
            if not ch.exists() or data is None:
                continue
            secs = sections(ch.read_text(encoding='utf-8'))
            for sec, payload in data:
                if not isinstance(payload, dict):
                    continue
                body = secs.get(sec, '')
                for want, (_, opts) in zip(payload.get('mcq', []), read_mcq(body)):
                    norm = [o.lower().strip(' .*') for o in opts]
                    w = want.lower().strip(' .*')
                    if w in norm:
                        i = norm.index(w)
                        mcq[i] += 1
                        total += 1
                        run = run + 1 if i == prev else 1
                        prev = i
                        runs[run] = max(runs[run], run)
                pairs = read_abcd(body)
                gl = [g.lower() for _, g in pairs]
                for want in payload.get('abcd', []):
                    if want.lower() in gl:
                        abcd[pairs[gl.index(want.lower())][0]] += 1
                if 'clinic' in payload:
                    for i, it in enumerate(read_numbered(body)):
                        hit = [v for k, v in payload['clinic'].items()
                               if ' '.join(it.split()).lower().startswith(
                                   ' '.join(k.split()).lower())]
                        if hit and str(hit[0]).lstrip('*').startswith('Right'):
                            clinic_right[i] += 1

    def show(name, c, labels=None):
        tot = sum(c.values())
        if not tot:
            return
        print(f'\n{name}  ({tot} items)')
        for k in sorted(c):
            lab = labels[k] if labels else chr(97 + k) + ')'
            bar = '#' * round(c[k] / tot * 50)
            print(f'   {lab:>4}  {c[k]:4}  {c[k]/tot:5.1%}  {bar}')
        n = len(c)
        hi = max(c.values())
        exp = tot / n
        # how far the busiest position is from chance, in standard deviations
        sd = (tot * (1 / n) * (1 - 1 / n)) ** 0.5
        z = (hi - exp) / sd if sd else 0
        print(f'   most-used position holds {hi/tot:.1%}  '
              f'(chance {1/n:.1%}, {z:+.1f} sd)')
        print('   ' + ('OK — indistinguishable from chance' if z <= 2.5 else
                       'BIASED — a learner could guess'))

    show('MCQ, by option position', mcq)
    show('Lettered legends, by letter', abcd, {k: k for k in abcd})
    show('Contrast Clinic, position of the correct items', clinic_right)
    longest = max(runs) if runs else 0
    print(f'\nlongest run of the same MCQ position: {longest}')
    print('   ' + ('OK' if longest <= 4 else 'long run — worth a look'))


if __name__ == '__main__':
    main()

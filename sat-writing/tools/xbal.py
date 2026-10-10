#!/usr/bin/env python3
"""Running balance report: key-length tells, option-set reuse, duplicate prose.

The checks in xchecks.py are pass or fail over the whole book. This prints the
same quantities per chapter while the book is being written, so a chapter that
is pulling a book-level balance out of band is visible before fourteen more are
written on top of it.
"""
import collections
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xchecks as X                                                     # noqa: E402

ch, xs = X.load()
L = X.LABELS


def extremes(g):
    """How often the key is the uniquely longest option, and the uniquely shortest.

    Ties do not count: three options of the same length give a student nothing to
    pick by, which is what H6 is really about.
    """
    def ext(x, pick):
        ls = [len(o) for o in x['options']]
        k = len(x['options'][L.index(x['key'])])
        return k == pick(ls) and ls.count(k) == 1
    return (sum(1 for x in g if ext(x, min)), sum(1 for x in g if ext(x, max)))


print('chapter                      n   key shortest   key longest   worst set')
for d in ch:
    g = [x for x in xs if x['chapter'] == d['chapter']]
    sh, lg = extremes(g)
    sets = collections.Counter(tuple(sorted(x['options'])) for x in g)
    print('C%02d %-22s %4d   %3d  %5.1f%%   %3d  %5.1f%%   %d'
          % (d['chapter'], d['element'], len(g), sh, 100 * sh / len(g),
             lg, 100 * lg / len(g), max(sets.values())))
sh, lg = extremes(xs)
lo, hi = X.R['key_extreme_min'], X.R['key_extreme_max']
print('%-26s %4d   %3d  %5.1f%%   %3d  %5.1f%%   band %.0f-%.0f%%'
      % ('BOOK SO FAR', len(xs), sh, 100 * sh / len(xs), lg, 100 * lg / len(xs),
         100 * lo, 100 * hi))
ok = lo <= sh / len(xs) <= hi and lo <= lg / len(xs) <= hi
print('H6 would %s now; %d exercises remain to pull it into band'
      % ('pass' if ok else 'FAIL', 750 - len(xs)))
need_lg = max(0, int(lo * 750) - lg)
room_sh = int(hi * 750) - sh
print('to land in band: at least %d more longest-key exercises, at most %d more '
      'shortest-key ones' % (need_lg, room_sh))
for d in ch:
    for p in d['parts']:
        c = collections.defaultdict(list)
        for x in p['exercises']:
            c[tuple(sorted(x['options']))].append(x['id'])
        for k, v in c.items():
            if len(v) > 1:
                print('REPEAT in part: %s  %s' % (', '.join(v), list(k)))
for field in ('why', 'trap'):
    c = collections.defaultdict(list)
    for x in xs:
        c[x[field].lower()].append(x['id'])
    for k, v in c.items():
        if len(v) > 1:
            print('DUP %s: %s  -> %s' % (field, ', '.join(v), k[:70]))

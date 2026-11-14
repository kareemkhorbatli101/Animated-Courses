# -*- coding: utf-8 -*-
"""Measure what a Foundation 1 leaver does not know in Volume 1, and where.

This is the measurement Foundation 2 is built from, so it is a script in the
repository rather than something done once by hand.

What counts as a text: the two documents of Read in Daily Life (r2), the
academic passage (r3), and the three listening scripts (l1, l2, l3). Complete
the Words (r1) is deliberately excluded - its text is written with dashes for
the gaps, so its tokens are fragments like 'high--' and not words.

What is not counted as an obstacle:
  proper names        a reader skips Philadelphia and reads on
  measurement units   a closed set of about a dozen
  contractions        I'd, you'll: Foundation 1 teaches these
  inflections of another gap word   confirm and confirms are one word to
                      learn, and the vocabulary gate already licenses the
                      forms of anything taught, so only the shortest is kept

Run:  python3 gapscan.py            writes v1_gap_all.json
"""
import collections
import importlib
import json
import re
import sys
import unicodedata

import check
from content._wordbank import unknown, _SUFFIX

TEXTS = ('r2', 'r3', 'l1', 'l2', 'l3')
ACADEMIC = ('r3', 'l3')
MEASURE = set('metre metres centimetre centimetres kilometre kilometres kilo '
              'kilogram kilograms acre acres mile miles gram grams litre litres '
              'percent billion trillion'.split())
CONTRACTION = re.compile(r"^\w+['’](d|ll|ve|re|m|s|t)$", re.I)


def text_of(b):
    if 'paras' in b:
        return ' '.join(b['paras'])
    if 'script' in b:
        return ' '.join(t for _, t in b['script'])
    if 'docs' in b:
        return ' '.join(' '.join(d[2]) for d in b['docs'])
    return ''


def shortest_stem(w, pool):
    """If another gap word is this one's stem, that one is the word to teach."""
    best = w
    for suf, repl in _SUFFIX:
        if w.endswith(suf) and len(w) - len(suf) >= 3:
            for cand in (w[:len(w) - len(suf)] + repl,
                         w[:len(w) - len(suf)] + repl + 'e'):
                if cand in pool and len(cand) < len(best):
                    best = cand
            stem = w[:len(w) - len(suf)] + repl
            if len(stem) > 2 and stem[-1] == stem[-2] and stem[:-1] in pool \
                    and len(stem) - 1 < len(best):
                best = stem[:-1]
    return best


def scan():
    taught, names = [], []
    for m in range(1, 11):
        U = importlib.import_module('content.f%02d' % m).UNIT
        taught += [w for w, _ in check.heads(U)]
        names += list(U.get('names', ()))

    raw = collections.defaultdict(set)
    kind = {}
    for n in range(1, 11):
        U = importlib.import_module('content.u%02d' % n).UNIT
        own = [w for w, _ in check.heads(U)] + list(U.get('names', ()))
        for tag in TEXTS:
            b = U.get(tag)
            if not b:
                continue
            txt = text_of(b)
            if not txt:
                continue
            # 'café' must reach the gate as 'cafe', or its tokeniser splits
            # it at the accent and reports the fragment 'caf' as a word.
            txt = ''.join(c for c in unicodedata.normalize('NFKD', txt)
                          if not unicodedata.combining(c))
            low = txt.lower()
            seen = {}
            for w in unknown(txt, list(taught) + list(own),
                             tuple(names) + tuple(U.get('names', ()))):
                seen.setdefault(w.lower().replace('’', "'").strip("'"), w)
            for lw, w in seen.items():
                if not lw or not lw.replace('-', '').isalpha() or len(lw) < 3:
                    continue
                if '-' in lw and max(len(p) for p in lw.split('-')) < 4:
                    continue          # a dashed fragment, not a word
                if lw in MEASURE or CONTRACTION.match(lw):
                    continue
                here = len(re.findall(r'\b%s\b' % re.escape(lw), low))
                caps = len(re.findall(r'\b%s\b' % re.escape(w), txt)) \
                    if w[:1].isupper() else 0
                if w[:1].isupper() and caps >= here:
                    continue          # a proper name
                raw[n].add(lw)
                if tag in ACADEMIC or kind.get(lw) == 'academic':
                    kind[lw] = 'academic'
                else:
                    kind.setdefault(lw, 'everyday')

    pool = set().union(*raw.values()) if raw else set()
    canon = {w: shortest_stem(w, pool) for w in pool}
    per, kind2 = {}, {}
    for n, ws in raw.items():
        per[n] = sorted({canon[w] for w in ws})
        for w in ws:
            c = canon[w]
            if kind[w] == 'academic' or kind2.get(c) == 'academic':
                kind2[c] = 'academic'
            else:
                kind2.setdefault(c, 'everyday')
    return per, kind2, len(pool)


def main():
    per, kind, before = scan()
    allw = set().union(*per.values())
    print('Volume 1, measured against a Foundation 1 leaver\n')
    print('texts read: %s   (r1 excluded: it is written with dashes)'
          % ', '.join(TEXTS))
    print('word forms unknown          : %d' % before)
    print('after collapsing inflections: %d' % len(allw))
    print('  used by an academic passage: %d'
          % sum(1 for w in allw if kind[w] == 'academic'))
    print('  everyday texts only        : %d'
          % sum(1 for w in allw if kind[w] == 'everyday'))
    print()
    print('per Volume 1 unit:')
    for n in sorted(per):
        a = sum(1 for w in per[n] if kind[w] == 'academic')
        print('  U%-2d %3d words, %2d of them from its academic passage'
              % (n, len(per[n]), a))
    json.dump({'per_unit': {str(k): v for k, v in per.items()}, 'kind': kind},
              open('v1_gap_all.json', 'w'), indent=1)
    print('\n-> toefl/v1_gap_all.json')
    return 0


if __name__ == '__main__':
    sys.exit(main())

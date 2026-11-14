# -*- coding: utf-8 -*-
"""Check draft Foundation 2 prose before it goes into a unit.

Unit 1 cost a dozen round trips because the whole unit had to be assembled
before the gates would say anything. This takes any text and answers the two
questions that caused all of them:

  which words are outside Foundation 2's control band and not taught yet?
  which structures does Volume 1 own?

Usage:
    python3 lintf2.py <unit number> <<'EOF'
    ... the draft prose ...
    EOF

It is the same vocabulary gate and the same containment gate check.py runs,
so a text that passes here passes there.
"""
import importlib
import re
import sys

import check
from content._band2 import BAND2
from content._wordbank import unknown


def taught_for(n, extra_heads=()):
    out, names = [], []
    for m in range(1, 11):
        U = importlib.import_module('content.f%02d' % m).UNIT
        out += [w for w, _ in check.heads(U)]
        names += list(U.get('names', ()))
    for m in range(1, n + 1):
        try:
            U = importlib.import_module('content.g%02d' % m).UNIT
        except ImportError:
            continue
        out += [w for w, _ in check.heads(U)]
        names += list(U.get('names', ()))
    return out + list(extra_heads), names


def lint(n, text, extra_heads=(), extra_names=()):
    taught, names = taught_for(n, extra_heads)
    names = list(names) + list(extra_names)
    bad = []
    out = unknown(text, taught, tuple(names), BAND2)
    seen, uniq = set(), []
    for w in out:
        if w.lower() not in seen:
            seen.add(w.lower())
            uniq.append(w)
    low = text.lower()
    for phrase in tuple(x for x in check._STRIP if x != 'used to'):
        low = low.replace(phrase, ' ')
    probs = []
    check._containment_f2(check._tok(low), n, probs.append)
    return uniq, probs


def sentences(text):
    return [s for s in re.split(r'(?<=[.!?])\s+', text.strip()) if s.strip()]


def main():
    n = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    heads = sys.argv[2].split(',') if len(sys.argv) > 2 else ()
    names = sys.argv[3].split(',') if len(sys.argv) > 3 else ()
    text = sys.stdin.read()
    uniq, probs = lint(n, text, heads, names)
    ss = sentences(text)
    ls = [len(s.split()) for s in ss]
    print('%d words, %d sentences, mean %.1f, longest %d'
          % (len(text.split()), len(ss), (sum(ls) / len(ls)) if ls else 0,
             max(ls) if ls else 0))
    if ls:
        worst = max(range(len(ls)), key=lambda i: ls[i])
        print('  longest: %r' % ss[worst][:110])
    if uniq:
        print('OUTSIDE THE BAND (%d): %s' % (len(uniq), ', '.join(uniq)))
    else:
        print('vocabulary: clean')
    if probs:
        for p in probs:
            print('STRUCTURE: %s' % p)
    else:
        print('structure: clean')
    return 1 if (uniq or probs) else 0


if __name__ == '__main__':
    raise SystemExit(main())


def all_problems(U, n):
    """_containment_f2 stops at the first problem; this reports every one, by
    running the gate over one sentence at a time."""
    out = []
    for t in check._texts(U):
        low = t.lower()
        for ph in tuple(x for x in check._STRIP if x != 'used to'):
            low = low.replace(ph, ' ')
        for s in re.split(r'(?<=[.!?])\s+', low):
            if not s.strip():
                continue
            probs = []
            check._containment_f2(check._tok(s), n, probs.append)
            for p in probs:
                out.append((p.split(':')[0], s.strip()[:90]))
    return out

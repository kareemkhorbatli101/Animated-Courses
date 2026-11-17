# -*- coding: utf-8 -*-
"""List the items that still need a line for each wrong option.

Phase 8 writes a line for every wrong option on every four-option item in
the series. This prints what an author needs and nothing else: the gist of
each paragraph or turn, then the items, addressed by their ordinal in the
file so that a stem repeated twenty times is still unambiguous.

    python3 dump8.py u31          # one unit
    python3 dump8.py paper3a      # one timed paper
"""
import ast
import importlib
import io
import re
import sys

import _base                                            # noqa: F401
from itemedit import Items

MIN_WRONG = 25


def gist(p, n=150):
    s = re.split(r'(?<=[.!?])\s+', p.strip())[0]
    return s if len(s) <= n else s[:n] + '...'


def ordinals(path):
    """Every item in the file, in source order, with its ordinal."""
    f = Items(path)
    items = sorted(f.all(), key=lambda i: (i.node.lineno, i.node.col_offset))
    return items


def needs(it):
    if not it.opts or len(it.opts) < 4:
        return []
    w = it.wrongs or {}
    return [k for k in range(len(it.opts))
            if k != it.ans and len(w.get(k, '')) < MIN_WRONG]


def main(name):
    path = 'content/%s.py' % name
    m = importlib.import_module('content.%s' % name)
    items = ordinals(path)
    by_stem = {}
    for n, it in enumerate(items, 1):
        by_stem.setdefault(it.stem, []).append(n)
    pos = {}
    for n, it in enumerate(items, 1):
        pos[(it.stem, it.why)] = n

    def block(label, paras, kind, blk):
        hot = []
        for it in blk['items']:
            o = it[1]
            if not o or len(o) < 4:
                continue
            w = it[4] if len(it) > 4 else {}
            if any(k != it[2] and len((w or {}).get(k, '')) < MIN_WRONG
                   for k in range(len(o))):
                hot.append(it)
        if not hot:
            return
        print('\n### %s' % label)
        tag = 't' if kind in ('listen', 'lpaper') else 'p'
        for i, p in enumerate(paras, 1):
            print('  %s%d %s' % (tag, i, p))
        for it in blk['items']:
            key = (it[0], it[3])
            n = pos.get(key)
            o = it[1]
            if not o or len(o) < 4:
                continue
            w = it[4] if len(it) > 4 else {}
            miss = [k for k in range(len(o))
                    if k != it[2] and len((w or {}).get(k, '')) < MIN_WRONG]
            if not miss:
                continue
            print('  i%s ANS=%s NEED=%s' % (n, 'ABCDEFGH'[it[2]],
                                            ''.join('ABCDEFGH'[k]
                                                    for k in miss)))
            print('     Q: %s' % it[0])
            for k, x in enumerate(o):
                print('     %s) %s' % ('ABCDEFGH'[k], x))
            print('     WHY: %s' % it[3])

    U = getattr(m, 'UNIT', None)
    if U:
        for ci, c in enumerate(U['cycles'], 1):
            for bi, r in enumerate(c['read']):
                block('u%d c%d R%d %s' % (U['n'], ci, bi, r['heading']),
                      r['paras'], 'read', r)
            for bi, l in enumerate(c['listen']):
                block('u%d c%d L%d %s' % (U['n'], ci, bi, l['heading']),
                      [t for _, t in l['script']], 'listen', l)
        return 0
    P = getattr(m, 'PAPER', None)
    if P:
        for x in P['passages']:
            block('%s p%d %s' % (name, x['no'], x['heading']),
                  x['paras'], 'paper', x)
        return 0
    L = getattr(m, 'LPAPER', None)
    if L:
        for pt in L['parts']:
            block('%s %s %s' % (name, pt['part'], pt['heading']),
                  [t for _, t in pt['script']], 'lpaper', pt)
        return 0
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1]))

# -*- coding: utf-8 -*-
"""Write the wrong-option lines dump8.py asked for, by item ordinal.

    from apply8 import put
    put('u01', {7: {'B': '...', 'C': '...', 'D': '...'}, 8: {...}})

Option keys may be letters, as dump8.py prints them, or indices. Any item
that still lacks a line after the call is reported, so a letter missed by
the caller is not missed by the build.

The ordinal is the item's position in the file in source order, which is
what dump8.py prints, so a stem that occurs twenty times is unambiguous.
"""
import io
import sys

import _base                                            # noqa: F401
from itemedit import Items

MIN_WRONG = 25
LET = 'ABCDEFGHIJ'


def put(name, lines):
    path = 'content/%s.py' % name
    f = Items(path)
    items = sorted(f.all(), key=lambda i: (i.node.lineno, i.node.col_offset))
    bad = []
    for n, ws in sorted(lines.items()):
        if not (1 <= n <= len(items)):
            bad.append('%s: no item %d' % (name, n))
            continue
        it = items[n - 1]
        if not it.opts:
            bad.append('%s i%d: no options' % (name, n))
            continue
        cur = dict(it.wrongs or {})
        ws = {(LET.index(k) if isinstance(k, str) else k): v
              for k, v in ws.items()}
        for k, line in ws.items():
            if k == it.ans:
                bad.append('%s i%d: option %s is the answer'
                           % (name, n, 'ABCDEFGH'[k]))
                continue
            if k >= len(it.opts):
                bad.append('%s i%d: no option %s' % (name, n, k))
                continue
            if len(line) < MIN_WRONG:
                bad.append('%s i%d %s: %d chars'
                           % (name, n, 'ABCDEFGH'[k], len(line)))
                continue
            cur[k] = line
        it.set(wrongs=cur)
        left = [LET[k] for k in range(len(it.opts))
                if k != it.ans and len(cur.get(k, '')) < MIN_WRONG]
        if left:
            bad.append('%s i%d: still needs %s' % (name, n, ''.join(left)))
    n = f.save()
    if bad:
        for b in bad:
            print('  !! ' + b)
    return n, len(bad)

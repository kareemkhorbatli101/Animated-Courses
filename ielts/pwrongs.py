# -*- coding: utf-8 -*-
"""Add the missing wrong-option lines to a timed paper's items.

The answer-key page of every book promises that every wrong option is
explained. check.py enforced that inside the units and, until now,
nowhere else, so 70 items in the eleven second papers shipped with no
lines at all. This writes them, by the item's ordinal in the module, and
check.py now fails if any are missing.

    from pwrongs import setwrongs
    setwrongs('paper1a', {3: {1: '...', 2: '...'}})
"""
import os
import sys

import _base                                            # noqa: F401
from itemedit import Items

MIN_WRONG = 25


def setwrongs(name, spec):
    """{ordinal: {wrong option index: line}} -> written into the module."""
    f = Items(os.path.join('content', name + '.py'))
    items = sorted(f.all(), key=lambda i: (i.node.lineno, i.node.col_offset))
    bad = []
    done = 0
    for n, w in sorted(spec.items()):
        if not (1 <= n <= len(items)):
            bad.append('%s: no item %d' % (name, n))
            continue
        it = items[n - 1]
        if not it.opts:
            bad.append('%s i%d: no options to explain' % (name, n))
            continue
        need = {k for k in range(len(it.opts)) if k != it.ans}
        if set(w) != need:
            bad.append('%s i%d: lines for %s, the wrong options are %s'
                       % (name, n, sorted(w), sorted(need)))
            continue
        short = [k for k, v in w.items() if len(v) < MIN_WRONG]
        if short:
            bad.append('%s i%d: option %s needs %d characters'
                       % (name, n, short, MIN_WRONG))
            continue
        it.wrongs = dict(w)
        it.set(stem=it.stem)
        done += 1
    f.save()
    for b in bad:
        print('  !! ' + b)
    return done, len(bad)

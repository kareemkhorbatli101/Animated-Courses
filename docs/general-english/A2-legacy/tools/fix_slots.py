#!/usr/bin/env python3
"""Replace one slot's definition in a unit's figure module, in place.

The generator fills twenty of the twenty-seven slots from the unit's own text.
The rest need a decision, and this is how that decision is applied: a whole
replacement block per slot, so the edit is a diff of one figure and nothing
nearby can be disturbed by a careless string match.

    from fix_slots import patch
    patch('a21', 2, 37, "F.close_scene(...)", "alt text")
"""
from __future__ import annotations
import os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE]
from gen_figures import wrap   # noqa: E402


def patch(book, num, slot, call, alt):
    path = os.path.join(ROOT, 'content', book, f'u{num:02d}_figures.py')
    src = open(path, encoding='utf-8').read()
    start = src.index(f'\n {slot}: lambda:')
    nxt = [int(m.group(1)) for m in re.finditer(r'^ (\d+): lambda:', src, re.M)
           if int(m.group(1)) > slot]
    end = src.index(f'\n {nxt[0]}: lambda:') if nxt else src.rindex('\n}')
    # a REVIEW comment belongs to the block below it
    head = src[:start]
    head = re.sub(r'\n\s*# REVIEW:[^\n]*$', '', head)
    # the call ends on its last keyword argument and the comma before `alt=`
    # has to survive; rstrip(',') ate it and every patched slot was a syntax
    # error until the next build
    body = call.strip()
    if not body.endswith(','):
        body += ','
    block = (f'\n {slot}: lambda: ' + body + '\n'
             + f'        alt={wrap(alt, 12)}),\n')
    open(path, 'w', encoding='utf-8').write(head + block + src[end:])
    return block


if __name__ == '__main__':
    print(__doc__)

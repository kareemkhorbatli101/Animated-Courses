# -*- coding: utf-8 -*-
"""Write each handout's measured page count back into its source.

The builder paginates by measuring, so the page count is a result rather than
a decision. The declaration still has to exist, because the running header
prints "Page 2 of 6" and the checker holds the 4-to-8 rule against it, so
after a build the two are reconciled here rather than by hand.
"""
import importlib
import io
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)


def sync(mod):
    import wsbuild
    _sp, _kp, keys = wsbuild.build_handouts(mod)
    changed = []
    for H, _c in keys:
        p = os.path.join(HERE, mod, 'h%02d.py' % H['n'])
        s = io.open(p, encoding='utf-8').read()
        s2 = re.sub(r'^    pages=\d+,$', '    pages=%d,' % H['pages'], s,
                    flags=re.M)
        if s2 != s:
            io.open(p, 'w', encoding='utf-8').write(s2)
            changed.append('%s → %d' % (H['id'], H['pages']))
    return changed


if __name__ == '__main__':
    for c in sync(sys.argv[1]):
        print('  ' + c)
    print('page declarations reconciled')

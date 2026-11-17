# -*- coding: utf-8 -*-
"""Dump the items that still need wrong-option lines, compactly."""
import importlib.util, os, sys
def load(n):
    p = os.path.join('content', n + '.py')
    if not os.path.exists(p): return None
    sp = importlib.util.spec_from_file_location('d_' + n, p)
    m = importlib.util.module_from_spec(sp); sp.loader.exec_module(m); return m
def blocks(mod):
    m = load(mod)
    if m is None: return
    if hasattr(m, 'UNIT'):
        for ci, c in enumerate(m.UNIT['cycles'], 1):
            for b in list(c['read']) + list(c['listen']):
                yield 'c%d' % ci, b
    elif hasattr(m, 'PAPER'):
        for x in m.PAPER['passages']: yield 'p%d' % x['no'], x
    elif hasattr(m, 'LPAPER'):
        for p in m.LPAPER['parts']: yield p['part'], p
def main(argv):
    want = int(argv[1]) if len(argv) > 1 else 3      # option count, 0 = any
    mods = argv[2:]
    n = 0
    for mod in mods:
        for where, b in blocks(mod):
            for it in b['items']:
                if not it[1]: continue
                if want and len(it[1]) != want: continue
                if len(it) > 4 and it[4]: continue
                n += 1
                opts = '/'.join(o[:12] for o in it[1])
                print('%s~%s~%s~%s~%s~%s' % (mod, where, 'ABCD'[it[2]],
                                             opts, it[0], it[3]))
    print('== %d items' % n)
if __name__ == '__main__':
    main(sys.argv)

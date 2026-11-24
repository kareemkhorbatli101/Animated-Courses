# -*- coding: utf-8 -*-
"""Align each unit's case analysis to the five-step ladder: python3 fixcase.py A21"""
import sys, os, re, importlib.util as iu
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
code = sys.argv[1]
d = os.path.join(HERE, 'units', code)
HEADS = ['Find it', 'Compare it', 'Infer it', 'Weigh it', 'Decide']
for fn in sorted(os.listdir(d)):
    if not re.match(r'u\d\d\.py$', fn):
        continue
    path = os.path.join(d, fn)
    sys.path.insert(0, d)
    sp = iu.spec_from_file_location('m_' + fn[:-3], path)
    m = iu.module_from_spec(sp); sp.loader.exec_module(m)
    sys.path.remove(d)
    an = m.U['case']['analysis']
    if len(an) == 5 and all(q.startswith(HEADS[i]) for i, (q, a) in enumerate(an)):
        print(fn, 'already aligned'); continue
    new = []
    for i in range(5):
        q, a = an[i]
        q = re.sub(r'^(Find it|Compare it|Infer it|Weigh it|Decide)\.\s*', '', q)
        new.append((HEADS[i] + '. ' + q[0].upper() + q[1:], a))
    s = open(path, encoding='utf-8').read()
    i0 = s.index(' analysis=[')
    j, depth = i0 + len(' analysis=['), 1
    while depth:
        if s[j] == '[':
            depth += 1
        elif s[j] == ']':
            depth -= 1
        j += 1
    lit = ' analysis=[' + ',\n           '.join('(%r, %r)' % (q, a) for q, a in new) + ']'
    open(path, 'w', encoding='utf-8').write(s[:i0] + lit + s[j:])
    print(fn, 'aligned')

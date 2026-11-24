# -*- coding: utf-8 -*-
"""Deterministically rebalance the 2-option MCQ keys of a book and keep the
   ( X / Y ) stem echo in step with the printed option order.
   python3 mcqfix.py B22"""
import sys, os, re, io
code = sys.argv[1]
d = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'units', code)
ITEM = r"\(\s*(?P<q>'(?:[^'\\]|\\.)*')\s*,\s*\[(?P<o>[^\]]*)\]\s*,\s*(?P<k>\d)\s*\)"
for f in sorted(os.listdir(d)):
    m = re.match(r'u(\d\d)\.py$', f)
    if not m:
        continue
    i = int(m.group(1))
    want = {'c_d': i % 2, 'g_b': (i + 1) % 2}
    p = os.path.join(d, f)
    s = io.open(p, encoding='utf-8').read()
    for g in ('c_d', 'g_b'):
        mm = re.search(r'(?P<h>' + g + r'=\[)' + ITEM, s)
        if not mm:
            print('%s %s: first item not found' % (f, g)); continue
        q, o, k = mm.group('q'), mm.group('o'), int(mm.group('k'))
        opts = [x.strip() for x in re.findall(r"'(?:[^'\\]|\\.)*'", o)]
        if len(opts) != 2:
            print('%s %s: not a 2-option item' % (f, g)); continue
        if k != want[g]:
            opts = [opts[1], opts[0]]
            k = 1 - k
        raw = [x[1:-1] for x in opts]
        def ech(mo):
            return '( %s / %s )' % (raw[0], raw[1])
        q2 = re.sub(r'\(\s*[^()/]+?\s*/\s*[^()/]+?\s*\)', ech, q, count=1)
        new = '%s(%s, [%s], %d)' % (mm.group('h'), q2, ', '.join(opts), k)
        s = s[:mm.start()] + new + s[mm.end():]
    io.open(p, 'w', encoding='utf-8').write(s)
print('done', code)

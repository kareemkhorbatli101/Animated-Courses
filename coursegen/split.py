# -*- coding: utf-8 -*-
"""Split over-long sentences in a book's prose fields at a natural connector."""
import ast, io, re, sys, os

CONNS = [', and ', ', so ', '; ', ', but ', ': ', ', because ', ', which ', ', while ']
STATE = {'n': 0}

def words(s):
    return len(s.split())

def split_one(s, cap):
    best = None
    mid = len(s) / 2.0
    for c in CONNS:
        start = 0
        while True:
            i = s.find(c, start)
            if i < 0:
                break
            left, right = s[:i], s[i + len(c):]
            if words(left) >= 7 and words(right) >= 6:
                d = abs(i - mid)
                if best is None or d < best[0]:
                    best = (d, i, c)
            start = i + 1
    if best is None:
        return None
    _, i, c = best
    left = s[:i].rstrip(' ,;:')
    right = s[i + len(c):]
    if c == ', but ':
        right = 'But ' + right
    else:
        right = right[0].upper() + right[1:] if right[:1].islower() else right
    return left + '. ' + right

def tighten(text, cap):
    parts = [p for p in re.split(r'(?<=[.!?])\s+', text) if p]
    out = []
    for p in parts:
        if words(p) > cap:
            r = split_one(p, cap)
            if r:
                STATE['n'] += 1
                out.append(r)
                continue
        out.append(p)
    return ' '.join(out)

def lit(items, indent):
    pad = ' ' * indent
    return '[' + (',\n' + pad).join(ascii(x) if "'" in x else repr(x) for x in items) + ']'

def voices_lit(items, indent):
    pad = ' ' * indent
    return '[' + (',\n' + pad).join('(%r, %r, %r)' % t for t in items) + ']'

def offsets(src):
    lines = src.split(b'\n')
    acc = [0]
    for l in lines:
        acc.append(acc[-1] + len(l) + 1)
    return acc

def span(node, acc):
    return (acc[node.lineno - 1] + node.col_offset,
            acc[node.end_lineno - 1] + node.end_col_offset)

def kw(call, name):
    for k in call.keywords:
        if k.arg == name:
            return k.value
    return None

def process(path, cap):
    src = io.open(path, 'rb').read()
    tree = ast.parse(src.decode('utf-8'))
    acc = offsets(src)
    U = None
    for node in tree.body:
        if isinstance(node, ast.Assign) and getattr(node.targets[0], 'id', '') == 'U':
            U = node.value
    edits = []
    for fld in ('read', 'ext', 't_body'):
        v = kw(U, fld)
        if v is not None:
            edits.append((span(v, acc),
                          lit([tighten(e.value, cap) for e in v.elts], 1).encode('utf-8')))
    case = kw(U, 'case')
    if case is not None:
        for fld in ('brief',):
            v = kw(case, fld)
            if v is not None:
                edits.append((span(v, acc),
                              lit([tighten(e.value, cap) for e in v.elts], 2).encode('utf-8')))
        v = kw(case, 'outcome')
        if v is not None and isinstance(v, ast.Constant):
            edits.append((span(v, acc), (ascii(tighten(v.value, cap))
                          if "'" in v.value else repr(tighten(v.value, cap))).encode('utf-8')))
        v = kw(case, 'voices')
        if v is not None:
            items = [(e.elts[0].value, e.elts[1].value, tighten(e.elts[2].value, cap))
                     for e in v.elts]
            edits.append((span(v, acc), voices_lit(items, 2).encode('utf-8')))
    lang = kw(U, 'lang')
    if lang is not None:
        v = kw(lang, 'setting')
        if v is not None:
            edits.append((span(v, acc),
                          lit([tighten(e.value, cap) for e in v.elts], 2).encode('utf-8')))
    for (a, b), txt in sorted(edits, reverse=True):
        src = src[:a] + txt + src[b:]
    io.open(path, 'wb').write(src)

if __name__ == '__main__':
    d, code, cap = sys.argv[1], sys.argv[2], int(sys.argv[3])
    for n in range(1, 11):
        p = os.path.join(d, 'units', code, 'u%02d.py' % n)
        if os.path.exists(p):
            process(p, cap)
    print('splits made:', STATE['n'])

#!/usr/bin/env python3
"""qa/partial.py <source> — layout and run parity over however much of the twin
is written so far, element for element from the start of the document.
"""
import os, sys, collections
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

HERE = os.path.dirname(os.path.abspath(__file__))
src = sys.argv[1]


def load(name, fn):
    g = {"__file__": os.path.join(HERE, name)}
    exec(open(os.path.join(HERE, name)).read().split("a, b = rows")[0], g)
    return g["rows"], g["INT"]


rows_layout, INT = load("spacing.py", None)
rows_runs, _ = load("runs.py", None)

a, b = rows_layout(src), rows_layout(INT)
n = len(b)
bad = [(i, x, y, t) for i, ((x, t), (y, _)) in enumerate(zip(a, b)) if x != y]
print(f"{n} of {len(a)} elements written;  {len(bad)} differ in layout")
for i, x, y, t in bad[:8]:
    print(f"{i:5}\n   S {x}\n   I {y}   {(t or '(blank)')[:46]}")

a, b = rows_runs(src), rows_runs(INT)
c = collections.Counter(); ex = {}
for i, ((x, t), (y, _)) in enumerate(zip(a, b)):
    fx = tuple(r[:6] for r in x) if x != "TABLE" else x
    fy = tuple(r[:6] for r in y) if y != "TABLE" else y
    if fx == fy:
        continue
    c[(fx, fy)] += 1
    ex.setdefault((fx, fy), (i, t))
print(f"{sum(c.values())} differ in run formatting")
for k, m in c.most_common(6):
    i, t = ex[k]
    print(f"{m:4}x at {i}  {(t or '(blank)')[:48]}\n   S {str(k[0])[:200]}\n   I {str(k[1])[:200]}")

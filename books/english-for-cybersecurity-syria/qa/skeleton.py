#!/usr/bin/env python3
"""qa/skeleton.py <source.txt> <candidate.txt> — element-skeleton parity.

Two content files render to the same elements in the same order when, line for
line, they agree on the tag, on every argument the renderer reads as a number or
a colour, and on how many body lines each block carries.  Prose is ignored; this
is the check that lets a unit be written from scratch rather than edited in
place, and it is the one to run before the document is built at all.
"""
import re, sys

SPACER = re.compile(r"^_(\d+|-)[dp]*$")
NUMISH = re.compile(r"^(\d+|-|[0-9A-Fa-f]{6})$")


def shape(path):
    out, cur = [], None
    for raw in open(path, encoding="utf-8").read().split("\n"):
        s = raw.strip()
        if SPACER.match(s):
            if cur:
                out.append(cur); cur = None
            out.append([s, 0])
            continue
        if raw.startswith("@"):
            if cur:
                out.append(cur)
            head, _, rest = raw[1:].partition(" ")
            args = [a.strip() for a in rest.split(" | ")] if rest else []
            keep = [a for a in args if NUMISH.match(a)]
            cur = ["@" + " ".join([head] + keep), 0]
        elif cur is not None and (s or cur[0] == "@CODE"):
            cur[1] += 1
    if cur:
        out.append(cur)
    return [(t, n) for t, n in out]


a, b = shape(sys.argv[1]), shape(sys.argv[2])
bad = 0
for i in range(max(len(a), len(b))):
    x = a[i] if i < len(a) else ("(none)", 0)
    y = b[i] if i < len(b) else ("(none)", 0)
    if x != y:
        bad += 1
        if bad <= 12:
            print(f"{i:5}  S {x[0]} +{x[1]}   C {y[0]} +{y[1]}")
print(f"{len(a)} source blocks, {len(b)} candidate blocks, {bad} differ")
sys.exit(1 if bad or len(a) != len(b) else 0)

#!/usr/bin/env python3
"""qa/unitdiff.py <src> <int> <N|appB|appA>  -- outline-diff one unit, bounded by Heading1."""
import re, sys, subprocess
sys.path.insert(0, __import__('os').path.dirname(__file__))
import outline as O


def toks(path):
    x, numxml = O.load(path)
    nm = O.nummap(numxml)
    body = x[x.find("<w:body>"):]
    return [t for t in re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b.*?</w:p>", body, re.S)], nm


def rows(path, key):
    ts, nm = toks(path)
    heads = [i for i, t in enumerate(ts)
             if t.startswith("<w:p") and 'w:val="Heading1"' in t]
    pick = None
    for j, i in enumerate(heads):
        if O.txt(ts[i]).startswith(key):
            pick = (i, heads[j + 1] if j + 1 < len(heads) else len(ts))
            break
    if pick is None:
        sys.exit(f"no Heading1 starting {key!r} in {path}")
    out = []
    for t in ts[pick[0]:pick[1]]:
        if t.startswith("<w:tbl>"):
            cells = re.findall(r"<w:tc>.*?</w:tc>", t, re.S)
            w = re.findall(r'<w:gridCol w:w="(\d+)"', t)
            out.append(f"TABLE rows={len(re.findall(r'<w:tr\b', t))} cells={len(cells)} cols={','.join(w)}")
            continue
        s = O.sig(t, nm)
        tx = O.txt(t)
        out.append(f"{s} {'(blank)' if not tx.strip() else ''}")
    return out


a = rows(sys.argv[1], sys.argv[3])
b = rows(sys.argv[2], sys.argv[3])
print(f"src={len(a)} int={len(b)}")
import difflib
n = 0
for l in difflib.unified_diff(a, b, "src", "int", lineterm="", n=1):
    print(l)
    n += 1
    if n > 120:
        print("...")
        break

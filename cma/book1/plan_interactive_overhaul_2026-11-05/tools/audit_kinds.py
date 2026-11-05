"""Audit each registered scene kind: does it accept input, and is it graded?

Boundaries are found by brace-matching from the register( call, so one kind's body
never leaks into the next. Run from the book's assets/ directory.
"""
import re
import glob
import json
import sys

REG = re.compile(r'register\(\s*["\']([a-z0-9_-]+)["\']')


def body_of(src, start):
    """Return the source from `start` to the matching close of its register( call."""
    i = src.index("(", start)
    depth = 0
    in_str = None
    esc = False
    j = i
    while j < len(src):
        c = src[j]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == in_str:
                in_str = None
        elif c in "\"'`":
            in_str = c
        elif c == "(":
            depth += 1
        elif c == ")":
            depth -= 1
            if depth == 0:
                return src[i:j + 1]
        j += 1
    return src[i:]


SIGNALS = [
    ("slider", r'type\s*=\s*\\?["\']range|addEventListener\(\s*["\']input'),
    # drag is usually delegated to the shared Drag() helper in scene.js
    ("drag", r'draggable|dragstart|ondrop|addEventListener\(\s*["\']drop'
             r'|\bDrag\s*\(|\.Drag\b'),
    ("click", r'addEventListener\(\s*["\']click'),
    ("select", r'addEventListener\(\s*["\']change|<select'),
    ("typing", r'addEventListener\(\s*["\']keyup|type\s*=\s*\\?["\']text|contentEditable'),
]

rows = []
for path in sorted(glob.glob("*.js")):
    src = open(path, encoding="utf-8").read()
    for m in REG.finditer(src):
        kind = m.group(1)
        body = body_of(src, m.start())
        inputs = [name for name, sig in SIGNALS if re.search(sig, body)]
        # graded == the returned verdict carries a score out of a total
        graded = bool(re.search(r'score\s*:', body) and re.search(r'total\s*:', body))
        rows.append({
            "kind": kind, "file": path, "bytes": len(body),
            "inputs": inputs, "graded": graded,
        })

rows.sort(key=lambda r: (bool(r["inputs"]), r["graded"], r["kind"]))
print(f"{'kind':12} {'file':18} {'graded':7} {'bytes':>6}  inputs")
for r in rows:
    print(f"{r['kind']:12} {r['file']:18} {str(r['graded']):7} {r['bytes']:>6}  "
          f"{','.join(r['inputs']) or 'NONE'}")

passive = [r["kind"] for r in rows if not r["inputs"]]
print()
print("NO INPUT AT ALL:", passive or "none")
out = sys.argv[1] if len(sys.argv) > 1 else "kind_audit.json"
json.dump(rows, open(out, "w", encoding="utf-8"), indent=1)
print("wrote", out)

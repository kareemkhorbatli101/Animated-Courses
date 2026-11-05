"""Classify each registered scene kind by WHAT its score measures.

A scene is PASSIVE if its score counts things the learner opened, clicked or looked
at; ACTIVE if the score counts correct decisions. Prints the score expression and
verdict strings so the call can be checked by eye rather than trusted.

Usage: python -I classify_kinds.py      (run from the book's assets/ directory)
"""
import glob
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BACKSLASH = chr(92)
QUOTES = "\"'`"

# score expressions that count looking rather than knowing
PASSIVE_SCORE = re.compile(
    r"score\s*:\s*(0\b|n\b|seen|opened|read|Object\.keys)", re.I)
PASSIVE_VERDICT = re.compile(
    r'(Looked at|All read|of\s*"\s*\+|read"|" read)', re.I)
CORRECT = re.compile(r"\bcorrect\b|\bok\s*\?\s*1|right\b", re.I)


def body_of(src, start):
    i = src.index("(", start)
    depth, in_str, esc, j = 0, None, False, i
    while j < len(src):
        c = src[j]
        if in_str:
            if esc:
                esc = False
            elif c == BACKSLASH:
                esc = True
            elif c == in_str:
                in_str = None
        elif c in QUOTES:
            in_str = c
        elif c == "(":
            depth += 1
        elif c == ")":
            depth -= 1
            if depth == 0:
                return src[i:j + 1]
        j += 1
    return src[i:]


rows = []
for path in sorted(glob.glob("*.js")):
    src = open(path, encoding="utf-8").read()
    for m in re.finditer(r'register\(\s*["\']([a-z0-9_-]+)["\']', src):
        kind = m.group(1)
        body = body_of(src, m.start())
        scores = re.findall(r"score\s*:\s*([^,\n]{0,60})", body)
        verdicts = re.findall(r'verdict\s*:\s*([^,\n]{0,70})', body)
        passive = bool(PASSIVE_SCORE.search(body)) and not CORRECT.search(body)
        rows.append((kind, path, passive, scores, verdicts))

print(f"{'kind':12} {'verdict':8}  score expression(s)")
print("-" * 78)
for kind, path, passive, scores, verdicts in sorted(rows, key=lambda r: (not r[2], r[0])):
    tag = "PASSIVE" if passive else "active"
    print(f"{kind:12} {tag:8}  {' | '.join(s.strip() for s in scores) or '(none)'}")
    for v in verdicts:
        print(f"{'':12} {'':8}  verdict: {v.strip()}")

print()
print("PASSIVE kinds:", [r[0] for r in rows if r[2]])

#!/usr/bin/env python3
"""qa/tasks.py — per-task-slot formatting comparison against the source.

For every task slot of every unit it prints the sequence of paragraph kinds
(p=plain, b=bullet, s=sub-bullet, n=numbered, T=table) in the source and in the
International Edition, and flags the slots where they differ.
"""
import os, re, sys, zipfile
sys.path.insert(0, "qa")
from outline import load, nummap, txt

# The source book's unzipped document.xml; override with ACC_SRC.
SRC = os.environ.get("ACC_SRC", "src/word/document.xml")
OUT = "dist/EnglishForAccountants_International_StudentBook.docx"
SLOT = re.compile(r"^(Task \d|\dA\.|\dB\.|\dC\.|\dD\.|\dE\.|\dF\.)")

def slots(path):
    x, numxml = load(path)
    nm = nummap(numxml)
    body = x[x.find("<w:body>"):]
    toks = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b.*?</w:p>", body, re.S)
    units, unit, cur, key = {}, None, None, None
    for t in toks:
        s = txt(t).strip()
        m = re.match(r"\U0001F4CD UNIT (\d+):", s)
        if m:
            unit = int(m.group(1)); units[unit] = {}
            continue
        if unit is None:
            continue
        if s.startswith("\U0001F4DA") or s.startswith("Appendix"):
            unit = None; continue
        if SLOT.match(s):
            key = s.split(":")[0].split(".")[0].strip()
            if re.match(r"^Task \d", s):
                key = s[:6]
            cur = units[unit].setdefault(key, [])
            continue
        if cur is None or not s:
            continue
        if t.startswith("<w:tbl>"):
            cur.append("T"); continue
        if 'w:type="page"' in t:
            continue
        m = re.search(r'numId w:val="(\d+)"', t)
        if not m:
            cur.append("p")
        elif nm.get(m.group(1)) == "decimal":
            cur.append("n")
        else:
            cur.append("s" if 'ilvl w:val="1"' in t else "b")
    return units

def main():
    a, b = slots(SRC), slots(OUT)
    bad = 0
    for u in sorted(a):
        rows = []
        for k in a[u]:
            x = "".join(a[u][k]); y = "".join(b.get(u, {}).get(k, []))
            if x != y:
                rows.append((k, x, y)); bad += 1
        if rows:
            print(f"--- Unit {u}")
            for k, x, y in rows:
                print(f"  {k:8} src {x:32} intl {y}")
    print(f"\n{bad} task slots differ")
    return 1 if bad else 0

if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""qa/answers.py — per-answer word-count parity inside Appendix B.
Pairs the nth answer paragraph of the source with the nth of the twin.
"""
import os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import outline as O

INT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "dist",
                   "EnglishForNGOsAndInternationalOrganizations_International_StudentBook_A2.docx")


def answers(p):
    x, n = O.load(p)
    nm = O.nummap(n)
    ts = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)",
                    x[x.find("<w:body>"):], re.S)
    h1 = [i for i, t in enumerate(ts) if t.startswith("<w:p") and 'Heading1"' in t]
    s = next(i for i in h1 if O.txt(ts[i]).startswith("Appendix B"))
    e = next(i for i in h1 if i > s)
    out, unit, head, q = [], "", "", ""
    for t in ts[s:e]:
        if t.startswith("<w:tbl>"):
            continue
        sig, tx = O.sig(t, nm), O.txt(t)
        if "Heading2" in sig:
            unit = tx.split(":")[0]
        elif "0066CC  B" in sig:
            head = tx.split(":")[0]
        elif "F8FFF8" in sig:
            if tx.strip() != "—":
                out.append((f"{unit} {head} {q}", len(tx.split())))
        elif "500" in sig and "F8FFF8" not in sig:
            q = tx.replace(" - Sample Answer:", "").replace("Sample Answer:", "Q")
    return out


a, b = answers(sys.argv[1]), answers(INT)
print(f"source answers {len(a)}  twin {len(b)}")
assert len(a) == len(b)
short = [(i, k, x, y) for i, ((k, x), (_, y)) in enumerate(zip(a, b)) if y - x < -8]
print(f"{len(short)} answer(s) more than 20 words short\n")
for i, k, x, y in short:
    print(f"{i:4} {k:46} {x:4} -> {y:4}  {y - x:+5}")
print(f"\ntotal {sum(y for _, y in b)} vs {sum(y for _, y in a)}"
      f"  ({sum(y for _, y in b) / sum(y for _, y in a) * 100:.1f}%)")

#!/usr/bin/env python3
"""qa/spacing.py <source> — positional diff of every paragraph's full layout:
style, fill, border, list, size, colour, page break, spacing and indent.
"""
import os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import outline as O

INT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "dist",
                   "EnglishForContentCreators_Syria_StudentBook_A2.docx")


def rows(p):
    x, n = O.load(p)
    nm = O.nummap(n)
    ts = re.findall(r"<w:tbl>.*?</w:tbl>|<w:p\b(?:[^>]*/>|.*?</w:p>)",
                    x[x.find("<w:body>"):], re.S)
    out = []
    for t in ts:
        if t.startswith("<w:tbl>"):
            out.append((f"TABLE rows={len(re.findall(r'<w:tr\\b', t))} "
                        f"cells={len(re.findall(r'<w:tc>', t))}", ""))
            continue
        pr = re.search(r"<w:pPr>.*?</w:pPr>", t, re.S)
        pr = pr.group(0) if pr else ""
        sp = re.search(r"<w:spacing([^/]*)/>", pr)
        ind = re.search(r"<w:ind([^/]*)/>", pr)
        key = (O.sig(t, nm) + " | " + (sp.group(1).strip() if sp else "-")
               + " | " + (ind.group(1).strip() if ind else "-"))
        out.append((key, O.txt(t)))
    return out


a, b = rows(sys.argv[1]), rows(INT)
print(f"elements  source {len(a)}  twin {len(b)}")
bad = [(i, x, y) for i, ((x, _), (y, _)) in enumerate(zip(a, b)) if x != y]
print(f"{len(bad)} element(s) differ in layout")
for i, x, y in bad[:40]:
    print(f"{i:5}  S {x}\n       I {y}   {(a[i][1] or '(blank)')[:50]}")
